module.exports=[43403,a=>{"use strict";var b=a.i(1142),c=a.i(96766),d=a.i(61765),e=a.i(59131),f=a.i(62013),g=a.i(31570),h=a.i(79717),i=a.i(60590),j=a.i(81462),k=a.i(4232),l=a.i(75795),m=a.i(38120);let n=m.default.div.withConfig({displayName:"ProductsScreen.styles__ProductsPageContainer",componentId:"sc-c2cd2dc5-0"})`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
`,o=m.default.div.withConfig({displayName:"ProductsScreen.styles__ProductsContent",componentId:"sc-c2cd2dc5-1"})`
  max-width: 1400px;
  margin: 0 auto;
  padding: 140px 3rem 4rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 120px 1.5rem 3rem;
  }
`,p=m.default.div.withConfig({displayName:"ProductsScreen.styles__ProductsHeader",componentId:"sc-c2cd2dc5-2"})`
  margin-bottom: 3rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`,q=m.default.h1.withConfig({displayName:"ProductsScreen.styles__ProductsTitle",componentId:"sc-c2cd2dc5-3"})`
  font-size: 2rem;
  font-weight: 400;
  color: #1a1a1a;
  margin: 0;
  font-family: 'Questrial', sans-serif;
  text-transform: capitalize;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,r=m.default.div.withConfig({displayName:"ProductsScreen.styles__ProductsGrid",componentId:"sc-c2cd2dc5-4"})`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 2rem;
  width: 100%;
  margin-bottom: 4rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`,s=m.default.div.withConfig({displayName:"ProductsScreen.styles__PaginationContainer",componentId:"sc-c2cd2dc5-5"})`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 3rem;
  flex-wrap: wrap;
`,t=m.default.button.withConfig({displayName:"ProductsScreen.styles__PaginationButton",componentId:"sc-c2cd2dc5-6"})`
  background: none;
  border: none;
  color: #1a1a1a;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  font-family: 'Questrial', sans-serif;

  &:hover:not(:disabled) {
    background: rgba(0, 0, 0, 0.05);
    color: #9a8300;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    min-width: 36px;
    height: 36px;
    font-size: 0.9rem;
  }
`,u=m.default.button.withConfig({displayName:"ProductsScreen.styles__PageButton",componentId:"sc-c2cd2dc5-7"})`
  background: ${({$isActive:a})=>a?"#1a1a1a":"transparent"};
  border: 1px solid
    ${({$isActive:a})=>a?"#1a1a1a":"rgba(0, 0, 0, 0.1)"};
  color: ${({$isActive:a})=>a?"#ffffff":"#1a1a1a"};
  padding: 0.5rem 0.75rem;
  font-size: 0.95rem;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s ease;
  min-width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Questrial', sans-serif;
  font-weight: ${({$isActive:a})=>a?"500":"400"};

  &:hover:not(:disabled) {
    background: ${({$isActive:a})=>a?"#1a1a1a":"rgba(0, 0, 0, 0.05)"};
    border-color: ${({$isActive:a})=>a?"#1a1a1a":"#9a8300"};
    color: ${({$isActive:a})=>a?"#ffffff":"#9a8300"};
  }

  &:disabled {
    cursor: default;
    border: none;
    background: transparent;
    color: #999;
  }

  @media (max-width: 768px) {
    min-width: 36px;
    height: 36px;
    font-size: 0.85rem;
    padding: 0.4rem 0.6rem;
  }
`,v=m.default.div.withConfig({displayName:"ProductsScreen.styles__LoadingMessage",componentId:"sc-c2cd2dc5-8"})`
  text-align: center;
  padding: 4rem 2rem;
  color: #666;
  font-size: 1.1rem;
  font-family: 'Questrial', sans-serif;
`,w=m.default.div.withConfig({displayName:"ProductsScreen.styles__ErrorMessage",componentId:"sc-c2cd2dc5-9"})`
  text-align: center;
  padding: 4rem 2rem;
  color: #cc0c5c;
  font-size: 1.1rem;
  font-family: 'Questrial', sans-serif;
`,x=m.default.div.withConfig({displayName:"ProductsScreen.styles__EmptyMessage",componentId:"sc-c2cd2dc5-10"})`
  text-align: center;
  padding: 4rem 2rem;
  color: #999;
  font-size: 1.1rem;
  font-family: 'Questrial', sans-serif;
`,y=m.default.div.withConfig({displayName:"ProductsScreen.styles__ControlsContainer",componentId:"sc-c2cd2dc5-11"})`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  @media (max-width: 968px) {
    flex-direction: column;
  }
`,z=m.default.div.withConfig({displayName:"ProductsScreen.styles__FiltersContainer",componentId:"sc-c2cd2dc5-12"})`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-width: 200px;

  @media (max-width: 968px) {
    width: 100%;
  }
`,A=m.default.div.withConfig({displayName:"ProductsScreen.styles__FilterGroup",componentId:"sc-c2cd2dc5-13"})`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,B=m.default.label.withConfig({displayName:"ProductsScreen.styles__FilterLabel",componentId:"sc-c2cd2dc5-14"})`
  font-size: 0.9rem;
  font-weight: 500;
  color: #1a1a1a;
  font-family: 'Questrial', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,C=m.default.div.withConfig({displayName:"ProductsScreen.styles__FilterOptions",componentId:"sc-c2cd2dc5-15"})`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,D=m.default.label.withConfig({displayName:"ProductsScreen.styles__FilterCheckbox",componentId:"sc-c2cd2dc5-16"})`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.9rem;
  color: #666;
  font-family: 'Questrial', sans-serif;
  transition: color 0.2s ease;

  &:hover {
    color: #1a1a1a;
  }

  input[type='checkbox'] {
    width: 16px;
    height: 16px;
    cursor: pointer;
    accent-color: #1a1a1a;
  }
`,E=m.default.div.withConfig({displayName:"ProductsScreen.styles__ColorOption",componentId:"sc-c2cd2dc5-17"})`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.9rem;
  color: #666;
  font-family: 'Questrial', sans-serif;
  transition: color 0.2s ease;

  &:hover {
    color: #1a1a1a;
  }

  input[type='checkbox'] {
    width: 16px;
    height: 16px;
    cursor: pointer;
    accent-color: #1a1a1a;
  }
`,F=m.default.div.withConfig({displayName:"ProductsScreen.styles__ColorSwatch",componentId:"sc-c2cd2dc5-18"})`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background-color: ${({$colorValue:a})=>a};
  border: 1px solid rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
`,G=m.default.div.withConfig({displayName:"ProductsScreen.styles__SortContainer",componentId:"sc-c2cd2dc5-19"})`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 968px) {
    width: 100%;
    justify-content: space-between;
  }
`,H=m.default.label.withConfig({displayName:"ProductsScreen.styles__SortLabel",componentId:"sc-c2cd2dc5-20"})`
  font-size: 0.9rem;
  font-weight: 500;
  color: #1a1a1a;
  font-family: 'Questrial', sans-serif;
  white-space: nowrap;
`,I=m.default.select.withConfig({displayName:"ProductsScreen.styles__SortSelect",componentId:"sc-c2cd2dc5-21"})`
  padding: 0.5rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  background: white;
  color: #1a1a1a;
  font-size: 0.9rem;
  font-family: 'Questrial', sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 180px;

  &:hover {
    border-color: rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
    border-color: #9a8300;
  }
`,J=m.default.div.withConfig({displayName:"ProductsScreen.styles__SubcategoriesContainer",componentId:"sc-c2cd2dc5-22"})`
  margin-bottom: 3rem;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
`,K=m.default.h2.withConfig({displayName:"ProductsScreen.styles__SubcategoriesTitle",componentId:"sc-c2cd2dc5-23"})`
  font-size: 1.2rem;
  font-weight: 400;
  color: #1a1a1a;
  margin: 0 0 1.5rem 0;
  font-family: 'Questrial', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,L=m.default.div.withConfig({displayName:"ProductsScreen.styles__SubcategoriesGrid",componentId:"sc-c2cd2dc5-24"})`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 140px));
  gap: 0.75rem;
  justify-content: start;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(90px, 120px));
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,M=m.default.a.withConfig({displayName:"ProductsScreen.styles__SubcategoryCard",componentId:"sc-c2cd2dc5-25"})`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.4rem;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  text-decoration: none;
  color: #1a1a1a;
  font-size: 0.9rem;
  font-family: 'Questrial', sans-serif;
  transition: all 0.2s ease;
  text-align: center;
  text-transform: capitalize;
  aspect-ratio: 1.3;
  min-height: 60px;

  @media (max-width: 768px) {
    min-height: 50px;
    padding: 0.4rem 0.3rem;
    font-size: 0.85rem;
    aspect-ratio: 1.2;
  }

  &:hover {
    border-color: #9a8300;
    color: #9a8300;
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`,N=m.default.div.withConfig({displayName:"ProductsScreen.styles__MainContent",componentId:"sc-c2cd2dc5-26"})`
  flex: 1;
  min-width: 0;
`;a.i(56498);var O=a.i(29111);a.s(["default",0,({initialProducts:a=[],initialTotalPages:m=1})=>{let P=(0,d.useSearchParams)(),Q=(0,d.useRouter)(),R=(0,d.useParams)(),S=(0,O.normalizeLocale)(R?.locale),[T,U]=(0,c.useState)({color:[],size:[]}),[V,W]=(0,c.useState)("price_asc"),[X,Y]=(0,c.useState)(1),{categories:Z}=(0,l.useCategories)(),{products:$,loading:_,error:aa,totalPages:ab,availableColors:ac,availableSizes:ad,colorPaletteMap:ae}=((a,b=1,e=20,f,g)=>{let h=(0,d.useSearchParams)(),l=h.get("category_id"),m=h.get("subcategory_id"),n=l?Number(l):null,o=m?Number(m):null,[p,q]=(0,c.useState)(g?.products||[]),[r,s]=(0,c.useState)(!g),[t,u]=(0,c.useState)(null),[v,w]=(0,c.useState)(g?.totalPages||1),[x,y]=(0,c.useState)(g?.products||[]),z=(0,c.useRef)(!1);(0,c.useEffect)(()=>{if(!z.current&&g){z.current=!0;return}(async()=>{s(!0),u(null);try{let c,d;c=await (0,i.listProducts)({page:b,page_size:e,category_id:n||void 0,subcategory_id:o||void 0,fields:k.PRODUCT_LIST_FIELDS});let g=d=(0,j.mapProductDtosToModels)(c.items);a?.color&&a.color.length>0&&(g=d.filter(b=>!!(b.variant_color_palette&&a.color.includes(b.variant_color_palette))||b.variants?.some(b=>b.color_palette&&a.color.includes(b.color_palette)))),f&&(g=[...g].sort((a,b)=>{switch(f){case"price_asc":{let c=parseFloat((a.price_new||a.price).replace(/[^\d.-]/g,""))||0,d=parseFloat((b.price_new||b.price).replace(/[^\d.-]/g,""))||0;return c-d}case"price_desc":{let c=parseFloat((a.price_new||a.price).replace(/[^\d.-]/g,""))||0;return(parseFloat((b.price_new||b.price).replace(/[^\d.-]/g,""))||0)-c}case"name_asc":return a.name.localeCompare(b.name);case"name_desc":return b.name.localeCompare(a.name);default:return 0}})),y(g),q(g),w(c.total_pages||Math.ceil((c.total||g.length)/e))}catch(a){console.error("❌ Error fetching products:",a),u("Failed to load products."),q([]),y([])}finally{s(!1)}})()},[n,o,a,b,e,f,g]);let A=n?String(n):void 0,B=o?String(o):void 0,C=Array.from(new Set(x.flatMap(a=>{let b=[];return a.variant_color_palette&&b.push(a.variant_color_palette),a.variants&&a.variants.forEach(a=>{a.color_palette&&b.push(a.color_palette)}),b}).filter(Boolean))).sort(),D=new Map;return x.forEach(a=>{a.variant_color_palette&&a.variant_color_name&&D.set(a.variant_color_palette,a.variant_color_name),a.variants?.forEach(a=>{a.color_palette&&a.color_name&&!D.has(a.color_palette)&&D.set(a.color_palette,a.color_name)})}),{products:p,loading:r,error:t,category:A,subcategory:B,totalPages:v,setProducts:q,availableColors:C,availableSizes:[],colorPaletteMap:D}})(T,X,20,V,{products:a,totalPages:m}),af=P.get("category_id"),ag=P.get("subcategory_id"),ah=af?Number(af):null,ai=ag?Number(ag):null,aj=ah?Z.find(a=>a.id===ah)?.name:void 0,ak=ah&&ai?Z.find(a=>a.id===ah)?.subcategories?.find(a=>a.id===ai)?.name:void 0,al=(0,c.useMemo)(()=>{if(!ah||ai)return[];let a=Z.find(a=>a.id===ah);return a?.subcategories||[]},[Z,ah,ai]),am=(a,b)=>{U(c=>{let d=c[a]||[],e=d.includes(b)?d.filter(a=>a!==b):[...d,b];return{...c,[a]:e}}),Y(1)},an=a=>{a>=1&&a<=ab&&(Y(a),window.scrollTo({top:0,behavior:"smooth"}))};return(0,b.jsxs)(n,{children:[(0,b.jsx)(e.default,{primaryColor:"#CC0C5C",secondaryColor:"#F2A800"}),(0,b.jsxs)(o,{children:[(0,b.jsx)(h.default,{}),(0,b.jsx)(p,{children:(0,b.jsx)(q,{children:ak||aj||"All Products"})}),al.length>0&&!ai&&(0,b.jsxs)(J,{children:[(0,b.jsx)(K,{children:"Shop by Subcategory"}),(0,b.jsx)(L,{children:al.map(a=>(0,b.jsx)(M,{onClick:b=>{var c;b.preventDefault(),c=a.id,ah&&Q.push((0,O.withLocale)(S,`/products?category_id=${ah}&subcategory_id=${c}`))},href:(0,O.withLocale)(S,`/products?category_id=${ah}&subcategory_id=${a.id}`),children:a.name},a.id))})]}),(0,b.jsxs)(y,{children:[(0,b.jsxs)(z,{children:[ac.length>0&&(0,b.jsxs)(A,{children:[(0,b.jsx)(B,{children:"Color"}),(0,b.jsx)(C,{children:ac.map(a=>{let c=ae?.get(a);return(0,b.jsxs)(E,{children:[(0,b.jsx)("input",{type:"checkbox",checked:T.color?.includes(a)||!1,onChange:()=>am("color",a)}),c&&(0,b.jsx)(F,{$colorValue:c}),(0,b.jsx)("span",{children:a})]},a)})})]}),ad.length>0&&(0,b.jsxs)(A,{children:[(0,b.jsx)(B,{children:"Size"}),(0,b.jsx)(C,{children:ad.map(a=>(0,b.jsxs)(D,{children:[(0,b.jsx)("input",{type:"checkbox",checked:T.size?.includes(a)||!1,onChange:()=>am("size",a)}),(0,b.jsx)("span",{children:a})]},a))})]})]}),(0,b.jsxs)(N,{children:[$.length>0&&(0,b.jsxs)(G,{children:[(0,b.jsx)(H,{children:"Sort by:"}),(0,b.jsxs)(I,{value:V,onChange:a=>{W(a.target.value),Y(1)},children:[(0,b.jsx)("option",{value:"price_asc",children:"Price: Low to High"}),(0,b.jsx)("option",{value:"price_desc",children:"Price: High to Low"}),(0,b.jsx)("option",{value:"name_asc",children:"Name: A to Z"}),(0,b.jsx)("option",{value:"name_desc",children:"Name: Z to A"})]})]}),_?(0,b.jsx)(v,{children:"Loading products..."}):aa?(0,b.jsx)(w,{children:aa}):0===$.length?(0,b.jsx)(x,{children:"No products found."}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(r,{children:$.map(a=>(0,b.jsx)(f.default,{product:a},a.id))}),(()=>{if(ab<=1)return null;let a=[];if(ab<=5)for(let b=1;b<=ab;b++)a.push(b);else if(X<=3){for(let b=1;b<=4;b++)a.push(b);a.push("ellipsis"),a.push(ab)}else if(X>=ab-2){a.push(1),a.push("ellipsis");for(let b=ab-3;b<=ab;b++)a.push(b)}else{a.push(1),a.push("ellipsis");for(let b=X-1;b<=X+1;b++)a.push(b);a.push("ellipsis"),a.push(ab)}return(0,b.jsxs)(s,{children:[(0,b.jsx)(t,{onClick:()=>an(1),disabled:1===X,"aria-label":"First page",children:"⏮"}),(0,b.jsx)(t,{onClick:()=>an(X-1),disabled:1===X,"aria-label":"Previous page",children:"◀"}),a.map((a,c)=>"ellipsis"===a?(0,b.jsx)(u,{disabled:!0,children:"..."},`ellipsis-${c}`):(0,b.jsx)(u,{onClick:()=>an(a),$isActive:X===a,children:a},a)),(0,b.jsx)(t,{onClick:()=>an(X+1),disabled:X===ab,"aria-label":"Next page",children:"▶"}),(0,b.jsx)(t,{onClick:()=>an(ab),disabled:X===ab,"aria-label":"Last page",children:"⏭"})]})})()]})]})]})]}),(0,b.jsx)(g.default,{})]})}],43403)}];

//# sourceMappingURL=0b11f_jasmine_frontend_src_presentation_screen_products_ProductsScreen_tsx_ab366047._.js.map