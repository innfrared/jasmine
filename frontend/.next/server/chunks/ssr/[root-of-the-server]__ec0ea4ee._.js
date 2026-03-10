module.exports=[56704,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},20635,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/action-async-storage.external.js",()=>require("next/dist/server/app-render/action-async-storage.external.js"))},72719,(a,b,c)=>{"use strict";b.exports=a.r(80693).vendored.contexts.AppRouterContext},38276,(a,b,c)=>{"use strict";b.exports=a.r(80693).vendored.contexts.HooksClientContext},79721,(a,b,c)=>{"use strict";b.exports=a.r(80693).vendored.contexts.ServerInsertedHtml},98879,(a,b,c)=>{"use strict";b.exports=a.r(80693).vendored["react-ssr"].ReactDOM},57968,(a,b,c)=>{"use strict";b.exports=a.r(80693).vendored["react-ssr"].ReactServerDOMTurbopackClient},5365,(a,b,c)=>{b.exports=a.x("process",()=>require("process"))},60579,21105,a=>{"use strict";var b=a.i(38120);let c=b.keyframes`
    0% { transform: translateY(-50px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
`,d=b.default.footer.withConfig({displayName:"Footer.styles__FooterContainer",componentId:"sc-a6c51aef-0"})`
  color: ${({$secondaryColor:a})=>a};
  background-color: #001f3f;
  width: 100%;
  padding: 4rem 6rem;
  font-family: 'Questrial', sans-serif;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 20px;
  }
`,e=b.default.div.withConfig({displayName:"Footer.styles__FooterLinkSection",componentId:"sc-a6c51aef-1"})`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  flex: 2;
  justify-content: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,f=b.default.div.withConfig({displayName:"Footer.styles__FooterContent",componentId:"sc-a6c51aef-2"})`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  justify-content: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,g=b.default.div.withConfig({displayName:"Footer.styles__LogoSection",componentId:"sc-a6c51aef-3"})`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,h=b.default.div.withConfig({displayName:"Footer.styles__Logo",componentId:"sc-a6c51aef-4"})`
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
`,i=b.default.p.withConfig({displayName:"Footer.styles__LogoDescription",componentId:"sc-a6c51aef-5"})`
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  font-weight: bold;
`,j=b.default.div.withConfig({displayName:"Footer.styles__LinksSection",componentId:"sc-a6c51aef-6"})`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
  }
`,k=b.default.h3.withConfig({displayName:"Footer.styles__SectionTitle",componentId:"sc-a6c51aef-7"})`
  font-size: 18px;
  margin: 0 0 10px;
  color: ${({$color:a})=>a};
`,l=b.default.ul.withConfig({displayName:"Footer.styles__LinksList",componentId:"sc-a6c51aef-8"})`
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`,m=b.default.li.withConfig({displayName:"Footer.styles__LinkItem",componentId:"sc-a6c51aef-9"})`
  margin-bottom: 8px;

  a {
    text-decoration: none;
    color: ${({$color:a})=>a};
    font-size: 14px;
    transition: color 0.3s ease;

    &:hover {
      color: black;
    }
  }
`;b.default.div.withConfig({displayName:"Footer.styles__SocialSection",componentId:"sc-a6c51aef-10"})`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
  }
`,b.default.div.withConfig({displayName:"Footer.styles__Card",componentId:"sc-a6c51aef-11"})`
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
`,b.default.a.withConfig({displayName:"Footer.styles__SocialContainer",componentId:"sc-a6c51aef-12"})`
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

  ${({variant:a})=>"instagram"===a&&b.css`
      &:hover {
        background-color: #d62976;
      }
    `}
  ${({variant:a})=>"viber"===a&&b.css`
      &:hover {
        background-color: #7f4da0;
      }
    `}
    ${({variant:a})=>"whatsapp"===a&&b.css`
      &:hover {
        background-color: #128c7e;
      }
    `}
    ${({variant:a})=>"telegram"===a&&b.css`
      &:hover {
        background-color: #0ea958;
      }
    `}

    &:active {
    transform: scale(0.9);
  }
`,b.default.svg.withConfig({displayName:"Footer.styles__SocialSvg",componentId:"sc-a6c51aef-13"})`
  width: 17px;
  height: 17px;
  fill: white;
  animation: ${c} 0.3s both;
`;let n=b.default.div.withConfig({displayName:"Footer.styles__FooterBottom",componentId:"sc-a6c51aef-14"})`
  text-align: left;
  font-size: 12px;
`;a.s(["FooterBottom",0,n,"FooterContainer",0,d,"FooterContent",0,f,"FooterLinkSection",0,e,"LinkItem",0,m,"LinksList",0,l,"LinksSection",0,j,"Logo",0,h,"LogoDescription",0,i,"LogoSection",0,g,"SectionTitle",0,k],60579),a.s(["footerLinksData",0,[{title:"about_us",links:[{label:"Shipping Policy",href:"/policies/shipping-policy"},{label:"Returns & Refunds",href:"/policies/returns-refunds"}]},{title:"support",links:[{label:"Privacy Policy",href:"/policies/privacy-policy"},{label:"Terms & Conditions",href:"/policies/terms-conditions"}]},{title:"social",links:[{label:"Instagram",href:"https://www.instagram.com"},{label:"Facebook",href:"https://www.facebook.com"},{label:"Tiktok",href:"https://www.tiktok.com"}]}]],21105)},26863,a=>{"use strict";var b=a.i(96766);let c={primaryColor:"linear-gradient(135deg, #c39a37 0%, #b8860b 100%)",primaryColorFlat:"#d4af37",secondaryColor:"#001f3f"};a.s(["useThemeColors",0,(a={})=>{let d=(0,b.useMemo)(()=>({...c,...a}),[a]),[e,f]=(0,b.useState)(d);return(0,b.useEffect)(()=>{f(c)},[d]),e}])},31570,a=>{"use strict";var b=a.i(1142);a.i(79304);var c=a.i(93215),d=a.i(85669),e=a.i(96615),f=a.i(61765),g=a.i(60579),h=a.i(21105);a.i(56498);var i=a.i(29111),j=a.i(26863);function k(){let{t:a}=(0,c.useTranslation)(),k=(0,f.useParams)(),l=(0,i.normalizeLocale)(k?.locale),{secondaryColor:m}=(0,j.useThemeColors)({secondaryColor:"#ffffff"});return(0,b.jsxs)(g.FooterContainer,{$secondaryColor:m,children:[(0,b.jsxs)(g.FooterContent,{children:[(0,b.jsx)(g.FooterLinkSection,{children:h.footerLinksData.map((c,e)=>(0,b.jsxs)(g.LinksSection,{children:[(0,b.jsx)(g.SectionTitle,{$color:m,children:a(c.title)}),(0,b.jsx)(g.LinksList,{children:c.links.map((a,c)=>(0,b.jsx)(g.LinkItem,{$color:m,children:a.href.startsWith("http")?(0,b.jsx)("a",{href:a.href,target:"_blank",rel:"noreferrer",children:a.label}):(0,b.jsx)(d.default,{href:(0,i.withLocale)(l,a.href),children:a.label})},c))})]},e))}),(0,b.jsxs)(g.LogoSection,{children:[(0,b.jsx)(g.Logo,{children:(0,b.jsx)(e.default,{src:"/assets/logo.png",alt:"Logo",fill:!0,sizes:"(max-width: 768px) 110px, 150px"})}),(0,b.jsx)(g.LogoDescription,{children:a("slogan")})]})]}),(0,b.jsx)(g.FooterBottom,{children:(0,b.jsxs)("p",{children:["© ",new Date().getFullYear()," ",a("copyrightNotice")]})})]})}a.s(["default",()=>k])},79717,a=>{"use strict";var b=a.i(1142),c=a.i(96766),d=a.i(61765),e=a.i(75795),f=a.i(38120),g=a.i(85669);let h=f.default.nav.withConfig({displayName:"Breadcrumb.styles__BreadcrumbNav",componentId:"sc-e17aab5a-0"})`
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
`;a.i(56498);var l=a.i(29111);a.s(["default",0,({categoryName:a,subcategoryName:f,productName:g})=>{let m=(0,d.useParams)(),n=(0,d.usePathname)(),o=(0,d.useSearchParams)(),{categories:p}=(0,e.useCategories)(),q=(0,l.normalizeLocale)(m?.locale),r=n.split("/").filter(a=>a),s=r[0]===q?r.slice(1):r,t=g||m.slug,u=o.get("category_id"),v=o.get("subcategory_id"),w=u?Number(u):null,x=v?Number(v):null,y=(0,c.useMemo)(()=>{if(w)return p.find(a=>a.id===w)?.name},[p,w]),z=(0,c.useMemo)(()=>{if(w&&x)return p.find(a=>a.id===w)?.subcategories?.find(a=>a.id===x)?.name},[p,w,x]),A=a||y,B=f||z,C=[];return s.includes("profile")||s.includes("orders")||s.includes("shipping")||s.includes("cart")?(C.push({label:"Home",path:(0,l.withLocale)(q,"/")}),s.includes("profile")&&C.push({label:"Profile",path:(0,l.withLocale)(q,"/profile")}),s.includes("orders")&&C.push({label:"Order History",path:(0,l.withLocale)(q,"/orders")}),s.includes("shipping")&&C.push({label:"Shipping Information",path:(0,l.withLocale)(q,"/shipping")}),s.includes("cart")&&C.push({label:"Cart",path:(0,l.withLocale)(q,"/cart")})):(C.push({label:"Catalog",path:(0,l.withLocale)(q,"/")}),A&&w&&C.push({label:A,path:(0,l.withLocale)(q,`/products?category_id=${w}`)}),B&&A&&w&&x&&C.push({label:B,path:(0,l.withLocale)(q,`/products?category_id=${w}&subcategory_id=${x}`)}),t&&s.includes("product")&&C.push({label:decodeURIComponent(t),path:n})),(0,b.jsx)(h,{children:C.map((a,d)=>{let e=d===C.length-1;return(0,b.jsxs)(c.default.Fragment,{children:[d>0&&(0,b.jsx)(k,{children:"/"}),e?(0,b.jsx)(j,{children:a.label}):(0,b.jsx)(i,{href:a.path,children:a.label})]},d)})})}],79717)},69529,a=>{"use strict";a.i(50404);var b=a.i(94952);a.s(["createOrderSession",0,a=>(0,b.sessionFetch)("/api/orders",{method:"POST",body:JSON.stringify(a)}),"getOrderSession",0,a=>(0,b.sessionFetch)(`/api/orders/${a}`),"listOrdersSession",0,()=>(0,b.sessionFetch)("/api/orders")])},11006,a=>{"use strict";var b=a.i(1142),c=a.i(96766),d=a.i(61765),e=a.i(322),f=a.i(59131),g=a.i(31570),h=a.i(79717),i=a.i(69529),j=a.i(38120);let k=j.default.div.withConfig({displayName:"OrdersScreen.styles__OrdersContainer",componentId:"sc-ced1726e-0"})`
  min-height: calc(100vh - 200px);
  padding: 10rem 2rem;
  background: #fafafa;
  font-family: 'Questrial', sans-serif;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`,l=j.default.div.withConfig({displayName:"OrdersScreen.styles__OrdersContent",componentId:"sc-ced1726e-1"})`
  max-width: 1000px;
  margin: 0 auto;
`,m=j.default.div.withConfig({displayName:"OrdersScreen.styles__OrdersHeader",componentId:"sc-ced1726e-2"})`
  margin-bottom: 2rem;
`,n=j.default.h1.withConfig({displayName:"OrdersScreen.styles__OrdersTitle",componentId:"sc-ced1726e-3"})`
  font-size: 2rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  font-family: 'Questrial', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,o=j.default.div.withConfig({displayName:"OrdersScreen.styles__EmptyState",componentId:"sc-ced1726e-4"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
`,p=j.default.div.withConfig({displayName:"OrdersScreen.styles__EmptyStateIcon",componentId:"sc-ced1726e-5"})`
  color: #ccc;
  margin-bottom: 1.5rem;
`,q=j.default.div.withConfig({displayName:"OrdersScreen.styles__EmptyStateText",componentId:"sc-ced1726e-6"})`
  font-size: 1.1rem;
  color: #666;
  font-family: 'Questrial', sans-serif;
`,r=j.default.div.withConfig({displayName:"OrdersScreen.styles__OrderList",componentId:"sc-ced1726e-7"})`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,s=j.default.div.withConfig({displayName:"OrdersScreen.styles__OrderCard",componentId:"sc-ced1726e-8"})`
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
`,t=j.default.div.withConfig({displayName:"OrdersScreen.styles__OrderHeader",componentId:"sc-ced1726e-9"})`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e0e0e0;
`,u=j.default.div.withConfig({displayName:"OrdersScreen.styles__OrderId",componentId:"sc-ced1726e-10"})`
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.25rem;
  font-family: 'Questrial', sans-serif;
`,v=j.default.div.withConfig({displayName:"OrdersScreen.styles__OrderDate",componentId:"sc-ced1726e-11"})`
  font-size: 0.9rem;
  color: #666;
  font-family: 'Questrial', sans-serif;
`,w=j.default.div.withConfig({displayName:"OrdersScreen.styles__OrderStatus",componentId:"sc-ced1726e-12"})`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  font-family: 'Questrial', sans-serif;
  text-transform: capitalize;
  background: ${({$status:a})=>{switch(a?.toLowerCase()){case"completed":return"#e8f5e9";case"pending":return"#fff3e0";case"cancelled":return"#ffebee";default:return"#f5f5f5"}}};
  color: ${({$status:a})=>{switch(a?.toLowerCase()){case"completed":return"#2e7d32";case"pending":return"#f57c00";case"cancelled":return"#c62828";default:return"#666"}}};
`;j.default.div.withConfig({displayName:"OrdersScreen.styles__OrderItems",componentId:"sc-ced1726e-13"})`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,j.default.div.withConfig({displayName:"OrdersScreen.styles__OrderItem",componentId:"sc-ced1726e-14"})`
  display: flex;
  gap: 1rem;
  align-items: center;
`,j.default.img.withConfig({displayName:"OrdersScreen.styles__OrderItemImage",componentId:"sc-ced1726e-15"})`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  background: #f5f5f5;
`,j.default.div.withConfig({displayName:"OrdersScreen.styles__OrderItemDetails",componentId:"sc-ced1726e-16"})`
  flex: 1;
`,j.default.div.withConfig({displayName:"OrdersScreen.styles__OrderItemName",componentId:"sc-ced1726e-17"})`
  font-size: 0.95rem;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 0.25rem;
  font-family: 'Questrial', sans-serif;
`,j.default.div.withConfig({displayName:"OrdersScreen.styles__OrderItemPrice",componentId:"sc-ced1726e-18"})`
  font-size: 0.85rem;
  color: #666;
  font-family: 'Questrial', sans-serif;
`;let x=j.default.div.withConfig({displayName:"OrdersScreen.styles__OrderTotal",componentId:"sc-ced1726e-19"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #e0e0e0;
`,y=j.default.div.withConfig({displayName:"OrdersScreen.styles__OrderTotalLabel",componentId:"sc-ced1726e-20"})`
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  font-family: 'Questrial', sans-serif;
`,z=j.default.div.withConfig({displayName:"OrdersScreen.styles__OrderTotalValue",componentId:"sc-ced1726e-21"})`
  font-size: 1.25rem;
  font-weight: 600;
  color: #001f3f;
  font-family: 'Questrial', sans-serif;
`;a.i(56498);var A=a.i(29111),B=a.i(26863);a.s(["default",0,()=>{let{user:a,isLoading:j}=(0,e.useAuth)(),C=(0,d.useRouter)(),D=(0,d.useParams)(),E=(0,A.normalizeLocale)(D?.locale),[F,G]=(0,c.useState)([]),[H,I]=(0,c.useState)(!0),[J,K]=(0,c.useState)("");(0,c.useEffect)(()=>{j||(a?(async()=>{I(!0),K("");try{let a=await (0,i.listOrdersSession)();G(Array.isArray(a)?a:[])}catch(a){K(a instanceof Error?a.message:"Failed to load orders.")}finally{I(!1)}})():C.push((0,A.withLocale)(E,"/login")))},[a,j,C,E]);let{primaryColor:L,secondaryColor:M}=(0,B.useThemeColors)();return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(f.default,{primaryColor:L,secondaryColor:M}),(0,b.jsx)(k,{children:(0,b.jsxs)(l,{children:[(0,b.jsx)(h.default,{}),(0,b.jsx)(m,{children:(0,b.jsx)(n,{children:"Order History"})}),H?(0,b.jsx)(o,{children:(0,b.jsx)(q,{children:"Loading orders..."})}):J?(0,b.jsx)(o,{children:(0,b.jsx)(q,{children:J})}):0===F.length?(0,b.jsxs)(o,{children:[(0,b.jsx)(p,{children:(0,b.jsxs)("svg",{width:"64",height:"64",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[(0,b.jsx)("path",{d:"M9 11l3 3L22 4"}),(0,b.jsx)("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"})]})}),(0,b.jsx)(q,{children:"No orders yet"}),(0,b.jsx)(q,{style:{fontSize:"0.9rem",color:"#666",marginTop:"0.5rem"},children:"Your order history will appear here"})]}):(0,b.jsx)(r,{children:F.map(a=>(0,b.jsxs)(s,{children:[(0,b.jsxs)(t,{children:[(0,b.jsxs)("div",{children:[(0,b.jsxs)(u,{children:["Order #",a.id]}),(0,b.jsx)(v,{children:a.created_at?new Date(a.created_at).toLocaleDateString():"—"})]}),(0,b.jsx)(w,{$status:a.status||"pending",children:a.status||"pending"})]}),(0,b.jsxs)(x,{children:[(0,b.jsx)(y,{children:"Total:"}),(0,b.jsx)(z,{children:void 0!==a.total?`$${a.total}`:"--"})]})]},a.id))})]})}),(0,b.jsx)(g.default,{})]})}],11006)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__ec0ea4ee._.js.map