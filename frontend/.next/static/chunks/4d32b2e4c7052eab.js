(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,27004,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"warnOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},81095,5424,e=>{"use strict";var t=e.i(72902);let i=t.keyframes`
    0% { transform: translateY(-50px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
`,a=t.default.footer.withConfig({displayName:"Footer.styles__FooterContainer",componentId:"sc-a6c51aef-0"})`
  color: ${e=>{let{$secondaryColor:t}=e;return t}};
  background-color: #001f3f;
  width: 100%;
  padding: 4rem 6rem;
  font-family: 'Questrial', sans-serif;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 20px;
  }
`,o=t.default.div.withConfig({displayName:"Footer.styles__FooterLinkSection",componentId:"sc-a6c51aef-1"})`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  flex: 2;
  justify-content: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,r=t.default.div.withConfig({displayName:"Footer.styles__FooterContent",componentId:"sc-a6c51aef-2"})`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  justify-content: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,s=t.default.div.withConfig({displayName:"Footer.styles__LogoSection",componentId:"sc-a6c51aef-3"})`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,n=t.default.div.withConfig({displayName:"Footer.styles__Logo",componentId:"sc-a6c51aef-4"})`
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
`;e.s(["FooterBottom",0,m,"FooterContainer",0,a,"FooterContent",0,r,"FooterLinkSection",0,o,"LinkItem",0,f,"LinksList",0,p,"LinksSection",0,d,"Logo",0,n,"LogoDescription",0,l,"LogoSection",0,s,"SectionTitle",0,c],81095),e.s(["footerLinksData",0,[{title:"about_us",links:[{label:"Shipping Policy",href:"/policies/shipping-policy"},{label:"Returns & Refunds",href:"/policies/returns-refunds"}]},{title:"support",links:[{label:"Privacy Policy",href:"/policies/privacy-policy"},{label:"Terms & Conditions",href:"/policies/terms-conditions"}]},{title:"social",links:[{label:"Instagram",href:"https://www.instagram.com"},{label:"Facebook",href:"https://www.facebook.com"},{label:"Tiktok",href:"https://www.tiktok.com"}]}]],5424)},97005,e=>{"use strict";var t=e.i(26287);let i={primaryColor:"linear-gradient(135deg, #c39a37 0%, #b8860b 100%)",primaryColorFlat:"#d4af37",secondaryColor:"#001f3f"};e.s(["useThemeColors",0,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=(0,t.useMemo)(()=>({...i,...e}),[e]),[o,r]=(0,t.useState)(a);return(0,t.useEffect)(()=>{r({primaryColor:localStorage.getItem("theme_primary")||a.primaryColor||"linear-gradient(135deg, #a67c00 0%, #bf9b30 25%, #ffd700 50%, #d4af37 75%, #b8860b 100%)",primaryColorFlat:localStorage.getItem("theme_primary_flat")||a.primaryColorFlat,secondaryColor:localStorage.getItem("theme_secondary")||a.secondaryColor})},[a]),o}])},58090,e=>{"use strict";var t=e.i(66339);e.i(3157);var i=e.i(55062),a=e.i(85329),o=e.i(274),r=e.i(53805),s=e.i(81095),n=e.i(5424);e.i(9492);var l=e.i(93916),d=e.i(97005);function c(){let{t:e}=(0,i.useTranslation)(),c=(0,r.useParams)(),p=(0,l.normalizeLocale)(c?.locale),{secondaryColor:f}=(0,d.useThemeColors)({secondaryColor:"#ffffff"});return(0,t.jsxs)(s.FooterContainer,{$secondaryColor:f,children:[(0,t.jsxs)(s.FooterContent,{children:[(0,t.jsx)(s.FooterLinkSection,{children:n.footerLinksData.map((i,o)=>(0,t.jsxs)(s.LinksSection,{children:[(0,t.jsx)(s.SectionTitle,{$color:f,children:e(i.title)}),(0,t.jsx)(s.LinksList,{children:i.links.map((e,i)=>(0,t.jsx)(s.LinkItem,{$color:f,children:e.href.startsWith("http")?(0,t.jsx)("a",{href:e.href,target:"_blank",rel:"noreferrer",children:e.label}):(0,t.jsx)(a.default,{href:(0,l.withLocale)(p,e.href),children:e.label})},i))})]},o))}),(0,t.jsxs)(s.LogoSection,{children:[(0,t.jsx)(s.Logo,{children:(0,t.jsx)(o.default,{src:"/assets/logo.png",alt:"Logo",fill:!0,sizes:"(max-width: 768px) 110px, 150px"})}),(0,t.jsx)(s.LogoDescription,{children:e("slogan")})]})]}),(0,t.jsx)(s.FooterBottom,{children:(0,t.jsxs)("p",{children:["© ",new Date().getFullYear()," ",e("copyrightNotice")]})})]})}e.s(["default",()=>c])},77018,e=>{"use strict";var t=e.i(66339),i=e.i(26287),a=e.i(53805),o=e.i(59285),r=e.i(72902),s=e.i(85329);let n=r.default.nav.withConfig({displayName:"Breadcrumb.styles__BreadcrumbNav",componentId:"sc-e17aab5a-0"})`
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
`,l=(0,r.default)(s.default).withConfig({displayName:"Breadcrumb.styles__BreadcrumbLink",componentId:"sc-e17aab5a-1"})`
  text-decoration: none;
  color: #001f3f;
  transition: color 0.3s ease;
  font-family: 'Questrial', sans-serif;

  &:hover {
    text-decoration: underline;
    color: #003366;
  }
`,d=r.default.span.withConfig({displayName:"Breadcrumb.styles__BreadcrumbText",componentId:"sc-e17aab5a-2"})`
  color: #001f3f;
`,c=r.default.span.withConfig({displayName:"Breadcrumb.styles__BreadcrumbSeparator",componentId:"sc-e17aab5a-3"})`
  margin: 0 8px;
  color: #dedede;
  font-family: 'Questrial', sans-serif;
`;e.i(9492);var p=e.i(93916);e.s(["default",0,e=>{let{categoryName:r,subcategoryName:s,productName:f}=e,m=(0,a.useParams)(),h=(0,a.usePathname)(),u=(0,a.useSearchParams)(),{categories:g}=(0,o.useCategories)(),x=(0,p.normalizeLocale)(m?.locale),y=h.split("/").filter(e=>e),b=y[0]===x?y.slice(1):y,w=f||m.slug,_=u.get("category_id"),S=u.get("subcategory_id"),j=_?Number(_):null,C=S?Number(S):null,v=(0,i.useMemo)(()=>{if(j)return g.find(e=>e.id===j)?.name},[g,j]),k=(0,i.useMemo)(()=>{if(j&&C)return g.find(e=>e.id===j)?.subcategories?.find(e=>e.id===C)?.name},[g,j,C]),I=r||v,N=s||k,L=[];return b.includes("profile")||b.includes("orders")||b.includes("shipping")||b.includes("cart")?(L.push({label:"Home",path:(0,p.withLocale)(x,"/")}),b.includes("profile")&&L.push({label:"Profile",path:(0,p.withLocale)(x,"/profile")}),b.includes("orders")&&L.push({label:"Order History",path:(0,p.withLocale)(x,"/orders")}),b.includes("shipping")&&L.push({label:"Shipping Information",path:(0,p.withLocale)(x,"/shipping")}),b.includes("cart")&&L.push({label:"Cart",path:(0,p.withLocale)(x,"/cart")})):(L.push({label:"Catalog",path:(0,p.withLocale)(x,"/")}),I&&j&&L.push({label:I,path:(0,p.withLocale)(x,`/products?category_id=${j}`)}),N&&I&&j&&C&&L.push({label:N,path:(0,p.withLocale)(x,`/products?category_id=${j}&subcategory_id=${C}`)}),w&&b.includes("product")&&L.push({label:decodeURIComponent(w),path:h})),(0,t.jsx)(n,{children:L.map((e,a)=>{let o=a===L.length-1;return(0,t.jsxs)(i.default.Fragment,{children:[a>0&&(0,t.jsx)(c,{children:"/"}),o?(0,t.jsx)(d,{children:e.label}):(0,t.jsx)(l,{href:e.path,children:e.label})]},a)})})}],77018)},41078,89093,e=>{"use strict";var t=e.i(44350);e.s([],41078),e.s(["apiClient",()=>t.httpClient],89093)},17651,e=>{"use strict";var t=e.i(66339),i=e.i(26287),a=e.i(53805),o=e.i(69650),r=e.i(16460),s=e.i(58090),n=e.i(77018);e.i(41078),e.i(89093);var l=e.i(31077);let d=e=>(0,l.sessionFetch)(`/api/addresses/${e}/default`,{method:"POST"});var c=e.i(72902);let p=c.keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,f=c.keyframes`
  from {
    transform: translateY(30px) scale(0.95);
    opacity: 0;
  }
  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
`,m=c.default.div.withConfig({displayName:"ShippingScreen.styles__ShippingContainer",componentId:"sc-16aa94e6-0"})`
  min-height: calc(100vh - 200px);
  padding: 10rem 2rem;
  background: #fafafa;
  font-family: 'Questrial', sans-serif;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`,h=c.default.div.withConfig({displayName:"ShippingScreen.styles__ShippingContent",componentId:"sc-16aa94e6-1"})`
  max-width: 1000px;
  margin: 0 auto;
`,u=c.default.div.withConfig({displayName:"ShippingScreen.styles__ShippingHeader",componentId:"sc-16aa94e6-2"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`,g=c.default.h1.withConfig({displayName:"ShippingScreen.styles__ShippingTitle",componentId:"sc-16aa94e6-3"})`
  font-size: 2rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  font-family: 'Questrial', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,x=c.default.button.withConfig({displayName:"ShippingScreen.styles__AddButton",componentId:"sc-16aa94e6-4"})`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #001f3f;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 500;
  font-family: 'Questrial', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #003366;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 31, 63, 0.25);
  }
`,y=c.default.div.withConfig({displayName:"ShippingScreen.styles__AddressList",componentId:"sc-16aa94e6-5"})`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,b=c.default.div.withConfig({displayName:"ShippingScreen.styles__AddressCard",componentId:"sc-16aa94e6-6"})`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    transform: translateY(-2px);
  }
`,w=c.default.div.withConfig({displayName:"ShippingScreen.styles__AddressHeader",componentId:"sc-16aa94e6-7"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e0e0e0;
`,_=c.default.div.withConfig({displayName:"ShippingScreen.styles__AddressLabel",componentId:"sc-16aa94e6-8"})`
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a1a;
  font-family: 'Questrial', sans-serif;
`,S=c.default.div.withConfig({displayName:"ShippingScreen.styles__AddressDefaultBadge",componentId:"sc-16aa94e6-9"})`
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  background: #e8f5e9;
  color: #2e7d32;
  font-family: 'Questrial', sans-serif;
`,j=c.default.div.withConfig({displayName:"ShippingScreen.styles__AddressDetails",componentId:"sc-16aa94e6-10"})`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,C=c.default.div.withConfig({displayName:"ShippingScreen.styles__AddressLine",componentId:"sc-16aa94e6-11"})`
  font-size: 0.95rem;
  color: #666;
  font-family: 'Questrial', sans-serif;
`,v=c.default.div.withConfig({displayName:"ShippingScreen.styles__AddressActions",componentId:"sc-16aa94e6-12"})`
  display: flex;
  gap: 0.75rem;
  padding-top: 1rem;
  border-top: 1px solid #e0e0e0;
`,k=c.default.button.withConfig({displayName:"ShippingScreen.styles__EditButton",componentId:"sc-16aa94e6-13"})`
  flex: 1;
  padding: 0.5rem 1rem;
  background: #f5f5f5;
  color: #333;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  font-family: 'Questrial', sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #e0e0e0;
  }
`,I=c.default.button.withConfig({displayName:"ShippingScreen.styles__DeleteButton",componentId:"sc-16aa94e6-14"})`
  flex: 1;
  padding: 0.5rem 1rem;
  background: #fee;
  color: #cc0c5c;
  border: 1px solid #fcc;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  font-family: 'Questrial', sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #fcc;
  }
`,N=c.default.div.withConfig({displayName:"ShippingScreen.styles__EmptyState",componentId:"sc-16aa94e6-15"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
`,L=c.default.div.withConfig({displayName:"ShippingScreen.styles__EmptyStateIcon",componentId:"sc-16aa94e6-16"})`
  color: #ccc;
  margin-bottom: 1.5rem;
`,F=c.default.div.withConfig({displayName:"ShippingScreen.styles__EmptyStateText",componentId:"sc-16aa94e6-17"})`
  font-size: 1.1rem;
  color: #666;
  font-family: 'Questrial', sans-serif;
`,A=c.default.div.withConfig({displayName:"ShippingScreen.styles__ModalOverlay",componentId:"sc-16aa94e6-18"})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  animation: ${p} 0.2s ease-out;
  padding: 1rem;
`,z=c.default.div.withConfig({displayName:"ShippingScreen.styles__ModalContent",componentId:"sc-16aa94e6-19"})`
  background: white;
  border-radius: 12px;
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  animation: ${f} 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  font-family: 'Questrial', sans-serif;
`,B=c.default.div.withConfig({displayName:"ShippingScreen.styles__ModalHeader",componentId:"sc-16aa94e6-20"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e0e0e0;
`,T=c.default.h2.withConfig({displayName:"ShippingScreen.styles__ModalTitle",componentId:"sc-16aa94e6-21"})`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  font-family: 'Questrial', sans-serif;
`,P=c.default.button.withConfig({displayName:"ShippingScreen.styles__CloseButton",componentId:"sc-16aa94e6-22"})`
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
`,Q=c.default.form.withConfig({displayName:"ShippingScreen.styles__AddressForm",componentId:"sc-16aa94e6-23"})`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`,$=c.default.div.withConfig({displayName:"ShippingScreen.styles__FormGroup",componentId:"sc-16aa94e6-24"})`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,D=c.default.label.withConfig({displayName:"ShippingScreen.styles__Label",componentId:"sc-16aa94e6-25"})`
  font-size: 0.95rem;
  font-weight: 500;
  color: #333;
  font-family: 'Questrial', sans-serif;
`,E=c.default.input.withConfig({displayName:"ShippingScreen.styles__Input",componentId:"sc-16aa94e6-26"})`
  padding: 0.875rem 1rem;
  border: 1.5px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  font-family: 'Questrial', sans-serif;
  transition: all 0.3s ease;
  outline: none;
  background: #fafafa;

  &:focus {
    border-color: #001f3f;
    box-shadow: 0 0 0 4px rgba(0, 31, 63, 0.08);
    background: white;
  }
`;c.default.select.withConfig({displayName:"ShippingScreen.styles__Select",componentId:"sc-16aa94e6-27"})`
  padding: 0.875rem 1rem;
  border: 1.5px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  font-family: 'Questrial', sans-serif;
  transition: all 0.3s ease;
  outline: none;
  background: #fafafa;

  &:focus {
    border-color: #001f3f;
    box-shadow: 0 0 0 4px rgba(0, 31, 63, 0.08);
    background: white;
  }
`;let O=c.default.div.withConfig({displayName:"ShippingScreen.styles__FormActions",componentId:"sc-16aa94e6-28"})`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,M=c.default.button.withConfig({displayName:"ShippingScreen.styles__SaveButton",componentId:"sc-16aa94e6-29"})`
  flex: 1;
  padding: 0.875rem 1.5rem;
  background: #001f3f;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Questrial', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #003366;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 31, 63, 0.25);
  }
`,q=c.default.button.withConfig({displayName:"ShippingScreen.styles__CancelButton",componentId:"sc-16aa94e6-30"})`
  flex: 1;
  padding: 0.875rem 1.5rem;
  background: white;
  color: #666;
  border: 1.5px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Questrial', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #f5f5f5;
    border-color: #ccc;
  }
`;e.i(9492);var H=e.i(93916),Y=e.i(97005);e.s(["default",0,()=>{let{user:e,isLoading:c}=(0,o.useAuth)(),p=(0,a.useRouter)(),f=(0,a.useParams)(),R=(0,H.normalizeLocale)(f?.locale),[W,U]=(0,i.useState)([]),[J,K]=(0,i.useState)(!1),[G,V]=(0,i.useState)(null),[X,Z]=(0,i.useState)(!0),[ee,et]=(0,i.useState)(""),[ei,ea]=(0,i.useState)(""),[eo,er]=(0,i.useState)({label:"",full_name:"",phone:"",country:"",city:"",street:"",apartment:"",postal_code:"",is_default:!1});(0,i.useEffect)(()=>{if(!c){if(!e)return void p.push((0,H.withLocale)(R,"/login"));es()}},[e,c,p,R]);let es=async()=>{Z(!0),et("");try{let e=await (0,l.sessionFetch)("/api/addresses");U(Array.isArray(e)?e:[])}catch(e){et(e instanceof Error?e.message:"Failed to load addresses."),U([])}finally{Z(!1)}},en=async e=>{if(window.confirm("Are you sure you want to delete this address?")){et(""),ea("");try{await (0,l.sessionFetch)(`/api/addresses/${e}`,{method:"DELETE"}),U(W.filter(t=>t.id!==e)),ea("Address deleted.")}catch(e){et(e instanceof Error?e.message:"Failed to delete address.")}}},el=async e=>{if(e.preventDefault(),et(""),ea(""),[eo.label,eo.full_name,eo.phone,eo.country,eo.city,eo.street,eo.postal_code].some(e=>!String(e).trim()))return void et("Please fill all required fields.");let t={label:eo.label,full_name:eo.full_name,phone:eo.phone,country:eo.country,city:eo.city,street:eo.street,apartment:eo.apartment||null,postal_code:eo.postal_code,is_default:eo.is_default};try{if(G?.id){let e;await (e=G.id,(0,l.sessionFetch)(`/api/addresses/${e}`,{method:"PATCH",body:JSON.stringify(t)})),t.is_default&&await d(G.id),ea("Address updated.")}else{let e=await (0,l.sessionFetch)("/api/addresses",{method:"POST",body:JSON.stringify(t)});t.is_default&&e?.id&&await d(e.id),ea("Address added.")}K(!1),await es()}catch(e){et(e instanceof Error?e.message:"Failed to save address.")}},ed=async e=>{et(""),ea("");try{await d(e),ea("Default address updated."),await es()}catch(e){et(e instanceof Error?e.message:"Failed to set default address.")}},{primaryColor:ec,secondaryColor:ep}=(0,Y.useThemeColors)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.default,{primaryColor:ec,secondaryColor:ep}),(0,t.jsx)(m,{children:(0,t.jsxs)(h,{children:[(0,t.jsx)(n.default,{}),(0,t.jsxs)(u,{children:[(0,t.jsx)(g,{children:"Shipping Information"}),(0,t.jsxs)(x,{onClick:()=>{V(null),et(""),ea(""),er({label:"",full_name:"",phone:"",country:"",city:"",street:"",apartment:"",postal_code:"",is_default:!1}),K(!0)},children:[(0,t.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,t.jsx)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),(0,t.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),"Add Address"]})]}),X?(0,t.jsx)(N,{children:(0,t.jsx)(F,{children:"Loading addresses..."})}):ee?(0,t.jsx)(N,{children:(0,t.jsx)(F,{children:ee})}):0===W.length?(0,t.jsxs)(N,{children:[(0,t.jsx)(L,{children:(0,t.jsxs)("svg",{width:"64",height:"64",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[(0,t.jsx)("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),(0,t.jsx)("circle",{cx:"12",cy:"10",r:"3"})]})}),(0,t.jsx)(F,{children:"No shipping addresses"}),(0,t.jsx)(F,{style:{fontSize:"0.9rem",color:"#666",marginTop:"0.5rem"},children:"Add your first shipping address to get started"})]}):(0,t.jsx)(y,{children:W.map(e=>(0,t.jsxs)(b,{children:[(0,t.jsxs)(w,{children:[(0,t.jsx)(_,{children:e.label||"Address"}),e.is_default&&(0,t.jsx)(S,{children:"Default"})]}),(0,t.jsxs)(j,{children:[(0,t.jsx)(C,{children:e.full_name}),(0,t.jsx)(C,{children:e.street}),e.apartment&&(0,t.jsx)(C,{children:e.apartment}),(0,t.jsxs)(C,{children:[e.city,", ",e.postal_code]}),(0,t.jsx)(C,{children:e.country}),(0,t.jsx)(C,{children:e.phone})]}),(0,t.jsxs)(v,{children:[(0,t.jsx)(k,{onClick:()=>{et(""),ea(""),V(e),er({label:e.label||"",full_name:e.full_name||"",phone:e.phone||"",country:e.country||"",city:e.city||"",street:e.street||"",apartment:e.apartment||"",postal_code:e.postal_code||"",is_default:e.is_default||!1}),K(!0)},children:"Edit"}),!e.is_default&&(0,t.jsx)(k,{onClick:()=>ed(e.id),children:"Set Default"}),(0,t.jsx)(I,{onClick:()=>en(e.id),children:"Delete"})]})]},e.id))}),ei&&(0,t.jsx)(F,{style:{marginTop:"1rem"},children:ei})]})}),(0,t.jsx)(s.default,{}),J&&(0,t.jsx)(A,{onClick:()=>K(!1),children:(0,t.jsxs)(z,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(B,{children:[(0,t.jsx)(T,{children:G?"Edit Address":"Add New Address"}),(0,t.jsx)(P,{onClick:()=>K(!1),children:(0,t.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,t.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,t.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),(0,t.jsxs)(Q,{onSubmit:el,children:[(0,t.jsxs)($,{children:[(0,t.jsx)(D,{children:"Label (e.g., Home, Work)"}),(0,t.jsx)(E,{value:eo.label,onChange:e=>er({...eo,label:e.target.value}),placeholder:"Home",required:!0})]}),(0,t.jsxs)($,{children:[(0,t.jsx)(D,{children:"Full Name"}),(0,t.jsx)(E,{value:eo.full_name,onChange:e=>er({...eo,full_name:e.target.value}),required:!0})]}),(0,t.jsxs)($,{children:[(0,t.jsx)(D,{children:"Phone"}),(0,t.jsx)(E,{type:"tel",value:eo.phone,onChange:e=>er({...eo,phone:e.target.value}),required:!0})]}),(0,t.jsxs)($,{children:[(0,t.jsx)(D,{children:"Country"}),(0,t.jsx)(E,{value:eo.country,onChange:e=>er({...eo,country:e.target.value}),required:!0})]}),(0,t.jsxs)($,{children:[(0,t.jsx)(D,{children:"City"}),(0,t.jsx)(E,{value:eo.city,onChange:e=>er({...eo,city:e.target.value}),required:!0})]}),(0,t.jsxs)($,{children:[(0,t.jsx)(D,{children:"Street Address"}),(0,t.jsx)(E,{value:eo.street,onChange:e=>er({...eo,street:e.target.value}),required:!0})]}),(0,t.jsxs)($,{children:[(0,t.jsx)(D,{children:"Apartment/Suite (optional)"}),(0,t.jsx)(E,{value:eo.apartment,onChange:e=>er({...eo,apartment:e.target.value})})]}),(0,t.jsxs)($,{children:[(0,t.jsx)(D,{children:"Postal Code"}),(0,t.jsx)(E,{value:eo.postal_code,onChange:e=>er({...eo,postal_code:e.target.value}),required:!0})]}),(0,t.jsx)($,{children:(0,t.jsxs)(D,{children:[(0,t.jsx)("input",{type:"checkbox",checked:eo.is_default,onChange:e=>er({...eo,is_default:e.target.checked})}),"Set as default address"]})}),(0,t.jsxs)(O,{children:[(0,t.jsx)(M,{type:"submit",children:"Save"}),(0,t.jsx)(q,{type:"button",onClick:()=>K(!1),children:"Cancel"})]})]})]})})]})}],17651)}]);