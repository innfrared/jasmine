(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Dev/jasmine/frontend/src/service/categoriesService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "listCategories",
    ()=>listCategories,
    "listCategoriesWithSubcategories",
    ()=>listCategoriesWithSubcategories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$httpClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/service/httpClient.ts [app-client] (ecmascript)");
;
;
var listCategories = function() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$httpClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["httpClient"].get('categories', options);
};
var listCategoriesWithSubcategories = function() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$httpClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["httpClient"].get('categories/all/', options);
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/service/categoryService.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$categoriesService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/service/categoriesService.ts [app-client] (ecmascript)");
;
;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/model/categoryModel.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mapCategoryDtoToNav",
    ()=>mapCategoryDtoToNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
var mapCategoryDtoToNav = function(category) {
    var _category_subcategories;
    return {
        id: category.id,
        name: category.name,
        url: category.slug,
        subcategories: ((_category_subcategories = category.subcategories) === null || _category_subcategories === void 0 ? void 0 : _category_subcategories.map(function(subcategory) {
            return {
                id: subcategory.id,
                name: subcategory.name,
                url: subcategory.slug,
                parent_id: subcategory.category_id
            };
        })) || []
    };
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/hooks/useCategories.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCategories",
    ()=>useCategories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$categoryService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/service/categoryService.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$categoriesService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/service/categoriesService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$model$2f$categoryModel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/model/categoryModel.ts [app-client] (ecmascript)");
;
;
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
var useCategories = function() {
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), 2), categories = _useState[0], setCategories = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true), 2), loading = _useState1[0], setLoading = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), error = _useState2[0], setError = _useState2[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCategories.useEffect": function() {
            var isMounted = true;
            var loadCategories = {
                "useCategories.useEffect.loadCategories": function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                        "useCategories.useEffect.loadCategories": function() {
                            var data, unused;
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, {
                                "useCategories.useEffect.loadCategories": function(_state) {
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
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$categoriesService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listCategoriesWithSubcategories"])()
                                            ];
                                        case 1:
                                            data = _state.sent();
                                            if (!isMounted) return [
                                                2
                                            ];
                                            setCategories(data.map(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$model$2f$categoryModel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapCategoryDtoToNav"]));
                                            return [
                                                3,
                                                4
                                            ];
                                        case 2:
                                            unused = _state.sent();
                                            if (!isMounted) return [
                                                2
                                            ];
                                            setError('Failed to load categories');
                                            return [
                                                3,
                                                4
                                            ];
                                        case 3:
                                            if (isMounted) setLoading(false);
                                            return [
                                                7
                                            ];
                                        case 4:
                                            return [
                                                2
                                            ];
                                    }
                                }
                            }["useCategories.useEffect.loadCategories"]);
                        }
                    }["useCategories.useEffect.loadCategories"])();
                }
            }["useCategories.useEffect.loadCategories"];
            loadCategories();
            return ({
                "useCategories.useEffect": function() {
                    isMounted = false;
                }
            })["useCategories.useEffect"];
        }
    }["useCategories.useEffect"], []);
    return {
        categories: categories,
        loading: loading,
        error: error
    };
};
_s(useCategories, "PEFWK5NudK8G7IEShrERrFoV+TY=");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/HeaderModel.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHeaderModel",
    ()=>useHeaderModel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$hooks$2f$useCategories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/hooks/useCategories.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
var useHeaderModel = function() {
    _s();
    var _useCategories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$hooks$2f$useCategories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCategories"])(), categories = _useCategories.categories, loading = _useCategories.loading, error = _useCategories.error;
    return {
        categories: categories,
        loading: loading,
        error: error
    };
};
_s(useHeaderModel, "bSXpEfQkOpJYmWGwXHHdNQXOVa8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$hooks$2f$useCategories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCategories"]
    ];
});
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CloseButton",
    ()=>CloseButton,
    "Divider",
    ()=>Divider,
    "ErrorMessage",
    ()=>ErrorMessage,
    "Form",
    ()=>Form,
    "Input",
    ()=>Input,
    "InputGroup",
    ()=>InputGroup,
    "Label",
    ()=>Label,
    "Modal",
    ()=>Modal,
    "Overlay",
    ()=>Overlay,
    "SocialButton",
    ()=>SocialButton,
    "SocialButtons",
    ()=>SocialButtons,
    "SubmitButton",
    ()=>SubmitButton,
    "SwitchLink",
    ()=>SwitchLink,
    "SwitchText",
    ()=>SwitchText,
    "Title",
    ()=>Title
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
;
function _templateObject() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  from {\n    transform: translateY(30px) scale(0.95);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n  }\n"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100vw;\n  height: 100vh;\n  min-height: 100vh;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  animation: ",
        " 0.2s ease-out;\n  padding: 1rem;\n  overflow: auto;\n"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  background: white;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 440px;\n  padding: 2.5rem;\n  position: relative;\n  box-shadow:\n    0 24px 64px rgba(0, 0, 0, 0.2),\n    0 8px 16px rgba(0, 0, 0, 0.1);\n  animation: ",
        " 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n  font-family: 'Questrial', sans-serif;\n  max-height: 90vh;\n  overflow-y: auto;\n  border: 1px solid rgba(0, 0, 0, 0.04);\n\n  @media (max-width: 480px) {\n    padding: 2rem 1.5rem;\n    max-width: 100%;\n    border-radius: 10px;\n  }\n"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: absolute;\n  top: 1.5rem;\n  right: 1.5rem;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #666;\n  padding: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n\n  &:hover {\n    background: #f5f5f5;\n    color: #333;\n  }\n\n  svg {\n    width: 20px;\n    height: 20px;\n  }\n"
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  font-size: 2rem;\n  font-weight: 600;\n  margin: 0 0 2rem;\n  color: #1a1a1a;\n  text-align: center;\n  font-family: 'Questrial', sans-serif;\n"
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n"
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n"
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: #333;\n"
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  padding: 0.875rem 1rem;\n  border: 1.5px solid #e0e0e0;\n  border-radius: 10px;\n  font-size: 1rem;\n  font-family: 'Questrial', sans-serif;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  outline: none;\n  background: #fafafa;\n\n  &:focus {\n    border-color: #001f3f;\n    box-shadow: 0 0 0 4px rgba(0, 31, 63, 0.08);\n    background: white;\n    transform: translateY(-1px);\n  }\n\n  &::placeholder {\n    color: #999;\n  }\n"
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject10() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  color: #e74c3c;\n  font-size: 0.875rem;\n  padding: 0.75rem;\n  background: #fee;\n  border-radius: 8px;\n  border: 1px solid #fcc;\n"
    ]);
    _templateObject10 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject11() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  padding: 1rem 1.5rem;\n  background: #001f3f;\n  color: white;\n  border: none;\n  border-radius: 10px;\n  font-size: 1rem;\n  font-weight: 600;\n  font-family: 'Questrial', sans-serif;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  margin-top: 0.5rem;\n  letter-spacing: 0.3px;\n  position: relative;\n  overflow: hidden;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: -100%;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.1),\n      transparent\n    );\n    transition: left 0.5s ease;\n  }\n\n  &:hover:not(:disabled) {\n    background: #003366;\n    transform: translateY(-2px);\n    box-shadow: 0 8px 24px rgba(0, 31, 63, 0.3);\n  }\n\n  &:hover:not(:disabled)::before {\n    left: 100%;\n  }\n\n  &:active:not(:disabled) {\n    transform: translateY(0);\n  }\n\n  &:disabled {\n    opacity: 0.6;\n    cursor: not-allowed;\n    transform: none;\n  }\n"
    ]);
    _templateObject11 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject12() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  align-items: center;\n  text-align: center;\n  margin: 2rem 0;\n  color: #999;\n  font-size: 0.875rem;\n\n  &::before,\n  &::after {\n    content: '';\n    flex: 1;\n    border-bottom: 1px solid #e0e0e0;\n  }\n\n  span {\n    padding: 0 1rem;\n  }\n"
    ]);
    _templateObject12 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject13() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n"
    ]);
    _templateObject13 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject14() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  padding: 0.875rem 1.5rem;\n  border: 1.5px solid #e0e0e0;\n  border-radius: 8px;\n  background: white;\n  color: #333;\n  font-size: 0.95rem;\n  font-weight: 500;\n  font-family: 'Questrial', sans-serif;\n  cursor: pointer;\n  transition: all 0.2s ease;\n\n  &:hover {\n    border-color: #d4af37;\n    background: #fafafa;\n    transform: translateY(-1px);\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  }\n\n  svg {\n    width: 20px;\n    height: 20px;\n  }\n"
    ]);
    _templateObject14 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject15() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  text-align: center;\n  margin: 2rem 0 0;\n  color: #666;\n  font-size: 0.9rem;\n"
    ]);
    _templateObject15 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject16() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  color: #1a1a1a;\n  text-decoration: none;\n  font-weight: 500;\n  transition: color 0.2s ease;\n\n  &:hover {\n    color: #d4af37;\n    text-decoration: underline;\n  }\n"
    ]);
    _templateObject16 = function _templateObject() {
        return data;
    };
    return data;
}
;
var fadeIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"])(_templateObject());
var slideUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"])(_templateObject1());
var Overlay = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "RegisterPopup.styles__Overlay",
    componentId: "sc-890305ec-0"
})(_templateObject2(), fadeIn);
var Modal = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "RegisterPopup.styles__Modal",
    componentId: "sc-890305ec-1"
})(_templateObject3(), slideUp);
var CloseButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "RegisterPopup.styles__CloseButton",
    componentId: "sc-890305ec-2"
})(_templateObject4());
var Title = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h2.withConfig({
    displayName: "RegisterPopup.styles__Title",
    componentId: "sc-890305ec-3"
})(_templateObject5());
var Form = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].form.withConfig({
    displayName: "RegisterPopup.styles__Form",
    componentId: "sc-890305ec-4"
})(_templateObject6());
var InputGroup = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "RegisterPopup.styles__InputGroup",
    componentId: "sc-890305ec-5"
})(_templateObject7());
var Label = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].label.withConfig({
    displayName: "RegisterPopup.styles__Label",
    componentId: "sc-890305ec-6"
})(_templateObject8());
var Input = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input.withConfig({
    displayName: "RegisterPopup.styles__Input",
    componentId: "sc-890305ec-7"
})(_templateObject9());
var ErrorMessage = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "RegisterPopup.styles__ErrorMessage",
    componentId: "sc-890305ec-8"
})(_templateObject10());
var SubmitButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "RegisterPopup.styles__SubmitButton",
    componentId: "sc-890305ec-9"
})(_templateObject11());
var Divider = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "RegisterPopup.styles__Divider",
    componentId: "sc-890305ec-10"
})(_templateObject12());
var SocialButtons = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "RegisterPopup.styles__SocialButtons",
    componentId: "sc-890305ec-11"
})(_templateObject13());
var SocialButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "RegisterPopup.styles__SocialButton",
    componentId: "sc-890305ec-12"
})(_templateObject14());
var SwitchText = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "RegisterPopup.styles__SwitchText",
    componentId: "sc-890305ec-13"
})(_templateObject15());
var SwitchLink = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].a.withConfig({
    displayName: "RegisterPopup.styles__SwitchLink",
    componentId: "sc-890305ec-14"
})(_templateObject16());
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_instanceof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/context/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.styles.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
var RegisterPopup = function(param) {
    var onClose = param.onClose, onOpenLogin = param.onOpenLogin;
    _s();
    var _useAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])(), authRegister = _useAuth.register;
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    }), 2), formData = _useState[0], setFormData = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), 2), error = _useState1[0], setError = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isLoading = _useState2[0], setIsLoading = _useState2[1];
    var handleChange = function(e) {
        setFormData((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, formData), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, e.target.name, e.target.value)));
    };
    var handleSubmit = function(e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
            var err, message;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                switch(_state.label){
                    case 0:
                        e.preventDefault();
                        setError('');
                        if (formData.password !== formData.confirmPassword) {
                            setError('Passwords do not match');
                            return [
                                2
                            ];
                        }
                        if (formData.password.length < 6) {
                            setError('Password must be at least 6 characters');
                            return [
                                2
                            ];
                        }
                        setIsLoading(true);
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            4,
                            5
                        ]);
                        return [
                            4,
                            authRegister({
                                email: formData.email,
                                password: formData.password,
                                first_name: formData.firstName || null,
                                last_name: formData.lastName || null,
                                phone: formData.phone || null
                            })
                        ];
                    case 2:
                        _state.sent();
                        setError('');
                        onClose();
                        return [
                            3,
                            5
                        ];
                    case 3:
                        err = _state.sent();
                        message = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(err, Error) ? err.message : 'Failed to create account. Please try again.';
                        setError(message);
                        return [
                            3,
                            5
                        ];
                    case 4:
                        setIsLoading(false);
                        return [
                            7
                        ];
                    case 5:
                        return [
                            2
                        ];
                }
            });
        })();
    };
    var handleOverlayClick = function(e) {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        onClick: handleOverlayClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloseButton"], {
                    onClick: onClose,
                    "aria-label": "Close",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "18",
                                y1: "6",
                                x2: "6",
                                y2: "18"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "6",
                                y1: "6",
                                x2: "18",
                                y2: "18"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                    children: "Create Account"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Form"], {
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "firstName",
                                    children: "First Name"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "firstName",
                                    name: "firstName",
                                    type: "text",
                                    value: formData.firstName,
                                    onChange: handleChange,
                                    placeholder: "Enter your first name"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "lastName",
                                    children: "Last Name"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "lastName",
                                    name: "lastName",
                                    type: "text",
                                    value: formData.lastName,
                                    onChange: handleChange,
                                    placeholder: "Enter your last name"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "email",
                                    children: "Email *"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "email",
                                    name: "email",
                                    type: "email",
                                    value: formData.email,
                                    onChange: handleChange,
                                    placeholder: "Enter your email",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "phone",
                                    children: "Phone"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "phone",
                                    name: "phone",
                                    type: "tel",
                                    value: formData.phone,
                                    onChange: handleChange,
                                    placeholder: "Enter your phone number"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "password",
                                    children: "Password *"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "password",
                                    name: "password",
                                    type: "password",
                                    value: formData.password,
                                    onChange: handleChange,
                                    placeholder: "Create a password",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "confirmPassword",
                                    children: "Confirm Password *"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "confirmPassword",
                                    name: "confirmPassword",
                                    type: "password",
                                    value: formData.confirmPassword,
                                    onChange: handleChange,
                                    placeholder: "Confirm your password",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, _this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorMessage"], {
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                            lineNumber: 189,
                            columnNumber: 21
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubmitButton"], {
                            type: "submit",
                            disabled: isLoading,
                            children: isLoading ? 'Creating account...' : 'Sign Up'
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Divider"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "or continue with"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                    lineNumber: 196,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocialButtons"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocialButton"], {
                        type: "button",
                        variant: "google",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 24 24",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fill: "currentColor",
                                        d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                                        lineNumber: 203,
                                        columnNumber: 15
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fill: "currentColor",
                                        d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                                        lineNumber: 207,
                                        columnNumber: 15
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fill: "currentColor",
                                        d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fill: "currentColor",
                                        d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                                        lineNumber: 215,
                                        columnNumber: 15
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                                lineNumber: 202,
                                columnNumber: 13
                            }, _this),
                            "Google"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                        lineNumber: 201,
                        columnNumber: 11
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                    lineNumber: 200,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwitchText"], {
                    children: [
                        "Already have an account?",
                        ' ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwitchLink"], {
                            href: "#",
                            onClick: function(e) {
                                e.preventDefault();
                                onClose();
                                if (onOpenLogin) {
                                    onOpenLogin();
                                }
                            },
                            children: "Sign in"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                            lineNumber: 226,
                            columnNumber: 11
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                    lineNumber: 224,
                    columnNumber: 9
                }, _this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
            lineNumber: 96,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, _this);
};
_s(RegisterPopup, "pazLmgCubuTtwwRSJPK+oiO8b9I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = RegisterPopup;
const __TURBOPACK__default__export__ = RegisterPopup;
var _c;
__turbopack_context__.k.register(_c, "RegisterPopup");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CloseButton",
    ()=>CloseButton,
    "Divider",
    ()=>Divider,
    "ErrorMessage",
    ()=>ErrorMessage,
    "Form",
    ()=>Form,
    "Input",
    ()=>Input,
    "InputGroup",
    ()=>InputGroup,
    "Label",
    ()=>Label,
    "Modal",
    ()=>Modal,
    "Overlay",
    ()=>Overlay,
    "SocialButton",
    ()=>SocialButton,
    "SocialButtons",
    ()=>SocialButtons,
    "SubmitButton",
    ()=>SubmitButton,
    "SwitchLink",
    ()=>SwitchLink,
    "SwitchText",
    ()=>SwitchText,
    "Title",
    ()=>Title
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
;
function _templateObject() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  from {\n    transform: translateY(30px) scale(0.95);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n  }\n"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100vw;\n  height: 100vh;\n  min-height: 100vh;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  animation: ",
        " 0.2s ease-out;\n  padding: 1rem;\n  overflow: auto;\n"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  background: white;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 440px;\n  padding: 2.5rem;\n  position: relative;\n  box-shadow:\n    0 24px 64px rgba(0, 0, 0, 0.2),\n    0 8px 16px rgba(0, 0, 0, 0.1);\n  animation: ",
        " 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n  font-family: 'Questrial', sans-serif;\n  border: 1px solid rgba(0, 0, 0, 0.04);\n\n  @media (max-width: 480px) {\n    padding: 2rem 1.5rem;\n    max-width: 100%;\n    border-radius: 10px;\n  }\n"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: absolute;\n  top: 1.5rem;\n  right: 1.5rem;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #666;\n  padding: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n\n  &:hover {\n    background: #f5f5f5;\n    color: #333;\n  }\n\n  svg {\n    width: 20px;\n    height: 20px;\n  }\n"
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  font-size: 2rem;\n  font-weight: 600;\n  margin: 0 0 2rem;\n  color: #1a1a1a;\n  text-align: center;\n  font-family: 'Questrial', sans-serif;\n"
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n"
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n"
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: #333;\n"
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  padding: 0.875rem 1rem;\n  border: 1.5px solid #e0e0e0;\n  border-radius: 10px;\n  font-size: 1rem;\n  font-family: 'Questrial', sans-serif;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  outline: none;\n  background: #fafafa;\n\n  &:focus {\n    border-color: #001f3f;\n    box-shadow: 0 0 0 4px rgba(0, 31, 63, 0.08);\n    background: white;\n    transform: translateY(-1px);\n  }\n\n  &::placeholder {\n    color: #999;\n  }\n"
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject10() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  color: #e74c3c;\n  font-size: 0.875rem;\n  padding: 0.75rem;\n  background: #fee;\n  border-radius: 8px;\n  border: 1px solid #fcc;\n"
    ]);
    _templateObject10 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject11() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  padding: 1rem 1.5rem;\n  background: #001f3f;\n  color: white;\n  border: none;\n  border-radius: 10px;\n  font-size: 1rem;\n  font-weight: 600;\n  font-family: 'Questrial', sans-serif;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  margin-top: 0.5rem;\n  letter-spacing: 0.3px;\n  position: relative;\n  overflow: hidden;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: -100%;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.1),\n      transparent\n    );\n    transition: left 0.5s ease;\n  }\n\n  &:hover:not(:disabled) {\n    background: #003366;\n    transform: translateY(-2px);\n    box-shadow: 0 8px 24px rgba(0, 31, 63, 0.3);\n  }\n\n  &:hover:not(:disabled)::before {\n    left: 100%;\n  }\n\n  &:active:not(:disabled) {\n    transform: translateY(0);\n  }\n\n  &:disabled {\n    opacity: 0.6;\n    cursor: not-allowed;\n    transform: none;\n  }\n"
    ]);
    _templateObject11 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject12() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  align-items: center;\n  text-align: center;\n  margin: 2rem 0;\n  color: #999;\n  font-size: 0.875rem;\n\n  &::before,\n  &::after {\n    content: '';\n    flex: 1;\n    border-bottom: 1px solid #e0e0e0;\n  }\n\n  span {\n    padding: 0 1rem;\n  }\n"
    ]);
    _templateObject12 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject13() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n"
    ]);
    _templateObject13 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject14() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  padding: 0.875rem 1.5rem;\n  border: 1.5px solid #e0e0e0;\n  border-radius: 8px;\n  background: white;\n  color: #333;\n  font-size: 0.95rem;\n  font-weight: 500;\n  font-family: 'Questrial', sans-serif;\n  cursor: pointer;\n  transition: all 0.2s ease;\n\n  &:hover {\n    border-color: #d4af37;\n    background: #fafafa;\n    transform: translateY(-1px);\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  }\n\n  svg {\n    width: 20px;\n    height: 20px;\n  }\n"
    ]);
    _templateObject14 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject15() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  text-align: center;\n  margin: 2rem 0 0;\n  color: #666;\n  font-size: 0.9rem;\n"
    ]);
    _templateObject15 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject16() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  color: #1a1a1a;\n  text-decoration: none;\n  font-weight: 500;\n  transition: color 0.2s ease;\n\n  &:hover {\n    color: #d4af37;\n    text-decoration: underline;\n  }\n"
    ]);
    _templateObject16 = function _templateObject() {
        return data;
    };
    return data;
}
;
var fadeIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"])(_templateObject());
var slideUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"])(_templateObject1());
var Overlay = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LoginPopup.styles__Overlay",
    componentId: "sc-83ba8e96-0"
})(_templateObject2(), fadeIn);
var Modal = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LoginPopup.styles__Modal",
    componentId: "sc-83ba8e96-1"
})(_templateObject3(), slideUp);
var CloseButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "LoginPopup.styles__CloseButton",
    componentId: "sc-83ba8e96-2"
})(_templateObject4());
var Title = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h2.withConfig({
    displayName: "LoginPopup.styles__Title",
    componentId: "sc-83ba8e96-3"
})(_templateObject5());
var Form = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].form.withConfig({
    displayName: "LoginPopup.styles__Form",
    componentId: "sc-83ba8e96-4"
})(_templateObject6());
var InputGroup = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LoginPopup.styles__InputGroup",
    componentId: "sc-83ba8e96-5"
})(_templateObject7());
var Label = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].label.withConfig({
    displayName: "LoginPopup.styles__Label",
    componentId: "sc-83ba8e96-6"
})(_templateObject8());
var Input = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input.withConfig({
    displayName: "LoginPopup.styles__Input",
    componentId: "sc-83ba8e96-7"
})(_templateObject9());
var ErrorMessage = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LoginPopup.styles__ErrorMessage",
    componentId: "sc-83ba8e96-8"
})(_templateObject10());
var SubmitButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "LoginPopup.styles__SubmitButton",
    componentId: "sc-83ba8e96-9"
})(_templateObject11());
var Divider = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LoginPopup.styles__Divider",
    componentId: "sc-83ba8e96-10"
})(_templateObject12());
var SocialButtons = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LoginPopup.styles__SocialButtons",
    componentId: "sc-83ba8e96-11"
})(_templateObject13());
var SocialButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "LoginPopup.styles__SocialButton",
    componentId: "sc-83ba8e96-12"
})(_templateObject14());
var SwitchText = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "LoginPopup.styles__SwitchText",
    componentId: "sc-83ba8e96-13"
})(_templateObject15());
var SwitchLink = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].a.withConfig({
    displayName: "LoginPopup.styles__SwitchLink",
    componentId: "sc-83ba8e96-14"
})(_templateObject16());
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_instanceof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/context/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.styles.ts [app-client] (ecmascript)");
;
;
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
var LoginPopup = function(param) {
    var onClose = param.onClose, onOpenRegister = param.onOpenRegister;
    _s();
    var _useAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])(), authLogin = _useAuth.login;
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), 2), email = _useState[0], setEmail = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), 2), password = _useState1[0], setPassword = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), 2), error = _useState2[0], setError = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isLoading = _useState3[0], setIsLoading = _useState3[1];
    var handleSubmit = function(e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
            var err, message;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                switch(_state.label){
                    case 0:
                        e.preventDefault();
                        setError('');
                        setIsLoading(true);
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            4,
                            5
                        ]);
                        return [
                            4,
                            authLogin({
                                email: email,
                                password: password
                            })
                        ];
                    case 2:
                        _state.sent();
                        setError('');
                        onClose();
                        return [
                            3,
                            5
                        ];
                    case 3:
                        err = _state.sent();
                        message = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(err, Error) ? err.message : 'Failed to sign in. Please check your credentials.';
                        setError(message);
                        return [
                            3,
                            5
                        ];
                    case 4:
                        setIsLoading(false);
                        return [
                            7
                        ];
                    case 5:
                        return [
                            2
                        ];
                }
            });
        })();
    };
    var handleOverlayClick = function(e) {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        onClick: handleOverlayClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloseButton"], {
                    onClick: onClose,
                    "aria-label": "Close",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "18",
                                y1: "6",
                                x2: "6",
                                y2: "18"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "6",
                                y1: "6",
                                x2: "18",
                                y2: "18"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                    children: "Welcome Back"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Form"], {
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "email",
                                    children: "Email"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "email",
                                    type: "email",
                                    value: email,
                                    onChange: function(e) {
                                        return setEmail(e.target.value);
                                    },
                                    placeholder: "Enter your email",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "password",
                                    children: "Password"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "password",
                                    type: "password",
                                    value: password,
                                    onChange: function(e) {
                                        return setPassword(e.target.value);
                                    },
                                    placeholder: "Enter your password",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, _this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorMessage"], {
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                            lineNumber: 105,
                            columnNumber: 21
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubmitButton"], {
                            type: "submit",
                            disabled: isLoading,
                            children: isLoading ? 'Signing in...' : 'Sign In'
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Divider"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "or continue with"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocialButtons"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocialButton"], {
                        type: "button",
                        variant: "google",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 24 24",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fill: "currentColor",
                                        d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fill: "currentColor",
                                        d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fill: "currentColor",
                                        d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fill: "currentColor",
                                        d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, _this),
                            "Google"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwitchText"], {
                    children: [
                        "Don't have an account?",
                        ' ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwitchLink"], {
                            href: "#",
                            onClick: function(e) {
                                e.preventDefault();
                                onClose();
                                if (onOpenRegister) {
                                    onOpenRegister();
                                }
                            },
                            children: "Sign up"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, _this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, _this);
};
_s(LoginPopup, "/SvQcnaw/J5Ms/9lHTOmeUicuos=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = LoginPopup;
const __TURBOPACK__default__export__ = LoginPopup;
var _c;
__turbopack_context__.k.register(_c, "LoginPopup");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/utils/imageUtils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getImageUrl",
    ()=>getImageUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$httpClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/service/httpClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
;
;
;
var getMediaBaseUrl = function() {
    var envBase = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_MEDIA_BASE_URL || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_ASSET_BASE_URL || '';
    if (envBase) return envBase.replace(/\/+$/, '');
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$httpClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiBaseUrl"])().replace(/\/api\/?$/, '');
};
var getImageUrl = function(imageUrl) {
    if (!imageUrl) {
        return '';
    }
    if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
        return imageUrl;
    }
    if (imageUrl.startsWith('assets/') || imageUrl.startsWith('/assets/')) {
        return imageUrl.startsWith('/') ? imageUrl : "/".concat(imageUrl);
    }
    var baseUrl = getMediaBaseUrl();
    var normalizedUrl = imageUrl.startsWith('/') ? imageUrl : "/".concat(imageUrl);
    return "".concat(baseUrl).concat(normalizedUrl);
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartFooter",
    ()=>CartFooter,
    "CartItem",
    ()=>CartItem,
    "CartItemBagId",
    ()=>CartItemBagId,
    "CartItemDetails",
    ()=>CartItemDetails,
    "CartItemImage",
    ()=>CartItemImage,
    "CartItemName",
    ()=>CartItemName,
    "CartItemPrice",
    ()=>CartItemPrice,
    "CartItemQuantity",
    ()=>CartItemQuantity,
    "CartItemRemove",
    ()=>CartItemRemove,
    "CartItemsList",
    ()=>CartItemsList,
    "CartModalContainer",
    ()=>CartModalContainer,
    "CartModalHeader",
    ()=>CartModalHeader,
    "CartModalTitle",
    ()=>CartModalTitle,
    "CartTotal",
    ()=>CartTotal,
    "CheckoutButton",
    ()=>CheckoutButton,
    "CloseButton",
    ()=>CloseButton,
    "EmptyCartMessage",
    ()=>EmptyCartMessage,
    "QuantityButton",
    ()=>QuantityButton,
    "QuantityControls",
    ()=>QuantityControls,
    "QuantityInput",
    ()=>QuantityInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
;
function _templateObject() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  from {\n    opacity: 0;\n    transform: translateY(-12px) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  from {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n  to {\n    opacity: 0;\n    transform: translateY(-12px) scale(0.96);\n  }\n"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: absolute;\n  top: calc(100% + 0.75rem);\n  right: 0;\n  background: white;\n  border-radius: 10px;\n  width: 420px;\n  max-width: calc(100vw - 2rem);\n  max-height: 500px;\n  display: flex;\n  flex-direction: column;\n  box-shadow:\n    0 8px 32px rgba(0, 0, 0, 0.08),\n    0 2px 8px rgba(0, 0, 0, 0.04);\n  z-index: 10001;\n  animation: ",
        "\n    0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  overflow: hidden;\n  will-change: transform, opacity;\n\n  @media (max-width: 768px) {\n    right: 1rem;\n    width: calc(100vw - 2rem);\n    max-width: 420px;\n    max-height: 70vh;\n    border-radius: 8px;\n  }\n"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 1.25rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.04);\n  animation: ",
        " 0.3s ease-out 0.1s both;\n"
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  color: #1a1a1a;\n  font-family: 'Questrial', sans-serif;\n  letter-spacing: -0.1px;\n"
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n  color: #666;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n\n  &:hover {\n    background: rgba(0, 0, 0, 0.06);\n    color: #1a1a1a;\n    transform: rotate(90deg);\n  }\n\n  &:active {\n    transform: rotate(90deg) scale(0.95);\n  }\n\n  svg {\n    display: block;\n    transition: transform 0.2s ease;\n  }\n"
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  flex: 1;\n  overflow-y: auto;\n  padding: 0.25rem 0;\n  scrollbar-width: thin;\n  scrollbar-color: rgba(0, 0, 0, 0.15) transparent;\n\n  &::-webkit-scrollbar {\n    width: 6px;\n  }\n\n  &::-webkit-scrollbar-track {\n    background: transparent;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background: rgba(0, 0, 0, 0.2);\n    border-radius: 6px;\n  }\n"
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  padding: 0.875rem 1.25rem;\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.03);\n\n  &:last-of-type {\n    border-bottom: none;\n  }\n\n  &:hover {\n    background: rgba(212, 175, 55, 0.02);\n  }\n"
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 56px;\n  height: 56px;\n  border-radius: 8px;\n  background: #f5f5f5;\n  flex-shrink: 0;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  transition: transform 0.2s ease;\n  position: relative;\n  overflow: hidden;\n\n  img {\n    object-fit: cover;\n  }\n\n  ",
        ":hover & {\n    transform: scale(1.03);\n  }\n"
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject10() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n"
    ]);
    _templateObject10 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject11() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  font-size: 0.9rem;\n  color: #1a1a1a;\n  font-weight: 400;\n  line-height: 1.4;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  font-family: 'Questrial', sans-serif;\n"
    ]);
    _templateObject11 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject12() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  font-size: 0.875rem;\n  color: #666;\n  font-weight: 500;\n  font-family: 'Questrial', sans-serif;\n"
    ]);
    _templateObject12 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject13() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  font-size: 0.75rem;\n  color: #999;\n  font-weight: 400;\n  font-family: 'Questrial', sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n"
    ]);
    _templateObject13 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject14() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n  margin-top: 0.5rem;\n  font-size: 0.875rem;\n  color: #666;\n  font-family: 'Questrial', sans-serif;\n\n  span:last-child {\n    font-weight: 500;\n    color: #1a1a1a;\n  }\n"
    ]);
    _templateObject14 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject15() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 6px;\n  padding: 0.25rem;\n"
    ]);
    _templateObject15 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject16() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  background: none;\n  border: none;\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #666;\n  font-size: 1.2rem;\n  font-weight: 400;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n  line-height: 1;\n\n  &:hover {\n    background: rgba(0, 0, 0, 0.05);\n    color: #1a1a1a;\n  }\n\n  &:active {\n    transform: scale(0.95);\n  }\n"
    ]);
    _templateObject16 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject17() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 40px;\n  text-align: center;\n  border: none;\n  background: none;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #1a1a1a;\n  font-family: 'Questrial', sans-serif;\n  padding: 0.25rem;\n  outline: none;\n\n  &::-webkit-inner-spin-button,\n  &::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  -moz-appearance: textfield;\n"
    ]);
    _templateObject17 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject18() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n  color: #999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n  opacity: 0.6;\n\n  &:hover {\n    background: rgba(0, 0, 0, 0.05);\n    color: #cc0c5c;\n    opacity: 1;\n  }\n\n  svg {\n    display: block;\n  }\n"
    ]);
    _templateObject18 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject19() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  padding: 1.25rem 1.25rem;\n  border-top: 1px solid rgba(0, 0, 0, 0.04);\n  display: flex;\n  flex-direction: column;\n  gap: 0.875rem;\n"
    ]);
    _templateObject19 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject20() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 1rem;\n  font-weight: 500;\n  color: #1a1a1a;\n  font-family: 'Questrial', sans-serif;\n\n  span:last-child {\n    font-weight: 600;\n  }\n"
    ]);
    _templateObject20 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject21() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 100%;\n  padding: 0.875rem 1.25rem;\n  background: #1a1a1a;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  font-family: 'Questrial', sans-serif;\n  letter-spacing: 0.2px;\n\n  &:hover {\n    background: #2a2a2a;\n    transform: translateY(-1px);\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  }\n\n  &:active {\n    transform: translateY(0);\n  }\n"
    ]);
    _templateObject21 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject22() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  padding: 3rem 1.5rem;\n  text-align: center;\n  color: #999;\n  font-size: 0.95rem;\n  font-family: 'Questrial', sans-serif;\n"
    ]);
    _templateObject22 = function _templateObject() {
        return data;
    };
    return data;
}
;
var modalSlideIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"])(_templateObject());
var modalSlideOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"])(_templateObject1());
var fadeIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"])(_templateObject2());
var CartModalContainer = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CartModal.styles__CartModalContainer",
    componentId: "sc-f30acc63-0"
})(_templateObject3(), function(param) {
    var $isClosing = param.$isClosing;
    return $isClosing ? modalSlideOut : modalSlideIn;
});
var CartModalHeader = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CartModal.styles__CartModalHeader",
    componentId: "sc-f30acc63-1"
})(_templateObject4(), fadeIn);
var CartModalTitle = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h2.withConfig({
    displayName: "CartModal.styles__CartModalTitle",
    componentId: "sc-f30acc63-2"
})(_templateObject5());
var CloseButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "CartModal.styles__CloseButton",
    componentId: "sc-f30acc63-3"
})(_templateObject6());
var CartItemsList = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CartModal.styles__CartItemsList",
    componentId: "sc-f30acc63-4"
})(_templateObject7());
var CartItem = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CartModal.styles__CartItem",
    componentId: "sc-f30acc63-5"
})(_templateObject8());
var CartItemImage = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CartModal.styles__CartItemImage",
    componentId: "sc-f30acc63-6"
})(_templateObject9(), CartItem);
var CartItemDetails = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CartModal.styles__CartItemDetails",
    componentId: "sc-f30acc63-7"
})(_templateObject10());
var CartItemName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CartModal.styles__CartItemName",
    componentId: "sc-f30acc63-8"
})(_templateObject11());
var CartItemPrice = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CartModal.styles__CartItemPrice",
    componentId: "sc-f30acc63-9"
})(_templateObject12());
var CartItemBagId = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CartModal.styles__CartItemBagId",
    componentId: "sc-f30acc63-10"
})(_templateObject13());
var CartItemQuantity = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CartModal.styles__CartItemQuantity",
    componentId: "sc-f30acc63-11"
})(_templateObject14());
var QuantityControls = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CartModal.styles__QuantityControls",
    componentId: "sc-f30acc63-12"
})(_templateObject15());
var QuantityButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "CartModal.styles__QuantityButton",
    componentId: "sc-f30acc63-13"
})(_templateObject16());
var QuantityInput = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input.withConfig({
    displayName: "CartModal.styles__QuantityInput",
    componentId: "sc-f30acc63-14"
})(_templateObject17());
var CartItemRemove = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "CartModal.styles__CartItemRemove",
    componentId: "sc-f30acc63-15"
})(_templateObject18());
var CartFooter = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CartModal.styles__CartFooter",
    componentId: "sc-f30acc63-16"
})(_templateObject19());
var CartTotal = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CartModal.styles__CartTotal",
    componentId: "sc-f30acc63-17"
})(_templateObject20());
var CheckoutButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "CartModal.styles__CheckoutButton",
    componentId: "sc-f30acc63-18"
})(_templateObject21());
var EmptyCartMessage = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CartModal.styles__EmptyCartMessage",
    componentId: "sc-f30acc63-19"
})(_templateObject22());
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/lib/locale.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
var SUPPORTED_LOCALES = [
    'en',
    'am',
    'ru'
];
var DEFAULT_LOCALE = 'en';
var isSupportedLocale = function(value) {
    return !!value && SUPPORTED_LOCALES.includes(value);
};
var normalizeLocale = function(value) {
    var normalized = Array.isArray(value) ? value[0] : value;
    return isSupportedLocale(normalized) ? normalized : DEFAULT_LOCALE;
};
var withLocale = function(locale, path) {
    var normalizedPath = path.startsWith('/') ? path : "/".concat(path);
    if (normalizedPath === '/' || normalizedPath === "/".concat(locale)) {
        return "/".concat(locale);
    }
    return "/".concat(locale).concat(normalizedPath);
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/utils/locale.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/lib/locale.ts [app-client] (ecmascript)");
;
;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/utils/slug.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildProductSlug",
    ()=>buildProductSlug,
    "getProductIdFromSlug",
    ()=>getProductIdFromSlug,
    "slugify",
    ()=>slugify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
var slugify = function(value) {
    var cleaned = value.toLowerCase().trim().replace(/['"]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    return cleaned;
};
var buildProductSlug = function(name, id) {
    var base = slugify(name);
    var prefix = base || 'product';
    return "".concat(prefix, "-").concat(id);
};
var getProductIdFromSlug = function(slug) {
    if (!slug) return null;
    var match = slug.match(/-(\d+)$/);
    if (!match) return null;
    var parsed = Number(match[1]);
    return Number.isFinite(parsed) ? parsed : null;
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$imageUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/imageUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/locale.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/lib/locale.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$slug$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/slug.ts [app-client] (ecmascript)");
;
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
var CartModal = function(param) {
    var isOpen = param.isOpen, onClose = param.onClose, isScrolled = param.isScrolled;
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), 2), cartItems = _useState[0], setCartItems = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isClosing = _useState1[0], setIsClosing = _useState1[1];
    var router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    var params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    var locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeLocale"])(params === null || params === void 0 ? void 0 : params.locale);
    var modalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var migrateCartData = function(data) {
        if (!Array.isArray(data)) return [];
        var isCartItem = function(item) {
            return !!item && (typeof item === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(item)) === 'object' && 'bagId' in item && 'product' in item;
        };
        if (data.length > 0 && isCartItem(data[0])) {
            return data;
        }
        return data.map(function(product, index) {
            return {
                bagId: "bag-".concat(Date.now(), "-").concat(index, "-").concat(product.id),
                product: product,
                quantity: 1
            };
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartModal.useEffect": function() {
            if (isOpen) {
                setIsClosing(false);
            }
        }
    }["CartModal.useEffect"], [
        isOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartModal.useEffect": function() {
            var updateCart = {
                "CartModal.useEffect.updateCart": function() {
                    var stored = localStorage.getItem('cartProducts');
                    if (stored) {
                        try {
                            var _parsed_;
                            var parsed = JSON.parse(stored);
                            var migrated = migrateCartData(parsed);
                            setCartItems(migrated);
                            if (migrated.length > 0 && !((_parsed_ = parsed[0]) === null || _parsed_ === void 0 ? void 0 : _parsed_.bagId)) {
                                localStorage.setItem('cartProducts', JSON.stringify(migrated));
                            }
                        } catch (unused) {
                            setCartItems([]);
                        }
                    } else {
                        setCartItems([]);
                    }
                }
            }["CartModal.useEffect.updateCart"];
            updateCart();
            window.addEventListener('storage', updateCart);
            window.addEventListener('cartUpdated', updateCart);
            return ({
                "CartModal.useEffect": function() {
                    window.removeEventListener('storage', updateCart);
                    window.removeEventListener('cartUpdated', updateCart);
                }
            })["CartModal.useEffect"];
        }
    }["CartModal.useEffect"], []);
    var handleClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartModal.useCallback[handleClose]": function() {
            setIsClosing(true);
            setTimeout({
                "CartModal.useCallback[handleClose]": function() {
                    setIsClosing(false);
                    onClose();
                }
            }["CartModal.useCallback[handleClose]"], 300);
        }
    }["CartModal.useCallback[handleClose]"], [
        onClose
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartModal.useEffect": function() {
            if (!isOpen) return;
            var handleClickOutside = {
                "CartModal.useEffect.handleClickOutside": function(e) {
                    if (modalRef.current && !modalRef.current.contains(e.target)) {
                        handleClose();
                    }
                }
            }["CartModal.useEffect.handleClickOutside"];
            window.addEventListener('mousedown', handleClickOutside);
            return ({
                "CartModal.useEffect": function() {
                    return window.removeEventListener('mousedown', handleClickOutside);
                }
            })["CartModal.useEffect"];
        }
    }["CartModal.useEffect"], [
        isOpen,
        handleClose
    ]);
    var handleRemoveProduct = function(bagId, e) {
        e.stopPropagation();
        var updated = cartItems.filter(function(item) {
            return item.bagId !== bagId;
        });
        setCartItems(updated);
        localStorage.setItem('cartProducts', JSON.stringify(updated));
        window.dispatchEvent(new Event('cartUpdated'));
    };
    var handleQuantityChange = function(bagId, newQuantity, e) {
        if (e) e.stopPropagation();
        if (newQuantity < 1) return;
        var updated = cartItems.map(function(item) {
            return item.bagId === bagId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, item), {
                quantity: newQuantity
            }) : item;
        });
        setCartItems(updated);
        localStorage.setItem('cartProducts', JSON.stringify(updated));
        window.dispatchEvent(new Event('cartUpdated'));
    };
    var handleProductClick = function(product) {
        router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withLocale"])(locale, "/product/".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$slug$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildProductSlug"])(product.name, product.id))));
        onClose();
    };
    var handleCheckout = function() {
        handleClose();
        setTimeout(function() {
            return router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withLocale"])(locale, '/cart'));
        }, 300);
    };
    var calculateTotal = function() {
        return cartItems.reduce(function(sum, item) {
            var price = item.product.price_new || item.product.price;
            var numericPrice = parseFloat(price.replace(/[^\d.-]/g, '')) || 0;
            return sum + numericPrice * item.quantity;
        }, 0);
    };
    var getTotalItems = function() {
        return cartItems.reduce(function(sum, item) {
            return sum + item.quantity;
        }, 0);
    };
    var formatPrice = function(price) {
        return price;
    };
    if (!isOpen && !isClosing) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartModalContainer"], {
        ref: modalRef,
        $isScrolled: isScrolled,
        $isClosing: isClosing,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartModalHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartModalTitle"], {
                        children: [
                            "Cart (",
                            getTotalItems(),
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloseButton"], {
                        onClick: handleClose,
                        "aria-label": "Close cart",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "18",
                                    y1: "6",
                                    x2: "6",
                                    y2: "18"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "6",
                                    y1: "6",
                                    x2: "18",
                                    y2: "18"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, _this),
            cartItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyCartMessage"], {
                children: "Your cart is empty"
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                lineNumber: 209,
                columnNumber: 9
            }, _this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartItemsList"], {
                        children: cartItems.map(function(item) {
                            var product = item.product;
                            var itemPrice = parseFloat((product.price_new || product.price).replace(/[^\d.-]/g, '')) || 0;
                            var itemTotal = itemPrice * item.quantity;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartItem"], {
                                onClick: function() {
                                    return handleProductClick(product);
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartItemImage"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$imageUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageUrl"])(product.variant_image) || '/assets/logo.png',
                                            alt: product.name,
                                            fill: true,
                                            sizes: "56px"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                            lineNumber: 227,
                                            columnNumber: 21
                                        }, _this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                        lineNumber: 226,
                                        columnNumber: 19
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartItemDetails"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartItemBagId"], {
                                                children: [
                                                    "ID: ",
                                                    item.bagId.split('-').slice(-2).join('-')
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                                lineNumber: 237,
                                                columnNumber: 21
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartItemName"], {
                                                children: product.name
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                                lineNumber: 240,
                                                columnNumber: 21
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartItemPrice"], {
                                                children: formatPrice(product.price_new || product.price)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                                lineNumber: 241,
                                                columnNumber: 21
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartItemQuantity"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuantityControls"], {
                                                        onClick: function(e) {
                                                            return e.stopPropagation();
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuantityButton"], {
                                                                onClick: function(e) {
                                                                    return handleQuantityChange(item.bagId, item.quantity - 1, e);
                                                                },
                                                                "aria-label": "Decrease quantity",
                                                                children: "−"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                                                lineNumber: 248,
                                                                columnNumber: 25
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuantityInput"], {
                                                                type: "number",
                                                                min: "1",
                                                                value: item.quantity,
                                                                onChange: function(e) {
                                                                    var val = parseInt(e.target.value) || 1;
                                                                    handleQuantityChange(item.bagId, val);
                                                                },
                                                                onClick: function(e) {
                                                                    return e.stopPropagation();
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                                                lineNumber: 260,
                                                                columnNumber: 25
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuantityButton"], {
                                                                onClick: function(e) {
                                                                    return handleQuantityChange(item.bagId, item.quantity + 1, e);
                                                                },
                                                                "aria-label": "Increase quantity",
                                                                children: "+"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                                                lineNumber: 272,
                                                                columnNumber: 25
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 23
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Total: ",
                                                            formatPrice("".concat(itemTotal.toLocaleString(), " ֏"))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 23
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                                lineNumber: 244,
                                                columnNumber: 21
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                        lineNumber: 236,
                                        columnNumber: 19
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartItemRemove"], {
                                        onClick: function(e) {
                                            return handleRemoveProduct(item.bagId, e);
                                        },
                                        "aria-label": "Remove item",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "18",
                                                    y1: "6",
                                                    x2: "6",
                                                    y2: "18"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 23
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "6",
                                                    y1: "6",
                                                    x2: "18",
                                                    y2: "18"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 23
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                            lineNumber: 294,
                                            columnNumber: 21
                                        }, _this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                        lineNumber: 290,
                                        columnNumber: 19
                                    }, _this)
                                ]
                            }, item.bagId, true, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                lineNumber: 222,
                                columnNumber: 17
                            }, _this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartFooter"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartTotal"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Total:"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                        lineNumber: 313,
                                        columnNumber: 15
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: formatPrice("".concat(calculateTotal().toLocaleString(), " ֏"))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                        lineNumber: 314,
                                        columnNumber: 15
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                lineNumber: 312,
                                columnNumber: 13
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckoutButton"], {
                                onClick: handleCheckout,
                                children: "Checkout"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                lineNumber: 318,
                                columnNumber: 13
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                        lineNumber: 311,
                        columnNumber: 11
                    }, _this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
        lineNumber: 186,
        columnNumber: 5
    }, _this);
};
_s(CartModal, "k01R7gz5TjWlIHxrFK6FbdzNAK8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = CartModal;
const __TURBOPACK__default__export__ = CartModal;
var _c;
__turbopack_context__.k.register(_c, "CartModal");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CloseButton",
    ()=>CloseButton,
    "EmptyLikedMessage",
    ()=>EmptyLikedMessage,
    "LikedItem",
    ()=>LikedItem,
    "LikedItemActions",
    ()=>LikedItemActions,
    "LikedItemCartButton",
    ()=>LikedItemCartButton,
    "LikedItemDetails",
    ()=>LikedItemDetails,
    "LikedItemImage",
    ()=>LikedItemImage,
    "LikedItemName",
    ()=>LikedItemName,
    "LikedItemPrice",
    ()=>LikedItemPrice,
    "LikedItemRemove",
    ()=>LikedItemRemove,
    "LikedItemsList",
    ()=>LikedItemsList,
    "LikedModalContainer",
    ()=>LikedModalContainer,
    "LikedModalHeader",
    ()=>LikedModalHeader,
    "LikedModalTitle",
    ()=>LikedModalTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
;
function _templateObject() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  from {\n    opacity: 0;\n    transform: translateY(-12px) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  from {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n  to {\n    opacity: 0;\n    transform: translateY(-12px) scale(0.96);\n  }\n"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: absolute;\n  top: calc(100% + 0.75rem);\n  right: 0;\n  background: white;\n  border-radius: 10px;\n  width: 420px;\n  max-width: calc(100vw - 2rem);\n  max-height: 500px;\n  display: flex;\n  flex-direction: column;\n  box-shadow:\n    0 8px 32px rgba(0, 0, 0, 0.08),\n    0 2px 8px rgba(0, 0, 0, 0.04);\n  z-index: 10001;\n  animation: ",
        "\n    0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  overflow: hidden;\n  will-change: transform, opacity;\n\n  @media (max-width: 768px) {\n    right: 1rem;\n    width: calc(100vw - 2rem);\n    max-width: 420px;\n    max-height: 70vh;\n    border-radius: 8px;\n  }\n"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 1.25rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.04);\n  animation: ",
        " 0.3s ease-out 0.1s both;\n"
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  color: #1a1a1a;\n  font-family: 'Questrial', sans-serif;\n  letter-spacing: -0.1px;\n"
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n  color: #666;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n\n  &:hover {\n    background: rgba(0, 0, 0, 0.06);\n    color: #1a1a1a;\n    transform: rotate(90deg);\n  }\n\n  &:active {\n    transform: rotate(90deg) scale(0.95);\n  }\n\n  svg {\n    display: block;\n    transition: transform 0.2s ease;\n  }\n"
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  flex: 1;\n  overflow-y: auto;\n  padding: 0.25rem 0;\n  scrollbar-width: thin;\n  scrollbar-color: rgba(0, 0, 0, 0.15) transparent;\n\n  &::-webkit-scrollbar {\n    width: 6px;\n  }\n\n  &::-webkit-scrollbar-track {\n    background: transparent;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background: rgba(0, 0, 0, 0.2);\n    border-radius: 6px;\n  }\n"
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  padding: 0.875rem 1.25rem;\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.03);\n\n  &:last-of-type {\n    border-bottom: none;\n  }\n\n  &:hover {\n    background: rgba(204, 12, 92, 0.02);\n  }\n"
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 56px;\n  height: 56px;\n  border-radius: 8px;\n  background: #f5f5f5;\n  flex-shrink: 0;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  transition: transform 0.2s ease;\n  position: relative;\n  overflow: hidden;\n\n  img {\n    object-fit: cover;\n  }\n\n  ",
        ":hover & {\n    transform: scale(1.03);\n  }\n"
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject10() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n"
    ]);
    _templateObject10 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject11() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  font-size: 0.9rem;\n  color: #1a1a1a;\n  font-weight: 400;\n  line-height: 1.4;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  font-family: 'Questrial', sans-serif;\n"
    ]);
    _templateObject11 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject12() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  font-size: 0.875rem;\n  color: #666;\n  font-weight: 500;\n  font-family: 'Questrial', sans-serif;\n"
    ]);
    _templateObject12 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject13() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-shrink: 0;\n  margin-left: auto;\n"
    ]);
    _templateObject13 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject14() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n  color: ",
        ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n  opacity: ",
        ";\n\n  &:hover {\n    background: rgba(0, 0, 0, 0.05);\n    color: ",
        ";\n    opacity: 1;\n  }\n\n  svg {\n    display: block;\n  }\n"
    ]);
    _templateObject14 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject15() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n  color: #999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n  opacity: 0.6;\n\n  &:hover {\n    background: rgba(0, 0, 0, 0.05);\n    color: #cc0c5c;\n    opacity: 1;\n  }\n\n  svg {\n    display: block;\n  }\n"
    ]);
    _templateObject15 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject16() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  padding: 3rem 1.5rem;\n  text-align: center;\n  color: #999;\n  font-size: 0.95rem;\n  font-family: 'Questrial', sans-serif;\n"
    ]);
    _templateObject16 = function _templateObject() {
        return data;
    };
    return data;
}
;
var modalSlideIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"])(_templateObject());
var modalSlideOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"])(_templateObject1());
var fadeIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"])(_templateObject2());
var LikedModalContainer = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LikedModal.styles__LikedModalContainer",
    componentId: "sc-228d9fba-0"
})(_templateObject3(), function(param) {
    var $isClosing = param.$isClosing;
    return $isClosing ? modalSlideOut : modalSlideIn;
});
var LikedModalHeader = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LikedModal.styles__LikedModalHeader",
    componentId: "sc-228d9fba-1"
})(_templateObject4(), fadeIn);
var LikedModalTitle = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h2.withConfig({
    displayName: "LikedModal.styles__LikedModalTitle",
    componentId: "sc-228d9fba-2"
})(_templateObject5());
var CloseButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "LikedModal.styles__CloseButton",
    componentId: "sc-228d9fba-3"
})(_templateObject6());
var LikedItemsList = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LikedModal.styles__LikedItemsList",
    componentId: "sc-228d9fba-4"
})(_templateObject7());
var LikedItem = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LikedModal.styles__LikedItem",
    componentId: "sc-228d9fba-5"
})(_templateObject8());
var LikedItemImage = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LikedModal.styles__LikedItemImage",
    componentId: "sc-228d9fba-6"
})(_templateObject9(), LikedItem);
var LikedItemDetails = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LikedModal.styles__LikedItemDetails",
    componentId: "sc-228d9fba-7"
})(_templateObject10());
var LikedItemName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LikedModal.styles__LikedItemName",
    componentId: "sc-228d9fba-8"
})(_templateObject11());
var LikedItemPrice = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LikedModal.styles__LikedItemPrice",
    componentId: "sc-228d9fba-9"
})(_templateObject12());
var LikedItemActions = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LikedModal.styles__LikedItemActions",
    componentId: "sc-228d9fba-10"
})(_templateObject13());
var LikedItemCartButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "LikedModal.styles__LikedItemCartButton",
    componentId: "sc-228d9fba-11"
})(_templateObject14(), function(param) {
    var $inCart = param.$inCart;
    return $inCart ? '#cc0c5c' : '#999';
}, function(param) {
    var $inCart = param.$inCart;
    return $inCart ? 1 : 0.6;
}, function(param) {
    var $inCart = param.$inCart;
    return $inCart ? '#cc0c5c' : '#d4af37';
});
var LikedItemRemove = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "LikedModal.styles__LikedItemRemove",
    componentId: "sc-228d9fba-12"
})(_templateObject15());
var EmptyLikedMessage = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LikedModal.styles__EmptyLikedMessage",
    componentId: "sc-228d9fba-13"
})(_templateObject16());
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$imageUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/imageUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$likedModal$2f$LikedModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/locale.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/lib/locale.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$slug$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/slug.ts [app-client] (ecmascript)");
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
var LikedModal = function(param) {
    var isOpen = param.isOpen, onClose = param.onClose, isScrolled = param.isScrolled;
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), 2), likedProducts = _useState[0], setLikedProducts = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), 2), cartItems = _useState1[0], setCartItems = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isClosing = _useState2[0], setIsClosing = _useState2[1];
    var router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    var params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    var locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeLocale"])(params === null || params === void 0 ? void 0 : params.locale);
    var modalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LikedModal.useEffect": function() {
            if (isOpen) {
                setIsClosing(false);
            }
        }
    }["LikedModal.useEffect"], [
        isOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LikedModal.useEffect": function() {
            var updateLiked = {
                "LikedModal.useEffect.updateLiked": function() {
                    var stored = localStorage.getItem('likedProducts');
                    if (stored) {
                        try {
                            var parsed = JSON.parse(stored);
                            setLikedProducts(Array.isArray(parsed) ? parsed : []);
                        } catch (unused) {
                            setLikedProducts([]);
                        }
                    } else {
                        setLikedProducts([]);
                    }
                }
            }["LikedModal.useEffect.updateLiked"];
            var updateCart = {
                "LikedModal.useEffect.updateCart": function() {
                    var stored = localStorage.getItem('cartProducts');
                    if (stored) {
                        try {
                            var parsed = JSON.parse(stored);
                            if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].bagId) {
                                setCartItems(parsed);
                            } else {
                                setCartItems(parsed.map({
                                    "LikedModal.useEffect.updateCart": function(p, index) {
                                        return {
                                            bagId: "bag-".concat(Date.now(), "-").concat(index, "-").concat(p.id),
                                            product: p,
                                            quantity: 1
                                        };
                                    }
                                }["LikedModal.useEffect.updateCart"]));
                            }
                        } catch (unused) {
                            setCartItems([]);
                        }
                    } else {
                        setCartItems([]);
                    }
                }
            }["LikedModal.useEffect.updateCart"];
            updateLiked();
            updateCart();
            window.addEventListener('storage', updateLiked);
            window.addEventListener('likedUpdated', updateLiked);
            window.addEventListener('storage', updateCart);
            window.addEventListener('cartUpdated', updateCart);
            return ({
                "LikedModal.useEffect": function() {
                    window.removeEventListener('storage', updateLiked);
                    window.removeEventListener('likedUpdated', updateLiked);
                    window.removeEventListener('storage', updateCart);
                    window.removeEventListener('cartUpdated', updateCart);
                }
            })["LikedModal.useEffect"];
        }
    }["LikedModal.useEffect"], []);
    var handleClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LikedModal.useCallback[handleClose]": function() {
            setIsClosing(true);
            setTimeout({
                "LikedModal.useCallback[handleClose]": function() {
                    setIsClosing(false);
                    onClose();
                }
            }["LikedModal.useCallback[handleClose]"], 300);
        }
    }["LikedModal.useCallback[handleClose]"], [
        onClose
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LikedModal.useEffect": function() {
            if (!isOpen) return;
            var handleClickOutside = {
                "LikedModal.useEffect.handleClickOutside": function(e) {
                    if (modalRef.current && !modalRef.current.contains(e.target)) {
                        handleClose();
                    }
                }
            }["LikedModal.useEffect.handleClickOutside"];
            window.addEventListener('mousedown', handleClickOutside);
            return ({
                "LikedModal.useEffect": function() {
                    return window.removeEventListener('mousedown', handleClickOutside);
                }
            })["LikedModal.useEffect"];
        }
    }["LikedModal.useEffect"], [
        isOpen,
        handleClose
    ]);
    var isProductInCart = function(productId) {
        return cartItems.some(function(item) {
            return item.product.id === productId;
        });
    };
    var handleCartToggle = function(product, e) {
        e.stopPropagation();
        var stored = localStorage.getItem('cartProducts');
        var currentCartItems = [];
        if (stored) {
            try {
                var parsed = JSON.parse(stored);
                if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].bagId) {
                    currentCartItems = parsed;
                } else {
                    currentCartItems = parsed.map(function(p, index) {
                        return {
                            bagId: "bag-".concat(Date.now(), "-").concat(index, "-").concat(p.id),
                            product: p,
                            quantity: 1
                        };
                    });
                }
            } catch (unused) {
                currentCartItems = [];
            }
        }
        var existingItem = currentCartItems.find(function(item) {
            return item.product.id === product.id;
        });
        if (existingItem) {
            var updated = currentCartItems.filter(function(item) {
                return item.bagId !== existingItem.bagId;
            });
            localStorage.setItem('cartProducts', JSON.stringify(updated));
        } else {
            var newItem = {
                bagId: "bag-".concat(Date.now(), "-").concat(product.id),
                product: product,
                quantity: 1
            };
            currentCartItems.push(newItem);
            localStorage.setItem('cartProducts', JSON.stringify(currentCartItems));
        }
        window.dispatchEvent(new Event('cartUpdated'));
    };
    var handleRemoveProduct = function(productId, e) {
        e.stopPropagation();
        var updated = likedProducts.filter(function(p) {
            return p.id !== productId;
        });
        setLikedProducts(updated);
        localStorage.setItem('likedProducts', JSON.stringify(updated));
        window.dispatchEvent(new Event('likedUpdated'));
    };
    var handleProductClick = function(product) {
        handleClose();
        setTimeout(function() {
            router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withLocale"])(locale, "/product/".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$slug$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildProductSlug"])(product.name, product.id))));
        }, 300);
    };
    var formatPrice = function(price) {
        return price;
    };
    if (!isOpen && !isClosing) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$likedModal$2f$LikedModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LikedModalContainer"], {
        ref: modalRef,
        $isScrolled: isScrolled,
        $isClosing: isClosing,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$likedModal$2f$LikedModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LikedModalHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$likedModal$2f$LikedModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LikedModalTitle"], {
                        children: [
                            "Liked (",
                            likedProducts.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$likedModal$2f$LikedModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloseButton"], {
                        onClick: handleClose,
                        "aria-label": "Close liked",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "18",
                                    y1: "6",
                                    x2: "6",
                                    y2: "18"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "6",
                                    y1: "6",
                                    x2: "18",
                                    y2: "18"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                            lineNumber: 211,
                            columnNumber: 11
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, _this),
            likedProducts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$likedModal$2f$LikedModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyLikedMessage"], {
                children: "You haven't liked any products yet"
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                lineNumber: 226,
                columnNumber: 9
            }, _this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$likedModal$2f$LikedModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LikedItemsList"], {
                children: likedProducts.map(function(product) {
                    var inCart = isProductInCart(product.id);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$likedModal$2f$LikedModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LikedItem"], {
                        onClick: function() {
                            return handleProductClick(product);
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$likedModal$2f$LikedModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LikedItemImage"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$imageUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageUrl"])(product.variant_image) || '/assets/logo.png',
                                    alt: product.name,
                                    fill: true,
                                    sizes: "56px"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                    lineNumber: 239,
                                    columnNumber: 19
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                lineNumber: 238,
                                columnNumber: 17
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$likedModal$2f$LikedModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LikedItemDetails"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$likedModal$2f$LikedModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LikedItemName"], {
                                        children: product.name
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                        lineNumber: 249,
                                        columnNumber: 19
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$likedModal$2f$LikedModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LikedItemPrice"], {
                                        children: formatPrice(product.price_new || product.price)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                        lineNumber: 250,
                                        columnNumber: 19
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                lineNumber: 248,
                                columnNumber: 17
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$likedModal$2f$LikedModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LikedItemActions"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$likedModal$2f$LikedModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LikedItemCartButton"], {
                                        onClick: function(e) {
                                            return handleCartToggle(product, e);
                                        },
                                        "aria-label": inCart ? 'Remove from cart' : 'Add to cart',
                                        $inCart: inCart,
                                        children: inCart ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "18",
                                                    y1: "6",
                                                    x2: "6",
                                                    y2: "18"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                                    lineNumber: 269,
                                                    columnNumber: 25
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "6",
                                                    y1: "6",
                                                    x2: "18",
                                                    y2: "18"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 25
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                            lineNumber: 261,
                                            columnNumber: 23
                                        }, _this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 25
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "3",
                                                    y1: "6",
                                                    x2: "21",
                                                    y2: "6"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 25
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M16 10a4 4 0 0 1-8 0"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 25
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                            lineNumber: 273,
                                            columnNumber: 23
                                        }, _this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                        lineNumber: 255,
                                        columnNumber: 19
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$likedModal$2f$LikedModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LikedItemRemove"], {
                                        onClick: function(e) {
                                            return handleRemoveProduct(product.id, e);
                                        },
                                        "aria-label": "Remove from liked",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "18",
                                                    y1: "6",
                                                    x2: "6",
                                                    y2: "18"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 23
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "6",
                                                    y1: "6",
                                                    x2: "18",
                                                    y2: "18"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 23
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                            lineNumber: 291,
                                            columnNumber: 21
                                        }, _this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                        lineNumber: 287,
                                        columnNumber: 19
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                lineNumber: 254,
                                columnNumber: 17
                            }, _this)
                        ]
                    }, product.id, true, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                        lineNumber: 234,
                        columnNumber: 15
                    }, _this);
                })
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                lineNumber: 230,
                columnNumber: 9
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
        lineNumber: 203,
        columnNumber: 5
    }, _this);
};
_s(LikedModal, "Q2r8BBrS6/soAHUel9sjQw03jZU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = LikedModal;
const __TURBOPACK__default__export__ = LikedModal;
var _c;
__turbopack_context__.k.register(_c, "LikedModal");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoginSignupButton",
    ()=>LoginSignupButton,
    "LogoutButton",
    ()=>LogoutButton,
    "NotLoggedInMessage",
    ()=>NotLoggedInMessage,
    "ProfileArrow",
    ()=>ProfileArrow,
    "ProfileCardContainer",
    ()=>ProfileCardContainer,
    "ProfileEmail",
    ()=>ProfileEmail,
    "ProfileHeader",
    ()=>ProfileHeader,
    "ProfileIcon",
    ()=>ProfileIcon,
    "ProfileInfo",
    ()=>ProfileInfo,
    "ProfileMenuDivider",
    ()=>ProfileMenuDivider,
    "ProfileMenuItem",
    ()=>ProfileMenuItem,
    "ProfileName",
    ()=>ProfileName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
;
function _templateObject() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: absolute;\n  top: calc(100% + 0.5rem);\n  right: 0;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);\n  min-width: 280px;\n  padding: 0;\n  z-index: 10001;\n  animation: ",
        " 0.2s ease-out;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  font-family: 'Questrial', sans-serif;\n\n  @media (max-width: 768px) {\n    right: 0;\n    left: auto;\n    min-width: 260px;\n  }\n"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n\n  &:hover {\n    background-color: #f5f5f5;\n  }\n"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #001f3f 0%, #003366 100%);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  font-weight: 600;\n  flex-shrink: 0;\n  font-family: 'Questrial', sans-serif;\n"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  flex: 1;\n  min-width: 0;\n"
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin-bottom: 0.25rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-family: 'Questrial', sans-serif;\n"
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  font-size: 0.85rem;\n  color: #666;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-family: 'Questrial', sans-serif;\n"
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  color: #999;\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n  transition: transform 0.2s ease;\n\n  ",
        ":hover & {\n    transform: translateX(4px);\n    color: #001f3f;\n  }\n"
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  height: 1px;\n  background: #e0e0e0;\n  margin: 0.5rem 0;\n"
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #1a1a1a;\n  font-size: 0.95rem;\n  font-weight: 500;\n  font-family: 'Questrial', sans-serif;\n  border-radius: 0;\n  transition: all 0.2s ease;\n  text-align: left;\n\n  &:hover {\n    background: #f5f5f5;\n    color: #001f3f;\n  }\n\n  svg {\n    width: 18px;\n    height: 18px;\n    flex-shrink: 0;\n    color: #666;\n    transition: color 0.2s ease;\n  }\n\n  &:hover svg {\n    color: #001f3f;\n  }\n\n  span {\n    flex: 1;\n  }\n"
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject10() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #cc0c5c;\n  font-size: 0.95rem;\n  font-weight: 500;\n  font-family: 'Questrial', sans-serif;\n  border-radius: 0;\n  transition: all 0.2s ease;\n  text-align: left;\n\n  &:hover {\n    background: #fee;\n    color: #cc0c5c;\n  }\n\n  svg {\n    width: 18px;\n    height: 18px;\n    flex-shrink: 0;\n    transition: color 0.2s ease;\n  }\n\n  &:hover svg {\n    color: #cc0c5c;\n  }\n\n  span {\n    flex: 1;\n  }\n"
    ]);
    _templateObject10 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject11() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  font-size: 0.9rem;\n  color: #666;\n  text-align: center;\n  margin: 0;\n  padding: 1rem;\n  font-family: 'Questrial', sans-serif;\n"
    ]);
    _templateObject11 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject12() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #1a1a1a;\n  font-size: 0.95rem;\n  font-weight: 500;\n  font-family: 'Questrial', sans-serif;\n  border-radius: 0;\n  transition: all 0.2s ease;\n  text-align: left;\n\n  &:hover {\n    background: #f5f5f5;\n    color: #001f3f;\n  }\n\n  svg {\n    width: 18px;\n    height: 18px;\n    flex-shrink: 0;\n    color: #666;\n    transition: color 0.2s ease;\n  }\n\n  &:hover svg {\n    color: #001f3f;\n  }\n\n  span {\n    flex: 1;\n  }\n"
    ]);
    _templateObject12 = function _templateObject() {
        return data;
    };
    return data;
}
;
var slideDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"])(_templateObject());
var ProfileCardContainer = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProfileCard.styles__ProfileCardContainer",
    componentId: "sc-a59aa6b4-0"
})(_templateObject1(), slideDown);
var ProfileHeader = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProfileCard.styles__ProfileHeader",
    componentId: "sc-a59aa6b4-1"
})(_templateObject2());
var ProfileIcon = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProfileCard.styles__ProfileIcon",
    componentId: "sc-a59aa6b4-2"
})(_templateObject3());
var ProfileInfo = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProfileCard.styles__ProfileInfo",
    componentId: "sc-a59aa6b4-3"
})(_templateObject4());
var ProfileName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProfileCard.styles__ProfileName",
    componentId: "sc-a59aa6b4-4"
})(_templateObject5());
var ProfileEmail = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProfileCard.styles__ProfileEmail",
    componentId: "sc-a59aa6b4-5"
})(_templateObject6());
var ProfileArrow = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProfileCard.styles__ProfileArrow",
    componentId: "sc-a59aa6b4-6"
})(_templateObject7(), ProfileHeader);
var ProfileMenuDivider = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProfileCard.styles__ProfileMenuDivider",
    componentId: "sc-a59aa6b4-7"
})(_templateObject8());
var ProfileMenuItem = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "ProfileCard.styles__ProfileMenuItem",
    componentId: "sc-a59aa6b4-8"
})(_templateObject9());
var LogoutButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "ProfileCard.styles__LogoutButton",
    componentId: "sc-a59aa6b4-9"
})(_templateObject10());
var NotLoggedInMessage = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProfileCard.styles__NotLoggedInMessage",
    componentId: "sc-a59aa6b4-10"
})(_templateObject11());
var LoginSignupButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "ProfileCard.styles__LoginSignupButton",
    componentId: "sc-a59aa6b4-11"
})(_templateObject12());
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/context/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/locale.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/lib/locale.ts [app-client] (ecmascript)");
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
var ProfileCard = function(param) {
    var onClose = param.onClose, isScrolled = param.isScrolled, onOpenLogin = param.onOpenLogin, onOpenRegister = param.onOpenRegister;
    _s();
    var _useAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])(), user = _useAuth.user, logout = _useAuth.logout, isAuthenticated = _useAuth.isAuthenticated;
    var router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    var params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    var locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeLocale"])(params === null || params === void 0 ? void 0 : params.locale);
    var handleLoginClick = function() {
        onClose();
        onOpenLogin();
    };
    var handleRegisterClick = function() {
        onClose();
        onOpenRegister();
    };
    if (!isAuthenticated || !user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfileCardContainer"], {
            $isScrolled: isScrolled,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotLoggedInMessage"], {
                    children: "You are not logged in"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfileMenuDivider"], {}, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoginSignupButton"], {
                    onClick: handleLoginClick,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "18",
                            height: "18",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                    points: "10 17 15 12 10 7"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "15",
                                    y1: "12",
                                    x2: "3",
                                    y2: "12"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Login"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoginSignupButton"], {
                    onClick: handleRegisterClick,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "18",
                            height: "18",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "8.5",
                                    cy: "7",
                                    r: "4"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "20",
                                    y1: "8",
                                    x2: "20",
                                    y2: "14"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "23",
                                    y1: "11",
                                    x2: "17",
                                    y2: "11"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Sign Up"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, _this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, _this);
    }
    var displayName = user.first_name || user.last_name ? "".concat(user.first_name || '', " ").concat(user.last_name || '').trim() : 'User';
    var getInitials = function() {
        if (user.first_name && user.last_name) {
            return "".concat(user.first_name[0]).concat(user.last_name[0]).toUpperCase();
        }
        if (user.first_name) {
            return user.first_name[0].toUpperCase();
        }
        if (user.email) {
            return user.email[0].toUpperCase();
        }
        return 'U';
    };
    var handleProfileClick = function() {
        onClose();
        router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withLocale"])(locale, '/profile'));
    };
    var handleOrderHistoryClick = function() {
        onClose();
        router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withLocale"])(locale, '/orders'));
    };
    var handleShippingClick = function() {
        onClose();
        router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withLocale"])(locale, '/shipping'));
    };
    var handleLogout = function() {
        void logout();
        onClose();
        router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withLocale"])(locale, '/'));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfileCardContainer"], {
        $isScrolled: isScrolled,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfileHeader"], {
                onClick: handleProfileClick,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfileIcon"], {
                        children: getInitials()
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfileInfo"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfileName"], {
                                children: displayName
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfileEmail"], {
                                children: user.email
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfileArrow"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                points: "9 18 15 12 9 6"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                                lineNumber: 146,
                                columnNumber: 13
                            }, _this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfileMenuDivider"], {}, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfileMenuItem"], {
                onClick: handleOrderHistoryClick,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "18",
                        height: "18",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M9 11l3 3L22 4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Order History"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfileMenuItem"], {
                onClick: handleShippingClick,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "18",
                        height: "18",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "12",
                                cy: "10",
                                r: "3"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Shipping Information"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfileMenuDivider"], {}, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoutButton"], {
                onClick: handleLogout,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "18",
                        height: "18",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                points: "16 17 21 12 16 7"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "21",
                                y1: "12",
                                x2: "9",
                                y2: "12"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Logout"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, _this);
};
_s(ProfileCard, "lY8asR9/3bFeqitqZooyfbe2DVw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = ProfileCard;
const __TURBOPACK__default__export__ = ProfileCard;
var _c;
__turbopack_context__.k.register(_c, "ProfileCard");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccountIcon",
    ()=>AccountIcon,
    "AnimatedLogoWrapper",
    ()=>AnimatedLogoWrapper,
    "CartBadge",
    ()=>CartBadge,
    "CartButton",
    ()=>CartButton,
    "CartIconWrapper",
    ()=>CartIconWrapper,
    "CatalogCategories",
    ()=>CatalogCategories,
    "CatalogContent",
    ()=>CatalogContent,
    "CategoryArrow",
    ()=>CategoryArrow,
    "CategoryContainer",
    ()=>CategoryContainer,
    "CategoryItem",
    ()=>CategoryItem,
    "CategoryList",
    ()=>CategoryList,
    "CategoryText",
    ()=>CategoryText,
    "ContactIcon",
    ()=>ContactIcon,
    "ContactItem",
    ()=>ContactItem,
    "ContactText",
    ()=>ContactText,
    "Contacts",
    ()=>Contacts,
    "CountBadge",
    ()=>CountBadge,
    "CountryFlag",
    ()=>CountryFlag,
    "CountrySwitcher",
    ()=>CountrySwitcher,
    "CountryText",
    ()=>CountryText,
    "CurrencyArrow",
    ()=>CurrencyArrow,
    "CurrencySwitcher",
    ()=>CurrencySwitcher,
    "CurrencyText",
    ()=>CurrencyText,
    "HeaderActions",
    ()=>HeaderActions,
    "HeaderContainer",
    ()=>HeaderContainer,
    "HeaderDetails",
    ()=>HeaderDetails,
    "HeaderLogo",
    ()=>HeaderLogo,
    "HeaderMainContainer",
    ()=>HeaderMainContainer,
    "LikedBadge",
    ()=>LikedBadge,
    "LikedButton",
    ()=>LikedButton,
    "LikedIconWrapper",
    ()=>LikedIconWrapper,
    "MenuIcon",
    ()=>MenuIcon,
    "MobileMenuCard",
    ()=>MobileMenuCard,
    "MobileMenuContent",
    ()=>MobileMenuContent,
    "MobileMenuIcon",
    ()=>MobileMenuIcon,
    "MobileMenuLabel",
    ()=>MobileMenuLabel,
    "MobileMenuLink",
    ()=>MobileMenuLink,
    "MobileMenuLinks",
    ()=>MobileMenuLinks,
    "NavContainer",
    ()=>NavContainer,
    "NavItem",
    ()=>NavItem,
    "NavLink",
    ()=>NavLink,
    "NavLinkDivider",
    ()=>NavLinkDivider,
    "NavLinks",
    ()=>NavLinks,
    "NavigationBar",
    ()=>NavigationBar,
    "ProductCategories",
    ()=>ProductCategories,
    "ProductCategory",
    ()=>ProductCategory,
    "ProductCategoryName",
    ()=>ProductCategoryName,
    "ScaleButton",
    ()=>ScaleButton,
    "SearchBar",
    ()=>SearchBar,
    "SearchContent",
    ()=>SearchContent,
    "SearchIconLarge",
    ()=>SearchIconLarge,
    "SearchInput",
    ()=>SearchInput,
    "SubcategoryItem",
    ()=>SubcategoryItem,
    "SubcategoryList",
    ()=>SubcategoryList,
    "Submenu",
    ()=>Submenu,
    "SubmenuItem",
    ()=>SubmenuItem,
    "SubmenuLink",
    ()=>SubmenuLink,
    "SubmenuList",
    ()=>SubmenuList,
    "SwiperCell",
    ()=>SwiperCell,
    "UserIconButton",
    ()=>UserIconButton,
    "UserIconWrapper",
    ()=>UserIconWrapper,
    "UserModal",
    ()=>UserModal,
    "UserModalItem",
    ()=>UserModalItem,
    "UserModalMessage",
    ()=>UserModalMessage,
    "VerticalLine",
    ()=>VerticalLine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
;
function _templateObject() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 100%;\n  background-color: ",
        ";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  z-index: 1000;\n  transition: background-color 0.3s ease-in-out;\n  overflow: visible;\n  position: fixed;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  0% {\n    top: 30vh;\n    width: 40vw;\n    transform: translateX(-50%) scale(1);;\n    opacity: 1;\n  }\n  100% {\n    top: ",
        "vh;\n    width: 120px;\n    transform: translateX(-50%) scale(1);\n    opacity: 1;\n  }\n"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  0% {\n    top: ",
        "vh;\n    width: 120px;\n    transform: translateX(-50%);\n    opacity: 1;\n  }\n  100% {\n    top: 30vh;\n    width: 40vw;\n    transform: translateX(-50%);\n    opacity: 1;\n  }\n"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  0% {\n    top: 30vh;\n    width: 70vw;\n    transform: translateX(-50%);\n    opacity: 1;\n  }\n  100% {\n    top: ",
        "vh;\n    width: 20vw;\n    transform: translateX(-50%);\n    opacity: 1;\n  }\n"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  0% {\n    top: ",
        "vh;\n    width: 20vw;\n    transform: translateX(-50%);\n    opacity: 1;\n  }\n  100% {\n    top: 30vh;\n    width: 70vw;\n    transform: translateX(-50%);\n    opacity: 1;\n  }\n"
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n          position: fixed;\n          top: 30vh;\n          width: 40vw;\n          transform: translateX(-50%);\n          opacity: 1;\n\n          @media (max-width: 768px) {\n            width: 70vw;\n          }\n        "
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n          position: fixed;\n          animation: ",
        " 0.5s ease forwards;\n\n          @media (max-width: 768px) {\n            animation: ",
        " 0.5s ease forwards;\n          }\n        "
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n          position: fixed;\n          animation: ",
        " 0.5s ease forwards;\n\n          @media (max-width: 768px) {\n            animation: ",
        " 0.5s ease forwards;\n          }\n        "
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n          position: fixed;\n          top: 33%;\n          left: 50%;\n          transform: translate(-50%, -50%);\n          width: 120px;\n          z-index: 2;\n\n          @media (max-width: 768px) {\n            width: 20vw;\n          }\n        "
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  left: 50%;\n  pointer-events: none;\n  z-index: 9999;\n  color: ",
        ";\n  transition: color 0.5s ease;\n  transform-origin: top center;\n\n  & img {\n    width: 100%;\n    height: auto;\n    display: block;\n  }\n\n  ",
        "\n"
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject10() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  flex-direction: row;\n  width: 75vw;\n  justify-content: space-between;\n  min-height: 80px;\n  align-items: center;\n"
    ]);
    _templateObject10 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject11() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: relative;\n  overflow: visible;\n  width: 120px;\n  height: 60px;\n  cursor: pointer;\n  margin-left: 0;\n"
    ]);
    _templateObject11 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject12() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  align-items: center;\n  gap: 5px;\n"
    ]);
    _templateObject12 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject13() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n"
    ]);
    _templateObject13 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject14() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n      background-color: #e3e3e3;\n    "
    ]);
    _templateObject14 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject15() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  border-radius: 10px;\n  mix-blend-mode: luminosity;\n  height: 35px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n\n  ",
        "\n\n  &:hover {\n    background-color: #e3e3e3;\n  }\n"
    ]);
    _templateObject15 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject16() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  margin: 0 10px 0 5px;\n\n  @media (max-width: 480px) {\n    display: none;\n  }\n"
    ]);
    _templateObject16 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject17() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 32px;\n  height: 32px;\n  padding: 4px 5px;\n  border: none;\n  border-radius: 5px;\n  background: none;\n  margin-left: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  span {\n    display: block;\n    width: 100%;\n    height: 0.125rem;\n    border-radius: 2px;\n    background-color: black;\n    position: relative;\n    transition: all 0.4s ease;\n  }\n\n  span + span {\n    margin-top: 0.375rem;\n  }\n"
    ]);
    _templateObject17 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject18() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  border-radius: 0 0 10px 10px;\n  z-index: 1000;\n  overflow: hidden;\n  max-height: ",
        ";\n  opacity: ",
        ";\n  transition:\n    max-height 0.5s ease,\n    opacity 0.5s ease;\n  padding: ",
        ";\n"
    ]);
    _templateObject18 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject19() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  border-radius: 0 0 10px 10px;\n  z-index: 1000;\n  overflow: hidden;\n  max-height: ",
        ";\n  opacity: ",
        ";\n  transition:\n    max-height 0.5s ease,\n    opacity 0.5s ease;\n  padding: ",
        ";\n  display: ",
        ";\n"
    ]);
    _templateObject19 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject20() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  margin-bottom: 10px;\n  position: relative;\n"
    ]);
    _templateObject20 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject21() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 36px;\n  height: 36px;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n\n  &:hover {\n    transform: scale(1.2);\n  }\n"
    ]);
    _templateObject21 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject22() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  font-size: 18px;\n  padding: 5px;\n  border: none;\n  outline: none;\n  width: 100%;\n  background: none;\n  border-bottom: 2px solid transparent;\n  transition: border-color 0.2s ease;\n\n  &:focus,\n  &:hover {\n    border-bottom: 2px solid #cc0c5c;\n  }\n\n  &::placeholder {\n    color: #888;\n    font-weight: bold;\n  }\n"
    ]);
    _templateObject22 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject23() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  max-height: 400px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  scrollbar-color: #cc0c5c transparent;\n\n  &::-webkit-scrollbar {\n    width: 8px;\n  }\n\n  &::-webkit-scrollbar-track {\n    background: transparent;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background: #cc0c5c;\n    border-radius: 10px;\n  }\n"
    ]);
    _templateObject23 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject24() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  align-items: center;\n  padding: 8px 10px;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n\n  &:hover {\n    background-color: #f9f9f9;\n  }\n"
    ]);
    _templateObject24 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject25() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 16px;\n  height: 16px;\n  stroke: #a4a4a4;\n  transition: transform 0.3s ease;\n\n  ",
        ":hover & {\n    transform: translateX(5px);\n    stroke: #cc0c5c;\n  }\n"
    ]);
    _templateObject25 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject26() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  box-sizing: border-box;\n  padding: 0 20px;\n  overflow-y: scroll;\n  scrollbar-width: thin;\n  scrollbar-color: #cc0c5c darkgrey;\n\n  &::-webkit-scrollbar {\n    width: 8px;\n  }\n\n  &::-webkit-scrollbar-track {\n    background: transparent;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: pink;\n    border-radius: 10px;\n    border: 2px solid transparent;\n    background-clip: content-box;\n  }\n"
    ]);
    _templateObject26 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject27() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: relative;\n  flex: 0 0 auto;\n  width: inherit;\n  display: flex;\n  flex-direction: row;\n  border-radius: 15px;\n  background: linear-gradient(135deg, #ffffff, #f7f7f7);\n  border: 1px solid #e5e5e5;\n  cursor: pointer;\n  transition:\n    transform 0.2s,\n    box-shadow 0.3s,\n    background 0.3s;\n  padding: 10px 13px;\n  align-items: center;\n  justify-content: flex-start;\n  overflow: hidden;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\n\n  img {\n    width: 30px;\n  }\n\n  &:hover {\n    transform: scale(1.05);\n    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);\n    background: linear-gradient(135deg, #cc0c5c, #ff3366);\n\n    p {\n      color: #ffffff;\n    }\n\n    img {\n      filter: brightness(0) invert(1);\n    }\n  }\n\n  p {\n    margin: 0;\n    text-align: start;\n    font-size: 14px;\n    padding-left: 10px;\n  }\n"
    ]);
    _templateObject27 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject28() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  background-color: #cc0c5c;\n  width: 2px;\n  height: 600px;\n  margin-left: 20px;\n"
    ]);
    _templateObject28 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject29() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  padding: 0 30px;\n  overflow-y: scroll;\n  scrollbar-width: thin;\n  scrollbar-color: #cc0c5c darkgrey;\n"
    ]);
    _templateObject29 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject30() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  color: #cc0c5c;\n  text-align: start;\n  padding: 0 15px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #efefef;\n    border-radius: 20px;\n    font-weight: bold;\n    text-decoration-color: #cc0c5c;\n  }\n"
    ]);
    _templateObject30 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject31() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  cursor: pointer;\n  transition: transform 0.2s ease;\n\n  &:hover {\n    transform: scale(1.1);\n    filter: none;\n    color: #cc0c5c;\n  }\n\n  svg path {\n    transition: fill 0.3s ease;\n  }\n\n  &:hover svg path {\n    stroke: #cc0c5c;\n  }\n"
    ]);
    _templateObject31 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject32() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: relative;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n\n  &:hover {\n    transform: scale(1.1);\n    filter: none;\n    color: #cc0c5c;\n\n    svg path {\n      stroke: #cc0c5c;\n    }\n  }\n"
    ]);
    _templateObject32 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject33() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: absolute;\n  top: -3px;\n  right: -5px;\n  background-color: greenyellow;\n  color: black;\n  font-size: 10px;\n  font-weight: bold;\n  border-radius: 50%;\n  width: 13px;\n  height: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"
    ]);
    _templateObject33 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject34() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 100%;\n  background: white;\n  border-radius: 0 0 10px 10px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  padding: 1rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 12px;\n  visibility: ",
        ";\n  pointer-events: ",
        ";\n  opacity: ",
        ";\n  transform: ",
        ";\n  transition: all 0.3s ease;\n  z-index: 1000;\n  max-height: 500px;\n  overflow-y: auto;\n\n  @media (max-width: 768px) {\n    position: fixed;\n    top: 60px;\n    left: 0;\n    right: 0;\n    border-radius: 0;\n    max-height: calc(100vh - 60px);\n    grid-template-columns: 1fr;\n  }\n"
    ]);
    _templateObject34 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject35() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  background: ",
        ";\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  color: ",
        ";\n  border-radius: 8px;\n  padding: 12px 16px;\n  border: 1px solid #e5e5e5;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  min-height: 140px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  &:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  }\n"
    ]);
    _templateObject35 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject36() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  font-weight: 600;\n  font-size: 16px;\n  margin-bottom: 8px;\n  letter-spacing: -0.5px;\n  color: white;\n  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);\n"
    ]);
    _templateObject36 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject37() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  flex-direction: row;\n  gap: 8px;\n  margin-top: auto;\n"
    ]);
    _templateObject37 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject38() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  font-size: 12px;\n  color: white;\n  text-decoration: none;\n  padding: 4px 8px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 4px;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  backdrop-filter: blur(10px);\n\n  &:hover {\n    background: rgba(255, 255, 255, 0.3);\n    transform: translateY(-1px);\n  }\n"
    ]);
    _templateObject38 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject39() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  font-size: 12px;\n  transform: rotate(45deg);\n"
    ]);
    _templateObject39 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject40() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  justify-content: center;\n  align-items: center;\n"
    ]);
    _templateObject40 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject41() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  padding: 4px 20px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n  border-left: 1px solid #000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &:first-child {\n    border-left: none;\n  }\n"
    ]);
    _templateObject41 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject42() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  color: #000;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  transition: color 0.3s ease;\n\n  ",
        ":hover & {\n    color: #666;\n  }\n"
    ]);
    _templateObject42 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject43() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  padding: 8px 12px;\n  border-radius: 20px;\n  background: #f5f5f5;\n  transition: all 0.3s ease;\n\n  &:hover {\n    background: #e0e0e0;\n  }\n"
    ]);
    _templateObject43 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject44() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  font-size: 14px;\n  font-weight: 500;\n  color: #333;\n"
    ]);
    _templateObject44 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject45() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  font-size: 12px;\n  color: #666;\n  transition: transform 0.3s ease;\n\n  ",
        ":hover & {\n    transform: rotate(180deg);\n  }\n"
    ]);
    _templateObject45 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject46() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  padding: 8px 12px;\n  border-radius: 20px;\n  background: #f5f5f5;\n  transition: all 0.3s ease;\n\n  &:hover {\n    background: #e0e0e0;\n  }\n"
    ]);
    _templateObject46 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject47() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: #ddd;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  overflow: hidden;\n  border: 2px solid #fff;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n"
    ]);
    _templateObject47 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject48() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  font-size: 14px;\n  font-weight: 500;\n  color: #333;\n"
    ]);
    _templateObject48 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject49() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  align-items: center;\n  gap: 5px;\n"
    ]);
    _templateObject49 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject50() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 12px;\n  border-radius: 20px;\n  text-decoration: none;\n  transition: all 0.3s ease;\n  cursor: pointer;\n\n  &:hover {\n    background: #e0e0e0;\n    transform: translateY(-1px);\n  }\n"
    ]);
    _templateObject50 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject51() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  color: #666;\n"
    ]);
    _templateObject51 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject52() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  font-size: 12px;\n  font-weight: 500;\n  color: #333;\n"
    ]);
    _templateObject52 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject53() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: relative;\n  display: inline-flex;\n"
    ]);
    _templateObject53 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject54() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: relative;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n  color: ",
        ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n\n  &:hover {\n    background: ",
        ";\n    color: #d4af37;\n    transform: scale(1.1);\n  }\n\n  svg {\n    width: 20px;\n    height: 20px;\n  }\n"
    ]);
    _templateObject54 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject55() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: absolute;\n  top: calc(100% + 0.5rem);\n  right: 0;\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);\n  min-width: 200px;\n  padding: 1rem;\n  z-index: 10001;\n  animation: slideDown 0.2s ease-out;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  white-space: nowrap;\n\n  @keyframes slideDown {\n    from {\n      opacity: 0;\n      transform: translateY(-10px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n\n  @media (max-width: 768px) {\n    right: 0;\n    left: auto;\n  }\n"
    ]);
    _templateObject55 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject56() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  font-size: 0.9rem;\n  color: #666;\n  text-align: center;\n  margin: 0 0 1rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid #e0e0e0;\n  font-family: 'Questrial', sans-serif;\n"
    ]);
    _templateObject56 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject57() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #1a1a1a;\n  font-size: 0.95rem;\n  font-weight: 500;\n  font-family: 'Questrial', sans-serif;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  text-align: left;\n\n  &:hover {\n    background: #f5f5f5;\n    color: #d4af37;\n  }\n\n  svg {\n    width: 18px;\n    height: 18px;\n    flex-shrink: 0;\n  }\n\n  span {\n    flex: 1;\n  }\n"
    ]);
    _templateObject57 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject58() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: relative;\n  display: inline-flex;\n"
    ]);
    _templateObject58 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject59() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: relative;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n  color: ",
        ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  position: relative;\n\n  &::before {\n    content: '';\n    position: absolute;\n    inset: 0;\n    border-radius: 50%;\n    background: ",
        ";\n    opacity: 0;\n    transform: scale(0.8);\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  }\n\n  &:hover {\n    background: ",
        ";\n    color: #cc0c5c;\n    transform: scale(1.08);\n  }\n\n  &:hover::before {\n    opacity: 1;\n    transform: scale(1);\n  }\n\n  &:active {\n    transform: scale(1.05);\n  }\n\n  svg {\n    width: 20px;\n    height: 20px;\n    position: relative;\n    z-index: 1;\n    transition: transform 0.2s ease;\n  }\n\n  &:hover svg {\n    transform: scale(1.1);\n  }\n"
    ]);
    _templateObject59 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject60() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  background: #cc0c5c;\n  color: white;\n  border-radius: 50%;\n  width: 18px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.7rem;\n  font-weight: 600;\n  font-family: 'Questrial', sans-serif;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  z-index: 10;\n"
    ]);
    _templateObject60 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject61() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: relative;\n  display: inline-flex;\n"
    ]);
    _templateObject61 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject62() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: relative;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n  color: ",
        ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  position: relative;\n\n  &::before {\n    content: '';\n    position: absolute;\n    inset: 0;\n    border-radius: 50%;\n    background: ",
        ";\n    opacity: 0;\n    transform: scale(0.8);\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  }\n\n  &:hover {\n    background: ",
        ";\n    color: #d4af37;\n    transform: scale(1.08);\n  }\n\n  &:hover::before {\n    opacity: 1;\n    transform: scale(1);\n  }\n\n  &:active {\n    transform: scale(1.05);\n  }\n\n  svg {\n    width: 20px;\n    height: 20px;\n    position: relative;\n    z-index: 1;\n    transition: transform 0.2s ease;\n  }\n\n  &:hover svg {\n    transform: scale(1.1);\n  }\n"
    ]);
    _templateObject62 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject63() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  background: #d4af37;\n  color: white;\n  border-radius: 50%;\n  width: 18px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.7rem;\n  font-weight: 600;\n  font-family: 'Questrial', sans-serif;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  z-index: 10;\n"
    ]);
    _templateObject63 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject64() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 100%;\n  background: ",
        ";\n  transition: background 0.3s ease;\n  border-top: ",
        ";\n  padding: 0.5rem 0;\n  margin-top: 0;\n\n  @media (max-width: 968px) {\n    display: none;\n  }\n"
    ]);
    _templateObject64 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject65() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  max-width: 1000px;\n  margin: 0 auto;\n  width: 100%;\n  padding: 0 1rem;\n\n  @media (max-width: 768px) {\n    padding: 0 1rem;\n  }\n"
    ]);
    _templateObject65 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject66() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n\n  @media (max-width: 1200px) {\n    gap: 1.25rem;\n  }\n"
    ]);
    _templateObject66 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject67() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n\n  &:hover button::after,\n  &:focus-within button::after {\n    width: 100%;\n  }\n"
    ]);
    _templateObject67 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject68() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: absolute;\n  top: calc(100% + 0.6rem);\n  left: 50%;\n  transform: translate(-50%, 8px);\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 0.75rem 0.9rem;\n  min-width: 220px;\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);\n  opacity: 0;\n  visibility: hidden;\n  pointer-events: none;\n  transition:\n    opacity 0.2s ease,\n    transform 0.2s ease,\n    visibility 0.2s ease;\n  z-index: 2000;\n\n  ",
        ":hover &,\n  ",
        ":focus-within & {\n    opacity: 1;\n    visibility: visible;\n    pointer-events: auto;\n    transform: translate(-50%, 0);\n  }\n"
    ]);
    _templateObject68 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject69() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n"
    ]);
    _templateObject69 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject70() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 100%;\n"
    ]);
    _templateObject70 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject71() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 100%;\n  text-align: left;\n  border: none;\n  background: none;\n  padding: 0.4rem 0.35rem;\n  border-radius: 8px;\n  color: #001f3f;\n  font-size: 0.95rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition:\n    background 0.2s ease,\n    color 0.2s ease;\n\n  &:hover,\n  &:focus-visible {\n    background: rgba(0, 31, 63, 0.08);\n    color: #d4af37;\n    outline: none;\n  }\n"
    ]);
    _templateObject71 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject72() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 1px;\n  height: 20px;\n  background: #9a8300;\n  flex-shrink: 0;\n"
    ]);
    _templateObject72 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject73() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  background: none;\n  border: none;\n  color: #ffffff;\n  font-size: 1rem;\n  font-weight: 500;\n  font-family: 'Questrial', sans-serif;\n  cursor: pointer;\n  padding: 0.5rem 0;\n  position: relative;\n  transition: color 0.2s ease;\n  text-transform: capitalize;\n\n  &::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 0;\n    height: 2px;\n    background: #d4af37;\n    transition: width 0.3s ease;\n  }\n\n  &:hover {\n    color: #d4af37;\n\n    &::after {\n      width: 100%;\n    }\n  }\n\n  @media (max-width: 1200px) {\n    font-size: 0.95rem;\n  }\n"
    ]);
    _templateObject73 = function _templateObject() {
        return data;
    };
    return data;
}
;
;
var HeaderContainer = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__HeaderContainer",
    componentId: "sc-23b81648-0"
})(_templateObject(), function(param) {
    var $isScrolled = param.$isScrolled;
    return $isScrolled ? '#ffffff' : 'transparent';
});
var HEADER_CENTER_VH = 1.5;
var toHeaderDesktop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"])(_templateObject1(), HEADER_CENTER_VH);
var fromHeaderDesktop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"])(_templateObject2(), HEADER_CENTER_VH);
var toHeaderMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"])(_templateObject3(), HEADER_CENTER_VH);
var fromHeaderMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"])(_templateObject4(), HEADER_CENTER_VH);
var AnimatedLogoWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__AnimatedLogoWrapper",
    componentId: "sc-23b81648-1"
})(_templateObject9(), function(param) {
    var $phase = param.$phase;
    return $phase === 'done' || $phase === 'animating-out' ? '#9A8300' : '#ffffff';
}, function(param) {
    var $phase = param.$phase;
    switch($phase){
        case 'idle':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject5());
        case 'animating-out':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject6(), toHeaderDesktop, toHeaderMobile);
        case 'animating-in':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject7(), fromHeaderDesktop, fromHeaderMobile);
        case 'done':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject8());
    }
});
var HeaderMainContainer = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__HeaderMainContainer",
    componentId: "sc-23b81648-2"
})(_templateObject10());
var HeaderLogo = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__HeaderLogo",
    componentId: "sc-23b81648-3"
})(_templateObject11());
var HeaderDetails = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__HeaderDetails",
    componentId: "sc-23b81648-4"
})(_templateObject12());
var HeaderActions = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__HeaderActions",
    componentId: "sc-23b81648-5"
})(_templateObject13());
var CategoryContainer = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__CategoryContainer",
    componentId: "sc-23b81648-6"
})(_templateObject15(), function(param) {
    var open = param.open;
    return open && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject14());
});
var CategoryText = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "Header.styles__CategoryText",
    componentId: "sc-23b81648-7"
})(_templateObject16());
var MenuIcon = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "Header.styles__MenuIcon",
    componentId: "sc-23b81648-8"
})(_templateObject17());
var SearchContent = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__SearchContent",
    componentId: "sc-23b81648-9"
})(_templateObject18(), function(param) {
    var visible = param.visible;
    return visible ? '600px' : '0';
}, function(param) {
    var visible = param.visible;
    return visible ? 1 : 0;
}, function(param) {
    var visible = param.visible;
    return visible ? '15px' : '0';
});
var CatalogContent = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__CatalogContent",
    componentId: "sc-23b81648-10"
})(_templateObject19(), function(param) {
    var visible = param.visible;
    return visible ? '600px' : '0';
}, function(param) {
    var visible = param.visible;
    return visible ? 1 : 0;
}, function(param) {
    var visible = param.visible;
    return visible ? '15px' : '0';
}, function(param) {
    var visible = param.visible;
    return visible ? 'flex' : 'none';
});
var SearchBar = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__SearchBar",
    componentId: "sc-23b81648-11"
})(_templateObject20());
var SearchIconLarge = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "Header.styles__SearchIconLarge",
    componentId: "sc-23b81648-12"
})(_templateObject21());
var SearchInput = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input.withConfig({
    displayName: "Header.styles__SearchInput",
    componentId: "sc-23b81648-13"
})(_templateObject22());
var CategoryList = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "Header.styles__CategoryList",
    componentId: "sc-23b81648-14"
})(_templateObject23());
var CategoryItem = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].li.withConfig({
    displayName: "Header.styles__CategoryItem",
    componentId: "sc-23b81648-15"
})(_templateObject24());
var CategoryArrow = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "Header.styles__CategoryArrow",
    componentId: "sc-23b81648-16"
})(_templateObject25(), CategoryItem);
var CatalogCategories = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__CatalogCategories",
    componentId: "sc-23b81648-17"
})(_templateObject26());
var SwiperCell = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__SwiperCell",
    componentId: "sc-23b81648-18"
})(_templateObject27());
var VerticalLine = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__VerticalLine",
    componentId: "sc-23b81648-19"
})(_templateObject28());
var SubcategoryList = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__SubcategoryList",
    componentId: "sc-23b81648-20"
})(_templateObject29());
var SubcategoryItem = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__SubcategoryItem",
    componentId: "sc-23b81648-21"
})(_templateObject30());
var AccountIcon = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__AccountIcon",
    componentId: "sc-23b81648-22"
})(_templateObject31());
var ScaleButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__ScaleButton",
    componentId: "sc-23b81648-23"
})(_templateObject32());
var CountBadge = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Header.styles__CountBadge",
    componentId: "sc-23b81648-24"
})(_templateObject33());
var MobileMenuContent = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__MobileMenuContent",
    componentId: "sc-23b81648-25"
})(_templateObject34(), function(param) {
    var isVisible = param.isVisible;
    return isVisible ? 'visible' : 'hidden';
}, function(param) {
    var isVisible = param.isVisible;
    return isVisible ? 'auto' : 'none';
}, function(param) {
    var isVisible = param.isVisible;
    return isVisible ? 1 : 0;
}, function(param) {
    var isVisible = param.isVisible;
    return isVisible ? 'translateY(0)' : 'translateY(-10px)';
});
var MobileMenuCard = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__MobileMenuCard",
    componentId: "sc-23b81648-26"
})(_templateObject35(), function(param) {
    var bgImage = param.bgImage;
    return bgImage ? "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(".concat(bgImage, ")") : 'linear-gradient(135deg, #ffffff, #f7f7f7)';
}, function(param) {
    var textColor = param.textColor;
    return textColor || '#333';
});
var MobileMenuLabel = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__MobileMenuLabel",
    componentId: "sc-23b81648-27"
})(_templateObject36());
var MobileMenuLinks = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__MobileMenuLinks",
    componentId: "sc-23b81648-28"
})(_templateObject37());
var MobileMenuLink = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].a.withConfig({
    displayName: "Header.styles__MobileMenuLink",
    componentId: "sc-23b81648-29"
})(_templateObject38());
var MobileMenuIcon = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Header.styles__MobileMenuIcon",
    componentId: "sc-23b81648-30"
})(_templateObject39());
var ProductCategories = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__ProductCategories",
    componentId: "sc-23b81648-31"
})(_templateObject40());
var ProductCategory = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__ProductCategory",
    componentId: "sc-23b81648-32"
})(_templateObject41());
var ProductCategoryName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Header.styles__ProductCategoryName",
    componentId: "sc-23b81648-33"
})(_templateObject42(), ProductCategory);
var CurrencySwitcher = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__CurrencySwitcher",
    componentId: "sc-23b81648-34"
})(_templateObject43());
var CurrencyText = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Header.styles__CurrencyText",
    componentId: "sc-23b81648-35"
})(_templateObject44());
var CurrencyArrow = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Header.styles__CurrencyArrow",
    componentId: "sc-23b81648-36"
})(_templateObject45(), CurrencySwitcher);
var CountrySwitcher = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__CountrySwitcher",
    componentId: "sc-23b81648-37"
})(_templateObject46());
var CountryFlag = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__CountryFlag",
    componentId: "sc-23b81648-38"
})(_templateObject47());
var CountryText = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Header.styles__CountryText",
    componentId: "sc-23b81648-39"
})(_templateObject48());
var Contacts = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__Contacts",
    componentId: "sc-23b81648-40"
})(_templateObject49());
var ContactItem = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].a.withConfig({
    displayName: "Header.styles__ContactItem",
    componentId: "sc-23b81648-41"
})(_templateObject50());
var ContactIcon = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__ContactIcon",
    componentId: "sc-23b81648-42"
})(_templateObject51());
var ContactText = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Header.styles__ContactText",
    componentId: "sc-23b81648-43"
})(_templateObject52());
var UserIconWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__UserIconWrapper",
    componentId: "sc-23b81648-44"
})(_templateObject53());
var UserIconButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "Header.styles__UserIconButton",
    componentId: "sc-23b81648-45"
})(_templateObject54(), function(param) {
    var $isScrolled = param.$isScrolled;
    return $isScrolled ? '#1a1a1a' : '#ffffff';
}, function(param) {
    var $isScrolled = param.$isScrolled;
    return $isScrolled ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.1)';
});
var UserModal = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__UserModal",
    componentId: "sc-23b81648-46"
})(_templateObject55());
var UserModalMessage = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "Header.styles__UserModalMessage",
    componentId: "sc-23b81648-47"
})(_templateObject56());
var UserModalItem = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "Header.styles__UserModalItem",
    componentId: "sc-23b81648-48"
})(_templateObject57());
var LikedIconWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__LikedIconWrapper",
    componentId: "sc-23b81648-49"
})(_templateObject58());
var LikedButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "Header.styles__LikedButton",
    componentId: "sc-23b81648-50"
})(_templateObject59(), function(param) {
    var $isScrolled = param.$isScrolled;
    return $isScrolled ? '#1a1a1a' : '#ffffff';
}, function(param) {
    var $isScrolled = param.$isScrolled;
    return $isScrolled ? 'rgba(204, 12, 92, 0.1)' : 'rgba(204, 12, 92, 0.15)';
}, function(param) {
    var $isScrolled = param.$isScrolled;
    return $isScrolled ? 'rgba(204, 12, 92, 0.08)' : 'rgba(255, 255, 255, 0.12)';
});
var LikedBadge = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Header.styles__LikedBadge",
    componentId: "sc-23b81648-51"
})(_templateObject60());
var CartIconWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__CartIconWrapper",
    componentId: "sc-23b81648-52"
})(_templateObject61());
var CartButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "Header.styles__CartButton",
    componentId: "sc-23b81648-53"
})(_templateObject62(), function(param) {
    var $isScrolled = param.$isScrolled;
    return $isScrolled ? '#1a1a1a' : '#ffffff';
}, function(param) {
    var $isScrolled = param.$isScrolled;
    return $isScrolled ? 'rgba(212, 175, 55, 0.1)' : 'rgba(212, 175, 55, 0.15)';
}, function(param) {
    var $isScrolled = param.$isScrolled;
    return $isScrolled ? 'rgba(212, 175, 55, 0.08)' : 'rgba(255, 255, 255, 0.12)';
});
var CartBadge = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Header.styles__CartBadge",
    componentId: "sc-23b81648-54"
})(_templateObject63());
var NavigationBar = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nav.withConfig({
    displayName: "Header.styles__NavigationBar",
    componentId: "sc-23b81648-55"
})(_templateObject64(), function(param) {
    var $isScrolled = param.$isScrolled;
    return $isScrolled ? '#001f3f' : 'transparent';
}, function(param) {
    var $isScrolled = param.$isScrolled;
    return $isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none';
});
var NavContainer = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__NavContainer",
    componentId: "sc-23b81648-56"
})(_templateObject65());
var NavLinks = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__NavLinks",
    componentId: "sc-23b81648-57"
})(_templateObject66());
var NavItem = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__NavItem",
    componentId: "sc-23b81648-58"
})(_templateObject67());
var Submenu = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__Submenu",
    componentId: "sc-23b81648-59"
})(_templateObject68(), NavItem, NavItem);
var SubmenuList = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "Header.styles__SubmenuList",
    componentId: "sc-23b81648-60"
})(_templateObject69());
var SubmenuItem = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].li.withConfig({
    displayName: "Header.styles__SubmenuItem",
    componentId: "sc-23b81648-61"
})(_templateObject70());
var SubmenuLink = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "Header.styles__SubmenuLink",
    componentId: "sc-23b81648-62"
})(_templateObject71());
var NavLinkDivider = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Header.styles__NavLinkDivider",
    componentId: "sc-23b81648-63"
})(_templateObject72());
var NavLink = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "Header.styles__NavLink",
    componentId: "sc-23b81648-64"
})(_templateObject73());
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/dropdown/Dropdown.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Chevron",
    ()=>Chevron,
    "Container",
    ()=>Container,
    "Menu",
    ()=>Menu,
    "NoResults",
    ()=>NoResults,
    "OptionIcon",
    ()=>OptionIcon,
    "OptionRow",
    ()=>OptionRow,
    "PlaceholderText",
    ()=>PlaceholderText,
    "SearchInput",
    ()=>SearchInput,
    "Trigger",
    ()=>Trigger,
    "ValueText",
    ()=>ValueText,
    "VisuallyHiddenLabel",
    ()=>VisuallyHiddenLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
;
function _templateObject() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: absolute !important;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  clip: rect(1px, 1px, 1px, 1px);\n  white-space: nowrap;\n  clip-path: inset(50%);\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: relative;\n  width: ",
        ";\n  font-family: inherit;\n"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 100%;\n  height: 28px;\n  padding: 0;\n  border: none;\n  border-bottom: 1px solid\n    ",
        ";\n  background: transparent;\n  color: ",
        ";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 4px;\n  cursor: pointer;\n  transition:\n    border-color 0.2s ease,\n    color 0.2s ease;\n\n  &:hover {\n    border-color: ",
        ";\n  }\n\n  &:focus-visible {\n    outline: none;\n    border-color: #9a8300;\n  }\n"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  color: ",
        ";\n  font-weight: 400;\n  font-size: 0.875rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  color: ",
        ";\n  font-size: 0.875rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  font-size: 0.7rem;\n  transform: rotate(0deg);\n  transition:\n    transform 0.2s ease,\n    color 0.2s ease;\n  color: ",
        ";\n  opacity: 0.7;\n\n  &[data-open='true'] {\n    transform: rotate(180deg);\n    color: ",
        ";\n    opacity: 1;\n  }\n"
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  0% { opacity: 0; transform: translateY(-4px) scale(0.98); }\n  100% { opacity: 1; transform: translateY(0) scale(1); }\n"
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: 4px 0 0 0;\n  padding: 4px;\n  border-radius: 8px;\n  background: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  box-shadow:\n    0 4px 12px rgba(0, 0, 0, 0.1),\n    0 2px 4px rgba(0, 0, 0, 0.06);\n  list-style: none;\n  max-height: ",
        ";\n  overflow: auto;\n  z-index: 1000;\n  animation: ",
        " 0.12s ease both;\n\n  scrollbar-width: thin;\n  scrollbar-color: #c7c7c7 transparent;\n  &::-webkit-scrollbar {\n    width: 6px;\n  }\n  &::-webkit-scrollbar-thumb {\n    background: #c7c7c7;\n    border-radius: 6px;\n  }\n"
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 100%;\n  height: 32px;\n  margin: 2px 2px 4px;\n  padding: 0 8px;\n  border-radius: 6px;\n  border: 1px solid #e2e2e2;\n  background: #fafafa;\n  color: #001f3f;\n  font-size: 0.875rem;\n  &:focus {\n    outline: 2px solid #9a8300;\n    outline-offset: 1px;\n  }\n"
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-height: 32px;\n  padding: 4px 8px;\n  margin-bottom: 2px;\n  border-radius: 6px;\n  color: #001f3f;\n  font-size: 0.875rem;\n  cursor: pointer;\n  user-select: none;\n  transition:\n    background 0.15s ease,\n    color 0.15s ease;\n\n  &[data-disabled] {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n\n  &[aria-selected='true'] {\n    background: rgba(154, 131, 0, 0.08);\n    color: #9a8300;\n    font-weight: 500;\n  }\n\n  &[data-highlighted] {\n    background: rgba(0, 31, 63, 0.06);\n  }\n\n  &:not([data-disabled]):hover {\n    background: rgba(0, 31, 63, 0.06);\n  }\n"
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject10() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: inline-flex;\n  width: 18px;\n  height: 18px;\n  & > svg {\n    width: 18px;\n    height: 18px;\n    fill: currentColor;\n    stroke: currentColor;\n  }\n  & > img {\n    width: 18px;\n    height: 18px;\n    object-fit: contain;\n  }\n"
    ]);
    _templateObject10 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject11() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  color: #8a8f98;\n  padding: 12px 8px;\n  text-align: center;\n"
    ]);
    _templateObject11 = function _templateObject() {
        return data;
    };
    return data;
}
;
var VisuallyHiddenLabel = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Dropdown.styles__VisuallyHiddenLabel",
    componentId: "sc-e01969a5-0"
})(_templateObject());
var Container = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Dropdown.styles__Container",
    componentId: "sc-e01969a5-1"
})(_templateObject1(), function(param) {
    var $width = param.$width;
    return $width !== null && $width !== void 0 ? $width : '240px';
});
var Trigger = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "Dropdown.styles__Trigger",
    componentId: "sc-e01969a5-2"
})(_templateObject2(), function(param) {
    var $isScrolled = param.$isScrolled;
    return $isScrolled ? 'rgba(0, 31, 63, 0.2)' : 'rgba(255, 255, 255, 0.3)';
}, function(param) {
    var $isScrolled = param.$isScrolled;
    return $isScrolled ? '#001f3f' : '#ffffff';
}, function(param) {
    var $isScrolled = param.$isScrolled;
    return $isScrolled ? '#9a8300' : 'rgba(255, 255, 255, 0.6)';
});
var ValueText = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Dropdown.styles__ValueText",
    componentId: "sc-e01969a5-3"
})(_templateObject3(), function(param) {
    var $isScrolled = param.$isScrolled;
    return $isScrolled ? '#001f3f' : '#ffffff';
});
var PlaceholderText = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Dropdown.styles__PlaceholderText",
    componentId: "sc-e01969a5-4"
})(_templateObject4(), function(param) {
    var $isScrolled = param.$isScrolled;
    return $isScrolled ? '#8a8f98' : 'rgba(255, 255, 255, 0.7)';
});
var Chevron = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Dropdown.styles__Chevron",
    componentId: "sc-e01969a5-5"
})(_templateObject5(), function(param) {
    var $isScrolled = param.$isScrolled;
    return $isScrolled ? '#001f3f' : 'rgba(255, 255, 255, 0.8)';
}, function(param) {
    var $isScrolled = param.$isScrolled;
    return $isScrolled ? '#9a8300' : '#ffffff';
});
var pop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"])(_templateObject6());
var Menu = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "Dropdown.styles__Menu",
    componentId: "sc-e01969a5-6"
})(_templateObject7(), function(param) {
    var $maxHeight = param.$maxHeight;
    return $maxHeight !== null && $maxHeight !== void 0 ? $maxHeight : '240px';
}, pop);
var SearchInput = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input.withConfig({
    displayName: "Dropdown.styles__SearchInput",
    componentId: "sc-e01969a5-7"
})(_templateObject8());
var OptionRow = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Dropdown.styles__OptionRow",
    componentId: "sc-e01969a5-8"
})(_templateObject9());
var OptionIcon = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Dropdown.styles__OptionIcon",
    componentId: "sc-e01969a5-9"
})(_templateObject10());
var NoResults = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Dropdown.styles__NoResults",
    componentId: "sc-e01969a5-10"
})(_templateObject11());
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/dropdown/Dropdown.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$dropdown$2f$Dropdown$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/dropdown/Dropdown.styles.ts [app-client] (ecmascript)");
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
var Dropdown = function(param) {
    var options = param.options, value = param.value, onChange = param.onChange, _param_placeholder = param.placeholder, placeholder = _param_placeholder === void 0 ? 'Select…' : _param_placeholder, _param_disabled = param.disabled, disabled = _param_disabled === void 0 ? false : _param_disabled, _param_searchable = param.searchable, searchable = _param_searchable === void 0 ? false : _param_searchable, width = param.width, maxMenuHeight = param.maxMenuHeight, ariaLabel = param.ariaLabel, _param_allowClear = param.allowClear, allowClear = _param_allowClear === void 0 ? true : _param_allowClear, _param_isScrolled = param.isScrolled, isScrolled = _param_isScrolled === void 0 ? false : _param_isScrolled;
    var _filtered_highlight;
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), open = _useState[0], setOpen = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), 2), query = _useState1[0], setQuery = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1), 2), highlight = _useState2[0], setHighlight = _useState2[1];
    var containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var listRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var selected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Dropdown.useMemo[selected]": function() {
            return options.find({
                "Dropdown.useMemo[selected]": function(o) {
                    return o.value === value;
                }
            }["Dropdown.useMemo[selected]"]);
        }
    }["Dropdown.useMemo[selected]"], [
        options,
        value
    ]);
    var filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Dropdown.useMemo[filtered]": function() {
            if (!searchable || !query.trim()) return options;
            var q = query.toLowerCase();
            return options.filter({
                "Dropdown.useMemo[filtered]": function(o) {
                    return o.label.toLowerCase().includes(q) || o.value.toLowerCase().includes(q);
                }
            }["Dropdown.useMemo[filtered]"]);
        }
    }["Dropdown.useMemo[filtered]"], [
        options,
        query,
        searchable
    ]);
    var firstEnabledIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Dropdown.useMemo[firstEnabledIndex]": function() {
            return filtered.findIndex({
                "Dropdown.useMemo[firstEnabledIndex]": function(o) {
                    return !o.disabled;
                }
            }["Dropdown.useMemo[firstEnabledIndex]"]);
        }
    }["Dropdown.useMemo[firstEnabledIndex]"], [
        filtered
    ]);
    var openMenu = function() {
        if (disabled) return;
        setOpen(true);
        setHighlight(firstEnabledIndex);
    };
    var closeMenu = function() {
        setOpen(false);
        setQuery('');
        setHighlight(-1);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dropdown.useEffect": function() {
            if (!open) return;
            var onClick = {
                "Dropdown.useEffect.onClick": function(e) {
                    if (!containerRef.current) return;
                    if (!containerRef.current.contains(e.target)) closeMenu();
                }
            }["Dropdown.useEffect.onClick"];
            var onScroll = {
                "Dropdown.useEffect.onScroll": function(e) {
                    var _containerRef_current;
                    if (!((_containerRef_current = containerRef.current) === null || _containerRef_current === void 0 ? void 0 : _containerRef_current.contains(e.target))) closeMenu();
                }
            }["Dropdown.useEffect.onScroll"];
            window.addEventListener('mousedown', onClick);
            window.addEventListener('scroll', onScroll, true);
            return ({
                "Dropdown.useEffect": function() {
                    window.removeEventListener('mousedown', onClick);
                    window.removeEventListener('scroll', onScroll, true);
                }
            })["Dropdown.useEffect"];
        }
    }["Dropdown.useEffect"], [
        open
    ]);
    var onKeyDownTrigger = function(e) {
        if (disabled) return;
        if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (!open) {
                openMenu();
            } else {
                moveHighlight(1);
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (!open) openMenu();
            else moveHighlight(-1);
        } else if (e.key === 'Escape') {
            if (open) {
                e.stopPropagation();
                closeMenu();
            } else if (allowClear && value) {
                onChange(undefined);
            }
        }
    };
    var moveHighlight = function(delta) {
        if (!filtered.length) return;
        var i = highlight;
        for(var step = 0; step < filtered.length; step++){
            i = (i + delta + filtered.length) % filtered.length;
            if (!filtered[i].disabled) {
                setHighlight(i);
                break;
            }
        }
    };
    var onKeyDownList = function(e) {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            moveHighlight(1);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            moveHighlight(-1);
        } else if (e.key === 'Home') {
            e.preventDefault();
            setHighlight(firstEnabledIndex);
        } else if (e.key === 'End') {
            e.preventDefault();
            var last = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(filtered).reverse().findIndex(function(o) {
                return !o.disabled;
            });
            if (last !== -1) setHighlight(filtered.length - 1 - last);
        } else if (e.key === 'Enter') {
            var _filtered_highlight;
            e.preventDefault();
            if (highlight >= 0 && !((_filtered_highlight = filtered[highlight]) === null || _filtered_highlight === void 0 ? void 0 : _filtered_highlight.disabled)) {
                onChange(filtered[highlight].value);
                closeMenu();
            }
        } else if (e.key === 'Escape') {
            e.preventDefault();
            closeMenu();
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dropdown.useEffect": function() {
            var _listRef_current;
            if (!open || highlight < 0) return;
            var el = (_listRef_current = listRef.current) === null || _listRef_current === void 0 ? void 0 : _listRef_current.querySelector('[data-index="'.concat(highlight, '"]'));
            el === null || el === void 0 ? void 0 : el.scrollIntoView({
                block: 'nearest'
            });
        }
    }["Dropdown.useEffect"], [
        highlight,
        open
    ]);
    var onSelect = function(idx) {
        var opt = filtered[idx];
        if (!opt || opt.disabled) return;
        onChange(opt.value);
        closeMenu();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$dropdown$2f$Dropdown$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
        ref: containerRef,
        "data-open": open,
        $width: width,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$dropdown$2f$Dropdown$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VisuallyHiddenLabel"], {
                id: "dropdown-label",
                children: ariaLabel || 'Dropdown'
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/dropdown/Dropdown.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$dropdown$2f$Dropdown$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
                type: "button",
                "aria-haspopup": "listbox",
                "aria-expanded": open,
                "aria-labelledby": "dropdown-label",
                onClick: function() {
                    return open ? closeMenu() : openMenu();
                },
                onKeyDown: onKeyDownTrigger,
                disabled: disabled,
                "data-disabled": disabled || undefined,
                $isScrolled: isScrolled,
                children: [
                    selected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$dropdown$2f$Dropdown$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueText"], {
                        $isScrolled: isScrolled,
                        children: selected.label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/dropdown/Dropdown.tsx",
                        lineNumber: 199,
                        columnNumber: 11
                    }, _this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$dropdown$2f$Dropdown$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaceholderText"], {
                        $isScrolled: isScrolled,
                        children: placeholder
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/dropdown/Dropdown.tsx",
                        lineNumber: 201,
                        columnNumber: 11
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$dropdown$2f$Dropdown$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chevron"], {
                        $isScrolled: isScrolled,
                        "data-open": open,
                        "aria-hidden": true,
                        children: "▾"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/dropdown/Dropdown.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/dropdown/Dropdown.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, _this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$dropdown$2f$Dropdown$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"], {
                role: "listbox",
                "aria-activedescendant": highlight >= 0 ? "opt-".concat((_filtered_highlight = filtered[highlight]) === null || _filtered_highlight === void 0 ? void 0 : _filtered_highlight.value) : undefined,
                onKeyDown: onKeyDownList,
                tabIndex: -1,
                ref: listRef,
                $maxHeight: maxMenuHeight,
                children: [
                    searchable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$dropdown$2f$Dropdown$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchInput"], {
                        autoFocus: true,
                        placeholder: "Search…",
                        value: query,
                        onChange: function(e) {
                            setQuery(e.target.value);
                            setHighlight(-1);
                        },
                        onKeyDown: function(e) {
                            if (e.key === 'ArrowDown') {
                                e.preventDefault();
                                setHighlight(firstEnabledIndex);
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/dropdown/Dropdown.tsx",
                        lineNumber: 222,
                        columnNumber: 13
                    }, _this),
                    filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$dropdown$2f$Dropdown$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoResults"], {
                        children: "No results"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/dropdown/Dropdown.tsx",
                        lineNumber: 240,
                        columnNumber: 13
                    }, _this) : filtered.map(function(opt, i) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$dropdown$2f$Dropdown$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionRow"], {
                            as: "li",
                            role: "option",
                            id: "opt-".concat(opt.value),
                            "data-index": i,
                            "aria-selected": opt.value === value,
                            "data-highlighted": i === highlight || undefined,
                            "data-disabled": opt.disabled || undefined,
                            onMouseEnter: function() {
                                return !opt.disabled && setHighlight(i);
                            },
                            onClick: function() {
                                return onSelect(i);
                            },
                            children: [
                                opt.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$dropdown$2f$Dropdown$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionIcon"], {
                                    children: opt.icon
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/dropdown/Dropdown.tsx",
                                    lineNumber: 255,
                                    columnNumber: 30
                                }, _this),
                                opt.label
                            ]
                        }, opt.value, true, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/dropdown/Dropdown.tsx",
                            lineNumber: 243,
                            columnNumber: 15
                        }, _this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/dropdown/Dropdown.tsx",
                lineNumber: 211,
                columnNumber: 9
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/dropdown/Dropdown.tsx",
        lineNumber: 182,
        columnNumber: 5
    }, _this);
};
_s(Dropdown, "QC27ZSh8RpRvGcZL36+dKl8LH3s=");
_c = Dropdown;
const __TURBOPACK__default__export__ = Dropdown;
var _c;
__turbopack_context__.k.register(_c, "Dropdown");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/dropdown/CurrencyDropdown.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$dropdown$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/dropdown/Dropdown.tsx [app-client] (ecmascript)");
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
var currencyOptions = [
    {
        value: 'USD',
        label: 'USD'
    },
    {
        value: 'EUR',
        label: 'EUR'
    },
    {
        value: 'GBP',
        label: 'GBP'
    },
    {
        value: 'JPY',
        label: 'JPY'
    },
    {
        value: 'AUD',
        label: 'AUD'
    },
    {
        value: 'CAD',
        label: 'CAD'
    },
    {
        value: 'CHF',
        label: 'CHF'
    },
    {
        value: 'CNY',
        label: 'CNY'
    },
    {
        value: 'SEK',
        label: 'SEK'
    },
    {
        value: 'NOK',
        label: 'NOK'
    },
    {
        value: 'AMD',
        label: 'AMD'
    }
];
var CurrencyDropdown = function(param) {
    var _param_width = param.width, width = _param_width === void 0 ? '60px' : _param_width, _param_searchable = param.searchable, searchable = _param_searchable === void 0 ? false : _param_searchable, onChange = param.onChange, _param_isScrolled = param.isScrolled, isScrolled = _param_isScrolled === void 0 ? false : _param_isScrolled;
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "CurrencyDropdown._useState.useState": function() {
            return ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('currency') || 'USD' : "TURBOPACK unreachable";
        }
    }["CurrencyDropdown._useState.useState"]), 2), selected = _useState[0], setSelected = _useState[1];
    var handleChange = function(val) {
        if (!val) return;
        setSelected(val);
        localStorage.setItem('currency', val);
        onChange === null || onChange === void 0 ? void 0 : onChange(val);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$dropdown$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        options: currencyOptions,
        value: selected,
        onChange: handleChange,
        placeholder: "Currency",
        width: width,
        searchable: searchable,
        ariaLabel: "Select currency",
        isScrolled: isScrolled
    }, void 0, false, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/dropdown/CurrencyDropdown.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, _this);
};
_s(CurrencyDropdown, "/z+b5dYgQmU2e3SXNWgyeDbdyF4=");
_c = CurrencyDropdown;
const __TURBOPACK__default__export__ = CurrencyDropdown;
var _c;
__turbopack_context__.k.register(_c, "CurrencyDropdown");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$HeaderModel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/HeaderModel.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$likedModal$2f$LikedModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/context/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/locale.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/lib/locale.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$dropdown$2f$CurrencyDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/dropdown/CurrencyDropdown.tsx [app-client] (ecmascript)");
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
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
;
var Header = function() {
    _s();
    var router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    var pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    var params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    var locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeLocale"])(params === null || params === void 0 ? void 0 : params.locale);
    var normalizedPath = pathname && pathname.startsWith("/".concat(locale)) ? pathname.replace("/".concat(locale), '') || '/' : pathname || '/';
    var forceScrolled = normalizedPath !== '/';
    var categories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$HeaderModel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHeaderModel"])().categories;
    var bagsCategory = categories.find(function(category) {
        return category.id === 1000;
    });
    var bagsSubcategories = (bagsCategory === null || bagsCategory === void 0 ? void 0 : bagsCategory.subcategories) || [];
    var headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isAccountBoxVisible = _useState[0], setIsAccountBoxVisible = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isLoginPopupOpen = _useState1[0], setIsLoginPopupOpen = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isRegisterPopupOpen = _useState2[0], setIsRegisterPopupOpen = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isCartModalOpen = _useState3[0], setIsCartModalOpen = _useState3[1];
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isLikedModalOpen = _useState4[0], setIsLikedModalOpen = _useState4[1];
    var isAuthenticated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])().isAuthenticated;
    var _useState5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), 2), cartCount = _useState5[0], setCartCount = _useState5[1];
    var _useState6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), 2), likedCount = _useState6[0], setLikedCount = _useState6[1];
    var _useState7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isScrolled = _useState7[0], setIsScrolled = _useState7[1];
    var _useState8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle'), 2), phase = _useState8[0], setPhase = _useState8[1];
    var accountBoxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var toggleAccountBox = function() {
        setIsAccountBoxVisible(function(prev) {
            return !prev;
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": function() {
            if (isAuthenticated) {
                setIsAccountBoxVisible(false);
            }
        }
    }["Header.useEffect"], [
        isAuthenticated
    ]);
    var closeAccountBox = function() {
        return setIsAccountBoxVisible(false);
    };
    var openLoginPopup = function() {
        return setIsLoginPopupOpen(true);
    };
    var closeLoginPopup = function() {
        return setIsLoginPopupOpen(false);
    };
    var openRegisterPopup = function() {
        return setIsRegisterPopupOpen(true);
    };
    var closeRegisterPopup = function() {
        return setIsRegisterPopupOpen(false);
    };
    var toggleCartModal = function() {
        return setIsCartModalOpen(function(prev) {
            return !prev;
        });
    };
    var closeCartModal = function() {
        return setIsCartModalOpen(false);
    };
    var toggleLikedModal = function() {
        return setIsLikedModalOpen(function(prev) {
            return !prev;
        });
    };
    var closeLikedModal = function() {
        return setIsLikedModalOpen(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": function() {
            if (!isAccountBoxVisible) return;
            var handleClickOutside = {
                "Header.useEffect.handleClickOutside": function(event) {
                    if (accountBoxRef.current && !accountBoxRef.current.contains(event.target)) {
                        closeAccountBox();
                    }
                }
            }["Header.useEffect.handleClickOutside"];
            var handleKeyDown = {
                "Header.useEffect.handleKeyDown": function(event) {
                    if (event.key === 'Escape') {
                        closeAccountBox();
                    }
                }
            }["Header.useEffect.handleKeyDown"];
            window.addEventListener('mousedown', handleClickOutside);
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "Header.useEffect": function() {
                    window.removeEventListener('mousedown', handleClickOutside);
                    window.removeEventListener('keydown', handleKeyDown);
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        isAccountBoxVisible
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": function() {
            if (forceScrolled) return;
            var animLockRef = {
                current: false
            };
            var ticking = false;
            var latestY = window.scrollY;
            var updateScrollState = {
                "Header.useEffect.updateScrollState": function() {
                    var atTop = latestY <= 2;
                    setIsScrolled(!atTop);
                    if (animLockRef.current) return;
                    if (!atTop && phase === 'idle') {
                        animLockRef.current = true;
                        setPhase('animating-out');
                        setTimeout({
                            "Header.useEffect.updateScrollState": function() {
                                setPhase('done');
                                animLockRef.current = false;
                            }
                        }["Header.useEffect.updateScrollState"], 500);
                    } else if (atTop && phase === 'done') {
                        animLockRef.current = true;
                        setPhase('animating-in');
                        setTimeout({
                            "Header.useEffect.updateScrollState": function() {
                                setPhase('idle');
                                animLockRef.current = false;
                            }
                        }["Header.useEffect.updateScrollState"], 500);
                    }
                }
            }["Header.useEffect.updateScrollState"];
            var onScroll = {
                "Header.useEffect.onScroll": function() {
                    latestY = window.scrollY;
                    if (!ticking) {
                        ticking = true;
                        requestAnimationFrame({
                            "Header.useEffect.onScroll": function() {
                                updateScrollState();
                                ticking = false;
                            }
                        }["Header.useEffect.onScroll"]);
                    }
                }
            }["Header.useEffect.onScroll"];
            updateScrollState();
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            return ({
                "Header.useEffect": function() {
                    return window.removeEventListener('scroll', onScroll);
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        phase,
        forceScrolled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": function() {
            if (forceScrolled) {
                setIsScrolled(true);
                setPhase('done');
            }
        }
    }["Header.useEffect"], [
        forceScrolled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": function() {
            var updateCartCount = {
                "Header.useEffect.updateCartCount": function() {
                    var storedCart = localStorage.getItem('cartProducts');
                    try {
                        var cartData = storedCart ? JSON.parse(storedCart) : [];
                        if (Array.isArray(cartData)) {
                            if (cartData.length > 0 && cartData[0].bagId && cartData[0].quantity) {
                                setCartCount(cartData.reduce({
                                    "Header.useEffect.updateCartCount": function(sum, item) {
                                        return sum + (item.quantity || 1);
                                    }
                                }["Header.useEffect.updateCartCount"], 0));
                            } else {
                                setCartCount(cartData.length);
                            }
                        } else {
                            setCartCount(0);
                        }
                    } catch (unused) {
                        setCartCount(0);
                    }
                }
            }["Header.useEffect.updateCartCount"];
            var updateLikedCount = {
                "Header.useEffect.updateLikedCount": function() {
                    var storedLiked = localStorage.getItem('likedProducts');
                    try {
                        var likedData = storedLiked ? JSON.parse(storedLiked) : [];
                        setLikedCount(Array.isArray(likedData) ? likedData.length : 0);
                    } catch (unused) {
                        setLikedCount(0);
                    }
                }
            }["Header.useEffect.updateLikedCount"];
            updateCartCount();
            updateLikedCount();
            window.addEventListener('storage', updateCartCount);
            window.addEventListener('cartUpdated', updateCartCount);
            window.addEventListener('storage', updateLikedCount);
            window.addEventListener('likedUpdated', updateLikedCount);
            return ({
                "Header.useEffect": function() {
                    window.removeEventListener('storage', updateCartCount);
                    window.removeEventListener('cartUpdated', updateCartCount);
                    window.removeEventListener('storage', updateLikedCount);
                    window.removeEventListener('likedUpdated', updateLikedCount);
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeaderContainer"], {
        $isScrolled: isScrolled,
        ref: headerRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeaderMainContainer"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeaderDetails"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$dropdown$2f$CurrencyDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            isScrolled: isScrolled
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                            lineNumber: 231,
                            columnNumber: 11
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeaderLogo"], {
                        onClick: function() {
                            return router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withLocale"])(locale, '/'));
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedLogoWrapper"], {
                            $phase: phase,
                            onClick: function() {
                                return router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withLocale"])(locale, '/'));
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/assets/logobig.svg",
                                alt: "Logo"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                lineNumber: 238,
                                columnNumber: 11
                            }, _this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                            lineNumber: 234,
                            columnNumber: 9
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeaderActions"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LikedIconWrapper"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LikedButton"], {
                                        onClick: toggleLikedModal,
                                        $isScrolled: isScrolled,
                                        "aria-label": "Liked",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "20",
                                                height: "20",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 17
                                                }, _this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                                lineNumber: 248,
                                                columnNumber: 15
                                            }, _this),
                                            likedCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LikedBadge"], {
                                                children: likedCount
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                                lineNumber: 258,
                                                columnNumber: 34
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                        lineNumber: 243,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$likedModal$2f$LikedModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        isOpen: isLikedModalOpen,
                                        onClose: closeLikedModal,
                                        isScrolled: isScrolled
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                        lineNumber: 260,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                lineNumber: 242,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartIconWrapper"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartButton"], {
                                        onClick: toggleCartModal,
                                        $isScrolled: isScrolled,
                                        "aria-label": "Cart",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "20",
                                                height: "20",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 17
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "3",
                                                        y1: "6",
                                                        x2: "21",
                                                        y2: "6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                                        lineNumber: 281,
                                                        columnNumber: 17
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M16 10a4 4 0 0 1-8 0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                                        lineNumber: 282,
                                                        columnNumber: 17
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                                lineNumber: 272,
                                                columnNumber: 15
                                            }, _this),
                                            cartCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartBadge"], {
                                                children: cartCount
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                                lineNumber: 284,
                                                columnNumber: 33
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                        lineNumber: 267,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        isOpen: isCartModalOpen,
                                        onClose: closeCartModal,
                                        isScrolled: isScrolled
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                        lineNumber: 286,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                lineNumber: 266,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserIconWrapper"], {
                                ref: accountBoxRef,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserIconButton"], {
                                        onClick: toggleAccountBox,
                                        $isScrolled: isScrolled,
                                        "aria-label": "Account",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 17
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "12",
                                                    cy: "7",
                                                    r: "4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                                    lineNumber: 307,
                                                    columnNumber: 17
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                            lineNumber: 298,
                                            columnNumber: 15
                                        }, _this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                        lineNumber: 293,
                                        columnNumber: 13
                                    }, _this),
                                    isAccountBoxVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        onClose: closeAccountBox,
                                        isScrolled: isScrolled,
                                        onOpenLogin: openLoginPopup,
                                        onOpenRegister: openRegisterPopup
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                        lineNumber: 311,
                                        columnNumber: 15
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                lineNumber: 292,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationBar"], {
                $isScrolled: isScrolled,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavContainer"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLinks"], {
                        children: bagsSubcategories.map(function(subcategory, index) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavItem"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"], {
                                            onClick: function() {
                                                return router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withLocale"])(locale, "/products?category_id=1000&subcategory_id=".concat(subcategory.id)));
                                            },
                                            $isScrolled: isScrolled,
                                            "aria-haspopup": "false",
                                            children: subcategory.name
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                            lineNumber: 327,
                                            columnNumber: 19
                                        }, _this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                        lineNumber: 326,
                                        columnNumber: 17
                                    }, _this),
                                    index < bagsSubcategories.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLinkDivider"], {}, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                        lineNumber: 342,
                                        columnNumber: 58
                                    }, _this)
                                ]
                            }, subcategory.id, true, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                lineNumber: 325,
                                columnNumber: 15
                            }, _this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                        lineNumber: 323,
                        columnNumber: 11
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                    lineNumber: 322,
                    columnNumber: 9
                }, _this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                lineNumber: 321,
                columnNumber: 7
            }, _this),
            isLoginPopupOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: closeLoginPopup,
                onOpenRegister: function() {
                    closeLoginPopup();
                    openRegisterPopup();
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                lineNumber: 350,
                columnNumber: 9
            }, _this),
            isRegisterPopupOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: closeRegisterPopup,
                onOpenLogin: function() {
                    closeRegisterPopup();
                    openLoginPopup();
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                lineNumber: 359,
                columnNumber: 9
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
        lineNumber: 228,
        columnNumber: 5
    }, _this);
};
_s(Header, "QiOcyrQmxZ/SATP4QiPYBh7fRYU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$HeaderModel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHeaderModel"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/heroSlide/HeroSlide.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CentralImage",
    ()=>CentralImage,
    "HeroContainer",
    ()=>HeroContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
;
function _templateObject() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  align-items: center;\n  background: url('/assets/bg.jpg');\n  background-size: cover;\n  background-position: top;\n  background-repeat: no-repeat;\n\n  &::after {\n    content: '';\n    position: absolute;\n    inset: 0;\n    background: rgba(17, 17, 17, 0.4);\n    z-index: 1;\n    pointer-events: none;\n  }\n\n  > * {\n    position: relative;\n    z-index: 2;\n  }\n\n  @media (max-width: 768px) {\n    height: 100vh;\n    padding-left: 2rem;\n  }\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  0% {\n    transform: translate3d(0, 0, 0) scale(1);\n    opacity: 1;\n  }\n  100% {\n    transform: translate3d(0, -45vh, 0) scale(0.06);\n    opacity: 1;\n  }\n"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  0% {\n    transform: translate3d(0, -45vh, 0) scale(0.06);\n    opacity: 1;\n  }\n  100% {\n    transform: translate3d(0, 0, 0) scale(1);\n    opacity: 1;\n  }\n  "
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n          transform: translate3d(0, 0, 0) scale(1);\n          opacity: 1;\n        "
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n          animation: ",
        " 0.5s ease forwards;\n        "
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n          animation: ",
        " 0.5s ease forwards;\n        "
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n          transform: translate3d(0, -50vh, 0) scale(0.1);\n          opacity: 0;\n          visibility: hidden;\n          pointer-events: none;\n          transition: opacity 0.2s ease;\n        "
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  max-width: 50vw;\n  width: 600px;\n  pointer-events: none;\n  will-change: transform;\n  transform-origin: top center;\n\n  color: ",
        ";\n  transition: color 0.5s ease;\n  & img {\n    width: 100%;\n    height: auto;\n  }\n  ",
        "\n\n  @media (prefers-reduced-motion: reduce) {\n    animation: none !important;\n    transform: none !important;\n    opacity: 1 !important;\n  }\n"
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
;
var HeroContainer = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HeroSlide.styles__HeroContainer",
    componentId: "sc-e2edfdfc-0"
})(_templateObject());
var liftShrinkFade = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"])(_templateObject1());
var appearBack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"])(_templateObject2());
var CentralImage = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].img.withConfig({
    displayName: "HeroSlide.styles__CentralImage",
    componentId: "sc-e2edfdfc-1"
})(_templateObject7(), function(param) {
    var $phase = param.$phase;
    return $phase === 'done' || $phase === 'animating-out' ? '#9A8300' : '#ffffff';
}, function(param) {
    var $phase = param.$phase;
    switch($phase){
        case 'idle':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject3());
        case 'animating-out':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject4(), liftShrinkFade);
        case 'animating-in':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject5(), appearBack);
        case 'done':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject6());
    }
});
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/heroSlide/HeroSlide.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$heroSlide$2f$HeroSlide$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/heroSlide/HeroSlide.styles.ts [app-client] (ecmascript)");
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
var HeroSlide = function() {
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle'), 2), phase = _useState[0], setPhase = _useState[1];
    var lastScrollY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSlide.useEffect": function() {
            var onScroll = {
                "HeroSlide.useEffect.onScroll": function() {
                    var current = window.scrollY;
                    var scrollingDown = current > lastScrollY.current;
                    if (scrollingDown && phase !== 'animating-out' && phase !== 'done') {
                        setPhase('animating-out');
                        setTimeout({
                            "HeroSlide.useEffect.onScroll": function() {
                                return setPhase('done');
                            }
                        }["HeroSlide.useEffect.onScroll"], 500);
                    } else if (!scrollingDown && phase !== 'animating-in' && phase !== 'idle') {
                        setPhase('animating-in');
                        setTimeout({
                            "HeroSlide.useEffect.onScroll": function() {
                                return setPhase('idle');
                            }
                        }["HeroSlide.useEffect.onScroll"], 500);
                    }
                    lastScrollY.current = current;
                }
            }["HeroSlide.useEffect.onScroll"];
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            return ({
                "HeroSlide.useEffect": function() {
                    return window.removeEventListener('scroll', onScroll);
                }
            })["HeroSlide.useEffect"];
        }
    }["HeroSlide.useEffect"], [
        phase
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$heroSlide$2f$HeroSlide$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroContainer"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$heroSlide$2f$HeroSlide$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CentralImage"], {
            src: "/assets/hero.jpg",
            alt: "Hero",
            $phase: phase
        }, void 0, false, {
            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/heroSlide/HeroSlide.tsx",
            lineNumber: 34,
            columnNumber: 5
        }, _this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/heroSlide/HeroSlide.tsx",
        lineNumber: 33,
        columnNumber: 10
    }, _this);
};
_s(HeroSlide, "yZAYKJ5mffrCCgDhPB4TpJSeG0o=");
_c = HeroSlide;
const __TURBOPACK__default__export__ = HeroSlide;
var _c;
__turbopack_context__.k.register(_c, "HeroSlide");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/footer/Footer.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "FooterBottom",
    ()=>FooterBottom,
    "FooterContainer",
    ()=>FooterContainer,
    "FooterContent",
    ()=>FooterContent,
    "FooterLinkSection",
    ()=>FooterLinkSection,
    "LinkItem",
    ()=>LinkItem,
    "LinksList",
    ()=>LinksList,
    "LinksSection",
    ()=>LinksSection,
    "Logo",
    ()=>Logo,
    "LogoDescription",
    ()=>LogoDescription,
    "LogoSection",
    ()=>LogoSection,
    "SectionTitle",
    ()=>SectionTitle,
    "SocialContainer",
    ()=>SocialContainer,
    "SocialSection",
    ()=>SocialSection,
    "SocialSvg",
    ()=>SocialSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
;
function _templateObject() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    0% { transform: translateY(-50px); opacity: 0; }\n    100% { transform: translateY(0); opacity: 1; }\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  color: ",
        ";\n  background-color: #001f3f;\n  width: 100%;\n  padding: 4rem 6rem;\n  font-family: 'Questrial', sans-serif;\n  box-sizing: border-box;\n\n  @media (max-width: 768px) {\n    padding: 20px;\n  }\n"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4rem;\n  flex: 2;\n  justify-content: flex-start;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4rem;\n  justify-content: flex-start;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n"
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 150px;\n  height: 150px;\n  margin-bottom: 15px;\n  position: relative;\n\n  img {\n    object-fit: contain;\n  }\n\n  @media (max-width: 768px) {\n    width: 110px;\n    height: 110px;\n  }\n"
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  font-size: 14px;\n  line-height: 1.5;\n  margin: 0;\n  font-weight: bold;\n"
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  flex-direction: column;\n\n  @media (max-width: 768px) {\n    align-items: center;\n  }\n"
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  font-size: 18px;\n  margin: 0 0 10px;\n  color: ",
        ";\n"
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  list-style: none;\n  padding: 0;\n  margin: 0;\n\n  @media (max-width: 768px) {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n  }\n"
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject10() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  margin-bottom: 8px;\n\n  a {\n    text-decoration: none;\n    color: ",
        ";\n    font-size: 14px;\n    transition: color 0.3s ease;\n\n    &:hover {\n      color: black;\n    }\n  }\n"
    ]);
    _templateObject10 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject11() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n\n  @media (max-width: 768px) {\n    align-items: center;\n  }\n"
    ]);
    _templateObject11 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject12() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: fit-content;\n  height: fit-content;\n  background-color: rgb(238, 238, 238);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 25px;\n  border-radius: 20px;\n  gap: 20px;\n  box-shadow:\n    rgba(50, 50, 93, 0.4) 0px 50px 100px -20px,\n    rgba(0, 0, 0, 0.6) 0px 30px 60px -30px;\n"
    ]);
    _templateObject12 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject13() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n      &:hover {\n        background-color: #d62976;\n      }\n    "
    ]);
    _templateObject13 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject14() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n      &:hover {\n        background-color: #7f4da0;\n      }\n    "
    ]);
    _templateObject14 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject15() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n      &:hover {\n        background-color: #128c7e;\n      }\n    "
    ]);
    _templateObject15 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject16() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n      &:hover {\n        background-color: #0ea958;\n      }\n    "
    ]);
    _templateObject16 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject17() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 52px;\n  height: 52px;\n  background-color: rgb(44, 44, 44);\n  display: flex;\n  border-radius: 15px;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  transition:\n    background-color 0.3s,\n    transform 0.3s;\n\n  ",
        "\n  ",
        "\n    ",
        "\n    ",
        "\n\n    &:active {\n    transform: scale(0.9);\n  }\n"
    ]);
    _templateObject17 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject18() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 17px;\n  height: 17px;\n  fill: white;\n  animation: ",
        " 0.3s both;\n"
    ]);
    _templateObject18 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject19() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  text-align: left;\n  font-size: 12px;\n"
    ]);
    _templateObject19 = function _templateObject() {
        return data;
    };
    return data;
}
;
var slideInTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"])(_templateObject());
var FooterContainer = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].footer.withConfig({
    displayName: "Footer.styles__FooterContainer",
    componentId: "sc-a6c51aef-0"
})(_templateObject1(), function(param) {
    var $secondaryColor = param.$secondaryColor;
    return $secondaryColor;
});
var FooterLinkSection = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Footer.styles__FooterLinkSection",
    componentId: "sc-a6c51aef-1"
})(_templateObject2());
var FooterContent = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Footer.styles__FooterContent",
    componentId: "sc-a6c51aef-2"
})(_templateObject3());
var LogoSection = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Footer.styles__LogoSection",
    componentId: "sc-a6c51aef-3"
})(_templateObject4());
var Logo = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Footer.styles__Logo",
    componentId: "sc-a6c51aef-4"
})(_templateObject5());
var LogoDescription = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "Footer.styles__LogoDescription",
    componentId: "sc-a6c51aef-5"
})(_templateObject6());
var LinksSection = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Footer.styles__LinksSection",
    componentId: "sc-a6c51aef-6"
})(_templateObject7());
var SectionTitle = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h3.withConfig({
    displayName: "Footer.styles__SectionTitle",
    componentId: "sc-a6c51aef-7"
})(_templateObject8(), function(param) {
    var $color = param.$color;
    return $color;
});
var LinksList = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "Footer.styles__LinksList",
    componentId: "sc-a6c51aef-8"
})(_templateObject9());
var LinkItem = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].li.withConfig({
    displayName: "Footer.styles__LinkItem",
    componentId: "sc-a6c51aef-9"
})(_templateObject10(), function(param) {
    var $color = param.$color;
    return $color;
});
var SocialSection = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Footer.styles__SocialSection",
    componentId: "sc-a6c51aef-10"
})(_templateObject11());
var Card = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Footer.styles__Card",
    componentId: "sc-a6c51aef-11"
})(_templateObject12());
var SocialContainer = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].a.withConfig({
    displayName: "Footer.styles__SocialContainer",
    componentId: "sc-a6c51aef-12"
})(_templateObject17(), function(param) {
    var variant = param.variant;
    return variant === 'instagram' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject13());
}, function(param) {
    var variant = param.variant;
    return variant === 'viber' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject14());
}, function(param) {
    var variant = param.variant;
    return variant === 'whatsapp' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject15());
}, function(param) {
    var variant = param.variant;
    return variant === 'telegram' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject16());
});
var SocialSvg = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "Footer.styles__SocialSvg",
    componentId: "sc-a6c51aef-13"
})(_templateObject18(), slideInTop);
var FooterBottom = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Footer.styles__FooterBottom",
    componentId: "sc-a6c51aef-14"
})(_templateObject19());
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/types/footerLinks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "footerLinksData",
    ()=>footerLinksData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
var footerLinksData = [
    {
        title: 'about_us',
        links: [
            {
                label: 'Shipping Policy',
                href: '/policies/shipping-policy'
            },
            {
                label: 'Returns & Refunds',
                href: '/policies/returns-refunds'
            }
        ]
    },
    {
        title: 'support',
        links: [
            {
                label: 'Privacy Policy',
                href: '/policies/privacy-policy'
            },
            {
                label: 'Terms & Conditions',
                href: '/policies/terms-conditions'
            }
        ]
    },
    {
        title: 'social',
        links: [
            {
                label: 'Instagram',
                href: 'https://www.instagram.com'
            },
            {
                label: 'Facebook',
                href: 'https://www.facebook.com'
            },
            {
                label: 'Tiktok',
                href: 'https://www.tiktok.com'
            }
        ]
    }
];
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/hooks/useThemeColors.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useThemeColors",
    ()=>useThemeColors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
var defaults = {
    primaryColor: 'linear-gradient(135deg, #c39a37 0%, #b8860b 100%)',
    primaryColorFlat: '#d4af37',
    secondaryColor: '#001f3f'
};
var readFromStorage = function(fallbacks) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return {
        primaryColor: localStorage.getItem('theme_primary') || fallbacks.primaryColor || 'linear-gradient(135deg, #a67c00 0%, #bf9b30 25%, #ffd700 50%, #d4af37 75%, #b8860b 100%)',
        primaryColorFlat: localStorage.getItem('theme_primary_flat') || fallbacks.primaryColorFlat,
        secondaryColor: localStorage.getItem('theme_secondary') || fallbacks.secondaryColor
    };
};
var useThemeColors = function() {
    var overrides = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _s();
    var fallbackColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useThemeColors.useMemo[fallbackColors]": function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, defaults, overrides);
        }
    }["useThemeColors.useMemo[fallbackColors]"], [
        overrides
    ]);
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(fallbackColors), 2), colors = _useState[0], setColors = _useState[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useThemeColors.useEffect": function() {
            setColors(readFromStorage(fallbackColors));
        }
    }["useThemeColors.useEffect"], [
        fallbackColors
    ]);
    return colors;
};
_s(useThemeColors, "i+43n4YHIFD5JCWSDObYf7HuAMQ=");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/footer/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/footer/Footer.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$types$2f$footerLinks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/types/footerLinks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/locale.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/lib/locale.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$hooks$2f$useThemeColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/hooks/useThemeColors.ts [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function Footer() {
    var _this = this;
    _s();
    var t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])().t;
    var params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    var locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeLocale"])(params === null || params === void 0 ? void 0 : params.locale);
    var secondaryColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$hooks$2f$useThemeColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"])({
        secondaryColor: '#ffffff'
    }).secondaryColor;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FooterContainer"], {
        $secondaryColor: secondaryColor,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FooterContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FooterLinkSection"], {
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$types$2f$footerLinks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["footerLinksData"].map(function(section, idx) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinksSection"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionTitle"], {
                                        $color: secondaryColor,
                                        children: t(section.title)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/footer/Footer.tsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinksList"], {
                                        children: section.links.map(function(link, index) {
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkItem"], {
                                                $color: secondaryColor,
                                                children: link.href.startsWith('http') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: link.href,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: link.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/footer/Footer.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 23
                                                }, _this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withLocale"])(locale, link.href),
                                                    children: link.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/footer/Footer.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 23
                                                }, _this)
                                            }, index, false, {
                                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/footer/Footer.tsx",
                                                lineNumber: 42,
                                                columnNumber: 19
                                            }, _this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/footer/Footer.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, _this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/footer/Footer.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, _this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/footer/Footer.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoSection"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/assets/logo.png",
                                    alt: "Logo",
                                    fill: true,
                                    sizes: "(max-width: 768px) 110px, 150px"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/footer/Footer.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/footer/Footer.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoDescription"], {
                                children: t('slogan')
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/footer/Footer.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/footer/Footer.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/footer/Footer.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FooterBottom"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        "© ",
                        new Date().getFullYear(),
                        " ",
                        t('copyrightNotice')
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/footer/Footer.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/footer/Footer.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/footer/Footer.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(Footer, "cuMCMw1dD8k+Z6dOAjvpr5Yq9h0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$hooks$2f$useThemeColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"]
    ];
});
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/utils/productMapper.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mapProductDtoToModel",
    ()=>mapProductDtoToModel,
    "mapProductDtosToModels",
    ()=>mapProductDtosToModels
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
;
;
var mapProductDtoToModel = function(item) {
    var _item_category, _item_subcategory, _item_variants, _item_specifications, _item_specifications_detailed;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, item), {
        category: (_item_category = item.category) !== null && _item_category !== void 0 ? _item_category : null,
        subcategory: (_item_subcategory = item.subcategory) !== null && _item_subcategory !== void 0 ? _item_subcategory : null,
        variants: (_item_variants = item.variants) !== null && _item_variants !== void 0 ? _item_variants : [],
        specifications: (_item_specifications = item.specifications) !== null && _item_specifications !== void 0 ? _item_specifications : {},
        specifications_detailed: (_item_specifications_detailed = item.specifications_detailed) !== null && _item_specifications_detailed !== void 0 ? _item_specifications_detailed : []
    });
};
var mapProductDtosToModels = function(items) {
    return items.map(mapProductDtoToModel);
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/utils/productFields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PRODUCT_CARD_FIELDS",
    ()=>PRODUCT_CARD_FIELDS,
    "PRODUCT_LIST_FIELDS",
    ()=>PRODUCT_LIST_FIELDS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
;
var PRODUCT_CARD_FIELDS = [
    'id',
    'name',
    'price',
    'price_new',
    'price_old',
    'availability',
    'variant_image',
    'currency'
];
var PRODUCT_LIST_FIELDS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(PRODUCT_CARD_FIELDS).concat([
    'variant_color_palette',
    'variant_color_name',
    'variants'
]);
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/service/productsService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchBestDeals",
    ()=>fetchBestDeals,
    "fetchNewAdded",
    ()=>fetchNewAdded,
    "getCategorySpecifications",
    ()=>getCategorySpecifications,
    "getProduct",
    ()=>getProduct,
    "getProductBySlug",
    ()=>getProductBySlug,
    "listProducts",
    ()=>listProducts,
    "listProductsMapped",
    ()=>listProductsMapped
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_object_without_properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$httpClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/service/httpClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$productMapper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/productMapper.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$productFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/productFields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$slug$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/slug.ts [app-client] (ecmascript)");
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
var listProducts = function() {
    var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var specFilters = params.specFilters, fields = params.fields, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(params, [
        "specFilters",
        "fields"
    ]);
    var query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, rest);
    if (fields) {
        query.fields = Array.isArray(fields) ? fields.join(',') : fields;
    }
    if (specFilters) {
        Object.entries(specFilters).forEach(function(param) {
            var _param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), key = _param[0], value = _param[1];
            query["spec_".concat(key)] = value;
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$httpClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["httpClient"].get('products/', (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
        query: query
    }, options));
};
var getProduct = function(productId) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$httpClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["httpClient"].get("products/".concat(productId, "/"), options);
};
var getProductBySlug = function(productName) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
        var idFromSlug, unused, decodedName, response, normalized, normalizedSlug, exactMatch;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
            switch(_state.label){
                case 0:
                    idFromSlug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$slug$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductIdFromSlug"])(productName);
                    if (!idFromSlug) return [
                        3,
                        4
                    ];
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]);
                    return [
                        4,
                        getProduct(idFromSlug, options)
                    ];
                case 2:
                    return [
                        2,
                        _state.sent()
                    ];
                case 3:
                    unused = _state.sent();
                    return [
                        2,
                        null
                    ];
                case 4:
                    decodedName = decodeURIComponent(productName);
                    return [
                        4,
                        listProducts({
                            search: decodedName,
                            page: 1,
                            page_size: 50
                        }, options)
                    ];
                case 5:
                    response = _state.sent();
                    normalized = decodedName.trim().toLowerCase();
                    normalizedSlug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$slug$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slugify"])(decodedName);
                    exactMatch = response.items.find(function(item) {
                        var itemName = item.name.trim();
                        if (normalizedSlug && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$slug$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slugify"])(itemName) === normalizedSlug) return true;
                        return itemName.toLowerCase() === normalized;
                    });
                    return [
                        2,
                        exactMatch !== null && exactMatch !== void 0 ? exactMatch : null
                    ];
            }
        });
    })();
};
var listProductsMapped = function() {
    var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
        var response;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        listProducts(params, options)
                    ];
                case 1:
                    response = _state.sent();
                    return [
                        2,
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$productMapper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapProductDtosToModels"])(response.items)
                    ];
            }
        });
    })();
};
var fetchBestDeals = function() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
            return [
                2,
                listProductsMapped({
                    page: 1,
                    page_size: 12,
                    fields: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$productFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCT_CARD_FIELDS"]
                }, options)
            ];
        });
    })();
};
var fetchNewAdded = function() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
            return [
                2,
                listProductsMapped({
                    page: 1,
                    page_size: 12,
                    fields: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$productFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCT_CARD_FIELDS"]
                }, options)
            ];
        });
    })();
};
var getCategorySpecifications = function(categoryId, subcategoryId) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
        var response, map;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!categoryId && !subcategoryId) {
                        return [
                            2,
                            {}
                        ];
                    }
                    return [
                        4,
                        listProducts({
                            page: 1,
                            page_size: 50,
                            category_id: categoryId ? Number(categoryId) : undefined,
                            subcategory_id: subcategoryId ? Number(subcategoryId) : undefined,
                            fields: [
                                'specifications',
                                'specifications_detailed'
                            ]
                        }, options)
                    ];
                case 1:
                    response = _state.sent();
                    map = new Map();
                    response.items.forEach(function(product) {
                        if (product.specifications) {
                            Object.entries(product.specifications).forEach(function(param) {
                                var _param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), key = _param[0], value = _param[1];
                                var _map_get;
                                if (!value) return;
                                var entry = (_map_get = map.get(key)) !== null && _map_get !== void 0 ? _map_get : new Set();
                                entry.add(String(value));
                                map.set(key, entry);
                            });
                        }
                        if (product.specifications_detailed) {
                            product.specifications_detailed.forEach(function(detail) {
                                var _map_get;
                                var key = detail.key || detail.label;
                                if (!key) return;
                                var value = detail.display || detail.value;
                                if (!value) return;
                                var entry = (_map_get = map.get(key)) !== null && _map_get !== void 0 ? _map_get : new Set();
                                entry.add(String(value));
                                map.set(key, entry);
                            });
                        }
                    });
                    return [
                        2,
                        Array.from(map.entries()).reduce(function(acc, param) {
                            var _param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), key = _param[0], values = _param[1];
                            acc[key] = Array.from(values).sort();
                            return acc;
                        }, {})
                    ];
            }
        });
    })();
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/findSimilarModal/FindSimilarModal.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CloseButton",
    ()=>CloseButton,
    "Grid",
    ()=>Grid,
    "ModalBody",
    ()=>ModalBody,
    "ModalCard",
    ()=>ModalCard,
    "ModalHeader",
    ()=>ModalHeader,
    "ModalOverlay",
    ()=>ModalOverlay,
    "ModalTitle",
    ()=>ModalTitle,
    "ProductCard",
    ()=>ProductCard,
    "ProductImage",
    ()=>ProductImage,
    "ProductName",
    ()=>ProductName,
    "ProductPrice",
    ()=>ProductPrice,
    "StatusText",
    ()=>StatusText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
;
function _templateObject() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem;\n  z-index: 4000;\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: min(920px, 100%);\n  max-height: 80vh;\n  background: #ffffff;\n  border-radius: 16px;\n  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.25rem 1.5rem 0.75rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: #0f0f0f;\n"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  border: none;\n  background: none;\n  cursor: pointer;\n  color: #0f0f0f;\n  font-size: 1.1rem;\n  padding: 0.25rem;\n  line-height: 1;\n"
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  padding: 1.25rem 1.5rem 1.5rem;\n  overflow: auto;\n"
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  margin: 0;\n  color: #6b6b6b;\n"
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 1rem;\n"
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-radius: 12px;\n  padding: 0.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  cursor: pointer;\n  transition:\n    transform 180ms ease,\n    border-color 180ms ease;\n\n  &:hover {\n    transform: translateY(-1px);\n    border-color: rgba(0, 0, 0, 0.16);\n  }\n"
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: relative;\n  width: 100%;\n  aspect-ratio: 4 / 5;\n  border-radius: 8px;\n  background: #f6f6f6;\n  overflow: hidden;\n\n  img {\n    object-fit: cover;\n  }\n"
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject10() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  margin: 0;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #1a1a1a;\n"
    ]);
    _templateObject10 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject11() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  margin: 0;\n  font-size: 0.85rem;\n  color: #6b6b6b;\n"
    ]);
    _templateObject11 = function _templateObject() {
        return data;
    };
    return data;
}
;
var ModalOverlay = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "FindSimilarModal.styles__ModalOverlay",
    componentId: "sc-e57bfe8e-0"
})(_templateObject());
var ModalCard = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "FindSimilarModal.styles__ModalCard",
    componentId: "sc-e57bfe8e-1"
})(_templateObject1());
var ModalHeader = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "FindSimilarModal.styles__ModalHeader",
    componentId: "sc-e57bfe8e-2"
})(_templateObject2());
var ModalTitle = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h3.withConfig({
    displayName: "FindSimilarModal.styles__ModalTitle",
    componentId: "sc-e57bfe8e-3"
})(_templateObject3());
var CloseButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "FindSimilarModal.styles__CloseButton",
    componentId: "sc-e57bfe8e-4"
})(_templateObject4());
var ModalBody = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "FindSimilarModal.styles__ModalBody",
    componentId: "sc-e57bfe8e-5"
})(_templateObject5());
var StatusText = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "FindSimilarModal.styles__StatusText",
    componentId: "sc-e57bfe8e-6"
})(_templateObject6());
var Grid = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "FindSimilarModal.styles__Grid",
    componentId: "sc-e57bfe8e-7"
})(_templateObject7());
var ProductCard = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "FindSimilarModal.styles__ProductCard",
    componentId: "sc-e57bfe8e-8"
})(_templateObject8());
var ProductImage = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "FindSimilarModal.styles__ProductImage",
    componentId: "sc-e57bfe8e-9"
})(_templateObject9());
var ProductName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "FindSimilarModal.styles__ProductName",
    componentId: "sc-e57bfe8e-10"
})(_templateObject10());
var ProductPrice = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "FindSimilarModal.styles__ProductPrice",
    componentId: "sc-e57bfe8e-11"
})(_templateObject11());
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/findSimilarModal/FindSimilarModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$productsService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/service/productsService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$imageUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/imageUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$productMapper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/productMapper.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$findSimilarModal$2f$FindSimilarModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/findSimilarModal/FindSimilarModal.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/locale.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/lib/locale.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$slug$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/slug.ts [app-client] (ecmascript)");
;
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
var FindSimilarModal = function(param) {
    var isOpen = param.isOpen, onClose = param.onClose, product = param.product;
    var _product_category, _product_subcategory;
    _s();
    var router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    var params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    var locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeLocale"])(params === null || params === void 0 ? void 0 : params.locale);
    var modalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), loading = _useState[0], setLoading = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), 2), error = _useState1[0], setError = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), 2), items = _useState2[0], setItems = _useState2[1];
    var title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FindSimilarModal.useMemo[title]": function() {
            var _product_subcategory, _product_category;
            if ((_product_subcategory = product.subcategory) === null || _product_subcategory === void 0 ? void 0 : _product_subcategory.name) {
                return "Similar in ".concat(product.subcategory.name);
            }
            if ((_product_category = product.category) === null || _product_category === void 0 ? void 0 : _product_category.name) {
                return "Similar in ".concat(product.category.name);
            }
            return 'Similar items';
        }
    }["FindSimilarModal.useMemo[title]"], [
        (_product_category = product.category) === null || _product_category === void 0 ? void 0 : _product_category.name,
        (_product_subcategory = product.subcategory) === null || _product_subcategory === void 0 ? void 0 : _product_subcategory.name
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FindSimilarModal.useEffect": function() {
            if (!isOpen) return;
            var load = {
                "FindSimilarModal.useEffect.load": function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                        "FindSimilarModal.useEffect.load": function() {
                            var response, mapped, filtered, unused;
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, {
                                "FindSimilarModal.useEffect.load": function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            setLoading(true);
                                            setError('');
                                            _state.label = 1;
                                        case 1:
                                            _state.trys.push([
                                                1,
                                                3,
                                                4,
                                                5
                                            ]);
                                            return [
                                                4,
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$productsService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listProducts"])({
                                                    subcategory_id: product.subcategory_id || undefined,
                                                    page: 1,
                                                    page_size: 8
                                                })
                                            ];
                                        case 2:
                                            response = _state.sent();
                                            mapped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$productMapper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapProductDtosToModels"])(response.items);
                                            filtered = mapped.filter({
                                                "FindSimilarModal.useEffect.load": function(item) {
                                                    return item.id !== product.id;
                                                }
                                            }["FindSimilarModal.useEffect.load"]);
                                            setItems(filtered);
                                            return [
                                                3,
                                                5
                                            ];
                                        case 3:
                                            unused = _state.sent();
                                            setError('Unable to load similar products.');
                                            return [
                                                3,
                                                5
                                            ];
                                        case 4:
                                            setLoading(false);
                                            return [
                                                7
                                            ];
                                        case 5:
                                            return [
                                                2
                                            ];
                                    }
                                }
                            }["FindSimilarModal.useEffect.load"]);
                        }
                    }["FindSimilarModal.useEffect.load"])();
                }
            }["FindSimilarModal.useEffect.load"];
            load();
        }
    }["FindSimilarModal.useEffect"], [
        isOpen,
        product.category_id,
        product.id,
        product.subcategory_id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FindSimilarModal.useEffect": function() {
            if (!isOpen) return;
            var onKeyDown = {
                "FindSimilarModal.useEffect.onKeyDown": function(event) {
                    if (event.key === 'Escape') onClose();
                }
            }["FindSimilarModal.useEffect.onKeyDown"];
            window.addEventListener('keydown', onKeyDown);
            return ({
                "FindSimilarModal.useEffect": function() {
                    return window.removeEventListener('keydown', onKeyDown);
                }
            })["FindSimilarModal.useEffect"];
        }
    }["FindSimilarModal.useEffect"], [
        isOpen,
        onClose
    ]);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$findSimilarModal$2f$FindSimilarModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalOverlay"], {
        onClick: function(event) {
            if (event.target === event.currentTarget) onClose();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$findSimilarModal$2f$FindSimilarModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalCard"], {
            ref: modalRef,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$findSimilarModal$2f$FindSimilarModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$findSimilarModal$2f$FindSimilarModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalTitle"], {
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/findSimilarModal/FindSimilarModal.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$findSimilarModal$2f$FindSimilarModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloseButton"], {
                            onClick: onClose,
                            "aria-label": "Close",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/findSimilarModal/FindSimilarModal.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/findSimilarModal/FindSimilarModal.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$findSimilarModal$2f$FindSimilarModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalBody"], {
                    children: [
                        loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$findSimilarModal$2f$FindSimilarModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusText"], {
                            children: "Loading similar items..."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/findSimilarModal/FindSimilarModal.tsx",
                            lineNumber: 106,
                            columnNumber: 23
                        }, _this),
                        !loading && error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$findSimilarModal$2f$FindSimilarModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusText"], {
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/findSimilarModal/FindSimilarModal.tsx",
                            lineNumber: 107,
                            columnNumber: 33
                        }, _this),
                        !loading && !error && items.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$findSimilarModal$2f$FindSimilarModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusText"], {
                            children: "No similar items found."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/findSimilarModal/FindSimilarModal.tsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, _this),
                        !loading && !error && items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$findSimilarModal$2f$FindSimilarModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Grid"], {
                            children: items.map(function(item) {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$findSimilarModal$2f$FindSimilarModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductCard"], {
                                    onClick: function() {
                                        return router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withLocale"])(locale, "/product/".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$slug$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildProductSlug"])(item.name, item.id))));
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$findSimilarModal$2f$FindSimilarModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductImage"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$imageUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageUrl"])(item.variant_image) || '/assets/logo.png',
                                                alt: item.name,
                                                fill: true,
                                                sizes: "(max-width: 768px) 50vw, 200px"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/findSimilarModal/FindSimilarModal.tsx",
                                                lineNumber: 126,
                                                columnNumber: 21
                                            }, _this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/findSimilarModal/FindSimilarModal.tsx",
                                            lineNumber: 125,
                                            columnNumber: 19
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$findSimilarModal$2f$FindSimilarModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductName"], {
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/findSimilarModal/FindSimilarModal.tsx",
                                            lineNumber: 135,
                                            columnNumber: 19
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$findSimilarModal$2f$FindSimilarModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductPrice"], {
                                            children: item.price_new ? "".concat(item.price_new, " USD") : "".concat(item.price, " USD")
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/findSimilarModal/FindSimilarModal.tsx",
                                            lineNumber: 136,
                                            columnNumber: 19
                                        }, _this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/findSimilarModal/FindSimilarModal.tsx",
                                    lineNumber: 114,
                                    columnNumber: 17
                                }, _this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/findSimilarModal/FindSimilarModal.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/findSimilarModal/FindSimilarModal.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, _this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/findSimilarModal/FindSimilarModal.tsx",
            lineNumber: 98,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/findSimilarModal/FindSimilarModal.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, _this);
};
_s(FindSimilarModal, "sf/9ImwmmJAS6mRf+wx4ebION64=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = FindSimilarModal;
const __TURBOPACK__default__export__ = FindSimilarModal;
var _c;
__turbopack_context__.k.register(_c, "FindSimilarModal");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ButtonCompare",
    ()=>ButtonCompare,
    "ButtonContainer",
    ()=>ButtonContainer,
    "ButtonWrapper",
    ()=>ButtonWrapper,
    "Card",
    ()=>Card,
    "CardImage",
    ()=>CardImage,
    "Content",
    ()=>Content,
    "FindSimilar",
    ()=>FindSimilar,
    "HoverButtons",
    ()=>HoverButtons,
    "Icon",
    ()=>Icon,
    "OldPrice",
    ()=>OldPrice,
    "Overlay",
    ()=>Overlay,
    "OverlayIcon",
    ()=>OverlayIcon,
    "Price",
    ()=>Price,
    "PriceContainer",
    ()=>PriceContainer,
    "Text",
    ()=>Text,
    "TextCompare",
    ()=>TextCompare,
    "Title",
    ()=>Title,
    "Wrapper",
    ()=>Wrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
;
function _templateObject() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 15rem;\n  background: #fff;\n  padding: 5px;\n  overflow: hidden;\n  transition: all 0.3s;\n  position: relative;\n  box-sizing: border-box;\n  cursor: pointer;\n\n  @media (max-width: 768px) {\n    width: 40vw;\n    height: 230px;\n  }\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 100%;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n\n  @media (max-width: 768px) {\n    gap: 10px;\n  }\n"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 80%;\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  justify-content: space-around;\n  gap: 10px;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  pointer-events: none;\n  z-index: 10;\n"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: absolute;\n  display: flex;\n  gap: 10px;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  pointer-events: none;\n  z-index: 10;\n"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 100%;\n  aspect-ratio: 4 / 5;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  background: #ffffff;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    transition: transform 0.3s ease;\n    z-index: 1;\n  }\n\n  ::after {\n    box-shadow:\n      inset 0 0 30px rgba(0, 0, 0, 0.08),\n      inset 0 0 60px rgba(0, 0, 0, 0.05);\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    inset: 0;\n    box-shadow:\n      inset 0 0 30px rgba(0, 0, 0, 0.08),\n      inset 0 0 60px rgba(0, 0, 0, 0.05);\n    transition: opacity 0.4s ease;\n    z-index: 2;\n    pointer-events: none;\n  }\n\n  ",
        " {\n    position: absolute;\n    bottom: 10px;\n    left: 50%;\n    transform: translateX(-50%);\n    display: flex;\n    gap: 8px;\n    opacity: 0;\n    transition:\n      opacity 0.4s ease,\n      transform 0.4s ease;\n    z-index: 3;\n  }\n\n  ",
        " {\n    position: absolute;\n    top: 0;\n    display: flex;\n    right: 0;\n    gap: 8px;\n    opacity: 0;\n    transition:\n      opacity 0.4s ease,\n      transform 0.4s ease;\n    z-index: 3;\n  }\n\n  &:hover img {\n    transform: scale(1.05);\n  }\n\n  &:hover::after {\n    opacity: 1;\n    background: linear-gradient(\n      to top,\n      rgba(255, 255, 255, 1) 10%,\n      rgba(255, 255, 255, 0) 50%\n    );\n  }\n\n  &:hover ",
        " {\n    opacity: 1;\n    pointer-events: auto;\n  }\n\n  &:hover ",
        " {\n    opacity: 1;\n    pointer-events: auto;\n  }\n\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 100%;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n"
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  font-size: 0.8em;\n  text-transform: uppercase;\n  color: #4d4d4d;\n  margin: 0;\n"
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  margin: 5px 0;\n  justify-content: start;\n  width: 100%;\n"
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  font-size: 1.1em;\n  margin: 0;\n  font-weight: 700;\n"
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  font-size: 14px;\n  text-decoration: line-through;\n  color: red;\n  margin: 0 5px;\n"
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject10() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  gap: 10px;\n"
    ]);
    _templateObject10 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject11() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n"
    ]);
    _templateObject11 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject12() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  transition: top 0.5s;\n"
    ]);
    _templateObject12 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject13() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  transition: top 0.5s;\n"
    ]);
    _templateObject13 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject14() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 100%;\n  height: 35px;\n  background: #fff;\n  color: #222;\n  position: relative;\n  border: 1px solid #222;\n  border-radius: 10px;\n  cursor: pointer;\n  overflow: hidden;\n\n  &:hover {\n    background: #222;\n    color: #fff;\n  }\n\n  @media (max-width: 768px) {\n    background-color: #cc0c5c;\n    border: none;\n  }\n"
    ]);
    _templateObject14 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject15() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: inherit;\n  font-weight: 500;\n  font-family: inherit;\n  transition: top 0.5s;\n\n  ",
        ":hover & {\n    top: -100%;\n    color: #fff;\n  }\n\n  @media (max-width: 768px) {\n    display: none;\n  }\n"
    ]);
    _templateObject15 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject16() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 237, 237, 0.65);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 2;\n"
    ]);
    _templateObject16 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject17() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  font-size: 1.5rem;\n  color: #e60000;\n  font-weight: bold;\n"
    ]);
    _templateObject17 = function _templateObject() {
        return data;
    };
    return data;
}
;
var Card = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProductCell.styles__Card",
    componentId: "sc-3e0cdb6d-0"
})(_templateObject());
var Wrapper = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProductCell.styles__Wrapper",
    componentId: "sc-3e0cdb6d-1"
})(_templateObject1());
var HoverButtons = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProductCell.styles__HoverButtons",
    componentId: "sc-3e0cdb6d-2"
})(_templateObject2());
var FindSimilar = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProductCell.styles__FindSimilar",
    componentId: "sc-3e0cdb6d-3"
})(_templateObject3());
var CardImage = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProductCell.styles__CardImage",
    componentId: "sc-3e0cdb6d-4"
})(_templateObject4(), HoverButtons, FindSimilar, HoverButtons, FindSimilar);
var Content = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProductCell.styles__Content",
    componentId: "sc-3e0cdb6d-5"
})(_templateObject5());
var Title = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "ProductCell.styles__Title",
    componentId: "sc-3e0cdb6d-6"
})(_templateObject6());
var PriceContainer = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProductCell.styles__PriceContainer",
    componentId: "sc-3e0cdb6d-7"
})(_templateObject7());
var Price = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "ProductCell.styles__Price",
    componentId: "sc-3e0cdb6d-8"
})(_templateObject8());
var OldPrice = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "ProductCell.styles__OldPrice",
    componentId: "sc-3e0cdb6d-9"
})(_templateObject9());
var ButtonContainer = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProductCell.styles__ButtonContainer",
    componentId: "sc-3e0cdb6d-10"
})(_templateObject10());
var ButtonWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProductCell.styles__ButtonWrapper",
    componentId: "sc-3e0cdb6d-11"
})(_templateObject11());
var Text = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProductCell.styles__Text",
    componentId: "sc-3e0cdb6d-12"
})(_templateObject12());
var Icon = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProductCell.styles__Icon",
    componentId: "sc-3e0cdb6d-13"
})(_templateObject13());
var ButtonCompare = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProductCell.styles__ButtonCompare",
    componentId: "sc-3e0cdb6d-14"
})(_templateObject14());
var TextCompare = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProductCell.styles__TextCompare",
    componentId: "sc-3e0cdb6d-15"
})(_templateObject15(), ButtonCompare);
var Overlay = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProductCell.styles__Overlay",
    componentId: "sc-3e0cdb6d-16"
})(_templateObject16());
var OverlayIcon = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProductCell.styles__OverlayIcon",
    componentId: "sc-3e0cdb6d-17"
})(_templateObject17());
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/button/Button.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ButtonBase",
    ()=>ButtonBase,
    "CountBadge",
    ()=>CountBadge,
    "IconWrapper",
    ()=>IconWrapper,
    "TextWrapper",
    ()=>TextWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
;
function _templateObject() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  0% {\n    background-position: 0% center;\n  }\n  50% {\n    background-position: 100% center;\n  }\n  100% {\n    background-position: 0% center;\n  }\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n      background-size: 300% 300% !important;\n      background: ",
        " 0 center;\n      color: white;\n      border: none;\n\n      &:hover {\n        animation: ",
        " 6s ease-in-out infinite;\n      }\n    "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n      background-color: white;\n      color: ",
        ";\n      border: 1px solid ",
        ";\n\n      &:hover {\n        background-color: #f8f8f8;\n        color: ",
        ";\n      }\n    "
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n      background: none;\n      color: ",
        ";\n      border: none;\n      transition: color 0.3s ease;\n\n      &:hover {\n        color: ",
        ";\n      }\n    "
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n      background: none;\n      color: #001f3f;\n      border: none;\n      text-decoration: none;\n      padding: 0.5rem 0;\n      font-size: 1rem;\n      font-weight: 500;\n      transition: all 0.3s ease;\n      border-radius: 0;\n      flex-direction: row;\n      align-items: center;\n      gap: 0.5rem;\n      position: relative;\n\n      &:hover {\n        color: #001f3f;\n\n        &::after {\n          content: '';\n          position: absolute;\n          bottom: 0;\n          left: 0;\n          right: 0;\n          height: 2px;\n          background-color: #001f3f;\n          transform: scaleX(1);\n          transition: transform 0.3s ease;\n        }\n      }\n\n      &::after {\n        content: '';\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        height: 2px;\n        background-color: #001f3f;\n        transform: scaleX(0);\n        transition: transform 0.3s ease;\n      }\n    "
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  font-family: inherit;\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border-radius: 10px;\n  font-size: 17px;\n  font-weight: 500;\n  padding-inline: 0.8rem;\n  padding-block: 0.8rem;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n  transition: all 0.4s ease;\n  border: none;\n\n  ",
        "\n\n  ",
        "\n\n  ",
        "\n\n  ",
        "\n"
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n      svg,\n      img {\n        color: white;\n        fill: white;\n      }\n    "
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n      svg,\n      img {\n        color: white;\n        fill: white;\n      }\n    "
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n      svg,\n      img {\n        width: 1.25rem;\n        height: 1.25rem;\n        color: ",
        ";\n        fill: ",
        ";\n      }\n    "
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n      svg,\n      img {\n        width: 1rem;\n        height: 1rem;\n      }\n    "
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject10() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 1.5rem;\n  height: 1.5rem;\n\n  svg,\n  img {\n    width: 2rem;\n    height: 2rem;\n    object-fit: contain;\n  }\n\n  svg,\n  svg * {\n    stroke: currentColor !important;\n    fill: currentColor !important;\n  }\n\n  img {\n    ",
        ";\n  }\n\n  ",
        "\n  ",
        "\n  ",
        "\n  ",
        "\n"
    ]);
    _templateObject10 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject11() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  font-size: ",
        ";\n  margin: 0;\n  padding-top: ",
        ";\n  text-align: center;\n  line-height: 1.2;\n  width: max-content;\n"
    ]);
    _templateObject11 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject12() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: absolute;\n  top: 0.1rem;\n  right: 0.1rem;\n  background: ",
        ";\n  color: black;\n  font-size: 10px;\n  font-weight: bold;\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n"
    ]);
    _templateObject12 = function _templateObject() {
        return data;
    };
    return data;
}
;
var moveGradient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"])(_templateObject());
var ButtonBase = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "Button.styles__ButtonBase",
    componentId: "sc-fc3deb8-0"
})(_templateObject5(), function(param) {
    var $variant = param.$variant, $primaryColor = param.$primaryColor;
    return $variant === 'primary' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject1(), $primaryColor, moveGradient);
}, function(param) {
    var $variant = param.$variant, $primaryColorFlat = param.$primaryColorFlat, $secondaryColor = param.$secondaryColor;
    return $variant === 'secondary' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject2(), $secondaryColor, $secondaryColor, $primaryColorFlat);
}, function(param) {
    var $variant = param.$variant, $primaryColorFlat = param.$primaryColorFlat, $secondaryColor = param.$secondaryColor;
    return $variant === 'tertiary' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject3(), $secondaryColor, $primaryColorFlat);
}, function(param) {
    var $variant = param.$variant;
    return $variant === 'link' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject4());
});
var IconWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Button.styles__IconWrapper",
    componentId: "sc-fc3deb8-1"
})(_templateObject10(), function(param) {
    var iconColor = param.iconColor;
    return iconColor === '#ffffff' ? 'filter: brightness(0) invert(1);' : iconColor === '#001f3f' ? 'filter: invert(11%) sepia(33%) saturate(3111%) hue-rotate(178deg) brightness(98%) contrast(104%);' : '';
}, function(param) {
    var $variant = param.$variant;
    return $variant === 'primary' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject6());
}, function(param) {
    var $variant = param.$variant;
    return $variant === 'secondary' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject7());
}, function(param) {
    var $variant = param.$variant, $secondaryColor = param.$secondaryColor;
    return $variant === 'tertiary' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject8(), $secondaryColor, $secondaryColor);
}, function(param) {
    var $variant = param.$variant;
    return $variant === 'link' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject9());
});
var TextWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Button.styles__TextWrapper",
    componentId: "sc-fc3deb8-2"
})(_templateObject11(), function(param) {
    var $hasIcon = param.$hasIcon, $variant = param.$variant;
    return $variant === 'link' ? '1rem' : $hasIcon ? '0.7rem' : '1rem';
}, function(param) {
    var $variant = param.$variant;
    return $variant === 'link' ? '0' : '0.1rem';
});
var CountBadge = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Button.styles__CountBadge",
    componentId: "sc-fc3deb8-3"
})(_templateObject12(), function(param) {
    var $primaryColor = param.$primaryColor;
    return $primaryColor;
});
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/button/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$button$2f$Button$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/button/Button.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$hooks$2f$useThemeColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/hooks/useThemeColors.ts [app-client] (ecmascript)");
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
var Button = function(param) {
    var variant = param.variant, children = param.children, onClick = param.onClick, icon = param.icon, badgeContent = param.badgeContent, iconColor = param.iconColor;
    _s();
    var _useThemeColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$hooks$2f$useThemeColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"])(), primaryColor = _useThemeColors.primaryColor, primaryColorFlat = _useThemeColors.primaryColorFlat, secondaryColor = _useThemeColors.secondaryColor;
    var defaultLinkIcon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M5 12H19M12 5L19 12L12 19",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/button/Button.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/button/Button.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, _this);
    var displayIcon = icon || (variant === 'link' ? defaultLinkIcon : null);
    var hasIcon = !!displayIcon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$button$2f$Button$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonBase"], {
        $variant: variant,
        $primaryColor: primaryColor,
        $primaryColorFlat: primaryColorFlat,
        $secondaryColor: secondaryColor,
        $hasIcon: hasIcon,
        onClick: onClick,
        children: [
            badgeContent !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$button$2f$Button$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CountBadge"], {
                $primaryColor: primaryColor,
                children: badgeContent
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/button/Button.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, _this),
            variant === 'link' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$button$2f$Button$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextWrapper"], {
                        $hasIcon: hasIcon,
                        $variant: variant,
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/button/Button.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, _this),
                    displayIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$button$2f$Button$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconWrapper"], {
                        $variant: variant,
                        $secondaryColor: secondaryColor,
                        iconColor: iconColor,
                        children: displayIcon
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/button/Button.tsx",
                        lineNumber: 70,
                        columnNumber: 13
                    }, _this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    displayIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$button$2f$Button$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconWrapper"], {
                        $variant: variant,
                        $secondaryColor: secondaryColor,
                        iconColor: iconColor,
                        children: displayIcon
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/button/Button.tsx",
                        lineNumber: 82,
                        columnNumber: 13
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$button$2f$Button$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextWrapper"], {
                        $hasIcon: hasIcon,
                        $variant: variant,
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/button/Button.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, _this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/button/Button.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, _this);
};
_s(Button, "2087Qx+d8RowCX9F7RhLEFcwuyE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$hooks$2f$useThemeColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"]
    ];
});
_c = Button;
const __TURBOPACK__default__export__ = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$imageUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/imageUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$findSimilarModal$2f$FindSimilarModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/findSimilarModal/FindSimilarModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$productCell$2f$ProductCell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/button/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/locale.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/lib/locale.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$slug$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/slug.ts [app-client] (ecmascript)");
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
var ProductCell = function(param) {
    var product = param.product;
    _s();
    var router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    var params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    var locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeLocale"])(params === null || params === void 0 ? void 0 : params.locale);
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isSimilarOpen = _useState[0], setIsSimilarOpen = _useState[1];
    var imageSrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$imageUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageUrl"])(product.variant_image) || '/assets/logo.png';
    var handleProductDetailNavigation = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withLocale"])(locale, "/product/".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$slug$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildProductSlug"])(product.name, product.id))));
    };
    var handleAddToCart = function() {
        var stored = localStorage.getItem('cartProducts');
        var cartItems = [];
        if (stored) {
            try {
                var parsed = JSON.parse(stored);
                if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].bagId) {
                    cartItems = parsed;
                } else {
                    cartItems = parsed.map(function(p, index) {
                        return {
                            bagId: "bag-".concat(Date.now(), "-").concat(index, "-").concat(p.id),
                            product: p,
                            quantity: 1
                        };
                    });
                }
            } catch (unused) {
                cartItems = [];
            }
        }
        var existingItem = cartItems.find(function(item) {
            return item.product.id === product.id;
        });
        if (existingItem) {
            var updated = cartItems.filter(function(item) {
                return item.bagId !== existingItem.bagId;
            });
            localStorage.setItem('cartProducts', JSON.stringify(updated));
        } else {
            var newItem = {
                bagId: "bag-".concat(Date.now(), "-").concat(product.id),
                product: product,
                quantity: 1
            };
            cartItems.push(newItem);
            localStorage.setItem('cartProducts', JSON.stringify(cartItems));
        }
        window.dispatchEvent(new Event('cartUpdated'));
    };
    var handleLike = function() {
        var stored = localStorage.getItem('likedProducts');
        var likedProducts = [];
        if (stored) {
            try {
                likedProducts = JSON.parse(stored);
            } catch (unused) {
                likedProducts = [];
            }
        }
        var existingIndex = likedProducts.findIndex(function(p) {
            return p.id === product.id;
        });
        if (existingIndex !== -1) {
            likedProducts.splice(existingIndex, 1);
        } else {
            likedProducts.push(product);
        }
        localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
        window.dispatchEvent(new Event('likedUpdated'));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$productCell$2f$ProductCell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        onClick: handleProductDetailNavigation,
        children: [
            !product.availability && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$productCell$2f$ProductCell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$productCell$2f$ProductCell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OverlayIcon"], {
                    children: "Unavailable"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx",
                    lineNumber: 118,
                    columnNumber: 11
                }, _this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx",
                lineNumber: 117,
                columnNumber: 9
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$productCell$2f$ProductCell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Wrapper"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$productCell$2f$ProductCell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardImage"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: imageSrc,
                                alt: product.name,
                                fill: true,
                                sizes: "(max-width: 768px) 40vw, 15rem",
                                style: {
                                    objectFit: 'cover'
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$productCell$2f$ProductCell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FindSimilar"], {
                                onClick: function(e) {
                                    return e.stopPropagation();
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    variant: "tertiary",
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/assets/heart.svg",
                                        alt: "like",
                                        width: 16,
                                        height: 16
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx",
                                        lineNumber: 134,
                                        columnNumber: 17
                                    }, void 0),
                                    onClick: handleLike,
                                    children: "Like"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$productCell$2f$ProductCell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverButtons"], {
                                onClick: function(e) {
                                    return e.stopPropagation();
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "tertiary",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/assets/plus.svg",
                                            alt: "cart",
                                            width: 16,
                                            height: 16
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx",
                                            lineNumber: 150,
                                            columnNumber: 17
                                        }, void 0),
                                        onClick: function() {
                                            return setIsSimilarOpen(true);
                                        },
                                        children: "Find Similar"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "tertiary",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/assets/cart.svg",
                                            alt: "cart",
                                            width: 16,
                                            height: 16
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx",
                                            lineNumber: 164,
                                            columnNumber: 17
                                        }, void 0),
                                        onClick: handleAddToCart,
                                        children: "Add to Cart"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$productCell$2f$ProductCell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$productCell$2f$ProductCell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                                children: product.name
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$productCell$2f$ProductCell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PriceContainer"], {
                                children: product.price_new ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$productCell$2f$ProductCell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Price"], {
                                            children: [
                                                product.price_new,
                                                " USD"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx",
                                            lineNumber: 182,
                                            columnNumber: 17
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$productCell$2f$ProductCell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OldPrice"], {
                                            children: [
                                                product.price,
                                                " USD"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx",
                                            lineNumber: 183,
                                            columnNumber: 17
                                        }, _this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$productCell$2f$ProductCell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Price"], {
                                    children: [
                                        product.price,
                                        " USD"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$findSimilarModal$2f$FindSimilarModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isSimilarOpen,
                onClose: function() {
                    return setIsSimilarOpen(false);
                },
                product: product
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, _this);
};
_s(ProductCell, "2Ic6mfFr9mtIb05SAwheHD1kVW0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = ProductCell;
const __TURBOPACK__default__export__ = ProductCell;
var _c;
__turbopack_context__.k.register(_c, "ProductCell");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/productsTrending/ProductsTrending.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowButton",
    ()=>ArrowButton,
    "ArrowSvg",
    ()=>ArrowSvg,
    "BestsellerCarousel",
    ()=>BestsellerCarousel,
    "BestsellerTitle",
    ()=>BestsellerTitle,
    "ProductType",
    ()=>ProductType,
    "ScrollableSwiper",
    ()=>ScrollableSwiper,
    "TitleContainer",
    ()=>TitleContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
;
function _templateObject() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  margin: 5rem 0;\n  padding: 0 8rem;\n  position: relative;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 0.5rem;\n  margin-bottom: 2rem;\n  align-items: flex-end;\n"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  flex-direction: row;\n  overflow-x: auto;\n  overflow-y: visible;\n  scroll-behavior: smooth;\n  gap: 16px;\n  margin: 0 50px;\n  padding: 30px 10px 30px 20px;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  > * {\n    flex: 0 0 auto;\n  }\n"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n      left: 8px;\n    "
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n      right: 8px;\n    "
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: absolute;\n  top: 50%;\n  border: none;\n  background: none;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 1;\n  transform: translateY(-50%);\n  transition:\n    background-color 0.3s,\n    transform 0.3s;\n\n  ",
        "\n  ",
        "\n  &:hover {\n    background-color: ",
        ";\n\n    svg {\n      stroke: #001f3f;\n    }\n  }\n"
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 24px;\n  height: 24px;\n  color: #b7b7b7;\n  transition:\n    transform 0.3s ease,\n    opacity 0.3s ease;\n"
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  font-size: 24px;\n  font-weight: bold;\n  color: ",
        ";\n  text-align: center;\n  margin: 0;\n"
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  font-size: 18px;\n  font-style: italic;\n  color: ",
        ";\n  text-align: center;\n  vertical-align: bottom;\n  margin: 0;\n"
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
;
var BestsellerCarousel = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProductsTrending.styles__BestsellerCarousel",
    componentId: "sc-809f1d83-0"
})(_templateObject());
var TitleContainer = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProductsTrending.styles__TitleContainer",
    componentId: "sc-809f1d83-1"
})(_templateObject1());
var ScrollableSwiper = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProductsTrending.styles__ScrollableSwiper",
    componentId: "sc-809f1d83-2"
})(_templateObject2());
var ArrowButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "ProductsTrending.styles__ArrowButton",
    componentId: "sc-809f1d83-3"
})(_templateObject5(), function(param) {
    var $direction = param.$direction;
    return $direction === 'left' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject3());
}, function(param) {
    var $direction = param.$direction;
    return $direction === 'right' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject4());
}, function(param) {
    var $primaryColor = param.$primaryColor;
    return $primaryColor;
});
var ArrowSvg = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "ProductsTrending.styles__ArrowSvg",
    componentId: "sc-809f1d83-4"
})(_templateObject6());
var BestsellerTitle = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "ProductsTrending.styles__BestsellerTitle",
    componentId: "sc-809f1d83-5"
})(_templateObject7(), function(param) {
    var $secondaryColor = param.$secondaryColor;
    return $secondaryColor;
});
var ProductType = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "ProductsTrending.styles__ProductType",
    componentId: "sc-809f1d83-6"
})(_templateObject8(), function(param) {
    var $secondaryColor = param.$secondaryColor;
    return $secondaryColor;
});
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/productsTrending/ProductsTrending.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$productCell$2f$ProductCell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$productsTrending$2f$ProductsTrending$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/productsTrending/ProductsTrending.styles.ts [app-client] (ecmascript)");
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
var ProductsTrending = function(param) {
    var productType = param.productType, primaryColor = param.primaryColor, secondaryColor = param.secondaryColor, data = param.data;
    _s();
    var t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])().t;
    var containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var scroll = function(direction) {
        if (containerRef.current) {
            var scrollAmount = direction === 'left' ? -200 : 200;
            containerRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$productsTrending$2f$ProductsTrending$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BestsellerCarousel"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$productsTrending$2f$ProductsTrending$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TitleContainer"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$productsTrending$2f$ProductsTrending$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BestsellerTitle"], {
                        $secondaryColor: secondaryColor,
                        children: t('trending')
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/productsTrending/ProductsTrending.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$productsTrending$2f$ProductsTrending$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductType"], {
                        $secondaryColor: secondaryColor,
                        children: productType
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/productsTrending/ProductsTrending.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/productsTrending/ProductsTrending.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$productsTrending$2f$ProductsTrending$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowButton"], {
                $direction: "left",
                onClick: function() {
                    return scroll('left');
                },
                $primaryColor: primaryColor,
                style: {
                    marginLeft: '8rem'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$productsTrending$2f$ProductsTrending$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowSvg"], {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M15.75 19.5L8.25 12l7.5-7.5"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/productsTrending/ProductsTrending.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/productsTrending/ProductsTrending.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, _this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/productsTrending/ProductsTrending.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$productsTrending$2f$ProductsTrending$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollableSwiper"], {
                ref: containerRef,
                children: data.map(function(product) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$productCell$2f$ProductCell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        product: product
                    }, product.id, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/productsTrending/ProductsTrending.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, _this);
                })
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/productsTrending/ProductsTrending.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$productsTrending$2f$ProductsTrending$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowButton"], {
                $direction: "right",
                onClick: function() {
                    return scroll('right');
                },
                $primaryColor: primaryColor,
                style: {
                    marginRight: '8rem'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$productsTrending$2f$ProductsTrending$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowSvg"], {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M8.25 4.5L15.75 12l-7.5 7.5"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/productsTrending/ProductsTrending.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/productsTrending/ProductsTrending.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, _this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/productsTrending/ProductsTrending.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/productsTrending/ProductsTrending.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, _this);
};
_s(ProductsTrending, "yFu3qrw/JlWHgHBoNvchcq44E3k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = ProductsTrending;
const __TURBOPACK__default__export__ = ProductsTrending;
var _c;
__turbopack_context__.k.register(_c, "ProductsTrending");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryHero/CategoryHero.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CTARow",
    ()=>CTARow,
    "Description",
    ()=>Description,
    "Eyebrow",
    ()=>Eyebrow,
    "HeroInner",
    ()=>HeroInner,
    "HeroWrapper",
    ()=>HeroWrapper,
    "InfoRow",
    ()=>InfoRow,
    "LeftPanel",
    ()=>LeftPanel,
    "MainImage",
    ()=>MainImage,
    "ProductsStrip",
    ()=>ProductsStrip,
    "RightPanel",
    ()=>RightPanel,
    "SuperTitle",
    ()=>SuperTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
;
function _templateObject() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 100%;\n  display: grid;\n  grid-template-columns: 40% 60%;\n  gap: 0;\n  height: 100%;\n\n  @media (max-width: 1024px) {\n    grid-template-columns: 1fr;\n    height: auto;\n  }\n"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  background: #ffffff;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  min-height: 520px;\n  max-height: 80vh;\n\n  @media (max-width: 1024px) {\n    min-height: 360px;\n  }\n"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n\n  img {\n    object-fit: cover;\n    object-position: center;\n  }\n"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  background: #ffffff;\n  display: grid;\n  grid-template-rows: auto auto 1fr auto;\n  padding: 13vh 10vh 7vh 10vh;\n  width: 100%;\n  height: 100%;\n\n  @media (max-width: 1024px) {\n    padding: 60px 40px;\n    min-height: unset;\n  }\n"
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  font-family: 'GFS Didot', serif;\n  font-size: 72px;\n  line-height: 0.95;\n  letter-spacing: -0.02em;\n  margin: 0 0 12px 0;\n  font-weight: 400;\n  color: #3a2521;\n  text-align: start;\n  align-content: flex-start;\n\n  @media (max-width: 1200px) {\n    font-size: 56px;\n  }\n  @media (max-width: 768px) {\n    font-size: 40px;\n  }\n"
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  font-family: 'EB Garamond', serif;\n  margin: 0 0 20px 0;\n  font-size: 18px;\n  line-height: 1.6;\n  color: #6e6865;\n  align-content: flex-start;\n  text-align: end;\n  flex: 1;\n"
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  flex-direction: row;\n  gap: 10%;\n  padding: 0 15px;\n\n  > *:first-child {\n    flex: 0 0 50%;\n  }\n\n  > *:last-child {\n    flex: 0 0 40%;\n  }\n"
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  gap: 30px;\n  margin: 24px 0;\n  overflow-x: auto;\n  padding: 8px 0;\n  height: fit-content;\n  justify-content: space-between;\n\n  @media (max-width: 768px) {\n    gap: 12px;\n  }\n"
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 16px;\n  margin-top: auto;\n  padding-top: 24px;\n  flex-wrap: wrap;\n  padding: 0 15px;\n"
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject10() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  background: rgba(255, 255, 255, 0.9);\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 500;\n  font-family: 'EB Garamond', serif;\n  color: #3a2521;\n  z-index: 1;\n"
    ]);
    _templateObject10 = function _templateObject() {
        return data;
    };
    return data;
}
;
var HeroWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].section.withConfig({
    displayName: "CategoryHero.styles__HeroWrapper",
    componentId: "sc-ae814821-0"
})(_templateObject());
var HeroInner = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CategoryHero.styles__HeroInner",
    componentId: "sc-ae814821-1"
})(_templateObject1());
var LeftPanel = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CategoryHero.styles__LeftPanel",
    componentId: "sc-ae814821-2"
})(_templateObject2());
var MainImage = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CategoryHero.styles__MainImage",
    componentId: "sc-ae814821-3"
})(_templateObject3());
var RightPanel = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CategoryHero.styles__RightPanel",
    componentId: "sc-ae814821-4"
})(_templateObject4());
var SuperTitle = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h1.withConfig({
    displayName: "CategoryHero.styles__SuperTitle",
    componentId: "sc-ae814821-5"
})(_templateObject5());
var Description = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "CategoryHero.styles__Description",
    componentId: "sc-ae814821-6"
})(_templateObject6());
var InfoRow = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CategoryHero.styles__InfoRow",
    componentId: "sc-ae814821-7"
})(_templateObject7());
var ProductsStrip = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CategoryHero.styles__ProductsStrip",
    componentId: "sc-ae814821-8"
})(_templateObject8());
var CTARow = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CategoryHero.styles__CTARow",
    componentId: "sc-ae814821-9"
})(_templateObject9());
var Eyebrow = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CategoryHero.styles__Eyebrow",
    componentId: "sc-ae814821-10"
})(_templateObject10());
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryHero/CategoryHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryHero$2f$CategoryHero$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryHero/CategoryHero.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/button/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$productCell$2f$ProductCell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx [app-client] (ecmascript)");
;
var _this = ("TURBOPACK compile-time value", void 0);
;
;
;
;
;
var CategoryHero = function(param) {
    var categoryTagline = param.categoryTagline, categoryDescription = param.categoryDescription, featuredProducts = param.featuredProducts, mainImage = param.mainImage, _param_mainImageAlt = param.mainImageAlt, mainImageAlt = _param_mainImageAlt === void 0 ? 'Category hero image' : _param_mainImageAlt, _param_onCtaClick = param.onCtaClick, onCtaClick = _param_onCtaClick === void 0 ? function() {} : _param_onCtaClick, _param_ctaText = param.ctaText, ctaText = _param_ctaText === void 0 ? 'Shop now' : _param_ctaText, categoryLabel = param.categoryLabel, className = param.className;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryHero$2f$CategoryHero$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroWrapper"], {
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryHero$2f$CategoryHero$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroInner"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryHero$2f$CategoryHero$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeftPanel"], {
                    children: [
                        categoryLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryHero$2f$CategoryHero$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Eyebrow"], {
                            children: categoryLabel
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryHero/CategoryHero.tsx",
                            lineNumber: 48,
                            columnNumber: 28
                        }, _this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryHero$2f$CategoryHero$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MainImage"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: mainImage,
                                alt: mainImageAlt,
                                fill: true,
                                sizes: "(max-width: 1024px) 100vw, 50vw",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryHero/CategoryHero.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, _this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryHero/CategoryHero.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryHero/CategoryHero.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryHero$2f$CategoryHero$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RightPanel"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryHero$2f$CategoryHero$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InfoRow"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryHero$2f$CategoryHero$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SuperTitle"], {
                                    children: categoryTagline
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryHero/CategoryHero.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryHero$2f$CategoryHero$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
                                    children: categoryDescription
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryHero/CategoryHero.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryHero/CategoryHero.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryHero$2f$CategoryHero$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductsStrip"], {
                            children: (featuredProducts || []).slice(0, 4).map(function(product) {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$productCell$2f$ProductCell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    product: product
                                }, String(product.id), false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryHero/CategoryHero.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, _this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryHero/CategoryHero.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryHero$2f$CategoryHero$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CTARow"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                variant: 'link',
                                onClick: onCtaClick,
                                children: ctaText
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryHero/CategoryHero.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, _this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryHero/CategoryHero.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryHero/CategoryHero.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, _this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryHero/CategoryHero.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryHero/CategoryHero.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, _this);
};
_c = CategoryHero;
const __TURBOPACK__default__export__ = CategoryHero;
var _c;
__turbopack_context__.k.register(_c, "CategoryHero");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryCell/CategoryCell.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CellButton",
    ()=>CellButton,
    "CellDescription",
    ()=>CellDescription,
    "CellTitle",
    ()=>CellTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
;
function _templateObject() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: relative;\n  border: none;\n  width: 100%;\n  min-height: clamp(320px, 32vw, 480px);\n  border-radius: 0;\n  padding: 2.25rem 2rem;\n  text-align: center;\n  cursor: pointer;\n  color: #ffffff;\n  background-image: ",
        ";\n  background-size: cover;\n  background-position: center;\n  box-shadow: 0 18px 45px rgba(11, 27, 58, 0.22);\n  transition: transform 240ms ease;\n\n  &::after {\n    content: '';\n    position: absolute;\n    inset: 0;\n    background: linear-gradient(\n      to top,\n      rgba(11, 27, 58, 0.75) 0%,\n      rgba(11, 27, 58, 0.2) 55%,\n      rgba(11, 27, 58, 0) 100%\n    );\n    opacity: 0;\n    transform: translateY(8px);\n    transition:\n      opacity 420ms ease,\n      transform 420ms ease;\n    pointer-events: none;\n  }\n\n  > * {\n    position: relative;\n    z-index: 1;\n  }\n\n  &:hover,\n  &:focus-visible {\n    transform: translateY(-2px);\n  }\n\n  &:hover::after,\n  &:focus-visible::after {\n    opacity: 1;\n    transform: translateY(0);\n  }\n\n  &:focus-visible {\n    outline: none;\n    box-shadow:\n      0 26px 65px rgba(11, 27, 58, 0.28),\n      0 0 0 2px rgba(255, 255, 255, 0.7),\n      0 0 0 6px rgba(11, 27, 58, 0.5);\n  }\n\n  @media (max-width: 900px) {\n    min-height: clamp(320px, 70vw, 520px);\n    padding: 1.75rem 1.5rem;\n  }\n\n  @media (prefers-reduced-motion: reduce) {\n    transition: none;\n\n    &::after {\n      transition: none;\n    }\n  }\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  margin: 0 0 0.5rem;\n  font-size: 1.8rem;\n  font-family: 'Cormorant Garamond', 'EB Garamond', 'GFS Didot', serif;\n  font-weight: 400;\n  letter-spacing: -0.02em;\n"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  margin: 0;\n  font-size: 0.9rem;\n  font-family: 'GFS Didot', serif;\n  font-weight: 400;\n  letter-spacing: -0.02em;\n  color: rgba(255, 255, 255, 0.78);\n  line-height: 1.5;\n"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
;
var CellButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "CategoryCell.styles__CellButton",
    componentId: "sc-42d5b89c-0"
})(_templateObject(), function(param) {
    var $imageUrl = param.$imageUrl;
    return "linear-gradient(rgba(11, 27, 58, 0.62), rgba(11, 27, 58, 0.62)), url(".concat($imageUrl, ")");
});
var CellTitle = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h3.withConfig({
    displayName: "CategoryCell.styles__CellTitle",
    componentId: "sc-42d5b89c-1"
})(_templateObject1());
var CellDescription = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "CategoryCell.styles__CellDescription",
    componentId: "sc-42d5b89c-2"
})(_templateObject2());
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryCell/CategoryCell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryCell$2f$CategoryCell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryCell/CategoryCell.styles.ts [app-client] (ecmascript)");
;
var _this = ("TURBOPACK compile-time value", void 0);
;
;
var CategoryCell = function(param) {
    var title = param.title, description = param.description, imageUrl = param.imageUrl, onClick = param.onClick;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryCell$2f$CategoryCell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CellButton"], {
        type: "button",
        onClick: onClick,
        $imageUrl: imageUrl,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryCell$2f$CategoryCell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CellTitle"], {
                children: title
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryCell/CategoryCell.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, _this),
            description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryCell$2f$CategoryCell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CellDescription"], {
                children: description
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryCell/CategoryCell.tsx",
                lineNumber: 20,
                columnNumber: 22
            }, _this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryCell/CategoryCell.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, _this);
};
_c = CategoryCell;
const __TURBOPACK__default__export__ = CategoryCell;
var _c;
__turbopack_context__.k.register(_c, "CategoryCell");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/templateSection/TemplateSection.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardsGrid",
    ()=>CardsGrid,
    "Description",
    ()=>Description,
    "HeaderRow",
    ()=>HeaderRow,
    "Section",
    ()=>Section,
    "SubcategoryGrid",
    ()=>SubcategoryGrid,
    "Title",
    ()=>Title,
    "TitleBlock",
    ()=>TitleBlock,
    "TitleLine",
    ()=>TitleLine,
    "TitleRow",
    ()=>TitleRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
;
function _templateObject() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    row-gap: 3.5rem;\n    column-gap: 2.75rem;\n    align-items: start;\n    justify-items: center;\n\n    > div:nth-child(1) {\n      transform: translateY(18px);\n    }\n\n    > div:nth-child(2) {\n      transform: translateY(-6px);\n    }\n\n    > div:nth-child(3) {\n      transform: translateY(30px);\n    }\n\n    @media (max-width: 900px) {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n\n      > div {\n        transform: none;\n      }\n    }\n\n    @media (max-width: 640px) {\n      grid-template-columns: 1fr;\n    }\n  "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    gap: 2.75rem;\n    align-items: center;\n    justify-items: center;\n\n    > div:nth-child(2) {\n      transform: translateY(-18px) scale(1.08);\n      max-width: 320px;\n    }\n\n    > div:nth-child(1),\n    > div:nth-child(3) {\n      opacity: 0.9;\n    }\n\n    @media (max-width: 900px) {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n\n      > div:nth-child(2) {\n        transform: none;\n        max-width: 260px;\n      }\n    }\n\n    @media (max-width: 640px) {\n      grid-template-columns: 1fr;\n    }\n  "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    grid-template-columns:\n      minmax(220px, 320px) minmax(180px, 240px)\n      minmax(180px, 240px);\n    gap: 3rem;\n    align-items: start;\n    justify-items: center;\n\n    > div:nth-child(1) {\n      max-width: 320px;\n      justify-self: end;\n    }\n\n    > div:nth-child(2) {\n      margin-top: 1.5rem;\n    }\n\n    > div:nth-child(3) {\n      margin-top: 2.75rem;\n      justify-self: start;\n    }\n\n    @media (max-width: 900px) {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n\n      > div {\n        margin-top: 0;\n        justify-self: center;\n      }\n    }\n\n    @media (max-width: 640px) {\n      grid-template-columns: 1fr;\n    }\n  "
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    gap: 0;\n    align-items: center;\n    justify-items: center;\n\n    > div {\n      position: relative;\n    }\n\n    > div:nth-child(2) {\n      margin: 0 -28px;\n      z-index: 2;\n    }\n\n    > div:nth-child(1),\n    > div:nth-child(3) {\n      z-index: 1;\n    }\n\n    > div:nth-child(1) {\n      transform: translateX(8px);\n    }\n\n    > div:nth-child(3) {\n      transform: translateX(-8px);\n    }\n\n    @media (max-width: 900px) {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n      gap: 2rem;\n\n      > div:nth-child(2) {\n        margin: 0;\n      }\n\n      > div:nth-child(1),\n      > div:nth-child(3) {\n        transform: none;\n      }\n    }\n\n    @media (max-width: 640px) {\n      grid-template-columns: 1fr;\n    }\n  "
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    gap: 3.25rem 3rem;\n    align-items: start;\n    justify-items: center;\n\n    > div {\n      max-width: 230px;\n    }\n\n    > div:nth-child(2) {\n      padding-top: 1.2rem;\n    }\n\n    @media (max-width: 900px) {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n\n    @media (max-width: 640px) {\n      grid-template-columns: 1fr;\n    }\n  "
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 100%;\n  padding: 5rem 0.3rem 2.5rem;\n  box-sizing: border-box;\n  text-align: center;\n\n  background:\n    linear-gradient(180deg, rgba(255, 255, 255, 0.38), rgba(255, 255, 255, 0)),\n    ",
        ";\n"
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n"
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  max-width: 680px;\n  margin: 0 auto;\n"
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n"
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  flex: 1;\n  max-width: 120px;\n  height: 1px;\n  background-color: ",
        ";\n  opacity: 0.5;\n\n  @media (max-width: 640px) {\n    max-width: 60px;\n  }\n"
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject10() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  margin: 0;\n  font-size: clamp(1.6rem, 3vw, 2.2rem);\n  font-weight: 500;\n  font-family: 'Canela', 'Cormorant Garamond', 'EB Garamond', serif;\n  letter-spacing: -0.03em;\n  color: ",
        ";\n"
    ]);
    _templateObject10 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject11() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  margin: 0 auto;\n  max-width: 56ch;\n  font-size: 1rem;\n  font-family: 'Canela', 'Cormorant Garamond', 'EB Garamond', serif;\n  line-height: 1.2;\n  color: ",
        ";\n"
    ]);
    _templateObject11 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject12() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 200px));\n  gap: 1.1rem;\n  justify-content: center;\n  max-width: 680px;\n  margin: 0 auto 3rem;\n  margin-bottom: 3rem;\n\n  ",
        "\n"
    ]);
    _templateObject12 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject13() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  max-width: 260px;\n  margin: 0 auto;\n  padding: 1.25rem 0.4rem 1rem;\n  text-align: center;\n\n  font-size: 0.95rem;\n  line-height: 1.6;\n  color: ",
        ";\n\n  img {\n    width: 100%;\n    max-width: 220px;\n    height: 200px;\n    margin: 0 auto 0.9rem;\n    display: block;\n    object-fit: cover;\n    border-radius: 12px;\n  }\n\n  h3 {\n    margin: 0 0 0.5rem;\n    font-size: 1.2rem;\n    font-weight: 500;\n    font-family: 'Canela', 'Cormorant Garamond', 'EB Garamond', serif;\n    letter-spacing: -0.01em;\n    color: ",
        ";\n  }\n\n  h3::after {\n    content: '';\n    display: block;\n    width: 26px;\n    height: 1px;\n    margin: 0.45rem auto 0;\n    background-color: ",
        ";\n    opacity: 0.65;\n  }\n\n  p {\n    margin: 0;\n    max-height: 0;\n    opacity: 0;\n    overflow: hidden;\n    padding: 0 0.9rem;\n    font-size: 1rem;\n    font-family: 'Canela', 'Cormorant Garamond', 'EB Garamond', serif;\n    line-height: 1.2;\n    color: ",
        ";\n    background: ",
        ";\n\n    transform: translateY(-6px);\n    transition:\n      max-height 220ms ease,\n      opacity 220ms ease,\n      transform 220ms ease,\n      padding 220ms ease;\n  }\n\n  &:hover p,\n  &:focus-within p,\n  h3:hover + p {\n    max-height: 120px;\n    opacity: 1;\n    transform: translateY(0);\n    padding: 0.35rem 0.6rem 0.4rem;\n  }\n\n  @media (prefers-reduced-motion: reduce) {\n    p {\n      transition: none;\n    }\n  }\n"
    ]);
    _templateObject13 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject14() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 4px;\n  width: 100%;\n\n  @media (max-width: 900px) {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n"
    ]);
    _templateObject14 = function _templateObject() {
        return data;
    };
    return data;
}
;
var INK = 'rgba(9, 28, 85, 0.89)';
var INK_MUTED = 'rgba(75, 34, 0, 0.89)';
var INK_SOFT = 'rgba(63, 58, 54, 0.58)';
var PORCELAIN = '#F7EFE9';
var CARD_SURFACE = 'rgba(255, 255, 255, 0.85)';
var ACCENT = '#B79A6A';
var variantStyles = {
    staggered: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject()),
    split_focus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject1()),
    asymmetric_row: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject2()),
    overlap: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject3()),
    editorial_grid: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject4())
};
var Section = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].section.withConfig({
    displayName: "TemplateSection.styles__Section",
    componentId: "sc-38e96bb1-0"
})(_templateObject5(), PORCELAIN);
var HeaderRow = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TemplateSection.styles__HeaderRow",
    componentId: "sc-38e96bb1-1"
})(_templateObject6());
var TitleBlock = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TemplateSection.styles__TitleBlock",
    componentId: "sc-38e96bb1-2"
})(_templateObject7());
var TitleRow = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TemplateSection.styles__TitleRow",
    componentId: "sc-38e96bb1-3"
})(_templateObject8());
var TitleLine = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "TemplateSection.styles__TitleLine",
    componentId: "sc-38e96bb1-4"
})(_templateObject9(), ACCENT);
var Title = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h2.withConfig({
    displayName: "TemplateSection.styles__Title",
    componentId: "sc-38e96bb1-5"
})(_templateObject10(), INK);
var Description = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "TemplateSection.styles__Description",
    componentId: "sc-38e96bb1-6"
})(_templateObject11(), INK_MUTED);
var CardsGrid = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TemplateSection.styles__CardsGrid",
    componentId: "sc-38e96bb1-7"
})(_templateObject12(), function(param) {
    var $variant = param.$variant;
    return $variant ? variantStyles[$variant] : null;
});
var Card = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TemplateSection.styles__Card",
    componentId: "sc-38e96bb1-8"
})(_templateObject13(), INK_SOFT, INK, ACCENT, INK_MUTED, CARD_SURFACE);
var SubcategoryGrid = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TemplateSection.styles__SubcategoryGrid",
    componentId: "sc-38e96bb1-9"
})(_templateObject14());
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/templateSection/TemplateSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/button/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryCell$2f$CategoryCell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryCell/CategoryCell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$templateSection$2f$TemplateSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/templateSection/TemplateSection.styles.ts [app-client] (ecmascript)");
;
var _this = ("TURBOPACK compile-time value", void 0);
;
;
;
;
var TemplateSection = function(param) {
    var title = param.title, description = param.description, buttonLabel = param.buttonLabel, onButtonClick = param.onButtonClick, cards = param.cards, subcategoryItems = param.subcategoryItems, layoutVariant = param.layoutVariant;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$templateSection$2f$TemplateSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$templateSection$2f$TemplateSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeaderRow"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$templateSection$2f$TemplateSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TitleBlock"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$templateSection$2f$TemplateSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TitleRow"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$templateSection$2f$TemplateSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TitleLine"], {
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/templateSection/TemplateSection.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$templateSection$2f$TemplateSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/templateSection/TemplateSection.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$templateSection$2f$TemplateSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TitleLine"], {
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/templateSection/TemplateSection.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/templateSection/TemplateSection.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$templateSection$2f$TemplateSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/templateSection/TemplateSection.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/templateSection/TemplateSection.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, _this),
                    buttonLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        variant: "link",
                        onClick: onButtonClick,
                        children: buttonLabel
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/templateSection/TemplateSection.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, _this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/templateSection/TemplateSection.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, _this),
            cards && cards.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$templateSection$2f$TemplateSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardsGrid"], {
                $variant: layoutVariant,
                children: cards.map(function(card, index) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$templateSection$2f$TemplateSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: card
                    }, "card-".concat(index), false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/templateSection/TemplateSection.tsx",
                        lineNumber: 69,
                        columnNumber: 13
                    }, _this);
                })
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/templateSection/TemplateSection.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, _this) : null,
            subcategoryItems && subcategoryItems.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$templateSection$2f$TemplateSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubcategoryGrid"], {
                children: subcategoryItems.slice(0, 4).map(function(item) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryCell$2f$CategoryCell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: item.title,
                        description: item.description,
                        imageUrl: item.imageUrl,
                        onClick: item.onClick
                    }, item.title, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/templateSection/TemplateSection.tsx",
                        lineNumber: 77,
                        columnNumber: 13
                    }, _this);
                })
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/templateSection/TemplateSection.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, _this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/templateSection/TemplateSection.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, _this);
};
_c = TemplateSection;
const __TURBOPACK__default__export__ = TemplateSection;
var _c;
__turbopack_context__.k.register(_c, "TemplateSection");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/WhyJasmineCrafted.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$templateSection$2f$TemplateSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/templateSection/TemplateSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$hooks$2f$useCategories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/hooks/useCategories.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/locale.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/lib/locale.ts [app-client] (ecmascript)");
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
var WhyJasmineCrafted = function() {
    _s();
    var router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    var params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    var locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeLocale"])(params === null || params === void 0 ? void 0 : params.locale);
    var categories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$hooks$2f$useCategories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCategories"])().categories;
    var cards = [
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    children: "Handmade"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/WhyJasmineCrafted.tsx",
                    lineNumber: 17,
                    columnNumber: 7
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Every stitch tells a story, crafted by hand with care and patience."
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/WhyJasmineCrafted.tsx",
                    lineNumber: 18,
                    columnNumber: 7
                }, _this)
            ]
        }, "handmade", true, {
            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/WhyJasmineCrafted.tsx",
            lineNumber: 16,
            columnNumber: 5
        }, _this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    children: "Timeless"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/WhyJasmineCrafted.tsx",
                    lineNumber: 21,
                    columnNumber: 7
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Designed to age beautifully, your everyday companion, season after season."
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/WhyJasmineCrafted.tsx",
                    lineNumber: 22,
                    columnNumber: 7
                }, _this)
            ]
        }, "timeless", true, {
            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/WhyJasmineCrafted.tsx",
            lineNumber: 20,
            columnNumber: 5
        }, _this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    children: "Personalizable"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/WhyJasmineCrafted.tsx",
                    lineNumber: 28,
                    columnNumber: 7
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Choose your colors, details, and finish, to match your style or the moment."
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/WhyJasmineCrafted.tsx",
                    lineNumber: 29,
                    columnNumber: 7
                }, _this)
            ]
        }, "personalizable", true, {
            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/WhyJasmineCrafted.tsx",
            lineNumber: 27,
            columnNumber: 5
        }, _this)
    ];
    var subcategoryItems = categories.flatMap(function(category) {
        return (category.subcategories || []).map(function(subcategory, index) {
            return {
                title: subcategory.name,
                description: category.name,
                imageUrl: "/assets/bag".concat(index % 4 + 1, ".webp"),
                onClick: function() {
                    return router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withLocale"])(locale, "/products?category_id=".concat(category.id, "&subcategory_id=").concat(subcategory.id)));
                }
            };
        });
    }).slice(0, 4);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$templateSection$2f$TemplateSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Made to stay with you",
        description: "Made for the moments you keep, not just the ones you gift.",
        layoutVariant: "staggered",
        cards: cards,
        subcategoryItems: subcategoryItems
    }, void 0, false, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/WhyJasmineCrafted.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, _this);
};
_s(WhyJasmineCrafted, "jfMGOLaFGWCHCg4mnVStfhENf0o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$hooks$2f$useCategories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCategories"]
    ];
});
_c = WhyJasmineCrafted;
const __TURBOPACK__default__export__ = WhyJasmineCrafted;
var _c;
__turbopack_context__.k.register(_c, "WhyJasmineCrafted");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/LandingScreen.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LandingScreenContainer",
    ()=>LandingScreenContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
;
function _templateObject() {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-sizing: border-box;\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
;
var LandingScreenContainer = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LandingScreen.styles__LandingScreenContainer",
    componentId: "sc-70b8bc6c-0"
})(_templateObject());
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/LandingScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LandingScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$heroSlide$2f$HeroSlide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/heroSlide/HeroSlide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$footer$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/footer/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$productsTrending$2f$ProductsTrending$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/productsTrending/ProductsTrending.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryHero$2f$CategoryHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryHero/CategoryHero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$templateSection$2f$TemplateSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/templateSection/TemplateSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$screen$2f$landing$2f$WhyJasmineCrafted$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/WhyJasmineCrafted.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$screen$2f$landing$2f$LandingScreen$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/LandingScreen.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$hooks$2f$useThemeColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/hooks/useThemeColors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$productsService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/service/productsService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$productMapper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/productMapper.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/locale.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/lib/locale.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$productFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/productFields.ts [app-client] (ecmascript)");
;
;
;
;
;
var _s = __turbopack_context__.k.signature();
'use client';
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
;
;
;
;
var HeaderComponent = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
function LandingScreen(param) {
    var _param_initialTrendingBagsProducts = param.initialTrendingBagsProducts, initialTrendingBagsProducts = _param_initialTrendingBagsProducts === void 0 ? [] : _param_initialTrendingBagsProducts, _param_initialTrendingDressProducts = param.initialTrendingDressProducts, initialTrendingDressProducts = _param_initialTrendingDressProducts === void 0 ? [] : _param_initialTrendingDressProducts;
    _s();
    var router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    var searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    var params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    var locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeLocale"])(params === null || params === void 0 ? void 0 : params.locale);
    var _useThemeColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$hooks$2f$useThemeColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"])(), primaryColor = _useThemeColors.primaryColor, secondaryColor = _useThemeColors.secondaryColor;
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialTrendingBagsProducts), 2), trendingBagsProducts = _useState[0], setTrendingBagsProducts = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialTrendingDressProducts), 2), trendingDressProducts = _useState1[0], setTrendingDressProducts = _useState1[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LandingScreen.useEffect": function() {
            var section = searchParams.get('scrollTo');
            if (!section) return;
            var element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                router.replace((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withLocale"])(locale, '/'));
            }
        }
    }["LandingScreen.useEffect"], [
        searchParams,
        router,
        locale
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LandingScreen.useEffect": function() {
            var hasInitialData = initialTrendingBagsProducts.length > 0 || initialTrendingDressProducts.length > 0;
            if (hasInitialData) return;
            var loadProducts = {
                "LandingScreen.useEffect.loadProducts": function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                        "LandingScreen.useEffect.loadProducts": function() {
                            var _ref, bagsResponse, dressesResponse, error;
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, {
                                "LandingScreen.useEffect.loadProducts": function(_state) {
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
                                                Promise.all([
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$productsService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listProducts"])({
                                                        page: 1,
                                                        page_size: 10,
                                                        fields: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$productFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCT_CARD_FIELDS"]
                                                    }),
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$productsService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listProducts"])({
                                                        page: 1,
                                                        page_size: 10,
                                                        fields: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$productFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCT_CARD_FIELDS"]
                                                    })
                                                ])
                                            ];
                                        case 1:
                                            _ref = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"].apply(void 0, [
                                                _state.sent(),
                                                2
                                            ]), bagsResponse = _ref[0], dressesResponse = _ref[1];
                                            setTrendingBagsProducts((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$productMapper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapProductDtosToModels"])(bagsResponse.items));
                                            setTrendingDressProducts((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$productMapper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapProductDtosToModels"])(dressesResponse.items));
                                            return [
                                                3,
                                                3
                                            ];
                                        case 2:
                                            error = _state.sent();
                                            console.error('Error fetching products:', error);
                                            return [
                                                3,
                                                3
                                            ];
                                        case 3:
                                            return [
                                                2
                                            ];
                                    }
                                }
                            }["LandingScreen.useEffect.loadProducts"]);
                        }
                    }["LandingScreen.useEffect.loadProducts"])();
                }
            }["LandingScreen.useEffect.loadProducts"];
            loadProducts();
        }
    }["LandingScreen.useEffect"], [
        initialTrendingBagsProducts,
        initialTrendingDressProducts
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$screen$2f$landing$2f$LandingScreen$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingScreenContainer"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeaderComponent, {
                primaryColor: primaryColor,
                secondaryColor: secondaryColor
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/LandingScreen.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$heroSlide$2f$HeroSlide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/LandingScreen.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$screen$2f$landing$2f$WhyJasmineCrafted$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/LandingScreen.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "bestsellers",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryHero$2f$CategoryHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    categoryTagline: "Carry Elegance",
                    categoryDescription: "Discover our curated collection of premium bags and accessories that blend style with functionality.",
                    featuredProducts: trendingBagsProducts.slice(0, 4),
                    mainImage: "/assets/bag2.jpg",
                    mainImageAlt: "Premium bag collection",
                    categoryLabel: "Featured Collection",
                    ctaText: "Shop Bags",
                    onCtaClick: function() {
                        return router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withLocale"])(locale, '/products'));
                    }
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/LandingScreen.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/LandingScreen.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "deals",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$productsTrending$2f$ProductsTrending$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    primaryColor: primaryColor,
                    secondaryColor: secondaryColor,
                    productType: "in Bags",
                    data: trendingBagsProducts
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/LandingScreen.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/LandingScreen.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$templateSection$2f$TemplateSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Handmade",
                description: "Every stitch tells a story, crafted by hand with care and patience."
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/LandingScreen.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "new",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$productsTrending$2f$ProductsTrending$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    primaryColor: primaryColor,
                    secondaryColor: secondaryColor,
                    productType: "in Dresses and Matching Sets",
                    data: trendingDressProducts
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/LandingScreen.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/LandingScreen.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$footer$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/LandingScreen.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/LandingScreen.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_s(LandingScreen, "Ghn3NN6t0VqIn0qcw+CpW51FJqU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$hooks$2f$useThemeColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"]
    ];
});
_c = LandingScreen;
var _c;
__turbopack_context__.k.register(_c, "LandingScreen");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Dev_jasmine_frontend_src_346fbabc._.js.map