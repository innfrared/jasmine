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
`,i=t.default.div.withConfig({displayName:"Footer.styles__FooterLinkSection",componentId:"sc-a6c51aef-1"})`
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
`,a=t.default.div.withConfig({displayName:"Footer.styles__LogoSection",componentId:"sc-a6c51aef-3"})`
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
`;let p=t.default.div.withConfig({displayName:"Footer.styles__FooterBottom",componentId:"sc-a6c51aef-14"})`
  text-align: left;
  font-size: 12px;
`;e.s(["FooterBottom",0,p,"FooterContainer",0,o,"FooterContent",0,n,"FooterLinkSection",0,i,"LinkItem",0,f,"LinksList",0,m,"LinksSection",0,d,"Logo",0,s,"LogoDescription",0,l,"LogoSection",0,a,"SectionTitle",0,c],81095),e.s(["footerLinksData",0,[{title:"about_us",links:[{label:"Shipping Policy",href:"/policies/shipping-policy"},{label:"Returns & Refunds",href:"/policies/returns-refunds"}]},{title:"support",links:[{label:"Privacy Policy",href:"/policies/privacy-policy"},{label:"Terms & Conditions",href:"/policies/terms-conditions"}]},{title:"social",links:[{label:"Instagram",href:"https://www.instagram.com"},{label:"Facebook",href:"https://www.facebook.com"},{label:"Tiktok",href:"https://www.tiktok.com"}]}]],5424)},97005,e=>{"use strict";var t=e.i(26287);let r={primaryColor:"linear-gradient(135deg, #c39a37 0%, #b8860b 100%)",primaryColorFlat:"#d4af37",secondaryColor:"#001f3f"};e.s(["useThemeColors",0,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=(0,t.useMemo)(()=>({...r,...e}),[e]),[i,n]=(0,t.useState)(o);return(0,t.useEffect)(()=>{n({primaryColor:localStorage.getItem("theme_primary")||o.primaryColor||"linear-gradient(135deg, #a67c00 0%, #bf9b30 25%, #ffd700 50%, #d4af37 75%, #b8860b 100%)",primaryColorFlat:localStorage.getItem("theme_primary_flat")||o.primaryColorFlat,secondaryColor:localStorage.getItem("theme_secondary")||o.secondaryColor})},[o]),i}])},58090,e=>{"use strict";var t=e.i(66339);e.i(3157);var r=e.i(55062),o=e.i(85329),i=e.i(274),n=e.i(53805),a=e.i(81095),s=e.i(5424);e.i(9492);var l=e.i(93916),d=e.i(97005);function c(){let{t:e}=(0,r.useTranslation)(),c=(0,n.useParams)(),m=(0,l.normalizeLocale)(c?.locale),{secondaryColor:f}=(0,d.useThemeColors)({secondaryColor:"#ffffff"});return(0,t.jsxs)(a.FooterContainer,{$secondaryColor:f,children:[(0,t.jsxs)(a.FooterContent,{children:[(0,t.jsx)(a.FooterLinkSection,{children:s.footerLinksData.map((r,i)=>(0,t.jsxs)(a.LinksSection,{children:[(0,t.jsx)(a.SectionTitle,{$color:f,children:e(r.title)}),(0,t.jsx)(a.LinksList,{children:r.links.map((e,r)=>(0,t.jsx)(a.LinkItem,{$color:f,children:e.href.startsWith("http")?(0,t.jsx)("a",{href:e.href,target:"_blank",rel:"noreferrer",children:e.label}):(0,t.jsx)(o.default,{href:(0,l.withLocale)(m,e.href),children:e.label})},r))})]},i))}),(0,t.jsxs)(a.LogoSection,{children:[(0,t.jsx)(a.Logo,{children:(0,t.jsx)(i.default,{src:"/assets/logo.png",alt:"Logo",fill:!0,sizes:"(max-width: 768px) 110px, 150px"})}),(0,t.jsx)(a.LogoDescription,{children:e("slogan")})]})]}),(0,t.jsx)(a.FooterBottom,{children:(0,t.jsxs)("p",{children:["© ",new Date().getFullYear()," ",e("copyrightNotice")]})})]})}e.s(["default",()=>c])},76014,e=>{"use strict";var t=e.i(66339),r=e.i(72902);let o=r.keyframes`
  0% {
    background-position: 0% center;
  }
  50% {
    background-position: 100% center;
  }
  100% {
    background-position: 0% center;
  }
`,i=r.default.button.withConfig({displayName:"Button.styles__ButtonBase",componentId:"sc-fc3deb8-0"})`
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

  ${e=>{let{$variant:t,$primaryColor:i}=e;return"primary"===t&&r.css`
      background-size: 300% 300% !important;
      background: ${i} 0 center;
      color: white;
      border: none;

      &:hover {
        animation: ${o} 6s ease-in-out infinite;
      }
    `}}

  ${e=>{let{$variant:t,$primaryColorFlat:o,$secondaryColor:i}=e;return"secondary"===t&&r.css`
      background-color: white;
      color: ${i};
      border: 1px solid ${i};

      &:hover {
        background-color: #f8f8f8;
        color: ${o};
      }
    `}}

  ${e=>{let{$variant:t,$primaryColorFlat:o,$secondaryColor:i}=e;return"tertiary"===t&&r.css`
      background: none;
      color: ${i};
      border: none;
      transition: color 0.3s ease;

      &:hover {
        color: ${o};
      }
    `}}

  ${e=>{let{$variant:t}=e;return"link"===t&&r.css`
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
`,n=r.default.div.withConfig({displayName:"Button.styles__IconWrapper",componentId:"sc-fc3deb8-1"})`
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

  ${e=>{let{$variant:t}=e;return"primary"===t&&r.css`
      svg,
      img {
        color: white;
        fill: white;
      }
    `}}
  ${e=>{let{$variant:t}=e;return"secondary"===t&&r.css`
      svg,
      img {
        color: white;
        fill: white;
      }
    `}}
  ${e=>{let{$variant:t,$secondaryColor:o}=e;return"tertiary"===t&&r.css`
      svg,
      img {
        width: 1.25rem;
        height: 1.25rem;
        color: ${o};
        fill: ${o};
      }
    `}}
  ${e=>{let{$variant:t}=e;return"link"===t&&r.css`
      svg,
      img {
        width: 1rem;
        height: 1rem;
      }
    `}}
`,a=r.default.span.withConfig({displayName:"Button.styles__TextWrapper",componentId:"sc-fc3deb8-2"})`
  font-size: ${e=>{let{$hasIcon:t,$variant:r}=e;return"link"===r?"1rem":t?"0.7rem":"1rem"}};
  margin: 0;
  padding-top: ${e=>{let{$variant:t}=e;return"link"===t?"0":"0.1rem"}};
  text-align: center;
  line-height: 1.2;
  width: max-content;
`,s=r.default.span.withConfig({displayName:"Button.styles__CountBadge",componentId:"sc-fc3deb8-3"})`
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
`;var l=e.i(97005);e.s(["default",0,e=>{let{variant:r,children:o,onClick:d,icon:c,badgeContent:m,iconColor:f}=e,{primaryColor:p,primaryColorFlat:h,secondaryColor:u}=(0,l.useThemeColors)(),g=(0,t.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M5 12H19M12 5L19 12L12 19",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),x=c||("link"===r?g:null),y=!!x;return(0,t.jsxs)(i,{$variant:r,$primaryColor:p,$primaryColorFlat:h,$secondaryColor:u,$hasIcon:y,onClick:d,children:[void 0!==m&&(0,t.jsx)(s,{$primaryColor:p,children:m}),"link"===r?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a,{$hasIcon:y,$variant:r,children:o}),x&&(0,t.jsx)(n,{$variant:r,$secondaryColor:u,iconColor:f,children:x})]}):(0,t.jsxs)(t.Fragment,{children:[x&&(0,t.jsx)(n,{$variant:r,$secondaryColor:u,iconColor:f,children:x}),(0,t.jsx)(a,{$hasIcon:y,$variant:r,children:o})]})]})}],76014)},29191,e=>{"use strict";e.i(44350);var t=e.i(31077);e.s(["createOrderSession",0,e=>(0,t.sessionFetch)("/api/orders",{method:"POST",body:JSON.stringify(e)}),"getOrderSession",0,e=>(0,t.sessionFetch)(`/api/orders/${e}`),"listOrdersSession",0,()=>(0,t.sessionFetch)("/api/orders")])},60942,e=>{"use strict";var t=e.i(72902);let r=t.default.div.withConfig({displayName:"CheckoutScreen.styles__CheckoutPageContainer",componentId:"sc-91070f8f-0"})`
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
`,i=t.default.h1.withConfig({displayName:"CheckoutScreen.styles__CheckoutTitle",componentId:"sc-91070f8f-2"})`
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
`,n=t.default.div.withConfig({displayName:"CheckoutScreen.styles__CheckoutGrid",componentId:"sc-91070f8f-3"})`
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 2rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,a=t.default.div.withConfig({displayName:"CheckoutScreen.styles__CustomerDetailsSection",componentId:"sc-91070f8f-4"})`
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
`,f=t.default.div.withConfig({displayName:"CheckoutScreen.styles__OrderSummarySection",componentId:"sc-91070f8f-10"})`
  background: white;
  border-radius: 10px;
  padding: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  margin-bottom: 1.5rem;
  overflow: hidden;
`,p=t.default.div.withConfig({displayName:"CheckoutScreen.styles__OrderSummaryHeader",componentId:"sc-91070f8f-11"})`
  padding: 1.5rem 1.5rem 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`,h=t.default.h2.withConfig({displayName:"CheckoutScreen.styles__OrderSummaryTitle",componentId:"sc-91070f8f-12"})`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  font-family: 'Questrial', sans-serif;
  letter-spacing: -0.3px;
  padding-bottom: 1rem;
  border-bottom: 2px solid #001f3f;
`,u=t.default.div.withConfig({displayName:"CheckoutScreen.styles__OrderItemsList",componentId:"sc-91070f8f-13"})`
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
`,S=t.default.div.withConfig({displayName:"CheckoutScreen.styles__OrderSummaryTotal",componentId:"sc-91070f8f-23"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  padding-top: 0.75rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  font-family: 'Questrial', sans-serif;
`,I=t.default.div.withConfig({displayName:"CheckoutScreen.styles__PaymentSection",componentId:"sc-91070f8f-24"})`
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  margin-bottom: 1.5rem;
`,j=t.default.button.withConfig({displayName:"CheckoutScreen.styles__PlaceOrderButton",componentId:"sc-91070f8f-25"})`
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
`,O=t.default.div.withConfig({displayName:"CheckoutScreen.styles__EmptyCartContainer",componentId:"sc-91070f8f-26"})`
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
`;e.s(["CheckoutContent",0,o,"CheckoutGrid",0,n,"CheckoutPageContainer",0,r,"CheckoutTitle",0,i,"CustomerDetailsSection",0,a,"EmptyCartContainer",0,O,"EmptyCartMessage",0,N,"FormGroup",0,l,"FormInput",0,c,"FormLabel",0,d,"FormTextarea",0,m,"OrderItem",0,g,"OrderItemDetails",0,y,"OrderItemImage",0,x,"OrderItemName",0,b,"OrderItemPrice",0,w,"OrderItemQuantity",0,C,"OrderItemRemove",0,k,"OrderItemsList",0,u,"OrderSummaryFooter",0,_,"OrderSummaryHeader",0,p,"OrderSummaryRow",0,v,"OrderSummarySection",0,f,"OrderSummaryTitle",0,h,"OrderSummaryTotal",0,S,"PaymentSection",0,I,"PlaceOrderButton",0,j,"SectionTitle",0,s])},94118,e=>{"use strict";var t=e.i(66339),r=e.i(26287),o=e.i(53805),i=e.i(274),n=e.i(16460),a=e.i(58090),s=e.i(29191),l=e.i(98803),d=e.i(76014),c=e.i(60942);e.i(9492);var m=e.i(93916);let f=n.default;e.s(["default",0,()=>{let e=(0,o.useRouter)(),n=(0,o.useParams)(),p=Array.isArray(n?.orderId)?n?.orderId[0]:n?.orderId,h=(0,m.normalizeLocale)(n?.locale),[u,g]=(0,r.useState)(null),[x,y]=(0,r.useState)(!0),[b,w]=(0,r.useState)("");(0,r.useEffect)(()=>{(async()=>{if(!p){w("Order not found."),y(!1);return}try{let e=await (0,s.getOrderSession)(Number(p));g(e)}catch(e){w(e instanceof Error?e.message:"Unable to load order details.")}finally{y(!1)}})()},[p]);let C=(0,r.useMemo)(()=>{if(!u)return null;if("number"==typeof u.total)return u.total;if("string"==typeof u.total){let e=Number(u.total.replace(/[^\d.-]/g,""));return Number.isFinite(e)?e:null}return null},[u]);return(0,t.jsxs)(c.CheckoutPageContainer,{children:[(0,t.jsx)(f,{primaryColor:"#CC0C5C",secondaryColor:"#F2A800"}),(0,t.jsxs)(c.CheckoutContent,{children:[(0,t.jsx)(c.CheckoutTitle,{children:"Order Confirmation"}),x&&(0,t.jsx)("p",{children:"Loading order details..."}),!x&&b&&(0,t.jsx)("p",{children:b}),!x&&!b&&u&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(c.CustomerDetailsSection,{children:[(0,t.jsx)(c.SectionTitle,{children:"Order Summary"}),(0,t.jsxs)("p",{children:["Order ID: ",u.id]}),(0,t.jsxs)("p",{children:["Payment method: ",u.payment_method||"Not specified"]}),(0,t.jsx)("p",{children:"What happens next: We are preparing your handcrafted items. You will receive updates as your order progresses."})]}),(0,t.jsxs)(c.OrderSummarySection,{children:[(0,t.jsx)(c.OrderSummaryHeader,{children:(0,t.jsx)(c.OrderSummaryTitle,{children:"Items"})}),(0,t.jsx)(c.OrderItemsList,{children:u.items?.map((e,r)=>(0,t.jsxs)(c.OrderItem,{children:[(0,t.jsx)(c.OrderItemImage,{children:(0,t.jsx)(i.default,{src:(0,l.getImageUrl)(e.product?.variant_image||"")||"/assets/logo.png",alt:e.product?.name||"Order item",fill:!0,sizes:"64px"})}),(0,t.jsxs)(c.OrderItemDetails,{children:[(0,t.jsx)(c.OrderItemName,{children:e.product?.name||`Product ${e.product_id}`}),(0,t.jsxs)(c.OrderItemPrice,{children:["Qty: ",e.quantity,e.unit_price?` \xb7 ${e.unit_price}`:""]})]})]},`${e.product_id}-${r}`))}),(0,t.jsxs)(c.OrderSummaryFooter,{children:[(0,t.jsxs)(c.OrderSummaryRow,{children:[(0,t.jsx)("span",{children:"Total"}),(0,t.jsx)("span",{children:null!==C?`$${C.toLocaleString()}`:"--"})]}),(0,t.jsxs)(c.OrderSummaryTotal,{children:[(0,t.jsx)("span",{children:"Grand total"}),(0,t.jsx)("span",{children:null!==C?`$${C.toLocaleString()}`:"--"})]})]})]}),(0,t.jsxs)(c.CustomerDetailsSection,{children:[(0,t.jsx)(c.SectionTitle,{children:"Shipping Address"}),(0,t.jsx)("p",{children:u.shipping_address?.full_name||"—"}),(0,t.jsx)("p",{children:u.shipping_address?.address||"—"}),(0,t.jsxs)("p",{children:[u.shipping_address?.city||"—"," ",u.shipping_address?.postal_code||""]}),(0,t.jsx)("p",{children:u.shipping_address?.phone||"—"}),(0,t.jsx)("p",{children:u.shipping_address?.email||"—"})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:"1rem",marginTop:"1.5rem"},children:[(0,t.jsx)(d.default,{variant:"primary",onClick:()=>e.push((0,m.withLocale)(h,"/orders")),children:"View orders"}),(0,t.jsx)(d.default,{variant:"secondary",onClick:()=>e.push((0,m.withLocale)(h,"/products")),children:"Continue shopping"})]})]})]}),(0,t.jsx)(a.default,{})]})}])}]);