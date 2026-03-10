module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

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
"[project]/Desktop/Dev/jasmine/frontend/src/service/categoriesService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "listCategories",
    ()=>listCategories,
    "listCategoriesWithSubcategories",
    ()=>listCategoriesWithSubcategories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$httpClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/service/httpClient.ts [app-ssr] (ecmascript)");
;
const listCategories = (options = {})=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$httpClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["httpClient"].get('categories', options);
const listCategoriesWithSubcategories = (options = {})=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$httpClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["httpClient"].get('categories/all/', options);
}),
"[project]/Desktop/Dev/jasmine/frontend/src/service/categoryService.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$categoriesService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/service/categoriesService.ts [app-ssr] (ecmascript)");
;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/model/categoryModel.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mapCategoryDtoToNav",
    ()=>mapCategoryDtoToNav
]);
const mapCategoryDtoToNav = (category)=>({
        id: category.id,
        name: category.name,
        url: category.slug,
        subcategories: category.subcategories?.map((subcategory)=>({
                id: subcategory.id,
                name: subcategory.name,
                url: subcategory.slug,
                parent_id: subcategory.category_id
            })) || []
    });
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/hooks/useCategories.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCategories",
    ()=>useCategories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$categoryService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/service/categoryService.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$categoriesService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/service/categoriesService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$model$2f$categoryModel$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/model/categoryModel.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const useCategories = ()=>{
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let isMounted = true;
        const loadCategories = async ()=>{
            try {
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$categoriesService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listCategoriesWithSubcategories"])();
                if (!isMounted) return;
                setCategories(data.map(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$model$2f$categoryModel$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapCategoryDtoToNav"]));
            } catch  {
                if (!isMounted) return;
                setError('Failed to load categories');
            } finally{
                if (isMounted) setLoading(false);
            }
        };
        loadCategories();
        return ()=>{
            isMounted = false;
        };
    }, []);
    return {
        categories,
        loading,
        error
    };
};
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/HeaderModel.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHeaderModel",
    ()=>useHeaderModel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$hooks$2f$useCategories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/hooks/useCategories.ts [app-ssr] (ecmascript)");
'use client';
;
const useHeaderModel = ()=>{
    const { categories, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$hooks$2f$useCategories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCategories"])();
    return {
        categories,
        loading,
        error
    };
};
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const fadeIn = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyframes"]`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const slideUp = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyframes"]`
  from {
    transform: translateY(30px) scale(0.95);
    opacity: 0;
  }
  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
`;
const Overlay = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "RegisterPopup.styles__Overlay",
    componentId: "sc-890305ec-0"
})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  animation: ${fadeIn} 0.2s ease-out;
  padding: 1rem;
  overflow: auto;
`;
const Modal = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "RegisterPopup.styles__Modal",
    componentId: "sc-890305ec-1"
})`
  background: white;
  border-radius: 12px;
  width: 100%;
  max-width: 440px;
  padding: 2.5rem;
  position: relative;
  box-shadow:
    0 24px 64px rgba(0, 0, 0, 0.2),
    0 8px 16px rgba(0, 0, 0, 0.1);
  animation: ${slideUp} 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  font-family: 'Questrial', sans-serif;
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid rgba(0, 0, 0, 0.04);

  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
    max-width: 100%;
    border-radius: 10px;
  }
`;
const CloseButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "RegisterPopup.styles__CloseButton",
    componentId: "sc-890305ec-2"
})`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: #f5f5f5;
    color: #333;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
const Title = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h2.withConfig({
    displayName: "RegisterPopup.styles__Title",
    componentId: "sc-890305ec-3"
})`
  font-size: 2rem;
  font-weight: 600;
  margin: 0 0 2rem;
  color: #1a1a1a;
  text-align: center;
  font-family: 'Questrial', sans-serif;
`;
const Form = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].form.withConfig({
    displayName: "RegisterPopup.styles__Form",
    componentId: "sc-890305ec-4"
})`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const InputGroup = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "RegisterPopup.styles__InputGroup",
    componentId: "sc-890305ec-5"
})`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Label = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].label.withConfig({
    displayName: "RegisterPopup.styles__Label",
    componentId: "sc-890305ec-6"
})`
  font-size: 0.9rem;
  font-weight: 500;
  color: #333;
`;
const Input = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].input.withConfig({
    displayName: "RegisterPopup.styles__Input",
    componentId: "sc-890305ec-7"
})`
  padding: 0.875rem 1rem;
  border: 1.5px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  font-family: 'Questrial', sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  background: #fafafa;

  &:focus {
    border-color: #001f3f;
    box-shadow: 0 0 0 4px rgba(0, 31, 63, 0.08);
    background: white;
    transform: translateY(-1px);
  }

  &::placeholder {
    color: #999;
  }
`;
const ErrorMessage = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "RegisterPopup.styles__ErrorMessage",
    componentId: "sc-890305ec-8"
})`
  color: #e74c3c;
  font-size: 0.875rem;
  padding: 0.75rem;
  background: #fee;
  border-radius: 8px;
  border: 1px solid #fcc;
`;
const SubmitButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "RegisterPopup.styles__SubmitButton",
    componentId: "sc-890305ec-9"
})`
  padding: 1rem 1.5rem;
  background: #001f3f;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  font-family: 'Questrial', sans-serif;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: 0.5rem;
  letter-spacing: 0.3px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover:not(:disabled) {
    background: #003366;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 31, 63, 0.3);
  }

  &:hover:not(:disabled)::before {
    left: 100%;
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;
const Divider = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "RegisterPopup.styles__Divider",
    componentId: "sc-890305ec-10"
})`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 2rem 0;
  color: #999;
  font-size: 0.875rem;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #e0e0e0;
  }

  span {
    padding: 0 1rem;
  }
`;
const SocialButtons = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "RegisterPopup.styles__SocialButtons",
    componentId: "sc-890305ec-11"
})`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
const SocialButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "RegisterPopup.styles__SocialButton",
    componentId: "sc-890305ec-12"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.875rem 1.5rem;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  background: white;
  color: #333;
  font-size: 0.95rem;
  font-weight: 500;
  font-family: 'Questrial', sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #d4af37;
    background: #fafafa;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
const SwitchText = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "RegisterPopup.styles__SwitchText",
    componentId: "sc-890305ec-13"
})`
  text-align: center;
  margin: 2rem 0 0;
  color: #666;
  font-size: 0.9rem;
`;
const SwitchLink = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].a.withConfig({
    displayName: "RegisterPopup.styles__SwitchLink",
    componentId: "sc-890305ec-14"
})`
  color: #1a1a1a;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: #d4af37;
    text-decoration: underline;
  }
`;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/context/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.styles.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const RegisterPopup = ({ onClose, onOpenLogin })=>{
    const { register: authRegister } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError('');
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }
        setIsLoading(true);
        try {
            await authRegister({
                email: formData.email,
                password: formData.password,
                first_name: formData.firstName || null,
                last_name: formData.lastName || null,
                phone: formData.phone || null
            });
            setError('');
            onClose();
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Failed to create account. Please try again.';
            setError(message);
        } finally{
            setIsLoading(false);
        }
    };
    const handleOverlayClick = (e)=>{
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        onClick: handleOverlayClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Modal"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CloseButton"], {
                    onClick: onClose,
                    "aria-label": "Close",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "18",
                                y1: "6",
                                x2: "6",
                                y2: "18"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "6",
                                y1: "6",
                                x2: "18",
                                y2: "18"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
                    children: "Create Account"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Form"], {
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "firstName",
                                    children: "First Name"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
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
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "lastName",
                                    children: "Last Name"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
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
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "email",
                                    children: "Email *"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
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
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "phone",
                                    children: "Phone"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
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
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "password",
                                    children: "Password *"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
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
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "confirmPassword",
                                    children: "Confirm Password *"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
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
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorMessage"], {
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                            lineNumber: 189,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubmitButton"], {
                            type: "submit",
                            disabled: isLoading,
                            children: isLoading ? 'Creating account...' : 'Sign Up'
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Divider"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "or continue with"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                    lineNumber: 196,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SocialButtons"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SocialButton"], {
                        type: "button",
                        variant: "google",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 24 24",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fill: "currentColor",
                                        d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                                        lineNumber: 203,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fill: "currentColor",
                                        d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                                        lineNumber: 207,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fill: "currentColor",
                                        d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fill: "currentColor",
                                        d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                                        lineNumber: 215,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                                lineNumber: 202,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Google"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                        lineNumber: 201,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                    lineNumber: 200,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwitchText"], {
                    children: [
                        "Already have an account?",
                        ' ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwitchLink"], {
                            href: "#",
                            onClick: (e)=>{
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
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
                    lineNumber: 224,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
            lineNumber: 96,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = RegisterPopup;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const fadeIn = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyframes"]`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const slideUp = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyframes"]`
  from {
    transform: translateY(30px) scale(0.95);
    opacity: 0;
  }
  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
`;
const Overlay = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LoginPopup.styles__Overlay",
    componentId: "sc-83ba8e96-0"
})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  animation: ${fadeIn} 0.2s ease-out;
  padding: 1rem;
  overflow: auto;
`;
const Modal = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LoginPopup.styles__Modal",
    componentId: "sc-83ba8e96-1"
})`
  background: white;
  border-radius: 12px;
  width: 100%;
  max-width: 440px;
  padding: 2.5rem;
  position: relative;
  box-shadow:
    0 24px 64px rgba(0, 0, 0, 0.2),
    0 8px 16px rgba(0, 0, 0, 0.1);
  animation: ${slideUp} 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  font-family: 'Questrial', sans-serif;
  border: 1px solid rgba(0, 0, 0, 0.04);

  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
    max-width: 100%;
    border-radius: 10px;
  }
`;
const CloseButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "LoginPopup.styles__CloseButton",
    componentId: "sc-83ba8e96-2"
})`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: #f5f5f5;
    color: #333;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
const Title = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h2.withConfig({
    displayName: "LoginPopup.styles__Title",
    componentId: "sc-83ba8e96-3"
})`
  font-size: 2rem;
  font-weight: 600;
  margin: 0 0 2rem;
  color: #1a1a1a;
  text-align: center;
  font-family: 'Questrial', sans-serif;
`;
const Form = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].form.withConfig({
    displayName: "LoginPopup.styles__Form",
    componentId: "sc-83ba8e96-4"
})`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const InputGroup = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LoginPopup.styles__InputGroup",
    componentId: "sc-83ba8e96-5"
})`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Label = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].label.withConfig({
    displayName: "LoginPopup.styles__Label",
    componentId: "sc-83ba8e96-6"
})`
  font-size: 0.9rem;
  font-weight: 500;
  color: #333;
`;
const Input = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].input.withConfig({
    displayName: "LoginPopup.styles__Input",
    componentId: "sc-83ba8e96-7"
})`
  padding: 0.875rem 1rem;
  border: 1.5px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  font-family: 'Questrial', sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  background: #fafafa;

  &:focus {
    border-color: #001f3f;
    box-shadow: 0 0 0 4px rgba(0, 31, 63, 0.08);
    background: white;
    transform: translateY(-1px);
  }

  &::placeholder {
    color: #999;
  }
`;
const ErrorMessage = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LoginPopup.styles__ErrorMessage",
    componentId: "sc-83ba8e96-8"
})`
  color: #e74c3c;
  font-size: 0.875rem;
  padding: 0.75rem;
  background: #fee;
  border-radius: 8px;
  border: 1px solid #fcc;
`;
const SubmitButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "LoginPopup.styles__SubmitButton",
    componentId: "sc-83ba8e96-9"
})`
  padding: 1rem 1.5rem;
  background: #001f3f;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  font-family: 'Questrial', sans-serif;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: 0.5rem;
  letter-spacing: 0.3px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover:not(:disabled) {
    background: #003366;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 31, 63, 0.3);
  }

  &:hover:not(:disabled)::before {
    left: 100%;
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;
const Divider = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LoginPopup.styles__Divider",
    componentId: "sc-83ba8e96-10"
})`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 2rem 0;
  color: #999;
  font-size: 0.875rem;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #e0e0e0;
  }

  span {
    padding: 0 1rem;
  }
`;
const SocialButtons = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LoginPopup.styles__SocialButtons",
    componentId: "sc-83ba8e96-11"
})`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
const SocialButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "LoginPopup.styles__SocialButton",
    componentId: "sc-83ba8e96-12"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.875rem 1.5rem;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  background: white;
  color: #333;
  font-size: 0.95rem;
  font-weight: 500;
  font-family: 'Questrial', sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #d4af37;
    background: #fafafa;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
const SwitchText = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "LoginPopup.styles__SwitchText",
    componentId: "sc-83ba8e96-13"
})`
  text-align: center;
  margin: 2rem 0 0;
  color: #666;
  font-size: 0.9rem;
`;
const SwitchLink = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].a.withConfig({
    displayName: "LoginPopup.styles__SwitchLink",
    componentId: "sc-83ba8e96-14"
})`
  color: #1a1a1a;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: #d4af37;
    text-decoration: underline;
  }
`;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/context/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.styles.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const LoginPopup = ({ onClose, onOpenRegister })=>{
    const { login: authLogin } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError('');
        setIsLoading(true);
        try {
            await authLogin({
                email,
                password
            });
            setError('');
            onClose();
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Failed to sign in. Please check your credentials.';
            setError(message);
        } finally{
            setIsLoading(false);
        }
    };
    const handleOverlayClick = (e)=>{
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        onClick: handleOverlayClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Modal"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CloseButton"], {
                    onClick: onClose,
                    "aria-label": "Close",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "18",
                                y1: "6",
                                x2: "6",
                                y2: "18"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "6",
                                y1: "6",
                                x2: "18",
                                y2: "18"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
                    children: "Welcome Back"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Form"], {
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "email",
                                    children: "Email"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "email",
                                    type: "email",
                                    value: email,
                                    onChange: (e)=>setEmail(e.target.value),
                                    placeholder: "Enter your email",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "password",
                                    children: "Password"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "password",
                                    type: "password",
                                    value: password,
                                    onChange: (e)=>setPassword(e.target.value),
                                    placeholder: "Enter your password",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorMessage"], {
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                            lineNumber: 105,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubmitButton"], {
                            type: "submit",
                            disabled: isLoading,
                            children: isLoading ? 'Signing in...' : 'Sign In'
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Divider"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "or continue with"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SocialButtons"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SocialButton"], {
                        type: "button",
                        variant: "google",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 24 24",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fill: "currentColor",
                                        d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fill: "currentColor",
                                        d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fill: "currentColor",
                                        d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fill: "currentColor",
                                        d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Google"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwitchText"], {
                    children: [
                        "Don't have an account?",
                        ' ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwitchLink"], {
                            href: "#",
                            onClick: (e)=>{
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
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = LoginPopup;
}),
"[externals]/process [external] (process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/utils/imageUtils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getImageUrl",
    ()=>getImageUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$httpClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/service/httpClient.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$process__$5b$external$5d$__$28$process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/process [external] (process, cjs)");
;
;
const getMediaBaseUrl = ()=>{
    const envBase = __TURBOPACK__imported__module__$5b$externals$5d2f$process__$5b$external$5d$__$28$process$2c$__cjs$29$__["default"].env.NEXT_PUBLIC_MEDIA_BASE_URL || __TURBOPACK__imported__module__$5b$externals$5d2f$process__$5b$external$5d$__$28$process$2c$__cjs$29$__["default"].env.NEXT_PUBLIC_ASSET_BASE_URL || '';
    if (envBase) return envBase.replace(/\/+$/, '');
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$httpClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiBaseUrl"])().replace(/\/api\/?$/, '');
};
const getImageUrl = (imageUrl)=>{
    if (!imageUrl) {
        return '';
    }
    if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
        return imageUrl;
    }
    if (imageUrl.startsWith('assets/') || imageUrl.startsWith('/assets/')) {
        return imageUrl.startsWith('/') ? imageUrl : `/${imageUrl}`;
    }
    const baseUrl = getMediaBaseUrl();
    const normalizedUrl = imageUrl.startsWith('/') ? imageUrl : `/${imageUrl}`;
    return `${baseUrl}${normalizedUrl}`;
};
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const modalSlideIn = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyframes"]`
  from {
    opacity: 0;
    transform: translateY(-12px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;
const modalSlideOut = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyframes"]`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-12px) scale(0.96);
  }
`;
const fadeIn = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyframes"]`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const CartModalContainer = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CartModal.styles__CartModalContainer",
    componentId: "sc-f30acc63-0"
})`
  position: absolute;
  top: calc(100% + 0.75rem);
  right: 0;
  background: white;
  border-radius: 10px;
  width: 420px;
  max-width: calc(100vw - 2rem);
  max-height: 500px;
  display: flex;
  flex-direction: column;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.08),
    0 2px 8px rgba(0, 0, 0, 0.04);
  z-index: 10001;
  animation: ${({ $isClosing })=>$isClosing ? modalSlideOut : modalSlideIn}
    0.3s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
  will-change: transform, opacity;

  @media (max-width: 768px) {
    right: 1rem;
    width: calc(100vw - 2rem);
    max-width: 420px;
    max-height: 70vh;
    border-radius: 8px;
  }
`;
const CartModalHeader = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CartModal.styles__CartModalHeader",
    componentId: "sc-f30acc63-1"
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  animation: ${fadeIn} 0.3s ease-out 0.1s both;
`;
const CartModalTitle = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h2.withConfig({
    displayName: "CartModal.styles__CartModalTitle",
    componentId: "sc-f30acc63-2"
})`
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  color: #1a1a1a;
  font-family: 'Questrial', sans-serif;
  letter-spacing: -0.1px;
`;
const CloseButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "CartModal.styles__CloseButton",
    componentId: "sc-f30acc63-3"
})`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &:hover {
    background: rgba(0, 0, 0, 0.06);
    color: #1a1a1a;
    transform: rotate(90deg);
  }

  &:active {
    transform: rotate(90deg) scale(0.95);
  }

  svg {
    display: block;
    transition: transform 0.2s ease;
  }
`;
const CartItemsList = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CartModal.styles__CartItemsList",
    componentId: "sc-f30acc63-4"
})`
  flex: 1;
  overflow-y: auto;
  padding: 0.25rem 0;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.15) transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`;
const CartItem = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CartModal.styles__CartItem",
    componentId: "sc-f30acc63-5"
})`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding: 0.875rem 1.25rem;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    background: rgba(212, 175, 55, 0.02);
  }
`;
const CartItemImage = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CartModal.styles__CartItemImage",
    componentId: "sc-f30acc63-6"
})`
  width: 56px;
  height: 56px;
  border-radius: 8px;
  background: #f5f5f5;
  flex-shrink: 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease;
  position: relative;
  overflow: hidden;

  img {
    object-fit: cover;
  }

  ${CartItem}:hover & {
    transform: scale(1.03);
  }
`;
const CartItemDetails = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CartModal.styles__CartItemDetails",
    componentId: "sc-f30acc63-7"
})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;
const CartItemName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CartModal.styles__CartItemName",
    componentId: "sc-f30acc63-8"
})`
  font-size: 0.9rem;
  color: #1a1a1a;
  font-weight: 400;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-family: 'Questrial', sans-serif;
`;
const CartItemPrice = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CartModal.styles__CartItemPrice",
    componentId: "sc-f30acc63-9"
})`
  font-size: 0.875rem;
  color: #666;
  font-weight: 500;
  font-family: 'Questrial', sans-serif;
`;
const CartItemBagId = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CartModal.styles__CartItemBagId",
    componentId: "sc-f30acc63-10"
})`
  font-size: 0.75rem;
  color: #999;
  font-weight: 400;
  font-family: 'Questrial', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;
const CartItemQuantity = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CartModal.styles__CartItemQuantity",
    componentId: "sc-f30acc63-11"
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #666;
  font-family: 'Questrial', sans-serif;

  span:last-child {
    font-weight: 500;
    color: #1a1a1a;
  }
`;
const QuantityControls = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CartModal.styles__QuantityControls",
    componentId: "sc-f30acc63-12"
})`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 0.25rem;
`;
const QuantityButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "CartModal.styles__QuantityButton",
    componentId: "sc-f30acc63-13"
})`
  background: none;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 1.2rem;
  font-weight: 400;
  border-radius: 4px;
  transition: all 0.2s ease;
  line-height: 1;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    color: #1a1a1a;
  }

  &:active {
    transform: scale(0.95);
  }
`;
const QuantityInput = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].input.withConfig({
    displayName: "CartModal.styles__QuantityInput",
    componentId: "sc-f30acc63-14"
})`
  width: 40px;
  text-align: center;
  border: none;
  background: none;
  font-size: 0.875rem;
  font-weight: 500;
  color: #1a1a1a;
  font-family: 'Questrial', sans-serif;
  padding: 0.25rem;
  outline: none;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  -moz-appearance: textfield;
`;
const CartItemRemove = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "CartModal.styles__CartItemRemove",
    componentId: "sc-f30acc63-15"
})`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.2s ease;
  flex-shrink: 0;
  opacity: 0.6;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    color: #cc0c5c;
    opacity: 1;
  }

  svg {
    display: block;
  }
`;
const CartFooter = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CartModal.styles__CartFooter",
    componentId: "sc-f30acc63-16"
})`
  padding: 1.25rem 1.25rem;
  border-top: 1px solid rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
`;
const CartTotal = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CartModal.styles__CartTotal",
    componentId: "sc-f30acc63-17"
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  color: #1a1a1a;
  font-family: 'Questrial', sans-serif;

  span:last-child {
    font-weight: 600;
  }
`;
const CheckoutButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "CartModal.styles__CheckoutButton",
    componentId: "sc-f30acc63-18"
})`
  width: 100%;
  padding: 0.875rem 1.25rem;
  background: #1a1a1a;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: 'Questrial', sans-serif;
  letter-spacing: 0.2px;

  &:hover {
    background: #2a2a2a;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
`;
const EmptyCartMessage = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CartModal.styles__EmptyCartMessage",
    componentId: "sc-f30acc63-19"
})`
  padding: 3rem 1.5rem;
  text-align: center;
  color: #999;
  font-size: 0.95rem;
  font-family: 'Questrial', sans-serif;
`;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/lib/locale.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/Dev/jasmine/frontend/src/utils/locale.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/lib/locale.ts [app-ssr] (ecmascript)");
;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/utils/slug.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildProductSlug",
    ()=>buildProductSlug,
    "getProductIdFromSlug",
    ()=>getProductIdFromSlug,
    "slugify",
    ()=>slugify
]);
const slugify = (value)=>{
    const cleaned = value.toLowerCase().trim().replace(/['"]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    return cleaned;
};
const buildProductSlug = (name, id)=>{
    const base = slugify(name);
    const prefix = base || 'product';
    return `${prefix}-${id}`;
};
const getProductIdFromSlug = (slug)=>{
    if (!slug) return null;
    const match = slug.match(/-(\d+)$/);
    if (!match) return null;
    const parsed = Number(match[1]);
    return Number.isFinite(parsed) ? parsed : null;
};
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$imageUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/imageUtils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.styles.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/locale.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/lib/locale.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$slug$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/slug.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const CartModal = ({ isOpen, onClose, isScrolled })=>{
    const [cartItems, setCartItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isClosing, setIsClosing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeLocale"])(params?.locale);
    const modalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const migrateCartData = (data)=>{
        if (!Array.isArray(data)) return [];
        const isCartItem = (item)=>!!item && typeof item === 'object' && 'bagId' in item && 'product' in item;
        if (data.length > 0 && isCartItem(data[0])) {
            return data;
        }
        return data.map((product, index)=>({
                bagId: `bag-${Date.now()}-${index}-${product.id}`,
                product: product,
                quantity: 1
            }));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            setIsClosing(false);
        }
    }, [
        isOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const updateCart = ()=>{
            const stored = localStorage.getItem('cartProducts');
            if (stored) {
                try {
                    const parsed = JSON.parse(stored);
                    const migrated = migrateCartData(parsed);
                    setCartItems(migrated);
                    if (migrated.length > 0 && !parsed[0]?.bagId) {
                        localStorage.setItem('cartProducts', JSON.stringify(migrated));
                    }
                } catch  {
                    setCartItems([]);
                }
            } else {
                setCartItems([]);
            }
        };
        updateCart();
        window.addEventListener('storage', updateCart);
        window.addEventListener('cartUpdated', updateCart);
        return ()=>{
            window.removeEventListener('storage', updateCart);
            window.removeEventListener('cartUpdated', updateCart);
        };
    }, []);
    const handleClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsClosing(true);
        setTimeout(()=>{
            setIsClosing(false);
            onClose();
        }, 300);
    }, [
        onClose
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) return;
        const handleClickOutside = (e)=>{
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                handleClose();
            }
        };
        window.addEventListener('mousedown', handleClickOutside);
        return ()=>window.removeEventListener('mousedown', handleClickOutside);
    }, [
        isOpen,
        handleClose
    ]);
    const handleRemoveProduct = (bagId, e)=>{
        e.stopPropagation();
        const updated = cartItems.filter((item)=>item.bagId !== bagId);
        setCartItems(updated);
        localStorage.setItem('cartProducts', JSON.stringify(updated));
        window.dispatchEvent(new Event('cartUpdated'));
    };
    const handleQuantityChange = (bagId, newQuantity, e)=>{
        if (e) e.stopPropagation();
        if (newQuantity < 1) return;
        const updated = cartItems.map((item)=>item.bagId === bagId ? {
                ...item,
                quantity: newQuantity
            } : item);
        setCartItems(updated);
        localStorage.setItem('cartProducts', JSON.stringify(updated));
        window.dispatchEvent(new Event('cartUpdated'));
    };
    const handleProductClick = (product)=>{
        router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withLocale"])(locale, `/product/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$slug$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildProductSlug"])(product.name, product.id)}`));
        onClose();
    };
    const handleCheckout = ()=>{
        handleClose();
        setTimeout(()=>router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withLocale"])(locale, '/cart')), 300);
    };
    const calculateTotal = ()=>{
        return cartItems.reduce((sum, item)=>{
            const price = item.product.price_new || item.product.price;
            const numericPrice = parseFloat(price.replace(/[^\d.-]/g, '')) || 0;
            return sum + numericPrice * item.quantity;
        }, 0);
    };
    const getTotalItems = ()=>{
        return cartItems.reduce((sum, item)=>sum + item.quantity, 0);
    };
    const formatPrice = (price)=>{
        return price;
    };
    if (!isOpen && !isClosing) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartModalContainer"], {
        ref: modalRef,
        $isScrolled: isScrolled,
        $isClosing: isClosing,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartModalHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartModalTitle"], {
                        children: [
                            "Cart (",
                            getTotalItems(),
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CloseButton"], {
                        onClick: handleClose,
                        "aria-label": "Close cart",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "18",
                                    y1: "6",
                                    x2: "6",
                                    y2: "18"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "6",
                                    y1: "6",
                                    x2: "18",
                                    y2: "18"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            cartItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyCartMessage"], {
                children: "Your cart is empty"
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                lineNumber: 209,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartItemsList"], {
                        children: cartItems.map((item)=>{
                            const product = item.product;
                            const itemPrice = parseFloat((product.price_new || product.price).replace(/[^\d.-]/g, '')) || 0;
                            const itemTotal = itemPrice * item.quantity;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartItem"], {
                                onClick: ()=>handleProductClick(product),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartItemImage"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$imageUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getImageUrl"])(product.variant_image) || '/assets/logo.png',
                                            alt: product.name,
                                            fill: true,
                                            sizes: "56px"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                            lineNumber: 227,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                        lineNumber: 226,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartItemDetails"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartItemBagId"], {
                                                children: [
                                                    "ID: ",
                                                    item.bagId.split('-').slice(-2).join('-')
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                                lineNumber: 237,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartItemName"], {
                                                children: product.name
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                                lineNumber: 240,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartItemPrice"], {
                                                children: formatPrice(product.price_new || product.price)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                                lineNumber: 241,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartItemQuantity"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QuantityControls"], {
                                                        onClick: (e)=>e.stopPropagation(),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QuantityButton"], {
                                                                onClick: (e)=>handleQuantityChange(item.bagId, item.quantity - 1, e),
                                                                "aria-label": "Decrease quantity",
                                                                children: "−"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                                                lineNumber: 248,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QuantityInput"], {
                                                                type: "number",
                                                                min: "1",
                                                                value: item.quantity,
                                                                onChange: (e)=>{
                                                                    const val = parseInt(e.target.value) || 1;
                                                                    handleQuantityChange(item.bagId, val);
                                                                },
                                                                onClick: (e)=>e.stopPropagation()
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                                                lineNumber: 260,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QuantityButton"], {
                                                                onClick: (e)=>handleQuantityChange(item.bagId, item.quantity + 1, e),
                                                                "aria-label": "Increase quantity",
                                                                children: "+"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                                                lineNumber: 272,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Total: ",
                                                            formatPrice(`${itemTotal.toLocaleString()} ֏`)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                                lineNumber: 244,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                        lineNumber: 236,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartItemRemove"], {
                                        onClick: (e)=>handleRemoveProduct(item.bagId, e),
                                        "aria-label": "Remove item",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "18",
                                                    y1: "6",
                                                    x2: "6",
                                                    y2: "18"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "6",
                                                    y1: "6",
                                                    x2: "18",
                                                    y2: "18"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                            lineNumber: 294,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                        lineNumber: 290,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, item.bagId, true, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                lineNumber: 222,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartFooter"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartTotal"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Total:"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                        lineNumber: 313,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: formatPrice(`${calculateTotal().toLocaleString()} ֏`)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                        lineNumber: 314,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                lineNumber: 312,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckoutButton"], {
                                onClick: handleCheckout,
                                children: "Checkout"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                                lineNumber: 318,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
                        lineNumber: 311,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx",
        lineNumber: 186,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CartModal;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const modalSlideIn = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyframes"]`
  from {
    opacity: 0;
    transform: translateY(-12px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;
const modalSlideOut = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyframes"]`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-12px) scale(0.96);
  }
`;
const fadeIn = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyframes"]`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const LikedModalContainer = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LikedModal.styles__LikedModalContainer",
    componentId: "sc-228d9fba-0"
})`
  position: absolute;
  top: calc(100% + 0.75rem);
  right: 0;
  background: white;
  border-radius: 10px;
  width: 420px;
  max-width: calc(100vw - 2rem);
  max-height: 500px;
  display: flex;
  flex-direction: column;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.08),
    0 2px 8px rgba(0, 0, 0, 0.04);
  z-index: 10001;
  animation: ${({ $isClosing })=>$isClosing ? modalSlideOut : modalSlideIn}
    0.3s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
  will-change: transform, opacity;

  @media (max-width: 768px) {
    right: 1rem;
    width: calc(100vw - 2rem);
    max-width: 420px;
    max-height: 70vh;
    border-radius: 8px;
  }
`;
const LikedModalHeader = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LikedModal.styles__LikedModalHeader",
    componentId: "sc-228d9fba-1"
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  animation: ${fadeIn} 0.3s ease-out 0.1s both;
`;
const LikedModalTitle = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h2.withConfig({
    displayName: "LikedModal.styles__LikedModalTitle",
    componentId: "sc-228d9fba-2"
})`
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  color: #1a1a1a;
  font-family: 'Questrial', sans-serif;
  letter-spacing: -0.1px;
`;
const CloseButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "LikedModal.styles__CloseButton",
    componentId: "sc-228d9fba-3"
})`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &:hover {
    background: rgba(0, 0, 0, 0.06);
    color: #1a1a1a;
    transform: rotate(90deg);
  }

  &:active {
    transform: rotate(90deg) scale(0.95);
  }

  svg {
    display: block;
    transition: transform 0.2s ease;
  }
`;
const LikedItemsList = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LikedModal.styles__LikedItemsList",
    componentId: "sc-228d9fba-4"
})`
  flex: 1;
  overflow-y: auto;
  padding: 0.25rem 0;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.15) transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`;
const LikedItem = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LikedModal.styles__LikedItem",
    componentId: "sc-228d9fba-5"
})`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding: 0.875rem 1.25rem;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    background: rgba(204, 12, 92, 0.02);
  }
`;
const LikedItemImage = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LikedModal.styles__LikedItemImage",
    componentId: "sc-228d9fba-6"
})`
  width: 56px;
  height: 56px;
  border-radius: 8px;
  background: #f5f5f5;
  flex-shrink: 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease;
  position: relative;
  overflow: hidden;

  img {
    object-fit: cover;
  }

  ${LikedItem}:hover & {
    transform: scale(1.03);
  }
`;
const LikedItemDetails = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LikedModal.styles__LikedItemDetails",
    componentId: "sc-228d9fba-7"
})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;
const LikedItemName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LikedModal.styles__LikedItemName",
    componentId: "sc-228d9fba-8"
})`
  font-size: 0.9rem;
  color: #1a1a1a;
  font-weight: 400;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-family: 'Questrial', sans-serif;
`;
const LikedItemPrice = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LikedModal.styles__LikedItemPrice",
    componentId: "sc-228d9fba-9"
})`
  font-size: 0.875rem;
  color: #666;
  font-weight: 500;
  font-family: 'Questrial', sans-serif;
`;
const LikedItemActions = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LikedModal.styles__LikedItemActions",
    componentId: "sc-228d9fba-10"
})`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  margin-left: auto;
`;
const LikedItemCartButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "LikedModal.styles__LikedItemCartButton",
    componentId: "sc-228d9fba-11"
})`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: ${({ $inCart })=>$inCart ? '#cc0c5c' : '#999'};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.2s ease;
  opacity: ${({ $inCart })=>$inCart ? 1 : 0.6};

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    color: ${({ $inCart })=>$inCart ? '#cc0c5c' : '#d4af37'};
    opacity: 1;
  }

  svg {
    display: block;
  }
`;
const LikedItemRemove = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "LikedModal.styles__LikedItemRemove",
    componentId: "sc-228d9fba-12"
})`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.2s ease;
  opacity: 0.6;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    color: #cc0c5c;
    opacity: 1;
  }

  svg {
    display: block;
  }
`;
const EmptyLikedMessage = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LikedModal.styles__EmptyLikedMessage",
    componentId: "sc-228d9fba-13"
})`
  padding: 3rem 1.5rem;
  text-align: center;
  color: #999;
  font-size: 0.95rem;
  font-family: 'Questrial', sans-serif;
`;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$imageUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/imageUtils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$likedModal$2f$LikedModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.styles.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/locale.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/lib/locale.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$slug$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/slug.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const LikedModal = ({ isOpen, onClose, isScrolled })=>{
    const [likedProducts, setLikedProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cartItems, setCartItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isClosing, setIsClosing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeLocale"])(params?.locale);
    const modalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            setIsClosing(false);
        }
    }, [
        isOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const updateLiked = ()=>{
            const stored = localStorage.getItem('likedProducts');
            if (stored) {
                try {
                    const parsed = JSON.parse(stored);
                    setLikedProducts(Array.isArray(parsed) ? parsed : []);
                } catch  {
                    setLikedProducts([]);
                }
            } else {
                setLikedProducts([]);
            }
        };
        const updateCart = ()=>{
            const stored = localStorage.getItem('cartProducts');
            if (stored) {
                try {
                    const parsed = JSON.parse(stored);
                    if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].bagId) {
                        setCartItems(parsed);
                    } else {
                        setCartItems(parsed.map((p, index)=>({
                                bagId: `bag-${Date.now()}-${index}-${p.id}`,
                                product: p,
                                quantity: 1
                            })));
                    }
                } catch  {
                    setCartItems([]);
                }
            } else {
                setCartItems([]);
            }
        };
        updateLiked();
        updateCart();
        window.addEventListener('storage', updateLiked);
        window.addEventListener('likedUpdated', updateLiked);
        window.addEventListener('storage', updateCart);
        window.addEventListener('cartUpdated', updateCart);
        return ()=>{
            window.removeEventListener('storage', updateLiked);
            window.removeEventListener('likedUpdated', updateLiked);
            window.removeEventListener('storage', updateCart);
            window.removeEventListener('cartUpdated', updateCart);
        };
    }, []);
    const handleClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsClosing(true);
        setTimeout(()=>{
            setIsClosing(false);
            onClose();
        }, 300);
    }, [
        onClose
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) return;
        const handleClickOutside = (e)=>{
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                handleClose();
            }
        };
        window.addEventListener('mousedown', handleClickOutside);
        return ()=>window.removeEventListener('mousedown', handleClickOutside);
    }, [
        isOpen,
        handleClose
    ]);
    const isProductInCart = (productId)=>{
        return cartItems.some((item)=>item.product.id === productId);
    };
    const handleCartToggle = (product, e)=>{
        e.stopPropagation();
        const stored = localStorage.getItem('cartProducts');
        let currentCartItems = [];
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].bagId) {
                    currentCartItems = parsed;
                } else {
                    currentCartItems = parsed.map((p, index)=>({
                            bagId: `bag-${Date.now()}-${index}-${p.id}`,
                            product: p,
                            quantity: 1
                        }));
                }
            } catch  {
                currentCartItems = [];
            }
        }
        const existingItem = currentCartItems.find((item)=>item.product.id === product.id);
        if (existingItem) {
            const updated = currentCartItems.filter((item)=>item.bagId !== existingItem.bagId);
            localStorage.setItem('cartProducts', JSON.stringify(updated));
        } else {
            const newItem = {
                bagId: `bag-${Date.now()}-${product.id}`,
                product,
                quantity: 1
            };
            currentCartItems.push(newItem);
            localStorage.setItem('cartProducts', JSON.stringify(currentCartItems));
        }
        window.dispatchEvent(new Event('cartUpdated'));
    };
    const handleRemoveProduct = (productId, e)=>{
        e.stopPropagation();
        const updated = likedProducts.filter((p)=>p.id !== productId);
        setLikedProducts(updated);
        localStorage.setItem('likedProducts', JSON.stringify(updated));
        window.dispatchEvent(new Event('likedUpdated'));
    };
    const handleProductClick = (product)=>{
        handleClose();
        setTimeout(()=>{
            router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withLocale"])(locale, `/product/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$slug$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildProductSlug"])(product.name, product.id)}`));
        }, 300);
    };
    const formatPrice = (price)=>{
        return price;
    };
    if (!isOpen && !isClosing) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$likedModal$2f$LikedModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LikedModalContainer"], {
        ref: modalRef,
        $isScrolled: isScrolled,
        $isClosing: isClosing,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$likedModal$2f$LikedModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LikedModalHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$likedModal$2f$LikedModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LikedModalTitle"], {
                        children: [
                            "Liked (",
                            likedProducts.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$likedModal$2f$LikedModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CloseButton"], {
                        onClick: handleClose,
                        "aria-label": "Close liked",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "18",
                                    y1: "6",
                                    x2: "6",
                                    y2: "18"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "6",
                                    y1: "6",
                                    x2: "18",
                                    y2: "18"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                            lineNumber: 211,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            likedProducts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$likedModal$2f$LikedModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyLikedMessage"], {
                children: "You haven't liked any products yet"
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                lineNumber: 226,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$likedModal$2f$LikedModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LikedItemsList"], {
                children: likedProducts.map((product)=>{
                    const inCart = isProductInCart(product.id);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$likedModal$2f$LikedModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LikedItem"], {
                        onClick: ()=>handleProductClick(product),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$likedModal$2f$LikedModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LikedItemImage"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$imageUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getImageUrl"])(product.variant_image) || '/assets/logo.png',
                                    alt: product.name,
                                    fill: true,
                                    sizes: "56px"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                    lineNumber: 239,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                lineNumber: 238,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$likedModal$2f$LikedModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LikedItemDetails"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$likedModal$2f$LikedModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LikedItemName"], {
                                        children: product.name
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                        lineNumber: 249,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$likedModal$2f$LikedModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LikedItemPrice"], {
                                        children: formatPrice(product.price_new || product.price)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                        lineNumber: 250,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                lineNumber: 248,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$likedModal$2f$LikedModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LikedItemActions"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$likedModal$2f$LikedModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LikedItemCartButton"], {
                                        onClick: (e)=>handleCartToggle(product, e),
                                        "aria-label": inCart ? 'Remove from cart' : 'Add to cart',
                                        $inCart: inCart,
                                        children: inCart ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "18",
                                                    y1: "6",
                                                    x2: "6",
                                                    y2: "18"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                                    lineNumber: 269,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "6",
                                                    y1: "6",
                                                    x2: "18",
                                                    y2: "18"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                            lineNumber: 261,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "3",
                                                    y1: "6",
                                                    x2: "21",
                                                    y2: "6"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M16 10a4 4 0 0 1-8 0"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                            lineNumber: 273,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                        lineNumber: 255,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$likedModal$2f$LikedModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LikedItemRemove"], {
                                        onClick: (e)=>handleRemoveProduct(product.id, e),
                                        "aria-label": "Remove from liked",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "18",
                                                    y1: "6",
                                                    x2: "6",
                                                    y2: "18"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "6",
                                                    y1: "6",
                                                    x2: "18",
                                                    y2: "18"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                            lineNumber: 291,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                        lineNumber: 287,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                                lineNumber: 254,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, product.id, true, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                        lineNumber: 234,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
                lineNumber: 230,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx",
        lineNumber: 203,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = LikedModal;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const slideDown = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyframes"]`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const ProfileCardContainer = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProfileCard.styles__ProfileCardContainer",
    componentId: "sc-a59aa6b4-0"
})`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  min-width: 280px;
  padding: 0;
  z-index: 10001;
  animation: ${slideDown} 0.2s ease-out;
  border: 1px solid rgba(0, 0, 0, 0.08);
  overflow: hidden;
  font-family: 'Questrial', sans-serif;

  @media (max-width: 768px) {
    right: 0;
    left: auto;
    min-width: 260px;
  }
`;
const ProfileHeader = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProfileCard.styles__ProfileHeader",
    componentId: "sc-a59aa6b4-1"
})`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f5f5f5;
  }
`;
const ProfileIcon = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProfileCard.styles__ProfileIcon",
    componentId: "sc-a59aa6b4-2"
})`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #001f3f 0%, #003366 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 600;
  flex-shrink: 0;
  font-family: 'Questrial', sans-serif;
`;
const ProfileInfo = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProfileCard.styles__ProfileInfo",
    componentId: "sc-a59aa6b4-3"
})`
  flex: 1;
  min-width: 0;
`;
const ProfileName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProfileCard.styles__ProfileName",
    componentId: "sc-a59aa6b4-4"
})`
  font-size: 0.95rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'Questrial', sans-serif;
`;
const ProfileEmail = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProfileCard.styles__ProfileEmail",
    componentId: "sc-a59aa6b4-5"
})`
  font-size: 0.85rem;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'Questrial', sans-serif;
`;
const ProfileArrow = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProfileCard.styles__ProfileArrow",
    componentId: "sc-a59aa6b4-6"
})`
  color: #999;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  transition: transform 0.2s ease;

  ${ProfileHeader}:hover & {
    transform: translateX(4px);
    color: #001f3f;
  }
`;
const ProfileMenuDivider = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProfileCard.styles__ProfileMenuDivider",
    componentId: "sc-a59aa6b4-7"
})`
  height: 1px;
  background: #e0e0e0;
  margin: 0.5rem 0;
`;
const ProfileMenuItem = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "ProfileCard.styles__ProfileMenuItem",
    componentId: "sc-a59aa6b4-8"
})`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #1a1a1a;
  font-size: 0.95rem;
  font-weight: 500;
  font-family: 'Questrial', sans-serif;
  border-radius: 0;
  transition: all 0.2s ease;
  text-align: left;

  &:hover {
    background: #f5f5f5;
    color: #001f3f;
  }

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    color: #666;
    transition: color 0.2s ease;
  }

  &:hover svg {
    color: #001f3f;
  }

  span {
    flex: 1;
  }
`;
const LogoutButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "ProfileCard.styles__LogoutButton",
    componentId: "sc-a59aa6b4-9"
})`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #cc0c5c;
  font-size: 0.95rem;
  font-weight: 500;
  font-family: 'Questrial', sans-serif;
  border-radius: 0;
  transition: all 0.2s ease;
  text-align: left;

  &:hover {
    background: #fee;
    color: #cc0c5c;
  }

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    transition: color 0.2s ease;
  }

  &:hover svg {
    color: #cc0c5c;
  }

  span {
    flex: 1;
  }
`;
const NotLoggedInMessage = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProfileCard.styles__NotLoggedInMessage",
    componentId: "sc-a59aa6b4-10"
})`
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin: 0;
  padding: 1rem;
  font-family: 'Questrial', sans-serif;
`;
const LoginSignupButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "ProfileCard.styles__LoginSignupButton",
    componentId: "sc-a59aa6b4-11"
})`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #1a1a1a;
  font-size: 0.95rem;
  font-weight: 500;
  font-family: 'Questrial', sans-serif;
  border-radius: 0;
  transition: all 0.2s ease;
  text-align: left;

  &:hover {
    background: #f5f5f5;
    color: #001f3f;
  }

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    color: #666;
    transition: color 0.2s ease;
  }

  &:hover svg {
    color: #001f3f;
  }

  span {
    flex: 1;
  }
`;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/context/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.styles.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/locale.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/lib/locale.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const ProfileCard = ({ onClose, isScrolled, onOpenLogin, onOpenRegister })=>{
    const { user, logout, isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeLocale"])(params?.locale);
    const handleLoginClick = ()=>{
        onClose();
        onOpenLogin();
    };
    const handleRegisterClick = ()=>{
        onClose();
        onOpenRegister();
    };
    if (!isAuthenticated || !user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProfileCardContainer"], {
            $isScrolled: isScrolled,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotLoggedInMessage"], {
                    children: "You are not logged in"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProfileMenuDivider"], {}, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoginSignupButton"], {
                    onClick: handleLoginClick,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "18",
                            height: "18",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                    points: "10 17 15 12 10 7"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "15",
                                    y1: "12",
                                    x2: "3",
                                    y2: "12"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Login"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoginSignupButton"], {
                    onClick: handleRegisterClick,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "18",
                            height: "18",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "8.5",
                                    cy: "7",
                                    r: "4"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "20",
                                    y1: "8",
                                    x2: "20",
                                    y2: "14"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "23",
                                    y1: "11",
                                    x2: "17",
                                    y2: "11"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Sign Up"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    const displayName = user.first_name || user.last_name ? `${user.first_name || ''} ${user.last_name || ''}`.trim() : 'User';
    const getInitials = ()=>{
        if (user.first_name && user.last_name) {
            return `${user.first_name[0]}${user.last_name[0]}`.toUpperCase();
        }
        if (user.first_name) {
            return user.first_name[0].toUpperCase();
        }
        if (user.email) {
            return user.email[0].toUpperCase();
        }
        return 'U';
    };
    const handleProfileClick = ()=>{
        onClose();
        router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withLocale"])(locale, '/profile'));
    };
    const handleOrderHistoryClick = ()=>{
        onClose();
        router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withLocale"])(locale, '/orders'));
    };
    const handleShippingClick = ()=>{
        onClose();
        router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withLocale"])(locale, '/shipping'));
    };
    const handleLogout = ()=>{
        void logout();
        onClose();
        router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withLocale"])(locale, '/'));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProfileCardContainer"], {
        $isScrolled: isScrolled,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProfileHeader"], {
                onClick: handleProfileClick,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProfileIcon"], {
                        children: getInitials()
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProfileInfo"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProfileName"], {
                                children: displayName
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProfileEmail"], {
                                children: user.email
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProfileArrow"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                points: "9 18 15 12 9 6"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                                lineNumber: 146,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProfileMenuDivider"], {}, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProfileMenuItem"], {
                onClick: handleOrderHistoryClick,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "18",
                        height: "18",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M9 11l3 3L22 4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Order History"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProfileMenuItem"], {
                onClick: handleShippingClick,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "18",
                        height: "18",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "12",
                                cy: "10",
                                r: "3"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Shipping Information"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProfileMenuDivider"], {}, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogoutButton"], {
                onClick: handleLogout,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "18",
                        height: "18",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                points: "16 17 21 12 16 7"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "21",
                                y1: "12",
                                x2: "9",
                                y2: "12"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Logout"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ProfileCard;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
;
const HeaderContainer = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__HeaderContainer",
    componentId: "sc-23b81648-0"
})`
  width: 100%;
  background-color: ${({ $isScrolled })=>$isScrolled ? '#ffffff' : 'transparent'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  transition: background-color 0.3s ease-in-out;
  overflow: visible;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;
const HEADER_CENTER_VH = 1.5;
const toHeaderDesktop = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyframes"]`
  0% {
    top: 30vh;
    width: 40vw;
    transform: translateX(-50%) scale(1);;
    opacity: 1;
  }
  100% {
    top: ${HEADER_CENTER_VH}vh;
    width: 120px;
    transform: translateX(-50%) scale(1);
    opacity: 1;
  }
`;
const fromHeaderDesktop = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyframes"]`
  0% {
    top: ${HEADER_CENTER_VH}vh;
    width: 120px;
    transform: translateX(-50%);
    opacity: 1;
  }
  100% {
    top: 30vh;
    width: 40vw;
    transform: translateX(-50%);
    opacity: 1;
  }
`;
const toHeaderMobile = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyframes"]`
  0% {
    top: 30vh;
    width: 70vw;
    transform: translateX(-50%);
    opacity: 1;
  }
  100% {
    top: ${HEADER_CENTER_VH}vh;
    width: 20vw;
    transform: translateX(-50%);
    opacity: 1;
  }
`;
const fromHeaderMobile = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyframes"]`
  0% {
    top: ${HEADER_CENTER_VH}vh;
    width: 20vw;
    transform: translateX(-50%);
    opacity: 1;
  }
  100% {
    top: 30vh;
    width: 70vw;
    transform: translateX(-50%);
    opacity: 1;
  }
`;
const AnimatedLogoWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__AnimatedLogoWrapper",
    componentId: "sc-23b81648-1"
})`
  left: 50%;
  pointer-events: none;
  z-index: 9999;
  color: ${({ $phase })=>$phase === 'done' || $phase === 'animating-out' ? '#9A8300' : '#ffffff'};
  transition: color 0.5s ease;
  transform-origin: top center;

  & img {
    width: 100%;
    height: auto;
    display: block;
  }

  ${({ $phase })=>{
    switch($phase){
        case 'idle':
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          position: fixed;
          top: 30vh;
          width: 40vw;
          transform: translateX(-50%);
          opacity: 1;

          @media (max-width: 768px) {
            width: 70vw;
          }
        `;
        case 'animating-out':
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          position: fixed;
          animation: ${toHeaderDesktop} 0.5s ease forwards;

          @media (max-width: 768px) {
            animation: ${toHeaderMobile} 0.5s ease forwards;
          }
        `;
        case 'animating-in':
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          position: fixed;
          animation: ${fromHeaderDesktop} 0.5s ease forwards;

          @media (max-width: 768px) {
            animation: ${fromHeaderMobile} 0.5s ease forwards;
          }
        `;
        case 'done':
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          position: fixed;
          top: 33%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120px;
          z-index: 2;

          @media (max-width: 768px) {
            width: 20vw;
          }
        `;
    }
}}
`;
const HeaderMainContainer = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__HeaderMainContainer",
    componentId: "sc-23b81648-2"
})`
  display: flex;
  flex-direction: row;
  width: 75vw;
  justify-content: space-between;
  min-height: 80px;
  align-items: center;
`;
const HeaderLogo = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__HeaderLogo",
    componentId: "sc-23b81648-3"
})`
  position: relative;
  overflow: visible;
  width: 120px;
  height: 60px;
  cursor: pointer;
  margin-left: 0;
`;
const HeaderDetails = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__HeaderDetails",
    componentId: "sc-23b81648-4"
})`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const HeaderActions = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__HeaderActions",
    componentId: "sc-23b81648-5"
})`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const CategoryContainer = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__CategoryContainer",
    componentId: "sc-23b81648-6"
})`
  border-radius: 10px;
  mix-blend-mode: luminosity;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${({ open })=>open && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
      background-color: #e3e3e3;
    `}

  &:hover {
    background-color: #e3e3e3;
  }
`;
const CategoryText = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "Header.styles__CategoryText",
    componentId: "sc-23b81648-7"
})`
  margin: 0 10px 0 5px;

  @media (max-width: 480px) {
    display: none;
  }
`;
const MenuIcon = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "Header.styles__MenuIcon",
    componentId: "sc-23b81648-8"
})`
  width: 32px;
  height: 32px;
  padding: 4px 5px;
  border: none;
  border-radius: 5px;
  background: none;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    display: block;
    width: 100%;
    height: 0.125rem;
    border-radius: 2px;
    background-color: black;
    position: relative;
    transition: all 0.4s ease;
  }

  span + span {
    margin-top: 0.375rem;
  }
`;
const SearchContent = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__SearchContent",
    componentId: "sc-23b81648-9"
})`
  border-radius: 0 0 10px 10px;
  z-index: 1000;
  overflow: hidden;
  max-height: ${({ visible })=>visible ? '600px' : '0'};
  opacity: ${({ visible })=>visible ? 1 : 0};
  transition:
    max-height 0.5s ease,
    opacity 0.5s ease;
  padding: ${({ visible })=>visible ? '15px' : '0'};
`;
const CatalogContent = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__CatalogContent",
    componentId: "sc-23b81648-10"
})`
  border-radius: 0 0 10px 10px;
  z-index: 1000;
  overflow: hidden;
  max-height: ${({ visible })=>visible ? '600px' : '0'};
  opacity: ${({ visible })=>visible ? 1 : 0};
  transition:
    max-height 0.5s ease,
    opacity 0.5s ease;
  padding: ${({ visible })=>visible ? '15px' : '0'};
  display: ${({ visible })=>visible ? 'flex' : 'none'};
`;
const SearchBar = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__SearchBar",
    componentId: "sc-23b81648-11"
})`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin-bottom: 10px;
  position: relative;
`;
const SearchIconLarge = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "Header.styles__SearchIconLarge",
    componentId: "sc-23b81648-12"
})`
  width: 36px;
  height: 36px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;
const SearchInput = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].input.withConfig({
    displayName: "Header.styles__SearchInput",
    componentId: "sc-23b81648-13"
})`
  font-size: 18px;
  padding: 5px;
  border: none;
  outline: none;
  width: 100%;
  background: none;
  border-bottom: 2px solid transparent;
  transition: border-color 0.2s ease;

  &:focus,
  &:hover {
    border-bottom: 2px solid #cc0c5c;
  }

  &::placeholder {
    color: #888;
    font-weight: bold;
  }
`;
const CategoryList = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "Header.styles__CategoryList",
    componentId: "sc-23b81648-14"
})`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 400px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #cc0c5c transparent;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #cc0c5c;
    border-radius: 10px;
  }
`;
const CategoryItem = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].li.withConfig({
    displayName: "Header.styles__CategoryItem",
    componentId: "sc-23b81648-15"
})`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f9f9f9;
  }
`;
const CategoryArrow = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "Header.styles__CategoryArrow",
    componentId: "sc-23b81648-16"
})`
  width: 16px;
  height: 16px;
  stroke: #a4a4a4;
  transition: transform 0.3s ease;

  ${CategoryItem}:hover & {
    transform: translateX(5px);
    stroke: #cc0c5c;
  }
`;
const CatalogCategories = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__CatalogCategories",
    componentId: "sc-23b81648-17"
})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;
  padding: 0 20px;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: #cc0c5c darkgrey;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: pink;
    border-radius: 10px;
    border: 2px solid transparent;
    background-clip: content-box;
  }
`;
const SwiperCell = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__SwiperCell",
    componentId: "sc-23b81648-18"
})`
  position: relative;
  flex: 0 0 auto;
  width: inherit;
  display: flex;
  flex-direction: row;
  border-radius: 15px;
  background: linear-gradient(135deg, #ffffff, #f7f7f7);
  border: 1px solid #e5e5e5;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.3s,
    background 0.3s;
  padding: 10px 13px;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  img {
    width: 30px;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    background: linear-gradient(135deg, #cc0c5c, #ff3366);

    p {
      color: #ffffff;
    }

    img {
      filter: brightness(0) invert(1);
    }
  }

  p {
    margin: 0;
    text-align: start;
    font-size: 14px;
    padding-left: 10px;
  }
`;
const VerticalLine = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__VerticalLine",
    componentId: "sc-23b81648-19"
})`
  background-color: #cc0c5c;
  width: 2px;
  height: 600px;
  margin-left: 20px;
`;
const SubcategoryList = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__SubcategoryList",
    componentId: "sc-23b81648-20"
})`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 30px;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: #cc0c5c darkgrey;
`;
const SubcategoryItem = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__SubcategoryItem",
    componentId: "sc-23b81648-21"
})`
  color: #cc0c5c;
  text-align: start;
  padding: 0 15px;
  cursor: pointer;

  &:hover {
    background-color: #efefef;
    border-radius: 20px;
    font-weight: bold;
    text-decoration-color: #cc0c5c;
  }
`;
const AccountIcon = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__AccountIcon",
    componentId: "sc-23b81648-22"
})`
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
    filter: none;
    color: #cc0c5c;
  }

  svg path {
    transition: fill 0.3s ease;
  }

  &:hover svg path {
    stroke: #cc0c5c;
  }
`;
const ScaleButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__ScaleButton",
    componentId: "sc-23b81648-23"
})`
  position: relative;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
    filter: none;
    color: #cc0c5c;

    svg path {
      stroke: #cc0c5c;
    }
  }
`;
const CountBadge = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Header.styles__CountBadge",
    componentId: "sc-23b81648-24"
})`
  position: absolute;
  top: -3px;
  right: -5px;
  background-color: greenyellow;
  color: black;
  font-size: 10px;
  font-weight: bold;
  border-radius: 50%;
  width: 13px;
  height: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MobileMenuContent = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__MobileMenuContent",
    componentId: "sc-23b81648-25"
})`
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  background: white;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  visibility: ${({ isVisible })=>isVisible ? 'visible' : 'hidden'};
  pointer-events: ${({ isVisible })=>isVisible ? 'auto' : 'none'};
  opacity: ${({ isVisible })=>isVisible ? 1 : 0};
  transform: ${({ isVisible })=>isVisible ? 'translateY(0)' : 'translateY(-10px)'};
  transition: all 0.3s ease;
  z-index: 1000;
  max-height: 500px;
  overflow-y: auto;

  @media (max-width: 768px) {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    border-radius: 0;
    max-height: calc(100vh - 60px);
    grid-template-columns: 1fr;
  }
`;
const MobileMenuCard = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__MobileMenuCard",
    componentId: "sc-23b81648-26"
})`
  background: ${({ bgImage })=>bgImage ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgImage})` : 'linear-gradient(135deg, #ffffff, #f7f7f7)'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: ${({ textColor })=>textColor || '#333'};
  border-radius: 8px;
  padding: 12px 16px;
  border: 1px solid #e5e5e5;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;
const MobileMenuLabel = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__MobileMenuLabel",
    componentId: "sc-23b81648-27"
})`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 8px;
  letter-spacing: -0.5px;
  color: white;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
`;
const MobileMenuLinks = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__MobileMenuLinks",
    componentId: "sc-23b81648-28"
})`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-top: auto;
`;
const MobileMenuLink = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].a.withConfig({
    displayName: "Header.styles__MobileMenuLink",
    componentId: "sc-23b81648-29"
})`
  font-size: 12px;
  color: white;
  text-decoration: none;
  padding: 4px 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 4px;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-1px);
  }
`;
const MobileMenuIcon = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Header.styles__MobileMenuIcon",
    componentId: "sc-23b81648-30"
})`
  font-size: 12px;
  transform: rotate(45deg);
`;
const ProductCategories = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__ProductCategories",
    componentId: "sc-23b81648-31"
})`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: center;
`;
const ProductCategory = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__ProductCategory",
    componentId: "sc-23b81648-32"
})`
  padding: 4px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  border-left: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;

  &:first-child {
    border-left: none;
  }
`;
const ProductCategoryName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Header.styles__ProductCategoryName",
    componentId: "sc-23b81648-33"
})`
  color: #000;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;

  ${ProductCategory}:hover & {
    color: #666;
  }
`;
const CurrencySwitcher = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__CurrencySwitcher",
    componentId: "sc-23b81648-34"
})`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 20px;
  background: #f5f5f5;
  transition: all 0.3s ease;

  &:hover {
    background: #e0e0e0;
  }
`;
const CurrencyText = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Header.styles__CurrencyText",
    componentId: "sc-23b81648-35"
})`
  font-size: 14px;
  font-weight: 500;
  color: #333;
`;
const CurrencyArrow = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Header.styles__CurrencyArrow",
    componentId: "sc-23b81648-36"
})`
  font-size: 12px;
  color: #666;
  transition: transform 0.3s ease;

  ${CurrencySwitcher}:hover & {
    transform: rotate(180deg);
  }
`;
const CountrySwitcher = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__CountrySwitcher",
    componentId: "sc-23b81648-37"
})`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 20px;
  background: #f5f5f5;
  transition: all 0.3s ease;

  &:hover {
    background: #e0e0e0;
  }
`;
const CountryFlag = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__CountryFlag",
    componentId: "sc-23b81648-38"
})`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  overflow: hidden;
  border: 2px solid #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const CountryText = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Header.styles__CountryText",
    componentId: "sc-23b81648-39"
})`
  font-size: 14px;
  font-weight: 500;
  color: #333;
`;
const Contacts = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__Contacts",
    componentId: "sc-23b81648-40"
})`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const ContactItem = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].a.withConfig({
    displayName: "Header.styles__ContactItem",
    componentId: "sc-23b81648-41"
})`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border-radius: 20px;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: #e0e0e0;
    transform: translateY(-1px);
  }
`;
const ContactIcon = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__ContactIcon",
    componentId: "sc-23b81648-42"
})`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #666;
`;
const ContactText = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Header.styles__ContactText",
    componentId: "sc-23b81648-43"
})`
  font-size: 12px;
  font-weight: 500;
  color: #333;
`;
const UserIconWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__UserIconWrapper",
    componentId: "sc-23b81648-44"
})`
  position: relative;
  display: inline-flex;
`;
const UserIconButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "Header.styles__UserIconButton",
    componentId: "sc-23b81648-45"
})`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: ${({ $isScrolled })=>$isScrolled ? '#1a1a1a' : '#ffffff'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  border-radius: 50%;
  width: 40px;
  height: 40px;

  &:hover {
    background: ${({ $isScrolled })=>$isScrolled ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.1)'};
    color: #d4af37;
    transform: scale(1.1);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
const UserModal = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__UserModal",
    componentId: "sc-23b81648-46"
})`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  min-width: 200px;
  padding: 1rem;
  z-index: 10001;
  animation: slideDown 0.2s ease-out;
  border: 1px solid rgba(0, 0, 0, 0.08);
  white-space: nowrap;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    right: 0;
    left: auto;
  }
`;
const UserModalMessage = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "Header.styles__UserModalMessage",
    componentId: "sc-23b81648-47"
})`
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin: 0 0 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #e0e0e0;
  font-family: 'Questrial', sans-serif;
`;
const UserModalItem = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "Header.styles__UserModalItem",
    componentId: "sc-23b81648-48"
})`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #1a1a1a;
  font-size: 0.95rem;
  font-weight: 500;
  font-family: 'Questrial', sans-serif;
  border-radius: 8px;
  transition: all 0.2s ease;
  text-align: left;

  &:hover {
    background: #f5f5f5;
    color: #d4af37;
  }

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }

  span {
    flex: 1;
  }
`;
const LikedIconWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__LikedIconWrapper",
    componentId: "sc-23b81648-49"
})`
  position: relative;
  display: inline-flex;
`;
const LikedButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "Header.styles__LikedButton",
    componentId: "sc-23b81648-50"
})`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: ${({ $isScrolled })=>$isScrolled ? '#1a1a1a' : '#ffffff'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: ${({ $isScrolled })=>$isScrolled ? 'rgba(204, 12, 92, 0.1)' : 'rgba(204, 12, 92, 0.15)'};
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    background: ${({ $isScrolled })=>$isScrolled ? 'rgba(204, 12, 92, 0.08)' : 'rgba(255, 255, 255, 0.12)'};
    color: #cc0c5c;
    transform: scale(1.08);
  }

  &:hover::before {
    opacity: 1;
    transform: scale(1);
  }

  &:active {
    transform: scale(1.05);
  }

  svg {
    width: 20px;
    height: 20px;
    position: relative;
    z-index: 1;
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;
const LikedBadge = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Header.styles__LikedBadge",
    componentId: "sc-23b81648-51"
})`
  position: absolute;
  top: 2px;
  right: 2px;
  background: #cc0c5c;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 600;
  font-family: 'Questrial', sans-serif;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;
const CartIconWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__CartIconWrapper",
    componentId: "sc-23b81648-52"
})`
  position: relative;
  display: inline-flex;
`;
const CartButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "Header.styles__CartButton",
    componentId: "sc-23b81648-53"
})`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: ${({ $isScrolled })=>$isScrolled ? '#1a1a1a' : '#ffffff'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: ${({ $isScrolled })=>$isScrolled ? 'rgba(212, 175, 55, 0.1)' : 'rgba(212, 175, 55, 0.15)'};
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    background: ${({ $isScrolled })=>$isScrolled ? 'rgba(212, 175, 55, 0.08)' : 'rgba(255, 255, 255, 0.12)'};
    color: #d4af37;
    transform: scale(1.08);
  }

  &:hover::before {
    opacity: 1;
    transform: scale(1);
  }

  &:active {
    transform: scale(1.05);
  }

  svg {
    width: 20px;
    height: 20px;
    position: relative;
    z-index: 1;
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;
const CartBadge = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Header.styles__CartBadge",
    componentId: "sc-23b81648-54"
})`
  position: absolute;
  top: 2px;
  right: 2px;
  background: #d4af37;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 600;
  font-family: 'Questrial', sans-serif;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;
const NavigationBar = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].nav.withConfig({
    displayName: "Header.styles__NavigationBar",
    componentId: "sc-23b81648-55"
})`
  width: 100%;
  background: ${({ $isScrolled })=>$isScrolled ? '#001f3f' : 'transparent'};
  transition: background 0.3s ease;
  border-top: ${({ $isScrolled })=>$isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'};
  padding: 0.5rem 0;
  margin-top: 0;

  @media (max-width: 968px) {
    display: none;
  }
`;
const NavContainer = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__NavContainer",
    componentId: "sc-23b81648-56"
})`
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;
const NavLinks = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__NavLinks",
    componentId: "sc-23b81648-57"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    gap: 1.25rem;
  }
`;
const NavItem = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__NavItem",
    componentId: "sc-23b81648-58"
})`
  position: relative;
  display: inline-flex;
  align-items: center;

  &:hover button::after,
  &:focus-within button::after {
    width: 100%;
  }
`;
const Submenu = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__Submenu",
    componentId: "sc-23b81648-59"
})`
  position: absolute;
  top: calc(100% + 0.6rem);
  left: 50%;
  transform: translate(-50%, 8px);
  background: #ffffff;
  border-radius: 12px;
  padding: 0.75rem 0.9rem;
  min-width: 220px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition:
    opacity 0.2s ease,
    transform 0.2s ease,
    visibility 0.2s ease;
  z-index: 2000;

  ${NavItem}:hover &,
  ${NavItem}:focus-within & {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translate(-50%, 0);
  }
`;
const SubmenuList = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "Header.styles__SubmenuList",
    componentId: "sc-23b81648-60"
})`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;
const SubmenuItem = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].li.withConfig({
    displayName: "Header.styles__SubmenuItem",
    componentId: "sc-23b81648-61"
})`
  width: 100%;
`;
const SubmenuLink = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "Header.styles__SubmenuLink",
    componentId: "sc-23b81648-62"
})`
  width: 100%;
  text-align: left;
  border: none;
  background: none;
  padding: 0.4rem 0.35rem;
  border-radius: 8px;
  color: #001f3f;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition:
    background 0.2s ease,
    color 0.2s ease;

  &:hover,
  &:focus-visible {
    background: rgba(0, 31, 63, 0.08);
    color: #d4af37;
    outline: none;
  }
`;
const NavLinkDivider = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Header.styles__NavLinkDivider",
    componentId: "sc-23b81648-63"
})`
  width: 1px;
  height: 20px;
  background: #9a8300;
  flex-shrink: 0;
`;
const NavLink = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "Header.styles__NavLink",
    componentId: "sc-23b81648-64"
})`
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Questrial', sans-serif;
  cursor: pointer;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.2s ease;
  text-transform: capitalize;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #d4af37;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #d4af37;

    &::after {
      width: 100%;
    }
  }

  @media (max-width: 1200px) {
    font-size: 0.95rem;
  }
`;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/dropdown/Dropdown.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const VisuallyHiddenLabel = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Dropdown.styles__VisuallyHiddenLabel",
    componentId: "sc-e01969a5-0"
})`
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
  clip-path: inset(50%);
`;
const Container = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Dropdown.styles__Container",
    componentId: "sc-e01969a5-1"
})`
  position: relative;
  width: ${({ $width })=>$width ?? '240px'};
  font-family: inherit;
`;
const Trigger = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "Dropdown.styles__Trigger",
    componentId: "sc-e01969a5-2"
})`
  width: 100%;
  height: 28px;
  padding: 0;
  border: none;
  border-bottom: 1px solid
    ${({ $isScrolled })=>$isScrolled ? 'rgba(0, 31, 63, 0.2)' : 'rgba(255, 255, 255, 0.3)'};
  background: transparent;
  color: ${({ $isScrolled })=>$isScrolled ? '#001f3f' : '#ffffff'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    border-color: ${({ $isScrolled })=>$isScrolled ? '#9a8300' : 'rgba(255, 255, 255, 0.6)'};
  }

  &:focus-visible {
    outline: none;
    border-color: #9a8300;
  }
`;
const ValueText = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Dropdown.styles__ValueText",
    componentId: "sc-e01969a5-3"
})`
  color: ${({ $isScrolled })=>$isScrolled ? '#001f3f' : '#ffffff'};
  font-weight: 400;
  font-size: 0.875rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const PlaceholderText = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Dropdown.styles__PlaceholderText",
    componentId: "sc-e01969a5-4"
})`
  color: ${({ $isScrolled })=>$isScrolled ? '#8a8f98' : 'rgba(255, 255, 255, 0.7)'};
  font-size: 0.875rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Chevron = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Dropdown.styles__Chevron",
    componentId: "sc-e01969a5-5"
})`
  font-size: 0.7rem;
  transform: rotate(0deg);
  transition:
    transform 0.2s ease,
    color 0.2s ease;
  color: ${({ $isScrolled })=>$isScrolled ? '#001f3f' : 'rgba(255, 255, 255, 0.8)'};
  opacity: 0.7;

  &[data-open='true'] {
    transform: rotate(180deg);
    color: ${({ $isScrolled })=>$isScrolled ? '#9a8300' : '#ffffff'};
    opacity: 1;
  }
`;
const pop = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyframes"]`
  0% { opacity: 0; transform: translateY(-4px) scale(0.98); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`;
const Menu = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "Dropdown.styles__Menu",
    componentId: "sc-e01969a5-6"
})`
  position: absolute;
  left: 0;
  right: 0;
  margin: 4px 0 0 0;
  padding: 4px;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.1),
    0 2px 4px rgba(0, 0, 0, 0.06);
  list-style: none;
  max-height: ${({ $maxHeight })=>$maxHeight ?? '240px'};
  overflow: auto;
  z-index: 1000;
  animation: ${pop} 0.12s ease both;

  scrollbar-width: thin;
  scrollbar-color: #c7c7c7 transparent;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #c7c7c7;
    border-radius: 6px;
  }
`;
const SearchInput = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].input.withConfig({
    displayName: "Dropdown.styles__SearchInput",
    componentId: "sc-e01969a5-7"
})`
  width: 100%;
  height: 32px;
  margin: 2px 2px 4px;
  padding: 0 8px;
  border-radius: 6px;
  border: 1px solid #e2e2e2;
  background: #fafafa;
  color: #001f3f;
  font-size: 0.875rem;
  &:focus {
    outline: 2px solid #9a8300;
    outline-offset: 1px;
  }
`;
const OptionRow = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Dropdown.styles__OptionRow",
    componentId: "sc-e01969a5-8"
})`
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 32px;
  padding: 4px 8px;
  margin-bottom: 2px;
  border-radius: 6px;
  color: #001f3f;
  font-size: 0.875rem;
  cursor: pointer;
  user-select: none;
  transition:
    background 0.15s ease,
    color 0.15s ease;

  &[data-disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &[aria-selected='true'] {
    background: rgba(154, 131, 0, 0.08);
    color: #9a8300;
    font-weight: 500;
  }

  &[data-highlighted] {
    background: rgba(0, 31, 63, 0.06);
  }

  &:not([data-disabled]):hover {
    background: rgba(0, 31, 63, 0.06);
  }
`;
const OptionIcon = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Dropdown.styles__OptionIcon",
    componentId: "sc-e01969a5-9"
})`
  display: inline-flex;
  width: 18px;
  height: 18px;
  & > svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
    stroke: currentColor;
  }
  & > img {
    width: 18px;
    height: 18px;
    object-fit: contain;
  }
`;
const NoResults = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Dropdown.styles__NoResults",
    componentId: "sc-e01969a5-10"
})`
  color: #8a8f98;
  padding: 12px 8px;
  text-align: center;
`;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/dropdown/Dropdown.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$dropdown$2f$Dropdown$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/dropdown/Dropdown.styles.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const Dropdown = ({ options, value, onChange, placeholder = 'Select…', disabled = false, searchable = false, width, maxMenuHeight, ariaLabel, allowClear = true, isScrolled = false })=>{
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [highlight, setHighlight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const listRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const selected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>options.find((o)=>o.value === value), [
        options,
        value
    ]);
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!searchable || !query.trim()) return options;
        const q = query.toLowerCase();
        return options.filter((o)=>o.label.toLowerCase().includes(q) || o.value.toLowerCase().includes(q));
    }, [
        options,
        query,
        searchable
    ]);
    const firstEnabledIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return filtered.findIndex((o)=>!o.disabled);
    }, [
        filtered
    ]);
    const openMenu = ()=>{
        if (disabled) return;
        setOpen(true);
        setHighlight(firstEnabledIndex);
    };
    const closeMenu = ()=>{
        setOpen(false);
        setQuery('');
        setHighlight(-1);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!open) return;
        const onClick = (e)=>{
            if (!containerRef.current) return;
            if (!containerRef.current.contains(e.target)) closeMenu();
        };
        const onScroll = (e)=>{
            if (!containerRef.current?.contains(e.target)) closeMenu();
        };
        window.addEventListener('mousedown', onClick);
        window.addEventListener('scroll', onScroll, true);
        return ()=>{
            window.removeEventListener('mousedown', onClick);
            window.removeEventListener('scroll', onScroll, true);
        };
    }, [
        open
    ]);
    const onKeyDownTrigger = (e)=>{
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
    const moveHighlight = (delta)=>{
        if (!filtered.length) return;
        let i = highlight;
        for(let step = 0; step < filtered.length; step++){
            i = (i + delta + filtered.length) % filtered.length;
            if (!filtered[i].disabled) {
                setHighlight(i);
                break;
            }
        }
    };
    const onKeyDownList = (e)=>{
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
            const last = [
                ...filtered
            ].reverse().findIndex((o)=>!o.disabled);
            if (last !== -1) setHighlight(filtered.length - 1 - last);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (highlight >= 0 && !filtered[highlight]?.disabled) {
                onChange(filtered[highlight].value);
                closeMenu();
            }
        } else if (e.key === 'Escape') {
            e.preventDefault();
            closeMenu();
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!open || highlight < 0) return;
        const el = listRef.current?.querySelector(`[data-index="${highlight}"]`);
        el?.scrollIntoView({
            block: 'nearest'
        });
    }, [
        highlight,
        open
    ]);
    const onSelect = (idx)=>{
        const opt = filtered[idx];
        if (!opt || opt.disabled) return;
        onChange(opt.value);
        closeMenu();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$dropdown$2f$Dropdown$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
        ref: containerRef,
        "data-open": open,
        $width: width,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$dropdown$2f$Dropdown$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VisuallyHiddenLabel"], {
                id: "dropdown-label",
                children: ariaLabel || 'Dropdown'
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/dropdown/Dropdown.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$dropdown$2f$Dropdown$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
                type: "button",
                "aria-haspopup": "listbox",
                "aria-expanded": open,
                "aria-labelledby": "dropdown-label",
                onClick: ()=>open ? closeMenu() : openMenu(),
                onKeyDown: onKeyDownTrigger,
                disabled: disabled,
                "data-disabled": disabled || undefined,
                $isScrolled: isScrolled,
                children: [
                    selected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$dropdown$2f$Dropdown$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueText"], {
                        $isScrolled: isScrolled,
                        children: selected.label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/dropdown/Dropdown.tsx",
                        lineNumber: 199,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$dropdown$2f$Dropdown$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaceholderText"], {
                        $isScrolled: isScrolled,
                        children: placeholder
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/dropdown/Dropdown.tsx",
                        lineNumber: 201,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$dropdown$2f$Dropdown$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Chevron"], {
                        $isScrolled: isScrolled,
                        "data-open": open,
                        "aria-hidden": true,
                        children: "▾"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/dropdown/Dropdown.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/dropdown/Dropdown.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$dropdown$2f$Dropdown$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Menu"], {
                role: "listbox",
                "aria-activedescendant": highlight >= 0 ? `opt-${filtered[highlight]?.value}` : undefined,
                onKeyDown: onKeyDownList,
                tabIndex: -1,
                ref: listRef,
                $maxHeight: maxMenuHeight,
                children: [
                    searchable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$dropdown$2f$Dropdown$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SearchInput"], {
                        autoFocus: true,
                        placeholder: "Search…",
                        value: query,
                        onChange: (e)=>{
                            setQuery(e.target.value);
                            setHighlight(-1);
                        },
                        onKeyDown: (e)=>{
                            if (e.key === 'ArrowDown') {
                                e.preventDefault();
                                setHighlight(firstEnabledIndex);
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/dropdown/Dropdown.tsx",
                        lineNumber: 222,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$dropdown$2f$Dropdown$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoResults"], {
                        children: "No results"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/dropdown/Dropdown.tsx",
                        lineNumber: 240,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : filtered.map((opt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$dropdown$2f$Dropdown$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OptionRow"], {
                            as: "li",
                            role: "option",
                            id: `opt-${opt.value}`,
                            "data-index": i,
                            "aria-selected": opt.value === value,
                            "data-highlighted": i === highlight || undefined,
                            "data-disabled": opt.disabled || undefined,
                            onMouseEnter: ()=>!opt.disabled && setHighlight(i),
                            onClick: ()=>onSelect(i),
                            children: [
                                opt.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$dropdown$2f$Dropdown$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OptionIcon"], {
                                    children: opt.icon
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/dropdown/Dropdown.tsx",
                                    lineNumber: 255,
                                    columnNumber: 30
                                }, ("TURBOPACK compile-time value", void 0)),
                                opt.label
                            ]
                        }, opt.value, true, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/dropdown/Dropdown.tsx",
                            lineNumber: 243,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/dropdown/Dropdown.tsx",
                lineNumber: 211,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/dropdown/Dropdown.tsx",
        lineNumber: 182,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Dropdown;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/dropdown/CurrencyDropdown.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$dropdown$2f$Dropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/dropdown/Dropdown.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
const currencyOptions = [
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
const CurrencyDropdown = ({ width = '60px', searchable = false, onChange, isScrolled = false })=>{
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'USD');
    const handleChange = (val)=>{
        if (!val) return;
        setSelected(val);
        localStorage.setItem('currency', val);
        onChange?.(val);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$dropdown$2f$Dropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CurrencyDropdown;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$HeaderModel$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/HeaderModel.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/registerPopup/RegisterPopup.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/loginPopup/LoginPopup.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/cartModal/CartModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$likedModal$2f$LikedModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/likedModal/LikedModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/profileCard/ProfileCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/context/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/locale.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/lib/locale.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.styles.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$dropdown$2f$CurrencyDropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/dropdown/CurrencyDropdown.tsx [app-ssr] (ecmascript)");
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
const Header = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeLocale"])(params?.locale);
    const normalizedPath = pathname && pathname.startsWith(`/${locale}`) ? pathname.replace(`/${locale}`, '') || '/' : pathname || '/';
    const forceScrolled = normalizedPath !== '/';
    const { categories } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$HeaderModel$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useHeaderModel"])();
    const bagsCategory = categories.find((category)=>category.id === 1000);
    const bagsSubcategories = bagsCategory?.subcategories || [];
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isAccountBoxVisible, setIsAccountBoxVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoginPopupOpen, setIsLoginPopupOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isRegisterPopupOpen, setIsRegisterPopupOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCartModalOpen, setIsCartModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLikedModalOpen, setIsLikedModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [cartCount, setCartCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [likedCount, setLikedCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('idle');
    const accountBoxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const toggleAccountBox = ()=>{
        setIsAccountBoxVisible((prev)=>!prev);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isAuthenticated) {
            setIsAccountBoxVisible(false);
        }
    }, [
        isAuthenticated
    ]);
    const closeAccountBox = ()=>setIsAccountBoxVisible(false);
    const openLoginPopup = ()=>setIsLoginPopupOpen(true);
    const closeLoginPopup = ()=>setIsLoginPopupOpen(false);
    const openRegisterPopup = ()=>setIsRegisterPopupOpen(true);
    const closeRegisterPopup = ()=>setIsRegisterPopupOpen(false);
    const toggleCartModal = ()=>setIsCartModalOpen((prev)=>!prev);
    const closeCartModal = ()=>setIsCartModalOpen(false);
    const toggleLikedModal = ()=>setIsLikedModalOpen((prev)=>!prev);
    const closeLikedModal = ()=>setIsLikedModalOpen(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isAccountBoxVisible) return;
        const handleClickOutside = (event)=>{
            if (accountBoxRef.current && !accountBoxRef.current.contains(event.target)) {
                closeAccountBox();
            }
        };
        const handleKeyDown = (event)=>{
            if (event.key === 'Escape') {
                closeAccountBox();
            }
        };
        window.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('keydown', handleKeyDown);
        return ()=>{
            window.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [
        isAccountBoxVisible
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (forceScrolled) return;
        const animLockRef = {
            current: false
        };
        let ticking = false;
        let latestY = window.scrollY;
        const updateScrollState = ()=>{
            const atTop = latestY <= 2;
            setIsScrolled(!atTop);
            if (animLockRef.current) return;
            if (!atTop && phase === 'idle') {
                animLockRef.current = true;
                setPhase('animating-out');
                setTimeout(()=>{
                    setPhase('done');
                    animLockRef.current = false;
                }, 500);
            } else if (atTop && phase === 'done') {
                animLockRef.current = true;
                setPhase('animating-in');
                setTimeout(()=>{
                    setPhase('idle');
                    animLockRef.current = false;
                }, 500);
            }
        };
        const onScroll = ()=>{
            latestY = window.scrollY;
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(()=>{
                    updateScrollState();
                    ticking = false;
                });
            }
        };
        updateScrollState();
        window.addEventListener('scroll', onScroll, {
            passive: true
        });
        return ()=>window.removeEventListener('scroll', onScroll);
    }, [
        phase,
        forceScrolled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (forceScrolled) {
            setIsScrolled(true);
            setPhase('done');
        }
    }, [
        forceScrolled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const updateCartCount = ()=>{
            const storedCart = localStorage.getItem('cartProducts');
            try {
                const cartData = storedCart ? JSON.parse(storedCart) : [];
                if (Array.isArray(cartData)) {
                    if (cartData.length > 0 && cartData[0].bagId && cartData[0].quantity) {
                        setCartCount(cartData.reduce((sum, item)=>sum + (item.quantity || 1), 0));
                    } else {
                        setCartCount(cartData.length);
                    }
                } else {
                    setCartCount(0);
                }
            } catch  {
                setCartCount(0);
            }
        };
        const updateLikedCount = ()=>{
            const storedLiked = localStorage.getItem('likedProducts');
            try {
                const likedData = storedLiked ? JSON.parse(storedLiked) : [];
                setLikedCount(Array.isArray(likedData) ? likedData.length : 0);
            } catch  {
                setLikedCount(0);
            }
        };
        updateCartCount();
        updateLikedCount();
        window.addEventListener('storage', updateCartCount);
        window.addEventListener('cartUpdated', updateCartCount);
        window.addEventListener('storage', updateLikedCount);
        window.addEventListener('likedUpdated', updateLikedCount);
        return ()=>{
            window.removeEventListener('storage', updateCartCount);
            window.removeEventListener('cartUpdated', updateCartCount);
            window.removeEventListener('storage', updateLikedCount);
            window.removeEventListener('likedUpdated', updateLikedCount);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeaderContainer"], {
        $isScrolled: isScrolled,
        ref: headerRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeaderMainContainer"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeaderDetails"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$dropdown$2f$CurrencyDropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            isScrolled: isScrolled
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                            lineNumber: 231,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeaderLogo"], {
                        onClick: ()=>router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withLocale"])(locale, '/')),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedLogoWrapper"], {
                            $phase: phase,
                            onClick: ()=>router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withLocale"])(locale, '/')),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/assets/logobig.svg",
                                alt: "Logo"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                lineNumber: 238,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                            lineNumber: 234,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeaderActions"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LikedIconWrapper"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LikedButton"], {
                                        onClick: toggleLikedModal,
                                        $isScrolled: isScrolled,
                                        "aria-label": "Liked",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "20",
                                                height: "20",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                                lineNumber: 248,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            likedCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LikedBadge"], {
                                                children: likedCount
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                                lineNumber: 258,
                                                columnNumber: 34
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                        lineNumber: 243,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$likedModal$2f$LikedModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        isOpen: isLikedModalOpen,
                                        onClose: closeLikedModal,
                                        isScrolled: isScrolled
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                        lineNumber: 260,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                lineNumber: 242,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartIconWrapper"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartButton"], {
                                        onClick: toggleCartModal,
                                        $isScrolled: isScrolled,
                                        "aria-label": "Cart",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "20",
                                                height: "20",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "3",
                                                        y1: "6",
                                                        x2: "21",
                                                        y2: "6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                                        lineNumber: 281,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M16 10a4 4 0 0 1-8 0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                                        lineNumber: 282,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                                lineNumber: 272,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            cartCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartBadge"], {
                                                children: cartCount
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                                lineNumber: 284,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                        lineNumber: 267,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$cartModal$2f$CartModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        isOpen: isCartModalOpen,
                                        onClose: closeCartModal,
                                        isScrolled: isScrolled
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                        lineNumber: 286,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                lineNumber: 266,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserIconWrapper"], {
                                ref: accountBoxRef,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserIconButton"], {
                                        onClick: toggleAccountBox,
                                        $isScrolled: isScrolled,
                                        "aria-label": "Account",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "12",
                                                    cy: "7",
                                                    r: "4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                                    lineNumber: 307,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                            lineNumber: 298,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                        lineNumber: 293,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isAccountBoxVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$profileCard$2f$ProfileCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        onClose: closeAccountBox,
                                        isScrolled: isScrolled,
                                        onOpenLogin: openLoginPopup,
                                        onOpenRegister: openRegisterPopup
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                        lineNumber: 311,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                lineNumber: 292,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavigationBar"], {
                $isScrolled: isScrolled,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavContainer"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavLinks"], {
                        children: bagsSubcategories.map((subcategory, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavItem"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavLink"], {
                                            onClick: ()=>router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withLocale"])(locale, `/products?category_id=1000&subcategory_id=${subcategory.id}`)),
                                            $isScrolled: isScrolled,
                                            "aria-haspopup": "false",
                                            children: subcategory.name
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                            lineNumber: 327,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                        lineNumber: 326,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    index < bagsSubcategories.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavLinkDivider"], {}, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                        lineNumber: 342,
                                        columnNumber: 58
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, subcategory.id, true, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                                lineNumber: 325,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                        lineNumber: 323,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                    lineNumber: 322,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                lineNumber: 321,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isLoginPopupOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$loginPopup$2f$LoginPopup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onClose: closeLoginPopup,
                onOpenRegister: ()=>{
                    closeLoginPopup();
                    openRegisterPopup();
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                lineNumber: 350,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            isRegisterPopupOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$registerPopup$2f$RegisterPopup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onClose: closeRegisterPopup,
                onOpenLogin: ()=>{
                    closeRegisterPopup();
                    openLoginPopup();
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
                lineNumber: 359,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx",
        lineNumber: 228,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Header;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/heroSlide/HeroSlide.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CentralImage",
    ()=>CentralImage,
    "HeroContainer",
    ()=>HeroContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const HeroContainer = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HeroSlide.styles__HeroContainer",
    componentId: "sc-e2edfdfc-0"
})`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  background: url('/assets/bg.jpg');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(17, 17, 17, 0.4);
    z-index: 1;
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 768px) {
    height: 100vh;
    padding-left: 2rem;
  }
`;
const liftShrinkFade = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyframes"]`
  0% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -45vh, 0) scale(0.06);
    opacity: 1;
  }
`;
const appearBack = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyframes"]`
  0% {
    transform: translate3d(0, -45vh, 0) scale(0.06);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 1;
  }
  `;
const CentralImage = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].img.withConfig({
    displayName: "HeroSlide.styles__CentralImage",
    componentId: "sc-e2edfdfc-1"
})`
  max-width: 50vw;
  width: 600px;
  pointer-events: none;
  will-change: transform;
  transform-origin: top center;

  color: ${({ $phase })=>$phase === 'done' || $phase === 'animating-out' ? '#9A8300' : '#ffffff'};
  transition: color 0.5s ease;
  & img {
    width: 100%;
    height: auto;
  }
  ${({ $phase })=>{
    switch($phase){
        case 'idle':
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          transform: translate3d(0, 0, 0) scale(1);
          opacity: 1;
        `;
        case 'animating-out':
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          animation: ${liftShrinkFade} 0.5s ease forwards;
        `;
        case 'animating-in':
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          animation: ${appearBack} 0.5s ease forwards;
        `;
        case 'done':
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          transform: translate3d(0, -50vh, 0) scale(0.1);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: opacity 0.2s ease;
        `;
    }
}}

  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    transform: none !important;
    opacity: 1 !important;
  }
`;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/heroSlide/HeroSlide.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$heroSlide$2f$HeroSlide$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/heroSlide/HeroSlide.styles.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const HeroSlide = ()=>{
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('idle');
    const lastScrollY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onScroll = ()=>{
            const current = window.scrollY;
            const scrollingDown = current > lastScrollY.current;
            if (scrollingDown && phase !== 'animating-out' && phase !== 'done') {
                setPhase('animating-out');
                setTimeout(()=>setPhase('done'), 500);
            } else if (!scrollingDown && phase !== 'animating-in' && phase !== 'idle') {
                setPhase('animating-in');
                setTimeout(()=>setPhase('idle'), 500);
            }
            lastScrollY.current = current;
        };
        window.addEventListener('scroll', onScroll, {
            passive: true
        });
        return ()=>window.removeEventListener('scroll', onScroll);
    }, [
        phase
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$heroSlide$2f$HeroSlide$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeroContainer"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$heroSlide$2f$HeroSlide$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CentralImage"], {
            src: "/assets/hero.jpg",
            alt: "Hero",
            $phase: phase
        }, void 0, false, {
            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/heroSlide/HeroSlide.tsx",
            lineNumber: 34,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/heroSlide/HeroSlide.tsx",
        lineNumber: 33,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = HeroSlide;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/footer/Footer.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const slideInTop = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyframes"]`
    0% { transform: translateY(-50px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
`;
const FooterContainer = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].footer.withConfig({
    displayName: "Footer.styles__FooterContainer",
    componentId: "sc-a6c51aef-0"
})`
  color: ${({ $secondaryColor })=>$secondaryColor};
  background-color: #001f3f;
  width: 100%;
  padding: 4rem 6rem;
  font-family: 'Questrial', sans-serif;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;
const FooterLinkSection = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Footer.styles__FooterLinkSection",
    componentId: "sc-a6c51aef-1"
})`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  flex: 2;
  justify-content: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const FooterContent = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Footer.styles__FooterContent",
    componentId: "sc-a6c51aef-2"
})`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  justify-content: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LogoSection = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Footer.styles__LogoSection",
    componentId: "sc-a6c51aef-3"
})`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const Logo = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Footer.styles__Logo",
    componentId: "sc-a6c51aef-4"
})`
  width: 150px;
  height: 150px;
  margin-bottom: 15px;
  position: relative;

  img {
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 110px;
    height: 110px;
  }
`;
const LogoDescription = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "Footer.styles__LogoDescription",
    componentId: "sc-a6c51aef-5"
})`
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  font-weight: bold;
`;
const LinksSection = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Footer.styles__LinksSection",
    componentId: "sc-a6c51aef-6"
})`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
  }
`;
const SectionTitle = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h3.withConfig({
    displayName: "Footer.styles__SectionTitle",
    componentId: "sc-a6c51aef-7"
})`
  font-size: 18px;
  margin: 0 0 10px;
  color: ${({ $color })=>$color};
`;
const LinksList = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "Footer.styles__LinksList",
    componentId: "sc-a6c51aef-8"
})`
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;
const LinkItem = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].li.withConfig({
    displayName: "Footer.styles__LinkItem",
    componentId: "sc-a6c51aef-9"
})`
  margin-bottom: 8px;

  a {
    text-decoration: none;
    color: ${({ $color })=>$color};
    font-size: 14px;
    transition: color 0.3s ease;

    &:hover {
      color: black;
    }
  }
`;
const SocialSection = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Footer.styles__SocialSection",
    componentId: "sc-a6c51aef-10"
})`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
  }
`;
const Card = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Footer.styles__Card",
    componentId: "sc-a6c51aef-11"
})`
  width: fit-content;
  height: fit-content;
  background-color: rgb(238, 238, 238);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
  border-radius: 20px;
  gap: 20px;
  box-shadow:
    rgba(50, 50, 93, 0.4) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.6) 0px 30px 60px -30px;
`;
const SocialContainer = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].a.withConfig({
    displayName: "Footer.styles__SocialContainer",
    componentId: "sc-a6c51aef-12"
})`
  width: 52px;
  height: 52px;
  background-color: rgb(44, 44, 44);
  display: flex;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition:
    background-color 0.3s,
    transform 0.3s;

  ${({ variant })=>variant === 'instagram' && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
      &:hover {
        background-color: #d62976;
      }
    `}
  ${({ variant })=>variant === 'viber' && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
      &:hover {
        background-color: #7f4da0;
      }
    `}
    ${({ variant })=>variant === 'whatsapp' && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
      &:hover {
        background-color: #128c7e;
      }
    `}
    ${({ variant })=>variant === 'telegram' && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
      &:hover {
        background-color: #0ea958;
      }
    `}

    &:active {
    transform: scale(0.9);
  }
`;
const SocialSvg = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "Footer.styles__SocialSvg",
    componentId: "sc-a6c51aef-13"
})`
  width: 17px;
  height: 17px;
  fill: white;
  animation: ${slideInTop} 0.3s both;
`;
const FooterBottom = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Footer.styles__FooterBottom",
    componentId: "sc-a6c51aef-14"
})`
  text-align: left;
  font-size: 12px;
`;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/types/footerLinks.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "footerLinksData",
    ()=>footerLinksData
]);
const footerLinksData = [
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
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/hooks/useThemeColors.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useThemeColors",
    ()=>useThemeColors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
const defaults = {
    primaryColor: 'linear-gradient(135deg, #c39a37 0%, #b8860b 100%)',
    primaryColorFlat: '#d4af37',
    secondaryColor: '#001f3f'
};
const readFromStorage = (fallbacks)=>{
    if ("TURBOPACK compile-time truthy", 1) return defaults;
    //TURBOPACK unreachable
    ;
};
const useThemeColors = (overrides = {})=>{
    const fallbackColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            ...defaults,
            ...overrides
        }), [
        overrides
    ]);
    const [colors, setColors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(fallbackColors);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setColors(readFromStorage(fallbackColors));
    }, [
        fallbackColors
    ]);
    return colors;
};
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/footer/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/footer/Footer.styles.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$types$2f$footerLinks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/types/footerLinks.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/locale.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/lib/locale.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$hooks$2f$useThemeColors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/hooks/useThemeColors.ts [app-ssr] (ecmascript)");
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
function Footer() {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeLocale"])(params?.locale);
    const { secondaryColor } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$hooks$2f$useThemeColors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useThemeColors"])({
        secondaryColor: '#ffffff'
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FooterContainer"], {
        $secondaryColor: secondaryColor,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FooterContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FooterLinkSection"], {
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$types$2f$footerLinks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["footerLinksData"].map((section, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinksSection"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionTitle"], {
                                        $color: secondaryColor,
                                        children: t(section.title)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/footer/Footer.tsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinksList"], {
                                        children: section.links.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinkItem"], {
                                                $color: secondaryColor,
                                                children: link.href.startsWith('http') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: link.href,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: link.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/footer/Footer.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withLocale"])(locale, link.href),
                                                    children: link.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/footer/Footer.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 23
                                                }, this)
                                            }, index, false, {
                                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/footer/Footer.tsx",
                                                lineNumber: 42,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/footer/Footer.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/footer/Footer.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/footer/Footer.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogoSection"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logo"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogoDescription"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FooterBottom"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
}),
"[project]/Desktop/Dev/jasmine/frontend/src/utils/productMapper.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mapProductDtoToModel",
    ()=>mapProductDtoToModel,
    "mapProductDtosToModels",
    ()=>mapProductDtosToModels
]);
const mapProductDtoToModel = (item)=>({
        ...item,
        category: item.category ?? null,
        subcategory: item.subcategory ?? null,
        variants: item.variants ?? [],
        specifications: item.specifications ?? {},
        specifications_detailed: item.specifications_detailed ?? []
    });
const mapProductDtosToModels = (items)=>items.map(mapProductDtoToModel);
}),
"[project]/Desktop/Dev/jasmine/frontend/src/utils/productFields.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PRODUCT_CARD_FIELDS",
    ()=>PRODUCT_CARD_FIELDS,
    "PRODUCT_LIST_FIELDS",
    ()=>PRODUCT_LIST_FIELDS
]);
const PRODUCT_CARD_FIELDS = [
    'id',
    'name',
    'price',
    'price_new',
    'price_old',
    'availability',
    'variant_image',
    'currency'
];
const PRODUCT_LIST_FIELDS = [
    ...PRODUCT_CARD_FIELDS,
    'variant_color_palette',
    'variant_color_name',
    'variants'
];
}),
"[project]/Desktop/Dev/jasmine/frontend/src/service/productsService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$httpClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/service/httpClient.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$productMapper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/productMapper.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$productFields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/productFields.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$slug$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/slug.ts [app-ssr] (ecmascript)");
;
;
;
;
const listProducts = (params = {}, options = {})=>{
    const { specFilters, fields, ...rest } = params;
    const query = {
        ...rest
    };
    if (fields) {
        query.fields = Array.isArray(fields) ? fields.join(',') : fields;
    }
    if (specFilters) {
        Object.entries(specFilters).forEach(([key, value])=>{
            query[`spec_${key}`] = value;
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$httpClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["httpClient"].get('products/', {
        query,
        ...options
    });
};
const getProduct = (productId, options = {})=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$httpClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["httpClient"].get(`products/${productId}/`, options);
const getProductBySlug = async (productName, options = {})=>{
    const idFromSlug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$slug$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProductIdFromSlug"])(productName);
    if (idFromSlug) {
        try {
            return await getProduct(idFromSlug, options);
        } catch  {
            return null;
        }
    }
    const decodedName = decodeURIComponent(productName);
    const response = await listProducts({
        search: decodedName,
        page: 1,
        page_size: 50
    }, options);
    const normalized = decodedName.trim().toLowerCase();
    const normalizedSlug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$slug$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slugify"])(decodedName);
    const exactMatch = response.items.find((item)=>{
        const itemName = item.name.trim();
        if (normalizedSlug && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$slug$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slugify"])(itemName) === normalizedSlug) return true;
        return itemName.toLowerCase() === normalized;
    });
    return exactMatch ?? null;
};
const listProductsMapped = async (params = {}, options = {})=>{
    const response = await listProducts(params, options);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$productMapper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapProductDtosToModels"])(response.items);
};
const fetchBestDeals = async (options = {})=>listProductsMapped({
        page: 1,
        page_size: 12,
        fields: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$productFields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRODUCT_CARD_FIELDS"]
    }, options);
const fetchNewAdded = async (options = {})=>listProductsMapped({
        page: 1,
        page_size: 12,
        fields: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$productFields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRODUCT_CARD_FIELDS"]
    }, options);
const getCategorySpecifications = async (categoryId, subcategoryId, options = {})=>{
    if (!categoryId && !subcategoryId) {
        return {};
    }
    const response = await listProducts({
        page: 1,
        page_size: 50,
        category_id: categoryId ? Number(categoryId) : undefined,
        subcategory_id: subcategoryId ? Number(subcategoryId) : undefined,
        fields: [
            'specifications',
            'specifications_detailed'
        ]
    }, options);
    const map = new Map();
    response.items.forEach((product)=>{
        if (product.specifications) {
            Object.entries(product.specifications).forEach(([key, value])=>{
                if (!value) return;
                const entry = map.get(key) ?? new Set();
                entry.add(String(value));
                map.set(key, entry);
            });
        }
        if (product.specifications_detailed) {
            product.specifications_detailed.forEach((detail)=>{
                const key = detail.key || detail.label;
                if (!key) return;
                const value = detail.display || detail.value;
                if (!value) return;
                const entry = map.get(key) ?? new Set();
                entry.add(String(value));
                map.set(key, entry);
            });
        }
    });
    return Array.from(map.entries()).reduce((acc, [key, values])=>{
        acc[key] = Array.from(values).sort();
        return acc;
    }, {});
};
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/findSimilarModal/FindSimilarModal.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const ModalOverlay = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "FindSimilarModal.styles__ModalOverlay",
    componentId: "sc-e57bfe8e-0"
})`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  z-index: 4000;
`;
const ModalCard = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "FindSimilarModal.styles__ModalCard",
    componentId: "sc-e57bfe8e-1"
})`
  width: min(920px, 100%);
  max-height: 80vh;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
const ModalHeader = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "FindSimilarModal.styles__ModalHeader",
    componentId: "sc-e57bfe8e-2"
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem 0.75rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;
const ModalTitle = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h3.withConfig({
    displayName: "FindSimilarModal.styles__ModalTitle",
    componentId: "sc-e57bfe8e-3"
})`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #0f0f0f;
`;
const CloseButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "FindSimilarModal.styles__CloseButton",
    componentId: "sc-e57bfe8e-4"
})`
  border: none;
  background: none;
  cursor: pointer;
  color: #0f0f0f;
  font-size: 1.1rem;
  padding: 0.25rem;
  line-height: 1;
`;
const ModalBody = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "FindSimilarModal.styles__ModalBody",
    componentId: "sc-e57bfe8e-5"
})`
  padding: 1.25rem 1.5rem 1.5rem;
  overflow: auto;
`;
const StatusText = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "FindSimilarModal.styles__StatusText",
    componentId: "sc-e57bfe8e-6"
})`
  margin: 0;
  color: #6b6b6b;
`;
const Grid = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "FindSimilarModal.styles__Grid",
    componentId: "sc-e57bfe8e-7"
})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
`;
const ProductCard = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "FindSimilarModal.styles__ProductCard",
    componentId: "sc-e57bfe8e-8"
})`
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;
  transition:
    transform 180ms ease,
    border-color 180ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(0, 0, 0, 0.16);
  }
`;
const ProductImage = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "FindSimilarModal.styles__ProductImage",
    componentId: "sc-e57bfe8e-9"
})`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 5;
  border-radius: 8px;
  background: #f6f6f6;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`;
const ProductName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "FindSimilarModal.styles__ProductName",
    componentId: "sc-e57bfe8e-10"
})`
  margin: 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: #1a1a1a;
`;
const ProductPrice = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "FindSimilarModal.styles__ProductPrice",
    componentId: "sc-e57bfe8e-11"
})`
  margin: 0;
  font-size: 0.85rem;
  color: #6b6b6b;
`;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/findSimilarModal/FindSimilarModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$productsService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/service/productsService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$imageUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/imageUtils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$productMapper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/productMapper.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$findSimilarModal$2f$FindSimilarModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/findSimilarModal/FindSimilarModal.styles.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/locale.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/lib/locale.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$slug$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/slug.ts [app-ssr] (ecmascript)");
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
const FindSimilarModal = ({ isOpen, onClose, product })=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeLocale"])(params?.locale);
    const modalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (product.subcategory?.name) {
            return `Similar in ${product.subcategory.name}`;
        }
        if (product.category?.name) {
            return `Similar in ${product.category.name}`;
        }
        return 'Similar items';
    }, [
        product.category?.name,
        product.subcategory?.name
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) return;
        const load = async ()=>{
            setLoading(true);
            setError('');
            try {
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$productsService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listProducts"])({
                    subcategory_id: product.subcategory_id || undefined,
                    page: 1,
                    page_size: 8
                });
                const mapped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$productMapper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapProductDtosToModels"])(response.items);
                const filtered = mapped.filter((item)=>item.id !== product.id);
                setItems(filtered);
            } catch  {
                setError('Unable to load similar products.');
            } finally{
                setLoading(false);
            }
        };
        load();
    }, [
        isOpen,
        product.category_id,
        product.id,
        product.subcategory_id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) return;
        const onKeyDown = (event)=>{
            if (event.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', onKeyDown);
        return ()=>window.removeEventListener('keydown', onKeyDown);
    }, [
        isOpen,
        onClose
    ]);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$findSimilarModal$2f$FindSimilarModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModalOverlay"], {
        onClick: (event)=>{
            if (event.target === event.currentTarget) onClose();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$findSimilarModal$2f$FindSimilarModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModalCard"], {
            ref: modalRef,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$findSimilarModal$2f$FindSimilarModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModalHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$findSimilarModal$2f$FindSimilarModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModalTitle"], {
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/findSimilarModal/FindSimilarModal.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$findSimilarModal$2f$FindSimilarModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CloseButton"], {
                            onClick: onClose,
                            "aria-label": "Close",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/findSimilarModal/FindSimilarModal.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/findSimilarModal/FindSimilarModal.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$findSimilarModal$2f$FindSimilarModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModalBody"], {
                    children: [
                        loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$findSimilarModal$2f$FindSimilarModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatusText"], {
                            children: "Loading similar items..."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/findSimilarModal/FindSimilarModal.tsx",
                            lineNumber: 106,
                            columnNumber: 23
                        }, ("TURBOPACK compile-time value", void 0)),
                        !loading && error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$findSimilarModal$2f$FindSimilarModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatusText"], {
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/findSimilarModal/FindSimilarModal.tsx",
                            lineNumber: 107,
                            columnNumber: 33
                        }, ("TURBOPACK compile-time value", void 0)),
                        !loading && !error && items.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$findSimilarModal$2f$FindSimilarModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatusText"], {
                            children: "No similar items found."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/findSimilarModal/FindSimilarModal.tsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        !loading && !error && items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$findSimilarModal$2f$FindSimilarModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Grid"], {
                            children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$findSimilarModal$2f$FindSimilarModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductCard"], {
                                    onClick: ()=>router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withLocale"])(locale, `/product/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$slug$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildProductSlug"])(item.name, item.id)}`)),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$findSimilarModal$2f$FindSimilarModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductImage"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$imageUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getImageUrl"])(item.variant_image) || '/assets/logo.png',
                                                alt: item.name,
                                                fill: true,
                                                sizes: "(max-width: 768px) 50vw, 200px"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/findSimilarModal/FindSimilarModal.tsx",
                                                lineNumber: 126,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/findSimilarModal/FindSimilarModal.tsx",
                                            lineNumber: 125,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$findSimilarModal$2f$FindSimilarModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductName"], {
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/findSimilarModal/FindSimilarModal.tsx",
                                            lineNumber: 135,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$findSimilarModal$2f$FindSimilarModal$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductPrice"], {
                                            children: item.price_new ? `${item.price_new} USD` : `${item.price} USD`
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/findSimilarModal/FindSimilarModal.tsx",
                                            lineNumber: 136,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/findSimilarModal/FindSimilarModal.tsx",
                                    lineNumber: 114,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/findSimilarModal/FindSimilarModal.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/findSimilarModal/FindSimilarModal.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/findSimilarModal/FindSimilarModal.tsx",
            lineNumber: 98,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/findSimilarModal/FindSimilarModal.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = FindSimilarModal;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const Card = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProductCell.styles__Card",
    componentId: "sc-3e0cdb6d-0"
})`
  width: 15rem;
  background: #fff;
  padding: 5px;
  overflow: hidden;
  transition: all 0.3s;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 40vw;
    height: 230px;
  }
`;
const Wrapper = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProductCell.styles__Wrapper",
    componentId: "sc-3e0cdb6d-1"
})`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;
const HoverButtons = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProductCell.styles__HoverButtons",
    componentId: "sc-3e0cdb6d-2"
})`
  width: 80%;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-around;
  gap: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 10;
`;
const FindSimilar = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProductCell.styles__FindSimilar",
    componentId: "sc-3e0cdb6d-3"
})`
  position: absolute;
  display: flex;
  gap: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 10;
`;
const CardImage = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProductCell.styles__CardImage",
    componentId: "sc-3e0cdb6d-4"
})`
  width: 100%;
  aspect-ratio: 4 / 5;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #ffffff;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    z-index: 1;
  }

  ::after {
    box-shadow:
      inset 0 0 30px rgba(0, 0, 0, 0.08),
      inset 0 0 60px rgba(0, 0, 0, 0.05);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    box-shadow:
      inset 0 0 30px rgba(0, 0, 0, 0.08),
      inset 0 0 60px rgba(0, 0, 0, 0.05);
    transition: opacity 0.4s ease;
    z-index: 2;
    pointer-events: none;
  }

  ${HoverButtons} {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
    opacity: 0;
    transition:
      opacity 0.4s ease,
      transform 0.4s ease;
    z-index: 3;
  }

  ${FindSimilar} {
    position: absolute;
    top: 0;
    display: flex;
    right: 0;
    gap: 8px;
    opacity: 0;
    transition:
      opacity 0.4s ease,
      transform 0.4s ease;
    z-index: 3;
  }

  &:hover img {
    transform: scale(1.05);
  }

  &:hover::after {
    opacity: 1;
    background: linear-gradient(
      to top,
      rgba(255, 255, 255, 1) 10%,
      rgba(255, 255, 255, 0) 50%
    );
  }

  &:hover ${HoverButtons} {
    opacity: 1;
    pointer-events: auto;
  }

  &:hover ${FindSimilar} {
    opacity: 1;
    pointer-events: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Content = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProductCell.styles__Content",
    componentId: "sc-3e0cdb6d-5"
})`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Title = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "ProductCell.styles__Title",
    componentId: "sc-3e0cdb6d-6"
})`
  font-size: 0.8em;
  text-transform: uppercase;
  color: #4d4d4d;
  margin: 0;
`;
const PriceContainer = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProductCell.styles__PriceContainer",
    componentId: "sc-3e0cdb6d-7"
})`
  display: flex;
  margin: 5px 0;
  justify-content: start;
  width: 100%;
`;
const Price = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "ProductCell.styles__Price",
    componentId: "sc-3e0cdb6d-8"
})`
  font-size: 1.1em;
  margin: 0;
  font-weight: 700;
`;
const OldPrice = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "ProductCell.styles__OldPrice",
    componentId: "sc-3e0cdb6d-9"
})`
  font-size: 14px;
  text-decoration: line-through;
  color: red;
  margin: 0 5px;
`;
const ButtonContainer = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProductCell.styles__ButtonContainer",
    componentId: "sc-3e0cdb6d-10"
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;
const ButtonWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProductCell.styles__ButtonWrapper",
    componentId: "sc-3e0cdb6d-11"
})`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
`;
const Text = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProductCell.styles__Text",
    componentId: "sc-3e0cdb6d-12"
})`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: top 0.5s;
`;
const Icon = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProductCell.styles__Icon",
    componentId: "sc-3e0cdb6d-13"
})`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: top 0.5s;
`;
const ButtonCompare = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProductCell.styles__ButtonCompare",
    componentId: "sc-3e0cdb6d-14"
})`
  width: 100%;
  height: 35px;
  background: #fff;
  color: #222;
  position: relative;
  border: 1px solid #222;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    background: #222;
    color: #fff;
  }

  @media (max-width: 768px) {
    background-color: #cc0c5c;
    border: none;
  }
`;
const TextCompare = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProductCell.styles__TextCompare",
    componentId: "sc-3e0cdb6d-15"
})`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  font-weight: 500;
  font-family: inherit;
  transition: top 0.5s;

  ${ButtonCompare}:hover & {
    top: -100%;
    color: #fff;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const Overlay = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProductCell.styles__Overlay",
    componentId: "sc-3e0cdb6d-16"
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 237, 237, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
const OverlayIcon = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProductCell.styles__OverlayIcon",
    componentId: "sc-3e0cdb6d-17"
})`
  font-size: 1.5rem;
  color: #e60000;
  font-weight: bold;
`;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/button/Button.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const moveGradient = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyframes"]`
  0% {
    background-position: 0% center;
  }
  50% {
    background-position: 100% center;
  }
  100% {
    background-position: 0% center;
  }
`;
const ButtonBase = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "Button.styles__ButtonBase",
    componentId: "sc-fc3deb8-0"
})`
  font-family: inherit;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 10px;
  font-size: 17px;
  font-weight: 500;
  padding-inline: 0.8rem;
  padding-block: 0.8rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all 0.4s ease;
  border: none;

  ${({ $variant, $primaryColor })=>$variant === 'primary' && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
      background-size: 300% 300% !important;
      background: ${$primaryColor} 0 center;
      color: white;
      border: none;

      &:hover {
        animation: ${moveGradient} 6s ease-in-out infinite;
      }
    `}

  ${({ $variant, $primaryColorFlat, $secondaryColor })=>$variant === 'secondary' && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
      background-color: white;
      color: ${$secondaryColor};
      border: 1px solid ${$secondaryColor};

      &:hover {
        background-color: #f8f8f8;
        color: ${$primaryColorFlat};
      }
    `}

  ${({ $variant, $primaryColorFlat, $secondaryColor })=>$variant === 'tertiary' && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
      background: none;
      color: ${$secondaryColor};
      border: none;
      transition: color 0.3s ease;

      &:hover {
        color: ${$primaryColorFlat};
      }
    `}

  ${({ $variant })=>$variant === 'link' && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
      background: none;
      color: #001f3f;
      border: none;
      text-decoration: none;
      padding: 0.5rem 0;
      font-size: 1rem;
      font-weight: 500;
      transition: all 0.3s ease;
      border-radius: 0;
      flex-direction: row;
      align-items: center;
      gap: 0.5rem;
      position: relative;

      &:hover {
        color: #001f3f;

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background-color: #001f3f;
          transform: scaleX(1);
          transition: transform 0.3s ease;
        }
      }

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
        background-color: #001f3f;
        transform: scaleX(0);
        transition: transform 0.3s ease;
      }
    `}
`;
const IconWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Button.styles__IconWrapper",
    componentId: "sc-fc3deb8-1"
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;

  svg,
  img {
    width: 2rem;
    height: 2rem;
    object-fit: contain;
  }

  svg,
  svg * {
    stroke: currentColor !important;
    fill: currentColor !important;
  }

  img {
    ${({ iconColor })=>iconColor === '#ffffff' ? 'filter: brightness(0) invert(1);' : iconColor === '#001f3f' ? 'filter: invert(11%) sepia(33%) saturate(3111%) hue-rotate(178deg) brightness(98%) contrast(104%);' : ''};
  }

  ${({ $variant })=>$variant === 'primary' && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
      svg,
      img {
        color: white;
        fill: white;
      }
    `}
  ${({ $variant })=>$variant === 'secondary' && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
      svg,
      img {
        color: white;
        fill: white;
      }
    `}
  ${({ $variant, $secondaryColor })=>$variant === 'tertiary' && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
      svg,
      img {
        width: 1.25rem;
        height: 1.25rem;
        color: ${$secondaryColor};
        fill: ${$secondaryColor};
      }
    `}
  ${({ $variant })=>$variant === 'link' && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
      svg,
      img {
        width: 1rem;
        height: 1rem;
      }
    `}
`;
const TextWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Button.styles__TextWrapper",
    componentId: "sc-fc3deb8-2"
})`
  font-size: ${({ $hasIcon, $variant })=>$variant === 'link' ? '1rem' : $hasIcon ? '0.7rem' : '1rem'};
  margin: 0;
  padding-top: ${({ $variant })=>$variant === 'link' ? '0' : '0.1rem'};
  text-align: center;
  line-height: 1.2;
  width: max-content;
`;
const CountBadge = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Button.styles__CountBadge",
    componentId: "sc-fc3deb8-3"
})`
  position: absolute;
  top: 0.1rem;
  right: 0.1rem;
  background: ${({ $primaryColor })=>$primaryColor};
  color: black;
  font-size: 10px;
  font-weight: bold;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/button/Button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$button$2f$Button$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/button/Button.styles.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$hooks$2f$useThemeColors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/hooks/useThemeColors.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const Button = ({ variant, children, onClick, icon, badgeContent, iconColor })=>{
    const { primaryColor, primaryColorFlat, secondaryColor } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$hooks$2f$useThemeColors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useThemeColors"])();
    const defaultLinkIcon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M5 12H19M12 5L19 12L12 19",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/button/Button.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/button/Button.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
    const displayIcon = icon || (variant === 'link' ? defaultLinkIcon : null);
    const hasIcon = !!displayIcon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$button$2f$Button$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonBase"], {
        $variant: variant,
        $primaryColor: primaryColor,
        $primaryColorFlat: primaryColorFlat,
        $secondaryColor: secondaryColor,
        $hasIcon: hasIcon,
        onClick: onClick,
        children: [
            badgeContent !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$button$2f$Button$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CountBadge"], {
                $primaryColor: primaryColor,
                children: badgeContent
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/button/Button.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            variant === 'link' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$button$2f$Button$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextWrapper"], {
                        $hasIcon: hasIcon,
                        $variant: variant,
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/button/Button.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    displayIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$button$2f$Button$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconWrapper"], {
                        $variant: variant,
                        $secondaryColor: secondaryColor,
                        iconColor: iconColor,
                        children: displayIcon
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/button/Button.tsx",
                        lineNumber: 70,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    displayIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$button$2f$Button$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconWrapper"], {
                        $variant: variant,
                        $secondaryColor: secondaryColor,
                        iconColor: iconColor,
                        children: displayIcon
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/button/Button.tsx",
                        lineNumber: 82,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$button$2f$Button$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextWrapper"], {
                        $hasIcon: hasIcon,
                        $variant: variant,
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/button/Button.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/button/Button.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Button;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$imageUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/imageUtils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$findSimilarModal$2f$FindSimilarModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/findSimilarModal/FindSimilarModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$productCell$2f$ProductCell$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.styles.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$button$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/button/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/locale.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/lib/locale.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$slug$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/slug.ts [app-ssr] (ecmascript)");
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
const ProductCell = ({ product })=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeLocale"])(params?.locale);
    const [isSimilarOpen, setIsSimilarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const imageSrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$imageUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getImageUrl"])(product.variant_image) || '/assets/logo.png';
    const handleProductDetailNavigation = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withLocale"])(locale, `/product/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$slug$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildProductSlug"])(product.name, product.id)}`));
    };
    const handleAddToCart = ()=>{
        const stored = localStorage.getItem('cartProducts');
        let cartItems = [];
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].bagId) {
                    cartItems = parsed;
                } else {
                    cartItems = parsed.map((p, index)=>({
                            bagId: `bag-${Date.now()}-${index}-${p.id}`,
                            product: p,
                            quantity: 1
                        }));
                }
            } catch  {
                cartItems = [];
            }
        }
        const existingItem = cartItems.find((item)=>item.product.id === product.id);
        if (existingItem) {
            const updated = cartItems.filter((item)=>item.bagId !== existingItem.bagId);
            localStorage.setItem('cartProducts', JSON.stringify(updated));
        } else {
            const newItem = {
                bagId: `bag-${Date.now()}-${product.id}`,
                product,
                quantity: 1
            };
            cartItems.push(newItem);
            localStorage.setItem('cartProducts', JSON.stringify(cartItems));
        }
        window.dispatchEvent(new Event('cartUpdated'));
    };
    const handleLike = ()=>{
        const stored = localStorage.getItem('likedProducts');
        let likedProducts = [];
        if (stored) {
            try {
                likedProducts = JSON.parse(stored);
            } catch  {
                likedProducts = [];
            }
        }
        const existingIndex = likedProducts.findIndex((p)=>p.id === product.id);
        if (existingIndex !== -1) {
            likedProducts.splice(existingIndex, 1);
        } else {
            likedProducts.push(product);
        }
        localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
        window.dispatchEvent(new Event('likedUpdated'));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$productCell$2f$ProductCell$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        onClick: handleProductDetailNavigation,
        children: [
            !product.availability && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$productCell$2f$ProductCell$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$productCell$2f$ProductCell$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OverlayIcon"], {
                    children: "Unavailable"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx",
                    lineNumber: 118,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx",
                lineNumber: 117,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$productCell$2f$ProductCell$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Wrapper"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$productCell$2f$ProductCell$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardImage"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$productCell$2f$ProductCell$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FindSimilar"], {
                                onClick: (e)=>e.stopPropagation(),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$button$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    variant: "tertiary",
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$productCell$2f$ProductCell$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HoverButtons"], {
                                onClick: (e)=>e.stopPropagation(),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$button$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "tertiary",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/assets/plus.svg",
                                            alt: "cart",
                                            width: 16,
                                            height: 16
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx",
                                            lineNumber: 150,
                                            columnNumber: 17
                                        }, void 0),
                                        onClick: ()=>setIsSimilarOpen(true),
                                        children: "Find Similar"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$button$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "tertiary",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$productCell$2f$ProductCell$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$productCell$2f$ProductCell$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
                                children: product.name
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$productCell$2f$ProductCell$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PriceContainer"], {
                                children: product.price_new ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$productCell$2f$ProductCell$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Price"], {
                                            children: [
                                                product.price_new,
                                                " USD"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx",
                                            lineNumber: 182,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$productCell$2f$ProductCell$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OldPrice"], {
                                            children: [
                                                product.price,
                                                " USD"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx",
                                            lineNumber: 183,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$productCell$2f$ProductCell$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Price"], {
                                    children: [
                                        product.price,
                                        " USD"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$findSimilarModal$2f$FindSimilarModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isSimilarOpen,
                onClose: ()=>setIsSimilarOpen(false),
                product: product
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ProductCell;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/productsTrending/ProductsTrending.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const BestsellerCarousel = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProductsTrending.styles__BestsellerCarousel",
    componentId: "sc-809f1d83-0"
})`
  margin: 5rem 0;
  padding: 0 8rem;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const TitleContainer = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProductsTrending.styles__TitleContainer",
    componentId: "sc-809f1d83-1"
})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  align-items: flex-end;
`;
const ScrollableSwiper = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProductsTrending.styles__ScrollableSwiper",
    componentId: "sc-809f1d83-2"
})`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: visible;
  scroll-behavior: smooth;
  gap: 16px;
  margin: 0 50px;
  padding: 30px 10px 30px 20px;

  &::-webkit-scrollbar {
    display: none;
  }

  > * {
    flex: 0 0 auto;
  }
`;
const ArrowButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "ProductsTrending.styles__ArrowButton",
    componentId: "sc-809f1d83-3"
})`
  position: absolute;
  top: 50%;
  border: none;
  background: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
  transform: translateY(-50%);
  transition:
    background-color 0.3s,
    transform 0.3s;

  ${({ $direction })=>$direction === 'left' && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
      left: 8px;
    `}
  ${({ $direction })=>$direction === 'right' && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
      right: 8px;
    `}
  &:hover {
    background-color: ${({ $primaryColor })=>$primaryColor};

    svg {
      stroke: #001f3f;
    }
  }
`;
const ArrowSvg = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "ProductsTrending.styles__ArrowSvg",
    componentId: "sc-809f1d83-4"
})`
  width: 24px;
  height: 24px;
  color: #b7b7b7;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
`;
const BestsellerTitle = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "ProductsTrending.styles__BestsellerTitle",
    componentId: "sc-809f1d83-5"
})`
  font-size: 24px;
  font-weight: bold;
  color: ${({ $secondaryColor })=>$secondaryColor};
  text-align: center;
  margin: 0;
`;
const ProductType = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "ProductsTrending.styles__ProductType",
    componentId: "sc-809f1d83-6"
})`
  font-size: 18px;
  font-style: italic;
  color: ${({ $secondaryColor })=>$secondaryColor};
  text-align: center;
  vertical-align: bottom;
  margin: 0;
`;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/productsTrending/ProductsTrending.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$productCell$2f$ProductCell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$productsTrending$2f$ProductsTrending$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/productsTrending/ProductsTrending.styles.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const ProductsTrending = ({ productType, primaryColor, secondaryColor, data })=>{
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scroll = (direction)=>{
        if (containerRef.current) {
            const scrollAmount = direction === 'left' ? -200 : 200;
            containerRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$productsTrending$2f$ProductsTrending$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BestsellerCarousel"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$productsTrending$2f$ProductsTrending$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TitleContainer"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$productsTrending$2f$ProductsTrending$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BestsellerTitle"], {
                        $secondaryColor: secondaryColor,
                        children: t('trending')
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/productsTrending/ProductsTrending.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$productsTrending$2f$ProductsTrending$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductType"], {
                        $secondaryColor: secondaryColor,
                        children: productType
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/productsTrending/ProductsTrending.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/productsTrending/ProductsTrending.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$productsTrending$2f$ProductsTrending$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowButton"], {
                $direction: "left",
                onClick: ()=>scroll('left'),
                $primaryColor: primaryColor,
                style: {
                    marginLeft: '8rem'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$productsTrending$2f$ProductsTrending$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowSvg"], {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M15.75 19.5L8.25 12l7.5-7.5"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/productsTrending/ProductsTrending.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/productsTrending/ProductsTrending.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/productsTrending/ProductsTrending.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$productsTrending$2f$ProductsTrending$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollableSwiper"], {
                ref: containerRef,
                children: data.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$productCell$2f$ProductCell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        product: product
                    }, product.id, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/productsTrending/ProductsTrending.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/productsTrending/ProductsTrending.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$productsTrending$2f$ProductsTrending$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowButton"], {
                $direction: "right",
                onClick: ()=>scroll('right'),
                $primaryColor: primaryColor,
                style: {
                    marginRight: '8rem'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$productsTrending$2f$ProductsTrending$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowSvg"], {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M8.25 4.5L15.75 12l-7.5 7.5"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/productsTrending/ProductsTrending.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/productsTrending/ProductsTrending.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/productsTrending/ProductsTrending.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/productsTrending/ProductsTrending.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ProductsTrending;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryHero/CategoryHero.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const HeroWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].section.withConfig({
    displayName: "CategoryHero.styles__HeroWrapper",
    componentId: "sc-ae814821-0"
})`
  width: 100vw;
  display: flex;
  justify-content: center;
`;
const HeroInner = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CategoryHero.styles__HeroInner",
    componentId: "sc-ae814821-1"
})`
  width: 100%;
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 0;
  height: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`;
const LeftPanel = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CategoryHero.styles__LeftPanel",
    componentId: "sc-ae814821-2"
})`
  background: #ffffff;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 520px;
  max-height: 80vh;

  @media (max-width: 1024px) {
    min-height: 360px;
  }
`;
const MainImage = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CategoryHero.styles__MainImage",
    componentId: "sc-ae814821-3"
})`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  img {
    object-fit: cover;
    object-position: center;
  }
`;
const RightPanel = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CategoryHero.styles__RightPanel",
    componentId: "sc-ae814821-4"
})`
  background: #ffffff;
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  padding: 13vh 10vh 7vh 10vh;
  width: 100%;
  height: 100%;

  @media (max-width: 1024px) {
    padding: 60px 40px;
    min-height: unset;
  }
`;
const SuperTitle = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h1.withConfig({
    displayName: "CategoryHero.styles__SuperTitle",
    componentId: "sc-ae814821-5"
})`
  font-family: 'GFS Didot', serif;
  font-size: 72px;
  line-height: 0.95;
  letter-spacing: -0.02em;
  margin: 0 0 12px 0;
  font-weight: 400;
  color: #3a2521;
  text-align: start;
  align-content: flex-start;

  @media (max-width: 1200px) {
    font-size: 56px;
  }
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;
const Description = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "CategoryHero.styles__Description",
    componentId: "sc-ae814821-6"
})`
  font-family: 'EB Garamond', serif;
  margin: 0 0 20px 0;
  font-size: 18px;
  line-height: 1.6;
  color: #6e6865;
  align-content: flex-start;
  text-align: end;
  flex: 1;
`;
const InfoRow = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CategoryHero.styles__InfoRow",
    componentId: "sc-ae814821-7"
})`
  display: flex;
  flex-direction: row;
  gap: 10%;
  padding: 0 15px;

  > *:first-child {
    flex: 0 0 50%;
  }

  > *:last-child {
    flex: 0 0 40%;
  }
`;
const ProductsStrip = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CategoryHero.styles__ProductsStrip",
    componentId: "sc-ae814821-8"
})`
  display: flex;
  gap: 30px;
  margin: 24px 0;
  overflow-x: auto;
  padding: 8px 0;
  height: fit-content;
  justify-content: space-between;

  @media (max-width: 768px) {
    gap: 12px;
  }
`;
const CTARow = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CategoryHero.styles__CTARow",
    componentId: "sc-ae814821-9"
})`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  margin-top: auto;
  padding-top: 24px;
  flex-wrap: wrap;
  padding: 0 15px;
`;
const Eyebrow = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CategoryHero.styles__Eyebrow",
    componentId: "sc-ae814821-10"
})`
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(255, 255, 255, 0.9);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  font-family: 'EB Garamond', serif;
  color: #3a2521;
  z-index: 1;
`;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryHero/CategoryHero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryHero$2f$CategoryHero$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryHero/CategoryHero.styles.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$button$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/button/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$productCell$2f$ProductCell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/productCell/ProductCell.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
const CategoryHero = ({ categoryTagline, categoryDescription, featuredProducts, mainImage, mainImageAlt = 'Category hero image', onCtaClick = ()=>{}, ctaText = 'Shop now', categoryLabel, className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryHero$2f$CategoryHero$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeroWrapper"], {
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryHero$2f$CategoryHero$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeroInner"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryHero$2f$CategoryHero$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LeftPanel"], {
                    children: [
                        categoryLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryHero$2f$CategoryHero$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Eyebrow"], {
                            children: categoryLabel
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryHero/CategoryHero.tsx",
                            lineNumber: 48,
                            columnNumber: 28
                        }, ("TURBOPACK compile-time value", void 0)) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryHero$2f$CategoryHero$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MainImage"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: mainImage,
                                alt: mainImageAlt,
                                fill: true,
                                sizes: "(max-width: 1024px) 100vw, 50vw",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryHero/CategoryHero.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryHero/CategoryHero.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryHero/CategoryHero.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryHero$2f$CategoryHero$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RightPanel"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryHero$2f$CategoryHero$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InfoRow"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryHero$2f$CategoryHero$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SuperTitle"], {
                                    children: categoryTagline
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryHero/CategoryHero.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryHero$2f$CategoryHero$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
                                    children: categoryDescription
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryHero/CategoryHero.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryHero/CategoryHero.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryHero$2f$CategoryHero$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductsStrip"], {
                            children: (featuredProducts || []).slice(0, 4).map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$productCell$2f$ProductCell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    product: product
                                }, String(product.id), false, {
                                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryHero/CategoryHero.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryHero/CategoryHero.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryHero$2f$CategoryHero$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CTARow"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$button$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                variant: 'link',
                                onClick: onCtaClick,
                                children: ctaText
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryHero/CategoryHero.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryHero/CategoryHero.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryHero/CategoryHero.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryHero/CategoryHero.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryHero/CategoryHero.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CategoryHero;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryCell/CategoryCell.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CellButton",
    ()=>CellButton,
    "CellDescription",
    ()=>CellDescription,
    "CellTitle",
    ()=>CellTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const CellButton = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "CategoryCell.styles__CellButton",
    componentId: "sc-42d5b89c-0"
})`
  position: relative;
  border: none;
  width: 100%;
  min-height: clamp(320px, 32vw, 480px);
  border-radius: 0;
  padding: 2.25rem 2rem;
  text-align: center;
  cursor: pointer;
  color: #ffffff;
  background-image: ${({ $imageUrl })=>`linear-gradient(rgba(11, 27, 58, 0.62), rgba(11, 27, 58, 0.62)), url(${$imageUrl})`};
  background-size: cover;
  background-position: center;
  box-shadow: 0 18px 45px rgba(11, 27, 58, 0.22);
  transition: transform 240ms ease;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(11, 27, 58, 0.75) 0%,
      rgba(11, 27, 58, 0.2) 55%,
      rgba(11, 27, 58, 0) 100%
    );
    opacity: 0;
    transform: translateY(8px);
    transition:
      opacity 420ms ease,
      transform 420ms ease;
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  &:hover,
  &:focus-visible {
    transform: translateY(-2px);
  }

  &:hover::after,
  &:focus-visible::after {
    opacity: 1;
    transform: translateY(0);
  }

  &:focus-visible {
    outline: none;
    box-shadow:
      0 26px 65px rgba(11, 27, 58, 0.28),
      0 0 0 2px rgba(255, 255, 255, 0.7),
      0 0 0 6px rgba(11, 27, 58, 0.5);
  }

  @media (max-width: 900px) {
    min-height: clamp(320px, 70vw, 520px);
    padding: 1.75rem 1.5rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &::after {
      transition: none;
    }
  }
`;
const CellTitle = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h3.withConfig({
    displayName: "CategoryCell.styles__CellTitle",
    componentId: "sc-42d5b89c-1"
})`
  margin: 0 0 0.5rem;
  font-size: 1.8rem;
  font-family: 'Cormorant Garamond', 'EB Garamond', 'GFS Didot', serif;
  font-weight: 400;
  letter-spacing: -0.02em;
`;
const CellDescription = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "CategoryCell.styles__CellDescription",
    componentId: "sc-42d5b89c-2"
})`
  margin: 0;
  font-size: 0.9rem;
  font-family: 'GFS Didot', serif;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.5;
`;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryCell/CategoryCell.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryCell$2f$CategoryCell$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryCell/CategoryCell.styles.ts [app-ssr] (ecmascript)");
;
;
const CategoryCell = ({ title, description, imageUrl, onClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryCell$2f$CategoryCell$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CellButton"], {
        type: "button",
        onClick: onClick,
        $imageUrl: imageUrl,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryCell$2f$CategoryCell$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CellTitle"], {
                children: title
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryCell/CategoryCell.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryCell$2f$CategoryCell$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CellDescription"], {
                children: description
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryCell/CategoryCell.tsx",
                lineNumber: 20,
                columnNumber: 22
            }, ("TURBOPACK compile-time value", void 0)) : null
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryCell/CategoryCell.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CategoryCell;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/templateSection/TemplateSection.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const INK = 'rgba(9, 28, 85, 0.89)';
const INK_MUTED = 'rgba(75, 34, 0, 0.89)';
const INK_SOFT = 'rgba(63, 58, 54, 0.58)';
const PORCELAIN = '#F7EFE9';
const CARD_SURFACE = 'rgba(255, 255, 255, 0.85)';
const ACCENT = '#B79A6A';
const variantStyles = {
    staggered: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
    grid-template-columns: repeat(3, minmax(0, 1fr));
    row-gap: 3.5rem;
    column-gap: 2.75rem;
    align-items: start;
    justify-items: center;

    > div:nth-child(1) {
      transform: translateY(18px);
    }

    > div:nth-child(2) {
      transform: translateY(-6px);
    }

    > div:nth-child(3) {
      transform: translateY(30px);
    }

    @media (max-width: 900px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));

      > div {
        transform: none;
      }
    }

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  `,
    split_focus: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2.75rem;
    align-items: center;
    justify-items: center;

    > div:nth-child(2) {
      transform: translateY(-18px) scale(1.08);
      max-width: 320px;
    }

    > div:nth-child(1),
    > div:nth-child(3) {
      opacity: 0.9;
    }

    @media (max-width: 900px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));

      > div:nth-child(2) {
        transform: none;
        max-width: 260px;
      }
    }

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  `,
    asymmetric_row: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
    grid-template-columns:
      minmax(220px, 320px) minmax(180px, 240px)
      minmax(180px, 240px);
    gap: 3rem;
    align-items: start;
    justify-items: center;

    > div:nth-child(1) {
      max-width: 320px;
      justify-self: end;
    }

    > div:nth-child(2) {
      margin-top: 1.5rem;
    }

    > div:nth-child(3) {
      margin-top: 2.75rem;
      justify-self: start;
    }

    @media (max-width: 900px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));

      > div {
        margin-top: 0;
        justify-self: center;
      }
    }

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  `,
    overlap: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0;
    align-items: center;
    justify-items: center;

    > div {
      position: relative;
    }

    > div:nth-child(2) {
      margin: 0 -28px;
      z-index: 2;
    }

    > div:nth-child(1),
    > div:nth-child(3) {
      z-index: 1;
    }

    > div:nth-child(1) {
      transform: translateX(8px);
    }

    > div:nth-child(3) {
      transform: translateX(-8px);
    }

    @media (max-width: 900px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 2rem;

      > div:nth-child(2) {
        margin: 0;
      }

      > div:nth-child(1),
      > div:nth-child(3) {
        transform: none;
      }
    }

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  `,
    editorial_grid: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 3.25rem 3rem;
    align-items: start;
    justify-items: center;

    > div {
      max-width: 230px;
    }

    > div:nth-child(2) {
      padding-top: 1.2rem;
    }

    @media (max-width: 900px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  `
};
const Section = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].section.withConfig({
    displayName: "TemplateSection.styles__Section",
    componentId: "sc-38e96bb1-0"
})`
  width: 100%;
  padding: 5rem 0.3rem 2.5rem;
  box-sizing: border-box;
  text-align: center;

  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.38), rgba(255, 255, 255, 0)),
    ${PORCELAIN};
`;
const HeaderRow = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TemplateSection.styles__HeaderRow",
    componentId: "sc-38e96bb1-1"
})`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;
const TitleBlock = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TemplateSection.styles__TitleBlock",
    componentId: "sc-38e96bb1-2"
})`
  max-width: 680px;
  margin: 0 auto;
`;
const TitleRow = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TemplateSection.styles__TitleRow",
    componentId: "sc-38e96bb1-3"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
const TitleLine = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "TemplateSection.styles__TitleLine",
    componentId: "sc-38e96bb1-4"
})`
  flex: 1;
  max-width: 120px;
  height: 1px;
  background-color: ${ACCENT};
  opacity: 0.5;

  @media (max-width: 640px) {
    max-width: 60px;
  }
`;
const Title = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h2.withConfig({
    displayName: "TemplateSection.styles__Title",
    componentId: "sc-38e96bb1-5"
})`
  margin: 0;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 500;
  font-family: 'Canela', 'Cormorant Garamond', 'EB Garamond', serif;
  letter-spacing: -0.03em;
  color: ${INK};
`;
const Description = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "TemplateSection.styles__Description",
    componentId: "sc-38e96bb1-6"
})`
  margin: 0 auto;
  max-width: 56ch;
  font-size: 1rem;
  font-family: 'Canela', 'Cormorant Garamond', 'EB Garamond', serif;
  line-height: 1.2;
  color: ${INK_MUTED};
`;
const CardsGrid = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TemplateSection.styles__CardsGrid",
    componentId: "sc-38e96bb1-7"
})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 200px));
  gap: 1.1rem;
  justify-content: center;
  max-width: 680px;
  margin: 0 auto 3rem;
  margin-bottom: 3rem;

  ${({ $variant })=>$variant ? variantStyles[$variant] : null}
`;
const Card = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TemplateSection.styles__Card",
    componentId: "sc-38e96bb1-8"
})`
  max-width: 260px;
  margin: 0 auto;
  padding: 1.25rem 0.4rem 1rem;
  text-align: center;

  font-size: 0.95rem;
  line-height: 1.6;
  color: ${INK_SOFT};

  img {
    width: 100%;
    max-width: 220px;
    height: 200px;
    margin: 0 auto 0.9rem;
    display: block;
    object-fit: cover;
    border-radius: 12px;
  }

  h3 {
    margin: 0 0 0.5rem;
    font-size: 1.2rem;
    font-weight: 500;
    font-family: 'Canela', 'Cormorant Garamond', 'EB Garamond', serif;
    letter-spacing: -0.01em;
    color: ${INK};
  }

  h3::after {
    content: '';
    display: block;
    width: 26px;
    height: 1px;
    margin: 0.45rem auto 0;
    background-color: ${ACCENT};
    opacity: 0.65;
  }

  p {
    margin: 0;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    padding: 0 0.9rem;
    font-size: 1rem;
    font-family: 'Canela', 'Cormorant Garamond', 'EB Garamond', serif;
    line-height: 1.2;
    color: ${INK_MUTED};
    background: ${CARD_SURFACE};

    transform: translateY(-6px);
    transition:
      max-height 220ms ease,
      opacity 220ms ease,
      transform 220ms ease,
      padding 220ms ease;
  }

  &:hover p,
  &:focus-within p,
  h3:hover + p {
    max-height: 120px;
    opacity: 1;
    transform: translateY(0);
    padding: 0.35rem 0.6rem 0.4rem;
  }

  @media (prefers-reduced-motion: reduce) {
    p {
      transition: none;
    }
  }
`;
const SubcategoryGrid = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TemplateSection.styles__SubcategoryGrid",
    componentId: "sc-38e96bb1-9"
})`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 4px;
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/templateSection/TemplateSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$button$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/ui/styles/button/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryCell$2f$CategoryCell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryCell/CategoryCell.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$templateSection$2f$TemplateSection$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/templateSection/TemplateSection.styles.ts [app-ssr] (ecmascript)");
;
;
;
;
const TemplateSection = ({ title, description, buttonLabel, onButtonClick, cards, subcategoryItems, layoutVariant })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$templateSection$2f$TemplateSection$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$templateSection$2f$TemplateSection$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeaderRow"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$templateSection$2f$TemplateSection$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TitleBlock"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$templateSection$2f$TemplateSection$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TitleRow"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$templateSection$2f$TemplateSection$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TitleLine"], {
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/templateSection/TemplateSection.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$templateSection$2f$TemplateSection$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/templateSection/TemplateSection.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$templateSection$2f$TemplateSection$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TitleLine"], {
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/templateSection/TemplateSection.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/templateSection/TemplateSection.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$templateSection$2f$TemplateSection$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/templateSection/TemplateSection.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/templateSection/TemplateSection.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    buttonLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$ui$2f$styles$2f$button$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        variant: "link",
                        onClick: onButtonClick,
                        children: buttonLabel
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/templateSection/TemplateSection.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : null
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/templateSection/TemplateSection.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            cards && cards.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$templateSection$2f$TemplateSection$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardsGrid"], {
                $variant: layoutVariant,
                children: cards.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$templateSection$2f$TemplateSection$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        children: card
                    }, `card-${index}`, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/templateSection/TemplateSection.tsx",
                        lineNumber: 69,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/templateSection/TemplateSection.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : null,
            subcategoryItems && subcategoryItems.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$templateSection$2f$TemplateSection$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubcategoryGrid"], {
                children: subcategoryItems.slice(0, 4).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryCell$2f$CategoryCell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        title: item.title,
                        description: item.description,
                        imageUrl: item.imageUrl,
                        onClick: item.onClick
                    }, item.title, false, {
                        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/templateSection/TemplateSection.tsx",
                        lineNumber: 77,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/templateSection/TemplateSection.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : null
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/templateSection/TemplateSection.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = TemplateSection;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/WhyJasmineCrafted.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$templateSection$2f$TemplateSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/templateSection/TemplateSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$hooks$2f$useCategories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/hooks/useCategories.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/locale.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/lib/locale.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const WhyJasmineCrafted = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeLocale"])(params?.locale);
    const { categories } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$hooks$2f$useCategories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCategories"])();
    const cards = [
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    children: "Handmade"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/WhyJasmineCrafted.tsx",
                    lineNumber: 17,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Every stitch tells a story, crafted by hand with care and patience."
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/WhyJasmineCrafted.tsx",
                    lineNumber: 18,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, "handmade", true, {
            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/WhyJasmineCrafted.tsx",
            lineNumber: 16,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    children: "Timeless"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/WhyJasmineCrafted.tsx",
                    lineNumber: 21,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Designed to age beautifully, your everyday companion, season after season."
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/WhyJasmineCrafted.tsx",
                    lineNumber: 22,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, "timeless", true, {
            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/WhyJasmineCrafted.tsx",
            lineNumber: 20,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    children: "Personalizable"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/WhyJasmineCrafted.tsx",
                    lineNumber: 28,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Choose your colors, details, and finish, to match your style or the moment."
                }, void 0, false, {
                    fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/WhyJasmineCrafted.tsx",
                    lineNumber: 29,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, "personalizable", true, {
            fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/WhyJasmineCrafted.tsx",
            lineNumber: 27,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    ];
    const subcategoryItems = categories.flatMap((category)=>(category.subcategories || []).map((subcategory, index)=>({
                title: subcategory.name,
                description: category.name,
                imageUrl: `/assets/bag${index % 4 + 1}.webp`,
                onClick: ()=>router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withLocale"])(locale, `/products?category_id=${category.id}&subcategory_id=${subcategory.id}`))
            }))).slice(0, 4);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$templateSection$2f$TemplateSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        title: "Made to stay with you",
        description: "Made for the moments you keep, not just the ones you gift.",
        layoutVariant: "staggered",
        cards: cards,
        subcategoryItems: subcategoryItems
    }, void 0, false, {
        fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/WhyJasmineCrafted.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = WhyJasmineCrafted;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/LandingScreen.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LandingScreenContainer",
    ()=>LandingScreenContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const LandingScreenContainer = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LandingScreen.styles__LandingScreenContainer",
    componentId: "sc-70b8bc6c-0"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;
}),
"[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/LandingScreen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LandingScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/header/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$heroSlide$2f$HeroSlide$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/heroSlide/HeroSlide.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$footer$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/footer/Footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$productsTrending$2f$ProductsTrending$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/productsTrending/ProductsTrending.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryHero$2f$CategoryHero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/categoryHero/CategoryHero.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$templateSection$2f$TemplateSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/components/templateSection/TemplateSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$screen$2f$landing$2f$WhyJasmineCrafted$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/WhyJasmineCrafted.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$screen$2f$landing$2f$LandingScreen$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/LandingScreen.styles.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$hooks$2f$useThemeColors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/presentation/hooks/useThemeColors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$productsService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/service/productsService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$productMapper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/productMapper.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/locale.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/lib/locale.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$productFields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Dev/jasmine/frontend/src/utils/productFields.ts [app-ssr] (ecmascript)");
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
;
const HeaderComponent = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$header$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
function LandingScreen({ initialTrendingBagsProducts = [], initialTrendingDressProducts = [] }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeLocale"])(params?.locale);
    const { primaryColor, secondaryColor } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$hooks$2f$useThemeColors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useThemeColors"])();
    const [trendingBagsProducts, setTrendingBagsProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialTrendingBagsProducts);
    const [trendingDressProducts, setTrendingDressProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialTrendingDressProducts);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const section = searchParams.get('scrollTo');
        if (!section) return;
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            router.replace((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withLocale"])(locale, '/'));
        }
    }, [
        searchParams,
        router,
        locale
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const hasInitialData = initialTrendingBagsProducts.length > 0 || initialTrendingDressProducts.length > 0;
        if (hasInitialData) return;
        const loadProducts = async ()=>{
            try {
                const [bagsResponse, dressesResponse] = await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$productsService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listProducts"])({
                        page: 1,
                        page_size: 10,
                        fields: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$productFields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRODUCT_CARD_FIELDS"]
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$service$2f$productsService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listProducts"])({
                        page: 1,
                        page_size: 10,
                        fields: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$productFields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRODUCT_CARD_FIELDS"]
                    })
                ]);
                setTrendingBagsProducts((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$productMapper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapProductDtosToModels"])(bagsResponse.items));
                setTrendingDressProducts((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$utils$2f$productMapper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapProductDtosToModels"])(dressesResponse.items));
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        loadProducts();
    }, [
        initialTrendingBagsProducts,
        initialTrendingDressProducts
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$screen$2f$landing$2f$LandingScreen$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LandingScreenContainer"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeaderComponent, {
                primaryColor: primaryColor,
                secondaryColor: secondaryColor
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/LandingScreen.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$heroSlide$2f$HeroSlide$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/LandingScreen.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$screen$2f$landing$2f$WhyJasmineCrafted$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/LandingScreen.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "bestsellers",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$categoryHero$2f$CategoryHero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    categoryTagline: "Carry Elegance",
                    categoryDescription: "Discover our curated collection of premium bags and accessories that blend style with functionality.",
                    featuredProducts: trendingBagsProducts.slice(0, 4),
                    mainImage: "/assets/bag2.jpg",
                    mainImageAlt: "Premium bag collection",
                    categoryLabel: "Featured Collection",
                    ctaText: "Shop Bags",
                    onCtaClick: ()=>router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$lib$2f$locale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withLocale"])(locale, '/products'))
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "deals",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$productsTrending$2f$ProductsTrending$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$templateSection$2f$TemplateSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: "Handmade",
                description: "Every stitch tells a story, crafted by hand with care and patience."
            }, void 0, false, {
                fileName: "[project]/Desktop/Dev/jasmine/frontend/src/presentation/screen/landing/LandingScreen.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "new",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$productsTrending$2f$ProductsTrending$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Dev$2f$jasmine$2f$frontend$2f$src$2f$presentation$2f$components$2f$footer$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
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
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__834c5f7c._.js.map