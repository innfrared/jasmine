module.exports=[69529,a=>{"use strict";a.i(50404);var b=a.i(94952);a.s(["createOrderSession",0,a=>(0,b.sessionFetch)("/api/orders",{method:"POST",body:JSON.stringify(a)}),"getOrderSession",0,a=>(0,b.sessionFetch)(`/api/orders/${a}`),"listOrdersSession",0,()=>(0,b.sessionFetch)("/api/orders")])},58898,a=>{"use strict";var b=a.i(38120);let c=b.default.div.withConfig({displayName:"CheckoutScreen.styles__CheckoutPageContainer",componentId:"sc-91070f8f-0"})`
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
`;a.s(["CheckoutContent",0,d,"CheckoutGrid",0,f,"CheckoutPageContainer",0,c,"CheckoutTitle",0,e,"CustomerDetailsSection",0,g,"EmptyCartContainer",0,C,"EmptyCartMessage",0,D,"FormGroup",0,i,"FormInput",0,k,"FormLabel",0,j,"FormTextarea",0,l,"OrderItem",0,q,"OrderItemDetails",0,s,"OrderItemImage",0,r,"OrderItemName",0,t,"OrderItemPrice",0,u,"OrderItemQuantity",0,v,"OrderItemRemove",0,w,"OrderItemsList",0,p,"OrderSummaryFooter",0,x,"OrderSummaryHeader",0,n,"OrderSummaryRow",0,y,"OrderSummarySection",0,m,"OrderSummaryTitle",0,o,"OrderSummaryTotal",0,z,"PaymentSection",0,A,"PlaceOrderButton",0,B,"SectionTitle",0,h])},75473,a=>{"use strict";var b=a.i(1142),c=a.i(96766),d=a.i(61765),e=a.i(96615),f=a.i(59131),g=a.i(31570),h=a.i(79717),i=a.i(62686),j=a.i(69529);a.i(56498);var k=a.i(29111),l=a.i(20623),m=a.i(58898);let n=f.default;a.s(["default",0,()=>{let a=(0,d.useRouter)(),f=(0,d.useParams)(),o=(0,k.normalizeLocale)(f?.locale),[p,q]=(0,c.useState)([]),[r,s]=(0,c.useState)({fullName:"",email:"",phone:"",address:"",city:"",postalCode:"",notes:""}),[t,u]=(0,c.useState)(""),[v,w]=(0,c.useState)(!1),[x,y]=(0,c.useState)("");(0,c.useEffect)(()=>{let a=localStorage.getItem("cartProducts");if(a)try{let b=JSON.parse(a);Array.isArray(b)&&b.length>0&&b[0].bagId?q(b):q(b.map((a,b)=>({bagId:`bag-${Date.now()}-${b}-${a.id}`,product:a,quantity:1})))}catch{q([])}},[]);let z=(a,b)=>{if(b<1)return;let c=p.map(c=>c.bagId===a?{...c,quantity:b}:c);q(c),localStorage.setItem("cartProducts",JSON.stringify(c)),window.dispatchEvent(new Event("cartUpdated"))},A=a=>{s({...r,[a.target.name]:a.target.value})},B=()=>p.reduce((a,b)=>a+(parseFloat((b.product.price_new||b.product.price).replace(/[^\d.-]/g,""))||0)*b.quantity,0),C=async()=>{if(!v){if(y(""),!t)return void y("Please select a payment method.");w(!0);try{let b=p.map(a=>({product_id:a.product.id,quantity:a.quantity,unit_price:a.product.price_new||a.product.price})),c={customer:{full_name:r.fullName,email:r.email,phone:r.phone,address:r.address,city:r.city,postal_code:r.postalCode},items:b,payment_method:t,notes:r.notes||void 0,total:B()},d=await (0,j.createOrderSession)(c);localStorage.removeItem("cartProducts"),window.dispatchEvent(new Event("cartUpdated")),a.push((0,k.withLocale)(o,`/order-confirmation/${d.id}`))}catch(a){y(a instanceof Error?a.message:"Order could not be created. Please try again.")}finally{w(!1)}}};return 0===p.length?(0,b.jsxs)(m.CheckoutPageContainer,{children:[(0,b.jsx)(n,{primaryColor:"#CC0C5C",secondaryColor:"#F2A800"}),(0,b.jsxs)(m.CheckoutContent,{children:[(0,b.jsx)(h.default,{}),(0,b.jsx)(m.EmptyCartContainer,{children:(0,b.jsx)(m.EmptyCartMessage,{children:"Your cart is empty"})})]}),(0,b.jsx)(g.default,{})]}):(0,b.jsxs)(m.CheckoutPageContainer,{children:[(0,b.jsx)(n,{primaryColor:"#CC0C5C",secondaryColor:"#F2A800"}),(0,b.jsxs)(m.CheckoutContent,{children:[(0,b.jsx)(h.default,{}),(0,b.jsx)(m.CheckoutTitle,{children:"Checkout"}),(0,b.jsxs)(m.CheckoutGrid,{children:[(0,b.jsx)("div",{children:(0,b.jsxs)(m.CustomerDetailsSection,{children:[(0,b.jsx)(m.SectionTitle,{children:"Customer Details"}),(0,b.jsxs)(m.FormGroup,{children:[(0,b.jsx)(m.FormLabel,{children:"Full Name *"}),(0,b.jsx)(m.FormInput,{type:"text",name:"fullName",value:r.fullName,onChange:A,required:!0,placeholder:"John Doe"})]}),(0,b.jsxs)(m.FormGroup,{children:[(0,b.jsx)(m.FormLabel,{children:"Email *"}),(0,b.jsx)(m.FormInput,{type:"email",name:"email",value:r.email,onChange:A,required:!0,placeholder:"john@example.com"})]}),(0,b.jsxs)(m.FormGroup,{children:[(0,b.jsx)(m.FormLabel,{children:"Phone *"}),(0,b.jsx)(m.FormInput,{type:"tel",name:"phone",value:r.phone,onChange:A,required:!0,placeholder:"+1 234 567 8900"})]}),(0,b.jsxs)(m.FormGroup,{children:[(0,b.jsx)(m.FormLabel,{children:"Address *"}),(0,b.jsx)(m.FormTextarea,{name:"address",value:r.address,onChange:A,required:!0,placeholder:"Street address, apartment, suite, etc.",rows:3})]}),(0,b.jsxs)(m.FormGroup,{children:[(0,b.jsx)(m.FormLabel,{children:"City *"}),(0,b.jsx)(m.FormInput,{type:"text",name:"city",value:r.city,onChange:A,required:!0,placeholder:"New York"})]}),(0,b.jsxs)(m.FormGroup,{children:[(0,b.jsx)(m.FormLabel,{children:"Postal Code *"}),(0,b.jsx)(m.FormInput,{type:"text",name:"postalCode",value:r.postalCode,onChange:A,required:!0,placeholder:"10001"})]}),(0,b.jsxs)(m.FormGroup,{children:[(0,b.jsx)(m.FormLabel,{children:"Order Notes (Optional)"}),(0,b.jsx)(m.FormTextarea,{name:"notes",value:r.notes,onChange:A,placeholder:"Special instructions for your order...",rows:3})]})]})}),(0,b.jsxs)("div",{children:[(0,b.jsxs)(m.OrderSummarySection,{children:[(0,b.jsx)(m.OrderSummaryHeader,{children:(0,b.jsx)(m.OrderSummaryTitle,{children:"Order Summary"})}),(0,b.jsx)(m.OrderItemsList,{children:p.map(c=>(0,b.jsxs)(m.OrderItem,{onClick:()=>{var b,d;return b=c.product.name,d=c.product.id,void(window.scrollTo({top:0,behavior:"smooth"}),a.push((0,k.withLocale)(o,`/product/${(0,l.buildProductSlug)(b,d)}`)))},children:[(0,b.jsx)(m.OrderItemImage,{children:(0,b.jsx)(e.default,{src:(0,i.getImageUrl)(c.product.variant_image)||"/assets/logo.png",alt:c.product.name,fill:!0,sizes:"64px"})}),(0,b.jsxs)(m.OrderItemDetails,{children:[(0,b.jsx)(m.OrderItemName,{children:c.product.name}),(0,b.jsx)(m.OrderItemPrice,{children:c.product.price_new||c.product.price}),(0,b.jsxs)(m.OrderItemQuantity,{onClick:a=>a.stopPropagation(),children:[(0,b.jsx)("button",{onClick:()=>z(c.bagId,c.quantity-1),"aria-label":"Decrease quantity",children:"−"}),(0,b.jsx)("span",{children:c.quantity}),(0,b.jsx)("button",{onClick:()=>z(c.bagId,c.quantity+1),"aria-label":"Increase quantity",children:"+"})]})]}),(0,b.jsx)(m.OrderItemRemove,{onClick:a=>{var b;let d;a.stopPropagation(),b=c.bagId,q(d=p.filter(a=>a.bagId!==b)),localStorage.setItem("cartProducts",JSON.stringify(d)),window.dispatchEvent(new Event("cartUpdated"))},"aria-label":"Remove item",children:(0,b.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,b.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,b.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]},c.bagId))}),(0,b.jsxs)(m.OrderSummaryFooter,{children:[(0,b.jsxs)(m.OrderSummaryRow,{children:[(0,b.jsx)("span",{children:"Subtotal"}),(0,b.jsxs)("span",{children:["$",B().toLocaleString()]})]}),(0,b.jsxs)(m.OrderSummaryTotal,{children:[(0,b.jsx)("span",{children:"Total"}),(0,b.jsxs)("span",{children:["$",B().toLocaleString()]})]})]})]}),(0,b.jsxs)(m.PaymentSection,{children:[(0,b.jsx)(m.SectionTitle,{children:"Payment"}),(0,b.jsx)("div",{children:(0,b.jsxs)("label",{children:[(0,b.jsx)("input",{type:"radio",name:"paymentMethod",value:"card",checked:"card"===t,onChange:a=>u(a.target.value)}),"Card"]})}),(0,b.jsx)("div",{children:(0,b.jsxs)("label",{children:[(0,b.jsx)("input",{type:"radio",name:"paymentMethod",value:"cash_on_delivery",checked:"cash_on_delivery"===t,onChange:a=>u(a.target.value)}),"Cash on delivery"]})}),(0,b.jsx)("div",{children:(0,b.jsxs)("label",{children:[(0,b.jsx)("input",{type:"radio",name:"paymentMethod",value:"bank_transfer",checked:"bank_transfer"===t,onChange:a=>u(a.target.value)}),"Bank transfer"]})})]}),x&&(0,b.jsx)("p",{style:{color:"#cc0c5c",marginTop:"0.75rem"},children:x}),(0,b.jsx)(m.PlaceOrderButton,{onClick:C,disabled:v,children:v?"Placing order...":"Place Order"})]})]})]}),(0,b.jsx)(g.default,{})]})}])}];

//# sourceMappingURL=Desktop_Dev_jasmine_frontend_src_6ba4c81a._.js.map