module.exports=[59078,a=>{"use strict";var b=a.i(1142),c=a.i(38120);let d=c.keyframes`
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
`;var i=a.i(26863);a.s(["default",0,({variant:a,children:c,onClick:d,icon:j,badgeContent:k,iconColor:l})=>{let{primaryColor:m,primaryColorFlat:n,secondaryColor:o}=(0,i.useThemeColors)(),p=(0,b.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,b.jsx)("path",{d:"M5 12H19M12 5L19 12L12 19",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),q=j||("link"===a?p:null),r=!!q;return(0,b.jsxs)(e,{$variant:a,$primaryColor:m,$primaryColorFlat:n,$secondaryColor:o,$hasIcon:r,onClick:d,children:[void 0!==k&&(0,b.jsx)(h,{$primaryColor:m,children:k}),"link"===a?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(g,{$hasIcon:r,$variant:a,children:c}),q&&(0,b.jsx)(f,{$variant:a,$secondaryColor:o,iconColor:l,children:q})]}):(0,b.jsxs)(b.Fragment,{children:[q&&(0,b.jsx)(f,{$variant:a,$secondaryColor:o,iconColor:l,children:q}),(0,b.jsx)(g,{$hasIcon:r,$variant:a,children:c})]})]})}],59078)},60590,81462,4232,a=>{"use strict";var b=a.i(50404);let c=a=>({...a,category:a.category??null,subcategory:a.subcategory??null,variants:a.variants??[],specifications:a.specifications??{},specifications_detailed:a.specifications_detailed??[]});a.s(["mapProductDtoToModel",0,c,"mapProductDtosToModels",0,a=>a.map(c)],81462);let d=["id","name","price","price_new","price_old","availability","variant_image","currency"],e=[...d,"variant_color_palette","variant_color_name","variants"];a.s(["PRODUCT_CARD_FIELDS",0,d,"PRODUCT_LIST_FIELDS",0,e],4232);var f=a.i(20623);let g=(a={},c={})=>{let{specFilters:d,fields:e,...f}=a,g={...f};return e&&(g.fields=Array.isArray(e)?e.join(","):e),d&&Object.entries(d).forEach(([a,b])=>{g[`spec_${a}`]=b}),b.httpClient.get("products/",{query:g,...c})},h=(a,c={})=>b.httpClient.get(`products/${a}/`,c),i=async(a,b={})=>{let c=(0,f.getProductIdFromSlug)(a);if(c)try{return await h(c,b)}catch{return null}let d=decodeURIComponent(a),e=await g({search:d,page:1,page_size:50},b),i=d.trim().toLowerCase(),j=(0,f.slugify)(d);return e.items.find(a=>{let b=a.name.trim();return!!j&&(0,f.slugify)(b)===j||b.toLowerCase()===i})??null};a.s(["getProduct",0,h,"getProductBySlug",0,i,"listProducts",0,g],60590)},62013,a=>{"use strict";var b=a.i(1142),c=a.i(96766),d=a.i(61765),e=a.i(96615),f=a.i(62686),g=a.i(60590),h=a.i(81462),i=a.i(38120);let j=i.default.div.withConfig({displayName:"FindSimilarModal.styles__ModalOverlay",componentId:"sc-e57bfe8e-0"})`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  z-index: 4000;
`,k=i.default.div.withConfig({displayName:"FindSimilarModal.styles__ModalCard",componentId:"sc-e57bfe8e-1"})`
  width: min(920px, 100%);
  max-height: 80vh;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,l=i.default.div.withConfig({displayName:"FindSimilarModal.styles__ModalHeader",componentId:"sc-e57bfe8e-2"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem 0.75rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`,m=i.default.h3.withConfig({displayName:"FindSimilarModal.styles__ModalTitle",componentId:"sc-e57bfe8e-3"})`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #0f0f0f;
`,n=i.default.button.withConfig({displayName:"FindSimilarModal.styles__CloseButton",componentId:"sc-e57bfe8e-4"})`
  border: none;
  background: none;
  cursor: pointer;
  color: #0f0f0f;
  font-size: 1.1rem;
  padding: 0.25rem;
  line-height: 1;
`,o=i.default.div.withConfig({displayName:"FindSimilarModal.styles__ModalBody",componentId:"sc-e57bfe8e-5"})`
  padding: 1.25rem 1.5rem 1.5rem;
  overflow: auto;
`,p=i.default.p.withConfig({displayName:"FindSimilarModal.styles__StatusText",componentId:"sc-e57bfe8e-6"})`
  margin: 0;
  color: #6b6b6b;
`,q=i.default.div.withConfig({displayName:"FindSimilarModal.styles__Grid",componentId:"sc-e57bfe8e-7"})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
`,r=i.default.div.withConfig({displayName:"FindSimilarModal.styles__ProductCard",componentId:"sc-e57bfe8e-8"})`
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;
  transition:
    transform 180ms ease,
    border-color 180ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(0, 0, 0, 0.16);
  }
`,s=i.default.div.withConfig({displayName:"FindSimilarModal.styles__ProductImage",componentId:"sc-e57bfe8e-9"})`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 5;
  border-radius: 8px;
  background: #f6f6f6;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`,t=i.default.p.withConfig({displayName:"FindSimilarModal.styles__ProductName",componentId:"sc-e57bfe8e-10"})`
  margin: 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: #1a1a1a;
`,u=i.default.p.withConfig({displayName:"FindSimilarModal.styles__ProductPrice",componentId:"sc-e57bfe8e-11"})`
  margin: 0;
  font-size: 0.85rem;
  color: #6b6b6b;
`;a.i(56498);var v=a.i(29111),w=a.i(20623);let x=({isOpen:a,onClose:i,product:x})=>{let y=(0,d.useRouter)(),z=(0,d.useParams)(),A=(0,v.normalizeLocale)(z?.locale),B=(0,c.useRef)(null),[C,D]=(0,c.useState)(!1),[E,F]=(0,c.useState)(""),[G,H]=(0,c.useState)([]),I=(0,c.useMemo)(()=>x.subcategory?.name?`Similar in ${x.subcategory.name}`:x.category?.name?`Similar in ${x.category.name}`:"Similar items",[x.category?.name,x.subcategory?.name]);return((0,c.useEffect)(()=>{a&&(async()=>{D(!0),F("");try{let a=await (0,g.listProducts)({subcategory_id:x.subcategory_id||void 0,page:1,page_size:8}),b=(0,h.mapProductDtosToModels)(a.items).filter(a=>a.id!==x.id);H(b)}catch{F("Unable to load similar products.")}finally{D(!1)}})()},[a,x.category_id,x.id,x.subcategory_id]),(0,c.useEffect)(()=>{if(!a)return;let b=a=>{"Escape"===a.key&&i()};return window.addEventListener("keydown",b),()=>window.removeEventListener("keydown",b)},[a,i]),a)?(0,b.jsx)(j,{onClick:a=>{a.target===a.currentTarget&&i()},children:(0,b.jsxs)(k,{ref:B,children:[(0,b.jsxs)(l,{children:[(0,b.jsx)(m,{children:I}),(0,b.jsx)(n,{onClick:i,"aria-label":"Close",children:"✕"})]}),(0,b.jsxs)(o,{children:[C&&(0,b.jsx)(p,{children:"Loading similar items..."}),!C&&E&&(0,b.jsx)(p,{children:E}),!C&&!E&&0===G.length&&(0,b.jsx)(p,{children:"No similar items found."}),!C&&!E&&G.length>0&&(0,b.jsx)(q,{children:G.map(a=>(0,b.jsxs)(r,{onClick:()=>y.push((0,v.withLocale)(A,`/product/${(0,w.buildProductSlug)(a.name,a.id)}`)),children:[(0,b.jsx)(s,{children:(0,b.jsx)(e.default,{src:(0,f.getImageUrl)(a.variant_image)||"/assets/logo.png",alt:a.name,fill:!0,sizes:"(max-width: 768px) 50vw, 200px"})}),(0,b.jsx)(t,{children:a.name}),(0,b.jsx)(u,{children:a.price_new?`${a.price_new} USD`:`${a.price} USD`})]},a.id))})]})]})}):null},y=i.default.div.withConfig({displayName:"ProductCell.styles__Card",componentId:"sc-3e0cdb6d-0"})`
  width: 15rem;
  background: #fff;
  padding: 5px;
  overflow: hidden;
  transition: all 0.3s;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 40vw;
    height: 230px;
  }
`,z=i.default.div.withConfig({displayName:"ProductCell.styles__Wrapper",componentId:"sc-3e0cdb6d-1"})`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`,A=i.default.div.withConfig({displayName:"ProductCell.styles__HoverButtons",componentId:"sc-3e0cdb6d-2"})`
  width: 80%;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-around;
  gap: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 10;
`,B=i.default.div.withConfig({displayName:"ProductCell.styles__FindSimilar",componentId:"sc-3e0cdb6d-3"})`
  position: absolute;
  display: flex;
  gap: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 10;
`,C=i.default.div.withConfig({displayName:"ProductCell.styles__CardImage",componentId:"sc-3e0cdb6d-4"})`
  width: 100%;
  aspect-ratio: 4 / 5;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #ffffff;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    z-index: 1;
  }

  ::after {
    box-shadow:
      inset 0 0 30px rgba(0, 0, 0, 0.08),
      inset 0 0 60px rgba(0, 0, 0, 0.05);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    box-shadow:
      inset 0 0 30px rgba(0, 0, 0, 0.08),
      inset 0 0 60px rgba(0, 0, 0, 0.05);
    transition: opacity 0.4s ease;
    z-index: 2;
    pointer-events: none;
  }

  ${A} {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
    opacity: 0;
    transition:
      opacity 0.4s ease,
      transform 0.4s ease;
    z-index: 3;
  }

  ${B} {
    position: absolute;
    top: 0;
    display: flex;
    right: 0;
    gap: 8px;
    opacity: 0;
    transition:
      opacity 0.4s ease,
      transform 0.4s ease;
    z-index: 3;
  }

  &:hover img {
    transform: scale(1.05);
  }

  &:hover::after {
    opacity: 1;
    background: linear-gradient(
      to top,
      rgba(255, 255, 255, 1) 10%,
      rgba(255, 255, 255, 0) 50%
    );
  }

  &:hover ${A} {
    opacity: 1;
    pointer-events: auto;
  }

  &:hover ${B} {
    opacity: 1;
    pointer-events: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`,D=i.default.div.withConfig({displayName:"ProductCell.styles__Content",componentId:"sc-3e0cdb6d-5"})`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,E=i.default.p.withConfig({displayName:"ProductCell.styles__Title",componentId:"sc-3e0cdb6d-6"})`
  font-size: 0.8em;
  text-transform: uppercase;
  color: #4d4d4d;
  margin: 0;
`,F=i.default.div.withConfig({displayName:"ProductCell.styles__PriceContainer",componentId:"sc-3e0cdb6d-7"})`
  display: flex;
  margin: 5px 0;
  justify-content: start;
  width: 100%;
`,G=i.default.p.withConfig({displayName:"ProductCell.styles__Price",componentId:"sc-3e0cdb6d-8"})`
  font-size: 1.1em;
  margin: 0;
  font-weight: 700;
`,H=i.default.p.withConfig({displayName:"ProductCell.styles__OldPrice",componentId:"sc-3e0cdb6d-9"})`
  font-size: 14px;
  text-decoration: line-through;
  color: red;
  margin: 0 5px;
`;i.default.div.withConfig({displayName:"ProductCell.styles__ButtonContainer",componentId:"sc-3e0cdb6d-10"})`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`,i.default.div.withConfig({displayName:"ProductCell.styles__ButtonWrapper",componentId:"sc-3e0cdb6d-11"})`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
`,i.default.div.withConfig({displayName:"ProductCell.styles__Text",componentId:"sc-3e0cdb6d-12"})`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: top 0.5s;
`,i.default.div.withConfig({displayName:"ProductCell.styles__Icon",componentId:"sc-3e0cdb6d-13"})`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: top 0.5s;
`;let I=i.default.div.withConfig({displayName:"ProductCell.styles__ButtonCompare",componentId:"sc-3e0cdb6d-14"})`
  width: 100%;
  height: 35px;
  background: #fff;
  color: #222;
  position: relative;
  border: 1px solid #222;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    background: #222;
    color: #fff;
  }

  @media (max-width: 768px) {
    background-color: #cc0c5c;
    border: none;
  }
`;i.default.div.withConfig({displayName:"ProductCell.styles__TextCompare",componentId:"sc-3e0cdb6d-15"})`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  font-weight: 500;
  font-family: inherit;
  transition: top 0.5s;

  ${I}:hover & {
    top: -100%;
    color: #fff;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;let J=i.default.div.withConfig({displayName:"ProductCell.styles__Overlay",componentId:"sc-3e0cdb6d-16"})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 237, 237, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`,K=i.default.div.withConfig({displayName:"ProductCell.styles__OverlayIcon",componentId:"sc-3e0cdb6d-17"})`
  font-size: 1.5rem;
  color: #e60000;
  font-weight: bold;
`;var L=a.i(59078);a.s(["default",0,({product:a})=>{let g=(0,d.useRouter)(),h=(0,d.useParams)(),i=(0,v.normalizeLocale)(h?.locale),[j,k]=(0,c.useState)(!1),l=(0,f.getImageUrl)(a.variant_image)||"/assets/logo.png";return(0,b.jsxs)(y,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"}),g.push((0,v.withLocale)(i,`/product/${(0,w.buildProductSlug)(a.name,a.id)}`))},children:[!a.availability&&(0,b.jsx)(J,{children:(0,b.jsx)(K,{children:"Unavailable"})}),(0,b.jsxs)(z,{children:[(0,b.jsxs)(C,{children:[(0,b.jsx)(e.default,{src:l,alt:a.name,fill:!0,sizes:"(max-width: 768px) 40vw, 15rem",style:{objectFit:"cover"}}),(0,b.jsx)(B,{onClick:a=>a.stopPropagation(),children:(0,b.jsx)(L.default,{variant:"tertiary",icon:(0,b.jsx)(e.default,{src:"/assets/heart.svg",alt:"like",width:16,height:16}),onClick:()=>{let b=localStorage.getItem("likedProducts"),c=[];if(b)try{c=JSON.parse(b)}catch{c=[]}let d=c.findIndex(b=>b.id===a.id);-1!==d?c.splice(d,1):c.push(a),localStorage.setItem("likedProducts",JSON.stringify(c)),window.dispatchEvent(new Event("likedUpdated"))},children:"Like"})}),(0,b.jsxs)(A,{onClick:a=>a.stopPropagation(),children:[(0,b.jsx)(L.default,{variant:"tertiary",icon:(0,b.jsx)(e.default,{src:"/assets/plus.svg",alt:"cart",width:16,height:16}),onClick:()=>k(!0),children:"Find Similar"}),(0,b.jsx)(L.default,{variant:"tertiary",icon:(0,b.jsx)(e.default,{src:"/assets/cart.svg",alt:"cart",width:16,height:16}),onClick:()=>{let b=localStorage.getItem("cartProducts"),c=[];if(b)try{let a=JSON.parse(b);c=Array.isArray(a)&&a.length>0&&a[0].bagId?a:a.map((a,b)=>({bagId:`bag-${Date.now()}-${b}-${a.id}`,product:a,quantity:1}))}catch{c=[]}let d=c.find(b=>b.product.id===a.id);if(d){let a=c.filter(a=>a.bagId!==d.bagId);localStorage.setItem("cartProducts",JSON.stringify(a))}else{let b={bagId:`bag-${Date.now()}-${a.id}`,product:a,quantity:1};c.push(b),localStorage.setItem("cartProducts",JSON.stringify(c))}window.dispatchEvent(new Event("cartUpdated"))},children:"Add to Cart"})]})]}),(0,b.jsxs)(D,{children:[(0,b.jsx)(E,{children:a.name}),(0,b.jsx)(F,{children:a.price_new?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(G,{children:[a.price_new," USD"]}),(0,b.jsxs)(H,{children:[a.price," USD"]})]}):(0,b.jsxs)(G,{children:[a.price," USD"]})})]})]}),(0,b.jsx)(x,{isOpen:j,onClose:()=>k(!1),product:a})]})}],62013)}];

//# sourceMappingURL=Desktop_Dev_jasmine_frontend_src_843f6d29._.js.map