(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,27004,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"warnOnce",{enumerable:!0,get:function(){return o}});let o=e=>{}},81095,5424,e=>{"use strict";var t=e.i(72902);let i=t.keyframes`
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
`,a=t.default.div.withConfig({displayName:"Footer.styles__FooterLinkSection",componentId:"sc-a6c51aef-1"})`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  flex: 2;
  justify-content: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,n=t.default.div.withConfig({displayName:"Footer.styles__FooterContent",componentId:"sc-a6c51aef-2"})`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  justify-content: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,r=t.default.div.withConfig({displayName:"Footer.styles__LogoSection",componentId:"sc-a6c51aef-3"})`
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
`,m=t.default.li.withConfig({displayName:"Footer.styles__LinkItem",componentId:"sc-a6c51aef-9"})`
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
`;let f=t.default.div.withConfig({displayName:"Footer.styles__FooterBottom",componentId:"sc-a6c51aef-14"})`
  text-align: left;
  font-size: 12px;
`;e.s(["FooterBottom",0,f,"FooterContainer",0,o,"FooterContent",0,n,"FooterLinkSection",0,a,"LinkItem",0,m,"LinksList",0,p,"LinksSection",0,d,"Logo",0,s,"LogoDescription",0,l,"LogoSection",0,r,"SectionTitle",0,c],81095),e.s(["footerLinksData",0,[{title:"about_us",links:[{label:"Shipping Policy",href:"/policies/shipping-policy"},{label:"Returns & Refunds",href:"/policies/returns-refunds"}]},{title:"support",links:[{label:"Privacy Policy",href:"/policies/privacy-policy"},{label:"Terms & Conditions",href:"/policies/terms-conditions"}]},{title:"social",links:[{label:"Instagram",href:"https://www.instagram.com"},{label:"Facebook",href:"https://www.facebook.com"},{label:"Tiktok",href:"https://www.tiktok.com"}]}]],5424)},97005,e=>{"use strict";var t=e.i(26287);let i={primaryColor:"linear-gradient(135deg, #c39a37 0%, #b8860b 100%)",primaryColorFlat:"#d4af37",secondaryColor:"#001f3f"};e.s(["useThemeColors",0,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=(0,t.useMemo)(()=>({...i,...e}),[e]),[a,n]=(0,t.useState)(o);return(0,t.useEffect)(()=>{n({primaryColor:localStorage.getItem("theme_primary")||o.primaryColor||"linear-gradient(135deg, #a67c00 0%, #bf9b30 25%, #ffd700 50%, #d4af37 75%, #b8860b 100%)",primaryColorFlat:localStorage.getItem("theme_primary_flat")||o.primaryColorFlat,secondaryColor:localStorage.getItem("theme_secondary")||o.secondaryColor})},[o]),a}])},58090,e=>{"use strict";var t=e.i(66339);e.i(3157);var i=e.i(55062),o=e.i(85329),a=e.i(274),n=e.i(53805),r=e.i(81095),s=e.i(5424);e.i(9492);var l=e.i(93916),d=e.i(97005);function c(){let{t:e}=(0,i.useTranslation)(),c=(0,n.useParams)(),p=(0,l.normalizeLocale)(c?.locale),{secondaryColor:m}=(0,d.useThemeColors)({secondaryColor:"#ffffff"});return(0,t.jsxs)(r.FooterContainer,{$secondaryColor:m,children:[(0,t.jsxs)(r.FooterContent,{children:[(0,t.jsx)(r.FooterLinkSection,{children:s.footerLinksData.map((i,a)=>(0,t.jsxs)(r.LinksSection,{children:[(0,t.jsx)(r.SectionTitle,{$color:m,children:e(i.title)}),(0,t.jsx)(r.LinksList,{children:i.links.map((e,i)=>(0,t.jsx)(r.LinkItem,{$color:m,children:e.href.startsWith("http")?(0,t.jsx)("a",{href:e.href,target:"_blank",rel:"noreferrer",children:e.label}):(0,t.jsx)(o.default,{href:(0,l.withLocale)(p,e.href),children:e.label})},i))})]},a))}),(0,t.jsxs)(r.LogoSection,{children:[(0,t.jsx)(r.Logo,{children:(0,t.jsx)(a.default,{src:"/assets/logo.png",alt:"Logo",fill:!0,sizes:"(max-width: 768px) 110px, 150px"})}),(0,t.jsx)(r.LogoDescription,{children:e("slogan")})]})]}),(0,t.jsx)(r.FooterBottom,{children:(0,t.jsxs)("p",{children:["© ",new Date().getFullYear()," ",e("copyrightNotice")]})})]})}e.s(["default",()=>c])},76014,e=>{"use strict";var t=e.i(66339),i=e.i(72902);let o=i.keyframes`
  0% {
    background-position: 0% center;
  }
  50% {
    background-position: 100% center;
  }
  100% {
    background-position: 0% center;
  }
`,a=i.default.button.withConfig({displayName:"Button.styles__ButtonBase",componentId:"sc-fc3deb8-0"})`
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

  ${e=>{let{$variant:t,$primaryColor:a}=e;return"primary"===t&&i.css`
      background-size: 300% 300% !important;
      background: ${a} 0 center;
      color: white;
      border: none;

      &:hover {
        animation: ${o} 6s ease-in-out infinite;
      }
    `}}

  ${e=>{let{$variant:t,$primaryColorFlat:o,$secondaryColor:a}=e;return"secondary"===t&&i.css`
      background-color: white;
      color: ${a};
      border: 1px solid ${a};

      &:hover {
        background-color: #f8f8f8;
        color: ${o};
      }
    `}}

  ${e=>{let{$variant:t,$primaryColorFlat:o,$secondaryColor:a}=e;return"tertiary"===t&&i.css`
      background: none;
      color: ${a};
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
`,n=i.default.div.withConfig({displayName:"Button.styles__IconWrapper",componentId:"sc-fc3deb8-1"})`
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
`,r=i.default.span.withConfig({displayName:"Button.styles__TextWrapper",componentId:"sc-fc3deb8-2"})`
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
`;var l=e.i(97005);e.s(["default",0,e=>{let{variant:i,children:o,onClick:d,icon:c,badgeContent:p,iconColor:m}=e,{primaryColor:f,primaryColorFlat:g,secondaryColor:h}=(0,l.useThemeColors)(),u=(0,t.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M5 12H19M12 5L19 12L12 19",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),x=c||("link"===i?u:null),y=!!x;return(0,t.jsxs)(a,{$variant:i,$primaryColor:f,$primaryColorFlat:g,$secondaryColor:h,$hasIcon:y,onClick:d,children:[void 0!==p&&(0,t.jsx)(s,{$primaryColor:f,children:p}),"link"===i?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{$hasIcon:y,$variant:i,children:o}),x&&(0,t.jsx)(n,{$variant:i,$secondaryColor:h,iconColor:m,children:x})]}):(0,t.jsxs)(t.Fragment,{children:[x&&(0,t.jsx)(n,{$variant:i,$secondaryColor:h,iconColor:m,children:x}),(0,t.jsx)(r,{$hasIcon:y,$variant:i,children:o})]})]})}],76014)},56680,49633,5211,e=>{"use strict";var t=e.i(44350);let i=e=>({...e,category:e.category??null,subcategory:e.subcategory??null,variants:e.variants??[],specifications:e.specifications??{},specifications_detailed:e.specifications_detailed??[]});e.s(["mapProductDtoToModel",0,i,"mapProductDtosToModels",0,e=>e.map(i)],49633);let o=["id","name","price","price_new","price_old","availability","variant_image","currency"],a=[...o,"variant_color_palette","variant_color_name","variants"];e.s(["PRODUCT_CARD_FIELDS",0,o,"PRODUCT_LIST_FIELDS",0,a],5211);var n=e.i(94387);let r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{specFilters:o,fields:a,...n}=e,r={...n};return a&&(r.fields=Array.isArray(a)?a.join(","):a),o&&Object.entries(o).forEach(e=>{let[t,i]=e;r[`spec_${t}`]=i}),t.httpClient.get("products/",{query:r,...i})},s=function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.httpClient.get(`products/${e}/`,i)},l=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=(0,n.getProductIdFromSlug)(e);if(i)try{return await s(i,t)}catch{return null}let o=decodeURIComponent(e),a=await r({search:o,page:1,page_size:50},t),l=o.trim().toLowerCase(),d=(0,n.slugify)(o);return a.items.find(e=>{let t=e.name.trim();return!!d&&(0,n.slugify)(t)===d||t.toLowerCase()===l})??null};e.s(["getProduct",0,s,"getProductBySlug",0,l,"listProducts",0,r],56680)},18042,e=>{"use strict";var t=e.i(66339),i=e.i(26287),o=e.i(53805),a=e.i(274),n=e.i(98803),r=e.i(56680),s=e.i(49633),l=e.i(72902);let d=l.default.div.withConfig({displayName:"FindSimilarModal.styles__ModalOverlay",componentId:"sc-e57bfe8e-0"})`
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
`,m=l.default.h3.withConfig({displayName:"FindSimilarModal.styles__ModalTitle",componentId:"sc-e57bfe8e-3"})`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #0f0f0f;
`,f=l.default.button.withConfig({displayName:"FindSimilarModal.styles__CloseButton",componentId:"sc-e57bfe8e-4"})`
  border: none;
  background: none;
  cursor: pointer;
  color: #0f0f0f;
  font-size: 1.1rem;
  padding: 0.25rem;
  line-height: 1;
`,g=l.default.div.withConfig({displayName:"FindSimilarModal.styles__ModalBody",componentId:"sc-e57bfe8e-5"})`
  padding: 1.25rem 1.5rem 1.5rem;
  overflow: auto;
`,h=l.default.p.withConfig({displayName:"FindSimilarModal.styles__StatusText",componentId:"sc-e57bfe8e-6"})`
  margin: 0;
  color: #6b6b6b;
`,u=l.default.div.withConfig({displayName:"FindSimilarModal.styles__Grid",componentId:"sc-e57bfe8e-7"})`
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
`,w=l.default.p.withConfig({displayName:"FindSimilarModal.styles__ProductName",componentId:"sc-e57bfe8e-10"})`
  margin: 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: #1a1a1a;
`,b=l.default.p.withConfig({displayName:"FindSimilarModal.styles__ProductPrice",componentId:"sc-e57bfe8e-11"})`
  margin: 0;
  font-size: 0.85rem;
  color: #6b6b6b;
`;e.i(9492);var v=e.i(93916),C=e.i(94387);let _=e=>{let{isOpen:l,onClose:_,product:j}=e,k=(0,o.useRouter)(),I=(0,o.useParams)(),S=(0,v.normalizeLocale)(I?.locale),$=(0,i.useRef)(null),[N,P]=(0,i.useState)(!1),[z,T]=(0,i.useState)(""),[L,F]=(0,i.useState)([]),B=(0,i.useMemo)(()=>j.subcategory?.name?`Similar in ${j.subcategory.name}`:j.category?.name?`Similar in ${j.category.name}`:"Similar items",[j.category?.name,j.subcategory?.name]);return((0,i.useEffect)(()=>{l&&(async()=>{P(!0),T("");try{let e=await (0,r.listProducts)({subcategory_id:j.subcategory_id||void 0,page:1,page_size:8}),t=(0,s.mapProductDtosToModels)(e.items).filter(e=>e.id!==j.id);F(t)}catch{T("Unable to load similar products.")}finally{P(!1)}})()},[l,j.category_id,j.id,j.subcategory_id]),(0,i.useEffect)(()=>{if(!l)return;let e=e=>{"Escape"===e.key&&_()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[l,_]),l)?(0,t.jsx)(d,{onClick:e=>{e.target===e.currentTarget&&_()},children:(0,t.jsxs)(c,{ref:$,children:[(0,t.jsxs)(p,{children:[(0,t.jsx)(m,{children:B}),(0,t.jsx)(f,{onClick:_,"aria-label":"Close",children:"✕"})]}),(0,t.jsxs)(g,{children:[N&&(0,t.jsx)(h,{children:"Loading similar items..."}),!N&&z&&(0,t.jsx)(h,{children:z}),!N&&!z&&0===L.length&&(0,t.jsx)(h,{children:"No similar items found."}),!N&&!z&&L.length>0&&(0,t.jsx)(u,{children:L.map(e=>(0,t.jsxs)(x,{onClick:()=>k.push((0,v.withLocale)(S,`/product/${(0,C.buildProductSlug)(e.name,e.id)}`)),children:[(0,t.jsx)(y,{children:(0,t.jsx)(a.default,{src:(0,n.getImageUrl)(e.variant_image)||"/assets/logo.png",alt:e.name,fill:!0,sizes:"(max-width: 768px) 50vw, 200px"})}),(0,t.jsx)(w,{children:e.name}),(0,t.jsx)(b,{children:e.price_new?`${e.price_new} USD`:`${e.price} USD`})]},e.id))})]})]})}):null},j=l.default.div.withConfig({displayName:"ProductCell.styles__Card",componentId:"sc-3e0cdb6d-0"})`
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
`,k=l.default.div.withConfig({displayName:"ProductCell.styles__Wrapper",componentId:"sc-3e0cdb6d-1"})`
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
`,S=l.default.div.withConfig({displayName:"ProductCell.styles__FindSimilar",componentId:"sc-3e0cdb6d-3"})`
  position: absolute;
  display: flex;
  gap: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 10;
`,$=l.default.div.withConfig({displayName:"ProductCell.styles__CardImage",componentId:"sc-3e0cdb6d-4"})`
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

  ${S} {
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

  &:hover ${S} {
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
`,P=l.default.p.withConfig({displayName:"ProductCell.styles__Title",componentId:"sc-3e0cdb6d-6"})`
  font-size: 0.8em;
  text-transform: uppercase;
  color: #4d4d4d;
  margin: 0;
`,z=l.default.div.withConfig({displayName:"ProductCell.styles__PriceContainer",componentId:"sc-3e0cdb6d-7"})`
  display: flex;
  margin: 5px 0;
  justify-content: start;
  width: 100%;
`,T=l.default.p.withConfig({displayName:"ProductCell.styles__Price",componentId:"sc-3e0cdb6d-8"})`
  font-size: 1.1em;
  margin: 0;
  font-weight: 700;
`,L=l.default.p.withConfig({displayName:"ProductCell.styles__OldPrice",componentId:"sc-3e0cdb6d-9"})`
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
`;let F=l.default.div.withConfig({displayName:"ProductCell.styles__ButtonCompare",componentId:"sc-3e0cdb6d-14"})`
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

  ${F}:hover & {
    top: -100%;
    color: #fff;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;let B=l.default.div.withConfig({displayName:"ProductCell.styles__Overlay",componentId:"sc-3e0cdb6d-16"})`
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
`,D=l.default.div.withConfig({displayName:"ProductCell.styles__OverlayIcon",componentId:"sc-3e0cdb6d-17"})`
  font-size: 1.5rem;
  color: #e60000;
  font-weight: bold;
`;var E=e.i(76014);e.s(["default",0,e=>{let{product:r}=e,s=(0,o.useRouter)(),l=(0,o.useParams)(),d=(0,v.normalizeLocale)(l?.locale),[c,p]=(0,i.useState)(!1),m=(0,n.getImageUrl)(r.variant_image)||"/assets/logo.png";return(0,t.jsxs)(j,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"}),s.push((0,v.withLocale)(d,`/product/${(0,C.buildProductSlug)(r.name,r.id)}`))},children:[!r.availability&&(0,t.jsx)(B,{children:(0,t.jsx)(D,{children:"Unavailable"})}),(0,t.jsxs)(k,{children:[(0,t.jsxs)($,{children:[(0,t.jsx)(a.default,{src:m,alt:r.name,fill:!0,sizes:"(max-width: 768px) 40vw, 15rem",style:{objectFit:"cover"}}),(0,t.jsx)(S,{onClick:e=>e.stopPropagation(),children:(0,t.jsx)(E.default,{variant:"tertiary",icon:(0,t.jsx)(a.default,{src:"/assets/heart.svg",alt:"like",width:16,height:16}),onClick:()=>{let e=localStorage.getItem("likedProducts"),t=[];if(e)try{t=JSON.parse(e)}catch{t=[]}let i=t.findIndex(e=>e.id===r.id);-1!==i?t.splice(i,1):t.push(r),localStorage.setItem("likedProducts",JSON.stringify(t)),window.dispatchEvent(new Event("likedUpdated"))},children:"Like"})}),(0,t.jsxs)(I,{onClick:e=>e.stopPropagation(),children:[(0,t.jsx)(E.default,{variant:"tertiary",icon:(0,t.jsx)(a.default,{src:"/assets/plus.svg",alt:"cart",width:16,height:16}),onClick:()=>p(!0),children:"Find Similar"}),(0,t.jsx)(E.default,{variant:"tertiary",icon:(0,t.jsx)(a.default,{src:"/assets/cart.svg",alt:"cart",width:16,height:16}),onClick:()=>{let e=localStorage.getItem("cartProducts"),t=[];if(e)try{let i=JSON.parse(e);t=Array.isArray(i)&&i.length>0&&i[0].bagId?i:i.map((e,t)=>({bagId:`bag-${Date.now()}-${t}-${e.id}`,product:e,quantity:1}))}catch{t=[]}let i=t.find(e=>e.product.id===r.id);if(i){let e=t.filter(e=>e.bagId!==i.bagId);localStorage.setItem("cartProducts",JSON.stringify(e))}else{let e={bagId:`bag-${Date.now()}-${r.id}`,product:r,quantity:1};t.push(e),localStorage.setItem("cartProducts",JSON.stringify(t))}window.dispatchEvent(new Event("cartUpdated"))},children:"Add to Cart"})]})]}),(0,t.jsxs)(N,{children:[(0,t.jsx)(P,{children:r.name}),(0,t.jsx)(z,{children:r.price_new?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(T,{children:[r.price_new," USD"]}),(0,t.jsxs)(L,{children:[r.price," USD"]})]}):(0,t.jsxs)(T,{children:[r.price," USD"]})})]})]}),(0,t.jsx)(_,{isOpen:c,onClose:()=>p(!1),product:r})]})}],18042)},19243,e=>{"use strict";var t=e.i(66339),i=e.i(26287),o=e.i(53805),a=e.i(16460),n=e.i(72902);let r=n.default.div.withConfig({displayName:"HeroSlide.styles__HeroContainer",componentId:"sc-e2edfdfc-0"})`
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
`,s=n.keyframes`
  0% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -45vh, 0) scale(0.06);
    opacity: 1;
  }
`,l=n.keyframes`
  0% {
    transform: translate3d(0, -45vh, 0) scale(0.06);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 1;
  }
  `,d=n.default.img.withConfig({displayName:"HeroSlide.styles__CentralImage",componentId:"sc-e2edfdfc-1"})`
  max-width: 50vw;
  width: 600px;
  pointer-events: none;
  will-change: transform;
  transform-origin: top center;

  color: ${e=>{let{$phase:t}=e;return"done"===t||"animating-out"===t?"#9A8300":"#ffffff"}};
  transition: color 0.5s ease;
  & img {
    width: 100%;
    height: auto;
  }
  ${e=>{let{$phase:t}=e;switch(t){case"idle":return n.css`
          transform: translate3d(0, 0, 0) scale(1);
          opacity: 1;
        `;case"animating-out":return n.css`
          animation: ${s} 0.5s ease forwards;
        `;case"animating-in":return n.css`
          animation: ${l} 0.5s ease forwards;
        `;case"done":return n.css`
          transform: translate3d(0, -50vh, 0) scale(0.1);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: opacity 0.2s ease;
        `}}}

  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    transform: none !important;
    opacity: 1 !important;
  }
`,c=()=>{let[e,o]=(0,i.useState)("idle"),a=(0,i.useRef)(0);return(0,i.useEffect)(()=>{let t=()=>{let t=window.scrollY,i=t>a.current;i&&"animating-out"!==e&&"done"!==e?(o("animating-out"),setTimeout(()=>o("done"),500)):i||"animating-in"===e||"idle"===e||(o("animating-in"),setTimeout(()=>o("idle"),500)),a.current=t};return window.addEventListener("scroll",t,{passive:!0}),()=>window.removeEventListener("scroll",t)},[e]),(0,t.jsx)(r,{children:(0,t.jsx)(d,{src:"/assets/hero.jpg",alt:"Hero",$phase:e})})};var p=e.i(58090);e.i(3157);var m=e.i(55062),f=e.i(18042);let g=n.default.div.withConfig({displayName:"ProductsTrending.styles__BestsellerCarousel",componentId:"sc-809f1d83-0"})`
  margin: 5rem 0;
  padding: 0 8rem;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`,h=n.default.div.withConfig({displayName:"ProductsTrending.styles__TitleContainer",componentId:"sc-809f1d83-1"})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  align-items: flex-end;
`,u=n.default.div.withConfig({displayName:"ProductsTrending.styles__ScrollableSwiper",componentId:"sc-809f1d83-2"})`
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
`,x=n.default.button.withConfig({displayName:"ProductsTrending.styles__ArrowButton",componentId:"sc-809f1d83-3"})`
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

  ${e=>{let{$direction:t}=e;return"left"===t&&n.css`
      left: 8px;
    `}}
  ${e=>{let{$direction:t}=e;return"right"===t&&n.css`
      right: 8px;
    `}}
  &:hover {
    background-color: ${e=>{let{$primaryColor:t}=e;return t}};

    svg {
      stroke: #001f3f;
    }
  }
`,y=n.default.svg.withConfig({displayName:"ProductsTrending.styles__ArrowSvg",componentId:"sc-809f1d83-4"})`
  width: 24px;
  height: 24px;
  color: #b7b7b7;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
`,w=n.default.p.withConfig({displayName:"ProductsTrending.styles__BestsellerTitle",componentId:"sc-809f1d83-5"})`
  font-size: 24px;
  font-weight: bold;
  color: ${e=>{let{$secondaryColor:t}=e;return t}};
  text-align: center;
  margin: 0;
`,b=n.default.p.withConfig({displayName:"ProductsTrending.styles__ProductType",componentId:"sc-809f1d83-6"})`
  font-size: 18px;
  font-style: italic;
  color: ${e=>{let{$secondaryColor:t}=e;return t}};
  text-align: center;
  vertical-align: bottom;
  margin: 0;
`,v=e=>{let{productType:o,primaryColor:a,secondaryColor:n,data:r}=e,{t:s}=(0,m.useTranslation)(),l=(0,i.useRef)(null),d=e=>{l.current&&l.current.scrollBy({left:"left"===e?-200:200,behavior:"smooth"})};return(0,t.jsxs)(g,{children:[(0,t.jsxs)(h,{children:[(0,t.jsx)(w,{$secondaryColor:n,children:s("trending")}),(0,t.jsx)(b,{$secondaryColor:n,children:o})]}),(0,t.jsx)(x,{$direction:"left",onClick:()=>d("left"),$primaryColor:a,style:{marginLeft:"8rem"},children:(0,t.jsx)(y,{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5L8.25 12l7.5-7.5"})})}),(0,t.jsx)(u,{ref:l,children:r.map(e=>(0,t.jsx)(f.default,{product:e},e.id))}),(0,t.jsx)(x,{$direction:"right",onClick:()=>d("right"),$primaryColor:a,style:{marginRight:"8rem"},children:(0,t.jsx)(y,{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5L15.75 12l-7.5 7.5"})})})]})};var C=e.i(274);let _=n.default.section.withConfig({displayName:"CategoryHero.styles__HeroWrapper",componentId:"sc-ae814821-0"})`
  width: 100vw;
  display: flex;
  justify-content: center;
`,j=n.default.div.withConfig({displayName:"CategoryHero.styles__HeroInner",componentId:"sc-ae814821-1"})`
  width: 100%;
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 0;
  height: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`,k=n.default.div.withConfig({displayName:"CategoryHero.styles__LeftPanel",componentId:"sc-ae814821-2"})`
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
`,I=n.default.div.withConfig({displayName:"CategoryHero.styles__MainImage",componentId:"sc-ae814821-3"})`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  img {
    object-fit: cover;
    object-position: center;
  }
`,S=n.default.div.withConfig({displayName:"CategoryHero.styles__RightPanel",componentId:"sc-ae814821-4"})`
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
`,$=n.default.h1.withConfig({displayName:"CategoryHero.styles__SuperTitle",componentId:"sc-ae814821-5"})`
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
`,N=n.default.p.withConfig({displayName:"CategoryHero.styles__Description",componentId:"sc-ae814821-6"})`
  font-family: 'EB Garamond', serif;
  margin: 0 0 20px 0;
  font-size: 18px;
  line-height: 1.6;
  color: #6e6865;
  align-content: flex-start;
  text-align: end;
  flex: 1;
`,P=n.default.div.withConfig({displayName:"CategoryHero.styles__InfoRow",componentId:"sc-ae814821-7"})`
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
`,z=n.default.div.withConfig({displayName:"CategoryHero.styles__ProductsStrip",componentId:"sc-ae814821-8"})`
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
`,T=n.default.div.withConfig({displayName:"CategoryHero.styles__CTARow",componentId:"sc-ae814821-9"})`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  margin-top: auto;
  padding-top: 24px;
  flex-wrap: wrap;
  padding: 0 15px;
`,L=n.default.div.withConfig({displayName:"CategoryHero.styles__Eyebrow",componentId:"sc-ae814821-10"})`
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
`;var F=e.i(76014);let B=e=>{let{categoryTagline:i,categoryDescription:o,featuredProducts:a,mainImage:n,mainImageAlt:r="Category hero image",onCtaClick:s=()=>{},ctaText:l="Shop now",categoryLabel:d,className:c}=e;return(0,t.jsx)(_,{className:c,children:(0,t.jsxs)(j,{children:[(0,t.jsxs)(k,{children:[d?(0,t.jsx)(L,{children:d}):null,(0,t.jsx)(I,{children:(0,t.jsx)(C.default,{src:n,alt:r,fill:!0,sizes:"(max-width: 1024px) 100vw, 50vw",priority:!0})})]}),(0,t.jsxs)(S,{children:[(0,t.jsxs)(P,{children:[(0,t.jsx)($,{children:i}),(0,t.jsx)(N,{children:o})]}),(0,t.jsx)(z,{children:(a||[]).slice(0,4).map(e=>(0,t.jsx)(f.default,{product:e},String(e.id)))}),(0,t.jsx)(T,{children:(0,t.jsx)(F.default,{variant:"link",onClick:s,children:l})})]})]})})},D=n.default.button.withConfig({displayName:"CategoryCell.styles__CellButton",componentId:"sc-42d5b89c-0"})`
  position: relative;
  border: none;
  width: 100%;
  min-height: clamp(320px, 32vw, 480px);
  border-radius: 0;
  padding: 2.25rem 2rem;
  text-align: center;
  cursor: pointer;
  color: #ffffff;
  background-image: ${e=>{let{$imageUrl:t}=e;return`linear-gradient(rgba(11, 27, 58, 0.62), rgba(11, 27, 58, 0.62)), url(${t})`}};
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
`,E=n.default.h3.withConfig({displayName:"CategoryCell.styles__CellTitle",componentId:"sc-42d5b89c-1"})`
  margin: 0 0 0.5rem;
  font-size: 1.8rem;
  font-family: 'Cormorant Garamond', 'EB Garamond', 'GFS Didot', serif;
  font-weight: 400;
  letter-spacing: -0.02em;
`,M=n.default.p.withConfig({displayName:"CategoryCell.styles__CellDescription",componentId:"sc-42d5b89c-2"})`
  margin: 0;
  font-size: 0.9rem;
  font-family: 'GFS Didot', serif;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.5;
`,R=e=>{let{title:i,description:o,imageUrl:a,onClick:n}=e;return(0,t.jsxs)(D,{type:"button",onClick:n,$imageUrl:a,children:[(0,t.jsx)(E,{children:i}),o?(0,t.jsx)(M,{children:o}):null]})},H="rgba(9, 28, 85, 0.89)",U="rgba(75, 34, 0, 0.89)",O="#B79A6A",G={staggered:n.css`
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
  `,split_focus:n.css`
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
  `,asymmetric_row:n.css`
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
  `,overlap:n.css`
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
  `,editorial_grid:n.css`
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
  `},A=n.default.section.withConfig({displayName:"TemplateSection.styles__Section",componentId:"sc-38e96bb1-0"})`
  width: 100%;
  padding: 5rem 0.3rem 2.5rem;
  box-sizing: border-box;
  text-align: center;

  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.38), rgba(255, 255, 255, 0)),
    ${"#F7EFE9"};
`,Y=n.default.div.withConfig({displayName:"TemplateSection.styles__HeaderRow",componentId:"sc-38e96bb1-1"})`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`,W=n.default.div.withConfig({displayName:"TemplateSection.styles__TitleBlock",componentId:"sc-38e96bb1-2"})`
  max-width: 680px;
  margin: 0 auto;
`,X=n.default.div.withConfig({displayName:"TemplateSection.styles__TitleRow",componentId:"sc-38e96bb1-3"})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`,J=n.default.span.withConfig({displayName:"TemplateSection.styles__TitleLine",componentId:"sc-38e96bb1-4"})`
  flex: 1;
  max-width: 120px;
  height: 1px;
  background-color: ${O};
  opacity: 0.5;

  @media (max-width: 640px) {
    max-width: 60px;
  }
`,q=n.default.h2.withConfig({displayName:"TemplateSection.styles__Title",componentId:"sc-38e96bb1-5"})`
  margin: 0;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 500;
  font-family: 'Canela', 'Cormorant Garamond', 'EB Garamond', serif;
  letter-spacing: -0.03em;
  color: ${H};
`,K=n.default.p.withConfig({displayName:"TemplateSection.styles__Description",componentId:"sc-38e96bb1-6"})`
  margin: 0 auto;
  max-width: 56ch;
  font-size: 1rem;
  font-family: 'Canela', 'Cormorant Garamond', 'EB Garamond', serif;
  line-height: 1.2;
  color: ${U};
`,V=n.default.div.withConfig({displayName:"TemplateSection.styles__CardsGrid",componentId:"sc-38e96bb1-7"})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 200px));
  gap: 1.1rem;
  justify-content: center;
  max-width: 680px;
  margin: 0 auto 3rem;
  margin-bottom: 3rem;

  ${e=>{let{$variant:t}=e;return t?G[t]:null}}
`,Q=n.default.div.withConfig({displayName:"TemplateSection.styles__Card",componentId:"sc-38e96bb1-8"})`
  max-width: 260px;
  margin: 0 auto;
  padding: 1.25rem 0.4rem 1rem;
  text-align: center;

  font-size: 0.95rem;
  line-height: 1.6;
  color: ${"rgba(63, 58, 54, 0.58)"};

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
    color: ${H};
  }

  h3::after {
    content: '';
    display: block;
    width: 26px;
    height: 1px;
    margin: 0.45rem auto 0;
    background-color: ${O};
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
    color: ${U};
    background: ${"rgba(255, 255, 255, 0.85)"};

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
`,Z=n.default.div.withConfig({displayName:"TemplateSection.styles__SubcategoryGrid",componentId:"sc-38e96bb1-9"})`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 4px;
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,ee=e=>{let{title:i,description:o,buttonLabel:a,onButtonClick:n,cards:r,subcategoryItems:s,layoutVariant:l}=e;return(0,t.jsxs)(A,{children:[(0,t.jsxs)(Y,{children:[(0,t.jsxs)(W,{children:[(0,t.jsxs)(X,{children:[(0,t.jsx)(J,{"aria-hidden":"true"}),(0,t.jsx)(q,{children:i}),(0,t.jsx)(J,{"aria-hidden":"true"})]}),(0,t.jsx)(K,{children:o})]}),a?(0,t.jsx)(F.default,{variant:"link",onClick:n,children:a}):null]}),r&&r.length>0?(0,t.jsx)(V,{$variant:l,children:r.map((e,i)=>(0,t.jsx)(Q,{children:e},`card-${i}`))}):null,s&&s.length>0?(0,t.jsx)(Z,{children:s.slice(0,4).map(e=>(0,t.jsx)(R,{title:e.title,description:e.description,imageUrl:e.imageUrl,onClick:e.onClick},e.title))}):null]})};var et=e.i(59285);e.i(9492);var ei=e.i(93916);let eo=()=>{let e=(0,o.useRouter)(),i=(0,o.useParams)(),a=(0,ei.normalizeLocale)(i?.locale),{categories:n}=(0,et.useCategories)(),r=[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Handmade"}),(0,t.jsx)("p",{children:"Every stitch tells a story, crafted by hand with care and patience."})]},"handmade"),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Timeless"}),(0,t.jsx)("p",{children:"Designed to age beautifully, your everyday companion, season after season."})]},"timeless"),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Personalizable"}),(0,t.jsx)("p",{children:"Choose your colors, details, and finish, to match your style or the moment."})]},"personalizable")],s=n.flatMap(t=>(t.subcategories||[]).map((i,o)=>({title:i.name,description:t.name,imageUrl:`/assets/bag${o%4+1}.webp`,onClick:()=>e.push((0,ei.withLocale)(a,`/products?category_id=${t.id}&subcategory_id=${i.id}`))}))).slice(0,4);return(0,t.jsx)(ee,{title:"Made to stay with you",description:"Made for the moments you keep, not just the ones you gift.",layoutVariant:"staggered",cards:r,subcategoryItems:s})},ea=n.default.div.withConfig({displayName:"LandingScreen.styles__LandingScreenContainer",componentId:"sc-70b8bc6c-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;var en=e.i(97005),er=e.i(56680),es=e.i(49633),el=e.i(5211);let ed=a.default;function ec(e){let{initialTrendingBagsProducts:a=[],initialTrendingDressProducts:n=[]}=e,r=(0,o.useRouter)(),s=(0,o.useSearchParams)(),l=(0,o.useParams)(),d=(0,ei.normalizeLocale)(l?.locale),{primaryColor:m,secondaryColor:f}=(0,en.useThemeColors)(),[g,h]=(0,i.useState)(a),[u,x]=(0,i.useState)(n);return(0,i.useEffect)(()=>{let e=s.get("scrollTo");if(!e)return;let t=document.getElementById(e);t&&(t.scrollIntoView({behavior:"smooth",block:"start"}),r.replace((0,ei.withLocale)(d,"/")))},[s,r,d]),(0,i.useEffect)(()=>{a.length>0||n.length>0||(async()=>{try{let[e,t]=await Promise.all([(0,er.listProducts)({page:1,page_size:10,fields:el.PRODUCT_CARD_FIELDS}),(0,er.listProducts)({page:1,page_size:10,fields:el.PRODUCT_CARD_FIELDS})]);h((0,es.mapProductDtosToModels)(e.items)),x((0,es.mapProductDtosToModels)(t.items))}catch(e){console.error("Error fetching products:",e)}})()},[a,n]),(0,t.jsxs)(ea,{children:[(0,t.jsx)(ed,{primaryColor:m,secondaryColor:f}),(0,t.jsx)(c,{}),(0,t.jsx)(eo,{}),(0,t.jsx)("section",{id:"bestsellers",children:(0,t.jsx)(B,{categoryTagline:"Carry Elegance",categoryDescription:"Discover our curated collection of premium bags and accessories that blend style with functionality.",featuredProducts:g.slice(0,4),mainImage:"/assets/bag2.jpg",mainImageAlt:"Premium bag collection",categoryLabel:"Featured Collection",ctaText:"Shop Bags",onCtaClick:()=>r.push((0,ei.withLocale)(d,"/products"))})}),(0,t.jsx)("section",{id:"deals",children:(0,t.jsx)(v,{primaryColor:m,secondaryColor:f,productType:"in Bags",data:g})}),(0,t.jsx)(ee,{title:"Handmade",description:"Every stitch tells a story, crafted by hand with care and patience."}),(0,t.jsx)("section",{id:"new",children:(0,t.jsx)(v,{primaryColor:m,secondaryColor:f,productType:"in Dresses and Matching Sets",data:u})}),(0,t.jsx)(p.default,{})]})}e.s(["default",()=>ec],19243)}]);