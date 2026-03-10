module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/service/httpClient.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/Dev/jasmine/frontend/src/service/sessionClient.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sessionFetch",
    ()=>sessionFetch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$httpClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/service/httpClient.ts [app-ssr] (ecmascript)");
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
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$httpClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiError"](res.status, message, payload);
    }
    return payload;
};
}),
"[project]/Desktop/Dev/jasmine/frontend/src/service/authSession.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSessionUser",
    ()=>getSessionUser,
    "loginSession",
    ()=>loginSession,
    "logoutSession",
    ()=>logoutSession,
    "registerSession",
    ()=>registerSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$sessionClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/service/sessionClient.ts [app-ssr] (ecmascript)");
;
const loginSession = (payload)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$sessionClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sessionFetch"])('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(payload)
    });
const registerSession = (payload)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$sessionClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sessionFetch"])('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(payload)
    });
const logoutSession = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$sessionClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sessionFetch"])('/api/auth/logout', {
        method: 'POST'
    });
const getSessionUser = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$sessionClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sessionFetch"])('/api/auth/session', {
        method: 'GET'
    });
}),
"[project]/Desktop/Dev/jasmine/frontend/src/context/AuthContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$authSession$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/service/authSession.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useAuth = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
const AuthProvider = ({ children })=>{
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const loadUser = async ()=>{
        try {
            const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$authSession$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSessionUser"])();
            setUser(session.user ?? null);
        } catch  {
            setUser(null);
        } finally{
            setIsLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadUser();
        const handleLogout = ()=>{
            void logout();
        };
        window.addEventListener('auth:logout', handleLogout);
        return ()=>{
            window.removeEventListener('auth:logout', handleLogout);
        };
    }, []);
    const login = async (payload)=>{
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$authSession$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loginSession"])(payload);
        setUser(result.user ?? null);
    };
    const register = async (payload)=>{
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$authSession$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerSession"])(payload);
        setUser(result.user ?? null);
    };
    const logout = async ()=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$authSession$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logoutSession"])();
        setUser(null);
    };
    const updateUser = (updatedUser)=>{
        setUser(updatedUser);
    };
    const refreshUser = async ()=>{
        try {
            const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$authSession$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSessionUser"])();
            setUser(session.user ?? null);
        } catch  {
            setUser(null);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            isLoading,
            isAuthenticated: !!user,
            login,
            register,
            logout,
            updateUser,
            refreshUser
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/context/AuthContext.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__dfe48b98._.js.map