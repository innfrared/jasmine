(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Dev/jasmine/frontend/src/service/httpClient.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiError",
    ()=>ApiError,
    "getApiBaseUrl",
    ()=>getApiBaseUrl,
    "httpClient",
    ()=>httpClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_call_super.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_inherits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_instanceof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_wrap_native_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_wrap_native_super.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
;
;
;
;
;
;
;
;
;
;
;
var ApiError = /*#__PURE__*/ function(Error1) {
    "use strict";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(ApiError, Error1);
    function ApiError(status, message, payload) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, ApiError);
        var _this;
        _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, ApiError, [
            message
        ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_this, "status", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_this, "payload", void 0);
        _this.status = status;
        _this.payload = payload;
        return _this;
    }
    return ApiError;
}((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_wrap_native_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Error));
var resolveBaseUrl = function() {
    var isServer = ("TURBOPACK compile-time value", "object") === 'undefined';
    var resolved = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ("TURBOPACK compile-time value", "https://jcd-backend.onrender.com/api");
    return (resolved || 'http://localhost:8000/api').replace(/\/+$/, '');
};
var baseUrl = resolveBaseUrl();
var getApiBaseUrl = function() {
    return resolveBaseUrl();
};
var buildUrl = function(path, query) {
    var urlPath = "/".concat(path).replace(/\/+/, '/').replace(/\/{2,}/g, '/');
    var params = new URLSearchParams();
    if (query) {
        Object.entries(query).forEach(function(param) {
            var _param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), key = _param[0], value = _param[1];
            if (value === undefined || value === null) return;
            params.append(key, String(value));
        });
    }
    var qs = params.toString();
    return qs ? "".concat(baseUrl).concat(urlPath, "?").concat(qs) : "".concat(baseUrl).concat(urlPath);
};
var parseResponse = function(res) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
        var text;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (res.status === 204) {
                        return [
                            2,
                            undefined
                        ];
                    }
                    return [
                        4,
                        res.text()
                    ];
                case 1:
                    text = _state.sent();
                    if (!text) return [
                        2,
                        undefined
                    ];
                    try {
                        return [
                            2,
                            JSON.parse(text)
                        ];
                    } catch (unused) {
                        return [
                            2,
                            text
                        ];
                    }
                    return [
                        2
                    ];
            }
        });
    })();
};
var buildErrorMessage = function(payload, fallback) {
    if (!payload) return fallback;
    if (typeof payload === 'string') return payload;
    var maybe = payload;
    return maybe.error || maybe.message || fallback;
};
var request = function(method, path) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
        var body, token, query, _options_timeoutMs, timeoutMs, next, cache, headers, controller, timeout, requestHeaders, requestInit, url, response, payload, message, error;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
            switch(_state.label){
                case 0:
                    body = options.body, token = options.token, query = options.query, _options_timeoutMs = options.timeoutMs, timeoutMs = _options_timeoutMs === void 0 ? 12000 : _options_timeoutMs, next = options.next, cache = options.cache, headers = options.headers;
                    controller = new AbortController();
                    timeout = setTimeout(function() {
                        return controller.abort();
                    }, timeoutMs);
                    requestHeaders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                        Accept: 'application/json'
                    }, headers);
                    if (body) requestHeaders['Content-Type'] = 'application/json';
                    if (token) requestHeaders.Authorization = "Bearer ".concat(token);
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        4,
                        5,
                        6
                    ]);
                    requestInit = {
                        method: method,
                        headers: requestHeaders,
                        body: body ? JSON.stringify(body) : undefined,
                        signal: controller.signal,
                        cache: cache,
                        next: next
                    };
                    url = buildUrl(path, query);
                    console.log('HTTP', method, url);
                    return [
                        4,
                        fetch(url, requestInit)
                    ];
                case 2:
                    response = _state.sent();
                    console.log('STATUS', response.status, url);
                    return [
                        4,
                        parseResponse(response)
                    ];
                case 3:
                    payload = _state.sent();
                    if (!response.ok) {
                        message = buildErrorMessage(payload, response.statusText || 'Request failed');
                        throw new ApiError(response.status, message, payload);
                    }
                    return [
                        2,
                        payload
                    ];
                case 4:
                    error = _state.sent();
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(error, ApiError)) throw error;
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(error, DOMException) && error.name === 'AbortError') {
                        throw new ApiError(408, 'Request timed out');
                    }
                    throw error;
                case 5:
                    clearTimeout(timeout);
                    return [
                        7
                    ];
                case 6:
                    return [
                        2
                    ];
            }
        });
    })();
};
var httpClient = {
    get: function(path, options) {
        return request('GET', path, options);
    },
    post: function(path, options) {
        return request('POST', path, options);
    },
    patch: function(path, options) {
        return request('PATCH', path, options);
    },
    delete: function(path, options) {
        return request('DELETE', path, options);
    }
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/service/sessionClient.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sessionFetch",
    ()=>sessionFetch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_object_without_properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$httpClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/service/httpClient.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
var getSessionBaseUrl = function() {
    if ("TURBOPACK compile-time truthy", 1) return '';
    //TURBOPACK unreachable
    ;
    var siteUrl;
};
var buildSessionUrl = function(path) {
    var normalized = path.startsWith('/') ? path : "/".concat(path);
    return "".concat(getSessionBaseUrl()).concat(normalized);
};
var parseResponse = function(res) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
        var text;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (res.status === 204) return [
                        2,
                        undefined
                    ];
                    return [
                        4,
                        res.text()
                    ];
                case 1:
                    text = _state.sent();
                    if (!text) return [
                        2,
                        undefined
                    ];
                    try {
                        return [
                            2,
                            JSON.parse(text)
                        ];
                    } catch (unused) {
                        return [
                            2,
                            text
                        ];
                    }
                    return [
                        2
                    ];
            }
        });
    })();
};
var buildErrorMessage = function(payload, fallback) {
    if (!payload) return fallback;
    if (typeof payload === 'string') return payload;
    var maybe = payload;
    return maybe.error || maybe.message || fallback;
};
var sessionFetch = function(path) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
        var _options_cache, headers, rest, res, payload, message;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
            switch(_state.label){
                case 0:
                    headers = options.headers, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(options, [
                        "headers"
                    ]);
                    return [
                        4,
                        fetch(buildSessionUrl(path), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, rest), {
                            cache: (_options_cache = options.cache) !== null && _options_cache !== void 0 ? _options_cache : 'no-store',
                            credentials: 'include',
                            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                                Accept: 'application/json'
                            }, options.body ? {
                                'Content-Type': 'application/json'
                            } : {}, headers || {})
                        }))
                    ];
                case 1:
                    res = _state.sent();
                    return [
                        4,
                        parseResponse(res)
                    ];
                case 2:
                    payload = _state.sent();
                    if (!res.ok) {
                        message = buildErrorMessage(payload, res.statusText || 'Request failed');
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$httpClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiError"](res.status, message, payload);
                    }
                    return [
                        2,
                        payload
                    ];
            }
        });
    })();
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/service/authSession.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$sessionClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/service/sessionClient.ts [app-client] (ecmascript)");
;
;
var loginSession = function(payload) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$sessionClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sessionFetch"])('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(payload)
    });
};
var registerSession = function(payload) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$sessionClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sessionFetch"])('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(payload)
    });
};
var logoutSession = function() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$sessionClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sessionFetch"])('/api/auth/logout', {
        method: 'POST'
    });
};
var getSessionUser = function() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$sessionClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sessionFetch"])('/api/auth/session', {
        method: 'GET'
    });
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/context/AuthContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$authSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/service/authSession.ts [app-client] (ecmascript)");
;
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
var AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
var useAuth = function() {
    _s();
    var context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
_s(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var AuthProvider = function(param) {
    var children = param.children;
    _s1();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), user = _useState[0], setUser = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true), 2), isLoading = _useState1[0], setIsLoading = _useState1[1];
    var loadUser = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
            var _session_user, session, unused;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _state.trys.push([
                            0,
                            2,
                            3,
                            4
                        ]);
                        return [
                            4,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$authSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionUser"])()
                        ];
                    case 1:
                        session = _state.sent();
                        setUser((_session_user = session.user) !== null && _session_user !== void 0 ? _session_user : null);
                        return [
                            3,
                            4
                        ];
                    case 2:
                        unused = _state.sent();
                        setUser(null);
                        return [
                            3,
                            4
                        ];
                    case 3:
                        setIsLoading(false);
                        return [
                            7
                        ];
                    case 4:
                        return [
                            2
                        ];
                }
            });
        })();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": function() {
            loadUser();
            var handleLogout = {
                "AuthProvider.useEffect.handleLogout": function() {
                    void logout();
                }
            }["AuthProvider.useEffect.handleLogout"];
            window.addEventListener('auth:logout', handleLogout);
            return ({
                "AuthProvider.useEffect": function() {
                    window.removeEventListener('auth:logout', handleLogout);
                }
            })["AuthProvider.useEffect"];
        }
    }["AuthProvider.useEffect"], []);
    var login = function(payload) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
            var _result_user, result;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$authSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loginSession"])(payload)
                        ];
                    case 1:
                        result = _state.sent();
                        setUser((_result_user = result.user) !== null && _result_user !== void 0 ? _result_user : null);
                        return [
                            2
                        ];
                }
            });
        })();
    };
    var register = function(payload) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
            var _result_user, result;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$authSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerSession"])(payload)
                        ];
                    case 1:
                        result = _state.sent();
                        setUser((_result_user = result.user) !== null && _result_user !== void 0 ? _result_user : null);
                        return [
                            2
                        ];
                }
            });
        })();
    };
    var logout = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$authSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logoutSession"])()
                        ];
                    case 1:
                        _state.sent();
                        setUser(null);
                        return [
                            2
                        ];
                }
            });
        })();
    };
    var updateUser = function(updatedUser) {
        setUser(updatedUser);
    };
    var refreshUser = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
            var _session_user, session, unused;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _state.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]);
                        return [
                            4,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$authSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionUser"])()
                        ];
                    case 1:
                        session = _state.sent();
                        setUser((_session_user = session.user) !== null && _session_user !== void 0 ? _session_user : null);
                        return [
                            3,
                            3
                        ];
                    case 2:
                        unused = _state.sent();
                        setUser(null);
                        return [
                            3,
                            3
                        ];
                    case 3:
                        return [
                            2
                        ];
                }
            });
        })();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user: user,
            isLoading: isLoading,
            isAuthenticated: !!user,
            login: login,
            register: register,
            logout: logout,
            updateUser: updateUser,
            refreshUser: refreshUser
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/context/AuthContext.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, _this);
};
_s1(AuthProvider, "YajQB7LURzRD+QP5gw0+K2TZIWA=");
_c = AuthProvider;
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_async_to_generator
]);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
;
}),
"[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_array_with_holes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_array_with_holes
]);
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
;
}),
"[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_iterable_to_array_limit.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_iterable_to_array_limit
]);
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
;
}),
"[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_non_iterable_rest.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_non_iterable_rest
]);
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;
}),
"[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_array_like_to_array.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_array_like_to_array
]);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
;
}),
"[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_unsupported_iterable_to_array.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_unsupported_iterable_to_array
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_like_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_array_like_to_array.js [app-client] (ecmascript)");
;
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_like_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_like_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(o, minLen);
}
;
}),
"[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_sliced_to_array
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_with_holes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_array_with_holes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_iterable_to_array_limit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_iterable_to_array_limit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_non_iterable_rest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_non_iterable_rest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_unsupported_iterable_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_unsupported_iterable_to_array.js [app-client] (ecmascript)");
;
;
;
;
function _sliced_to_array(arr, i) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_with_holes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arr) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_iterable_to_array_limit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arr, i) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_unsupported_iterable_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arr, i) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_non_iterable_rest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])();
}
;
}),
"[project]/Desktop/Dev/jasmine/frontend/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
}),
"[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
var _type_of = __turbopack_context__.r("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === (typeof type === "undefined" ? "undefined" : _type_of._(type))) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === (typeof type === "undefined" ? "undefined" : _type_of._(type)) && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === (typeof node === "undefined" ? "undefined" : _type_of._(node)) && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === (typeof object === "undefined" ? "undefined" : _type_of._(object)) && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function createTask() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function react_stack_bottom_frame(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_define_property
]);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
;
}),
"[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_object_spread
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
;
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(target, key, source[key]);
        });
    }
    return target;
}
;
}),
"[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_object_spread_props
]);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
;
}),
"[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_object_without_properties_loose.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_object_without_properties_loose
]);
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
;
}),
"[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_object_without_properties.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_object_without_properties
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties_loose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_object_without_properties_loose.js [app-client] (ecmascript)");
;
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties_loose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
;
}),
"[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_get_prototype_of.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_get_prototype_of
]);
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
;
}),
"[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_is_native_reflect_construct.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_is_native_reflect_construct
]);
function _is_native_reflect_construct() {
    // Since Reflect.construct can't be properly polyfilled, some
    // implementations (e.g. core-js@2) don't set the correct internal slots.
    // Those polyfills don't allow us to subclass built-ins, so we need to
    // use our fallback implementation.
    try {
        // If the internal slots aren't set, this throws an error similar to
        //   TypeError: this is not a Boolean object.
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function _is_native_reflect_construct() {
        return !!result;
    })();
}
;
}),
"[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_assert_this_initialized.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_assert_this_initialized
]);
function _assert_this_initialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
;
}),
"[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_possible_constructor_return.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_possible_constructor_return
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_assert_this_initialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_assert_this_initialized.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
;
function _possible_constructor_return(self, call) {
    if (call && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(call) === "object" || typeof call === "function")) return call;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_assert_this_initialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(self);
}
;
}),
"[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_call_super.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_call_super
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_get_prototype_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_is_native_reflect_construct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_is_native_reflect_construct.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_possible_constructor_return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_possible_constructor_return.js [app-client] (ecmascript)");
;
;
;
function _call_super(_this, derived, args) {
    // Super
    derived = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(derived);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_possible_constructor_return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_is_native_reflect_construct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])() ? Reflect.construct(derived, args || [], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_this).constructor) : derived.apply(_this, args));
}
;
}),
"[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_call_check
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_instanceof.js [app-client] (ecmascript)");
;
function _class_call_check(instance, Constructor) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(instance, Constructor)) throw new TypeError("Cannot call a class as a function");
}
;
}),
"[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_set_prototype_of.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_set_prototype_of
]);
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
;
}),
"[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_inherits.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_inherits
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_set_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_set_prototype_of.js [app-client] (ecmascript)");
;
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_set_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(subClass, superClass);
}
;
}),
"[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_construct.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_construct
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_is_native_reflect_construct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_is_native_reflect_construct.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_set_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_set_prototype_of.js [app-client] (ecmascript)");
;
;
function _construct(Parent, args, Class) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_is_native_reflect_construct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])()) _construct = Reflect.construct;
    else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_set_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
}
;
}),
"[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_is_native_function.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_is_native_function
]);
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
;
}),
"[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_wrap_native_super.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_wrap_native_super
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_construct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_construct.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_get_prototype_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_is_native_function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_is_native_function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_set_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_set_prototype_of.js [app-client] (ecmascript)");
;
;
;
;
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function _wrap_native_super(Class) {
        if (Class === null || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_is_native_function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Class)) return Class;
        if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_construct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Class, arguments, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_set_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
;
}),
]);

//# sourceMappingURL=Desktop_Dev_jasmine_frontend_08f92bc6._.js.map