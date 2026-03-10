module.exports=[37052,a=>{"use strict";var b=a.i(1142),c=a.i(96766),d=a.i(61765),e=a.i(322),f=a.i(59131),g=a.i(31570),h=a.i(79717);a.i(82614),a.i(92e3);var i=a.i(94952);let j=a=>(0,i.sessionFetch)(`/api/addresses/${a}/default`,{method:"POST"});var k=a.i(38120);let l=k.keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,m=k.keyframes`
  from {
    transform: translateY(30px) scale(0.95);
    opacity: 0;
  }
  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
`,n=k.default.div.withConfig({displayName:"ShippingScreen.styles__ShippingContainer",componentId:"sc-16aa94e6-0"})`
  min-height: calc(100vh - 200px);
  padding: 10rem 2rem;
  background: #fafafa;
  font-family: 'Questrial', sans-serif;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`,o=k.default.div.withConfig({displayName:"ShippingScreen.styles__ShippingContent",componentId:"sc-16aa94e6-1"})`
  max-width: 1000px;
  margin: 0 auto;
`,p=k.default.div.withConfig({displayName:"ShippingScreen.styles__ShippingHeader",componentId:"sc-16aa94e6-2"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`,q=k.default.h1.withConfig({displayName:"ShippingScreen.styles__ShippingTitle",componentId:"sc-16aa94e6-3"})`
  font-size: 2rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  font-family: 'Questrial', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,r=k.default.button.withConfig({displayName:"ShippingScreen.styles__AddButton",componentId:"sc-16aa94e6-4"})`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #001f3f;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 500;
  font-family: 'Questrial', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #003366;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 31, 63, 0.25);
  }
`,s=k.default.div.withConfig({displayName:"ShippingScreen.styles__AddressList",componentId:"sc-16aa94e6-5"})`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,t=k.default.div.withConfig({displayName:"ShippingScreen.styles__AddressCard",componentId:"sc-16aa94e6-6"})`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    transform: translateY(-2px);
  }
`,u=k.default.div.withConfig({displayName:"ShippingScreen.styles__AddressHeader",componentId:"sc-16aa94e6-7"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e0e0e0;
`,v=k.default.div.withConfig({displayName:"ShippingScreen.styles__AddressLabel",componentId:"sc-16aa94e6-8"})`
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a1a;
  font-family: 'Questrial', sans-serif;
`,w=k.default.div.withConfig({displayName:"ShippingScreen.styles__AddressDefaultBadge",componentId:"sc-16aa94e6-9"})`
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  background: #e8f5e9;
  color: #2e7d32;
  font-family: 'Questrial', sans-serif;
`,x=k.default.div.withConfig({displayName:"ShippingScreen.styles__AddressDetails",componentId:"sc-16aa94e6-10"})`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,y=k.default.div.withConfig({displayName:"ShippingScreen.styles__AddressLine",componentId:"sc-16aa94e6-11"})`
  font-size: 0.95rem;
  color: #666;
  font-family: 'Questrial', sans-serif;
`,z=k.default.div.withConfig({displayName:"ShippingScreen.styles__AddressActions",componentId:"sc-16aa94e6-12"})`
  display: flex;
  gap: 0.75rem;
  padding-top: 1rem;
  border-top: 1px solid #e0e0e0;
`,A=k.default.button.withConfig({displayName:"ShippingScreen.styles__EditButton",componentId:"sc-16aa94e6-13"})`
  flex: 1;
  padding: 0.5rem 1rem;
  background: #f5f5f5;
  color: #333;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  font-family: 'Questrial', sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #e0e0e0;
  }
`,B=k.default.button.withConfig({displayName:"ShippingScreen.styles__DeleteButton",componentId:"sc-16aa94e6-14"})`
  flex: 1;
  padding: 0.5rem 1rem;
  background: #fee;
  color: #cc0c5c;
  border: 1px solid #fcc;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  font-family: 'Questrial', sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #fcc;
  }
`,C=k.default.div.withConfig({displayName:"ShippingScreen.styles__EmptyState",componentId:"sc-16aa94e6-15"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
`,D=k.default.div.withConfig({displayName:"ShippingScreen.styles__EmptyStateIcon",componentId:"sc-16aa94e6-16"})`
  color: #ccc;
  margin-bottom: 1.5rem;
`,E=k.default.div.withConfig({displayName:"ShippingScreen.styles__EmptyStateText",componentId:"sc-16aa94e6-17"})`
  font-size: 1.1rem;
  color: #666;
  font-family: 'Questrial', sans-serif;
`,F=k.default.div.withConfig({displayName:"ShippingScreen.styles__ModalOverlay",componentId:"sc-16aa94e6-18"})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  animation: ${l} 0.2s ease-out;
  padding: 1rem;
`,G=k.default.div.withConfig({displayName:"ShippingScreen.styles__ModalContent",componentId:"sc-16aa94e6-19"})`
  background: white;
  border-radius: 12px;
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  animation: ${m} 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  font-family: 'Questrial', sans-serif;
`,H=k.default.div.withConfig({displayName:"ShippingScreen.styles__ModalHeader",componentId:"sc-16aa94e6-20"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e0e0e0;
`,I=k.default.h2.withConfig({displayName:"ShippingScreen.styles__ModalTitle",componentId:"sc-16aa94e6-21"})`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  font-family: 'Questrial', sans-serif;
`,J=k.default.button.withConfig({displayName:"ShippingScreen.styles__CloseButton",componentId:"sc-16aa94e6-22"})`
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: #f5f5f5;
    color: #333;
  }
`,K=k.default.form.withConfig({displayName:"ShippingScreen.styles__AddressForm",componentId:"sc-16aa94e6-23"})`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`,L=k.default.div.withConfig({displayName:"ShippingScreen.styles__FormGroup",componentId:"sc-16aa94e6-24"})`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,M=k.default.label.withConfig({displayName:"ShippingScreen.styles__Label",componentId:"sc-16aa94e6-25"})`
  font-size: 0.95rem;
  font-weight: 500;
  color: #333;
  font-family: 'Questrial', sans-serif;
`,N=k.default.input.withConfig({displayName:"ShippingScreen.styles__Input",componentId:"sc-16aa94e6-26"})`
  padding: 0.875rem 1rem;
  border: 1.5px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  font-family: 'Questrial', sans-serif;
  transition: all 0.3s ease;
  outline: none;
  background: #fafafa;

  &:focus {
    border-color: #001f3f;
    box-shadow: 0 0 0 4px rgba(0, 31, 63, 0.08);
    background: white;
  }
`;k.default.select.withConfig({displayName:"ShippingScreen.styles__Select",componentId:"sc-16aa94e6-27"})`
  padding: 0.875rem 1rem;
  border: 1.5px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  font-family: 'Questrial', sans-serif;
  transition: all 0.3s ease;
  outline: none;
  background: #fafafa;

  &:focus {
    border-color: #001f3f;
    box-shadow: 0 0 0 4px rgba(0, 31, 63, 0.08);
    background: white;
  }
`;let O=k.default.div.withConfig({displayName:"ShippingScreen.styles__FormActions",componentId:"sc-16aa94e6-28"})`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,P=k.default.button.withConfig({displayName:"ShippingScreen.styles__SaveButton",componentId:"sc-16aa94e6-29"})`
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
  transition: all 0.3s ease;

  &:hover {
    background: #003366;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 31, 63, 0.25);
  }
`,Q=k.default.button.withConfig({displayName:"ShippingScreen.styles__CancelButton",componentId:"sc-16aa94e6-30"})`
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
  transition: all 0.3s ease;

  &:hover {
    background: #f5f5f5;
    border-color: #ccc;
  }
`;a.i(56498);var R=a.i(29111),S=a.i(26863);a.s(["default",0,()=>{let{user:a,isLoading:k}=(0,e.useAuth)(),l=(0,d.useRouter)(),m=(0,d.useParams)(),T=(0,R.normalizeLocale)(m?.locale),[U,V]=(0,c.useState)([]),[W,X]=(0,c.useState)(!1),[Y,Z]=(0,c.useState)(null),[$,_]=(0,c.useState)(!0),[aa,ab]=(0,c.useState)(""),[ac,ad]=(0,c.useState)(""),[ae,af]=(0,c.useState)({label:"",full_name:"",phone:"",country:"",city:"",street:"",apartment:"",postal_code:"",is_default:!1});(0,c.useEffect)(()=>{if(!k){if(!a)return void l.push((0,R.withLocale)(T,"/login"));ag()}},[a,k,l,T]);let ag=async()=>{_(!0),ab("");try{let a=await (0,i.sessionFetch)("/api/addresses");V(Array.isArray(a)?a:[])}catch(a){ab(a instanceof Error?a.message:"Failed to load addresses."),V([])}finally{_(!1)}},ah=async a=>{if(window.confirm("Are you sure you want to delete this address?")){ab(""),ad("");try{await (0,i.sessionFetch)(`/api/addresses/${a}`,{method:"DELETE"}),V(U.filter(b=>b.id!==a)),ad("Address deleted.")}catch(a){ab(a instanceof Error?a.message:"Failed to delete address.")}}},ai=async a=>{if(a.preventDefault(),ab(""),ad(""),[ae.label,ae.full_name,ae.phone,ae.country,ae.city,ae.street,ae.postal_code].some(a=>!String(a).trim()))return void ab("Please fill all required fields.");let b={label:ae.label,full_name:ae.full_name,phone:ae.phone,country:ae.country,city:ae.city,street:ae.street,apartment:ae.apartment||null,postal_code:ae.postal_code,is_default:ae.is_default};try{if(Y?.id){let a;await (a=Y.id,(0,i.sessionFetch)(`/api/addresses/${a}`,{method:"PATCH",body:JSON.stringify(b)})),b.is_default&&await j(Y.id),ad("Address updated.")}else{let a=await (0,i.sessionFetch)("/api/addresses",{method:"POST",body:JSON.stringify(b)});b.is_default&&a?.id&&await j(a.id),ad("Address added.")}X(!1),await ag()}catch(a){ab(a instanceof Error?a.message:"Failed to save address.")}},aj=async a=>{ab(""),ad("");try{await j(a),ad("Default address updated."),await ag()}catch(a){ab(a instanceof Error?a.message:"Failed to set default address.")}},{primaryColor:ak,secondaryColor:al}=(0,S.useThemeColors)();return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(f.default,{primaryColor:ak,secondaryColor:al}),(0,b.jsx)(n,{children:(0,b.jsxs)(o,{children:[(0,b.jsx)(h.default,{}),(0,b.jsxs)(p,{children:[(0,b.jsx)(q,{children:"Shipping Information"}),(0,b.jsxs)(r,{onClick:()=>{Z(null),ab(""),ad(""),af({label:"",full_name:"",phone:"",country:"",city:"",street:"",apartment:"",postal_code:"",is_default:!1}),X(!0)},children:[(0,b.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,b.jsx)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),(0,b.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),"Add Address"]})]}),$?(0,b.jsx)(C,{children:(0,b.jsx)(E,{children:"Loading addresses..."})}):aa?(0,b.jsx)(C,{children:(0,b.jsx)(E,{children:aa})}):0===U.length?(0,b.jsxs)(C,{children:[(0,b.jsx)(D,{children:(0,b.jsxs)("svg",{width:"64",height:"64",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[(0,b.jsx)("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),(0,b.jsx)("circle",{cx:"12",cy:"10",r:"3"})]})}),(0,b.jsx)(E,{children:"No shipping addresses"}),(0,b.jsx)(E,{style:{fontSize:"0.9rem",color:"#666",marginTop:"0.5rem"},children:"Add your first shipping address to get started"})]}):(0,b.jsx)(s,{children:U.map(a=>(0,b.jsxs)(t,{children:[(0,b.jsxs)(u,{children:[(0,b.jsx)(v,{children:a.label||"Address"}),a.is_default&&(0,b.jsx)(w,{children:"Default"})]}),(0,b.jsxs)(x,{children:[(0,b.jsx)(y,{children:a.full_name}),(0,b.jsx)(y,{children:a.street}),a.apartment&&(0,b.jsx)(y,{children:a.apartment}),(0,b.jsxs)(y,{children:[a.city,", ",a.postal_code]}),(0,b.jsx)(y,{children:a.country}),(0,b.jsx)(y,{children:a.phone})]}),(0,b.jsxs)(z,{children:[(0,b.jsx)(A,{onClick:()=>{ab(""),ad(""),Z(a),af({label:a.label||"",full_name:a.full_name||"",phone:a.phone||"",country:a.country||"",city:a.city||"",street:a.street||"",apartment:a.apartment||"",postal_code:a.postal_code||"",is_default:a.is_default||!1}),X(!0)},children:"Edit"}),!a.is_default&&(0,b.jsx)(A,{onClick:()=>aj(a.id),children:"Set Default"}),(0,b.jsx)(B,{onClick:()=>ah(a.id),children:"Delete"})]})]},a.id))}),ac&&(0,b.jsx)(E,{style:{marginTop:"1rem"},children:ac})]})}),(0,b.jsx)(g.default,{}),W&&(0,b.jsx)(F,{onClick:()=>X(!1),children:(0,b.jsxs)(G,{onClick:a=>a.stopPropagation(),children:[(0,b.jsxs)(H,{children:[(0,b.jsx)(I,{children:Y?"Edit Address":"Add New Address"}),(0,b.jsx)(J,{onClick:()=>X(!1),children:(0,b.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,b.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,b.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),(0,b.jsxs)(K,{onSubmit:ai,children:[(0,b.jsxs)(L,{children:[(0,b.jsx)(M,{children:"Label (e.g., Home, Work)"}),(0,b.jsx)(N,{value:ae.label,onChange:a=>af({...ae,label:a.target.value}),placeholder:"Home",required:!0})]}),(0,b.jsxs)(L,{children:[(0,b.jsx)(M,{children:"Full Name"}),(0,b.jsx)(N,{value:ae.full_name,onChange:a=>af({...ae,full_name:a.target.value}),required:!0})]}),(0,b.jsxs)(L,{children:[(0,b.jsx)(M,{children:"Phone"}),(0,b.jsx)(N,{type:"tel",value:ae.phone,onChange:a=>af({...ae,phone:a.target.value}),required:!0})]}),(0,b.jsxs)(L,{children:[(0,b.jsx)(M,{children:"Country"}),(0,b.jsx)(N,{value:ae.country,onChange:a=>af({...ae,country:a.target.value}),required:!0})]}),(0,b.jsxs)(L,{children:[(0,b.jsx)(M,{children:"City"}),(0,b.jsx)(N,{value:ae.city,onChange:a=>af({...ae,city:a.target.value}),required:!0})]}),(0,b.jsxs)(L,{children:[(0,b.jsx)(M,{children:"Street Address"}),(0,b.jsx)(N,{value:ae.street,onChange:a=>af({...ae,street:a.target.value}),required:!0})]}),(0,b.jsxs)(L,{children:[(0,b.jsx)(M,{children:"Apartment/Suite (optional)"}),(0,b.jsx)(N,{value:ae.apartment,onChange:a=>af({...ae,apartment:a.target.value})})]}),(0,b.jsxs)(L,{children:[(0,b.jsx)(M,{children:"Postal Code"}),(0,b.jsx)(N,{value:ae.postal_code,onChange:a=>af({...ae,postal_code:a.target.value}),required:!0})]}),(0,b.jsx)(L,{children:(0,b.jsxs)(M,{children:[(0,b.jsx)("input",{type:"checkbox",checked:ae.is_default,onChange:a=>af({...ae,is_default:a.target.checked})}),"Set as default address"]})}),(0,b.jsxs)(O,{children:[(0,b.jsx)(P,{type:"submit",children:"Save"}),(0,b.jsx)(Q,{type:"button",onClick:()=>X(!1),children:"Cancel"})]})]})]})})]})}],37052)}];

//# sourceMappingURL=0b11f_jasmine_frontend_src_presentation_screen_shipping_ShippingScreen_tsx_0d54e031._.js.map