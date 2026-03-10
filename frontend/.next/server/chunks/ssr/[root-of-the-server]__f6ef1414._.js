module.exports=[56704,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},20635,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/action-async-storage.external.js",()=>require("next/dist/server/app-render/action-async-storage.external.js"))},72719,(a,b,c)=>{"use strict";b.exports=a.r(80693).vendored.contexts.AppRouterContext},38276,(a,b,c)=>{"use strict";b.exports=a.r(80693).vendored.contexts.HooksClientContext},79721,(a,b,c)=>{"use strict";b.exports=a.r(80693).vendored.contexts.ServerInsertedHtml},98879,(a,b,c)=>{"use strict";b.exports=a.r(80693).vendored["react-ssr"].ReactDOM},57968,(a,b,c)=>{"use strict";b.exports=a.r(80693).vendored["react-ssr"].ReactServerDOMTurbopackClient},5365,(a,b,c)=>{b.exports=a.x("process",()=>require("process"))},79717,a=>{"use strict";var b=a.i(1142),c=a.i(96766),d=a.i(61765),e=a.i(75795),f=a.i(38120),g=a.i(85669);let h=f.default.nav.withConfig({displayName:"Breadcrumb.styles__BreadcrumbNav",componentId:"sc-e17aab5a-0"})`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  font-size: 14px;
  white-space: nowrap;
  overflow-x: hidden;
  padding: 2rem 0 1rem 0;
  border-bottom: solid 1px rgba(0, 0, 0, 0.08);
  width: 100%;
  margin-bottom: 2.5rem;
  margin-top: 0;
  font-family: 'Questrial', sans-serif;
`,i=(0,f.default)(g.default).withConfig({displayName:"Breadcrumb.styles__BreadcrumbLink",componentId:"sc-e17aab5a-1"})`
  text-decoration: none;
  color: #001f3f;
  transition: color 0.3s ease;
  font-family: 'Questrial', sans-serif;

  &:hover {
    text-decoration: underline;
    color: #003366;
  }
`,j=f.default.span.withConfig({displayName:"Breadcrumb.styles__BreadcrumbText",componentId:"sc-e17aab5a-2"})`
  color: #001f3f;
`,k=f.default.span.withConfig({displayName:"Breadcrumb.styles__BreadcrumbSeparator",componentId:"sc-e17aab5a-3"})`
  margin: 0 8px;
  color: #dedede;
  font-family: 'Questrial', sans-serif;
`;a.i(56498);var l=a.i(29111);a.s(["default",0,({categoryName:a,subcategoryName:f,productName:g})=>{let m=(0,d.useParams)(),n=(0,d.usePathname)(),o=(0,d.useSearchParams)(),{categories:p}=(0,e.useCategories)(),q=(0,l.normalizeLocale)(m?.locale),r=n.split("/").filter(a=>a),s=r[0]===q?r.slice(1):r,t=g||m.slug,u=o.get("category_id"),v=o.get("subcategory_id"),w=u?Number(u):null,x=v?Number(v):null,y=(0,c.useMemo)(()=>{if(w)return p.find(a=>a.id===w)?.name},[p,w]),z=(0,c.useMemo)(()=>{if(w&&x)return p.find(a=>a.id===w)?.subcategories?.find(a=>a.id===x)?.name},[p,w,x]),A=a||y,B=f||z,C=[];return s.includes("profile")||s.includes("orders")||s.includes("shipping")||s.includes("cart")?(C.push({label:"Home",path:(0,l.withLocale)(q,"/")}),s.includes("profile")&&C.push({label:"Profile",path:(0,l.withLocale)(q,"/profile")}),s.includes("orders")&&C.push({label:"Order History",path:(0,l.withLocale)(q,"/orders")}),s.includes("shipping")&&C.push({label:"Shipping Information",path:(0,l.withLocale)(q,"/shipping")}),s.includes("cart")&&C.push({label:"Cart",path:(0,l.withLocale)(q,"/cart")})):(C.push({label:"Catalog",path:(0,l.withLocale)(q,"/")}),A&&w&&C.push({label:A,path:(0,l.withLocale)(q,`/products?category_id=${w}`)}),B&&A&&w&&x&&C.push({label:B,path:(0,l.withLocale)(q,`/products?category_id=${w}&subcategory_id=${x}`)}),t&&s.includes("product")&&C.push({label:decodeURIComponent(t),path:n})),(0,b.jsx)(h,{children:C.map((a,d)=>{let e=d===C.length-1;return(0,b.jsxs)(c.default.Fragment,{children:[d>0&&(0,b.jsx)(k,{children:"/"}),e?(0,b.jsx)(j,{children:a.label}):(0,b.jsx)(i,{href:a.path,children:a.label})]},d)})})}],79717)},60590,81462,4232,a=>{"use strict";var b=a.i(50404);let c=a=>({...a,category:a.category??null,subcategory:a.subcategory??null,variants:a.variants??[],specifications:a.specifications??{},specifications_detailed:a.specifications_detailed??[]});a.s(["mapProductDtoToModel",0,c,"mapProductDtosToModels",0,a=>a.map(c)],81462);let d=["id","name","price","price_new","price_old","availability","variant_image","currency"],e=[...d,"variant_color_palette","variant_color_name","variants"];a.s(["PRODUCT_CARD_FIELDS",0,d,"PRODUCT_LIST_FIELDS",0,e],4232);var f=a.i(20623);let g=(a={},c={})=>{let{specFilters:d,fields:e,...f}=a,g={...f};return e&&(g.fields=Array.isArray(e)?e.join(","):e),d&&Object.entries(d).forEach(([a,b])=>{g[`spec_${a}`]=b}),b.httpClient.get("products/",{query:g,...c})},h=(a,c={})=>b.httpClient.get(`products/${a}/`,c),i=async(a,b={})=>{let c=(0,f.getProductIdFromSlug)(a);if(c)try{return await h(c,b)}catch{return null}let d=decodeURIComponent(a),e=await g({search:d,page:1,page_size:50},b),i=d.trim().toLowerCase(),j=(0,f.slugify)(d);return e.items.find(a=>{let b=a.name.trim();return!!j&&(0,f.slugify)(b)===j||b.toLowerCase()===i})??null};a.s(["getProduct",0,h,"getProductBySlug",0,i,"listProducts",0,g],60590)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__f6ef1414._.js.map