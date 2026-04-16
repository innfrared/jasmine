#!/bin/sh
set -eu

BASE_URL="${BASE_URL:-https://jasminecrafted.vercel.app}"
ALLOWED_HOST="${ALLOWED_HOST:-jasminecrafted.vercel.app}"
INVALID_HOST="${INVALID_HOST:-attacker.invalid}"
EXPECTED_LOCALE="${EXPECTED_LOCALE:-en}"
PROTECTED_PATH="${PROTECTED_PATH:-/${EXPECTED_LOCALE}/profile}"
ENFORCE_HOST_BLOCK="${ENFORCE_HOST_BLOCK:-1}"

fail() {
  echo "FAIL: $1" >&2
  exit 1
}

status_code() {
  url="$1"
  shift
  curl -sS -o /dev/null -w "%{http_code}" "$@" "$url"
}

response_headers() {
  url="$1"
  shift
  curl -sS -D - -o /dev/null "$@" "$url"
}

echo "Running security smoke checks against ${BASE_URL}"

valid_status="$(status_code "${BASE_URL}/${EXPECTED_LOCALE}" -H "Host: ${ALLOWED_HOST}")"
[ "${valid_status}" -lt 500 ] || fail "valid host request returned ${valid_status}"
echo "PASS: valid host accepted (${valid_status})"

if [ "${ENFORCE_HOST_BLOCK}" = "1" ]; then
  invalid_host_status="$(status_code "${BASE_URL}/${EXPECTED_LOCALE}" -H "Host: ${INVALID_HOST}")"
  [ "${invalid_host_status}" = "421" ] || fail "invalid host should return 421, got ${invalid_host_status}"
  echo "PASS: invalid host blocked (${invalid_host_status})"
else
  echo "SKIP: invalid host check (ENFORCE_HOST_BLOCK=${ENFORCE_HOST_BLOCK})"
fi

method_status="$(status_code "${BASE_URL}/${EXPECTED_LOCALE}" -X POST -H "Host: ${ALLOWED_HOST}")"
[ "${method_status}" = "405" ] || fail "POST on page route should return 405, got ${method_status}"
echo "PASS: unsupported method blocked (${method_status})"

auth_headers="$(response_headers "${BASE_URL}${PROTECTED_PATH}" -H "Host: ${ALLOWED_HOST}")"
auth_status="$(printf '%s\n' "${auth_headers}" | awk 'toupper($1) ~ /^HTTP\// {code=$2} END {print code}')"
auth_location="$(printf '%s\n' "${auth_headers}" | awk 'tolower($1)=="location:" {print $2}' | tr -d '\r' | tail -n 1)"
[ "${auth_status}" = "307" ] || [ "${auth_status}" = "308" ] || fail "protected route should redirect, got ${auth_status}"
printf '%s' "${auth_location}" | grep -q "${EXPECTED_LOCALE}" || fail "protected route redirect missing locale"
printf '%s' "${auth_location}" | grep -q "next=" || fail "protected route redirect missing next return param"
echo "PASS: protected route redirects unauthenticated requests (${auth_status})"

invalid_locale_headers="$(response_headers "${BASE_URL}/fr/test" -H "Host: ${ALLOWED_HOST}" -H "Accept-Language: ${EXPECTED_LOCALE}")"
invalid_locale_status="$(printf '%s\n' "${invalid_locale_headers}" | awk 'toupper($1) ~ /^HTTP\// {code=$2} END {print code}')"
invalid_locale_location="$(printf '%s\n' "${invalid_locale_headers}" | awk 'tolower($1)=="location:" {print $2}' | tr -d '\r' | tail -n 1)"
[ "${invalid_locale_status}" = "307" ] || [ "${invalid_locale_status}" = "308" ] || fail "invalid locale path should redirect, got ${invalid_locale_status}"
printf '%s' "${invalid_locale_location}" | grep -q "/${EXPECTED_LOCALE}/test" || fail "invalid locale redirect target is incorrect: ${invalid_locale_location}"
echo "PASS: invalid locale normalization works (${invalid_locale_status})"

headers="$(response_headers "${BASE_URL}/${EXPECTED_LOCALE}" -H "Host: ${ALLOWED_HOST}")"
printf '%s\n' "${headers}" | grep -qi '^x-content-type-options: nosniff' || fail "missing X-Content-Type-Options header"
printf '%s\n' "${headers}" | grep -qi '^x-frame-options: SAMEORIGIN' || fail "missing X-Frame-Options header"
printf '%s\n' "${headers}" | grep -qi '^referrer-policy: strict-origin-when-cross-origin' || fail "missing Referrer-Policy header"
printf '%s\n' "${headers}" | grep -qi '^permissions-policy:' || fail "missing Permissions-Policy header"
printf '%s\n' "${headers}" | grep -qi '^strict-transport-security:' || fail "missing HSTS header"
echo "PASS: security headers present"

echo "All security smoke checks passed."
