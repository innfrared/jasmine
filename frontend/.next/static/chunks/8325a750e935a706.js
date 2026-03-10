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
`;e.s(["FooterBottom",0,p,"FooterContainer",0,a,"FooterContent",0,r,"FooterLinkSection",0,o,"LinkItem",0,m,"LinksList",0,f,"LinksSection",0,d,"Logo",0,l,"LogoDescription",0,s,"LogoSection",0,n,"SectionTitle",0,c],81095),e.s(["footerLinksData",0,[{title:"about_us",links:[{label:"Shipping Policy",href:"/policies/shipping-policy"},{label:"Returns & Refunds",href:"/policies/returns-refunds"}]},{title:"support",links:[{label:"Privacy Policy",href:"/policies/privacy-policy"},{label:"Terms & Conditions",href:"/policies/terms-conditions"}]},{title:"social",links:[{label:"Instagram",href:"https://www.instagram.com"},{label:"Facebook",href:"https://www.facebook.com"},{label:"Tiktok",href:"https://www.tiktok.com"}]}]],5424)},97005,e=>{"use strict";var t=e.i(26287);let i={primaryColor:"linear-gradient(135deg, #c39a37 0%, #b8860b 100%)",primaryColorFlat:"#d4af37",secondaryColor:"#001f3f"};e.s(["useThemeColors",0,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=(0,t.useMemo)(()=>({...i,...e}),[e]),[o,r]=(0,t.useState)(a);return(0,t.useEffect)(()=>{r({primaryColor:localStorage.getItem("theme_primary")||a.primaryColor||"linear-gradient(135deg, #a67c00 0%, #bf9b30 25%, #ffd700 50%, #d4af37 75%, #b8860b 100%)",primaryColorFlat:localStorage.getItem("theme_primary_flat")||a.primaryColorFlat,secondaryColor:localStorage.getItem("theme_secondary")||a.secondaryColor})},[a]),o}])},58090,e=>{"use strict";var t=e.i(66339);e.i(3157);var i=e.i(55062),a=e.i(85329),o=e.i(274),r=e.i(53805),n=e.i(81095),l=e.i(5424);e.i(9492);var s=e.i(93916),d=e.i(97005);function c(){let{t:e}=(0,i.useTranslation)(),c=(0,r.useParams)(),f=(0,s.normalizeLocale)(c?.locale),{secondaryColor:m}=(0,d.useThemeColors)({secondaryColor:"#ffffff"});return(0,t.jsxs)(n.FooterContainer,{$secondaryColor:m,children:[(0,t.jsxs)(n.FooterContent,{children:[(0,t.jsx)(n.FooterLinkSection,{children:l.footerLinksData.map((i,o)=>(0,t.jsxs)(n.LinksSection,{children:[(0,t.jsx)(n.SectionTitle,{$color:m,children:e(i.title)}),(0,t.jsx)(n.LinksList,{children:i.links.map((e,i)=>(0,t.jsx)(n.LinkItem,{$color:m,children:e.href.startsWith("http")?(0,t.jsx)("a",{href:e.href,target:"_blank",rel:"noreferrer",children:e.label}):(0,t.jsx)(a.default,{href:(0,s.withLocale)(f,e.href),children:e.label})},i))})]},o))}),(0,t.jsxs)(n.LogoSection,{children:[(0,t.jsx)(n.Logo,{children:(0,t.jsx)(o.default,{src:"/assets/logo.png",alt:"Logo",fill:!0,sizes:"(max-width: 768px) 110px, 150px"})}),(0,t.jsx)(n.LogoDescription,{children:e("slogan")})]})]}),(0,t.jsx)(n.FooterBottom,{children:(0,t.jsxs)("p",{children:["© ",new Date().getFullYear()," ",e("copyrightNotice")]})})]})}e.s(["default",()=>c])},77018,e=>{"use strict";var t=e.i(66339),i=e.i(26287),a=e.i(53805),o=e.i(59285),r=e.i(72902),n=e.i(85329);let l=r.default.nav.withConfig({displayName:"Breadcrumb.styles__BreadcrumbNav",componentId:"sc-e17aab5a-0"})`
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
`;e.i(9492);var f=e.i(93916);e.s(["default",0,e=>{let{categoryName:r,subcategoryName:n,productName:m}=e,p=(0,a.useParams)(),u=(0,a.usePathname)(),h=(0,a.useSearchParams)(),{categories:g}=(0,o.useCategories)(),x=(0,f.normalizeLocale)(p?.locale),b=u.split("/").filter(e=>e),y=b[0]===x?b.slice(1):b,w=m||p.slug,_=h.get("category_id"),C=h.get("subcategory_id"),v=_?Number(_):null,j=C?Number(C):null,N=(0,i.useMemo)(()=>{if(v)return g.find(e=>e.id===v)?.name},[g,v]),S=(0,i.useMemo)(()=>{if(v&&j)return g.find(e=>e.id===v)?.subcategories?.find(e=>e.id===j)?.name},[g,v,j]),k=r||N,I=n||S,L=[];return y.includes("profile")||y.includes("orders")||y.includes("shipping")||y.includes("cart")?(L.push({label:"Home",path:(0,f.withLocale)(x,"/")}),y.includes("profile")&&L.push({label:"Profile",path:(0,f.withLocale)(x,"/profile")}),y.includes("orders")&&L.push({label:"Order History",path:(0,f.withLocale)(x,"/orders")}),y.includes("shipping")&&L.push({label:"Shipping Information",path:(0,f.withLocale)(x,"/shipping")}),y.includes("cart")&&L.push({label:"Cart",path:(0,f.withLocale)(x,"/cart")})):(L.push({label:"Catalog",path:(0,f.withLocale)(x,"/")}),k&&v&&L.push({label:k,path:(0,f.withLocale)(x,`/products?category_id=${v}`)}),I&&k&&v&&j&&L.push({label:I,path:(0,f.withLocale)(x,`/products?category_id=${v}&subcategory_id=${j}`)}),w&&y.includes("product")&&L.push({label:decodeURIComponent(w),path:u})),(0,t.jsx)(l,{children:L.map((e,a)=>{let o=a===L.length-1;return(0,t.jsxs)(i.default.Fragment,{children:[a>0&&(0,t.jsx)(c,{children:"/"}),o?(0,t.jsx)(d,{children:e.label}):(0,t.jsx)(s,{href:e.path,children:e.label})]},a)})})}],77018)},41078,89093,e=>{"use strict";var t=e.i(44350);e.s([],41078),e.s(["apiClient",()=>t.httpClient],89093)},88330,e=>{"use strict";var t=e.i(66339),i=e.i(26287),a=e.i(53805),o=e.i(69650);e.i(41078),e.i(89093);var r=e.i(31077),n=e.i(16460),l=e.i(58090),s=e.i(77018),d=e.i(72902);let c=d.default.div.withConfig({displayName:"ProfileScreen.styles__ProfileContainer",componentId:"sc-b1d38b89-0"})`
  min-height: calc(100vh - 200px);
  padding: 4rem 2rem;
  background: #fafafa;
  font-family: 'Questrial', sans-serif;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`,f=d.default.div.withConfig({displayName:"ProfileScreen.styles__ProfileContent",componentId:"sc-b1d38b89-1"})`
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.04);

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    border-radius: 12px;
  }
`,m=d.default.div.withConfig({displayName:"ProfileScreen.styles__ProfileHeader",componentId:"sc-b1d38b89-2"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e0e0e0;
`,p=d.default.div.withConfig({displayName:"ProfileScreen.styles__ProfileIcon",componentId:"sc-b1d38b89-3"})`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, #001f3f 0%, #003366 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  box-shadow: 0 8px 24px rgba(0, 31, 63, 0.2);
  font-family: 'Questrial', sans-serif;
`,u=d.default.h1.withConfig({displayName:"ProfileScreen.styles__ProfileTitle",componentId:"sc-b1d38b89-4"})`
  font-size: 2rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  font-family: 'Questrial', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,h=d.default.form.withConfig({displayName:"ProfileScreen.styles__ProfileForm",componentId:"sc-b1d38b89-5"})`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,g=d.default.div.withConfig({displayName:"ProfileScreen.styles__FormSection",componentId:"sc-b1d38b89-6"})`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,x=d.default.h2.withConfig({displayName:"ProfileScreen.styles__SectionTitle",componentId:"sc-b1d38b89-7"})`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.5rem;
  font-family: 'Questrial', sans-serif;
`,b=d.default.div.withConfig({displayName:"ProfileScreen.styles__InputGroup",componentId:"sc-b1d38b89-8"})`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,y=d.default.label.withConfig({displayName:"ProfileScreen.styles__Label",componentId:"sc-b1d38b89-9"})`
  font-size: 0.95rem;
  font-weight: 500;
  color: #333;
  font-family: 'Questrial', sans-serif;
`,w=d.default.input.withConfig({displayName:"ProfileScreen.styles__Input",componentId:"sc-b1d38b89-10"})`
  padding: 0.875rem 1rem;
  border: 1.5px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  font-family: 'Questrial', sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  background: #fafafa;

  &:focus {
    border-color: #001f3f;
    box-shadow: 0 0 0 4px rgba(0, 31, 63, 0.08);
    background: white;
    transform: translateY(-1px);
  }

  &:disabled {
    background: #f5f5f5;
    cursor: not-allowed;
    color: #666;
  }

  &::placeholder {
    color: #999;
  }
`,_=d.default.div.withConfig({displayName:"ProfileScreen.styles__ButtonGroup",componentId:"sc-b1d38b89-11"})`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,C=d.default.button.withConfig({displayName:"ProfileScreen.styles__SaveButton",componentId:"sc-b1d38b89-12"})`
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
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover:not(:disabled) {
    background: #003366;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 31, 63, 0.25);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,v=d.default.button.withConfig({displayName:"ProfileScreen.styles__CancelButton",componentId:"sc-b1d38b89-13"})`
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
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: #f5f5f5;
    border-color: #ccc;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`,j=d.default.div.withConfig({displayName:"ProfileScreen.styles__ErrorMessage",componentId:"sc-b1d38b89-14"})`
  color: #e74c3c;
  font-size: 0.875rem;
  padding: 0.75rem 1rem;
  background: #fee;
  border-radius: 8px;
  border: 1px solid #fcc;
  font-family: 'Questrial', sans-serif;
`,N=d.default.div.withConfig({displayName:"ProfileScreen.styles__SuccessMessage",componentId:"sc-b1d38b89-15"})`
  color: #27ae60;
  font-size: 0.875rem;
  padding: 0.75rem 1rem;
  background: #efe;
  border-radius: 8px;
  border: 1px solid #cfc;
  font-family: 'Questrial', sans-serif;
`;e.i(9492);var S=e.i(93916),k=e.i(97005);e.s(["default",0,()=>{let{user:e,updateUser:d,isLoading:I}=(0,o.useAuth)(),L=(0,a.useRouter)(),F=(0,a.useParams)(),P=(0,S.normalizeLocale)(F?.locale),[z,T]=(0,i.useState)({firstName:"",lastName:"",email:"",phone:""}),[B,$]=(0,i.useState)(""),[Q,E]=(0,i.useState)(""),[U,Y]=(0,i.useState)(!1),{primaryColor:D,secondaryColor:M}=(0,k.useThemeColors)();(0,i.useEffect)(()=>{if(!I){if(!e)return void L.push((0,S.withLocale)(P,"/login"));T({firstName:e.first_name||"",lastName:e.last_name||"",email:e.email||"",phone:e.phone||""})}},[e,I,L,P]);let O=e=>{T({...z,[e.target.name]:e.target.value}),$(""),E("")},R=async e=>{e.preventDefault(),$(""),E(""),Y(!0);try{let e,t=await (e={first_name:z.firstName||null,last_name:z.lastName||null,phone:z.phone||null},(0,r.sessionFetch)("/api/me",{method:"PATCH",body:JSON.stringify(e)}));d(t),E("Profile updated successfully!")}catch(e){$(e instanceof Error?e.message:"Failed to update profile. Please try again.")}finally{Y(!1)}};return e?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.default,{primaryColor:D,secondaryColor:M}),(0,t.jsx)(c,{children:(0,t.jsxs)(f,{children:[(0,t.jsx)(s.default,{}),(0,t.jsxs)(m,{children:[(0,t.jsx)(p,{children:e?e.first_name&&e.last_name?`${e.first_name[0]}${e.last_name[0]}`.toUpperCase():e.first_name?e.first_name[0].toUpperCase():e.email?e.email[0].toUpperCase():"U":"U"}),(0,t.jsx)(u,{children:"My Profile"})]}),(0,t.jsxs)(h,{onSubmit:R,children:[(0,t.jsxs)(g,{children:[(0,t.jsx)(x,{children:"Personal Information"}),(0,t.jsxs)(b,{children:[(0,t.jsx)(y,{htmlFor:"firstName",children:"First Name"}),(0,t.jsx)(w,{id:"firstName",name:"firstName",type:"text",value:z.firstName,onChange:O,placeholder:"Enter your first name"})]}),(0,t.jsxs)(b,{children:[(0,t.jsx)(y,{htmlFor:"lastName",children:"Last Name"}),(0,t.jsx)(w,{id:"lastName",name:"lastName",type:"text",value:z.lastName,onChange:O,placeholder:"Enter your last name"})]}),(0,t.jsxs)(b,{children:[(0,t.jsx)(y,{htmlFor:"email",children:"Email"}),(0,t.jsx)(w,{id:"email",name:"email",type:"email",value:z.email,disabled:!0,style:{background:"#f5f5f5",cursor:"not-allowed"}})]}),(0,t.jsxs)(b,{children:[(0,t.jsx)(y,{htmlFor:"phone",children:"Phone"}),(0,t.jsx)(w,{id:"phone",name:"phone",type:"tel",value:z.phone,onChange:O,placeholder:"Enter your phone number"})]})]}),B&&(0,t.jsx)(j,{children:B}),Q&&(0,t.jsx)(N,{children:Q}),(0,t.jsxs)(_,{children:[(0,t.jsx)(C,{type:"submit",disabled:U,children:U?"Saving...":"Save Changes"}),(0,t.jsx)(v,{type:"button",onClick:()=>{e&&T({firstName:e.first_name||"",lastName:e.last_name||"",email:e.email||"",phone:e.phone||""}),$(""),E("")},children:"Cancel"})]})]})]})}),(0,t.jsx)(l.default,{})]}):null}],88330)}]);