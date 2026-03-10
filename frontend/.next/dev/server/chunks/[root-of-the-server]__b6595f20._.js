module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/service/httpClient.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiError",
    ()=>ApiError,
    "getApiBaseUrl",
    ()=>getApiBaseUrl,
    "httpClient",
    ()=>httpClient
]);
class ApiError extends Error {
    status;
    payload;
    constructor(status, message, payload){
        super(message);
        this.status = status;
        this.payload = payload;
    }
}
const resolveBaseUrl = ()=>{
    const isServer = ("TURBOPACK compile-time value", "undefined") === 'undefined';
    const resolved = ("TURBOPACK compile-time truthy", 1) ? process.env.API_URL || ("TURBOPACK compile-time value", "https://jcd-backend.onrender.com/api") : "TURBOPACK unreachable";
    return (resolved || 'http://localhost:8000/api').replace(/\/+$/, '');
};
const baseUrl = resolveBaseUrl();
const getApiBaseUrl = ()=>resolveBaseUrl();
const buildUrl = (path, query)=>{
    const urlPath = `/${path}`.replace(/\/+/, '/').replace(/\/{2,}/g, '/');
    const params = new URLSearchParams();
    if (query) {
        Object.entries(query).forEach(([key, value])=>{
            if (value === undefined || value === null) return;
            params.append(key, String(value));
        });
    }
    const qs = params.toString();
    return qs ? `${baseUrl}${urlPath}?${qs}` : `${baseUrl}${urlPath}`;
};
const parseResponse = async (res)=>{
    if (res.status === 204) {
        return undefined;
    }
    const text = await res.text();
    if (!text) return undefined;
    try {
        return JSON.parse(text);
    } catch  {
        return text;
    }
};
const buildErrorMessage = (payload, fallback)=>{
    if (!payload) return fallback;
    if (typeof payload === 'string') return payload;
    const maybe = payload;
    return maybe.error || maybe.message || fallback;
};
const request = async (method, path, options = {})=>{
    const { body, token, query, timeoutMs = 12000, next, cache, headers } = options;
    const controller = new AbortController();
    const timeout = setTimeout(()=>controller.abort(), timeoutMs);
    const requestHeaders = {
        Accept: 'application/json',
        ...headers
    };
    if (body) requestHeaders['Content-Type'] = 'application/json';
    if (token) requestHeaders.Authorization = `Bearer ${token}`;
    try {
        const requestInit = {
            method,
            headers: requestHeaders,
            body: body ? JSON.stringify(body) : undefined,
            signal: controller.signal,
            cache,
            next
        };
        const url = buildUrl(path, query);
        console.log('HTTP', method, url);
        const response = await fetch(url, requestInit);
        console.log('STATUS', response.status, url);
        const payload = await parseResponse(response);
        if (!response.ok) {
            const message = buildErrorMessage(payload, response.statusText || 'Request failed');
            throw new ApiError(response.status, message, payload);
        }
        return payload;
    } catch (error) {
        if (error instanceof ApiError) throw error;
        if (error instanceof DOMException && error.name === 'AbortError') {
            throw new ApiError(408, 'Request timed out');
        }
        throw error;
    } finally{
        clearTimeout(timeout);
    }
};
const httpClient = {
    get: (path, options)=>request('GET', path, options),
    post: (path, options)=>request('POST', path, options),
    patch: (path, options)=>request('PATCH', path, options),
    delete: (path, options)=>request('DELETE', path, options)
};
}),
"[project]/Desktop/Dev/jasmine/frontend/src/service/apiClient.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$httpClient$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/service/httpClient.ts [app-route] (ecmascript)");
;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/service/httpClient.ts [app-route] (ecmascript) <export httpClient as apiClient>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiClient",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$httpClient$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["httpClient"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$httpClient$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/service/httpClient.ts [app-route] (ecmascript)");
}),
"[project]/Desktop/Dev/jasmine/frontend/src/service/sessionClient.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sessionFetch",
    ()=>sessionFetch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$httpClient$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/service/httpClient.ts [app-route] (ecmascript)");
;
const getSessionBaseUrl = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    return siteUrl.replace(/\/+$/, '');
};
const buildSessionUrl = (path)=>{
    const normalized = path.startsWith('/') ? path : `/${path}`;
    return `${getSessionBaseUrl()}${normalized}`;
};
const parseResponse = async (res)=>{
    if (res.status === 204) return undefined;
    const text = await res.text();
    if (!text) return undefined;
    try {
        return JSON.parse(text);
    } catch  {
        return text;
    }
};
const buildErrorMessage = (payload, fallback)=>{
    if (!payload) return fallback;
    if (typeof payload === 'string') return payload;
    const maybe = payload;
    return maybe.error || maybe.message || fallback;
};
const sessionFetch = async (path, options = {})=>{
    const { headers, ...rest } = options;
    const res = await fetch(buildSessionUrl(path), {
        ...rest,
        cache: options.cache ?? 'no-store',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            ...options.body ? {
                'Content-Type': 'application/json'
            } : {},
            ...headers || {}
        }
    });
    const payload = await parseResponse(res);
    if (!res.ok) {
        const message = buildErrorMessage(payload, res.statusText || 'Request failed');
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$httpClient$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"](res.status, message, payload);
    }
    return payload;
};
}),
"[project]/Desktop/Dev/jasmine/frontend/src/service/userService.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMe",
    ()=>getMe,
    "getMeSession",
    ()=>getMeSession,
    "updateProfile",
    ()=>updateProfile,
    "updateProfileSession",
    ()=>updateProfileSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$apiClient$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/service/apiClient.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$httpClient$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__httpClient__as__apiClient$3e$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/service/httpClient.ts [app-route] (ecmascript) <export httpClient as apiClient>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$sessionClient$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/service/sessionClient.ts [app-route] (ecmascript)");
;
;
const getMe = (token, options = {})=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$httpClient$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__httpClient__as__apiClient$3e$__["apiClient"].get('me/', {
        token,
        ...options
    });
const updateProfile = (payload, token)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$httpClient$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__httpClient__as__apiClient$3e$__["apiClient"].patch('me/', {
        body: payload,
        token
    });
const getMeSession = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$sessionClient$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sessionFetch"])('/api/me');
const updateProfileSession = (payload)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$sessionClient$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sessionFetch"])('/api/me', {
        method: 'PATCH',
        body: JSON.stringify(payload)
    });
}),
"[project]/Desktop/Dev/jasmine/frontend/src/service/authService.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "login",
    ()=>login,
    "refresh",
    ()=>refresh,
    "register",
    ()=>register
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$apiClient$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/service/apiClient.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$httpClient$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__httpClient__as__apiClient$3e$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/service/httpClient.ts [app-route] (ecmascript) <export httpClient as apiClient>");
;
const register = (payload)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$httpClient$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__httpClient__as__apiClient$3e$__["apiClient"].post('auth/register/', {
        body: payload
    });
const login = (payload)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$httpClient$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__httpClient__as__apiClient$3e$__["apiClient"].post('auth/login/', {
        body: payload
    });
const refresh = (refreshToken)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$httpClient$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__httpClient__as__apiClient$3e$__["apiClient"].post('auth/refresh/', {
        body: {
            refresh: refreshToken
        }
    });
}),
"[project]/Desktop/Dev/jasmine/frontend/src/service/authServer.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AUTH_COOKIES",
    ()=>AUTH_COOKIES,
    "clearAuthCookies",
    ()=>clearAuthCookies,
    "getAccessTokenFromCookies",
    ()=>getAccessTokenFromCookies,
    "getRefreshTokenFromCookies",
    ()=>getRefreshTokenFromCookies,
    "getServerSession",
    ()=>getServerSession,
    "refreshServerSession",
    ()=>refreshServerSession,
    "setAuthCookies",
    ()=>setAuthCookies
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/server-only/empty.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$httpClient$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/service/httpClient.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$userService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/service/userService.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$authService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/service/authService.ts [app-route] (ecmascript)");
;
;
;
;
;
const AUTH_COOKIES = {
    access: 'jc_access',
    refresh: 'jc_refresh'
};
const isProd = ("TURBOPACK compile-time value", "development") === 'production';
const accessCookieOptions = {
    httpOnly: true,
    sameSite: 'lax',
    secure: isProd,
    path: '/',
    maxAge: 60 * 60
};
const refreshCookieOptions = {
    httpOnly: true,
    sameSite: 'lax',
    secure: isProd,
    path: '/',
    maxAge: 60 * 60 * 24 * 30
};
const getAccessTokenFromCookies = async ()=>{
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    return cookieStore.get(AUTH_COOKIES.access)?.value ?? null;
};
const getRefreshTokenFromCookies = async ()=>{
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    return cookieStore.get(AUTH_COOKIES.refresh)?.value ?? null;
};
const setAuthCookies = (response, tokens)=>{
    response.cookies.set(AUTH_COOKIES.access, tokens.access, accessCookieOptions);
    response.cookies.set(AUTH_COOKIES.refresh, tokens.refresh, refreshCookieOptions);
};
const clearAuthCookies = (response)=>{
    response.cookies.set(AUTH_COOKIES.access, '', {
        ...accessCookieOptions,
        maxAge: 0
    });
    response.cookies.set(AUTH_COOKIES.refresh, '', {
        ...refreshCookieOptions,
        maxAge: 0
    });
};
const getServerSession = async ()=>{
    const access = await getAccessTokenFromCookies();
    if (!access) return null;
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$userService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getMe"])(access, {
            cache: 'no-store'
        });
    } catch (error) {
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$httpClient$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"] && error.status === 401) {
            return null;
        }
        return null;
    }
};
const refreshServerSession = async ()=>{
    const refreshToken = await getRefreshTokenFromCookies();
    if (!refreshToken) return null;
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$authService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refresh"])(refreshToken);
    } catch  {
        return null;
    }
};
}),
"[project]/Desktop/Dev/jasmine/frontend/app/api/auth/session/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$httpClient$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/service/httpClient.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$userService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/service/userService.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$authServer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/service/authServer.ts [app-route] (ecmascript)");
;
;
;
;
async function GET() {
    const access = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$authServer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAccessTokenFromCookies"])();
    const refreshToken = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$authServer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRefreshTokenFromCookies"])();
    if (!access && !refreshToken) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            user: null
        }, {
            status: 200
        });
    }
    if (access) {
        try {
            const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$userService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getMe"])(access, {
                cache: 'no-store'
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                user
            });
        } catch (error) {
            if (!(error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$httpClient$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"]) || error.status !== 401) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    user: null
                }, {
                    status: 200
                });
            }
        }
    }
    if (!refreshToken) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            user: null
        }, {
            status: 200
        });
    }
    try {
        const tokens = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$authServer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refreshServerSession"])();
        if (!tokens) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                user: null
            }, {
                status: 200
            });
        }
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$userService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getMe"])(tokens.access, {
            cache: 'no-store'
        });
        const response = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            user
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$authServer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setAuthCookies"])(response, tokens);
        return response;
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            user: null
        }, {
            status: 200
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b6595f20._.js.map