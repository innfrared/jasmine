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
`;a.i(56498);var l=a.i(29111);a.s(["default",0,({categoryName:a,subcategoryName:f,productName:g})=>{let m=(0,d.useParams)(),n=(0,d.usePathname)(),o=(0,d.useSearchParams)(),{categories:p}=(0,e.useCategories)(),q=(0,l.normalizeLocale)(m?.locale),r=n.split("/").filter(a=>a),s=r[0]===q?r.slice(1):r,t=g||m.slug,u=o.get("category_id"),v=o.get("subcategory_id"),w=u?Number(u):null,x=v?Number(v):null,y=(0,c.useMemo)(()=>{if(w)return p.find(a=>a.id===w)?.name},[p,w]),z=(0,c.useMemo)(()=>{if(w&&x)return p.find(a=>a.id===w)?.subcategories?.find(a=>a.id===x)?.name},[p,w,x]),A=a||y,B=f||z,C=[];return s.includes("profile")||s.includes("orders")||s.includes("shipping")||s.includes("cart")?(C.push({label:"Home",path:(0,l.withLocale)(q,"/")}),s.includes("profile")&&C.push({label:"Profile",path:(0,l.withLocale)(q,"/profile")}),s.includes("orders")&&C.push({label:"Order History",path:(0,l.withLocale)(q,"/orders")}),s.includes("shipping")&&C.push({label:"Shipping Information",path:(0,l.withLocale)(q,"/shipping")}),s.includes("cart")&&C.push({label:"Cart",path:(0,l.withLocale)(q,"/cart")})):(C.push({label:"Catalog",path:(0,l.withLocale)(q,"/")}),A&&w&&C.push({label:A,path:(0,l.withLocale)(q,`/products?category_id=${w}`)}),B&&A&&w&&x&&C.push({label:B,path:(0,l.withLocale)(q,`/products?category_id=${w}&subcategory_id=${x}`)}),t&&s.includes("product")&&C.push({label:decodeURIComponent(t),path:n})),(0,b.jsx)(h,{children:C.map((a,d)=>{let e=d===C.length-1;return(0,b.jsxs)(c.default.Fragment,{children:[d>0&&(0,b.jsx)(k,{children:"/"}),e?(0,b.jsx)(j,{children:a.label}):(0,b.jsx)(i,{href:a.path,children:a.label})]},d)})})}],79717)},82614,92e3,a=>{"use strict";var b=a.i(50404);a.s([],82614),a.s(["apiClient",()=>b.httpClient],92e3)},27984,a=>{"use strict";var b=a.i(1142),c=a.i(96766),d=a.i(61765),e=a.i(322);a.i(82614),a.i(92e3);var f=a.i(94952),g=a.i(59131),h=a.i(31570),i=a.i(79717),j=a.i(38120);let k=j.default.div.withConfig({displayName:"ProfileScreen.styles__ProfileContainer",componentId:"sc-b1d38b89-0"})`
  min-height: calc(100vh - 200px);
  padding: 4rem 2rem;
  background: #fafafa;
  font-family: 'Questrial', sans-serif;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`,l=j.default.div.withConfig({displayName:"ProfileScreen.styles__ProfileContent",componentId:"sc-b1d38b89-1"})`
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
`,m=j.default.div.withConfig({displayName:"ProfileScreen.styles__ProfileHeader",componentId:"sc-b1d38b89-2"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e0e0e0;
`,n=j.default.div.withConfig({displayName:"ProfileScreen.styles__ProfileIcon",componentId:"sc-b1d38b89-3"})`
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
`,o=j.default.h1.withConfig({displayName:"ProfileScreen.styles__ProfileTitle",componentId:"sc-b1d38b89-4"})`
  font-size: 2rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  font-family: 'Questrial', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,p=j.default.form.withConfig({displayName:"ProfileScreen.styles__ProfileForm",componentId:"sc-b1d38b89-5"})`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,q=j.default.div.withConfig({displayName:"ProfileScreen.styles__FormSection",componentId:"sc-b1d38b89-6"})`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,r=j.default.h2.withConfig({displayName:"ProfileScreen.styles__SectionTitle",componentId:"sc-b1d38b89-7"})`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.5rem;
  font-family: 'Questrial', sans-serif;
`,s=j.default.div.withConfig({displayName:"ProfileScreen.styles__InputGroup",componentId:"sc-b1d38b89-8"})`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,t=j.default.label.withConfig({displayName:"ProfileScreen.styles__Label",componentId:"sc-b1d38b89-9"})`
  font-size: 0.95rem;
  font-weight: 500;
  color: #333;
  font-family: 'Questrial', sans-serif;
`,u=j.default.input.withConfig({displayName:"ProfileScreen.styles__Input",componentId:"sc-b1d38b89-10"})`
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
`,v=j.default.div.withConfig({displayName:"ProfileScreen.styles__ButtonGroup",componentId:"sc-b1d38b89-11"})`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,w=j.default.button.withConfig({displayName:"ProfileScreen.styles__SaveButton",componentId:"sc-b1d38b89-12"})`
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
`,x=j.default.button.withConfig({displayName:"ProfileScreen.styles__CancelButton",componentId:"sc-b1d38b89-13"})`
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
`,y=j.default.div.withConfig({displayName:"ProfileScreen.styles__ErrorMessage",componentId:"sc-b1d38b89-14"})`
  color: #e74c3c;
  font-size: 0.875rem;
  padding: 0.75rem 1rem;
  background: #fee;
  border-radius: 8px;
  border: 1px solid #fcc;
  font-family: 'Questrial', sans-serif;
`,z=j.default.div.withConfig({displayName:"ProfileScreen.styles__SuccessMessage",componentId:"sc-b1d38b89-15"})`
  color: #27ae60;
  font-size: 0.875rem;
  padding: 0.75rem 1rem;
  background: #efe;
  border-radius: 8px;
  border: 1px solid #cfc;
  font-family: 'Questrial', sans-serif;
`;a.i(56498);var A=a.i(29111),B=a.i(26863);a.s(["default",0,()=>{let{user:a,updateUser:j,isLoading:C}=(0,e.useAuth)(),D=(0,d.useRouter)(),E=(0,d.useParams)(),F=(0,A.normalizeLocale)(E?.locale),[G,H]=(0,c.useState)({firstName:"",lastName:"",email:"",phone:""}),[I,J]=(0,c.useState)(""),[K,L]=(0,c.useState)(""),[M,N]=(0,c.useState)(!1),{primaryColor:O,secondaryColor:P}=(0,B.useThemeColors)();(0,c.useEffect)(()=>{if(!C){if(!a)return void D.push((0,A.withLocale)(F,"/login"));H({firstName:a.first_name||"",lastName:a.last_name||"",email:a.email||"",phone:a.phone||""})}},[a,C,D,F]);let Q=a=>{H({...G,[a.target.name]:a.target.value}),J(""),L("")},R=async a=>{a.preventDefault(),J(""),L(""),N(!0);try{let a,b=await (a={first_name:G.firstName||null,last_name:G.lastName||null,phone:G.phone||null},(0,f.sessionFetch)("/api/me",{method:"PATCH",body:JSON.stringify(a)}));j(b),L("Profile updated successfully!")}catch(a){J(a instanceof Error?a.message:"Failed to update profile. Please try again.")}finally{N(!1)}};return a?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(g.default,{primaryColor:O,secondaryColor:P}),(0,b.jsx)(k,{children:(0,b.jsxs)(l,{children:[(0,b.jsx)(i.default,{}),(0,b.jsxs)(m,{children:[(0,b.jsx)(n,{children:a?a.first_name&&a.last_name?`${a.first_name[0]}${a.last_name[0]}`.toUpperCase():a.first_name?a.first_name[0].toUpperCase():a.email?a.email[0].toUpperCase():"U":"U"}),(0,b.jsx)(o,{children:"My Profile"})]}),(0,b.jsxs)(p,{onSubmit:R,children:[(0,b.jsxs)(q,{children:[(0,b.jsx)(r,{children:"Personal Information"}),(0,b.jsxs)(s,{children:[(0,b.jsx)(t,{htmlFor:"firstName",children:"First Name"}),(0,b.jsx)(u,{id:"firstName",name:"firstName",type:"text",value:G.firstName,onChange:Q,placeholder:"Enter your first name"})]}),(0,b.jsxs)(s,{children:[(0,b.jsx)(t,{htmlFor:"lastName",children:"Last Name"}),(0,b.jsx)(u,{id:"lastName",name:"lastName",type:"text",value:G.lastName,onChange:Q,placeholder:"Enter your last name"})]}),(0,b.jsxs)(s,{children:[(0,b.jsx)(t,{htmlFor:"email",children:"Email"}),(0,b.jsx)(u,{id:"email",name:"email",type:"email",value:G.email,disabled:!0,style:{background:"#f5f5f5",cursor:"not-allowed"}})]}),(0,b.jsxs)(s,{children:[(0,b.jsx)(t,{htmlFor:"phone",children:"Phone"}),(0,b.jsx)(u,{id:"phone",name:"phone",type:"tel",value:G.phone,onChange:Q,placeholder:"Enter your phone number"})]})]}),I&&(0,b.jsx)(y,{children:I}),K&&(0,b.jsx)(z,{children:K}),(0,b.jsxs)(v,{children:[(0,b.jsx)(w,{type:"submit",disabled:M,children:M?"Saving...":"Save Changes"}),(0,b.jsx)(x,{type:"button",onClick:()=>{a&&H({firstName:a.first_name||"",lastName:a.last_name||"",email:a.email||"",phone:a.phone||""}),J(""),L("")},children:"Cancel"})]})]})]})}),(0,b.jsx)(h.default,{})]}):null}],27984)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__64bc1181._.js.map