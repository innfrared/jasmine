(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,27004,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"warnOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},81095,5424,e=>{"use strict";var t=e.i(72902);let o=t.keyframes`
    0% { transform: translateY(-50px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
`,i=t.default.footer.withConfig({displayName:"Footer.styles__FooterContainer",componentId:"sc-a6c51aef-0"})`
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
`,r=t.default.div.withConfig({displayName:"Footer.styles__FooterContent",componentId:"sc-a6c51aef-2"})`
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
`,l=t.default.div.withConfig({displayName:"Footer.styles__Logo",componentId:"sc-a6c51aef-4"})`
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
`,s=t.default.p.withConfig({displayName:"Footer.styles__LogoDescription",componentId:"sc-a6c51aef-5"})`
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  font-weight: bold;
`,c=t.default.div.withConfig({displayName:"Footer.styles__LinksSection",componentId:"sc-a6c51aef-6"})`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
  }
`,d=t.default.h3.withConfig({displayName:"Footer.styles__SectionTitle",componentId:"sc-a6c51aef-7"})`
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

  ${e=>{let{variant:o}=e;return"instagram"===o&&t.css`
      &:hover {
        background-color: #d62976;
      }
    `}}
  ${e=>{let{variant:o}=e;return"viber"===o&&t.css`
      &:hover {
        background-color: #7f4da0;
      }
    `}}
    ${e=>{let{variant:o}=e;return"whatsapp"===o&&t.css`
      &:hover {
        background-color: #128c7e;
      }
    `}}
    ${e=>{let{variant:o}=e;return"telegram"===o&&t.css`
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
  animation: ${o} 0.3s both;
`;let m=t.default.div.withConfig({displayName:"Footer.styles__FooterBottom",componentId:"sc-a6c51aef-14"})`
  text-align: left;
  font-size: 12px;
`;e.s(["FooterBottom",0,m,"FooterContainer",0,i,"FooterContent",0,r,"FooterLinkSection",0,a,"LinkItem",0,f,"LinksList",0,p,"LinksSection",0,c,"Logo",0,l,"LogoDescription",0,s,"LogoSection",0,n,"SectionTitle",0,d],81095),e.s(["footerLinksData",0,[{title:"about_us",links:[{label:"Shipping Policy",href:"/policies/shipping-policy"},{label:"Returns & Refunds",href:"/policies/returns-refunds"}]},{title:"support",links:[{label:"Privacy Policy",href:"/policies/privacy-policy"},{label:"Terms & Conditions",href:"/policies/terms-conditions"}]},{title:"social",links:[{label:"Instagram",href:"https://www.instagram.com"},{label:"Facebook",href:"https://www.facebook.com"},{label:"Tiktok",href:"https://www.tiktok.com"}]}]],5424)},97005,e=>{"use strict";var t=e.i(26287);let o={primaryColor:"linear-gradient(135deg, #c39a37 0%, #b8860b 100%)",primaryColorFlat:"#d4af37",secondaryColor:"#001f3f"};e.s(["useThemeColors",0,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=(0,t.useMemo)(()=>({...o,...e}),[e]),[a,r]=(0,t.useState)(i);return(0,t.useEffect)(()=>{r({primaryColor:localStorage.getItem("theme_primary")||i.primaryColor||"linear-gradient(135deg, #a67c00 0%, #bf9b30 25%, #ffd700 50%, #d4af37 75%, #b8860b 100%)",primaryColorFlat:localStorage.getItem("theme_primary_flat")||i.primaryColorFlat,secondaryColor:localStorage.getItem("theme_secondary")||i.secondaryColor})},[i]),a}])},58090,e=>{"use strict";var t=e.i(66339);e.i(3157);var o=e.i(55062),i=e.i(85329),a=e.i(274),r=e.i(53805),n=e.i(81095),l=e.i(5424);e.i(9492);var s=e.i(93916),c=e.i(97005);function d(){let{t:e}=(0,o.useTranslation)(),d=(0,r.useParams)(),p=(0,s.normalizeLocale)(d?.locale),{secondaryColor:f}=(0,c.useThemeColors)({secondaryColor:"#ffffff"});return(0,t.jsxs)(n.FooterContainer,{$secondaryColor:f,children:[(0,t.jsxs)(n.FooterContent,{children:[(0,t.jsx)(n.FooterLinkSection,{children:l.footerLinksData.map((o,a)=>(0,t.jsxs)(n.LinksSection,{children:[(0,t.jsx)(n.SectionTitle,{$color:f,children:e(o.title)}),(0,t.jsx)(n.LinksList,{children:o.links.map((e,o)=>(0,t.jsx)(n.LinkItem,{$color:f,children:e.href.startsWith("http")?(0,t.jsx)("a",{href:e.href,target:"_blank",rel:"noreferrer",children:e.label}):(0,t.jsx)(i.default,{href:(0,s.withLocale)(p,e.href),children:e.label})},o))})]},a))}),(0,t.jsxs)(n.LogoSection,{children:[(0,t.jsx)(n.Logo,{children:(0,t.jsx)(a.default,{src:"/assets/logo.png",alt:"Logo",fill:!0,sizes:"(max-width: 768px) 110px, 150px"})}),(0,t.jsx)(n.LogoDescription,{children:e("slogan")})]})]}),(0,t.jsx)(n.FooterBottom,{children:(0,t.jsxs)("p",{children:["© ",new Date().getFullYear()," ",e("copyrightNotice")]})})]})}e.s(["default",()=>d])},77018,e=>{"use strict";var t=e.i(66339),o=e.i(26287),i=e.i(53805),a=e.i(59285),r=e.i(72902),n=e.i(85329);let l=r.default.nav.withConfig({displayName:"Breadcrumb.styles__BreadcrumbNav",componentId:"sc-e17aab5a-0"})`
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
`,s=(0,r.default)(n.default).withConfig({displayName:"Breadcrumb.styles__BreadcrumbLink",componentId:"sc-e17aab5a-1"})`
  text-decoration: none;
  color: #001f3f;
  transition: color 0.3s ease;
  font-family: 'Questrial', sans-serif;

  &:hover {
    text-decoration: underline;
    color: #003366;
  }
`,c=r.default.span.withConfig({displayName:"Breadcrumb.styles__BreadcrumbText",componentId:"sc-e17aab5a-2"})`
  color: #001f3f;
`,d=r.default.span.withConfig({displayName:"Breadcrumb.styles__BreadcrumbSeparator",componentId:"sc-e17aab5a-3"})`
  margin: 0 8px;
  color: #dedede;
  font-family: 'Questrial', sans-serif;
`;e.i(9492);var p=e.i(93916);e.s(["default",0,e=>{let{categoryName:r,subcategoryName:n,productName:f}=e,m=(0,i.useParams)(),h=(0,i.usePathname)(),u=(0,i.useSearchParams)(),{categories:g}=(0,a.useCategories)(),y=(0,p.normalizeLocale)(m?.locale),x=h.split("/").filter(e=>e),b=x[0]===y?x.slice(1):x,w=f||m.slug,_=u.get("category_id"),C=u.get("subcategory_id"),v=_?Number(_):null,L=C?Number(C):null,k=(0,o.useMemo)(()=>{if(v)return g.find(e=>e.id===v)?.name},[g,v]),j=(0,o.useMemo)(()=>{if(v&&L)return g.find(e=>e.id===v)?.subcategories?.find(e=>e.id===L)?.name},[g,v,L]),F=r||k,I=n||j,S=[];return b.includes("profile")||b.includes("orders")||b.includes("shipping")||b.includes("cart")?(S.push({label:"Home",path:(0,p.withLocale)(y,"/")}),b.includes("profile")&&S.push({label:"Profile",path:(0,p.withLocale)(y,"/profile")}),b.includes("orders")&&S.push({label:"Order History",path:(0,p.withLocale)(y,"/orders")}),b.includes("shipping")&&S.push({label:"Shipping Information",path:(0,p.withLocale)(y,"/shipping")}),b.includes("cart")&&S.push({label:"Cart",path:(0,p.withLocale)(y,"/cart")})):(S.push({label:"Catalog",path:(0,p.withLocale)(y,"/")}),F&&v&&S.push({label:F,path:(0,p.withLocale)(y,`/products?category_id=${v}`)}),I&&F&&v&&L&&S.push({label:I,path:(0,p.withLocale)(y,`/products?category_id=${v}&subcategory_id=${L}`)}),w&&b.includes("product")&&S.push({label:decodeURIComponent(w),path:h})),(0,t.jsx)(l,{children:S.map((e,i)=>{let a=i===S.length-1;return(0,t.jsxs)(o.default.Fragment,{children:[i>0&&(0,t.jsx)(d,{children:"/"}),a?(0,t.jsx)(c,{children:e.label}):(0,t.jsx)(s,{href:e.path,children:e.label})]},i)})})}],77018)},26230,e=>{"use strict";var t=e.i(66339),o=e.i(16460),i=e.i(58090),a=e.i(77018),r=e.i(72902);let n=r.default.main.withConfig({displayName:"PaymentScreen.styles__PaymentContainer",componentId:"sc-d926577b-0"})`
  max-width: 1200px;
  margin: 0 auto;
  padding: 140px 3rem 4rem;
  width: 100%;
`,l=r.default.h1.withConfig({displayName:"PaymentScreen.styles__PaymentTitle",componentId:"sc-d926577b-1"})`
  font-size: 2rem;
  font-weight: 500;
  color: #1a1a1a;
  margin: 0 0 1rem;
  font-family: 'Questrial', sans-serif;
`,s=r.default.p.withConfig({displayName:"PaymentScreen.styles__PaymentText",componentId:"sc-d926577b-2"})`
  font-size: 1rem;
  color: #555;
  margin: 0 0 1.5rem;
  font-family: 'Questrial', sans-serif;
`,c=r.default.div.withConfig({displayName:"PaymentScreen.styles__PaymentNote",componentId:"sc-d926577b-3"})`
  background: #f9f7f2;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  padding: 1.5rem;
  font-family: 'Questrial', sans-serif;
  color: #4b4b4b;
`;var d=e.i(97005);e.s(["default",0,()=>{let{primaryColor:e,secondaryColor:r}=(0,d.useThemeColors)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.default,{primaryColor:e,secondaryColor:r}),(0,t.jsxs)(n,{children:[(0,t.jsx)(a.default,{}),(0,t.jsx)(l,{children:"Payment"}),(0,t.jsx)(s,{children:"Payment is handled securely during checkout. Choose your preferred payment method when placing your order."}),(0,t.jsx)(c,{children:"If you have any questions about available payment methods, please reach out to our support team."})]}),(0,t.jsx)(i.default,{})]})}],26230)}]);