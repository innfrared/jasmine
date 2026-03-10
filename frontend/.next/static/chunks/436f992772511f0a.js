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
`;e.s(["FooterBottom",0,m,"FooterContainer",0,o,"FooterContent",0,r,"FooterLinkSection",0,a,"LinkItem",0,f,"LinksList",0,p,"LinksSection",0,d,"Logo",0,l,"LogoDescription",0,s,"LogoSection",0,n,"SectionTitle",0,c],81095),e.s(["footerLinksData",0,[{title:"about_us",links:[{label:"Shipping Policy",href:"/policies/shipping-policy"},{label:"Returns & Refunds",href:"/policies/returns-refunds"}]},{title:"support",links:[{label:"Privacy Policy",href:"/policies/privacy-policy"},{label:"Terms & Conditions",href:"/policies/terms-conditions"}]},{title:"social",links:[{label:"Instagram",href:"https://www.instagram.com"},{label:"Facebook",href:"https://www.facebook.com"},{label:"Tiktok",href:"https://www.tiktok.com"}]}]],5424)},97005,e=>{"use strict";var t=e.i(26287);let i={primaryColor:"linear-gradient(135deg, #c39a37 0%, #b8860b 100%)",primaryColorFlat:"#d4af37",secondaryColor:"#001f3f"};e.s(["useThemeColors",0,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=(0,t.useMemo)(()=>({...i,...e}),[e]),[a,r]=(0,t.useState)(o);return(0,t.useEffect)(()=>{r({primaryColor:localStorage.getItem("theme_primary")||o.primaryColor||"linear-gradient(135deg, #a67c00 0%, #bf9b30 25%, #ffd700 50%, #d4af37 75%, #b8860b 100%)",primaryColorFlat:localStorage.getItem("theme_primary_flat")||o.primaryColorFlat,secondaryColor:localStorage.getItem("theme_secondary")||o.secondaryColor})},[o]),a}])},58090,e=>{"use strict";var t=e.i(66339);e.i(3157);var i=e.i(55062),o=e.i(85329),a=e.i(274),r=e.i(53805),n=e.i(81095),l=e.i(5424);e.i(9492);var s=e.i(93916),d=e.i(97005);function c(){let{t:e}=(0,i.useTranslation)(),c=(0,r.useParams)(),p=(0,s.normalizeLocale)(c?.locale),{secondaryColor:f}=(0,d.useThemeColors)({secondaryColor:"#ffffff"});return(0,t.jsxs)(n.FooterContainer,{$secondaryColor:f,children:[(0,t.jsxs)(n.FooterContent,{children:[(0,t.jsx)(n.FooterLinkSection,{children:l.footerLinksData.map((i,a)=>(0,t.jsxs)(n.LinksSection,{children:[(0,t.jsx)(n.SectionTitle,{$color:f,children:e(i.title)}),(0,t.jsx)(n.LinksList,{children:i.links.map((e,i)=>(0,t.jsx)(n.LinkItem,{$color:f,children:e.href.startsWith("http")?(0,t.jsx)("a",{href:e.href,target:"_blank",rel:"noreferrer",children:e.label}):(0,t.jsx)(o.default,{href:(0,s.withLocale)(p,e.href),children:e.label})},i))})]},a))}),(0,t.jsxs)(n.LogoSection,{children:[(0,t.jsx)(n.Logo,{children:(0,t.jsx)(a.default,{src:"/assets/logo.png",alt:"Logo",fill:!0,sizes:"(max-width: 768px) 110px, 150px"})}),(0,t.jsx)(n.LogoDescription,{children:e("slogan")})]})]}),(0,t.jsx)(n.FooterBottom,{children:(0,t.jsxs)("p",{children:["© ",new Date().getFullYear()," ",e("copyrightNotice")]})})]})}e.s(["default",()=>c])},77018,e=>{"use strict";var t=e.i(66339),i=e.i(26287),o=e.i(53805),a=e.i(59285),r=e.i(72902),n=e.i(85329);let l=r.default.nav.withConfig({displayName:"Breadcrumb.styles__BreadcrumbNav",componentId:"sc-e17aab5a-0"})`
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
`,d=r.default.span.withConfig({displayName:"Breadcrumb.styles__BreadcrumbText",componentId:"sc-e17aab5a-2"})`
  color: #001f3f;
`,c=r.default.span.withConfig({displayName:"Breadcrumb.styles__BreadcrumbSeparator",componentId:"sc-e17aab5a-3"})`
  margin: 0 8px;
  color: #dedede;
  font-family: 'Questrial', sans-serif;
`;e.i(9492);var p=e.i(93916);e.s(["default",0,e=>{let{categoryName:r,subcategoryName:n,productName:f}=e,m=(0,o.useParams)(),h=(0,o.usePathname)(),u=(0,o.useSearchParams)(),{categories:g}=(0,a.useCategories)(),x=(0,p.normalizeLocale)(m?.locale),y=h.split("/").filter(e=>e),b=y[0]===x?y.slice(1):y,w=f||m.slug,v=u.get("category_id"),C=u.get("subcategory_id"),_=v?Number(v):null,j=C?Number(C):null,k=(0,i.useMemo)(()=>{if(_)return g.find(e=>e.id===_)?.name},[g,_]),L=(0,i.useMemo)(()=>{if(_&&j)return g.find(e=>e.id===_)?.subcategories?.find(e=>e.id===j)?.name},[g,_,j]),S=r||k,I=n||L,N=[];return b.includes("profile")||b.includes("orders")||b.includes("shipping")||b.includes("cart")?(N.push({label:"Home",path:(0,p.withLocale)(x,"/")}),b.includes("profile")&&N.push({label:"Profile",path:(0,p.withLocale)(x,"/profile")}),b.includes("orders")&&N.push({label:"Order History",path:(0,p.withLocale)(x,"/orders")}),b.includes("shipping")&&N.push({label:"Shipping Information",path:(0,p.withLocale)(x,"/shipping")}),b.includes("cart")&&N.push({label:"Cart",path:(0,p.withLocale)(x,"/cart")})):(N.push({label:"Catalog",path:(0,p.withLocale)(x,"/")}),S&&_&&N.push({label:S,path:(0,p.withLocale)(x,`/products?category_id=${_}`)}),I&&S&&_&&j&&N.push({label:I,path:(0,p.withLocale)(x,`/products?category_id=${_}&subcategory_id=${j}`)}),w&&b.includes("product")&&N.push({label:decodeURIComponent(w),path:h})),(0,t.jsx)(l,{children:N.map((e,o)=>{let a=o===N.length-1;return(0,t.jsxs)(i.default.Fragment,{children:[o>0&&(0,t.jsx)(c,{children:"/"}),a?(0,t.jsx)(d,{children:e.label}):(0,t.jsx)(s,{href:e.path,children:e.label})]},o)})})}],77018)},48922,e=>{"use strict";var t=e.i(66339),i=e.i(26287),o=e.i(16460),a=e.i(58090);e.i(3157);var r=e.i(55062),n=e.i(77018),l=e.i(53805),s=e.i(274),d=e.i(98803),c=e.i(72902);let p=c.default.div.withConfig({displayName:"languages.styles__TopNavbar",componentId:"sc-79dcb419-0"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #cc0c5c;
  padding: 0 1rem;
  font-size: 14px;
  height: 3vh;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 2vh;
    font-size: 12px;
    height: auto;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
  }
`,f=c.default.div.withConfig({displayName:"languages.styles__LanguageSelector",componentId:"sc-79dcb419-1"})`
  display: flex;
  gap: 10px;
  border-radius: 5px;
  padding: 2px;

  @media (max-width: 768px) {
    display: none;
  }
`,m=c.default.button.withConfig({displayName:"languages.styles__LanguageButton",componentId:"sc-79dcb419-2"})`
  border: none;
  padding: 0;
  cursor: pointer;
  transition: transform 0.3s ease;
  background: none;
  height: 17px;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    width: 24px;
    height: 16px;
    background-color: #cbcbcb;
    border-radius: 3px;
  }

  ${e=>{let{$active:t}=e;return t&&c.css`
      svg {
        transform: scale(1.1);
        border-radius: 3px;
        background-color: #ffffff;
      }
    `}}
`;e.i(9492);var h=e.i(93916);function u(){let{i18n:e}=(0,r.useTranslation)(),o=(0,l.useParams)(),a=(0,l.usePathname)(),n=(0,l.useRouter)(),s=(0,h.normalizeLocale)(o?.locale),[d,c]=(0,i.useState)(s);(0,i.useEffect)(()=>{c(s)},[s]);let u=t=>{if(!(0,h.isSupportedLocale)(t))return;c(t),e.changeLanguage(t);let i=a.startsWith(`/${s}`)?a.replace(`/${s}`,"")||"/":a;n.push((0,h.withLocale)(t,i))};return(0,t.jsx)(p,{children:(0,t.jsxs)(f,{children:[(0,t.jsx)(m,{$active:"am"===d,onClick:()=>u("am"),type:"button",children:(0,t.jsx)("svg",{viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",fill:"#000000",children:(0,t.jsxs)("g",{children:[(0,t.jsx)("path",{fill:"#D90012",d:"M32 5H4a4 4 0 0 0-4 4v4h36V9a4 4 0 0 0-4-4z"}),(0,t.jsx)("path",{fill:"#F2A800",d:"M4 31h28a4 4 0 0 0 4-4v-4H0v4a4 4 0 0 0 4 4z"}),(0,t.jsx)("path",{fill:"#0033A0",d:"M0 13h36v10H0z"})]})})}),(0,t.jsx)(m,{$active:"ru"===d,onClick:()=>u("ru"),type:"button",children:(0,t.jsx)("svg",{viewBox:"0 -4 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsxs)("g",{children:[(0,t.jsx)("rect",{x:"0.25",y:"0.25",width:"27.5",height:"19.5",rx:"1.75",fill:"white",stroke:"#f5f5f5",strokeWidth:"0.5"}),(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 13.3333H28V6.66667H0V13.3333Z",fill:"#0C47B7"}),(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 20H28V13.3333H0V20Z",fill:"#E53B35"})]})})}),(0,t.jsx)(m,{$active:"en"===d,onClick:()=>u("en"),type:"button",children:(0,t.jsx)("svg",{viewBox:"0 -4 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsxs)("g",{children:[(0,t.jsx)("rect",{width:"28",height:"20",rx:"2",fill:"white"}),(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 0H0V1.33333H28V0ZM28 2.66667H0V4H28V2.66667ZM0 5.33333H28V6.66667H0V5.33333ZM28 8H0V9.33333H28V8ZM0 10.6667H28V12H0V10.6667ZM28 13.3333H0V14.6667H28V13.3333ZM0 16H28V17.3333H0V16ZM28 18.6667H0V20H28V18.6667Z",fill:"#D02F44"}),(0,t.jsx)("rect",{width:"12",height:"9.33333",fill:"#46467F"})]})})})]})})}let g=c.default.div.withConfig({displayName:"ComparisonScreen.styles__ComparisonPage",componentId:"sc-43845272-0"})`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`,x=c.default.div.withConfig({displayName:"ComparisonScreen.styles__ComparisonText",componentId:"sc-43845272-1"})`
  font-weight: bold;
  font-size: 2rem;
  color: #cc0c5c;
`,y=c.default.div.withConfig({displayName:"ComparisonScreen.styles__ComparisonTable",componentId:"sc-43845272-2"})`
  display: flex;
  overflow-x: auto;
  align-items: flex-end;
  padding: 30px;
  width: 90vw;
`,b=c.default.div.withConfig({displayName:"ComparisonScreen.styles__TableLeft",componentId:"sc-43845272-3"})`
  min-width: 250px;
  background-color: #cc0c5c;
  padding: 20px;
  border-radius: 15px;
  text-align: left;
  height: fit-content;
  position: relative;
  margin-bottom: 60px;
`,w=c.default.div.withConfig({displayName:"ComparisonScreen.styles__FeatureRow",componentId:"sc-43845272-4"})`
  display: flex;
  align-items: center;
  color: #ffffff;
  font-size: 0.9rem;
  padding: 10px;
  border-bottom: 2px solid #ffffff;

  &:last-child {
    border-bottom: none;
  }
`,v=c.default.div.withConfig({displayName:"ComparisonScreen.styles__TableRight",componentId:"sc-43845272-5"})`
  display: flex;
`,C=c.default.div.withConfig({displayName:"ComparisonScreen.styles__ProductColumn",componentId:"sc-43845272-6"})`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 150px;
  width: 350px;
  text-align: center;
  padding: 0 20px;
`,_=c.default.div.withConfig({displayName:"ComparisonScreen.styles__ProductHeader",componentId:"sc-43845272-7"})`
  font-size: 0.9rem;
  margin-bottom: 10px;
  cursor: pointer;

  > div {
    font-weight: bold;
    font-size: 1.6rem;
    margin-bottom: 20px;
  }
`,j=c.default.div.withConfig({displayName:"ComparisonScreen.styles__ProductImage",componentId:"sc-43845272-8"})`
  width: 200px;
  height: 200px;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 20px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`,k=c.default.div.withConfig({displayName:"ComparisonScreen.styles__FeatureCellTableBottom",componentId:"sc-43845272-9"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`,L=c.default.div.withConfig({displayName:"ComparisonScreen.styles__FeatureCellTable",componentId:"sc-43845272-10"})`
  background-color: #efefef;
  padding: 20px;
  width: 80%;
`,S=c.default.div.withConfig({displayName:"ComparisonScreen.styles__FeatureCell",componentId:"sc-43845272-11"})`
  display: flex;
  flex-direction: column;
  padding: 10px;
  font-size: 0.9rem;
  border-bottom: 2px solid #b6b6b6;

  &:last-child {
    border-bottom: none;
  }
`,I=c.default.button.withConfig({displayName:"ComparisonScreen.styles__RemoveButton",componentId:"sc-43845272-12"})`
  background: #d3d3d3;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #7c7c7c;
  border-radius: 50px;
  transition: color 0.2s ease;
  width: 50px;
  height: 50px;

  &:hover {
    color: #dc1515;
    background-color: #efcaca;
  }
`,N=c.default.div.withConfig({displayName:"ComparisonScreen.styles__DividerLine",componentId:"sc-43845272-13"})`
  width: 90%;
  background-color: #dcdcdc;
  height: 2px;
  margin: 0 16px;
`;var F=e.i(94387);e.s(["default",0,()=>{let{t:e}=(0,r.useTranslation)(),[c,p]=(0,i.useState)([]),f=(0,l.useRouter)(),m=(0,l.useParams)(),H=(0,h.normalizeLocale)(m?.locale);return(0,i.useEffect)(()=>{let e=localStorage.getItem("compareProducts");e&&p(JSON.parse(e))},[]),(0,t.jsxs)(g,{children:[(0,t.jsx)(u,{}),(0,t.jsx)(o.default,{primaryColor:"#CC0C5C",secondaryColor:"#F2A800"}),(0,t.jsx)(n.default,{}),(0,t.jsx)(x,{children:e("comparison")}),Object.entries((e=>{let t={};for(let i of e){let e=i.category_id;t[e]||(t[e]=[]),t[e].push(i)}return t})(c)).map(e=>{let o,[a,r]=e,n=(o=new Set,r.forEach(e=>{e.specifications&&Object.keys(e.specifications).forEach(e=>o.add(e))}),Array.from(o));return(0,t.jsxs)(i.default.Fragment,{children:[(0,t.jsxs)(y,{children:[(0,t.jsx)(b,{children:n.map((e,i)=>(0,t.jsx)(w,{children:e},i))}),(0,t.jsx)(v,{children:r.map((e,i)=>(0,t.jsxs)(C,{children:[(0,t.jsxs)(_,{onClick:()=>{f.push((0,h.withLocale)(H,`/product/${(0,F.buildProductSlug)(e.name,e.id)}`))},children:[(0,t.jsx)(j,{children:(0,t.jsx)(s.default,{src:(0,d.getImageUrl)(e.variant_image)||"/assets/logo.png",alt:e.name,fill:!0,sizes:"200px"})}),(0,t.jsx)("div",{children:e.name})]}),(0,t.jsxs)(k,{children:[(0,t.jsx)(L,{children:n.map((i,o)=>(0,t.jsx)(S,{children:e.specifications[i]||"-"},o))}),(0,t.jsx)(I,{onClick:()=>{var t;let i;return t=e.id,void(p(i=c.filter(e=>e.id!==t)),localStorage.setItem("compareProducts",JSON.stringify(i)))},title:"Remove from comparison",children:(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16",children:[(0,t.jsx)("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6zm2 .5a.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6z"}),(0,t.jsx)("path",{fillRule:"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1 0-2H5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1h2.5a1 1 0 0 1 1 1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM5 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V3H5v-.5z"})]})})]})]},i))})]}),(0,t.jsx)(N,{})]},a)}),(0,t.jsx)(a.default,{})]})}],48922)}]);