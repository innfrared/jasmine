(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,27004,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return o}});let o=e=>{}},81095,5424,e=>{"use strict";var t=e.i(72902);let r=t.keyframes`
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
`,i=t.default.div.withConfig({displayName:"Footer.styles__FooterContent",componentId:"sc-a6c51aef-2"})`
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
`,m=t.default.ul.withConfig({displayName:"Footer.styles__LinksList",componentId:"sc-a6c51aef-8"})`
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`,p=t.default.li.withConfig({displayName:"Footer.styles__LinkItem",componentId:"sc-a6c51aef-9"})`
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

  ${e=>{let{variant:r}=e;return"instagram"===r&&t.css`
      &:hover {
        background-color: #d62976;
      }
    `}}
  ${e=>{let{variant:r}=e;return"viber"===r&&t.css`
      &:hover {
        background-color: #7f4da0;
      }
    `}}
    ${e=>{let{variant:r}=e;return"whatsapp"===r&&t.css`
      &:hover {
        background-color: #128c7e;
      }
    `}}
    ${e=>{let{variant:r}=e;return"telegram"===r&&t.css`
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
  animation: ${r} 0.3s both;
`;let f=t.default.div.withConfig({displayName:"Footer.styles__FooterBottom",componentId:"sc-a6c51aef-14"})`
  text-align: left;
  font-size: 12px;
`;e.s(["FooterBottom",0,f,"FooterContainer",0,o,"FooterContent",0,i,"FooterLinkSection",0,a,"LinkItem",0,p,"LinksList",0,m,"LinksSection",0,d,"Logo",0,s,"LogoDescription",0,l,"LogoSection",0,n,"SectionTitle",0,c],81095),e.s(["footerLinksData",0,[{title:"about_us",links:[{label:"Shipping Policy",href:"/policies/shipping-policy"},{label:"Returns & Refunds",href:"/policies/returns-refunds"}]},{title:"support",links:[{label:"Privacy Policy",href:"/policies/privacy-policy"},{label:"Terms & Conditions",href:"/policies/terms-conditions"}]},{title:"social",links:[{label:"Instagram",href:"https://www.instagram.com"},{label:"Facebook",href:"https://www.facebook.com"},{label:"Tiktok",href:"https://www.tiktok.com"}]}]],5424)},97005,e=>{"use strict";var t=e.i(26287);let r={primaryColor:"linear-gradient(135deg, #c39a37 0%, #b8860b 100%)",primaryColorFlat:"#d4af37",secondaryColor:"#001f3f"};e.s(["useThemeColors",0,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=(0,t.useMemo)(()=>({...r,...e}),[e]),[a,i]=(0,t.useState)(o);return(0,t.useEffect)(()=>{i({primaryColor:localStorage.getItem("theme_primary")||o.primaryColor||"linear-gradient(135deg, #a67c00 0%, #bf9b30 25%, #ffd700 50%, #d4af37 75%, #b8860b 100%)",primaryColorFlat:localStorage.getItem("theme_primary_flat")||o.primaryColorFlat,secondaryColor:localStorage.getItem("theme_secondary")||o.secondaryColor})},[o]),a}])},58090,e=>{"use strict";var t=e.i(66339);e.i(3157);var r=e.i(55062),o=e.i(85329),a=e.i(274),i=e.i(53805),n=e.i(81095),s=e.i(5424);e.i(9492);var l=e.i(93916),d=e.i(97005);function c(){let{t:e}=(0,r.useTranslation)(),c=(0,i.useParams)(),m=(0,l.normalizeLocale)(c?.locale),{secondaryColor:p}=(0,d.useThemeColors)({secondaryColor:"#ffffff"});return(0,t.jsxs)(n.FooterContainer,{$secondaryColor:p,children:[(0,t.jsxs)(n.FooterContent,{children:[(0,t.jsx)(n.FooterLinkSection,{children:s.footerLinksData.map((r,a)=>(0,t.jsxs)(n.LinksSection,{children:[(0,t.jsx)(n.SectionTitle,{$color:p,children:e(r.title)}),(0,t.jsx)(n.LinksList,{children:r.links.map((e,r)=>(0,t.jsx)(n.LinkItem,{$color:p,children:e.href.startsWith("http")?(0,t.jsx)("a",{href:e.href,target:"_blank",rel:"noreferrer",children:e.label}):(0,t.jsx)(o.default,{href:(0,l.withLocale)(m,e.href),children:e.label})},r))})]},a))}),(0,t.jsxs)(n.LogoSection,{children:[(0,t.jsx)(n.Logo,{children:(0,t.jsx)(a.default,{src:"/assets/logo.png",alt:"Logo",fill:!0,sizes:"(max-width: 768px) 110px, 150px"})}),(0,t.jsx)(n.LogoDescription,{children:e("slogan")})]})]}),(0,t.jsx)(n.FooterBottom,{children:(0,t.jsxs)("p",{children:["© ",new Date().getFullYear()," ",e("copyrightNotice")]})})]})}e.s(["default",()=>c])},77018,e=>{"use strict";var t=e.i(66339),r=e.i(26287),o=e.i(53805),a=e.i(59285),i=e.i(72902),n=e.i(85329);let s=i.default.nav.withConfig({displayName:"Breadcrumb.styles__BreadcrumbNav",componentId:"sc-e17aab5a-0"})`
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
`,l=(0,i.default)(n.default).withConfig({displayName:"Breadcrumb.styles__BreadcrumbLink",componentId:"sc-e17aab5a-1"})`
  text-decoration: none;
  color: #001f3f;
  transition: color 0.3s ease;
  font-family: 'Questrial', sans-serif;

  &:hover {
    text-decoration: underline;
    color: #003366;
  }
`,d=i.default.span.withConfig({displayName:"Breadcrumb.styles__BreadcrumbText",componentId:"sc-e17aab5a-2"})`
  color: #001f3f;
`,c=i.default.span.withConfig({displayName:"Breadcrumb.styles__BreadcrumbSeparator",componentId:"sc-e17aab5a-3"})`
  margin: 0 8px;
  color: #dedede;
  font-family: 'Questrial', sans-serif;
`;e.i(9492);var m=e.i(93916);e.s(["default",0,e=>{let{categoryName:i,subcategoryName:n,productName:p}=e,f=(0,o.useParams)(),u=(0,o.usePathname)(),h=(0,o.useSearchParams)(),{categories:g}=(0,a.useCategories)(),x=(0,m.normalizeLocale)(f?.locale),y=u.split("/").filter(e=>e),b=y[0]===x?y.slice(1):y,w=p||f.slug,C=h.get("category_id"),k=h.get("subcategory_id"),_=C?Number(C):null,v=k?Number(k):null,j=(0,r.useMemo)(()=>{if(_)return g.find(e=>e.id===_)?.name},[g,_]),S=(0,r.useMemo)(()=>{if(_&&v)return g.find(e=>e.id===_)?.subcategories?.find(e=>e.id===v)?.name},[g,_,v]),I=i||j,F=n||S,N=[];return b.includes("profile")||b.includes("orders")||b.includes("shipping")||b.includes("cart")?(N.push({label:"Home",path:(0,m.withLocale)(x,"/")}),b.includes("profile")&&N.push({label:"Profile",path:(0,m.withLocale)(x,"/profile")}),b.includes("orders")&&N.push({label:"Order History",path:(0,m.withLocale)(x,"/orders")}),b.includes("shipping")&&N.push({label:"Shipping Information",path:(0,m.withLocale)(x,"/shipping")}),b.includes("cart")&&N.push({label:"Cart",path:(0,m.withLocale)(x,"/cart")})):(N.push({label:"Catalog",path:(0,m.withLocale)(x,"/")}),I&&_&&N.push({label:I,path:(0,m.withLocale)(x,`/products?category_id=${_}`)}),F&&I&&_&&v&&N.push({label:F,path:(0,m.withLocale)(x,`/products?category_id=${_}&subcategory_id=${v}`)}),w&&b.includes("product")&&N.push({label:decodeURIComponent(w),path:u})),(0,t.jsx)(s,{children:N.map((e,o)=>{let a=o===N.length-1;return(0,t.jsxs)(r.default.Fragment,{children:[o>0&&(0,t.jsx)(c,{children:"/"}),a?(0,t.jsx)(d,{children:e.label}):(0,t.jsx)(l,{href:e.path,children:e.label})]},o)})})}],77018)},29191,e=>{"use strict";e.i(44350);var t=e.i(31077);e.s(["createOrderSession",0,e=>(0,t.sessionFetch)("/api/orders",{method:"POST",body:JSON.stringify(e)}),"getOrderSession",0,e=>(0,t.sessionFetch)(`/api/orders/${e}`),"listOrdersSession",0,()=>(0,t.sessionFetch)("/api/orders")])},60942,e=>{"use strict";var t=e.i(72902);let r=t.default.div.withConfig({displayName:"CheckoutScreen.styles__CheckoutPageContainer",componentId:"sc-91070f8f-0"})`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fafafa;
`,o=t.default.div.withConfig({displayName:"CheckoutScreen.styles__CheckoutContent",componentId:"sc-91070f8f-1"})`
  flex: 1;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 10rem 1.5rem 6rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem 3rem;
  }
`,a=t.default.h1.withConfig({displayName:"CheckoutScreen.styles__CheckoutTitle",componentId:"sc-91070f8f-2"})`
  font-size: 2rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 3rem 0 2rem;
  font-family: 'Questrial', sans-serif;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 2rem 0 1.5rem;
  }
`,i=t.default.div.withConfig({displayName:"CheckoutScreen.styles__CheckoutGrid",componentId:"sc-91070f8f-3"})`
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 2rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,n=t.default.div.withConfig({displayName:"CheckoutScreen.styles__CustomerDetailsSection",componentId:"sc-91070f8f-4"})`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`,s=t.default.h2.withConfig({displayName:"CheckoutScreen.styles__SectionTitle",componentId:"sc-91070f8f-5"})`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 1.5rem;
  font-family: 'Questrial', sans-serif;
  letter-spacing: -0.3px;
  padding-bottom: 1rem;
  border-bottom: 2px solid #001f3f;
`,l=t.default.div.withConfig({displayName:"CheckoutScreen.styles__FormGroup",componentId:"sc-91070f8f-6"})`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`,d=t.default.label.withConfig({displayName:"CheckoutScreen.styles__FormLabel",componentId:"sc-91070f8f-7"})`
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  color: #333;
  margin-bottom: 0.5rem;
  font-family: 'Questrial', sans-serif;
`,c=t.default.input.withConfig({displayName:"CheckoutScreen.styles__FormInput",componentId:"sc-91070f8f-8"})`
  width: 100%;
  padding: 0.875rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 0.95rem;
  font-family: 'Questrial', sans-serif;
  color: #1a1a1a;
  background: white;
  transition: all 0.2s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #001f3f;
    box-shadow: 0 0 0 3px rgba(0, 31, 63, 0.1);
  }

  &::placeholder {
    color: #999;
  }
`,m=t.default.textarea.withConfig({displayName:"CheckoutScreen.styles__FormTextarea",componentId:"sc-91070f8f-9"})`
  width: 100%;
  padding: 0.875rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 0.95rem;
  font-family: 'Questrial', sans-serif;
  color: #1a1a1a;
  background: white;
  transition: all 0.2s ease;
  resize: vertical;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #001f3f;
    box-shadow: 0 0 0 3px rgba(0, 31, 63, 0.1);
  }

  &::placeholder {
    color: #999;
  }
`,p=t.default.div.withConfig({displayName:"CheckoutScreen.styles__OrderSummarySection",componentId:"sc-91070f8f-10"})`
  background: white;
  border-radius: 10px;
  padding: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  margin-bottom: 1.5rem;
  overflow: hidden;
`,f=t.default.div.withConfig({displayName:"CheckoutScreen.styles__OrderSummaryHeader",componentId:"sc-91070f8f-11"})`
  padding: 1.5rem 1.5rem 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`,u=t.default.h2.withConfig({displayName:"CheckoutScreen.styles__OrderSummaryTitle",componentId:"sc-91070f8f-12"})`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  font-family: 'Questrial', sans-serif;
  letter-spacing: -0.3px;
  padding-bottom: 1rem;
  border-bottom: 2px solid #001f3f;
`,h=t.default.div.withConfig({displayName:"CheckoutScreen.styles__OrderItemsList",componentId:"sc-91070f8f-13"})`
  max-height: 400px;
  overflow-y: auto;
  padding: 0.5rem 0;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.15) transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.15);
    border-radius: 6px;
  }
`,g=t.default.div.withConfig({displayName:"CheckoutScreen.styles__OrderItem",componentId:"sc-91070f8f-14"})`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  position: relative;
  cursor: pointer;
  transition: background 0.2s ease;

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    background: rgba(0, 31, 63, 0.02);
  }
`,x=t.default.div.withConfig({displayName:"CheckoutScreen.styles__OrderItemImage",componentId:"sc-91070f8f-15"})`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  background: #f5f5f5;
  flex-shrink: 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  position: relative;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`,y=t.default.div.withConfig({displayName:"CheckoutScreen.styles__OrderItemDetails",componentId:"sc-91070f8f-16"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,b=t.default.div.withConfig({displayName:"CheckoutScreen.styles__OrderItemName",componentId:"sc-91070f8f-17"})`
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
`,w=t.default.div.withConfig({displayName:"CheckoutScreen.styles__OrderItemPrice",componentId:"sc-91070f8f-18"})`
  font-size: 0.875rem;
  color: #666;
  font-weight: 500;
  font-family: 'Questrial', sans-serif;
`,C=t.default.div.withConfig({displayName:"CheckoutScreen.styles__OrderItemQuantity",componentId:"sc-91070f8f-19"})`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  font-family: 'Questrial', sans-serif;

  button {
    background: none;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #666;
    font-size: 1.2rem;
    font-weight: 400;
    transition: all 0.2s ease;
    line-height: 1;

    &:hover {
      background: rgba(0, 31, 63, 0.05);
      border-color: #001f3f;
      color: #001f3f;
    }

    &:active {
      transform: scale(0.95);
    }
  }

  span {
    min-width: 24px;
    text-align: center;
    font-weight: 500;
    color: #1a1a1a;
  }
`,k=t.default.button.withConfig({displayName:"CheckoutScreen.styles__OrderItemRemove",componentId:"sc-91070f8f-20"})`
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
  position: absolute;
  top: 1rem;
  right: 1.5rem;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    color: #cc0c5c;
    opacity: 1;
  }

  svg {
    display: block;
  }
`,_=t.default.div.withConfig({displayName:"CheckoutScreen.styles__OrderSummaryFooter",componentId:"sc-91070f8f-21"})`
  padding: 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  background: #fafafa;
`,v=t.default.div.withConfig({displayName:"CheckoutScreen.styles__OrderSummaryRow",componentId:"sc-91070f8f-22"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 0.75rem;
  font-family: 'Questrial', sans-serif;
`,j=t.default.div.withConfig({displayName:"CheckoutScreen.styles__OrderSummaryTotal",componentId:"sc-91070f8f-23"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  padding-top: 0.75rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  font-family: 'Questrial', sans-serif;
`,S=t.default.div.withConfig({displayName:"CheckoutScreen.styles__PaymentSection",componentId:"sc-91070f8f-24"})`
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  margin-bottom: 1.5rem;
`,I=t.default.button.withConfig({displayName:"CheckoutScreen.styles__PlaceOrderButton",componentId:"sc-91070f8f-25"})`
  width: 100%;
  padding: 1rem 1.5rem;
  background: #001f3f;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: 'Questrial', sans-serif;
  letter-spacing: 0.3px;

  &:hover {
    background: #003366;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 31, 63, 0.25);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,F=t.default.div.withConfig({displayName:"CheckoutScreen.styles__EmptyCartContainer",componentId:"sc-91070f8f-26"})`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`,N=t.default.div.withConfig({displayName:"CheckoutScreen.styles__EmptyCartMessage",componentId:"sc-91070f8f-27"})`
  font-size: 1.1rem;
  color: #999;
  font-family: 'Questrial', sans-serif;
`;e.s(["CheckoutContent",0,o,"CheckoutGrid",0,i,"CheckoutPageContainer",0,r,"CheckoutTitle",0,a,"CustomerDetailsSection",0,n,"EmptyCartContainer",0,F,"EmptyCartMessage",0,N,"FormGroup",0,l,"FormInput",0,c,"FormLabel",0,d,"FormTextarea",0,m,"OrderItem",0,g,"OrderItemDetails",0,y,"OrderItemImage",0,x,"OrderItemName",0,b,"OrderItemPrice",0,w,"OrderItemQuantity",0,C,"OrderItemRemove",0,k,"OrderItemsList",0,h,"OrderSummaryFooter",0,_,"OrderSummaryHeader",0,f,"OrderSummaryRow",0,v,"OrderSummarySection",0,p,"OrderSummaryTitle",0,u,"OrderSummaryTotal",0,j,"PaymentSection",0,S,"PlaceOrderButton",0,I,"SectionTitle",0,s])},55109,e=>{"use strict";var t=e.i(66339),r=e.i(26287),o=e.i(53805),a=e.i(274),i=e.i(16460),n=e.i(58090),s=e.i(77018),l=e.i(98803),d=e.i(29191);e.i(9492);var c=e.i(93916),m=e.i(94387),p=e.i(60942);let f=i.default;e.s(["default",0,()=>{let e=(0,o.useRouter)(),i=(0,o.useParams)(),u=(0,c.normalizeLocale)(i?.locale),[h,g]=(0,r.useState)([]),[x,y]=(0,r.useState)({fullName:"",email:"",phone:"",address:"",city:"",postalCode:"",notes:""}),[b,w]=(0,r.useState)(""),[C,k]=(0,r.useState)(!1),[_,v]=(0,r.useState)("");(0,r.useEffect)(()=>{let e=localStorage.getItem("cartProducts");if(e)try{let t=JSON.parse(e);Array.isArray(t)&&t.length>0&&t[0].bagId?g(t):g(t.map((e,t)=>({bagId:`bag-${Date.now()}-${t}-${e.id}`,product:e,quantity:1})))}catch{g([])}},[]);let j=(e,t)=>{if(t<1)return;let r=h.map(r=>r.bagId===e?{...r,quantity:t}:r);g(r),localStorage.setItem("cartProducts",JSON.stringify(r)),window.dispatchEvent(new Event("cartUpdated"))},S=e=>{y({...x,[e.target.name]:e.target.value})},I=()=>h.reduce((e,t)=>e+(parseFloat((t.product.price_new||t.product.price).replace(/[^\d.-]/g,""))||0)*t.quantity,0),F=async()=>{if(!C){if(v(""),!b)return void v("Please select a payment method.");k(!0);try{let t=h.map(e=>({product_id:e.product.id,quantity:e.quantity,unit_price:e.product.price_new||e.product.price})),r={customer:{full_name:x.fullName,email:x.email,phone:x.phone,address:x.address,city:x.city,postal_code:x.postalCode},items:t,payment_method:b,notes:x.notes||void 0,total:I()},o=await (0,d.createOrderSession)(r);localStorage.removeItem("cartProducts"),window.dispatchEvent(new Event("cartUpdated")),e.push((0,c.withLocale)(u,`/order-confirmation/${o.id}`))}catch(e){v(e instanceof Error?e.message:"Order could not be created. Please try again.")}finally{k(!1)}}};return 0===h.length?(0,t.jsxs)(p.CheckoutPageContainer,{children:[(0,t.jsx)(f,{primaryColor:"#CC0C5C",secondaryColor:"#F2A800"}),(0,t.jsxs)(p.CheckoutContent,{children:[(0,t.jsx)(s.default,{}),(0,t.jsx)(p.EmptyCartContainer,{children:(0,t.jsx)(p.EmptyCartMessage,{children:"Your cart is empty"})})]}),(0,t.jsx)(n.default,{})]}):(0,t.jsxs)(p.CheckoutPageContainer,{children:[(0,t.jsx)(f,{primaryColor:"#CC0C5C",secondaryColor:"#F2A800"}),(0,t.jsxs)(p.CheckoutContent,{children:[(0,t.jsx)(s.default,{}),(0,t.jsx)(p.CheckoutTitle,{children:"Checkout"}),(0,t.jsxs)(p.CheckoutGrid,{children:[(0,t.jsx)("div",{children:(0,t.jsxs)(p.CustomerDetailsSection,{children:[(0,t.jsx)(p.SectionTitle,{children:"Customer Details"}),(0,t.jsxs)(p.FormGroup,{children:[(0,t.jsx)(p.FormLabel,{children:"Full Name *"}),(0,t.jsx)(p.FormInput,{type:"text",name:"fullName",value:x.fullName,onChange:S,required:!0,placeholder:"John Doe"})]}),(0,t.jsxs)(p.FormGroup,{children:[(0,t.jsx)(p.FormLabel,{children:"Email *"}),(0,t.jsx)(p.FormInput,{type:"email",name:"email",value:x.email,onChange:S,required:!0,placeholder:"john@example.com"})]}),(0,t.jsxs)(p.FormGroup,{children:[(0,t.jsx)(p.FormLabel,{children:"Phone *"}),(0,t.jsx)(p.FormInput,{type:"tel",name:"phone",value:x.phone,onChange:S,required:!0,placeholder:"+1 234 567 8900"})]}),(0,t.jsxs)(p.FormGroup,{children:[(0,t.jsx)(p.FormLabel,{children:"Address *"}),(0,t.jsx)(p.FormTextarea,{name:"address",value:x.address,onChange:S,required:!0,placeholder:"Street address, apartment, suite, etc.",rows:3})]}),(0,t.jsxs)(p.FormGroup,{children:[(0,t.jsx)(p.FormLabel,{children:"City *"}),(0,t.jsx)(p.FormInput,{type:"text",name:"city",value:x.city,onChange:S,required:!0,placeholder:"New York"})]}),(0,t.jsxs)(p.FormGroup,{children:[(0,t.jsx)(p.FormLabel,{children:"Postal Code *"}),(0,t.jsx)(p.FormInput,{type:"text",name:"postalCode",value:x.postalCode,onChange:S,required:!0,placeholder:"10001"})]}),(0,t.jsxs)(p.FormGroup,{children:[(0,t.jsx)(p.FormLabel,{children:"Order Notes (Optional)"}),(0,t.jsx)(p.FormTextarea,{name:"notes",value:x.notes,onChange:S,placeholder:"Special instructions for your order...",rows:3})]})]})}),(0,t.jsxs)("div",{children:[(0,t.jsxs)(p.OrderSummarySection,{children:[(0,t.jsx)(p.OrderSummaryHeader,{children:(0,t.jsx)(p.OrderSummaryTitle,{children:"Order Summary"})}),(0,t.jsx)(p.OrderItemsList,{children:h.map(r=>(0,t.jsxs)(p.OrderItem,{onClick:()=>{var t,o;return t=r.product.name,o=r.product.id,void(window.scrollTo({top:0,behavior:"smooth"}),e.push((0,c.withLocale)(u,`/product/${(0,m.buildProductSlug)(t,o)}`)))},children:[(0,t.jsx)(p.OrderItemImage,{children:(0,t.jsx)(a.default,{src:(0,l.getImageUrl)(r.product.variant_image)||"/assets/logo.png",alt:r.product.name,fill:!0,sizes:"64px"})}),(0,t.jsxs)(p.OrderItemDetails,{children:[(0,t.jsx)(p.OrderItemName,{children:r.product.name}),(0,t.jsx)(p.OrderItemPrice,{children:r.product.price_new||r.product.price}),(0,t.jsxs)(p.OrderItemQuantity,{onClick:e=>e.stopPropagation(),children:[(0,t.jsx)("button",{onClick:()=>j(r.bagId,r.quantity-1),"aria-label":"Decrease quantity",children:"−"}),(0,t.jsx)("span",{children:r.quantity}),(0,t.jsx)("button",{onClick:()=>j(r.bagId,r.quantity+1),"aria-label":"Increase quantity",children:"+"})]})]}),(0,t.jsx)(p.OrderItemRemove,{onClick:e=>{var t;let o;e.stopPropagation(),t=r.bagId,g(o=h.filter(e=>e.bagId!==t)),localStorage.setItem("cartProducts",JSON.stringify(o)),window.dispatchEvent(new Event("cartUpdated"))},"aria-label":"Remove item",children:(0,t.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,t.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,t.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]},r.bagId))}),(0,t.jsxs)(p.OrderSummaryFooter,{children:[(0,t.jsxs)(p.OrderSummaryRow,{children:[(0,t.jsx)("span",{children:"Subtotal"}),(0,t.jsxs)("span",{children:["$",I().toLocaleString()]})]}),(0,t.jsxs)(p.OrderSummaryTotal,{children:[(0,t.jsx)("span",{children:"Total"}),(0,t.jsxs)("span",{children:["$",I().toLocaleString()]})]})]})]}),(0,t.jsxs)(p.PaymentSection,{children:[(0,t.jsx)(p.SectionTitle,{children:"Payment"}),(0,t.jsx)("div",{children:(0,t.jsxs)("label",{children:[(0,t.jsx)("input",{type:"radio",name:"paymentMethod",value:"card",checked:"card"===b,onChange:e=>w(e.target.value)}),"Card"]})}),(0,t.jsx)("div",{children:(0,t.jsxs)("label",{children:[(0,t.jsx)("input",{type:"radio",name:"paymentMethod",value:"cash_on_delivery",checked:"cash_on_delivery"===b,onChange:e=>w(e.target.value)}),"Cash on delivery"]})}),(0,t.jsx)("div",{children:(0,t.jsxs)("label",{children:[(0,t.jsx)("input",{type:"radio",name:"paymentMethod",value:"bank_transfer",checked:"bank_transfer"===b,onChange:e=>w(e.target.value)}),"Bank transfer"]})})]}),_&&(0,t.jsx)("p",{style:{color:"#cc0c5c",marginTop:"0.75rem"},children:_}),(0,t.jsx)(p.PlaceOrderButton,{onClick:F,disabled:C,children:C?"Placing order...":"Place Order"})]})]})]}),(0,t.jsx)(n.default,{})]})}])}]);