(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,27004,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},81095,5424,e=>{"use strict";var t=e.i(72902);let i=t.keyframes`
    0% { transform: translateY(-50px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
`,r=t.default.footer.withConfig({displayName:"Footer.styles__FooterContainer",componentId:"sc-a6c51aef-0"})`
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
`,a=t.default.div.withConfig({displayName:"Footer.styles__FooterContent",componentId:"sc-a6c51aef-2"})`
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
`,f=t.default.ul.withConfig({displayName:"Footer.styles__LinksList",componentId:"sc-a6c51aef-8"})`
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
`;let p=t.default.div.withConfig({displayName:"Footer.styles__FooterBottom",componentId:"sc-a6c51aef-14"})`
  text-align: left;
  font-size: 12px;
`;e.s(["FooterBottom",0,p,"FooterContainer",0,r,"FooterContent",0,a,"FooterLinkSection",0,o,"LinkItem",0,m,"LinksList",0,f,"LinksSection",0,d,"Logo",0,n,"LogoDescription",0,l,"LogoSection",0,s,"SectionTitle",0,c],81095),e.s(["footerLinksData",0,[{title:"about_us",links:[{label:"Shipping Policy",href:"/policies/shipping-policy"},{label:"Returns & Refunds",href:"/policies/returns-refunds"}]},{title:"support",links:[{label:"Privacy Policy",href:"/policies/privacy-policy"},{label:"Terms & Conditions",href:"/policies/terms-conditions"}]},{title:"social",links:[{label:"Instagram",href:"https://www.instagram.com"},{label:"Facebook",href:"https://www.facebook.com"},{label:"Tiktok",href:"https://www.tiktok.com"}]}]],5424)},97005,e=>{"use strict";var t=e.i(26287);let i={primaryColor:"linear-gradient(135deg, #c39a37 0%, #b8860b 100%)",primaryColorFlat:"#d4af37",secondaryColor:"#001f3f"};e.s(["useThemeColors",0,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=(0,t.useMemo)(()=>({...i,...e}),[e]),[o,a]=(0,t.useState)(r);return(0,t.useEffect)(()=>{a({primaryColor:localStorage.getItem("theme_primary")||r.primaryColor||"linear-gradient(135deg, #a67c00 0%, #bf9b30 25%, #ffd700 50%, #d4af37 75%, #b8860b 100%)",primaryColorFlat:localStorage.getItem("theme_primary_flat")||r.primaryColorFlat,secondaryColor:localStorage.getItem("theme_secondary")||r.secondaryColor})},[r]),o}])},58090,e=>{"use strict";var t=e.i(66339);e.i(3157);var i=e.i(55062),r=e.i(85329),o=e.i(274),a=e.i(53805),s=e.i(81095),n=e.i(5424);e.i(9492);var l=e.i(93916),d=e.i(97005);function c(){let{t:e}=(0,i.useTranslation)(),c=(0,a.useParams)(),f=(0,l.normalizeLocale)(c?.locale),{secondaryColor:m}=(0,d.useThemeColors)({secondaryColor:"#ffffff"});return(0,t.jsxs)(s.FooterContainer,{$secondaryColor:m,children:[(0,t.jsxs)(s.FooterContent,{children:[(0,t.jsx)(s.FooterLinkSection,{children:n.footerLinksData.map((i,o)=>(0,t.jsxs)(s.LinksSection,{children:[(0,t.jsx)(s.SectionTitle,{$color:m,children:e(i.title)}),(0,t.jsx)(s.LinksList,{children:i.links.map((e,i)=>(0,t.jsx)(s.LinkItem,{$color:m,children:e.href.startsWith("http")?(0,t.jsx)("a",{href:e.href,target:"_blank",rel:"noreferrer",children:e.label}):(0,t.jsx)(r.default,{href:(0,l.withLocale)(f,e.href),children:e.label})},i))})]},o))}),(0,t.jsxs)(s.LogoSection,{children:[(0,t.jsx)(s.Logo,{children:(0,t.jsx)(o.default,{src:"/assets/logo.png",alt:"Logo",fill:!0,sizes:"(max-width: 768px) 110px, 150px"})}),(0,t.jsx)(s.LogoDescription,{children:e("slogan")})]})]}),(0,t.jsx)(s.FooterBottom,{children:(0,t.jsxs)("p",{children:["© ",new Date().getFullYear()," ",e("copyrightNotice")]})})]})}e.s(["default",()=>c])},77018,e=>{"use strict";var t=e.i(66339),i=e.i(26287),r=e.i(53805),o=e.i(59285),a=e.i(72902),s=e.i(85329);let n=a.default.nav.withConfig({displayName:"Breadcrumb.styles__BreadcrumbNav",componentId:"sc-e17aab5a-0"})`
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
`,l=(0,a.default)(s.default).withConfig({displayName:"Breadcrumb.styles__BreadcrumbLink",componentId:"sc-e17aab5a-1"})`
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
`;e.i(9492);var f=e.i(93916);e.s(["default",0,e=>{let{categoryName:a,subcategoryName:s,productName:m}=e,p=(0,r.useParams)(),h=(0,r.usePathname)(),u=(0,r.useSearchParams)(),{categories:g}=(0,o.useCategories)(),y=(0,f.normalizeLocale)(p?.locale),x=h.split("/").filter(e=>e),w=x[0]===y?x.slice(1):x,b=m||p.slug,_=u.get("category_id"),C=u.get("subcategory_id"),v=_?Number(_):null,S=C?Number(C):null,j=(0,i.useMemo)(()=>{if(v)return g.find(e=>e.id===v)?.name},[g,v]),I=(0,i.useMemo)(()=>{if(v&&S)return g.find(e=>e.id===v)?.subcategories?.find(e=>e.id===S)?.name},[g,v,S]),O=a||j,L=s||I,N=[];return w.includes("profile")||w.includes("orders")||w.includes("shipping")||w.includes("cart")?(N.push({label:"Home",path:(0,f.withLocale)(y,"/")}),w.includes("profile")&&N.push({label:"Profile",path:(0,f.withLocale)(y,"/profile")}),w.includes("orders")&&N.push({label:"Order History",path:(0,f.withLocale)(y,"/orders")}),w.includes("shipping")&&N.push({label:"Shipping Information",path:(0,f.withLocale)(y,"/shipping")}),w.includes("cart")&&N.push({label:"Cart",path:(0,f.withLocale)(y,"/cart")})):(N.push({label:"Catalog",path:(0,f.withLocale)(y,"/")}),O&&v&&N.push({label:O,path:(0,f.withLocale)(y,`/products?category_id=${v}`)}),L&&O&&v&&S&&N.push({label:L,path:(0,f.withLocale)(y,`/products?category_id=${v}&subcategory_id=${S}`)}),b&&w.includes("product")&&N.push({label:decodeURIComponent(b),path:h})),(0,t.jsx)(n,{children:N.map((e,r)=>{let o=r===N.length-1;return(0,t.jsxs)(i.default.Fragment,{children:[r>0&&(0,t.jsx)(c,{children:"/"}),o?(0,t.jsx)(d,{children:e.label}):(0,t.jsx)(l,{href:e.path,children:e.label})]},r)})})}],77018)},29191,e=>{"use strict";e.i(44350);var t=e.i(31077);e.s(["createOrderSession",0,e=>(0,t.sessionFetch)("/api/orders",{method:"POST",body:JSON.stringify(e)}),"getOrderSession",0,e=>(0,t.sessionFetch)(`/api/orders/${e}`),"listOrdersSession",0,()=>(0,t.sessionFetch)("/api/orders")])},28619,e=>{"use strict";var t=e.i(66339),i=e.i(26287),r=e.i(53805),o=e.i(69650),a=e.i(16460),s=e.i(58090),n=e.i(77018),l=e.i(29191),d=e.i(72902);let c=d.default.div.withConfig({displayName:"OrdersScreen.styles__OrdersContainer",componentId:"sc-ced1726e-0"})`
  min-height: calc(100vh - 200px);
  padding: 10rem 2rem;
  background: #fafafa;
  font-family: 'Questrial', sans-serif;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`,f=d.default.div.withConfig({displayName:"OrdersScreen.styles__OrdersContent",componentId:"sc-ced1726e-1"})`
  max-width: 1000px;
  margin: 0 auto;
`,m=d.default.div.withConfig({displayName:"OrdersScreen.styles__OrdersHeader",componentId:"sc-ced1726e-2"})`
  margin-bottom: 2rem;
`,p=d.default.h1.withConfig({displayName:"OrdersScreen.styles__OrdersTitle",componentId:"sc-ced1726e-3"})`
  font-size: 2rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  font-family: 'Questrial', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,h=d.default.div.withConfig({displayName:"OrdersScreen.styles__EmptyState",componentId:"sc-ced1726e-4"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
`,u=d.default.div.withConfig({displayName:"OrdersScreen.styles__EmptyStateIcon",componentId:"sc-ced1726e-5"})`
  color: #ccc;
  margin-bottom: 1.5rem;
`,g=d.default.div.withConfig({displayName:"OrdersScreen.styles__EmptyStateText",componentId:"sc-ced1726e-6"})`
  font-size: 1.1rem;
  color: #666;
  font-family: 'Questrial', sans-serif;
`,y=d.default.div.withConfig({displayName:"OrdersScreen.styles__OrderList",componentId:"sc-ced1726e-7"})`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,x=d.default.div.withConfig({displayName:"OrdersScreen.styles__OrderCard",componentId:"sc-ced1726e-8"})`
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
`,w=d.default.div.withConfig({displayName:"OrdersScreen.styles__OrderHeader",componentId:"sc-ced1726e-9"})`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e0e0e0;
`,b=d.default.div.withConfig({displayName:"OrdersScreen.styles__OrderId",componentId:"sc-ced1726e-10"})`
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.25rem;
  font-family: 'Questrial', sans-serif;
`,_=d.default.div.withConfig({displayName:"OrdersScreen.styles__OrderDate",componentId:"sc-ced1726e-11"})`
  font-size: 0.9rem;
  color: #666;
  font-family: 'Questrial', sans-serif;
`,C=d.default.div.withConfig({displayName:"OrdersScreen.styles__OrderStatus",componentId:"sc-ced1726e-12"})`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  font-family: 'Questrial', sans-serif;
  text-transform: capitalize;
  background: ${e=>{let{$status:t}=e;switch(t?.toLowerCase()){case"completed":return"#e8f5e9";case"pending":return"#fff3e0";case"cancelled":return"#ffebee";default:return"#f5f5f5"}}};
  color: ${e=>{let{$status:t}=e;switch(t?.toLowerCase()){case"completed":return"#2e7d32";case"pending":return"#f57c00";case"cancelled":return"#c62828";default:return"#666"}}};
`;d.default.div.withConfig({displayName:"OrdersScreen.styles__OrderItems",componentId:"sc-ced1726e-13"})`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,d.default.div.withConfig({displayName:"OrdersScreen.styles__OrderItem",componentId:"sc-ced1726e-14"})`
  display: flex;
  gap: 1rem;
  align-items: center;
`,d.default.img.withConfig({displayName:"OrdersScreen.styles__OrderItemImage",componentId:"sc-ced1726e-15"})`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  background: #f5f5f5;
`,d.default.div.withConfig({displayName:"OrdersScreen.styles__OrderItemDetails",componentId:"sc-ced1726e-16"})`
  flex: 1;
`,d.default.div.withConfig({displayName:"OrdersScreen.styles__OrderItemName",componentId:"sc-ced1726e-17"})`
  font-size: 0.95rem;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 0.25rem;
  font-family: 'Questrial', sans-serif;
`,d.default.div.withConfig({displayName:"OrdersScreen.styles__OrderItemPrice",componentId:"sc-ced1726e-18"})`
  font-size: 0.85rem;
  color: #666;
  font-family: 'Questrial', sans-serif;
`;let v=d.default.div.withConfig({displayName:"OrdersScreen.styles__OrderTotal",componentId:"sc-ced1726e-19"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #e0e0e0;
`,S=d.default.div.withConfig({displayName:"OrdersScreen.styles__OrderTotalLabel",componentId:"sc-ced1726e-20"})`
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  font-family: 'Questrial', sans-serif;
`,j=d.default.div.withConfig({displayName:"OrdersScreen.styles__OrderTotalValue",componentId:"sc-ced1726e-21"})`
  font-size: 1.25rem;
  font-weight: 600;
  color: #001f3f;
  font-family: 'Questrial', sans-serif;
`;e.i(9492);var I=e.i(93916),O=e.i(97005);e.s(["default",0,()=>{let{user:e,isLoading:d}=(0,o.useAuth)(),L=(0,r.useRouter)(),N=(0,r.useParams)(),k=(0,I.normalizeLocale)(N?.locale),[F,z]=(0,i.useState)([]),[T,$]=(0,i.useState)(!0),[P,B]=(0,i.useState)("");(0,i.useEffect)(()=>{d||(e?(async()=>{$(!0),B("");try{let e=await (0,l.listOrdersSession)();z(Array.isArray(e)?e:[])}catch(e){B(e instanceof Error?e.message:"Failed to load orders.")}finally{$(!1)}})():L.push((0,I.withLocale)(k,"/login")))},[e,d,L,k]);let{primaryColor:Q,secondaryColor:D}=(0,O.useThemeColors)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.default,{primaryColor:Q,secondaryColor:D}),(0,t.jsx)(c,{children:(0,t.jsxs)(f,{children:[(0,t.jsx)(n.default,{}),(0,t.jsx)(m,{children:(0,t.jsx)(p,{children:"Order History"})}),T?(0,t.jsx)(h,{children:(0,t.jsx)(g,{children:"Loading orders..."})}):P?(0,t.jsx)(h,{children:(0,t.jsx)(g,{children:P})}):0===F.length?(0,t.jsxs)(h,{children:[(0,t.jsx)(u,{children:(0,t.jsxs)("svg",{width:"64",height:"64",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[(0,t.jsx)("path",{d:"M9 11l3 3L22 4"}),(0,t.jsx)("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"})]})}),(0,t.jsx)(g,{children:"No orders yet"}),(0,t.jsx)(g,{style:{fontSize:"0.9rem",color:"#666",marginTop:"0.5rem"},children:"Your order history will appear here"})]}):(0,t.jsx)(y,{children:F.map(e=>(0,t.jsxs)(x,{children:[(0,t.jsxs)(w,{children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)(b,{children:["Order #",e.id]}),(0,t.jsx)(_,{children:e.created_at?new Date(e.created_at).toLocaleDateString():"—"})]}),(0,t.jsx)(C,{$status:e.status||"pending",children:e.status||"pending"})]}),(0,t.jsxs)(v,{children:[(0,t.jsx)(S,{children:"Total:"}),(0,t.jsx)(j,{children:void 0!==e.total?`$${e.total}`:"--"})]})]},e.id))})]})}),(0,t.jsx)(s.default,{})]})}],28619)}]);