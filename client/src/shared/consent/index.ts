export { CookieConsentProvider } from './CookieConsentProvider';
export { useCookieConsent } from './useCookieConsent';
export { default as CookieBanner } from './CookieBanner';
export {
  CONSENT_COOKIE_KEY,
  CONSENT_SCHEMA_VERSION,
  CONSENT_MAX_AGE_SECONDS,
  parseConsentFromCookieHeader,
  parseConsentPayload,
  readConsentCookie,
  type ConsentState,
} from './cookieConsent';
export {
  enableExternalAnalytics,
  enableExternalMarketing,
} from './analyticsBootstrap';
