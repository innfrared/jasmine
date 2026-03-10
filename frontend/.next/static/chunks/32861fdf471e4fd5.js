(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,47875,(e,t,r)=>{"use strict";function a(e){let{widthInt:t,heightInt:r,blurWidth:a,blurHeight:i,blurDataURL:n,objectFit:o}=e,s=a?40*a:t,l=i?40*i:r,d=s&&l?`viewBox='0 0 ${s} ${l}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${d}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${d?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${n}'/%3E%3C/svg%3E`}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImageBlurSvg",{enumerable:!0,get:function(){return a}})},26369,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={VALID_LOADERS:function(){return n},imageConfigDefault:function(){return o}};for(var i in a)Object.defineProperty(r,i,{enumerable:!0,get:a[i]});let n=["default","imgix","cloudinary","akamai","custom"],o={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1}},7389,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImgProps",{enumerable:!0,get:function(){return d}}),e.r(27004);let a=e.r(86743),i=e.r(47875),n=e.r(26369),o=["-moz-initial","fill","none","scale-down",void 0];function s(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function d(e,t){var r;let d,c,u,{src:p,sizes:f,unoptimized:g=!1,priority:m=!1,preload:h=!1,loading:x,className:b,quality:y,width:w,height:v,fill:C=!1,style:_,overrideSrc:k,onLoad:I,onLoadingComplete:j,placeholder:N="empty",blurDataURL:S,fetchPriority:E,decoding:P="async",layout:$,objectFit:L,objectPosition:M,lazyBoundary:z,lazyRoot:O,...R}=e,{imgConf:H,showAltText:D,blurComplete:A,defaultLoader:T}=t,U=H||n.imageConfigDefault;if("allSizes"in U)d=U;else{let e=[...U.deviceSizes,...U.imageSizes].sort((e,t)=>e-t),t=U.deviceSizes.sort((e,t)=>e-t),r=U.qualities?.sort((e,t)=>e-t);d={...U,allSizes:e,deviceSizes:t,qualities:r}}if(void 0===T)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let B=R.loader||T;delete R.loader,delete R.srcSet;let Q="__next_img_default"in B;if(Q){if("custom"===d.loader)throw Object.defineProperty(Error(`Image with src "${p}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=B;B=t=>{let{config:r,...a}=t;return e(a)}}if($){"fill"===$&&(C=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[$];e&&(_={..._,...e});let t={responsive:"100vw",fill:"100vw"}[$];t&&!f&&(f=t)}let F="",W=l(w),Y=l(v);if((r=p)&&"object"==typeof r&&(s(r)||void 0!==r.src)){let e=s(p)?p.default:p;if(!e.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(e)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!e.height||!e.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(e)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(c=e.blurWidth,u=e.blurHeight,S=S||e.blurDataURL,F=e.src,!C)if(W||Y){if(W&&!Y){let t=W/e.width;Y=Math.round(e.height*t)}else if(!W&&Y){let t=Y/e.height;W=Math.round(e.width*t)}}else W=e.width,Y=e.height}let q=!m&&!h&&("lazy"===x||void 0===x);(!(p="string"==typeof p?p:F)||p.startsWith("data:")||p.startsWith("blob:"))&&(g=!0,q=!1),d.unoptimized&&(g=!0),Q&&!d.dangerouslyAllowSVG&&p.split("?",1)[0].endsWith(".svg")&&(g=!0);let X=l(y),J=Object.assign(C?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:L,objectPosition:M}:{},D?{}:{color:"transparent"},_),V=A||"empty"===N?null:"blur"===N?`url("data:image/svg+xml;charset=utf-8,${(0,i.getImageBlurSvg)({widthInt:W,heightInt:Y,blurWidth:c,blurHeight:u,blurDataURL:S||"",objectFit:J.objectFit})}")`:`url("${N}")`,K=o.includes(J.objectFit)?"fill"===J.objectFit?"100% 100%":"cover":J.objectFit,G=V?{backgroundSize:K,backgroundPosition:J.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},Z=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:o,sizes:s,loader:l}=e;if(i){let e=(0,a.getDeploymentId)();if(r.startsWith("/")&&!r.startsWith("//")&&e){let t=r.includes("?")?"&":"?";r=`${r}${t}dpl=${e}`}return{src:r,srcSet:void 0,sizes:void 0}}let{widths:d,kind:c}=function(e,t,r){let{deviceSizes:a,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let a;a=e.exec(r);)t.push(parseInt(a[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=a[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:a,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,n,s),u=d.length-1;return{sizes:s||"w"!==c?s:"100vw",srcSet:d.map((e,a)=>`${l({config:t,src:r,quality:o,width:e})} ${"w"===c?e:a+1}${c}`).join(", "),src:l({config:t,src:r,quality:o,width:d[u]})}}({config:d,src:p,unoptimized:g,width:W,quality:X,sizes:f,loader:B}),ee=q?"lazy":x;return{props:{...R,loading:ee,fetchPriority:E,width:W,height:Y,decoding:P,className:b,style:{...J,...G},sizes:Z.sizes,srcSet:Z.srcSet,src:k||Z.src},meta:{unoptimized:g,preload:h||m,placeholder:N,fill:C}}}},95860,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return s}});let a=e.r(26287),i="u"<typeof window,n=i?()=>{}:a.useLayoutEffect,o=i?()=>{}:a.useEffect;function s(e){let{headManager:t,reduceComponentsToState:r}=e;function s(){if(t&&t.mountedInstances){let e=a.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return i&&(t?.mountedInstances?.add(e.children),s()),n(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),n(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),o(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},52062,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={default:function(){return m},defaultHead:function(){return u}};for(var i in a)Object.defineProperty(r,i,{enumerable:!0,get:a[i]});let n=e.r(64825),o=e.r(80555),s=e.r(66339),l=o._(e.r(26287)),d=n._(e.r(95860)),c=e.r(80931);function u(){return[(0,s.jsx)("meta",{charSet:"utf-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(27004);let f=["name","httpEquiv","charSet","itemProp"];function g(e){let t,r,a,i;return e.reduce(p,[]).reverse().concat(u().reverse()).filter((t=new Set,r=new Set,a=new Set,i={},e=>{let n=!0,o=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){o=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?n=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?n=!1:r.add(e.type);break;case"meta":for(let t=0,r=f.length;t<r;t++){let r=f[t];if(e.props.hasOwnProperty(r))if("charSet"===r)a.has(r)?n=!1:a.add(r);else{let t=e.props[r],a=i[r]||new Set;("name"!==r||!o)&&a.has(t)?n=!1:(a.add(t),i[r]=a)}}}return n})).reverse().map((e,t)=>{let r=e.key||t;return l.default.cloneElement(e,{key:r})})}let m=function(e){let{children:t}=e,r=(0,l.useContext)(c.HeadManagerContext);return(0,s.jsx)(d.default,{reduceComponentsToState:g,headManager:r,children:t})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},27157,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ImageConfigContext",{enumerable:!0,get:function(){return n}});let a=e.r(64825)._(e.r(26287)),i=e.r(26369),n=a.default.createContext(i.imageConfigDefault)},11203,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RouterContext",{enumerable:!0,get:function(){return a}});let a=e.r(64825)._(e.r(26287)).default.createContext(null)},27662,(e,t,r)=>{"use strict";function a(e,t){let r=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,0):r}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"findClosestQuality",{enumerable:!0,get:function(){return a}})},87863,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return o}});let a=e.r(27662),i=e.r(86743);function n(e){let{config:t,src:r,width:n,quality:o}=e;if(r.startsWith("/")&&r.includes("?")&&t.localPatterns?.length===1&&"**"===t.localPatterns[0].pathname&&""===t.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${r}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let s=(0,a.findClosestQuality)(o,t),l=(0,i.getDeploymentId)();return`${t.path}?url=${encodeURIComponent(r)}&w=${n}&q=${s}${r.startsWith("/")&&l?`&dpl=${l}`:""}`}n.__next_img_default=!0;let o=n},7794,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return i}});let a=e.r(26287);function i(e,t){let r=(0,a.useRef)(null),i=(0,a.useRef)(null);return(0,a.useCallback)(a=>{if(null===a){let e=r.current;e&&(r.current=null,e());let t=i.current;t&&(i.current=null,t())}else e&&(r.current=n(e,a)),t&&(i.current=n(t,a))},[e,t])}function n(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},11300,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Image",{enumerable:!0,get:function(){return w}});let a=e.r(64825),i=e.r(80555),n=e.r(66339),o=i._(e.r(26287)),s=a._(e.r(30564)),l=a._(e.r(52062)),d=e.r(7389),c=e.r(26369),u=e.r(27157);e.r(27004);let p=e.r(11203),f=a._(e.r(87863)),g=e.r(7794),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e,t,r,a,i,n,o){let s=e?.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),r?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{a=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}a?.current&&a.current(e)}}))}function x(e){return o.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let b=(0,o.forwardRef)((e,t)=>{let{src:r,srcSet:a,sizes:i,height:s,width:l,decoding:d,className:c,style:u,fetchPriority:p,placeholder:f,loading:m,unoptimized:b,fill:y,onLoadRef:w,onLoadingCompleteRef:v,setBlurComplete:C,setShowAltText:_,sizesInput:k,onLoad:I,onError:j,...N}=e,S=(0,o.useCallback)(e=>{e&&(j&&(e.src=e.src),e.complete&&h(e,f,w,v,C,b,k))},[r,f,w,v,C,j,b,k]),E=(0,g.useMergedRef)(t,S);return(0,n.jsx)("img",{...N,...x(p),loading:m,width:l,height:s,decoding:d,"data-nimg":y?"fill":"1",className:c,style:u,sizes:i,srcSet:a,src:r,ref:E,onLoad:e=>{h(e.currentTarget,f,w,v,C,b,k)},onError:e=>{_(!0),"empty"!==f&&C(!0),j&&j(e)}})});function y(e){let{isAppRouter:t,imgAttributes:r}=e,a={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...x(r.fetchPriority)};return t&&s.default.preload?(s.default.preload(r.src,a),null):(0,n.jsx)(l.default,{children:(0,n.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...a},"__nimg-"+r.src+r.srcSet+r.sizes)})}let w=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(p.RouterContext),a=(0,o.useContext)(u.ImageConfigContext),i=(0,o.useMemo)(()=>{let e=m||a||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t),i=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r,qualities:i,localPatterns:"u"<typeof window?a?.localPatterns:e.localPatterns}},[a]),{onLoad:s,onLoadingComplete:l}=e,g=(0,o.useRef)(s);(0,o.useEffect)(()=>{g.current=s},[s]);let h=(0,o.useRef)(l);(0,o.useEffect)(()=>{h.current=l},[l]);let[x,w]=(0,o.useState)(!1),[v,C]=(0,o.useState)(!1),{props:_,meta:k}=(0,d.getImgProps)(e,{defaultLoader:f.default,imgConf:i,blurComplete:x,showAltText:v});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b,{..._,unoptimized:k.unoptimized,placeholder:k.placeholder,fill:k.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:w,setShowAltText:C,sizesInput:e.sizes,ref:t}),k.preload?(0,n.jsx)(y,{isAppRouter:!r,imgAttributes:_}):null]})});("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},20848,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={default:function(){return c},getImageProps:function(){return d}};for(var i in a)Object.defineProperty(r,i,{enumerable:!0,get:a[i]});let n=e.r(64825),o=e.r(7389),s=e.r(11300),l=n._(e.r(87863));function d(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let c=s.Image},274,(e,t,r)=>{t.exports=e.r(20848)},31203,59285,e=>{"use strict";var t=e.i(26287),r=e.i(44350);let a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.httpClient.get("categories/all/",e)},i=e=>({id:e.id,name:e.name,url:e.slug,subcategories:e.subcategories?.map(e=>({id:e.id,name:e.name,url:e.slug,parent_id:e.category_id}))||[]}),n=()=>{let[e,r]=(0,t.useState)([]),[n,o]=(0,t.useState)(!0),[s,l]=(0,t.useState)(null);return(0,t.useEffect)(()=>{let e=!0;return(async()=>{try{let t=await a();if(!e)return;r(t.map(i))}catch{if(!e)return;l("Failed to load categories")}finally{e&&o(!1)}})(),()=>{e=!1}},[]),{categories:e,loading:n,error:s}};e.s(["useCategories",0,n],59285),e.s(["useHeaderModel",0,()=>{let{categories:e,loading:t,error:r}=n();return{categories:e,loading:t,error:r}}],31203)},98803,e=>{"use strict";var t=e.i(44350),r=e.i(9367);e.s(["getImageUrl",0,e=>{let a;if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;if(e.startsWith("assets/")||e.startsWith("/assets/"))return e.startsWith("/")?e:`/${e}`;let i=(a=r.default.env.NEXT_PUBLIC_MEDIA_BASE_URL||r.default.env.NEXT_PUBLIC_ASSET_BASE_URL||"")?a.replace(/\/+$/,""):(0,t.getApiBaseUrl)().replace(/\/api\/?$/,""),n=e.startsWith("/")?e:`/${e}`;return`${i}${n}`}])},94869,e=>{"use strict";var t=e.i(72902);let r=t.keyframes`
  from {
    opacity: 0;
    transform: translateY(-12px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,a=t.keyframes`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-12px) scale(0.96);
  }
`,i=t.keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,n=t.default.div.withConfig({displayName:"CartModal.styles__CartModalContainer",componentId:"sc-f30acc63-0"})`
  position: absolute;
  top: calc(100% + 0.75rem);
  right: 0;
  background: white;
  border-radius: 10px;
  width: 420px;
  max-width: calc(100vw - 2rem);
  max-height: 500px;
  display: flex;
  flex-direction: column;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.08),
    0 2px 8px rgba(0, 0, 0, 0.04);
  z-index: 10001;
  animation: ${e=>{let{$isClosing:t}=e;return t?a:r}}
    0.3s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
  will-change: transform, opacity;

  @media (max-width: 768px) {
    right: 1rem;
    width: calc(100vw - 2rem);
    max-width: 420px;
    max-height: 70vh;
    border-radius: 8px;
  }
`,o=t.default.div.withConfig({displayName:"CartModal.styles__CartModalHeader",componentId:"sc-f30acc63-1"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  animation: ${i} 0.3s ease-out 0.1s both;
`,s=t.default.h2.withConfig({displayName:"CartModal.styles__CartModalTitle",componentId:"sc-f30acc63-2"})`
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  color: #1a1a1a;
  font-family: 'Questrial', sans-serif;
  letter-spacing: -0.1px;
`,l=t.default.button.withConfig({displayName:"CartModal.styles__CloseButton",componentId:"sc-f30acc63-3"})`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &:hover {
    background: rgba(0, 0, 0, 0.06);
    color: #1a1a1a;
    transform: rotate(90deg);
  }

  &:active {
    transform: rotate(90deg) scale(0.95);
  }

  svg {
    display: block;
    transition: transform 0.2s ease;
  }
`,d=t.default.div.withConfig({displayName:"CartModal.styles__CartItemsList",componentId:"sc-f30acc63-4"})`
  flex: 1;
  overflow-y: auto;
  padding: 0.25rem 0;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.15) transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`,c=t.default.div.withConfig({displayName:"CartModal.styles__CartItem",componentId:"sc-f30acc63-5"})`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding: 0.875rem 1.25rem;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    background: rgba(212, 175, 55, 0.02);
  }
`,u=t.default.div.withConfig({displayName:"CartModal.styles__CartItemImage",componentId:"sc-f30acc63-6"})`
  width: 56px;
  height: 56px;
  border-radius: 8px;
  background: #f5f5f5;
  flex-shrink: 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease;
  position: relative;
  overflow: hidden;

  img {
    object-fit: cover;
  }

  ${c}:hover & {
    transform: scale(1.03);
  }
`,p=t.default.div.withConfig({displayName:"CartModal.styles__CartItemDetails",componentId:"sc-f30acc63-7"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,f=t.default.div.withConfig({displayName:"CartModal.styles__CartItemName",componentId:"sc-f30acc63-8"})`
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
`,g=t.default.div.withConfig({displayName:"CartModal.styles__CartItemPrice",componentId:"sc-f30acc63-9"})`
  font-size: 0.875rem;
  color: #666;
  font-weight: 500;
  font-family: 'Questrial', sans-serif;
`,m=t.default.div.withConfig({displayName:"CartModal.styles__CartItemBagId",componentId:"sc-f30acc63-10"})`
  font-size: 0.75rem;
  color: #999;
  font-weight: 400;
  font-family: 'Questrial', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,h=t.default.div.withConfig({displayName:"CartModal.styles__CartItemQuantity",componentId:"sc-f30acc63-11"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #666;
  font-family: 'Questrial', sans-serif;

  span:last-child {
    font-weight: 500;
    color: #1a1a1a;
  }
`,x=t.default.div.withConfig({displayName:"CartModal.styles__QuantityControls",componentId:"sc-f30acc63-12"})`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 0.25rem;
`,b=t.default.button.withConfig({displayName:"CartModal.styles__QuantityButton",componentId:"sc-f30acc63-13"})`
  background: none;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 1.2rem;
  font-weight: 400;
  border-radius: 4px;
  transition: all 0.2s ease;
  line-height: 1;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    color: #1a1a1a;
  }

  &:active {
    transform: scale(0.95);
  }
`,y=t.default.input.withConfig({displayName:"CartModal.styles__QuantityInput",componentId:"sc-f30acc63-14"})`
  width: 40px;
  text-align: center;
  border: none;
  background: none;
  font-size: 0.875rem;
  font-weight: 500;
  color: #1a1a1a;
  font-family: 'Questrial', sans-serif;
  padding: 0.25rem;
  outline: none;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  -moz-appearance: textfield;
`,w=t.default.button.withConfig({displayName:"CartModal.styles__CartItemRemove",componentId:"sc-f30acc63-15"})`
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

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    color: #cc0c5c;
    opacity: 1;
  }

  svg {
    display: block;
  }
`,v=t.default.div.withConfig({displayName:"CartModal.styles__CartFooter",componentId:"sc-f30acc63-16"})`
  padding: 1.25rem 1.25rem;
  border-top: 1px solid rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
`,C=t.default.div.withConfig({displayName:"CartModal.styles__CartTotal",componentId:"sc-f30acc63-17"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  color: #1a1a1a;
  font-family: 'Questrial', sans-serif;

  span:last-child {
    font-weight: 600;
  }
`,_=t.default.button.withConfig({displayName:"CartModal.styles__CheckoutButton",componentId:"sc-f30acc63-18"})`
  width: 100%;
  padding: 0.875rem 1.25rem;
  background: #1a1a1a;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: 'Questrial', sans-serif;
  letter-spacing: 0.2px;

  &:hover {
    background: #2a2a2a;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
`,k=t.default.div.withConfig({displayName:"CartModal.styles__EmptyCartMessage",componentId:"sc-f30acc63-19"})`
  padding: 3rem 1.5rem;
  text-align: center;
  color: #999;
  font-size: 0.95rem;
  font-family: 'Questrial', sans-serif;
`;e.s(["CartFooter",0,v,"CartItem",0,c,"CartItemBagId",0,m,"CartItemDetails",0,p,"CartItemImage",0,u,"CartItemName",0,f,"CartItemPrice",0,g,"CartItemQuantity",0,h,"CartItemRemove",0,w,"CartItemsList",0,d,"CartModalContainer",0,n,"CartModalHeader",0,o,"CartModalTitle",0,s,"CartTotal",0,C,"CheckoutButton",0,_,"CloseButton",0,l,"EmptyCartMessage",0,k,"QuantityButton",0,b,"QuantityControls",0,x,"QuantityInput",0,y])},94387,e=>{"use strict";let t=e=>e.toLowerCase().trim().replace(/['"]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");e.s(["buildProductSlug",0,(e,r)=>{let a=t(e);return`${a||"product"}-${r}`},"getProductIdFromSlug",0,e=>{if(!e)return null;let t=e.match(/-(\d+)$/);if(!t)return null;let r=Number(t[1]);return Number.isFinite(r)?r:null},"slugify",0,t])},8513,(e,t,r)=>{t.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},16460,55062,3157,e=>{"use strict";let t;var r=e.i(66339),a=e.i(26287),i=e.i(53805),n=e.i(31203),o=e.i(20512),s=e.i(49906),l=e.i(274),d=e.i(98803),c=e.i(94869);e.i(9492);var u=e.i(93916),p=e.i(94387);let f=e=>{let{isOpen:t,onClose:n,isScrolled:o}=e,[s,f]=(0,a.useState)([]),[g,m]=(0,a.useState)(!1),h=(0,i.useRouter)(),x=(0,i.useParams)(),b=(0,u.normalizeLocale)(x?.locale),y=(0,a.useRef)(null);(0,a.useEffect)(()=>{t&&m(!1)},[t]),(0,a.useEffect)(()=>{let e=()=>{let e=localStorage.getItem("cartProducts");if(e)try{var t;let r,a=JSON.parse(e),i=(t=a,Array.isArray(t)?t.length>0&&(r=t[0])&&"object"==typeof r&&"bagId"in r&&"product"in r?t:t.map((e,t)=>({bagId:`bag-${Date.now()}-${t}-${e.id}`,product:e,quantity:1})):[]);f(i),i.length>0&&!a[0]?.bagId&&localStorage.setItem("cartProducts",JSON.stringify(i))}catch{f([])}else f([])};return e(),window.addEventListener("storage",e),window.addEventListener("cartUpdated",e),()=>{window.removeEventListener("storage",e),window.removeEventListener("cartUpdated",e)}},[]);let w=(0,a.useCallback)(()=>{m(!0),setTimeout(()=>{m(!1),n()},300)},[n]);(0,a.useEffect)(()=>{if(!t)return;let e=e=>{y.current&&!y.current.contains(e.target)&&w()};return window.addEventListener("mousedown",e),()=>window.removeEventListener("mousedown",e)},[t,w]);let v=(e,t,r)=>{if(r&&r.stopPropagation(),t<1)return;let a=s.map(r=>r.bagId===e?{...r,quantity:t}:r);f(a),localStorage.setItem("cartProducts",JSON.stringify(a)),window.dispatchEvent(new Event("cartUpdated"))};return t||g?(0,r.jsxs)(c.CartModalContainer,{ref:y,$isScrolled:o,$isClosing:g,children:[(0,r.jsxs)(c.CartModalHeader,{children:[(0,r.jsxs)(c.CartModalTitle,{children:["Cart (",s.reduce((e,t)=>e+t.quantity,0),")"]}),(0,r.jsx)(c.CloseButton,{onClick:w,"aria-label":"Close cart",children:(0,r.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,r.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,r.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),0===s.length?(0,r.jsx)(c.EmptyCartMessage,{children:"Your cart is empty"}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.CartItemsList,{children:s.map(e=>{let t=e.product,a=(parseFloat((t.price_new||t.price).replace(/[^\d.-]/g,""))||0)*e.quantity;return(0,r.jsxs)(c.CartItem,{onClick:()=>{h.push((0,u.withLocale)(b,`/product/${(0,p.buildProductSlug)(t.name,t.id)}`)),n()},children:[(0,r.jsx)(c.CartItemImage,{children:(0,r.jsx)(l.default,{src:(0,d.getImageUrl)(t.variant_image)||"/assets/logo.png",alt:t.name,fill:!0,sizes:"56px"})}),(0,r.jsxs)(c.CartItemDetails,{children:[(0,r.jsxs)(c.CartItemBagId,{children:["ID: ",e.bagId.split("-").slice(-2).join("-")]}),(0,r.jsx)(c.CartItemName,{children:t.name}),(0,r.jsx)(c.CartItemPrice,{children:t.price_new||t.price}),(0,r.jsxs)(c.CartItemQuantity,{children:[(0,r.jsxs)(c.QuantityControls,{onClick:e=>e.stopPropagation(),children:[(0,r.jsx)(c.QuantityButton,{onClick:t=>v(e.bagId,e.quantity-1,t),"aria-label":"Decrease quantity",children:"−"}),(0,r.jsx)(c.QuantityInput,{type:"number",min:"1",value:e.quantity,onChange:t=>{let r=parseInt(t.target.value)||1;v(e.bagId,r)},onClick:e=>e.stopPropagation()}),(0,r.jsx)(c.QuantityButton,{onClick:t=>v(e.bagId,e.quantity+1,t),"aria-label":"Increase quantity",children:"+"})]}),(0,r.jsxs)("span",{children:["Total: ",`${a.toLocaleString()} ֏`]})]})]}),(0,r.jsx)(c.CartItemRemove,{onClick:t=>{var r;let a;return r=e.bagId,t.stopPropagation(),void(f(a=s.filter(e=>e.bagId!==r)),localStorage.setItem("cartProducts",JSON.stringify(a)),window.dispatchEvent(new Event("cartUpdated")))},"aria-label":"Remove item",children:(0,r.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,r.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,r.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]},e.bagId)})}),(0,r.jsxs)(c.CartFooter,{children:[(0,r.jsxs)(c.CartTotal,{children:[(0,r.jsx)("span",{children:"Total:"}),(0,r.jsx)("span",{children:`${s.reduce((e,t)=>e+(parseFloat((t.product.price_new||t.product.price).replace(/[^\d.-]/g,""))||0)*t.quantity,0).toLocaleString()} ֏`})]}),(0,r.jsx)(c.CheckoutButton,{onClick:()=>{w(),setTimeout(()=>h.push((0,u.withLocale)(b,"/cart")),300)},children:"Checkout"})]})]})]}):null};var g=e.i(72902);let m=g.keyframes`
  from {
    opacity: 0;
    transform: translateY(-12px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,h=g.keyframes`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-12px) scale(0.96);
  }
`,x=g.keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,b=g.default.div.withConfig({displayName:"LikedModal.styles__LikedModalContainer",componentId:"sc-228d9fba-0"})`
  position: absolute;
  top: calc(100% + 0.75rem);
  right: 0;
  background: white;
  border-radius: 10px;
  width: 420px;
  max-width: calc(100vw - 2rem);
  max-height: 500px;
  display: flex;
  flex-direction: column;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.08),
    0 2px 8px rgba(0, 0, 0, 0.04);
  z-index: 10001;
  animation: ${e=>{let{$isClosing:t}=e;return t?h:m}}
    0.3s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
  will-change: transform, opacity;

  @media (max-width: 768px) {
    right: 1rem;
    width: calc(100vw - 2rem);
    max-width: 420px;
    max-height: 70vh;
    border-radius: 8px;
  }
`,y=g.default.div.withConfig({displayName:"LikedModal.styles__LikedModalHeader",componentId:"sc-228d9fba-1"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  animation: ${x} 0.3s ease-out 0.1s both;
`,w=g.default.h2.withConfig({displayName:"LikedModal.styles__LikedModalTitle",componentId:"sc-228d9fba-2"})`
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  color: #1a1a1a;
  font-family: 'Questrial', sans-serif;
  letter-spacing: -0.1px;
`,v=g.default.button.withConfig({displayName:"LikedModal.styles__CloseButton",componentId:"sc-228d9fba-3"})`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &:hover {
    background: rgba(0, 0, 0, 0.06);
    color: #1a1a1a;
    transform: rotate(90deg);
  }

  &:active {
    transform: rotate(90deg) scale(0.95);
  }

  svg {
    display: block;
    transition: transform 0.2s ease;
  }
`,C=g.default.div.withConfig({displayName:"LikedModal.styles__LikedItemsList",componentId:"sc-228d9fba-4"})`
  flex: 1;
  overflow-y: auto;
  padding: 0.25rem 0;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.15) transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`,_=g.default.div.withConfig({displayName:"LikedModal.styles__LikedItem",componentId:"sc-228d9fba-5"})`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding: 0.875rem 1.25rem;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    background: rgba(204, 12, 92, 0.02);
  }
`,k=g.default.div.withConfig({displayName:"LikedModal.styles__LikedItemImage",componentId:"sc-228d9fba-6"})`
  width: 56px;
  height: 56px;
  border-radius: 8px;
  background: #f5f5f5;
  flex-shrink: 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease;
  position: relative;
  overflow: hidden;

  img {
    object-fit: cover;
  }

  ${_}:hover & {
    transform: scale(1.03);
  }
`,I=g.default.div.withConfig({displayName:"LikedModal.styles__LikedItemDetails",componentId:"sc-228d9fba-7"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,j=g.default.div.withConfig({displayName:"LikedModal.styles__LikedItemName",componentId:"sc-228d9fba-8"})`
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
`,N=g.default.div.withConfig({displayName:"LikedModal.styles__LikedItemPrice",componentId:"sc-228d9fba-9"})`
  font-size: 0.875rem;
  color: #666;
  font-weight: 500;
  font-family: 'Questrial', sans-serif;
`,S=g.default.div.withConfig({displayName:"LikedModal.styles__LikedItemActions",componentId:"sc-228d9fba-10"})`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  margin-left: auto;
`,E=g.default.button.withConfig({displayName:"LikedModal.styles__LikedItemCartButton",componentId:"sc-228d9fba-11"})`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: ${e=>{let{$inCart:t}=e;return t?"#cc0c5c":"#999"}};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.2s ease;
  opacity: ${e=>{let{$inCart:t}=e;return t?1:.6}};

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    color: ${e=>{let{$inCart:t}=e;return t?"#cc0c5c":"#d4af37"}};
    opacity: 1;
  }

  svg {
    display: block;
  }
`,P=g.default.button.withConfig({displayName:"LikedModal.styles__LikedItemRemove",componentId:"sc-228d9fba-12"})`
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
  opacity: 0.6;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    color: #cc0c5c;
    opacity: 1;
  }

  svg {
    display: block;
  }
`,$=g.default.div.withConfig({displayName:"LikedModal.styles__EmptyLikedMessage",componentId:"sc-228d9fba-13"})`
  padding: 3rem 1.5rem;
  text-align: center;
  color: #999;
  font-size: 0.95rem;
  font-family: 'Questrial', sans-serif;
`,L=e=>{let{isOpen:t,onClose:n,isScrolled:o}=e,[s,c]=(0,a.useState)([]),[f,g]=(0,a.useState)([]),[m,h]=(0,a.useState)(!1),x=(0,i.useRouter)(),L=(0,i.useParams)(),M=(0,u.normalizeLocale)(L?.locale),z=(0,a.useRef)(null);(0,a.useEffect)(()=>{t&&h(!1)},[t]),(0,a.useEffect)(()=>{let e=()=>{let e=localStorage.getItem("likedProducts");if(e)try{let t=JSON.parse(e);c(Array.isArray(t)?t:[])}catch{c([])}else c([])},t=()=>{let e=localStorage.getItem("cartProducts");if(e)try{let t=JSON.parse(e);Array.isArray(t)&&t.length>0&&t[0].bagId?g(t):g(t.map((e,t)=>({bagId:`bag-${Date.now()}-${t}-${e.id}`,product:e,quantity:1})))}catch{g([])}else g([])};return e(),t(),window.addEventListener("storage",e),window.addEventListener("likedUpdated",e),window.addEventListener("storage",t),window.addEventListener("cartUpdated",t),()=>{window.removeEventListener("storage",e),window.removeEventListener("likedUpdated",e),window.removeEventListener("storage",t),window.removeEventListener("cartUpdated",t)}},[]);let O=(0,a.useCallback)(()=>{h(!0),setTimeout(()=>{h(!1),n()},300)},[n]);return((0,a.useEffect)(()=>{if(!t)return;let e=e=>{z.current&&!z.current.contains(e.target)&&O()};return window.addEventListener("mousedown",e),()=>window.removeEventListener("mousedown",e)},[t,O]),t||m)?(0,r.jsxs)(b,{ref:z,$isScrolled:o,$isClosing:m,children:[(0,r.jsxs)(y,{children:[(0,r.jsxs)(w,{children:["Liked (",s.length,")"]}),(0,r.jsx)(v,{onClick:O,"aria-label":"Close liked",children:(0,r.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,r.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,r.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),0===s.length?(0,r.jsx)($,{children:"You haven't liked any products yet"}):(0,r.jsx)(C,{children:s.map(e=>{let t,a=(t=e.id,f.some(e=>e.product.id===t));return(0,r.jsxs)(_,{onClick:()=>{O(),setTimeout(()=>{x.push((0,u.withLocale)(M,`/product/${(0,p.buildProductSlug)(e.name,e.id)}`))},300)},children:[(0,r.jsx)(k,{children:(0,r.jsx)(l.default,{src:(0,d.getImageUrl)(e.variant_image)||"/assets/logo.png",alt:e.name,fill:!0,sizes:"56px"})}),(0,r.jsxs)(I,{children:[(0,r.jsx)(j,{children:e.name}),(0,r.jsx)(N,{children:e.price_new||e.price})]}),(0,r.jsxs)(S,{children:[(0,r.jsx)(E,{onClick:t=>((e,t)=>{t.stopPropagation();let r=localStorage.getItem("cartProducts"),a=[];if(r)try{let e=JSON.parse(r);a=Array.isArray(e)&&e.length>0&&e[0].bagId?e:e.map((e,t)=>({bagId:`bag-${Date.now()}-${t}-${e.id}`,product:e,quantity:1}))}catch{a=[]}let i=a.find(t=>t.product.id===e.id);if(i){let e=a.filter(e=>e.bagId!==i.bagId);localStorage.setItem("cartProducts",JSON.stringify(e))}else{let t={bagId:`bag-${Date.now()}-${e.id}`,product:e,quantity:1};a.push(t),localStorage.setItem("cartProducts",JSON.stringify(a))}window.dispatchEvent(new Event("cartUpdated"))})(e,t),"aria-label":a?"Remove from cart":"Add to cart",$inCart:a,children:a?(0,r.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,r.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,r.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}):(0,r.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,r.jsx)("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),(0,r.jsx)("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),(0,r.jsx)("path",{d:"M16 10a4 4 0 0 1-8 0"})]})}),(0,r.jsx)(P,{onClick:t=>{var r;let a;return r=e.id,t.stopPropagation(),void(c(a=s.filter(e=>e.id!==r)),localStorage.setItem("likedProducts",JSON.stringify(a)),window.dispatchEvent(new Event("likedUpdated")))},"aria-label":"Remove from liked",children:(0,r.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,r.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,r.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]})]},e.id)})})]}):null};var M=e.i(69650);let z=g.keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,O=g.default.div.withConfig({displayName:"ProfileCard.styles__ProfileCardContainer",componentId:"sc-a59aa6b4-0"})`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  min-width: 280px;
  padding: 0;
  z-index: 10001;
  animation: ${z} 0.2s ease-out;
  border: 1px solid rgba(0, 0, 0, 0.08);
  overflow: hidden;
  font-family: 'Questrial', sans-serif;

  @media (max-width: 768px) {
    right: 0;
    left: auto;
    min-width: 260px;
  }
`,R=g.default.div.withConfig({displayName:"ProfileCard.styles__ProfileHeader",componentId:"sc-a59aa6b4-1"})`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f5f5f5;
  }
`,H=g.default.div.withConfig({displayName:"ProfileCard.styles__ProfileIcon",componentId:"sc-a59aa6b4-2"})`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #001f3f 0%, #003366 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 600;
  flex-shrink: 0;
  font-family: 'Questrial', sans-serif;
`,D=g.default.div.withConfig({displayName:"ProfileCard.styles__ProfileInfo",componentId:"sc-a59aa6b4-3"})`
  flex: 1;
  min-width: 0;
`,A=g.default.div.withConfig({displayName:"ProfileCard.styles__ProfileName",componentId:"sc-a59aa6b4-4"})`
  font-size: 0.95rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'Questrial', sans-serif;
`,T=g.default.div.withConfig({displayName:"ProfileCard.styles__ProfileEmail",componentId:"sc-a59aa6b4-5"})`
  font-size: 0.85rem;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'Questrial', sans-serif;
`,U=g.default.div.withConfig({displayName:"ProfileCard.styles__ProfileArrow",componentId:"sc-a59aa6b4-6"})`
  color: #999;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  transition: transform 0.2s ease;

  ${R}:hover & {
    transform: translateX(4px);
    color: #001f3f;
  }
`,B=g.default.div.withConfig({displayName:"ProfileCard.styles__ProfileMenuDivider",componentId:"sc-a59aa6b4-7"})`
  height: 1px;
  background: #e0e0e0;
  margin: 0.5rem 0;
`,Q=g.default.button.withConfig({displayName:"ProfileCard.styles__ProfileMenuItem",componentId:"sc-a59aa6b4-8"})`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #1a1a1a;
  font-size: 0.95rem;
  font-weight: 500;
  font-family: 'Questrial', sans-serif;
  border-radius: 0;
  transition: all 0.2s ease;
  text-align: left;

  &:hover {
    background: #f5f5f5;
    color: #001f3f;
  }

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    color: #666;
    transition: color 0.2s ease;
  }

  &:hover svg {
    color: #001f3f;
  }

  span {
    flex: 1;
  }
`,F=g.default.button.withConfig({displayName:"ProfileCard.styles__LogoutButton",componentId:"sc-a59aa6b4-9"})`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #cc0c5c;
  font-size: 0.95rem;
  font-weight: 500;
  font-family: 'Questrial', sans-serif;
  border-radius: 0;
  transition: all 0.2s ease;
  text-align: left;

  &:hover {
    background: #fee;
    color: #cc0c5c;
  }

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    transition: color 0.2s ease;
  }

  &:hover svg {
    color: #cc0c5c;
  }

  span {
    flex: 1;
  }
`,W=g.default.div.withConfig({displayName:"ProfileCard.styles__NotLoggedInMessage",componentId:"sc-a59aa6b4-10"})`
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin: 0;
  padding: 1rem;
  font-family: 'Questrial', sans-serif;
`,Y=g.default.button.withConfig({displayName:"ProfileCard.styles__LoginSignupButton",componentId:"sc-a59aa6b4-11"})`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #1a1a1a;
  font-size: 0.95rem;
  font-weight: 500;
  font-family: 'Questrial', sans-serif;
  border-radius: 0;
  transition: all 0.2s ease;
  text-align: left;

  &:hover {
    background: #f5f5f5;
    color: #001f3f;
  }

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    color: #666;
    transition: color 0.2s ease;
  }

  &:hover svg {
    color: #001f3f;
  }

  span {
    flex: 1;
  }
`,q=e=>{let{onClose:t,isScrolled:a,onOpenLogin:n,onOpenRegister:o}=e,{user:s,logout:l,isAuthenticated:d}=(0,M.useAuth)(),c=(0,i.useRouter)(),p=(0,i.useParams)(),f=(0,u.normalizeLocale)(p?.locale);if(!d||!s)return(0,r.jsxs)(O,{$isScrolled:a,children:[(0,r.jsx)(W,{children:"You are not logged in"}),(0,r.jsx)(B,{}),(0,r.jsxs)(Y,{onClick:()=>{t(),n()},children:[(0,r.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,r.jsx)("path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}),(0,r.jsx)("polyline",{points:"10 17 15 12 10 7"}),(0,r.jsx)("line",{x1:"15",y1:"12",x2:"3",y2:"12"})]}),(0,r.jsx)("span",{children:"Login"})]}),(0,r.jsxs)(Y,{onClick:()=>{t(),o()},children:[(0,r.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,r.jsx)("path",{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),(0,r.jsx)("circle",{cx:"8.5",cy:"7",r:"4"}),(0,r.jsx)("line",{x1:"20",y1:"8",x2:"20",y2:"14"}),(0,r.jsx)("line",{x1:"23",y1:"11",x2:"17",y2:"11"})]}),(0,r.jsx)("span",{children:"Sign Up"})]})]});let g=s.first_name||s.last_name?`${s.first_name||""} ${s.last_name||""}`.trim():"User";return(0,r.jsxs)(O,{$isScrolled:a,children:[(0,r.jsxs)(R,{onClick:()=>{t(),c.push((0,u.withLocale)(f,"/profile"))},children:[(0,r.jsx)(H,{children:s.first_name&&s.last_name?`${s.first_name[0]}${s.last_name[0]}`.toUpperCase():s.first_name?s.first_name[0].toUpperCase():s.email?s.email[0].toUpperCase():"U"}),(0,r.jsxs)(D,{children:[(0,r.jsx)(A,{children:g}),(0,r.jsx)(T,{children:s.email})]}),(0,r.jsx)(U,{children:(0,r.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("polyline",{points:"9 18 15 12 9 6"})})})]}),(0,r.jsx)(B,{}),(0,r.jsxs)(Q,{onClick:()=>{t(),c.push((0,u.withLocale)(f,"/orders"))},children:[(0,r.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,r.jsx)("path",{d:"M9 11l3 3L22 4"}),(0,r.jsx)("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"})]}),(0,r.jsx)("span",{children:"Order History"})]}),(0,r.jsxs)(Q,{onClick:()=>{t(),c.push((0,u.withLocale)(f,"/shipping"))},children:[(0,r.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,r.jsx)("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),(0,r.jsx)("circle",{cx:"12",cy:"10",r:"3"})]}),(0,r.jsx)("span",{children:"Shipping Information"})]}),(0,r.jsx)(B,{}),(0,r.jsxs)(F,{onClick:()=>{l(),t(),c.push((0,u.withLocale)(f,"/"))},children:[(0,r.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,r.jsx)("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),(0,r.jsx)("polyline",{points:"16 17 21 12 16 7"}),(0,r.jsx)("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),(0,r.jsx)("span",{children:"Logout"})]})]})},X=g.default.div.withConfig({displayName:"Header.styles__HeaderContainer",componentId:"sc-23b81648-0"})`
  width: 100%;
  background-color: ${e=>{let{$isScrolled:t}=e;return t?"#ffffff":"transparent"}};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  transition: background-color 0.3s ease-in-out;
  overflow: visible;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`,J=g.keyframes`
  0% {
    top: 30vh;
    width: 40vw;
    transform: translateX(-50%) scale(1);;
    opacity: 1;
  }
  100% {
    top: ${1.5}vh;
    width: 120px;
    transform: translateX(-50%) scale(1);
    opacity: 1;
  }
`,V=g.keyframes`
  0% {
    top: ${1.5}vh;
    width: 120px;
    transform: translateX(-50%);
    opacity: 1;
  }
  100% {
    top: 30vh;
    width: 40vw;
    transform: translateX(-50%);
    opacity: 1;
  }
`,K=g.keyframes`
  0% {
    top: 30vh;
    width: 70vw;
    transform: translateX(-50%);
    opacity: 1;
  }
  100% {
    top: ${1.5}vh;
    width: 20vw;
    transform: translateX(-50%);
    opacity: 1;
  }
`,G=g.keyframes`
  0% {
    top: ${1.5}vh;
    width: 20vw;
    transform: translateX(-50%);
    opacity: 1;
  }
  100% {
    top: 30vh;
    width: 70vw;
    transform: translateX(-50%);
    opacity: 1;
  }
`,Z=g.default.div.withConfig({displayName:"Header.styles__AnimatedLogoWrapper",componentId:"sc-23b81648-1"})`
  left: 50%;
  pointer-events: none;
  z-index: 9999;
  color: ${e=>{let{$phase:t}=e;return"done"===t||"animating-out"===t?"#9A8300":"#ffffff"}};
  transition: color 0.5s ease;
  transform-origin: top center;

  & img {
    width: 100%;
    height: auto;
    display: block;
  }

  ${e=>{let{$phase:t}=e;switch(t){case"idle":return g.css`
          position: fixed;
          top: 30vh;
          width: 40vw;
          transform: translateX(-50%);
          opacity: 1;

          @media (max-width: 768px) {
            width: 70vw;
          }
        `;case"animating-out":return g.css`
          position: fixed;
          animation: ${J} 0.5s ease forwards;

          @media (max-width: 768px) {
            animation: ${K} 0.5s ease forwards;
          }
        `;case"animating-in":return g.css`
          position: fixed;
          animation: ${V} 0.5s ease forwards;

          @media (max-width: 768px) {
            animation: ${G} 0.5s ease forwards;
          }
        `;case"done":return g.css`
          position: fixed;
          top: 33%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120px;
          z-index: 2;

          @media (max-width: 768px) {
            width: 20vw;
          }
        `}}}
`,ee=g.default.div.withConfig({displayName:"Header.styles__HeaderMainContainer",componentId:"sc-23b81648-2"})`
  display: flex;
  flex-direction: row;
  width: 75vw;
  justify-content: space-between;
  min-height: 80px;
  align-items: center;
`,et=g.default.div.withConfig({displayName:"Header.styles__HeaderLogo",componentId:"sc-23b81648-3"})`
  position: relative;
  overflow: visible;
  width: 120px;
  height: 60px;
  cursor: pointer;
  margin-left: 0;
`,er=g.default.div.withConfig({displayName:"Header.styles__HeaderDetails",componentId:"sc-23b81648-4"})`
  display: flex;
  align-items: center;
  gap: 5px;
`,ea=g.default.div.withConfig({displayName:"Header.styles__HeaderActions",componentId:"sc-23b81648-5"})`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;g.default.div.withConfig({displayName:"Header.styles__CategoryContainer",componentId:"sc-23b81648-6"})`
  border-radius: 10px;
  mix-blend-mode: luminosity;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${e=>{let{open:t}=e;return t&&g.css`
      background-color: #e3e3e3;
    `}}

  &:hover {
    background-color: #e3e3e3;
  }
`,g.default.p.withConfig({displayName:"Header.styles__CategoryText",componentId:"sc-23b81648-7"})`
  margin: 0 10px 0 5px;

  @media (max-width: 480px) {
    display: none;
  }
`,g.default.button.withConfig({displayName:"Header.styles__MenuIcon",componentId:"sc-23b81648-8"})`
  width: 32px;
  height: 32px;
  padding: 4px 5px;
  border: none;
  border-radius: 5px;
  background: none;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    display: block;
    width: 100%;
    height: 0.125rem;
    border-radius: 2px;
    background-color: black;
    position: relative;
    transition: all 0.4s ease;
  }

  span + span {
    margin-top: 0.375rem;
  }
`,g.default.div.withConfig({displayName:"Header.styles__SearchContent",componentId:"sc-23b81648-9"})`
  border-radius: 0 0 10px 10px;
  z-index: 1000;
  overflow: hidden;
  max-height: ${e=>{let{visible:t}=e;return t?"600px":"0"}};
  opacity: ${e=>{let{visible:t}=e;return+!!t}};
  transition:
    max-height 0.5s ease,
    opacity 0.5s ease;
  padding: ${e=>{let{visible:t}=e;return t?"15px":"0"}};
`,g.default.div.withConfig({displayName:"Header.styles__CatalogContent",componentId:"sc-23b81648-10"})`
  border-radius: 0 0 10px 10px;
  z-index: 1000;
  overflow: hidden;
  max-height: ${e=>{let{visible:t}=e;return t?"600px":"0"}};
  opacity: ${e=>{let{visible:t}=e;return+!!t}};
  transition:
    max-height 0.5s ease,
    opacity 0.5s ease;
  padding: ${e=>{let{visible:t}=e;return t?"15px":"0"}};
  display: ${e=>{let{visible:t}=e;return t?"flex":"none"}};
`,g.default.div.withConfig({displayName:"Header.styles__SearchBar",componentId:"sc-23b81648-11"})`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin-bottom: 10px;
  position: relative;
`,g.default.svg.withConfig({displayName:"Header.styles__SearchIconLarge",componentId:"sc-23b81648-12"})`
  width: 36px;
  height: 36px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`,g.default.input.withConfig({displayName:"Header.styles__SearchInput",componentId:"sc-23b81648-13"})`
  font-size: 18px;
  padding: 5px;
  border: none;
  outline: none;
  width: 100%;
  background: none;
  border-bottom: 2px solid transparent;
  transition: border-color 0.2s ease;

  &:focus,
  &:hover {
    border-bottom: 2px solid #cc0c5c;
  }

  &::placeholder {
    color: #888;
    font-weight: bold;
  }
`,g.default.ul.withConfig({displayName:"Header.styles__CategoryList",componentId:"sc-23b81648-14"})`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 400px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #cc0c5c transparent;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #cc0c5c;
    border-radius: 10px;
  }
`;let ei=g.default.li.withConfig({displayName:"Header.styles__CategoryItem",componentId:"sc-23b81648-15"})`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f9f9f9;
  }
`;g.default.svg.withConfig({displayName:"Header.styles__CategoryArrow",componentId:"sc-23b81648-16"})`
  width: 16px;
  height: 16px;
  stroke: #a4a4a4;
  transition: transform 0.3s ease;

  ${ei}:hover & {
    transform: translateX(5px);
    stroke: #cc0c5c;
  }
`,g.default.div.withConfig({displayName:"Header.styles__CatalogCategories",componentId:"sc-23b81648-17"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;
  padding: 0 20px;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: #cc0c5c darkgrey;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: pink;
    border-radius: 10px;
    border: 2px solid transparent;
    background-clip: content-box;
  }
`,g.default.div.withConfig({displayName:"Header.styles__SwiperCell",componentId:"sc-23b81648-18"})`
  position: relative;
  flex: 0 0 auto;
  width: inherit;
  display: flex;
  flex-direction: row;
  border-radius: 15px;
  background: linear-gradient(135deg, #ffffff, #f7f7f7);
  border: 1px solid #e5e5e5;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.3s,
    background 0.3s;
  padding: 10px 13px;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  img {
    width: 30px;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    background: linear-gradient(135deg, #cc0c5c, #ff3366);

    p {
      color: #ffffff;
    }

    img {
      filter: brightness(0) invert(1);
    }
  }

  p {
    margin: 0;
    text-align: start;
    font-size: 14px;
    padding-left: 10px;
  }
`,g.default.div.withConfig({displayName:"Header.styles__VerticalLine",componentId:"sc-23b81648-19"})`
  background-color: #cc0c5c;
  width: 2px;
  height: 600px;
  margin-left: 20px;
`,g.default.div.withConfig({displayName:"Header.styles__SubcategoryList",componentId:"sc-23b81648-20"})`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 30px;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: #cc0c5c darkgrey;
`,g.default.div.withConfig({displayName:"Header.styles__SubcategoryItem",componentId:"sc-23b81648-21"})`
  color: #cc0c5c;
  text-align: start;
  padding: 0 15px;
  cursor: pointer;

  &:hover {
    background-color: #efefef;
    border-radius: 20px;
    font-weight: bold;
    text-decoration-color: #cc0c5c;
  }
`,g.default.div.withConfig({displayName:"Header.styles__AccountIcon",componentId:"sc-23b81648-22"})`
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
    filter: none;
    color: #cc0c5c;
  }

  svg path {
    transition: fill 0.3s ease;
  }

  &:hover svg path {
    stroke: #cc0c5c;
  }
`,g.default.div.withConfig({displayName:"Header.styles__ScaleButton",componentId:"sc-23b81648-23"})`
  position: relative;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
    filter: none;
    color: #cc0c5c;

    svg path {
      stroke: #cc0c5c;
    }
  }
`,g.default.span.withConfig({displayName:"Header.styles__CountBadge",componentId:"sc-23b81648-24"})`
  position: absolute;
  top: -3px;
  right: -5px;
  background-color: greenyellow;
  color: black;
  font-size: 10px;
  font-weight: bold;
  border-radius: 50%;
  width: 13px;
  height: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
`,g.default.div.withConfig({displayName:"Header.styles__MobileMenuContent",componentId:"sc-23b81648-25"})`
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  background: white;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  visibility: ${e=>{let{isVisible:t}=e;return t?"visible":"hidden"}};
  pointer-events: ${e=>{let{isVisible:t}=e;return t?"auto":"none"}};
  opacity: ${e=>{let{isVisible:t}=e;return+!!t}};
  transform: ${e=>{let{isVisible:t}=e;return t?"translateY(0)":"translateY(-10px)"}};
  transition: all 0.3s ease;
  z-index: 1000;
  max-height: 500px;
  overflow-y: auto;

  @media (max-width: 768px) {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    border-radius: 0;
    max-height: calc(100vh - 60px);
    grid-template-columns: 1fr;
  }
`,g.default.div.withConfig({displayName:"Header.styles__MobileMenuCard",componentId:"sc-23b81648-26"})`
  background: ${e=>{let{bgImage:t}=e;return t?`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${t})`:"linear-gradient(135deg, #ffffff, #f7f7f7)"}};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: ${e=>{let{textColor:t}=e;return t||"#333"}};
  border-radius: 8px;
  padding: 12px 16px;
  border: 1px solid #e5e5e5;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`,g.default.div.withConfig({displayName:"Header.styles__MobileMenuLabel",componentId:"sc-23b81648-27"})`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 8px;
  letter-spacing: -0.5px;
  color: white;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
`,g.default.div.withConfig({displayName:"Header.styles__MobileMenuLinks",componentId:"sc-23b81648-28"})`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-top: auto;
`,g.default.a.withConfig({displayName:"Header.styles__MobileMenuLink",componentId:"sc-23b81648-29"})`
  font-size: 12px;
  color: white;
  text-decoration: none;
  padding: 4px 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 4px;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-1px);
  }
`,g.default.span.withConfig({displayName:"Header.styles__MobileMenuIcon",componentId:"sc-23b81648-30"})`
  font-size: 12px;
  transform: rotate(45deg);
`,g.default.div.withConfig({displayName:"Header.styles__ProductCategories",componentId:"sc-23b81648-31"})`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: center;
`;let en=g.default.div.withConfig({displayName:"Header.styles__ProductCategory",componentId:"sc-23b81648-32"})`
  padding: 4px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  border-left: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;

  &:first-child {
    border-left: none;
  }
`;g.default.span.withConfig({displayName:"Header.styles__ProductCategoryName",componentId:"sc-23b81648-33"})`
  color: #000;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;

  ${en}:hover & {
    color: #666;
  }
`;let eo=g.default.div.withConfig({displayName:"Header.styles__CurrencySwitcher",componentId:"sc-23b81648-34"})`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 20px;
  background: #f5f5f5;
  transition: all 0.3s ease;

  &:hover {
    background: #e0e0e0;
  }
`;g.default.span.withConfig({displayName:"Header.styles__CurrencyText",componentId:"sc-23b81648-35"})`
  font-size: 14px;
  font-weight: 500;
  color: #333;
`,g.default.span.withConfig({displayName:"Header.styles__CurrencyArrow",componentId:"sc-23b81648-36"})`
  font-size: 12px;
  color: #666;
  transition: transform 0.3s ease;

  ${eo}:hover & {
    transform: rotate(180deg);
  }
`,g.default.div.withConfig({displayName:"Header.styles__CountrySwitcher",componentId:"sc-23b81648-37"})`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 20px;
  background: #f5f5f5;
  transition: all 0.3s ease;

  &:hover {
    background: #e0e0e0;
  }
`,g.default.div.withConfig({displayName:"Header.styles__CountryFlag",componentId:"sc-23b81648-38"})`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  overflow: hidden;
  border: 2px solid #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,g.default.span.withConfig({displayName:"Header.styles__CountryText",componentId:"sc-23b81648-39"})`
  font-size: 14px;
  font-weight: 500;
  color: #333;
`,g.default.div.withConfig({displayName:"Header.styles__Contacts",componentId:"sc-23b81648-40"})`
  display: flex;
  align-items: center;
  gap: 5px;
`,g.default.a.withConfig({displayName:"Header.styles__ContactItem",componentId:"sc-23b81648-41"})`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border-radius: 20px;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: #e0e0e0;
    transform: translateY(-1px);
  }
`,g.default.div.withConfig({displayName:"Header.styles__ContactIcon",componentId:"sc-23b81648-42"})`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #666;
`,g.default.span.withConfig({displayName:"Header.styles__ContactText",componentId:"sc-23b81648-43"})`
  font-size: 12px;
  font-weight: 500;
  color: #333;
`;let es=g.default.div.withConfig({displayName:"Header.styles__UserIconWrapper",componentId:"sc-23b81648-44"})`
  position: relative;
  display: inline-flex;
`,el=g.default.button.withConfig({displayName:"Header.styles__UserIconButton",componentId:"sc-23b81648-45"})`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: ${e=>{let{$isScrolled:t}=e;return t?"#1a1a1a":"#ffffff"}};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  border-radius: 50%;
  width: 40px;
  height: 40px;

  &:hover {
    background: ${e=>{let{$isScrolled:t}=e;return t?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.1)"}};
    color: #d4af37;
    transform: scale(1.1);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;g.default.div.withConfig({displayName:"Header.styles__UserModal",componentId:"sc-23b81648-46"})`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  min-width: 200px;
  padding: 1rem;
  z-index: 10001;
  animation: slideDown 0.2s ease-out;
  border: 1px solid rgba(0, 0, 0, 0.08);
  white-space: nowrap;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    right: 0;
    left: auto;
  }
`,g.default.p.withConfig({displayName:"Header.styles__UserModalMessage",componentId:"sc-23b81648-47"})`
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin: 0 0 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #e0e0e0;
  font-family: 'Questrial', sans-serif;
`,g.default.button.withConfig({displayName:"Header.styles__UserModalItem",componentId:"sc-23b81648-48"})`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #1a1a1a;
  font-size: 0.95rem;
  font-weight: 500;
  font-family: 'Questrial', sans-serif;
  border-radius: 8px;
  transition: all 0.2s ease;
  text-align: left;

  &:hover {
    background: #f5f5f5;
    color: #d4af37;
  }

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }

  span {
    flex: 1;
  }
`;let ed=g.default.div.withConfig({displayName:"Header.styles__LikedIconWrapper",componentId:"sc-23b81648-49"})`
  position: relative;
  display: inline-flex;
`,ec=g.default.button.withConfig({displayName:"Header.styles__LikedButton",componentId:"sc-23b81648-50"})`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: ${e=>{let{$isScrolled:t}=e;return t?"#1a1a1a":"#ffffff"}};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: ${e=>{let{$isScrolled:t}=e;return t?"rgba(204, 12, 92, 0.1)":"rgba(204, 12, 92, 0.15)"}};
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    background: ${e=>{let{$isScrolled:t}=e;return t?"rgba(204, 12, 92, 0.08)":"rgba(255, 255, 255, 0.12)"}};
    color: #cc0c5c;
    transform: scale(1.08);
  }

  &:hover::before {
    opacity: 1;
    transform: scale(1);
  }

  &:active {
    transform: scale(1.05);
  }

  svg {
    width: 20px;
    height: 20px;
    position: relative;
    z-index: 1;
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`,eu=g.default.span.withConfig({displayName:"Header.styles__LikedBadge",componentId:"sc-23b81648-51"})`
  position: absolute;
  top: 2px;
  right: 2px;
  background: #cc0c5c;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 600;
  font-family: 'Questrial', sans-serif;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 10;
`,ep=g.default.div.withConfig({displayName:"Header.styles__CartIconWrapper",componentId:"sc-23b81648-52"})`
  position: relative;
  display: inline-flex;
`,ef=g.default.button.withConfig({displayName:"Header.styles__CartButton",componentId:"sc-23b81648-53"})`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: ${e=>{let{$isScrolled:t}=e;return t?"#1a1a1a":"#ffffff"}};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: ${e=>{let{$isScrolled:t}=e;return t?"rgba(212, 175, 55, 0.1)":"rgba(212, 175, 55, 0.15)"}};
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    background: ${e=>{let{$isScrolled:t}=e;return t?"rgba(212, 175, 55, 0.08)":"rgba(255, 255, 255, 0.12)"}};
    color: #d4af37;
    transform: scale(1.08);
  }

  &:hover::before {
    opacity: 1;
    transform: scale(1);
  }

  &:active {
    transform: scale(1.05);
  }

  svg {
    width: 20px;
    height: 20px;
    position: relative;
    z-index: 1;
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`,eg=g.default.span.withConfig({displayName:"Header.styles__CartBadge",componentId:"sc-23b81648-54"})`
  position: absolute;
  top: 2px;
  right: 2px;
  background: #d4af37;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 600;
  font-family: 'Questrial', sans-serif;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 10;
`,em=g.default.nav.withConfig({displayName:"Header.styles__NavigationBar",componentId:"sc-23b81648-55"})`
  width: 100%;
  background: ${e=>{let{$isScrolled:t}=e;return t?"#001f3f":"transparent"}};
  transition: background 0.3s ease;
  border-top: ${e=>{let{$isScrolled:t}=e;return t?"1px solid rgba(255, 255, 255, 0.1)":"none"}};
  padding: 0.5rem 0;
  margin-top: 0;

  @media (max-width: 968px) {
    display: none;
  }
`,eh=g.default.div.withConfig({displayName:"Header.styles__NavContainer",componentId:"sc-23b81648-56"})`
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,ex=g.default.div.withConfig({displayName:"Header.styles__NavLinks",componentId:"sc-23b81648-57"})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    gap: 1.25rem;
  }
`,eb=g.default.div.withConfig({displayName:"Header.styles__NavItem",componentId:"sc-23b81648-58"})`
  position: relative;
  display: inline-flex;
  align-items: center;

  &:hover button::after,
  &:focus-within button::after {
    width: 100%;
  }
`;g.default.div.withConfig({displayName:"Header.styles__Submenu",componentId:"sc-23b81648-59"})`
  position: absolute;
  top: calc(100% + 0.6rem);
  left: 50%;
  transform: translate(-50%, 8px);
  background: #ffffff;
  border-radius: 12px;
  padding: 0.75rem 0.9rem;
  min-width: 220px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition:
    opacity 0.2s ease,
    transform 0.2s ease,
    visibility 0.2s ease;
  z-index: 2000;

  ${eb}:hover &,
  ${eb}:focus-within & {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translate(-50%, 0);
  }
`,g.default.ul.withConfig({displayName:"Header.styles__SubmenuList",componentId:"sc-23b81648-60"})`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`,g.default.li.withConfig({displayName:"Header.styles__SubmenuItem",componentId:"sc-23b81648-61"})`
  width: 100%;
`,g.default.button.withConfig({displayName:"Header.styles__SubmenuLink",componentId:"sc-23b81648-62"})`
  width: 100%;
  text-align: left;
  border: none;
  background: none;
  padding: 0.4rem 0.35rem;
  border-radius: 8px;
  color: #001f3f;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition:
    background 0.2s ease,
    color 0.2s ease;

  &:hover,
  &:focus-visible {
    background: rgba(0, 31, 63, 0.08);
    color: #d4af37;
    outline: none;
  }
`;let ey=g.default.span.withConfig({displayName:"Header.styles__NavLinkDivider",componentId:"sc-23b81648-63"})`
  width: 1px;
  height: 20px;
  background: #9a8300;
  flex-shrink: 0;
`,ew=g.default.button.withConfig({displayName:"Header.styles__NavLink",componentId:"sc-23b81648-64"})`
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Questrial', sans-serif;
  cursor: pointer;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.2s ease;
  text-transform: capitalize;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #d4af37;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #d4af37;

    &::after {
      width: 100%;
    }
  }

  @media (max-width: 1200px) {
    font-size: 0.95rem;
  }
`,ev=g.default.span.withConfig({displayName:"Dropdown.styles__VisuallyHiddenLabel",componentId:"sc-e01969a5-0"})`
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
  clip-path: inset(50%);
`,eC=g.default.div.withConfig({displayName:"Dropdown.styles__Container",componentId:"sc-e01969a5-1"})`
  position: relative;
  width: ${e=>{let{$width:t}=e;return t??"240px"}};
  font-family: inherit;
`,e_=g.default.button.withConfig({displayName:"Dropdown.styles__Trigger",componentId:"sc-e01969a5-2"})`
  width: 100%;
  height: 28px;
  padding: 0;
  border: none;
  border-bottom: 1px solid
    ${e=>{let{$isScrolled:t}=e;return t?"rgba(0, 31, 63, 0.2)":"rgba(255, 255, 255, 0.3)"}};
  background: transparent;
  color: ${e=>{let{$isScrolled:t}=e;return t?"#001f3f":"#ffffff"}};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    border-color: ${e=>{let{$isScrolled:t}=e;return t?"#9a8300":"rgba(255, 255, 255, 0.6)"}};
  }

  &:focus-visible {
    outline: none;
    border-color: #9a8300;
  }
`,ek=g.default.span.withConfig({displayName:"Dropdown.styles__ValueText",componentId:"sc-e01969a5-3"})`
  color: ${e=>{let{$isScrolled:t}=e;return t?"#001f3f":"#ffffff"}};
  font-weight: 400;
  font-size: 0.875rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,eI=g.default.span.withConfig({displayName:"Dropdown.styles__PlaceholderText",componentId:"sc-e01969a5-4"})`
  color: ${e=>{let{$isScrolled:t}=e;return t?"#8a8f98":"rgba(255, 255, 255, 0.7)"}};
  font-size: 0.875rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ej=g.default.span.withConfig({displayName:"Dropdown.styles__Chevron",componentId:"sc-e01969a5-5"})`
  font-size: 0.7rem;
  transform: rotate(0deg);
  transition:
    transform 0.2s ease,
    color 0.2s ease;
  color: ${e=>{let{$isScrolled:t}=e;return t?"#001f3f":"rgba(255, 255, 255, 0.8)"}};
  opacity: 0.7;

  &[data-open='true'] {
    transform: rotate(180deg);
    color: ${e=>{let{$isScrolled:t}=e;return t?"#9a8300":"#ffffff"}};
    opacity: 1;
  }
`,eN=g.keyframes`
  0% { opacity: 0; transform: translateY(-4px) scale(0.98); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`,eS=g.default.ul.withConfig({displayName:"Dropdown.styles__Menu",componentId:"sc-e01969a5-6"})`
  position: absolute;
  left: 0;
  right: 0;
  margin: 4px 0 0 0;
  padding: 4px;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.1),
    0 2px 4px rgba(0, 0, 0, 0.06);
  list-style: none;
  max-height: ${e=>{let{$maxHeight:t}=e;return t??"240px"}};
  overflow: auto;
  z-index: 1000;
  animation: ${eN} 0.12s ease both;

  scrollbar-width: thin;
  scrollbar-color: #c7c7c7 transparent;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #c7c7c7;
    border-radius: 6px;
  }
`,eE=g.default.input.withConfig({displayName:"Dropdown.styles__SearchInput",componentId:"sc-e01969a5-7"})`
  width: 100%;
  height: 32px;
  margin: 2px 2px 4px;
  padding: 0 8px;
  border-radius: 6px;
  border: 1px solid #e2e2e2;
  background: #fafafa;
  color: #001f3f;
  font-size: 0.875rem;
  &:focus {
    outline: 2px solid #9a8300;
    outline-offset: 1px;
  }
`,eP=g.default.div.withConfig({displayName:"Dropdown.styles__OptionRow",componentId:"sc-e01969a5-8"})`
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 32px;
  padding: 4px 8px;
  margin-bottom: 2px;
  border-radius: 6px;
  color: #001f3f;
  font-size: 0.875rem;
  cursor: pointer;
  user-select: none;
  transition:
    background 0.15s ease,
    color 0.15s ease;

  &[data-disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &[aria-selected='true'] {
    background: rgba(154, 131, 0, 0.08);
    color: #9a8300;
    font-weight: 500;
  }

  &[data-highlighted] {
    background: rgba(0, 31, 63, 0.06);
  }

  &:not([data-disabled]):hover {
    background: rgba(0, 31, 63, 0.06);
  }
`,e$=g.default.span.withConfig({displayName:"Dropdown.styles__OptionIcon",componentId:"sc-e01969a5-9"})`
  display: inline-flex;
  width: 18px;
  height: 18px;
  & > svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
    stroke: currentColor;
  }
  & > img {
    width: 18px;
    height: 18px;
    object-fit: contain;
  }
`,eL=g.default.div.withConfig({displayName:"Dropdown.styles__NoResults",componentId:"sc-e01969a5-10"})`
  color: #8a8f98;
  padding: 12px 8px;
  text-align: center;
`,eM=e=>{let{options:t,value:i,onChange:n,placeholder:o="Select…",disabled:s=!1,searchable:l=!1,width:d,maxMenuHeight:c,ariaLabel:u,allowClear:p=!0,isScrolled:f=!1}=e,[g,m]=(0,a.useState)(!1),[h,x]=(0,a.useState)(""),[b,y]=(0,a.useState)(-1),w=(0,a.useRef)(null),v=(0,a.useRef)(null),C=(0,a.useMemo)(()=>t.find(e=>e.value===i),[t,i]),_=(0,a.useMemo)(()=>{if(!l||!h.trim())return t;let e=h.toLowerCase();return t.filter(t=>t.label.toLowerCase().includes(e)||t.value.toLowerCase().includes(e))},[t,h,l]),k=(0,a.useMemo)(()=>_.findIndex(e=>!e.disabled),[_]),I=()=>{s||(m(!0),y(k))},j=()=>{m(!1),x(""),y(-1)};(0,a.useEffect)(()=>{if(!g)return;let e=e=>{w.current&&(w.current.contains(e.target)||j())},t=e=>{w.current?.contains(e.target)||j()};return window.addEventListener("mousedown",e),window.addEventListener("scroll",t,!0),()=>{window.removeEventListener("mousedown",e),window.removeEventListener("scroll",t,!0)}},[g]);let N=e=>{if(!_.length)return;let t=b;for(let r=0;r<_.length;r++)if(t=(t+e+_.length)%_.length,!_[t].disabled){y(t);break}};return(0,a.useEffect)(()=>{if(!g||b<0)return;let e=v.current?.querySelector(`[data-index="${b}"]`);e?.scrollIntoView({block:"nearest"})},[b,g]),(0,r.jsxs)(eC,{ref:w,"data-open":g,$width:d,children:[(0,r.jsx)(ev,{id:"dropdown-label",children:u||"Dropdown"}),(0,r.jsxs)(e_,{type:"button","aria-haspopup":"listbox","aria-expanded":g,"aria-labelledby":"dropdown-label",onClick:()=>g?j():I(),onKeyDown:e=>{!s&&("ArrowDown"===e.key||"Enter"===e.key||" "===e.key?(e.preventDefault(),g?N(1):I()):"ArrowUp"===e.key?(e.preventDefault(),g?N(-1):I()):"Escape"===e.key&&(g?(e.stopPropagation(),j()):p&&i&&n(void 0)))},disabled:s,"data-disabled":s||void 0,$isScrolled:f,children:[C?(0,r.jsx)(ek,{$isScrolled:f,children:C.label}):(0,r.jsx)(eI,{$isScrolled:f,children:o}),(0,r.jsx)(ej,{$isScrolled:f,"data-open":g,"aria-hidden":!0,children:"▾"})]}),g&&(0,r.jsxs)(eS,{role:"listbox","aria-activedescendant":b>=0?`opt-${_[b]?.value}`:void 0,onKeyDown:e=>{if("ArrowDown"===e.key)e.preventDefault(),N(1);else if("ArrowUp"===e.key)e.preventDefault(),N(-1);else if("Home"===e.key)e.preventDefault(),y(k);else if("End"===e.key){e.preventDefault();let t=[..._].reverse().findIndex(e=>!e.disabled);-1!==t&&y(_.length-1-t)}else"Enter"===e.key?(e.preventDefault(),b>=0&&!_[b]?.disabled&&(n(_[b].value),j())):"Escape"===e.key&&(e.preventDefault(),j())},tabIndex:-1,ref:v,$maxHeight:c,children:[l&&(0,r.jsx)(eE,{autoFocus:!0,placeholder:"Search…",value:h,onChange:e=>{x(e.target.value),y(-1)},onKeyDown:e=>{"ArrowDown"===e.key&&(e.preventDefault(),y(k))}}),0===_.length?(0,r.jsx)(eL,{children:"No results"}):_.map((e,t)=>(0,r.jsxs)(eP,{as:"li",role:"option",id:`opt-${e.value}`,"data-index":t,"aria-selected":e.value===i,"data-highlighted":t===b||void 0,"data-disabled":e.disabled||void 0,onMouseEnter:()=>!e.disabled&&y(t),onClick:()=>{let e;(e=_[t])&&!e.disabled&&(n(e.value),j())},children:[e.icon&&(0,r.jsx)(e$,{children:e.icon}),e.label]},e.value))]})]})},ez=[{value:"USD",label:"USD"},{value:"EUR",label:"EUR"},{value:"GBP",label:"GBP"},{value:"JPY",label:"JPY"},{value:"AUD",label:"AUD"},{value:"CAD",label:"CAD"},{value:"CHF",label:"CHF"},{value:"CNY",label:"CNY"},{value:"SEK",label:"SEK"},{value:"NOK",label:"NOK"},{value:"AMD",label:"AMD"}],eO=e=>{let{width:t="60px",searchable:i=!1,onChange:n,isScrolled:o=!1}=e,[s,l]=(0,a.useState)(()=>localStorage.getItem("currency")||"USD");return(0,r.jsx)(eM,{options:ez,value:s,onChange:e=>{e&&(l(e),localStorage.setItem("currency",e),n?.(e))},placeholder:"Currency",width:t,searchable:i,ariaLabel:"Select currency",isScrolled:o})};e.s(["default",0,()=>{let e=(0,i.useRouter)(),t=(0,i.usePathname)(),l=(0,i.useParams)(),d=(0,u.normalizeLocale)(l?.locale),c="/"!==(t&&t.startsWith(`/${d}`)?t.replace(`/${d}`,"")||"/":t||"/"),{categories:p}=(0,n.useHeaderModel)(),g=p.find(e=>1e3===e.id),m=g?.subcategories||[],h=(0,a.useRef)(null),[x,b]=(0,a.useState)(!1),[y,w]=(0,a.useState)(!1),[v,C]=(0,a.useState)(!1),[_,k]=(0,a.useState)(!1),[I,j]=(0,a.useState)(!1),{isAuthenticated:N}=(0,M.useAuth)(),[S,E]=(0,a.useState)(0),[P,$]=(0,a.useState)(0),[z,O]=(0,a.useState)(!1),[R,H]=(0,a.useState)("idle"),D=(0,a.useRef)(null);(0,a.useEffect)(()=>{N&&b(!1)},[N]);let A=()=>b(!1),T=()=>w(!0),U=()=>w(!1),B=()=>C(!0),Q=()=>C(!1);return(0,a.useEffect)(()=>{if(!x)return;let e=e=>{D.current&&!D.current.contains(e.target)&&A()},t=e=>{"Escape"===e.key&&A()};return window.addEventListener("mousedown",e),window.addEventListener("keydown",t),()=>{window.removeEventListener("mousedown",e),window.removeEventListener("keydown",t)}},[x]),(0,a.useEffect)(()=>{if(c)return;let e={current:!1},t=!1,r=window.scrollY,a=()=>{let t=r<=2;O(!t),!e.current&&(t||"idle"!==R?t&&"done"===R&&(e.current=!0,H("animating-in"),setTimeout(()=>{H("idle"),e.current=!1},500)):(e.current=!0,H("animating-out"),setTimeout(()=>{H("done"),e.current=!1},500)))},i=()=>{r=window.scrollY,t||(t=!0,requestAnimationFrame(()=>{a(),t=!1}))};return a(),window.addEventListener("scroll",i,{passive:!0}),()=>window.removeEventListener("scroll",i)},[R,c]),(0,a.useEffect)(()=>{c&&(O(!0),H("done"))},[c]),(0,a.useEffect)(()=>{let e=()=>{let e=localStorage.getItem("cartProducts");try{let t=e?JSON.parse(e):[];Array.isArray(t)?t.length>0&&t[0].bagId&&t[0].quantity?E(t.reduce((e,t)=>e+(t.quantity||1),0)):E(t.length):E(0)}catch{E(0)}},t=()=>{let e=localStorage.getItem("likedProducts");try{let t=e?JSON.parse(e):[];$(Array.isArray(t)?t.length:0)}catch{$(0)}};return e(),t(),window.addEventListener("storage",e),window.addEventListener("cartUpdated",e),window.addEventListener("storage",t),window.addEventListener("likedUpdated",t),()=>{window.removeEventListener("storage",e),window.removeEventListener("cartUpdated",e),window.removeEventListener("storage",t),window.removeEventListener("likedUpdated",t)}},[]),(0,r.jsxs)(X,{$isScrolled:z,ref:h,children:[(0,r.jsxs)(ee,{children:[(0,r.jsx)(er,{children:(0,r.jsx)(eO,{isScrolled:z})}),(0,r.jsx)(et,{onClick:()=>e.push((0,u.withLocale)(d,"/")),children:(0,r.jsx)(Z,{$phase:R,onClick:()=>e.push((0,u.withLocale)(d,"/")),children:(0,r.jsx)("img",{src:"/assets/logobig.svg",alt:"Logo"})})}),(0,r.jsxs)(ea,{children:[(0,r.jsxs)(ed,{children:[(0,r.jsxs)(ec,{onClick:()=>j(e=>!e),$isScrolled:z,"aria-label":"Liked",children:[(0,r.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}),P>0&&(0,r.jsx)(eu,{children:P})]}),(0,r.jsx)(L,{isOpen:I,onClose:()=>j(!1),isScrolled:z})]}),(0,r.jsxs)(ep,{children:[(0,r.jsxs)(ef,{onClick:()=>k(e=>!e),$isScrolled:z,"aria-label":"Cart",children:[(0,r.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,r.jsx)("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),(0,r.jsx)("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),(0,r.jsx)("path",{d:"M16 10a4 4 0 0 1-8 0"})]}),S>0&&(0,r.jsx)(eg,{children:S})]}),(0,r.jsx)(f,{isOpen:_,onClose:()=>k(!1),isScrolled:z})]}),(0,r.jsxs)(es,{ref:D,children:[(0,r.jsx)(el,{onClick:()=>{b(e=>!e)},$isScrolled:z,"aria-label":"Account",children:(0,r.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,r.jsx)("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),(0,r.jsx)("circle",{cx:"12",cy:"7",r:"4"})]})}),x&&(0,r.jsx)(q,{onClose:A,isScrolled:z,onOpenLogin:T,onOpenRegister:B})]})]})]}),(0,r.jsx)(em,{$isScrolled:z,children:(0,r.jsx)(eh,{children:(0,r.jsx)(ex,{children:m.map((t,i)=>(0,r.jsxs)(a.default.Fragment,{children:[(0,r.jsx)(eb,{children:(0,r.jsx)(ew,{onClick:()=>e.push((0,u.withLocale)(d,`/products?category_id=1000&subcategory_id=${t.id}`)),$isScrolled:z,"aria-haspopup":"false",children:t.name})}),i<m.length-1&&(0,r.jsx)(ey,{})]},t.id))})})}),y&&(0,r.jsx)(s.default,{onClose:U,onOpenRegister:()=>{U(),B()}}),v&&(0,r.jsx)(o.default,{onClose:Q,onOpenLogin:()=>{Q(),T()}})]})}],16460),e.i(8513),Object.create(null);let eR={},eH=(e,t,r,a)=>{eB(r)&&eR[r]||(eB(r)&&(eR[r]=new Date),((e,t,r,a)=>{let i=[r,{code:t,...a||{}}];if(e?.services?.logger?.forward)return e.services.logger.forward(i,"warn","react-i18next::",!0);eB(i[0])&&(i[0]=`react-i18next:: ${i[0]}`),e?.services?.logger?.warn?e.services.logger.warn(...i):console?.warn&&console.warn(...i)})(e,t,r,a))},eD=(e,t)=>()=>{if(e.isInitialized)t();else{let r=()=>{setTimeout(()=>{e.off("initialized",r)},0),t()};e.on("initialized",r)}},eA=(e,t,r)=>{e.loadNamespaces(t,eD(e,r))},eT=(e,t,r,a)=>{if(eB(r)&&(r=[r]),e.options.preload&&e.options.preload.indexOf(t)>-1)return eA(e,r,a);r.forEach(t=>{0>e.options.ns.indexOf(t)&&e.options.ns.push(t)}),e.loadLanguages(t,eD(e,a))},eU=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.languages&&t.languages.length?t.hasLoadedNamespace(e,{lng:r.lng,precheck:(t,a)=>{if(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e))return!1}}):(eH(t,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:t.languages}),!0)},eB=e=>"string"==typeof e,eQ=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,eF={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},eW=e=>eF[e],eY={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:e=>e.replace(eQ,eW)},eq=(0,a.createContext)();class eX{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(e=>{this.usedNamespaces[e]||(this.usedNamespaces[e]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}e.s(["useTranslation",0,function(e){var r,i,n,o;let s,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{i18n:d}=l,{i18n:c,defaultNS:u}=(0,a.useContext)(eq)||{},p=d||c||t;if(p&&!p.reportNamespaces&&(p.reportNamespaces=new eX),!p){eH(p,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");let e=(e,t)=>{let r;return eB(t)?t:"object"==typeof(r=t)&&null!==r&&eB(t.defaultValue)?t.defaultValue:Array.isArray(e)?e[e.length-1]:e},t=[e,{},!1];return t.t=e,t.i18n={},t.ready=!1,t}p.options.react?.wait&&eH(p,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");let f={...eY,...p.options.react,...l},{useSuspense:g,keyPrefix:m}=f,h=e||u||p.options?.defaultNS;h=eB(h)?[h]:h||["translation"],p.reportNamespaces.addUsedNamespaces?.(h);let x=(p.isInitialized||p.initializedStoreOnce)&&h.every(e=>eU(e,p,f)),b=(r=l.lng||null,i="fallback"===f.nsMode?h:h[0],(0,a.useCallback)(p.getFixedT(r,i,m),[p,r,i,m])),y=()=>b,w=()=>{let e,t;return e=l.lng||null,t="fallback"===f.nsMode?h:h[0],p.getFixedT(e,t,m)},[v,C]=(0,a.useState)(y),_=h.join();l.lng&&(_=`${l.lng}${_}`);let k=(n=_,s=(0,a.useRef)(),(0,a.useEffect)(()=>{s.current=o?s.current:n},[n,o]),s.current),I=(0,a.useRef)(!0);(0,a.useEffect)(()=>{let{bindI18n:e,bindI18nStore:t}=f;I.current=!0,x||g||(l.lng?eT(p,l.lng,h,()=>{I.current&&C(w)}):eA(p,h,()=>{I.current&&C(w)})),x&&k&&k!==_&&I.current&&C(w);let r=()=>{I.current&&C(w)};return e&&p?.on(e,r),t&&p?.store.on(t,r),()=>{I.current=!1,p&&e&&e?.split(" ").forEach(e=>p.off(e,r)),t&&p&&t.split(" ").forEach(e=>p.store.off(e,r))}},[p,_]),(0,a.useEffect)(()=>{I.current&&x&&C(y)},[p,m,x]);let j=[v,p,x];if(j.t=v,j.i18n=p,j.ready=x,x||!x&&!g)return j;throw new Promise(e=>{l.lng?eT(p,l.lng,h,()=>e()):eA(p,h,()=>e())})}],55062),e.s([],3157)},78523,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={assign:function(){return l},searchParamsToUrlQuery:function(){return n},urlQueryToSearchParams:function(){return s}};for(var i in a)Object.defineProperty(r,i,{enumerable:!0,get:a[i]});function n(e){let t={};for(let[r,a]of e.entries()){let e=t[r];void 0===e?t[r]=a:Array.isArray(e)?e.push(a):t[r]=[e,a]}return t}function o(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function s(e){let t=new URLSearchParams;for(let[r,a]of Object.entries(e))if(Array.isArray(a))for(let e of a)t.append(r,o(e));else t.set(r,o(a));return t}function l(e){for(var t=arguments.length,r=Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];for(let t of r){for(let r of t.keys())e.delete(r);for(let[r,a]of t.entries())e.append(r,a)}return e}},53385,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={formatUrl:function(){return s},formatWithValidation:function(){return d},urlObjectKeys:function(){return l}};for(var i in a)Object.defineProperty(r,i,{enumerable:!0,get:a[i]});let n=e.r(80555)._(e.r(78523)),o=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:r}=e,a=e.protocol||"",i=e.pathname||"",s=e.hash||"",l=e.query||"",d=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?d=t+e.host:r&&(d=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(d+=":"+e.port)),l&&"object"==typeof l&&(l=String(n.urlQueryToSearchParams(l)));let c=e.search||l&&`?${l}`||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||o.test(a))&&!1!==d?(d="//"+(d||""),i&&"/"!==i[0]&&(i="/"+i)):d||(d=""),s&&"#"!==s[0]&&(s="#"+s),c&&"?"!==c[0]&&(c="?"+c),i=i.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${a}${d}${i}${c}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function d(e){return s(e)}},76586,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={DecodeError:function(){return x},MiddlewareNotFoundError:function(){return v},MissingStaticPage:function(){return w},NormalizeError:function(){return b},PageNotFoundError:function(){return y},SP:function(){return m},ST:function(){return h},WEB_VITALS:function(){return n},execOnce:function(){return o},getDisplayName:function(){return u},getLocationOrigin:function(){return d},getURL:function(){return c},isAbsoluteUrl:function(){return l},isResSent:function(){return p},loadGetInitialProps:function(){return g},normalizeRepeatedSlashes:function(){return f},stringifyError:function(){return C}};for(var i in a)Object.defineProperty(r,i,{enumerable:!0,get:a[i]});let n=["CLS","FCP","FID","INP","LCP","TTFB"];function o(e){let t,r=!1;return function(){for(var a=arguments.length,i=Array(a),n=0;n<a;n++)i[n]=arguments[n];return r||(r=!0,t=e(...i)),t}}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>s.test(e);function d(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function c(){let{href:e}=window.location,t=d();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function p(e){return e.finished||e.headersSent}function f(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function g(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await g(t.Component,t.ctx)}:{};let a=await e.getInitialProps(t);if(r&&p(r))return a;if(!a)throw Object.defineProperty(Error(`"${u(e)}.getInitialProps()" should resolve to an object. But found "${a}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return a}let m="u">typeof performance,h=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class x extends Error{}class b extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class w extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class v extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function C(e){return JSON.stringify({message:e.message,stack:e.stack})}},14331,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return n}});let a=e.r(76586),i=e.r(39275);function n(e){if(!(0,a.isAbsoluteUrl)(e))return!0;try{let t=(0,a.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,i.hasBasePath)(r.pathname)}catch(e){return!1}}},95916,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},85329,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={default:function(){return x},useLinkStatus:function(){return y}};for(var i in a)Object.defineProperty(r,i,{enumerable:!0,get:a[i]});let n=e.r(80555),o=e.r(66339),s=n._(e.r(26287)),l=e.r(53385),d=e.r(24846),c=e.r(7794),u=e.r(76586),p=e.r(97394);e.r(27004);let f=e.r(74032),g=e.r(14331),m=e.r(26928);function h(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}function x(t){var r;let a,i,n,[l,x]=(0,s.useOptimistic)(f.IDLE_LINK_STATUS),y=(0,s.useRef)(null),{href:w,as:v,children:C,prefetch:_=null,passHref:k,replace:I,shallow:j,scroll:N,onClick:S,onMouseEnter:E,onTouchStart:P,legacyBehavior:$=!1,onNavigate:L,ref:M,unstable_dynamicOnHover:z,...O}=t;a=C,$&&("string"==typeof a||"number"==typeof a)&&(a=(0,o.jsx)("a",{children:a}));let R=s.default.useContext(d.AppRouterContext),H=!1!==_,D=!1!==_?null===(r=_)||"auto"===r?m.FetchStrategy.PPR:m.FetchStrategy.Full:m.FetchStrategy.PPR,{href:A,as:T}=s.default.useMemo(()=>{let e=h(w);return{href:e,as:v?h(v):e}},[w,v]);if($){if(a?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});i=s.default.Children.only(a)}let U=$?i&&"object"==typeof i&&i.ref:M,B=s.default.useCallback(e=>(null!==R&&(y.current=(0,f.mountLinkInstance)(e,A,R,D,H,x)),()=>{y.current&&((0,f.unmountLinkForCurrentNavigation)(y.current),y.current=null),(0,f.unmountPrefetchableInstance)(e)}),[H,A,R,D,x]),Q={ref:(0,c.useMergedRef)(B,U),onClick(t){$||"function"!=typeof S||S(t),$&&i.props&&"function"==typeof i.props.onClick&&i.props.onClick(t),!R||t.defaultPrevented||function(t,r,a,i,n,o,l){if("u">typeof window){let d,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((d=t.currentTarget.getAttribute("target"))&&"_self"!==d||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,g.isLocalURL)(r)){n&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:u}=e.r(39229);s.default.startTransition(()=>{u(a||r,n?"replace":"push",o??!0,i.current)})}}(t,A,T,y,I,N,L)},onMouseEnter(e){$||"function"!=typeof E||E(e),$&&i.props&&"function"==typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),R&&H&&(0,f.onNavigationIntent)(e.currentTarget,!0===z)},onTouchStart:function(e){$||"function"!=typeof P||P(e),$&&i.props&&"function"==typeof i.props.onTouchStart&&i.props.onTouchStart(e),R&&H&&(0,f.onNavigationIntent)(e.currentTarget,!0===z)}};return(0,u.isAbsoluteUrl)(T)?Q.href=T:$&&!k&&("a"!==i.type||"href"in i.props)||(Q.href=(0,p.addBasePath)(T)),n=$?s.default.cloneElement(i,Q):(0,o.jsx)("a",{...O,...Q,children:a}),(0,o.jsx)(b.Provider,{value:l,children:n})}e.r(95916);let b=(0,s.createContext)(f.IDLE_LINK_STATUS),y=()=>(0,s.useContext)(b);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)}]);