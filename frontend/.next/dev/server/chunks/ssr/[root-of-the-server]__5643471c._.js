module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Desktop/Dev/jasmine/frontend/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/Dev/jasmine/frontend/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/app/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/Dev/jasmine/frontend/src/lib/locale.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_LOCALE",
    ()=>DEFAULT_LOCALE,
    "SUPPORTED_LOCALES",
    ()=>SUPPORTED_LOCALES,
    "isSupportedLocale",
    ()=>isSupportedLocale,
    "normalizeLocale",
    ()=>normalizeLocale,
    "withLocale",
    ()=>withLocale
]);
const SUPPORTED_LOCALES = [
    'en',
    'am',
    'ru'
];
const DEFAULT_LOCALE = 'en';
const isSupportedLocale = (value)=>!!value && SUPPORTED_LOCALES.includes(value);
const normalizeLocale = (value)=>{
    const normalized = Array.isArray(value) ? value[0] : value;
    return isSupportedLocale(normalized) ? normalized : DEFAULT_LOCALE;
};
const withLocale = (locale, path)=>{
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    if (normalizedPath === '/' || normalizedPath === `/${locale}`) {
        return `/${locale}`;
    }
    return `/${locale}${normalizedPath}`;
};
}),
"[project]/Desktop/Dev/jasmine/frontend/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/lib/locale.ts [app-rsc] (ecmascript)");
;
;
function RootPage() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(`/${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_LOCALE"]}`);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5643471c._.js.map