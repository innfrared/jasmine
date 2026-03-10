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
`;a.s(["FooterBottom",0,n,"FooterContainer",0,d,"FooterContent",0,f,"FooterLinkSection",0,e,"LinkItem",0,m,"LinksList",0,l,"LinksSection",0,j,"Logo",0,h,"LogoDescription",0,i,"LogoSection",0,g,"SectionTitle",0,k],60579),a.s(["footerLinksData",0,[{title:"about_us",links:[{label:"Shipping Policy",href:"/policies/shipping-policy"},{label:"Returns & Refunds",href:"/policies/returns-refunds"}]},{title:"support",links:[{label:"Privacy Policy",href:"/policies/privacy-policy"},{label:"Terms & Conditions",href:"/policies/terms-conditions"}]},{title:"social",links:[{label:"Instagram",href:"https://www.instagram.com"},{label:"Facebook",href:"https://www.facebook.com"},{label:"Tiktok",href:"https://www.tiktok.com"}]}]],21105)},26863,a=>{"use strict";var b=a.i(96766);let c={primaryColor:"linear-gradient(135deg, #c39a37 0%, #b8860b 100%)",primaryColorFlat:"#d4af37",secondaryColor:"#001f3f"};a.s(["useThemeColors",0,(a={})=>{let d=(0,b.useMemo)(()=>({...c,...a}),[a]),[e,f]=(0,b.useState)(d);return(0,b.useEffect)(()=>{f(c)},[d]),e}])},31570,a=>{"use strict";var b=a.i(1142);a.i(79304);var c=a.i(93215),d=a.i(85669),e=a.i(96615),f=a.i(61765),g=a.i(60579),h=a.i(21105);a.i(56498);var i=a.i(29111),j=a.i(26863);function k(){let{t:a}=(0,c.useTranslation)(),k=(0,f.useParams)(),l=(0,i.normalizeLocale)(k?.locale),{secondaryColor:m}=(0,j.useThemeColors)({secondaryColor:"#ffffff"});return(0,b.jsxs)(g.FooterContainer,{$secondaryColor:m,children:[(0,b.jsxs)(g.FooterContent,{children:[(0,b.jsx)(g.FooterLinkSection,{children:h.footerLinksData.map((c,e)=>(0,b.jsxs)(g.LinksSection,{children:[(0,b.jsx)(g.SectionTitle,{$color:m,children:a(c.title)}),(0,b.jsx)(g.LinksList,{children:c.links.map((a,c)=>(0,b.jsx)(g.LinkItem,{$color:m,children:a.href.startsWith("http")?(0,b.jsx)("a",{href:a.href,target:"_blank",rel:"noreferrer",children:a.label}):(0,b.jsx)(d.default,{href:(0,i.withLocale)(l,a.href),children:a.label})},c))})]},e))}),(0,b.jsxs)(g.LogoSection,{children:[(0,b.jsx)(g.Logo,{children:(0,b.jsx)(e.default,{src:"/assets/logo.png",alt:"Logo",fill:!0,sizes:"(max-width: 768px) 110px, 150px"})}),(0,b.jsx)(g.LogoDescription,{children:a("slogan")})]})]}),(0,b.jsx)(g.FooterBottom,{children:(0,b.jsxs)("p",{children:["© ",new Date().getFullYear()," ",a("copyrightNotice")]})})]})}a.s(["default",()=>k])},59078,a=>{"use strict";var b=a.i(1142),c=a.i(38120);let d=c.keyframes`
  0% {
    background-position: 0% center;
  }
  50% {
    background-position: 100% center;
  }
  100% {
    background-position: 0% center;
  }
`,e=c.default.button.withConfig({displayName:"Button.styles__ButtonBase",componentId:"sc-fc3deb8-0"})`
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

  ${({$variant:a,$primaryColor:b})=>"primary"===a&&c.css`
      background-size: 300% 300% !important;
      background: ${b} 0 center;
      color: white;
      border: none;

      &:hover {
        animation: ${d} 6s ease-in-out infinite;
      }
    `}

  ${({$variant:a,$primaryColorFlat:b,$secondaryColor:d})=>"secondary"===a&&c.css`
      background-color: white;
      color: ${d};
      border: 1px solid ${d};

      &:hover {
        background-color: #f8f8f8;
        color: ${b};
      }
    `}

  ${({$variant:a,$primaryColorFlat:b,$secondaryColor:d})=>"tertiary"===a&&c.css`
      background: none;
      color: ${d};
      border: none;
      transition: color 0.3s ease;

      &:hover {
        color: ${b};
      }
    `}

  ${({$variant:a})=>"link"===a&&c.css`
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
    `}
`,f=c.default.div.withConfig({displayName:"Button.styles__IconWrapper",componentId:"sc-fc3deb8-1"})`
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
    ${({iconColor:a})=>"#ffffff"===a?"filter: brightness(0) invert(1);":"#001f3f"===a?"filter: invert(11%) sepia(33%) saturate(3111%) hue-rotate(178deg) brightness(98%) contrast(104%);":""};
  }

  ${({$variant:a})=>"primary"===a&&c.css`
      svg,
      img {
        color: white;
        fill: white;
      }
    `}
  ${({$variant:a})=>"secondary"===a&&c.css`
      svg,
      img {
        color: white;
        fill: white;
      }
    `}
  ${({$variant:a,$secondaryColor:b})=>"tertiary"===a&&c.css`
      svg,
      img {
        width: 1.25rem;
        height: 1.25rem;
        color: ${b};
        fill: ${b};
      }
    `}
  ${({$variant:a})=>"link"===a&&c.css`
      svg,
      img {
        width: 1rem;
        height: 1rem;
      }
    `}
`,g=c.default.span.withConfig({displayName:"Button.styles__TextWrapper",componentId:"sc-fc3deb8-2"})`
  font-size: ${({$hasIcon:a,$variant:b})=>"link"===b?"1rem":a?"0.7rem":"1rem"};
  margin: 0;
  padding-top: ${({$variant:a})=>"link"===a?"0":"0.1rem"};
  text-align: center;
  line-height: 1.2;
  width: max-content;
`,h=c.default.span.withConfig({displayName:"Button.styles__CountBadge",componentId:"sc-fc3deb8-3"})`
  position: absolute;
  top: 0.1rem;
  right: 0.1rem;
  background: ${({$primaryColor:a})=>a};
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
`;var i=a.i(26863);a.s(["default",0,({variant:a,children:c,onClick:d,icon:j,badgeContent:k,iconColor:l})=>{let{primaryColor:m,primaryColorFlat:n,secondaryColor:o}=(0,i.useThemeColors)(),p=(0,b.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,b.jsx)("path",{d:"M5 12H19M12 5L19 12L12 19",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),q=j||("link"===a?p:null),r=!!q;return(0,b.jsxs)(e,{$variant:a,$primaryColor:m,$primaryColorFlat:n,$secondaryColor:o,$hasIcon:r,onClick:d,children:[void 0!==k&&(0,b.jsx)(h,{$primaryColor:m,children:k}),"link"===a?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(g,{$hasIcon:r,$variant:a,children:c}),q&&(0,b.jsx)(f,{$variant:a,$secondaryColor:o,iconColor:l,children:q})]}):(0,b.jsxs)(b.Fragment,{children:[q&&(0,b.jsx)(f,{$variant:a,$secondaryColor:o,iconColor:l,children:q}),(0,b.jsx)(g,{$hasIcon:r,$variant:a,children:c})]})]})}],59078)},69529,a=>{"use strict";a.i(50404);var b=a.i(94952);a.s(["createOrderSession",0,a=>(0,b.sessionFetch)("/api/orders",{method:"POST",body:JSON.stringify(a)}),"getOrderSession",0,a=>(0,b.sessionFetch)(`/api/orders/${a}`),"listOrdersSession",0,()=>(0,b.sessionFetch)("/api/orders")])},58898,a=>{"use strict";var b=a.i(38120);let c=b.default.div.withConfig({displayName:"CheckoutScreen.styles__CheckoutPageContainer",componentId:"sc-91070f8f-0"})`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fafafa;
`,d=b.default.div.withConfig({displayName:"CheckoutScreen.styles__CheckoutContent",componentId:"sc-91070f8f-1"})`
  flex: 1;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 10rem 1.5rem 6rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem 3rem;
  }
`,e=b.default.h1.withConfig({displayName:"CheckoutScreen.styles__CheckoutTitle",componentId:"sc-91070f8f-2"})`
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
`,f=b.default.div.withConfig({displayName:"CheckoutScreen.styles__CheckoutGrid",componentId:"sc-91070f8f-3"})`
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 2rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,g=b.default.div.withConfig({displayName:"CheckoutScreen.styles__CustomerDetailsSection",componentId:"sc-91070f8f-4"})`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`,h=b.default.h2.withConfig({displayName:"CheckoutScreen.styles__SectionTitle",componentId:"sc-91070f8f-5"})`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 1.5rem;
  font-family: 'Questrial', sans-serif;
  letter-spacing: -0.3px;
  padding-bottom: 1rem;
  border-bottom: 2px solid #001f3f;
`,i=b.default.div.withConfig({displayName:"CheckoutScreen.styles__FormGroup",componentId:"sc-91070f8f-6"})`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`,j=b.default.label.withConfig({displayName:"CheckoutScreen.styles__FormLabel",componentId:"sc-91070f8f-7"})`
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  color: #333;
  margin-bottom: 0.5rem;
  font-family: 'Questrial', sans-serif;
`,k=b.default.input.withConfig({displayName:"CheckoutScreen.styles__FormInput",componentId:"sc-91070f8f-8"})`
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
`,l=b.default.textarea.withConfig({displayName:"CheckoutScreen.styles__FormTextarea",componentId:"sc-91070f8f-9"})`
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
`,m=b.default.div.withConfig({displayName:"CheckoutScreen.styles__OrderSummarySection",componentId:"sc-91070f8f-10"})`
  background: white;
  border-radius: 10px;
  padding: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  margin-bottom: 1.5rem;
  overflow: hidden;
`,n=b.default.div.withConfig({displayName:"CheckoutScreen.styles__OrderSummaryHeader",componentId:"sc-91070f8f-11"})`
  padding: 1.5rem 1.5rem 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`,o=b.default.h2.withConfig({displayName:"CheckoutScreen.styles__OrderSummaryTitle",componentId:"sc-91070f8f-12"})`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  font-family: 'Questrial', sans-serif;
  letter-spacing: -0.3px;
  padding-bottom: 1rem;
  border-bottom: 2px solid #001f3f;
`,p=b.default.div.withConfig({displayName:"CheckoutScreen.styles__OrderItemsList",componentId:"sc-91070f8f-13"})`
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
`,q=b.default.div.withConfig({displayName:"CheckoutScreen.styles__OrderItem",componentId:"sc-91070f8f-14"})`
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
`,r=b.default.div.withConfig({displayName:"CheckoutScreen.styles__OrderItemImage",componentId:"sc-91070f8f-15"})`
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
`,s=b.default.div.withConfig({displayName:"CheckoutScreen.styles__OrderItemDetails",componentId:"sc-91070f8f-16"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,t=b.default.div.withConfig({displayName:"CheckoutScreen.styles__OrderItemName",componentId:"sc-91070f8f-17"})`
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
`,u=b.default.div.withConfig({displayName:"CheckoutScreen.styles__OrderItemPrice",componentId:"sc-91070f8f-18"})`
  font-size: 0.875rem;
  color: #666;
  font-weight: 500;
  font-family: 'Questrial', sans-serif;
`,v=b.default.div.withConfig({displayName:"CheckoutScreen.styles__OrderItemQuantity",componentId:"sc-91070f8f-19"})`
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
`,w=b.default.button.withConfig({displayName:"CheckoutScreen.styles__OrderItemRemove",componentId:"sc-91070f8f-20"})`
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
`,x=b.default.div.withConfig({displayName:"CheckoutScreen.styles__OrderSummaryFooter",componentId:"sc-91070f8f-21"})`
  padding: 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  background: #fafafa;
`,y=b.default.div.withConfig({displayName:"CheckoutScreen.styles__OrderSummaryRow",componentId:"sc-91070f8f-22"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 0.75rem;
  font-family: 'Questrial', sans-serif;
`,z=b.default.div.withConfig({displayName:"CheckoutScreen.styles__OrderSummaryTotal",componentId:"sc-91070f8f-23"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  padding-top: 0.75rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  font-family: 'Questrial', sans-serif;
`,A=b.default.div.withConfig({displayName:"CheckoutScreen.styles__PaymentSection",componentId:"sc-91070f8f-24"})`
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  margin-bottom: 1.5rem;
`,B=b.default.button.withConfig({displayName:"CheckoutScreen.styles__PlaceOrderButton",componentId:"sc-91070f8f-25"})`
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
`,C=b.default.div.withConfig({displayName:"CheckoutScreen.styles__EmptyCartContainer",componentId:"sc-91070f8f-26"})`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`,D=b.default.div.withConfig({displayName:"CheckoutScreen.styles__EmptyCartMessage",componentId:"sc-91070f8f-27"})`
  font-size: 1.1rem;
  color: #999;
  font-family: 'Questrial', sans-serif;
`;a.s(["CheckoutContent",0,d,"CheckoutGrid",0,f,"CheckoutPageContainer",0,c,"CheckoutTitle",0,e,"CustomerDetailsSection",0,g,"EmptyCartContainer",0,C,"EmptyCartMessage",0,D,"FormGroup",0,i,"FormInput",0,k,"FormLabel",0,j,"FormTextarea",0,l,"OrderItem",0,q,"OrderItemDetails",0,s,"OrderItemImage",0,r,"OrderItemName",0,t,"OrderItemPrice",0,u,"OrderItemQuantity",0,v,"OrderItemRemove",0,w,"OrderItemsList",0,p,"OrderSummaryFooter",0,x,"OrderSummaryHeader",0,n,"OrderSummaryRow",0,y,"OrderSummarySection",0,m,"OrderSummaryTitle",0,o,"OrderSummaryTotal",0,z,"PaymentSection",0,A,"PlaceOrderButton",0,B,"SectionTitle",0,h])},78609,a=>{"use strict";var b=a.i(1142),c=a.i(96766),d=a.i(61765),e=a.i(96615),f=a.i(59131),g=a.i(31570),h=a.i(69529),i=a.i(62686),j=a.i(59078),k=a.i(58898);a.i(56498);var l=a.i(29111);let m=f.default;a.s(["default",0,()=>{let a=(0,d.useRouter)(),f=(0,d.useParams)(),n=Array.isArray(f?.orderId)?f?.orderId[0]:f?.orderId,o=(0,l.normalizeLocale)(f?.locale),[p,q]=(0,c.useState)(null),[r,s]=(0,c.useState)(!0),[t,u]=(0,c.useState)("");(0,c.useEffect)(()=>{(async()=>{if(!n){u("Order not found."),s(!1);return}try{let a=await (0,h.getOrderSession)(Number(n));q(a)}catch(a){u(a instanceof Error?a.message:"Unable to load order details.")}finally{s(!1)}})()},[n]);let v=(0,c.useMemo)(()=>{if(!p)return null;if("number"==typeof p.total)return p.total;if("string"==typeof p.total){let a=Number(p.total.replace(/[^\d.-]/g,""));return Number.isFinite(a)?a:null}return null},[p]);return(0,b.jsxs)(k.CheckoutPageContainer,{children:[(0,b.jsx)(m,{primaryColor:"#CC0C5C",secondaryColor:"#F2A800"}),(0,b.jsxs)(k.CheckoutContent,{children:[(0,b.jsx)(k.CheckoutTitle,{children:"Order Confirmation"}),r&&(0,b.jsx)("p",{children:"Loading order details..."}),!r&&t&&(0,b.jsx)("p",{children:t}),!r&&!t&&p&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(k.CustomerDetailsSection,{children:[(0,b.jsx)(k.SectionTitle,{children:"Order Summary"}),(0,b.jsxs)("p",{children:["Order ID: ",p.id]}),(0,b.jsxs)("p",{children:["Payment method: ",p.payment_method||"Not specified"]}),(0,b.jsx)("p",{children:"What happens next: We are preparing your handcrafted items. You will receive updates as your order progresses."})]}),(0,b.jsxs)(k.OrderSummarySection,{children:[(0,b.jsx)(k.OrderSummaryHeader,{children:(0,b.jsx)(k.OrderSummaryTitle,{children:"Items"})}),(0,b.jsx)(k.OrderItemsList,{children:p.items?.map((a,c)=>(0,b.jsxs)(k.OrderItem,{children:[(0,b.jsx)(k.OrderItemImage,{children:(0,b.jsx)(e.default,{src:(0,i.getImageUrl)(a.product?.variant_image||"")||"/assets/logo.png",alt:a.product?.name||"Order item",fill:!0,sizes:"64px"})}),(0,b.jsxs)(k.OrderItemDetails,{children:[(0,b.jsx)(k.OrderItemName,{children:a.product?.name||`Product ${a.product_id}`}),(0,b.jsxs)(k.OrderItemPrice,{children:["Qty: ",a.quantity,a.unit_price?` \xb7 ${a.unit_price}`:""]})]})]},`${a.product_id}-${c}`))}),(0,b.jsxs)(k.OrderSummaryFooter,{children:[(0,b.jsxs)(k.OrderSummaryRow,{children:[(0,b.jsx)("span",{children:"Total"}),(0,b.jsx)("span",{children:null!==v?`$${v.toLocaleString()}`:"--"})]}),(0,b.jsxs)(k.OrderSummaryTotal,{children:[(0,b.jsx)("span",{children:"Grand total"}),(0,b.jsx)("span",{children:null!==v?`$${v.toLocaleString()}`:"--"})]})]})]}),(0,b.jsxs)(k.CustomerDetailsSection,{children:[(0,b.jsx)(k.SectionTitle,{children:"Shipping Address"}),(0,b.jsx)("p",{children:p.shipping_address?.full_name||"—"}),(0,b.jsx)("p",{children:p.shipping_address?.address||"—"}),(0,b.jsxs)("p",{children:[p.shipping_address?.city||"—"," ",p.shipping_address?.postal_code||""]}),(0,b.jsx)("p",{children:p.shipping_address?.phone||"—"}),(0,b.jsx)("p",{children:p.shipping_address?.email||"—"})]}),(0,b.jsxs)("div",{style:{display:"flex",gap:"1rem",marginTop:"1.5rem"},children:[(0,b.jsx)(j.default,{variant:"primary",onClick:()=>a.push((0,l.withLocale)(o,"/orders")),children:"View orders"}),(0,b.jsx)(j.default,{variant:"secondary",onClick:()=>a.push((0,l.withLocale)(o,"/products")),children:"Continue shopping"})]})]})]}),(0,b.jsx)(g.default,{})]})}])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__604fd9bf._.js.map