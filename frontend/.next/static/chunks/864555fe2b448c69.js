(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,27004,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},77018,e=>{"use strict";var t=e.i(66339),a=e.i(26287),r=e.i(53805),i=e.i(59285),n=e.i(72902),o=e.i(85329);let l=n.default.nav.withConfig({displayName:"Breadcrumb.styles__BreadcrumbNav",componentId:"sc-e17aab5a-0"})`
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
`,s=(0,n.default)(o.default).withConfig({displayName:"Breadcrumb.styles__BreadcrumbLink",componentId:"sc-e17aab5a-1"})`
  text-decoration: none;
  color: #001f3f;
  transition: color 0.3s ease;
  font-family: 'Questrial', sans-serif;

  &:hover {
    text-decoration: underline;
    color: #003366;
  }
`,c=n.default.span.withConfig({displayName:"Breadcrumb.styles__BreadcrumbText",componentId:"sc-e17aab5a-2"})`
  color: #001f3f;
`,d=n.default.span.withConfig({displayName:"Breadcrumb.styles__BreadcrumbSeparator",componentId:"sc-e17aab5a-3"})`
  margin: 0 8px;
  color: #dedede;
  font-family: 'Questrial', sans-serif;
`;e.i(9492);var p=e.i(93916);e.s(["default",0,e=>{let{categoryName:n,subcategoryName:o,productName:u}=e,f=(0,r.useParams)(),m=(0,r.usePathname)(),g=(0,r.useSearchParams)(),{categories:h}=(0,i.useCategories)(),y=(0,p.normalizeLocale)(f?.locale),x=m.split("/").filter(e=>e),b=x[0]===y?x.slice(1):x,_=u||f.slug,w=g.get("category_id"),C=g.get("subcategory_id"),v=w?Number(w):null,j=C?Number(C):null,S=(0,a.useMemo)(()=>{if(v)return h.find(e=>e.id===v)?.name},[h,v]),P=(0,a.useMemo)(()=>{if(v&&j)return h.find(e=>e.id===v)?.subcategories?.find(e=>e.id===j)?.name},[h,v,j]),I=n||S,N=o||P,k=[];return b.includes("profile")||b.includes("orders")||b.includes("shipping")||b.includes("cart")?(k.push({label:"Home",path:(0,p.withLocale)(y,"/")}),b.includes("profile")&&k.push({label:"Profile",path:(0,p.withLocale)(y,"/profile")}),b.includes("orders")&&k.push({label:"Order History",path:(0,p.withLocale)(y,"/orders")}),b.includes("shipping")&&k.push({label:"Shipping Information",path:(0,p.withLocale)(y,"/shipping")}),b.includes("cart")&&k.push({label:"Cart",path:(0,p.withLocale)(y,"/cart")})):(k.push({label:"Catalog",path:(0,p.withLocale)(y,"/")}),I&&v&&k.push({label:I,path:(0,p.withLocale)(y,`/products?category_id=${v}`)}),N&&I&&v&&j&&k.push({label:N,path:(0,p.withLocale)(y,`/products?category_id=${v}&subcategory_id=${j}`)}),_&&b.includes("product")&&k.push({label:decodeURIComponent(_),path:m})),(0,t.jsx)(l,{children:k.map((e,r)=>{let i=r===k.length-1;return(0,t.jsxs)(a.default.Fragment,{children:[r>0&&(0,t.jsx)(d,{children:"/"}),i?(0,t.jsx)(c,{children:e.label}):(0,t.jsx)(s,{href:e.path,children:e.label})]},r)})})}],77018)},56680,49633,5211,e=>{"use strict";var t=e.i(44350);let a=e=>({...e,category:e.category??null,subcategory:e.subcategory??null,variants:e.variants??[],specifications:e.specifications??{},specifications_detailed:e.specifications_detailed??[]});e.s(["mapProductDtoToModel",0,a,"mapProductDtosToModels",0,e=>e.map(a)],49633);let r=["id","name","price","price_new","price_old","availability","variant_image","currency"],i=[...r,"variant_color_palette","variant_color_name","variants"];e.s(["PRODUCT_CARD_FIELDS",0,r,"PRODUCT_LIST_FIELDS",0,i],5211);var n=e.i(94387);let o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{specFilters:r,fields:i,...n}=e,o={...n};return i&&(o.fields=Array.isArray(i)?i.join(","):i),r&&Object.entries(r).forEach(e=>{let[t,a]=e;o[`spec_${t}`]=a}),t.httpClient.get("products/",{query:o,...a})},l=function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.httpClient.get(`products/${e}/`,a)},s=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=(0,n.getProductIdFromSlug)(e);if(a)try{return await l(a,t)}catch{return null}let r=decodeURIComponent(e),i=await o({search:r,page:1,page_size:50},t),s=r.trim().toLowerCase(),c=(0,n.slugify)(r);return i.items.find(e=>{let t=e.name.trim();return!!c&&(0,n.slugify)(t)===c||t.toLowerCase()===s})??null};e.s(["getProduct",0,l,"getProductBySlug",0,s,"listProducts",0,o],56680)},77602,e=>{"use strict";var t=e.i(66339),a=e.i(26287),r=e.i(53805),i=e.i(274),n=e.i(56680),o=e.i(98803),l=e.i(49633),s=e.i(16460);e.i(3157);var c=e.i(55062),d=e.i(77018),p=e.i(72902);let u=p.default.div.withConfig({displayName:"ProductScreen.styles__ProductPageContainer",componentId:"sc-c3d1c155-0"})`
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
`,f=p.default.div.withConfig({displayName:"ProductScreen.styles__ProductContent",componentId:"sc-c3d1c155-1"})`
  max-width: 1400px;
  margin: 0 auto;
  padding: 140px 3rem 4rem;
  width: 100%;
`,m=p.default.div.withConfig({displayName:"ProductScreen.styles__ProductMain",componentId:"sc-c3d1c155-2"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 2rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,g=p.default.div.withConfig({displayName:"ProductScreen.styles__ImageSection",componentId:"sc-c3d1c155-3"})`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,h=p.default.div.withConfig({displayName:"ProductScreen.styles__MainImage",componentId:"sc-c3d1c155-4"})`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 8px;
  background: #f9f9f9;
  position: relative;
  overflow: hidden;

  img {
    object-fit: contain;
  }
`,y=p.default.div.withConfig({displayName:"ProductScreen.styles__ThumbnailContainer",componentId:"sc-c3d1c155-5"})`
  display: flex;
  gap: 0.75rem;
  overflow-x: clip;
  padding: 0.5rem 0;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`,x=p.default.button.withConfig({displayName:"ProductScreen.styles__Thumbnail",componentId:"sc-c3d1c155-6"})`
  width: 80px;
  height: 80px;
  border-radius: 6px;
  cursor: pointer;
  border: ${e=>{let{$isActive:t}=e;return t?"2px solid #1a1a1a":"none"}};
  opacity: ${e=>{let{$isActive:t}=e;return t?1:.7}};
  transition: all 0.2s ease;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  padding: 0;
  background: transparent;

  img {
    object-fit: cover;
  }

  &:hover {
    opacity: 1;
    ${e=>{let{$isActive:t}=e;return!t&&"border: 1px solid rgba(0, 0, 0, 0.2);"}}
  }
`,b=p.default.div.withConfig({displayName:"ProductScreen.styles__InfoSection",componentId:"sc-c3d1c155-7"})`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,_=p.default.h1.withConfig({displayName:"ProductScreen.styles__ProductTitle",componentId:"sc-c3d1c155-8"})`
  font-size: 2rem;
  font-weight: 500;
  color: #1a1a1a;
  margin: 0;
  font-family: 'Questrial', sans-serif;
  line-height: 1.3;
`,w=p.default.div.withConfig({displayName:"ProductScreen.styles__PriceContainer",componentId:"sc-c3d1c155-9"})`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`,C=p.default.div.withConfig({displayName:"ProductScreen.styles__Price",componentId:"sc-c3d1c155-10"})`
  font-size: 1.75rem;
  font-weight: 600;
  color: #1a1a1a;
  font-family: 'Questrial', sans-serif;
`,v=p.default.div.withConfig({displayName:"ProductScreen.styles__OldPrice",componentId:"sc-c3d1c155-11"})`
  font-size: 1.25rem;
  font-weight: 400;
  color: #999;
  text-decoration: line-through;
  font-family: 'Questrial', sans-serif;
`,j=p.default.div.withConfig({displayName:"ProductScreen.styles__VariationsSection",componentId:"sc-c3d1c155-12"})`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 1rem;
`,S=p.default.div.withConfig({displayName:"ProductScreen.styles__VariationGroup",componentId:"sc-c3d1c155-13"})`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,P=p.default.label.withConfig({displayName:"ProductScreen.styles__VariationLabel",componentId:"sc-c3d1c155-14"})`
  font-size: 0.95rem;
  font-weight: 500;
  color: #1a1a1a;
  font-family: 'Questrial', sans-serif;
`,I=p.default.div.withConfig({displayName:"ProductScreen.styles__ColorOptions",componentId:"sc-c3d1c155-15"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`,N=p.default.button.withConfig({displayName:"ProductScreen.styles__ColorOption",componentId:"sc-c3d1c155-16"})`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  border: 1.5px solid
    ${e=>{let{$isSelected:t}=e;return t?"#1a1a1a":"#e0e0e0"}};
  border-radius: 8px;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Questrial', sans-serif;
  font-size: 0.875rem;
  color: #1a1a1a;

  &:hover {
    border-color: #1a1a1a;
  }

  &:active {
    transform: scale(0.98);
  }
`,k=p.default.div.withConfig({displayName:"ProductScreen.styles__ColorBox",componentId:"sc-c3d1c155-17"})`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${e=>{let{$colorValue:t}=e;return t}};
  border: 1px solid rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
`,$=p.default.span.withConfig({displayName:"ProductScreen.styles__ColorName",componentId:"sc-c3d1c155-18"})`
  font-weight: 400;
`;p.default.div.withConfig({displayName:"ProductScreen.styles__SizeOptions",componentId:"sc-c3d1c155-19"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`,p.default.button.withConfig({displayName:"ProductScreen.styles__SizeOption",componentId:"sc-c3d1c155-20"})`
  padding: 0.625rem 1.25rem;
  border: 1.5px solid
    ${e=>{let{$isSelected:t}=e;return t?"#1a1a1a":"#e0e0e0"}};
  border-radius: 8px;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Questrial', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: #1a1a1a;
  min-width: 50px;
  text-align: center;

  &:hover {
    border-color: #1a1a1a;
  }

  &:active {
    transform: scale(0.98);
  }
`;let L=p.default.div.withConfig({displayName:"ProductScreen.styles__ActionButtons",componentId:"sc-c3d1c155-21"})`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,M=p.default.button.withConfig({displayName:"ProductScreen.styles__Button",componentId:"sc-c3d1c155-22"})`
  flex: 1;
  min-width: 160px;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Questrial', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  ${e=>{let{$variant:t}=e;return"primary"===t?`
    background: #1a1a1a;
    color: white;
    
    &:hover {
      background: #2a2a2a;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
  `:`
    background: transparent;
    color: #1a1a1a;
    border: 1.5px solid #1a1a1a;
    
    &:hover {
      background: #1a1a1a;
      color: white;
      transform: translateY(-1px);
    }
  `}}

  &:active {
    transform: translateY(0);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`,z=p.default.div.withConfig({displayName:"ProductScreen.styles__ProductInfo",componentId:"sc-c3d1c155-23"})`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
`,O=p.default.div.withConfig({displayName:"ProductScreen.styles__InfoRow",componentId:"sc-c3d1c155-24"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.95rem;
  font-family: 'Questrial', sans-serif;

  span:first-child {
    color: #666;
    font-weight: 400;
  }

  span:last-child {
    color: #1a1a1a;
    font-weight: 500;
  }
`,A=p.default.span.withConfig({displayName:"ProductScreen.styles__AvailabilityBadge",componentId:"sc-c3d1c155-25"})`
  padding: 0.375rem 0.75rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: 'Questrial', sans-serif;
  background: ${e=>{let{$available:t}=e;return t?"rgba(76, 175, 80, 0.1)":"rgba(244, 67, 54, 0.1)"}};
  color: ${e=>{let{$available:t}=e;return t?"#4caf50":"#f44336"}};
`,B=p.default.div.withConfig({displayName:"ProductScreen.styles__SpecificationsSection",componentId:"sc-c3d1c155-26"})`
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
`,T=p.default.h2.withConfig({displayName:"ProductScreen.styles__SectionTitle",componentId:"sc-c3d1c155-27"})`
  font-size: 1.5rem;
  font-weight: 500;
  color: #1a1a1a;
  margin: 0 0 1.5rem;
  font-family: 'Questrial', sans-serif;
`,U=p.default.ul.withConfig({displayName:"ProductScreen.styles__SpecificationsList",componentId:"sc-c3d1c155-28"})`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Q=p.default.li.withConfig({displayName:"ProductScreen.styles__SpecificationItem",componentId:"sc-c3d1c155-29"})`
  display: flex;
  gap: 1rem;
  font-size: 0.95rem;
  font-family: 'Questrial', sans-serif;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  strong {
    color: #666;
    font-weight: 500;
    min-width: 200px;
  }

  span {
    color: #1a1a1a;
    flex: 1;
  }
`,E=p.default.p.withConfig({displayName:"ProductScreen.styles__LoadingMessage",componentId:"sc-c3d1c155-30"})`
  text-align: center;
  padding: 4rem 2rem;
  color: #666;
  font-family: 'Questrial', sans-serif;
`,F=p.default.p.withConfig({displayName:"ProductScreen.styles__ErrorMessage",componentId:"sc-c3d1c155-31"})`
  text-align: center;
  padding: 4rem 2rem;
  color: #f44336;
  font-family: 'Questrial', sans-serif;
`;e.i(9492);var D=e.i(93916),H=e.i(94387);e.s(["default",0,e=>{let p,{initialProduct:R}=e,V=(0,r.useParams)(),q=(0,r.useRouter)(),J=(0,r.useSearchParams)(),Y=(0,D.normalizeLocale)(V?.locale),K=Array.isArray(V?.slug)?V?.slug[0]:V?.slug,Z=J.get("id");Z&&(p=parseInt(Z));let{product:G,loading:W,error:X,mainImage:ee,setMainImage:et,notFound:ea}=((e,t,r)=>{let[i,s]=(0,a.useState)(r??null),[c,d]=(0,a.useState)(!r),[p,u]=(0,a.useState)(null),[f,m]=(0,a.useState)(""),[g,h]=(0,a.useState)(!1),y=(0,a.useRef)(!1);return(0,a.useEffect)(()=>{if(!y.current&&r){m((0,o.getImageUrl)(r.variant_image)),y.current=!0;return}(async()=>{if(!e){h(!0),d(!1);return}try{if(t){let e=await (0,n.getProduct)(t),a=(0,l.mapProductDtoToModel)(e);s(a);let r=(0,o.getImageUrl)(a.variant_image);m(r),h(!1)}else{let t=await (0,n.getProductBySlug)(e);if(!t){h(!0),s(null);return}let a=(0,l.mapProductDtoToModel)(t);s(a);let r=(0,o.getImageUrl)(a.variant_image);m(r),h(!1)}}catch{u("Failed to load product details")}finally{d(!1)}})()},[e,t,r]),{product:i,loading:c,error:p,mainImage:f,setMainImage:m,notFound:g}})(K,p,R),[er,ei]=(0,a.useState)(ee),[en,eo]=(0,a.useState)(null),[el,es]=(0,a.useState)(1),{t:ec}=(0,c.useTranslation)(),ed=a.default.useMemo(()=>{if(!G)return[];let e=[];return G.variant_image&&e.push((0,o.getImageUrl)(G.variant_image)),G.variants&&G.variants.forEach(t=>{t.image&&t.image!==G.variant_image&&e.push((0,o.getImageUrl)(t.image))}),e},[G]);a.default.useEffect(()=>{if(G)if(eo(String(G.id)),es(1),G.variant_image){let e=(0,o.getImageUrl)(G.variant_image);et(e),ei(e)}else ed.length>0&&(et(ed[0]),ei(ed[0]))},[G,et,ed]),a.default.useEffect(()=>{ee&&!er&&ei(ee)},[ee,er]);let ep=a.default.useMemo(()=>{if(!G?.specifications)return null;let e=G.specifications.quantity_limit||G.specifications.max_quantity||G.specifications.max_qty;if(!e)return null;let t=Number(e);return!Number.isFinite(t)||t<1?null:t},[G]);if(a.default.useEffect(()=>{ep&&el>ep&&es(ep)},[ep,el]),W)return(0,t.jsxs)(u,{children:[(0,t.jsx)(s.default,{primaryColor:"#CC0C5C",secondaryColor:"#F2A800"}),(0,t.jsx)(f,{children:(0,t.jsx)(E,{children:"Loading..."})})]});if(ea)return(0,t.jsxs)(u,{children:[(0,t.jsx)(s.default,{primaryColor:"#CC0C5C",secondaryColor:"#F2A800"}),(0,t.jsxs)(f,{children:[(0,t.jsx)(F,{children:"Product not found."}),(0,t.jsx)(L,{children:(0,t.jsx)(M,{$variant:"primary",onClick:()=>q.push((0,D.withLocale)(Y,"/products")),children:"Browse products"})})]})]});if(X)return(0,t.jsxs)(u,{children:[(0,t.jsx)(s.default,{primaryColor:"#CC0C5C",secondaryColor:"#F2A800"}),(0,t.jsx)(f,{children:(0,t.jsx)(F,{children:X})})]});if(!G)return(0,t.jsxs)(u,{children:[(0,t.jsx)(s.default,{primaryColor:"#CC0C5C",secondaryColor:"#F2A800"}),(0,t.jsx)(f,{children:(0,t.jsx)(F,{children:"No product found"})})]});let eu=ed.filter(e=>!!e),ef=(0,o.getImageUrl)(G?.variant_image||"")||"/assets/logo.png",em=ee||ef;return(0,t.jsxs)(u,{children:[(0,t.jsx)(s.default,{primaryColor:"#CC0C5C",secondaryColor:"#F2A800"}),(0,t.jsxs)(f,{children:[(0,t.jsx)(d.default,{categoryName:G?.category?.name||void 0,subcategoryName:G?.subcategory?.name||void 0,productName:G?.name}),(0,t.jsxs)(m,{children:[(0,t.jsxs)(g,{children:[(0,t.jsx)(h,{children:(0,t.jsx)(i.default,{src:em,alt:G.name,fill:!0,sizes:"(max-width: 968px) 100vw, 50vw",priority:!0})}),eu.length>1&&(0,t.jsx)(y,{children:eu.map((e,a)=>(0,t.jsx)(x,{$isActive:e===er,type:"button",onClick:()=>{et(e),ei(e)},children:(0,t.jsx)(i.default,{src:e,alt:`Thumbnail ${a+1}`,fill:!0,sizes:"80px"})},a))})]}),(0,t.jsxs)(b,{children:[(0,t.jsx)(_,{children:G.name}),(0,t.jsx)(w,{children:G.price_new?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(C,{children:G.price_new}),(0,t.jsx)(v,{children:G.price})]}):(0,t.jsx)(C,{children:G.price})}),(G.variant_color_palette||G.variants&&G.variants.length>0)&&(0,t.jsx)(j,{children:(0,t.jsxs)(S,{children:[(0,t.jsx)(P,{children:"Available Colors"}),(0,t.jsxs)(I,{children:[G.variant_color_palette&&(0,t.jsxs)(N,{$isSelected:en===String(G.id),$colorValue:G.variant_color_palette,onClick:()=>{if(eo(String(G.id)),G.variant_image){let e=(0,o.getImageUrl)(G.variant_image);et(e),ei(e)}},children:[(0,t.jsx)(k,{$colorValue:G.variant_color_palette}),(0,t.jsx)($,{children:G.variant_color_name||"Current"})]}),G.variants&&G.variants.map(e=>(0,t.jsxs)(N,{$isSelected:en===String(e.id),$colorValue:e.color_palette,onClick:()=>{var t;let a;return t=e.id,void((a=G?.variants?.find(e=>e.id===t))&&q.push((0,D.withLocale)(Y,`/product/${(0,H.buildProductSlug)(a.name,t)}`)))},children:[(0,t.jsx)(k,{$colorValue:e.color_palette}),(0,t.jsx)($,{children:e.color_name})]},e.id))]})]})}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",margin:"16px 0"},children:[(0,t.jsx)("button",{type:"button",onClick:()=>es(e=>Math.max(1,e-1)),"aria-label":"Decrease quantity",children:"-"}),(0,t.jsx)("span",{"aria-live":"polite",children:el}),(0,t.jsx)("button",{type:"button",onClick:()=>es(e=>ep?Math.min(ep,e+1):e+1),"aria-label":"Increase quantity",disabled:!!ep&&el>=ep,children:"+"}),ep?(0,t.jsxs)("span",{children:["Max ",ep]}):null]}),(0,t.jsxs)(L,{children:[(0,t.jsxs)(M,{$variant:"primary",onClick:e=>{e.stopPropagation();let t=localStorage.getItem("cartProducts"),a=[];if(t)try{let e=JSON.parse(t);a=Array.isArray(e)&&e.length>0&&e[0].bagId?e:e.map((e,t)=>({bagId:`bag-${Date.now()}-${t}-${e.id}`,product:e,quantity:1}))}catch{a=[]}let r=a.find(e=>e.product.id===G.id);if(r){let e=a.filter(e=>e.bagId!==r.bagId);localStorage.setItem("cartProducts",JSON.stringify(e))}else{let e={bagId:`bag-${Date.now()}-${G.id}`,product:G,quantity:el};a.push(e),localStorage.setItem("cartProducts",JSON.stringify(a))}window.dispatchEvent(new Event("cartUpdated"))},children:[(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",viewBox:"0 0 16 16",children:(0,t.jsx)("path",{d:"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"})}),ec((()=>{let e=localStorage.getItem("cartProducts");if(!e)return!1;try{return JSON.parse(e).some(e=>e.product.id===G.id)}catch{return!1}})()?"removeFromCart":"addToCart")]}),(0,t.jsxs)(M,{$variant:"secondary",onClick:e=>{e.stopPropagation();let t=JSON.parse(localStorage.getItem("compareProducts")||"[]"),a=t.find(e=>e.id===G.id)?t.filter(e=>e.id!==G.id):[...t,G];localStorage.setItem("compareProducts",JSON.stringify(a)),window.dispatchEvent(new Event("compareUpdated"))},children:[(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,t.jsx)("path",{d:"M3.99923 21H19.9992M11.9992 21V7M11.9992 7C13.1038 7 13.9992 6.10457 13.9992 5M11.9992 7C10.8947 7 9.99923 6.10457 9.99923 5M13.9992 5C13.9992 3.89543 13.1038 3 11.9992 3C10.8947 3 9.99923 3.89543 9.99923 5M13.9992 5H19.9992M9.99923 5H3.99923M5.99923 17C7.51177 17 8.76287 16.1584 8.96934 14.7513C8.98242 14.6621 8.98897 14.6175 8.98385 14.5186C8.98031 14.4503 8.95717 14.3256 8.93599 14.2605C8.90531 14.1664 8.86812 14.1003 8.79375 13.968L5.99923 9L3.2047 13.968C3.13575 14.0906 3.10128 14.1519 3.06939 14.2584C3.04977 14.3239 3.02706 14.4811 3.02735 14.5494C3.02781 14.6606 3.03453 14.6899 3.04799 14.7486C3.30295 15.86 4.5273 17 5.99923 17ZM17.9992 17C19.5118 17 20.7629 16.1584 20.9693 14.7513C20.9824 14.6621 20.989 14.6175 20.9838 14.5186C20.9803 14.4503 20.9572 14.3256 20.936 14.2605C20.9053 14.1664 20.8681 14.1003 20.7937 13.968L17.9992 9L15.2047 13.968C15.1358 14.0906 15.1013 14.1519 15.0694 14.2584C15.0498 14.3239 15.0271 14.4811 15.0273 14.5494C15.0278 14.6606 15.0345 14.6899 15.048 14.7486C15.303 15.86 16.5273 17 17.9992 17Z"})}),ec("compare")]})]}),(0,t.jsxs)(z,{children:[(0,t.jsxs)(O,{children:[(0,t.jsxs)("span",{children:[ec("brand"),":"]}),(0,t.jsx)("span",{children:G.brand})]}),(0,t.jsxs)(O,{children:[(0,t.jsxs)("span",{children:[ec("product_code"),":"]}),(0,t.jsx)("span",{children:G.id})]}),(0,t.jsxs)(O,{children:[(0,t.jsxs)("span",{children:[ec("availability"),":"]}),(0,t.jsx)(A,{$available:"in_stock"===G.availability,children:ec("in_stock"===G.availability?"in_stock":"out_of_stock")})]})]})]})]}),G.specifications&&Object.keys(G.specifications).length>0&&(0,t.jsxs)(B,{children:[(0,t.jsx)(T,{children:ec("specifications")}),(0,t.jsx)(U,{children:Object.entries(G.specifications).map(e=>{let[a,r]=e,i=a.replace(/_/g," ").split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()).join(" "),n=String(r).split(";").map(e=>e.trim()).filter(e=>e.length>0).join("\n");return(0,t.jsxs)(Q,{children:[(0,t.jsxs)("strong",{children:[i,":"]}),(0,t.jsx)("span",{style:{whiteSpace:"pre-line"},children:n})]},a)})})]})]})]})}],77602)}]);