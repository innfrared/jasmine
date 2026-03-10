(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,27004,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"warnOnce",{enumerable:!0,get:function(){return o}});let o=e=>{}},97005,e=>{"use strict";var t=e.i(26287);let i={primaryColor:"linear-gradient(135deg, #c39a37 0%, #b8860b 100%)",primaryColorFlat:"#d4af37",secondaryColor:"#001f3f"};e.s(["useThemeColors",0,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=(0,t.useMemo)(()=>({...i,...e}),[e]),[r,a]=(0,t.useState)(o);return(0,t.useEffect)(()=>{a({primaryColor:localStorage.getItem("theme_primary")||o.primaryColor||"linear-gradient(135deg, #a67c00 0%, #bf9b30 25%, #ffd700 50%, #d4af37 75%, #b8860b 100%)",primaryColorFlat:localStorage.getItem("theme_primary_flat")||o.primaryColorFlat,secondaryColor:localStorage.getItem("theme_secondary")||o.secondaryColor})},[o]),r}])},81095,5424,e=>{"use strict";var t=e.i(72902);let i=t.keyframes`
    0% { transform: translateY(-50px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
`,o=t.default.footer.withConfig({displayName:"Footer.styles__FooterContainer",componentId:"sc-a6c51aef-0"})`
  color: ${e=>{let{$secondaryColor:t}=e;return t}};
  background-color: #001f3f;
  width: 100%;
  padding: 4rem 6rem;
  font-family: 'Questrial', sans-serif;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 20px;
  }
`,r=t.default.div.withConfig({displayName:"Footer.styles__FooterLinkSection",componentId:"sc-a6c51aef-1"})`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  flex: 2;
  justify-content: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,a=t.default.div.withConfig({displayName:"Footer.styles__FooterContent",componentId:"sc-a6c51aef-2"})`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  justify-content: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,n=t.default.div.withConfig({displayName:"Footer.styles__LogoSection",componentId:"sc-a6c51aef-3"})`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,s=t.default.div.withConfig({displayName:"Footer.styles__Logo",componentId:"sc-a6c51aef-4"})`
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
`,l=t.default.p.withConfig({displayName:"Footer.styles__LogoDescription",componentId:"sc-a6c51aef-5"})`
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  font-weight: bold;
`,d=t.default.div.withConfig({displayName:"Footer.styles__LinksSection",componentId:"sc-a6c51aef-6"})`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
  }
`,c=t.default.h3.withConfig({displayName:"Footer.styles__SectionTitle",componentId:"sc-a6c51aef-7"})`
  font-size: 18px;
  margin: 0 0 10px;
  color: ${e=>{let{$color:t}=e;return t}};
`,p=t.default.ul.withConfig({displayName:"Footer.styles__LinksList",componentId:"sc-a6c51aef-8"})`
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`,f=t.default.li.withConfig({displayName:"Footer.styles__LinkItem",componentId:"sc-a6c51aef-9"})`
  margin-bottom: 8px;

  a {
    text-decoration: none;
    color: ${e=>{let{$color:t}=e;return t}};
    font-size: 14px;
    transition: color 0.3s ease;

    &:hover {
      color: black;
    }
  }
`;t.default.div.withConfig({displayName:"Footer.styles__SocialSection",componentId:"sc-a6c51aef-10"})`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
  }
`,t.default.div.withConfig({displayName:"Footer.styles__Card",componentId:"sc-a6c51aef-11"})`
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
`,t.default.a.withConfig({displayName:"Footer.styles__SocialContainer",componentId:"sc-a6c51aef-12"})`
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

  ${e=>{let{variant:i}=e;return"instagram"===i&&t.css`
      &:hover {
        background-color: #d62976;
      }
    `}}
  ${e=>{let{variant:i}=e;return"viber"===i&&t.css`
      &:hover {
        background-color: #7f4da0;
      }
    `}}
    ${e=>{let{variant:i}=e;return"whatsapp"===i&&t.css`
      &:hover {
        background-color: #128c7e;
      }
    `}}
    ${e=>{let{variant:i}=e;return"telegram"===i&&t.css`
      &:hover {
        background-color: #0ea958;
      }
    `}}

    &:active {
    transform: scale(0.9);
  }
`,t.default.svg.withConfig({displayName:"Footer.styles__SocialSvg",componentId:"sc-a6c51aef-13"})`
  width: 17px;
  height: 17px;
  fill: white;
  animation: ${i} 0.3s both;
`;let m=t.default.div.withConfig({displayName:"Footer.styles__FooterBottom",componentId:"sc-a6c51aef-14"})`
  text-align: left;
  font-size: 12px;
`;e.s(["FooterBottom",0,m,"FooterContainer",0,o,"FooterContent",0,a,"FooterLinkSection",0,r,"LinkItem",0,f,"LinksList",0,p,"LinksSection",0,d,"Logo",0,s,"LogoDescription",0,l,"LogoSection",0,n,"SectionTitle",0,c],81095),e.s(["footerLinksData",0,[{title:"about_us",links:[{label:"Shipping Policy",href:"/policies/shipping-policy"},{label:"Returns & Refunds",href:"/policies/returns-refunds"}]},{title:"support",links:[{label:"Privacy Policy",href:"/policies/privacy-policy"},{label:"Terms & Conditions",href:"/policies/terms-conditions"}]},{title:"social",links:[{label:"Instagram",href:"https://www.instagram.com"},{label:"Facebook",href:"https://www.facebook.com"},{label:"Tiktok",href:"https://www.tiktok.com"}]}]],5424)},58090,e=>{"use strict";var t=e.i(66339);e.i(3157);var i=e.i(55062),o=e.i(85329),r=e.i(274),a=e.i(53805),n=e.i(81095),s=e.i(5424);e.i(9492);var l=e.i(93916),d=e.i(97005);function c(){let{t:e}=(0,i.useTranslation)(),c=(0,a.useParams)(),p=(0,l.normalizeLocale)(c?.locale),{secondaryColor:f}=(0,d.useThemeColors)({secondaryColor:"#ffffff"});return(0,t.jsxs)(n.FooterContainer,{$secondaryColor:f,children:[(0,t.jsxs)(n.FooterContent,{children:[(0,t.jsx)(n.FooterLinkSection,{children:s.footerLinksData.map((i,r)=>(0,t.jsxs)(n.LinksSection,{children:[(0,t.jsx)(n.SectionTitle,{$color:f,children:e(i.title)}),(0,t.jsx)(n.LinksList,{children:i.links.map((e,i)=>(0,t.jsx)(n.LinkItem,{$color:f,children:e.href.startsWith("http")?(0,t.jsx)("a",{href:e.href,target:"_blank",rel:"noreferrer",children:e.label}):(0,t.jsx)(o.default,{href:(0,l.withLocale)(p,e.href),children:e.label})},i))})]},r))}),(0,t.jsxs)(n.LogoSection,{children:[(0,t.jsx)(n.Logo,{children:(0,t.jsx)(r.default,{src:"/assets/logo.png",alt:"Logo",fill:!0,sizes:"(max-width: 768px) 110px, 150px"})}),(0,t.jsx)(n.LogoDescription,{children:e("slogan")})]})]}),(0,t.jsx)(n.FooterBottom,{children:(0,t.jsxs)("p",{children:["© ",new Date().getFullYear()," ",e("copyrightNotice")]})})]})}e.s(["default",()=>c])},77018,e=>{"use strict";var t=e.i(66339),i=e.i(26287),o=e.i(53805),r=e.i(59285),a=e.i(72902),n=e.i(85329);let s=a.default.nav.withConfig({displayName:"Breadcrumb.styles__BreadcrumbNav",componentId:"sc-e17aab5a-0"})`
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
`,l=(0,a.default)(n.default).withConfig({displayName:"Breadcrumb.styles__BreadcrumbLink",componentId:"sc-e17aab5a-1"})`
  text-decoration: none;
  color: #001f3f;
  transition: color 0.3s ease;
  font-family: 'Questrial', sans-serif;

  &:hover {
    text-decoration: underline;
    color: #003366;
  }
`,d=a.default.span.withConfig({displayName:"Breadcrumb.styles__BreadcrumbText",componentId:"sc-e17aab5a-2"})`
  color: #001f3f;
`,c=a.default.span.withConfig({displayName:"Breadcrumb.styles__BreadcrumbSeparator",componentId:"sc-e17aab5a-3"})`
  margin: 0 8px;
  color: #dedede;
  font-family: 'Questrial', sans-serif;
`;e.i(9492);var p=e.i(93916);e.s(["default",0,e=>{let{categoryName:a,subcategoryName:n,productName:f}=e,m=(0,o.useParams)(),u=(0,o.usePathname)(),h=(0,o.useSearchParams)(),{categories:g}=(0,r.useCategories)(),x=(0,p.normalizeLocale)(m?.locale),y=u.split("/").filter(e=>e),b=y[0]===x?y.slice(1):y,w=f||m.slug,_=h.get("category_id"),v=h.get("subcategory_id"),C=_?Number(_):null,j=v?Number(v):null,S=(0,i.useMemo)(()=>{if(C)return g.find(e=>e.id===C)?.name},[g,C]),I=(0,i.useMemo)(()=>{if(C&&j)return g.find(e=>e.id===C)?.subcategories?.find(e=>e.id===j)?.name},[g,C,j]),k=a||S,P=n||I,N=[];return b.includes("profile")||b.includes("orders")||b.includes("shipping")||b.includes("cart")?(N.push({label:"Home",path:(0,p.withLocale)(x,"/")}),b.includes("profile")&&N.push({label:"Profile",path:(0,p.withLocale)(x,"/profile")}),b.includes("orders")&&N.push({label:"Order History",path:(0,p.withLocale)(x,"/orders")}),b.includes("shipping")&&N.push({label:"Shipping Information",path:(0,p.withLocale)(x,"/shipping")}),b.includes("cart")&&N.push({label:"Cart",path:(0,p.withLocale)(x,"/cart")})):(N.push({label:"Catalog",path:(0,p.withLocale)(x,"/")}),k&&C&&N.push({label:k,path:(0,p.withLocale)(x,`/products?category_id=${C}`)}),P&&k&&C&&j&&N.push({label:P,path:(0,p.withLocale)(x,`/products?category_id=${C}&subcategory_id=${j}`)}),w&&b.includes("product")&&N.push({label:decodeURIComponent(w),path:u})),(0,t.jsx)(s,{children:N.map((e,o)=>{let r=o===N.length-1;return(0,t.jsxs)(i.default.Fragment,{children:[o>0&&(0,t.jsx)(c,{children:"/"}),r?(0,t.jsx)(d,{children:e.label}):(0,t.jsx)(l,{href:e.path,children:e.label})]},o)})})}],77018)},76014,e=>{"use strict";var t=e.i(66339),i=e.i(72902);let o=i.keyframes`
  0% {
    background-position: 0% center;
  }
  50% {
    background-position: 100% center;
  }
  100% {
    background-position: 0% center;
  }
`,r=i.default.button.withConfig({displayName:"Button.styles__ButtonBase",componentId:"sc-fc3deb8-0"})`
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

  ${e=>{let{$variant:t,$primaryColor:r}=e;return"primary"===t&&i.css`
      background-size: 300% 300% !important;
      background: ${r} 0 center;
      color: white;
      border: none;

      &:hover {
        animation: ${o} 6s ease-in-out infinite;
      }
    `}}

  ${e=>{let{$variant:t,$primaryColorFlat:o,$secondaryColor:r}=e;return"secondary"===t&&i.css`
      background-color: white;
      color: ${r};
      border: 1px solid ${r};

      &:hover {
        background-color: #f8f8f8;
        color: ${o};
      }
    `}}

  ${e=>{let{$variant:t,$primaryColorFlat:o,$secondaryColor:r}=e;return"tertiary"===t&&i.css`
      background: none;
      color: ${r};
      border: none;
      transition: color 0.3s ease;

      &:hover {
        color: ${o};
      }
    `}}

  ${e=>{let{$variant:t}=e;return"link"===t&&i.css`
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
    `}}
`,a=i.default.div.withConfig({displayName:"Button.styles__IconWrapper",componentId:"sc-fc3deb8-1"})`
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
    ${e=>{let{iconColor:t}=e;return"#ffffff"===t?"filter: brightness(0) invert(1);":"#001f3f"===t?"filter: invert(11%) sepia(33%) saturate(3111%) hue-rotate(178deg) brightness(98%) contrast(104%);":""}};
  }

  ${e=>{let{$variant:t}=e;return"primary"===t&&i.css`
      svg,
      img {
        color: white;
        fill: white;
      }
    `}}
  ${e=>{let{$variant:t}=e;return"secondary"===t&&i.css`
      svg,
      img {
        color: white;
        fill: white;
      }
    `}}
  ${e=>{let{$variant:t,$secondaryColor:o}=e;return"tertiary"===t&&i.css`
      svg,
      img {
        width: 1.25rem;
        height: 1.25rem;
        color: ${o};
        fill: ${o};
      }
    `}}
  ${e=>{let{$variant:t}=e;return"link"===t&&i.css`
      svg,
      img {
        width: 1rem;
        height: 1rem;
      }
    `}}
`,n=i.default.span.withConfig({displayName:"Button.styles__TextWrapper",componentId:"sc-fc3deb8-2"})`
  font-size: ${e=>{let{$hasIcon:t,$variant:i}=e;return"link"===i?"1rem":t?"0.7rem":"1rem"}};
  margin: 0;
  padding-top: ${e=>{let{$variant:t}=e;return"link"===t?"0":"0.1rem"}};
  text-align: center;
  line-height: 1.2;
  width: max-content;
`,s=i.default.span.withConfig({displayName:"Button.styles__CountBadge",componentId:"sc-fc3deb8-3"})`
  position: absolute;
  top: 0.1rem;
  right: 0.1rem;
  background: ${e=>{let{$primaryColor:t}=e;return t}};
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
`;var l=e.i(97005);e.s(["default",0,e=>{let{variant:i,children:o,onClick:d,icon:c,badgeContent:p,iconColor:f}=e,{primaryColor:m,primaryColorFlat:u,secondaryColor:h}=(0,l.useThemeColors)(),g=(0,t.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M5 12H19M12 5L19 12L12 19",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),x=c||("link"===i?g:null),y=!!x;return(0,t.jsxs)(r,{$variant:i,$primaryColor:m,$primaryColorFlat:u,$secondaryColor:h,$hasIcon:y,onClick:d,children:[void 0!==p&&(0,t.jsx)(s,{$primaryColor:m,children:p}),"link"===i?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n,{$hasIcon:y,$variant:i,children:o}),x&&(0,t.jsx)(a,{$variant:i,$secondaryColor:h,iconColor:f,children:x})]}):(0,t.jsxs)(t.Fragment,{children:[x&&(0,t.jsx)(a,{$variant:i,$secondaryColor:h,iconColor:f,children:x}),(0,t.jsx)(n,{$hasIcon:y,$variant:i,children:o})]})]})}],76014)},56680,49633,5211,e=>{"use strict";var t=e.i(44350);let i=e=>({...e,category:e.category??null,subcategory:e.subcategory??null,variants:e.variants??[],specifications:e.specifications??{},specifications_detailed:e.specifications_detailed??[]});e.s(["mapProductDtoToModel",0,i,"mapProductDtosToModels",0,e=>e.map(i)],49633);let o=["id","name","price","price_new","price_old","availability","variant_image","currency"],r=[...o,"variant_color_palette","variant_color_name","variants"];e.s(["PRODUCT_CARD_FIELDS",0,o,"PRODUCT_LIST_FIELDS",0,r],5211);var a=e.i(94387);let n=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{specFilters:o,fields:r,...a}=e,n={...a};return r&&(n.fields=Array.isArray(r)?r.join(","):r),o&&Object.entries(o).forEach(e=>{let[t,i]=e;n[`spec_${t}`]=i}),t.httpClient.get("products/",{query:n,...i})},s=function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.httpClient.get(`products/${e}/`,i)},l=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=(0,a.getProductIdFromSlug)(e);if(i)try{return await s(i,t)}catch{return null}let o=decodeURIComponent(e),r=await n({search:o,page:1,page_size:50},t),l=o.trim().toLowerCase(),d=(0,a.slugify)(o);return r.items.find(e=>{let t=e.name.trim();return!!d&&(0,a.slugify)(t)===d||t.toLowerCase()===l})??null};e.s(["getProduct",0,s,"getProductBySlug",0,l,"listProducts",0,n],56680)},18042,e=>{"use strict";var t=e.i(66339),i=e.i(26287),o=e.i(53805),r=e.i(274),a=e.i(98803),n=e.i(56680),s=e.i(49633),l=e.i(72902);let d=l.default.div.withConfig({displayName:"FindSimilarModal.styles__ModalOverlay",componentId:"sc-e57bfe8e-0"})`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  z-index: 4000;
`,c=l.default.div.withConfig({displayName:"FindSimilarModal.styles__ModalCard",componentId:"sc-e57bfe8e-1"})`
  width: min(920px, 100%);
  max-height: 80vh;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,p=l.default.div.withConfig({displayName:"FindSimilarModal.styles__ModalHeader",componentId:"sc-e57bfe8e-2"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem 0.75rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`,f=l.default.h3.withConfig({displayName:"FindSimilarModal.styles__ModalTitle",componentId:"sc-e57bfe8e-3"})`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #0f0f0f;
`,m=l.default.button.withConfig({displayName:"FindSimilarModal.styles__CloseButton",componentId:"sc-e57bfe8e-4"})`
  border: none;
  background: none;
  cursor: pointer;
  color: #0f0f0f;
  font-size: 1.1rem;
  padding: 0.25rem;
  line-height: 1;
`,u=l.default.div.withConfig({displayName:"FindSimilarModal.styles__ModalBody",componentId:"sc-e57bfe8e-5"})`
  padding: 1.25rem 1.5rem 1.5rem;
  overflow: auto;
`,h=l.default.p.withConfig({displayName:"FindSimilarModal.styles__StatusText",componentId:"sc-e57bfe8e-6"})`
  margin: 0;
  color: #6b6b6b;
`,g=l.default.div.withConfig({displayName:"FindSimilarModal.styles__Grid",componentId:"sc-e57bfe8e-7"})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
`,x=l.default.div.withConfig({displayName:"FindSimilarModal.styles__ProductCard",componentId:"sc-e57bfe8e-8"})`
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
`,y=l.default.div.withConfig({displayName:"FindSimilarModal.styles__ProductImage",componentId:"sc-e57bfe8e-9"})`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 5;
  border-radius: 8px;
  background: #f6f6f6;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`,b=l.default.p.withConfig({displayName:"FindSimilarModal.styles__ProductName",componentId:"sc-e57bfe8e-10"})`
  margin: 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: #1a1a1a;
`,w=l.default.p.withConfig({displayName:"FindSimilarModal.styles__ProductPrice",componentId:"sc-e57bfe8e-11"})`
  margin: 0;
  font-size: 0.85rem;
  color: #6b6b6b;
`;e.i(9492);var _=e.i(93916),v=e.i(94387);let C=e=>{let{isOpen:l,onClose:C,product:j}=e,S=(0,o.useRouter)(),I=(0,o.useParams)(),k=(0,_.normalizeLocale)(I?.locale),P=(0,i.useRef)(null),[N,$]=(0,i.useState)(!1),[F,L]=(0,i.useState)(""),[z,M]=(0,i.useState)([]),T=(0,i.useMemo)(()=>j.subcategory?.name?`Similar in ${j.subcategory.name}`:j.category?.name?`Similar in ${j.category.name}`:"Similar items",[j.category?.name,j.subcategory?.name]);return((0,i.useEffect)(()=>{l&&(async()=>{$(!0),L("");try{let e=await (0,n.listProducts)({subcategory_id:j.subcategory_id||void 0,page:1,page_size:8}),t=(0,s.mapProductDtosToModels)(e.items).filter(e=>e.id!==j.id);M(t)}catch{L("Unable to load similar products.")}finally{$(!1)}})()},[l,j.category_id,j.id,j.subcategory_id]),(0,i.useEffect)(()=>{if(!l)return;let e=e=>{"Escape"===e.key&&C()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[l,C]),l)?(0,t.jsx)(d,{onClick:e=>{e.target===e.currentTarget&&C()},children:(0,t.jsxs)(c,{ref:P,children:[(0,t.jsxs)(p,{children:[(0,t.jsx)(f,{children:T}),(0,t.jsx)(m,{onClick:C,"aria-label":"Close",children:"✕"})]}),(0,t.jsxs)(u,{children:[N&&(0,t.jsx)(h,{children:"Loading similar items..."}),!N&&F&&(0,t.jsx)(h,{children:F}),!N&&!F&&0===z.length&&(0,t.jsx)(h,{children:"No similar items found."}),!N&&!F&&z.length>0&&(0,t.jsx)(g,{children:z.map(e=>(0,t.jsxs)(x,{onClick:()=>S.push((0,_.withLocale)(k,`/product/${(0,v.buildProductSlug)(e.name,e.id)}`)),children:[(0,t.jsx)(y,{children:(0,t.jsx)(r.default,{src:(0,a.getImageUrl)(e.variant_image)||"/assets/logo.png",alt:e.name,fill:!0,sizes:"(max-width: 768px) 50vw, 200px"})}),(0,t.jsx)(b,{children:e.name}),(0,t.jsx)(w,{children:e.price_new?`${e.price_new} USD`:`${e.price} USD`})]},e.id))})]})]})}):null},j=l.default.div.withConfig({displayName:"ProductCell.styles__Card",componentId:"sc-3e0cdb6d-0"})`
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
`,S=l.default.div.withConfig({displayName:"ProductCell.styles__Wrapper",componentId:"sc-3e0cdb6d-1"})`
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
`,I=l.default.div.withConfig({displayName:"ProductCell.styles__HoverButtons",componentId:"sc-3e0cdb6d-2"})`
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
`,k=l.default.div.withConfig({displayName:"ProductCell.styles__FindSimilar",componentId:"sc-3e0cdb6d-3"})`
  position: absolute;
  display: flex;
  gap: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 10;
`,P=l.default.div.withConfig({displayName:"ProductCell.styles__CardImage",componentId:"sc-3e0cdb6d-4"})`
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

  ${I} {
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

  ${k} {
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

  &:hover ${I} {
    opacity: 1;
    pointer-events: auto;
  }

  &:hover ${k} {
    opacity: 1;
    pointer-events: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`,N=l.default.div.withConfig({displayName:"ProductCell.styles__Content",componentId:"sc-3e0cdb6d-5"})`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,$=l.default.p.withConfig({displayName:"ProductCell.styles__Title",componentId:"sc-3e0cdb6d-6"})`
  font-size: 0.8em;
  text-transform: uppercase;
  color: #4d4d4d;
  margin: 0;
`,F=l.default.div.withConfig({displayName:"ProductCell.styles__PriceContainer",componentId:"sc-3e0cdb6d-7"})`
  display: flex;
  margin: 5px 0;
  justify-content: start;
  width: 100%;
`,L=l.default.p.withConfig({displayName:"ProductCell.styles__Price",componentId:"sc-3e0cdb6d-8"})`
  font-size: 1.1em;
  margin: 0;
  font-weight: 700;
`,z=l.default.p.withConfig({displayName:"ProductCell.styles__OldPrice",componentId:"sc-3e0cdb6d-9"})`
  font-size: 14px;
  text-decoration: line-through;
  color: red;
  margin: 0 5px;
`;l.default.div.withConfig({displayName:"ProductCell.styles__ButtonContainer",componentId:"sc-3e0cdb6d-10"})`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`,l.default.div.withConfig({displayName:"ProductCell.styles__ButtonWrapper",componentId:"sc-3e0cdb6d-11"})`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
`,l.default.div.withConfig({displayName:"ProductCell.styles__Text",componentId:"sc-3e0cdb6d-12"})`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: top 0.5s;
`,l.default.div.withConfig({displayName:"ProductCell.styles__Icon",componentId:"sc-3e0cdb6d-13"})`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: top 0.5s;
`;let M=l.default.div.withConfig({displayName:"ProductCell.styles__ButtonCompare",componentId:"sc-3e0cdb6d-14"})`
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
`;l.default.div.withConfig({displayName:"ProductCell.styles__TextCompare",componentId:"sc-3e0cdb6d-15"})`
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

  ${M}:hover & {
    top: -100%;
    color: #fff;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;let T=l.default.div.withConfig({displayName:"ProductCell.styles__Overlay",componentId:"sc-3e0cdb6d-16"})`
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
`,B=l.default.div.withConfig({displayName:"ProductCell.styles__OverlayIcon",componentId:"sc-3e0cdb6d-17"})`
  font-size: 1.5rem;
  color: #e60000;
  font-weight: bold;
`;var D=e.i(76014);e.s(["default",0,e=>{let{product:n}=e,s=(0,o.useRouter)(),l=(0,o.useParams)(),d=(0,_.normalizeLocale)(l?.locale),[c,p]=(0,i.useState)(!1),f=(0,a.getImageUrl)(n.variant_image)||"/assets/logo.png";return(0,t.jsxs)(j,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"}),s.push((0,_.withLocale)(d,`/product/${(0,v.buildProductSlug)(n.name,n.id)}`))},children:[!n.availability&&(0,t.jsx)(T,{children:(0,t.jsx)(B,{children:"Unavailable"})}),(0,t.jsxs)(S,{children:[(0,t.jsxs)(P,{children:[(0,t.jsx)(r.default,{src:f,alt:n.name,fill:!0,sizes:"(max-width: 768px) 40vw, 15rem",style:{objectFit:"cover"}}),(0,t.jsx)(k,{onClick:e=>e.stopPropagation(),children:(0,t.jsx)(D.default,{variant:"tertiary",icon:(0,t.jsx)(r.default,{src:"/assets/heart.svg",alt:"like",width:16,height:16}),onClick:()=>{let e=localStorage.getItem("likedProducts"),t=[];if(e)try{t=JSON.parse(e)}catch{t=[]}let i=t.findIndex(e=>e.id===n.id);-1!==i?t.splice(i,1):t.push(n),localStorage.setItem("likedProducts",JSON.stringify(t)),window.dispatchEvent(new Event("likedUpdated"))},children:"Like"})}),(0,t.jsxs)(I,{onClick:e=>e.stopPropagation(),children:[(0,t.jsx)(D.default,{variant:"tertiary",icon:(0,t.jsx)(r.default,{src:"/assets/plus.svg",alt:"cart",width:16,height:16}),onClick:()=>p(!0),children:"Find Similar"}),(0,t.jsx)(D.default,{variant:"tertiary",icon:(0,t.jsx)(r.default,{src:"/assets/cart.svg",alt:"cart",width:16,height:16}),onClick:()=>{let e=localStorage.getItem("cartProducts"),t=[];if(e)try{let i=JSON.parse(e);t=Array.isArray(i)&&i.length>0&&i[0].bagId?i:i.map((e,t)=>({bagId:`bag-${Date.now()}-${t}-${e.id}`,product:e,quantity:1}))}catch{t=[]}let i=t.find(e=>e.product.id===n.id);if(i){let e=t.filter(e=>e.bagId!==i.bagId);localStorage.setItem("cartProducts",JSON.stringify(e))}else{let e={bagId:`bag-${Date.now()}-${n.id}`,product:n,quantity:1};t.push(e),localStorage.setItem("cartProducts",JSON.stringify(t))}window.dispatchEvent(new Event("cartUpdated"))},children:"Add to Cart"})]})]}),(0,t.jsxs)(N,{children:[(0,t.jsx)($,{children:n.name}),(0,t.jsx)(F,{children:n.price_new?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(L,{children:[n.price_new," USD"]}),(0,t.jsxs)(z,{children:[n.price," USD"]})]}):(0,t.jsxs)(L,{children:[n.price," USD"]})})]})]}),(0,t.jsx)(C,{isOpen:c,onClose:()=>p(!1),product:n})]})}],18042)},22835,e=>{"use strict";var t=e.i(66339),i=e.i(26287),o=e.i(53805),r=e.i(16460),a=e.i(18042),n=e.i(58090),s=e.i(77018),l=e.i(56680),d=e.i(49633),c=e.i(5211);let p=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20,a=arguments.length>3?arguments[3]:void 0,n=arguments.length>4?arguments[4]:void 0,s=(0,o.useSearchParams)(),p=s.get("category_id"),f=s.get("subcategory_id"),m=p?Number(p):null,u=f?Number(f):null,[h,g]=(0,i.useState)(n?.products||[]),[x,y]=(0,i.useState)(!n),[b,w]=(0,i.useState)(null),[_,v]=(0,i.useState)(n?.totalPages||1),[C,j]=(0,i.useState)(n?.products||[]),S=(0,i.useRef)(!1);(0,i.useEffect)(()=>{if(!S.current&&n){S.current=!0;return}(async()=>{y(!0),w(null);try{let i,o;i=await (0,l.listProducts)({page:t,page_size:r,category_id:m||void 0,subcategory_id:u||void 0,fields:c.PRODUCT_LIST_FIELDS});let n=o=(0,d.mapProductDtosToModels)(i.items);e?.color&&e.color.length>0&&(n=o.filter(t=>!!(t.variant_color_palette&&e.color.includes(t.variant_color_palette))||t.variants?.some(t=>t.color_palette&&e.color.includes(t.color_palette)))),a&&(n=[...n].sort((e,t)=>{switch(a){case"price_asc":{let i=parseFloat((e.price_new||e.price).replace(/[^\d.-]/g,""))||0,o=parseFloat((t.price_new||t.price).replace(/[^\d.-]/g,""))||0;return i-o}case"price_desc":{let i=parseFloat((e.price_new||e.price).replace(/[^\d.-]/g,""))||0;return(parseFloat((t.price_new||t.price).replace(/[^\d.-]/g,""))||0)-i}case"name_asc":return e.name.localeCompare(t.name);case"name_desc":return t.name.localeCompare(e.name);default:return 0}})),j(n),g(n),v(i.total_pages||Math.ceil((i.total||n.length)/r))}catch(e){console.error("❌ Error fetching products:",e),w("Failed to load products."),g([]),j([])}finally{y(!1)}})()},[m,u,e,t,r,a,n]);let I=m?String(m):void 0,k=u?String(u):void 0,P=Array.from(new Set(C.flatMap(e=>{let t=[];return e.variant_color_palette&&t.push(e.variant_color_palette),e.variants&&e.variants.forEach(e=>{e.color_palette&&t.push(e.color_palette)}),t}).filter(Boolean))).sort(),N=new Map;return C.forEach(e=>{e.variant_color_palette&&e.variant_color_name&&N.set(e.variant_color_palette,e.variant_color_name),e.variants?.forEach(e=>{e.color_palette&&e.color_name&&!N.has(e.color_palette)&&N.set(e.color_palette,e.color_name)})}),{products:h,loading:x,error:b,category:I,subcategory:k,totalPages:_,setProducts:g,availableColors:P,availableSizes:[],colorPaletteMap:N}};var f=e.i(59285),m=e.i(72902);let u=m.default.div.withConfig({displayName:"ProductsScreen.styles__ProductsPageContainer",componentId:"sc-c2cd2dc5-0"})`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
`,h=m.default.div.withConfig({displayName:"ProductsScreen.styles__ProductsContent",componentId:"sc-c2cd2dc5-1"})`
  max-width: 1400px;
  margin: 0 auto;
  padding: 140px 3rem 4rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 120px 1.5rem 3rem;
  }
`,g=m.default.div.withConfig({displayName:"ProductsScreen.styles__ProductsHeader",componentId:"sc-c2cd2dc5-2"})`
  margin-bottom: 3rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`,x=m.default.h1.withConfig({displayName:"ProductsScreen.styles__ProductsTitle",componentId:"sc-c2cd2dc5-3"})`
  font-size: 2rem;
  font-weight: 400;
  color: #1a1a1a;
  margin: 0;
  font-family: 'Questrial', sans-serif;
  text-transform: capitalize;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,y=m.default.div.withConfig({displayName:"ProductsScreen.styles__ProductsGrid",componentId:"sc-c2cd2dc5-4"})`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 2rem;
  width: 100%;
  margin-bottom: 4rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`,b=m.default.div.withConfig({displayName:"ProductsScreen.styles__PaginationContainer",componentId:"sc-c2cd2dc5-5"})`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 3rem;
  flex-wrap: wrap;
`,w=m.default.button.withConfig({displayName:"ProductsScreen.styles__PaginationButton",componentId:"sc-c2cd2dc5-6"})`
  background: none;
  border: none;
  color: #1a1a1a;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  font-family: 'Questrial', sans-serif;

  &:hover:not(:disabled) {
    background: rgba(0, 0, 0, 0.05);
    color: #9a8300;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    min-width: 36px;
    height: 36px;
    font-size: 0.9rem;
  }
`,_=m.default.button.withConfig({displayName:"ProductsScreen.styles__PageButton",componentId:"sc-c2cd2dc5-7"})`
  background: ${e=>{let{$isActive:t}=e;return t?"#1a1a1a":"transparent"}};
  border: 1px solid
    ${e=>{let{$isActive:t}=e;return t?"#1a1a1a":"rgba(0, 0, 0, 0.1)"}};
  color: ${e=>{let{$isActive:t}=e;return t?"#ffffff":"#1a1a1a"}};
  padding: 0.5rem 0.75rem;
  font-size: 0.95rem;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s ease;
  min-width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Questrial', sans-serif;
  font-weight: ${e=>{let{$isActive:t}=e;return t?"500":"400"}};

  &:hover:not(:disabled) {
    background: ${e=>{let{$isActive:t}=e;return t?"#1a1a1a":"rgba(0, 0, 0, 0.05)"}};
    border-color: ${e=>{let{$isActive:t}=e;return t?"#1a1a1a":"#9a8300"}};
    color: ${e=>{let{$isActive:t}=e;return t?"#ffffff":"#9a8300"}};
  }

  &:disabled {
    cursor: default;
    border: none;
    background: transparent;
    color: #999;
  }

  @media (max-width: 768px) {
    min-width: 36px;
    height: 36px;
    font-size: 0.85rem;
    padding: 0.4rem 0.6rem;
  }
`,v=m.default.div.withConfig({displayName:"ProductsScreen.styles__LoadingMessage",componentId:"sc-c2cd2dc5-8"})`
  text-align: center;
  padding: 4rem 2rem;
  color: #666;
  font-size: 1.1rem;
  font-family: 'Questrial', sans-serif;
`,C=m.default.div.withConfig({displayName:"ProductsScreen.styles__ErrorMessage",componentId:"sc-c2cd2dc5-9"})`
  text-align: center;
  padding: 4rem 2rem;
  color: #cc0c5c;
  font-size: 1.1rem;
  font-family: 'Questrial', sans-serif;
`,j=m.default.div.withConfig({displayName:"ProductsScreen.styles__EmptyMessage",componentId:"sc-c2cd2dc5-10"})`
  text-align: center;
  padding: 4rem 2rem;
  color: #999;
  font-size: 1.1rem;
  font-family: 'Questrial', sans-serif;
`,S=m.default.div.withConfig({displayName:"ProductsScreen.styles__ControlsContainer",componentId:"sc-c2cd2dc5-11"})`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  @media (max-width: 968px) {
    flex-direction: column;
  }
`,I=m.default.div.withConfig({displayName:"ProductsScreen.styles__FiltersContainer",componentId:"sc-c2cd2dc5-12"})`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-width: 200px;

  @media (max-width: 968px) {
    width: 100%;
  }
`,k=m.default.div.withConfig({displayName:"ProductsScreen.styles__FilterGroup",componentId:"sc-c2cd2dc5-13"})`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,P=m.default.label.withConfig({displayName:"ProductsScreen.styles__FilterLabel",componentId:"sc-c2cd2dc5-14"})`
  font-size: 0.9rem;
  font-weight: 500;
  color: #1a1a1a;
  font-family: 'Questrial', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,N=m.default.div.withConfig({displayName:"ProductsScreen.styles__FilterOptions",componentId:"sc-c2cd2dc5-15"})`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,$=m.default.label.withConfig({displayName:"ProductsScreen.styles__FilterCheckbox",componentId:"sc-c2cd2dc5-16"})`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.9rem;
  color: #666;
  font-family: 'Questrial', sans-serif;
  transition: color 0.2s ease;

  &:hover {
    color: #1a1a1a;
  }

  input[type='checkbox'] {
    width: 16px;
    height: 16px;
    cursor: pointer;
    accent-color: #1a1a1a;
  }
`,F=m.default.div.withConfig({displayName:"ProductsScreen.styles__ColorOption",componentId:"sc-c2cd2dc5-17"})`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.9rem;
  color: #666;
  font-family: 'Questrial', sans-serif;
  transition: color 0.2s ease;

  &:hover {
    color: #1a1a1a;
  }

  input[type='checkbox'] {
    width: 16px;
    height: 16px;
    cursor: pointer;
    accent-color: #1a1a1a;
  }
`,L=m.default.div.withConfig({displayName:"ProductsScreen.styles__ColorSwatch",componentId:"sc-c2cd2dc5-18"})`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background-color: ${e=>{let{$colorValue:t}=e;return t}};
  border: 1px solid rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
`,z=m.default.div.withConfig({displayName:"ProductsScreen.styles__SortContainer",componentId:"sc-c2cd2dc5-19"})`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 968px) {
    width: 100%;
    justify-content: space-between;
  }
`,M=m.default.label.withConfig({displayName:"ProductsScreen.styles__SortLabel",componentId:"sc-c2cd2dc5-20"})`
  font-size: 0.9rem;
  font-weight: 500;
  color: #1a1a1a;
  font-family: 'Questrial', sans-serif;
  white-space: nowrap;
`,T=m.default.select.withConfig({displayName:"ProductsScreen.styles__SortSelect",componentId:"sc-c2cd2dc5-21"})`
  padding: 0.5rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  background: white;
  color: #1a1a1a;
  font-size: 0.9rem;
  font-family: 'Questrial', sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 180px;

  &:hover {
    border-color: rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
    border-color: #9a8300;
  }
`,B=m.default.div.withConfig({displayName:"ProductsScreen.styles__SubcategoriesContainer",componentId:"sc-c2cd2dc5-22"})`
  margin-bottom: 3rem;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
`,D=m.default.h2.withConfig({displayName:"ProductsScreen.styles__SubcategoriesTitle",componentId:"sc-c2cd2dc5-23"})`
  font-size: 1.2rem;
  font-weight: 400;
  color: #1a1a1a;
  margin: 0 0 1.5rem 0;
  font-family: 'Questrial', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,O=m.default.div.withConfig({displayName:"ProductsScreen.styles__SubcategoriesGrid",componentId:"sc-c2cd2dc5-24"})`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 140px));
  gap: 0.75rem;
  justify-content: start;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(90px, 120px));
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,E=m.default.a.withConfig({displayName:"ProductsScreen.styles__SubcategoryCard",componentId:"sc-c2cd2dc5-25"})`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.4rem;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  text-decoration: none;
  color: #1a1a1a;
  font-size: 0.9rem;
  font-family: 'Questrial', sans-serif;
  transition: all 0.2s ease;
  text-align: center;
  text-transform: capitalize;
  aspect-ratio: 1.3;
  min-height: 60px;

  @media (max-width: 768px) {
    min-height: 50px;
    padding: 0.4rem 0.3rem;
    font-size: 0.85rem;
    aspect-ratio: 1.2;
  }

  &:hover {
    border-color: #9a8300;
    color: #9a8300;
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`,U=m.default.div.withConfig({displayName:"ProductsScreen.styles__MainContent",componentId:"sc-c2cd2dc5-26"})`
  flex: 1;
  min-width: 0;
`;e.i(9492);var Q=e.i(93916);e.s(["default",0,e=>{let{initialProducts:l=[],initialTotalPages:d=1}=e,c=(0,o.useSearchParams)(),m=(0,o.useRouter)(),R=(0,o.useParams)(),A=(0,Q.normalizeLocale)(R?.locale),[H,W]=(0,i.useState)({color:[],size:[]}),[J,Y]=(0,i.useState)("price_asc"),[G,X]=(0,i.useState)(1),{categories:q}=(0,f.useCategories)(),{products:K,loading:Z,error:V,totalPages:ee,availableColors:et,availableSizes:ei,colorPaletteMap:eo}=p(H,G,20,J,{products:l,totalPages:d}),er=c.get("category_id"),ea=c.get("subcategory_id"),en=er?Number(er):null,es=ea?Number(ea):null,el=en?q.find(e=>e.id===en)?.name:void 0,ed=en&&es?q.find(e=>e.id===en)?.subcategories?.find(e=>e.id===es)?.name:void 0,ec=(0,i.useMemo)(()=>{if(!en||es)return[];let e=q.find(e=>e.id===en);return e?.subcategories||[]},[q,en,es]),ep=(e,t)=>{W(i=>{let o=i[e]||[],r=o.includes(t)?o.filter(e=>e!==t):[...o,t];return{...i,[e]:r}}),X(1)},ef=e=>{e>=1&&e<=ee&&(X(e),window.scrollTo({top:0,behavior:"smooth"}))};return(0,t.jsxs)(u,{children:[(0,t.jsx)(r.default,{primaryColor:"#CC0C5C",secondaryColor:"#F2A800"}),(0,t.jsxs)(h,{children:[(0,t.jsx)(s.default,{}),(0,t.jsx)(g,{children:(0,t.jsx)(x,{children:ed||el||"All Products"})}),ec.length>0&&!es&&(0,t.jsxs)(B,{children:[(0,t.jsx)(D,{children:"Shop by Subcategory"}),(0,t.jsx)(O,{children:ec.map(e=>(0,t.jsx)(E,{onClick:t=>{var i;t.preventDefault(),i=e.id,en&&m.push((0,Q.withLocale)(A,`/products?category_id=${en}&subcategory_id=${i}`))},href:(0,Q.withLocale)(A,`/products?category_id=${en}&subcategory_id=${e.id}`),children:e.name},e.id))})]}),(0,t.jsxs)(S,{children:[(0,t.jsxs)(I,{children:[et.length>0&&(0,t.jsxs)(k,{children:[(0,t.jsx)(P,{children:"Color"}),(0,t.jsx)(N,{children:et.map(e=>{let i=eo?.get(e);return(0,t.jsxs)(F,{children:[(0,t.jsx)("input",{type:"checkbox",checked:H.color?.includes(e)||!1,onChange:()=>ep("color",e)}),i&&(0,t.jsx)(L,{$colorValue:i}),(0,t.jsx)("span",{children:e})]},e)})})]}),ei.length>0&&(0,t.jsxs)(k,{children:[(0,t.jsx)(P,{children:"Size"}),(0,t.jsx)(N,{children:ei.map(e=>(0,t.jsxs)($,{children:[(0,t.jsx)("input",{type:"checkbox",checked:H.size?.includes(e)||!1,onChange:()=>ep("size",e)}),(0,t.jsx)("span",{children:e})]},e))})]})]}),(0,t.jsxs)(U,{children:[K.length>0&&(0,t.jsxs)(z,{children:[(0,t.jsx)(M,{children:"Sort by:"}),(0,t.jsxs)(T,{value:J,onChange:e=>{Y(e.target.value),X(1)},children:[(0,t.jsx)("option",{value:"price_asc",children:"Price: Low to High"}),(0,t.jsx)("option",{value:"price_desc",children:"Price: High to Low"}),(0,t.jsx)("option",{value:"name_asc",children:"Name: A to Z"}),(0,t.jsx)("option",{value:"name_desc",children:"Name: Z to A"})]})]}),Z?(0,t.jsx)(v,{children:"Loading products..."}):V?(0,t.jsx)(C,{children:V}):0===K.length?(0,t.jsx)(j,{children:"No products found."}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(y,{children:K.map(e=>(0,t.jsx)(a.default,{product:e},e.id))}),(()=>{if(ee<=1)return null;let e=[];if(ee<=5)for(let t=1;t<=ee;t++)e.push(t);else if(G<=3){for(let t=1;t<=4;t++)e.push(t);e.push("ellipsis"),e.push(ee)}else if(G>=ee-2){e.push(1),e.push("ellipsis");for(let t=ee-3;t<=ee;t++)e.push(t)}else{e.push(1),e.push("ellipsis");for(let t=G-1;t<=G+1;t++)e.push(t);e.push("ellipsis"),e.push(ee)}return(0,t.jsxs)(b,{children:[(0,t.jsx)(w,{onClick:()=>ef(1),disabled:1===G,"aria-label":"First page",children:"⏮"}),(0,t.jsx)(w,{onClick:()=>ef(G-1),disabled:1===G,"aria-label":"Previous page",children:"◀"}),e.map((e,i)=>"ellipsis"===e?(0,t.jsx)(_,{disabled:!0,children:"..."},`ellipsis-${i}`):(0,t.jsx)(_,{onClick:()=>ef(e),$isActive:G===e,children:e},e)),(0,t.jsx)(w,{onClick:()=>ef(G+1),disabled:G===ee,"aria-label":"Next page",children:"▶"}),(0,t.jsx)(w,{onClick:()=>ef(ee),disabled:G===ee,"aria-label":"Last page",children:"⏭"})]})})()]})]})]})]}),(0,t.jsx)(n.default,{})]})}],22835)}]);