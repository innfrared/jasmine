module.exports=[39759,a=>{"use strict";var b=a.i(1142),c=a.i(96766),d=a.i(61765),e=a.i(96615),f=a.i(60590),g=a.i(62686),h=a.i(81462),i=a.i(59131);a.i(79304);var j=a.i(93215),k=a.i(79717),l=a.i(38120);let m=l.default.div.withConfig({displayName:"ProductScreen.styles__ProductPageContainer",componentId:"sc-c3d1c155-0"})`
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
`,n=l.default.div.withConfig({displayName:"ProductScreen.styles__ProductContent",componentId:"sc-c3d1c155-1"})`
  max-width: 1400px;
  margin: 0 auto;
  padding: 140px 3rem 4rem;
  width: 100%;
`,o=l.default.div.withConfig({displayName:"ProductScreen.styles__ProductMain",componentId:"sc-c3d1c155-2"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 2rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,p=l.default.div.withConfig({displayName:"ProductScreen.styles__ImageSection",componentId:"sc-c3d1c155-3"})`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,q=l.default.div.withConfig({displayName:"ProductScreen.styles__MainImage",componentId:"sc-c3d1c155-4"})`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 8px;
  background: #f9f9f9;
  position: relative;
  overflow: hidden;

  img {
    object-fit: contain;
  }
`,r=l.default.div.withConfig({displayName:"ProductScreen.styles__ThumbnailContainer",componentId:"sc-c3d1c155-5"})`
  display: flex;
  gap: 0.75rem;
  overflow-x: clip;
  padding: 0.5rem 0;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`,s=l.default.button.withConfig({displayName:"ProductScreen.styles__Thumbnail",componentId:"sc-c3d1c155-6"})`
  width: 80px;
  height: 80px;
  border-radius: 6px;
  cursor: pointer;
  border: ${({$isActive:a})=>a?"2px solid #1a1a1a":"none"};
  opacity: ${({$isActive:a})=>a?1:.7};
  transition: all 0.2s ease;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  padding: 0;
  background: transparent;

  img {
    object-fit: cover;
  }

  &:hover {
    opacity: 1;
    ${({$isActive:a})=>!a&&"border: 1px solid rgba(0, 0, 0, 0.2);"}
  }
`,t=l.default.div.withConfig({displayName:"ProductScreen.styles__InfoSection",componentId:"sc-c3d1c155-7"})`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,u=l.default.h1.withConfig({displayName:"ProductScreen.styles__ProductTitle",componentId:"sc-c3d1c155-8"})`
  font-size: 2rem;
  font-weight: 500;
  color: #1a1a1a;
  margin: 0;
  font-family: 'Questrial', sans-serif;
  line-height: 1.3;
`,v=l.default.div.withConfig({displayName:"ProductScreen.styles__PriceContainer",componentId:"sc-c3d1c155-9"})`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`,w=l.default.div.withConfig({displayName:"ProductScreen.styles__Price",componentId:"sc-c3d1c155-10"})`
  font-size: 1.75rem;
  font-weight: 600;
  color: #1a1a1a;
  font-family: 'Questrial', sans-serif;
`,x=l.default.div.withConfig({displayName:"ProductScreen.styles__OldPrice",componentId:"sc-c3d1c155-11"})`
  font-size: 1.25rem;
  font-weight: 400;
  color: #999;
  text-decoration: line-through;
  font-family: 'Questrial', sans-serif;
`,y=l.default.div.withConfig({displayName:"ProductScreen.styles__VariationsSection",componentId:"sc-c3d1c155-12"})`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 1rem;
`,z=l.default.div.withConfig({displayName:"ProductScreen.styles__VariationGroup",componentId:"sc-c3d1c155-13"})`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,A=l.default.label.withConfig({displayName:"ProductScreen.styles__VariationLabel",componentId:"sc-c3d1c155-14"})`
  font-size: 0.95rem;
  font-weight: 500;
  color: #1a1a1a;
  font-family: 'Questrial', sans-serif;
`,B=l.default.div.withConfig({displayName:"ProductScreen.styles__ColorOptions",componentId:"sc-c3d1c155-15"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`,C=l.default.button.withConfig({displayName:"ProductScreen.styles__ColorOption",componentId:"sc-c3d1c155-16"})`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  border: 1.5px solid
    ${({$isSelected:a})=>a?"#1a1a1a":"#e0e0e0"};
  border-radius: 8px;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Questrial', sans-serif;
  font-size: 0.875rem;
  color: #1a1a1a;

  &:hover {
    border-color: #1a1a1a;
  }

  &:active {
    transform: scale(0.98);
  }
`,D=l.default.div.withConfig({displayName:"ProductScreen.styles__ColorBox",componentId:"sc-c3d1c155-17"})`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({$colorValue:a})=>a};
  border: 1px solid rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
`,E=l.default.span.withConfig({displayName:"ProductScreen.styles__ColorName",componentId:"sc-c3d1c155-18"})`
  font-weight: 400;
`;l.default.div.withConfig({displayName:"ProductScreen.styles__SizeOptions",componentId:"sc-c3d1c155-19"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`,l.default.button.withConfig({displayName:"ProductScreen.styles__SizeOption",componentId:"sc-c3d1c155-20"})`
  padding: 0.625rem 1.25rem;
  border: 1.5px solid
    ${({$isSelected:a})=>a?"#1a1a1a":"#e0e0e0"};
  border-radius: 8px;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Questrial', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: #1a1a1a;
  min-width: 50px;
  text-align: center;

  &:hover {
    border-color: #1a1a1a;
  }

  &:active {
    transform: scale(0.98);
  }
`;let F=l.default.div.withConfig({displayName:"ProductScreen.styles__ActionButtons",componentId:"sc-c3d1c155-21"})`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,G=l.default.button.withConfig({displayName:"ProductScreen.styles__Button",componentId:"sc-c3d1c155-22"})`
  flex: 1;
  min-width: 160px;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Questrial', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  ${({$variant:a})=>"primary"===a?`
    background: #1a1a1a;
    color: white;
    
    &:hover {
      background: #2a2a2a;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
  `:`
    background: transparent;
    color: #1a1a1a;
    border: 1.5px solid #1a1a1a;
    
    &:hover {
      background: #1a1a1a;
      color: white;
      transform: translateY(-1px);
    }
  `}

  &:active {
    transform: translateY(0);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`,H=l.default.div.withConfig({displayName:"ProductScreen.styles__ProductInfo",componentId:"sc-c3d1c155-23"})`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
`,I=l.default.div.withConfig({displayName:"ProductScreen.styles__InfoRow",componentId:"sc-c3d1c155-24"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.95rem;
  font-family: 'Questrial', sans-serif;

  span:first-child {
    color: #666;
    font-weight: 400;
  }

  span:last-child {
    color: #1a1a1a;
    font-weight: 500;
  }
`,J=l.default.span.withConfig({displayName:"ProductScreen.styles__AvailabilityBadge",componentId:"sc-c3d1c155-25"})`
  padding: 0.375rem 0.75rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: 'Questrial', sans-serif;
  background: ${({$available:a})=>a?"rgba(76, 175, 80, 0.1)":"rgba(244, 67, 54, 0.1)"};
  color: ${({$available:a})=>a?"#4caf50":"#f44336"};
`,K=l.default.div.withConfig({displayName:"ProductScreen.styles__SpecificationsSection",componentId:"sc-c3d1c155-26"})`
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
`,L=l.default.h2.withConfig({displayName:"ProductScreen.styles__SectionTitle",componentId:"sc-c3d1c155-27"})`
  font-size: 1.5rem;
  font-weight: 500;
  color: #1a1a1a;
  margin: 0 0 1.5rem;
  font-family: 'Questrial', sans-serif;
`,M=l.default.ul.withConfig({displayName:"ProductScreen.styles__SpecificationsList",componentId:"sc-c3d1c155-28"})`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,N=l.default.li.withConfig({displayName:"ProductScreen.styles__SpecificationItem",componentId:"sc-c3d1c155-29"})`
  display: flex;
  gap: 1rem;
  font-size: 0.95rem;
  font-family: 'Questrial', sans-serif;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  strong {
    color: #666;
    font-weight: 500;
    min-width: 200px;
  }

  span {
    color: #1a1a1a;
    flex: 1;
  }
`,O=l.default.p.withConfig({displayName:"ProductScreen.styles__LoadingMessage",componentId:"sc-c3d1c155-30"})`
  text-align: center;
  padding: 4rem 2rem;
  color: #666;
  font-family: 'Questrial', sans-serif;
`,P=l.default.p.withConfig({displayName:"ProductScreen.styles__ErrorMessage",componentId:"sc-c3d1c155-31"})`
  text-align: center;
  padding: 4rem 2rem;
  color: #f44336;
  font-family: 'Questrial', sans-serif;
`;a.i(56498);var Q=a.i(29111),R=a.i(20623);a.s(["default",0,({initialProduct:a})=>{let l,S=(0,d.useParams)(),T=(0,d.useRouter)(),U=(0,d.useSearchParams)(),V=(0,Q.normalizeLocale)(S?.locale),W=Array.isArray(S?.slug)?S?.slug[0]:S?.slug,X=U.get("id");X&&(l=parseInt(X));let{product:Y,loading:Z,error:$,mainImage:_,setMainImage:aa,notFound:ab}=((a,b,d)=>{let[e,i]=(0,c.useState)(d??null),[j,k]=(0,c.useState)(!d),[l,m]=(0,c.useState)(null),[n,o]=(0,c.useState)(""),[p,q]=(0,c.useState)(!1),r=(0,c.useRef)(!1);return(0,c.useEffect)(()=>{if(!r.current&&d){o((0,g.getImageUrl)(d.variant_image)),r.current=!0;return}(async()=>{if(!a){q(!0),k(!1);return}try{if(b){let a=await (0,f.getProduct)(b),c=(0,h.mapProductDtoToModel)(a);i(c);let d=(0,g.getImageUrl)(c.variant_image);o(d),q(!1)}else{let b=await (0,f.getProductBySlug)(a);if(!b){q(!0),i(null);return}let c=(0,h.mapProductDtoToModel)(b);i(c);let d=(0,g.getImageUrl)(c.variant_image);o(d),q(!1)}}catch{m("Failed to load product details")}finally{k(!1)}})()},[a,b,d]),{product:e,loading:j,error:l,mainImage:n,setMainImage:o,notFound:p}})(W,l,a),[ac,ad]=(0,c.useState)(_),[ae,af]=(0,c.useState)(null),[ag,ah]=(0,c.useState)(1),{t:ai}=(0,j.useTranslation)(),aj=c.default.useMemo(()=>{if(!Y)return[];let a=[];return Y.variant_image&&a.push((0,g.getImageUrl)(Y.variant_image)),Y.variants&&Y.variants.forEach(b=>{b.image&&b.image!==Y.variant_image&&a.push((0,g.getImageUrl)(b.image))}),a},[Y]);c.default.useEffect(()=>{if(Y)if(af(String(Y.id)),ah(1),Y.variant_image){let a=(0,g.getImageUrl)(Y.variant_image);aa(a),ad(a)}else aj.length>0&&(aa(aj[0]),ad(aj[0]))},[Y,aa,aj]),c.default.useEffect(()=>{_&&!ac&&ad(_)},[_,ac]);let ak=c.default.useMemo(()=>{if(!Y?.specifications)return null;let a=Y.specifications.quantity_limit||Y.specifications.max_quantity||Y.specifications.max_qty;if(!a)return null;let b=Number(a);return!Number.isFinite(b)||b<1?null:b},[Y]);if(c.default.useEffect(()=>{ak&&ag>ak&&ah(ak)},[ak,ag]),Z)return(0,b.jsxs)(m,{children:[(0,b.jsx)(i.default,{primaryColor:"#CC0C5C",secondaryColor:"#F2A800"}),(0,b.jsx)(n,{children:(0,b.jsx)(O,{children:"Loading..."})})]});if(ab)return(0,b.jsxs)(m,{children:[(0,b.jsx)(i.default,{primaryColor:"#CC0C5C",secondaryColor:"#F2A800"}),(0,b.jsxs)(n,{children:[(0,b.jsx)(P,{children:"Product not found."}),(0,b.jsx)(F,{children:(0,b.jsx)(G,{$variant:"primary",onClick:()=>T.push((0,Q.withLocale)(V,"/products")),children:"Browse products"})})]})]});if($)return(0,b.jsxs)(m,{children:[(0,b.jsx)(i.default,{primaryColor:"#CC0C5C",secondaryColor:"#F2A800"}),(0,b.jsx)(n,{children:(0,b.jsx)(P,{children:$})})]});if(!Y)return(0,b.jsxs)(m,{children:[(0,b.jsx)(i.default,{primaryColor:"#CC0C5C",secondaryColor:"#F2A800"}),(0,b.jsx)(n,{children:(0,b.jsx)(P,{children:"No product found"})})]});let al=aj.filter(a=>!!a),am=(0,g.getImageUrl)(Y?.variant_image||"")||"/assets/logo.png",an=_||am;return(0,b.jsxs)(m,{children:[(0,b.jsx)(i.default,{primaryColor:"#CC0C5C",secondaryColor:"#F2A800"}),(0,b.jsxs)(n,{children:[(0,b.jsx)(k.default,{categoryName:Y?.category?.name||void 0,subcategoryName:Y?.subcategory?.name||void 0,productName:Y?.name}),(0,b.jsxs)(o,{children:[(0,b.jsxs)(p,{children:[(0,b.jsx)(q,{children:(0,b.jsx)(e.default,{src:an,alt:Y.name,fill:!0,sizes:"(max-width: 968px) 100vw, 50vw",priority:!0})}),al.length>1&&(0,b.jsx)(r,{children:al.map((a,c)=>(0,b.jsx)(s,{$isActive:a===ac,type:"button",onClick:()=>{aa(a),ad(a)},children:(0,b.jsx)(e.default,{src:a,alt:`Thumbnail ${c+1}`,fill:!0,sizes:"80px"})},c))})]}),(0,b.jsxs)(t,{children:[(0,b.jsx)(u,{children:Y.name}),(0,b.jsx)(v,{children:Y.price_new?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(w,{children:Y.price_new}),(0,b.jsx)(x,{children:Y.price})]}):(0,b.jsx)(w,{children:Y.price})}),(Y.variant_color_palette||Y.variants&&Y.variants.length>0)&&(0,b.jsx)(y,{children:(0,b.jsxs)(z,{children:[(0,b.jsx)(A,{children:"Available Colors"}),(0,b.jsxs)(B,{children:[Y.variant_color_palette&&(0,b.jsxs)(C,{$isSelected:ae===String(Y.id),$colorValue:Y.variant_color_palette,onClick:()=>{if(af(String(Y.id)),Y.variant_image){let a=(0,g.getImageUrl)(Y.variant_image);aa(a),ad(a)}},children:[(0,b.jsx)(D,{$colorValue:Y.variant_color_palette}),(0,b.jsx)(E,{children:Y.variant_color_name||"Current"})]}),Y.variants&&Y.variants.map(a=>(0,b.jsxs)(C,{$isSelected:ae===String(a.id),$colorValue:a.color_palette,onClick:()=>{var b;let c;return b=a.id,void((c=Y?.variants?.find(a=>a.id===b))&&T.push((0,Q.withLocale)(V,`/product/${(0,R.buildProductSlug)(c.name,b)}`)))},children:[(0,b.jsx)(D,{$colorValue:a.color_palette}),(0,b.jsx)(E,{children:a.color_name})]},a.id))]})]})}),(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",margin:"16px 0"},children:[(0,b.jsx)("button",{type:"button",onClick:()=>ah(a=>Math.max(1,a-1)),"aria-label":"Decrease quantity",children:"-"}),(0,b.jsx)("span",{"aria-live":"polite",children:ag}),(0,b.jsx)("button",{type:"button",onClick:()=>ah(a=>ak?Math.min(ak,a+1):a+1),"aria-label":"Increase quantity",disabled:!!ak&&ag>=ak,children:"+"}),ak?(0,b.jsxs)("span",{children:["Max ",ak]}):null]}),(0,b.jsxs)(F,{children:[(0,b.jsxs)(G,{$variant:"primary",onClick:a=>{a.stopPropagation();let b=localStorage.getItem("cartProducts"),c=[];if(b)try{let a=JSON.parse(b);c=Array.isArray(a)&&a.length>0&&a[0].bagId?a:a.map((a,b)=>({bagId:`bag-${Date.now()}-${b}-${a.id}`,product:a,quantity:1}))}catch{c=[]}let d=c.find(a=>a.product.id===Y.id);if(d){let a=c.filter(a=>a.bagId!==d.bagId);localStorage.setItem("cartProducts",JSON.stringify(a))}else{let a={bagId:`bag-${Date.now()}-${Y.id}`,product:Y,quantity:ag};c.push(a),localStorage.setItem("cartProducts",JSON.stringify(c))}window.dispatchEvent(new Event("cartUpdated"))},children:[(0,b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",viewBox:"0 0 16 16",children:(0,b.jsx)("path",{d:"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"})}),ai((()=>{let a=localStorage.getItem("cartProducts");if(!a)return!1;try{return JSON.parse(a).some(a=>a.product.id===Y.id)}catch{return!1}})()?"removeFromCart":"addToCart")]}),(0,b.jsxs)(G,{$variant:"secondary",onClick:a=>{a.stopPropagation();let b=JSON.parse(localStorage.getItem("compareProducts")||"[]"),c=b.find(a=>a.id===Y.id)?b.filter(a=>a.id!==Y.id):[...b,Y];localStorage.setItem("compareProducts",JSON.stringify(c)),window.dispatchEvent(new Event("compareUpdated"))},children:[(0,b.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,b.jsx)("path",{d:"M3.99923 21H19.9992M11.9992 21V7M11.9992 7C13.1038 7 13.9992 6.10457 13.9992 5M11.9992 7C10.8947 7 9.99923 6.10457 9.99923 5M13.9992 5C13.9992 3.89543 13.1038 3 11.9992 3C10.8947 3 9.99923 3.89543 9.99923 5M13.9992 5H19.9992M9.99923 5H3.99923M5.99923 17C7.51177 17 8.76287 16.1584 8.96934 14.7513C8.98242 14.6621 8.98897 14.6175 8.98385 14.5186C8.98031 14.4503 8.95717 14.3256 8.93599 14.2605C8.90531 14.1664 8.86812 14.1003 8.79375 13.968L5.99923 9L3.2047 13.968C3.13575 14.0906 3.10128 14.1519 3.06939 14.2584C3.04977 14.3239 3.02706 14.4811 3.02735 14.5494C3.02781 14.6606 3.03453 14.6899 3.04799 14.7486C3.30295 15.86 4.5273 17 5.99923 17ZM17.9992 17C19.5118 17 20.7629 16.1584 20.9693 14.7513C20.9824 14.6621 20.989 14.6175 20.9838 14.5186C20.9803 14.4503 20.9572 14.3256 20.936 14.2605C20.9053 14.1664 20.8681 14.1003 20.7937 13.968L17.9992 9L15.2047 13.968C15.1358 14.0906 15.1013 14.1519 15.0694 14.2584C15.0498 14.3239 15.0271 14.4811 15.0273 14.5494C15.0278 14.6606 15.0345 14.6899 15.048 14.7486C15.303 15.86 16.5273 17 17.9992 17Z"})}),ai("compare")]})]}),(0,b.jsxs)(H,{children:[(0,b.jsxs)(I,{children:[(0,b.jsxs)("span",{children:[ai("brand"),":"]}),(0,b.jsx)("span",{children:Y.brand})]}),(0,b.jsxs)(I,{children:[(0,b.jsxs)("span",{children:[ai("product_code"),":"]}),(0,b.jsx)("span",{children:Y.id})]}),(0,b.jsxs)(I,{children:[(0,b.jsxs)("span",{children:[ai("availability"),":"]}),(0,b.jsx)(J,{$available:"in_stock"===Y.availability,children:ai("in_stock"===Y.availability?"in_stock":"out_of_stock")})]})]})]})]}),Y.specifications&&Object.keys(Y.specifications).length>0&&(0,b.jsxs)(K,{children:[(0,b.jsx)(L,{children:ai("specifications")}),(0,b.jsx)(M,{children:Object.entries(Y.specifications).map(([a,c])=>{let d=a.replace(/_/g," ").split(" ").map(a=>a.charAt(0).toUpperCase()+a.slice(1).toLowerCase()).join(" "),e=String(c).split(";").map(a=>a.trim()).filter(a=>a.length>0).join("\n");return(0,b.jsxs)(N,{children:[(0,b.jsxs)("strong",{children:[d,":"]}),(0,b.jsx)("span",{style:{whiteSpace:"pre-line"},children:e})]},a)})})]})]})]})}],39759)}];

//# sourceMappingURL=3d860_Dev_jasmine_frontend_src_presentation_screen_product_ProductScreen_tsx_ba9f1bc2._.js.map