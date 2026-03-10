module.exports=[33920,a=>{"use strict";var b=a.i(1142),c=a.i(96766),d=a.i(61765),e=a.i(59131),f=a.i(38120);let g=f.default.div.withConfig({displayName:"HeroSlide.styles__HeroContainer",componentId:"sc-e2edfdfc-0"})`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  background: url('/assets/bg.jpg');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(17, 17, 17, 0.4);
    z-index: 1;
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 768px) {
    height: 100vh;
    padding-left: 2rem;
  }
`,h=f.keyframes`
  0% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -45vh, 0) scale(0.06);
    opacity: 1;
  }
`,i=f.keyframes`
  0% {
    transform: translate3d(0, -45vh, 0) scale(0.06);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 1;
  }
  `,j=f.default.img.withConfig({displayName:"HeroSlide.styles__CentralImage",componentId:"sc-e2edfdfc-1"})`
  max-width: 50vw;
  width: 600px;
  pointer-events: none;
  will-change: transform;
  transform-origin: top center;

  color: ${({$phase:a})=>"done"===a||"animating-out"===a?"#9A8300":"#ffffff"};
  transition: color 0.5s ease;
  & img {
    width: 100%;
    height: auto;
  }
  ${({$phase:a})=>{switch(a){case"idle":return f.css`
          transform: translate3d(0, 0, 0) scale(1);
          opacity: 1;
        `;case"animating-out":return f.css`
          animation: ${h} 0.5s ease forwards;
        `;case"animating-in":return f.css`
          animation: ${i} 0.5s ease forwards;
        `;case"done":return f.css`
          transform: translate3d(0, -50vh, 0) scale(0.1);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: opacity 0.2s ease;
        `}}}

  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    transform: none !important;
    opacity: 1 !important;
  }
`,k=()=>{let[a,d]=(0,c.useState)("idle"),e=(0,c.useRef)(0);return(0,c.useEffect)(()=>{let b=()=>{let b=window.scrollY,c=b>e.current;c&&"animating-out"!==a&&"done"!==a?(d("animating-out"),setTimeout(()=>d("done"),500)):c||"animating-in"===a||"idle"===a||(d("animating-in"),setTimeout(()=>d("idle"),500)),e.current=b};return window.addEventListener("scroll",b,{passive:!0}),()=>window.removeEventListener("scroll",b)},[a]),(0,b.jsx)(g,{children:(0,b.jsx)(j,{src:"/assets/hero.jpg",alt:"Hero",$phase:a})})};var l=a.i(31570);a.i(79304);var m=a.i(93215),n=a.i(62013);let o=f.default.div.withConfig({displayName:"ProductsTrending.styles__BestsellerCarousel",componentId:"sc-809f1d83-0"})`
  margin: 5rem 0;
  padding: 0 8rem;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`,p=f.default.div.withConfig({displayName:"ProductsTrending.styles__TitleContainer",componentId:"sc-809f1d83-1"})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  align-items: flex-end;
`,q=f.default.div.withConfig({displayName:"ProductsTrending.styles__ScrollableSwiper",componentId:"sc-809f1d83-2"})`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: visible;
  scroll-behavior: smooth;
  gap: 16px;
  margin: 0 50px;
  padding: 30px 10px 30px 20px;

  &::-webkit-scrollbar {
    display: none;
  }

  > * {
    flex: 0 0 auto;
  }
`,r=f.default.button.withConfig({displayName:"ProductsTrending.styles__ArrowButton",componentId:"sc-809f1d83-3"})`
  position: absolute;
  top: 50%;
  border: none;
  background: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
  transform: translateY(-50%);
  transition:
    background-color 0.3s,
    transform 0.3s;

  ${({$direction:a})=>"left"===a&&f.css`
      left: 8px;
    `}
  ${({$direction:a})=>"right"===a&&f.css`
      right: 8px;
    `}
  &:hover {
    background-color: ${({$primaryColor:a})=>a};

    svg {
      stroke: #001f3f;
    }
  }
`,s=f.default.svg.withConfig({displayName:"ProductsTrending.styles__ArrowSvg",componentId:"sc-809f1d83-4"})`
  width: 24px;
  height: 24px;
  color: #b7b7b7;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
`,t=f.default.p.withConfig({displayName:"ProductsTrending.styles__BestsellerTitle",componentId:"sc-809f1d83-5"})`
  font-size: 24px;
  font-weight: bold;
  color: ${({$secondaryColor:a})=>a};
  text-align: center;
  margin: 0;
`,u=f.default.p.withConfig({displayName:"ProductsTrending.styles__ProductType",componentId:"sc-809f1d83-6"})`
  font-size: 18px;
  font-style: italic;
  color: ${({$secondaryColor:a})=>a};
  text-align: center;
  vertical-align: bottom;
  margin: 0;
`,v=({productType:a,primaryColor:d,secondaryColor:e,data:f})=>{let{t:g}=(0,m.useTranslation)(),h=(0,c.useRef)(null),i=a=>{h.current&&h.current.scrollBy({left:"left"===a?-200:200,behavior:"smooth"})};return(0,b.jsxs)(o,{children:[(0,b.jsxs)(p,{children:[(0,b.jsx)(t,{$secondaryColor:e,children:g("trending")}),(0,b.jsx)(u,{$secondaryColor:e,children:a})]}),(0,b.jsx)(r,{$direction:"left",onClick:()=>i("left"),$primaryColor:d,style:{marginLeft:"8rem"},children:(0,b.jsx)(s,{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5L8.25 12l7.5-7.5"})})}),(0,b.jsx)(q,{ref:h,children:f.map(a=>(0,b.jsx)(n.default,{product:a},a.id))}),(0,b.jsx)(r,{$direction:"right",onClick:()=>i("right"),$primaryColor:d,style:{marginRight:"8rem"},children:(0,b.jsx)(s,{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5L15.75 12l-7.5 7.5"})})})]})};var w=a.i(96615);let x=f.default.section.withConfig({displayName:"CategoryHero.styles__HeroWrapper",componentId:"sc-ae814821-0"})`
  width: 100vw;
  display: flex;
  justify-content: center;
`,y=f.default.div.withConfig({displayName:"CategoryHero.styles__HeroInner",componentId:"sc-ae814821-1"})`
  width: 100%;
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 0;
  height: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`,z=f.default.div.withConfig({displayName:"CategoryHero.styles__LeftPanel",componentId:"sc-ae814821-2"})`
  background: #ffffff;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 520px;
  max-height: 80vh;

  @media (max-width: 1024px) {
    min-height: 360px;
  }
`,A=f.default.div.withConfig({displayName:"CategoryHero.styles__MainImage",componentId:"sc-ae814821-3"})`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  img {
    object-fit: cover;
    object-position: center;
  }
`,B=f.default.div.withConfig({displayName:"CategoryHero.styles__RightPanel",componentId:"sc-ae814821-4"})`
  background: #ffffff;
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  padding: 13vh 10vh 7vh 10vh;
  width: 100%;
  height: 100%;

  @media (max-width: 1024px) {
    padding: 60px 40px;
    min-height: unset;
  }
`,C=f.default.h1.withConfig({displayName:"CategoryHero.styles__SuperTitle",componentId:"sc-ae814821-5"})`
  font-family: 'GFS Didot', serif;
  font-size: 72px;
  line-height: 0.95;
  letter-spacing: -0.02em;
  margin: 0 0 12px 0;
  font-weight: 400;
  color: #3a2521;
  text-align: start;
  align-content: flex-start;

  @media (max-width: 1200px) {
    font-size: 56px;
  }
  @media (max-width: 768px) {
    font-size: 40px;
  }
`,D=f.default.p.withConfig({displayName:"CategoryHero.styles__Description",componentId:"sc-ae814821-6"})`
  font-family: 'EB Garamond', serif;
  margin: 0 0 20px 0;
  font-size: 18px;
  line-height: 1.6;
  color: #6e6865;
  align-content: flex-start;
  text-align: end;
  flex: 1;
`,E=f.default.div.withConfig({displayName:"CategoryHero.styles__InfoRow",componentId:"sc-ae814821-7"})`
  display: flex;
  flex-direction: row;
  gap: 10%;
  padding: 0 15px;

  > *:first-child {
    flex: 0 0 50%;
  }

  > *:last-child {
    flex: 0 0 40%;
  }
`,F=f.default.div.withConfig({displayName:"CategoryHero.styles__ProductsStrip",componentId:"sc-ae814821-8"})`
  display: flex;
  gap: 30px;
  margin: 24px 0;
  overflow-x: auto;
  padding: 8px 0;
  height: fit-content;
  justify-content: space-between;

  @media (max-width: 768px) {
    gap: 12px;
  }
`,G=f.default.div.withConfig({displayName:"CategoryHero.styles__CTARow",componentId:"sc-ae814821-9"})`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  margin-top: auto;
  padding-top: 24px;
  flex-wrap: wrap;
  padding: 0 15px;
`,H=f.default.div.withConfig({displayName:"CategoryHero.styles__Eyebrow",componentId:"sc-ae814821-10"})`
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(255, 255, 255, 0.9);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  font-family: 'EB Garamond', serif;
  color: #3a2521;
  z-index: 1;
`;var I=a.i(59078);let J=({categoryTagline:a,categoryDescription:c,featuredProducts:d,mainImage:e,mainImageAlt:f="Category hero image",onCtaClick:g=()=>{},ctaText:h="Shop now",categoryLabel:i,className:j})=>(0,b.jsx)(x,{className:j,children:(0,b.jsxs)(y,{children:[(0,b.jsxs)(z,{children:[i?(0,b.jsx)(H,{children:i}):null,(0,b.jsx)(A,{children:(0,b.jsx)(w.default,{src:e,alt:f,fill:!0,sizes:"(max-width: 1024px) 100vw, 50vw",priority:!0})})]}),(0,b.jsxs)(B,{children:[(0,b.jsxs)(E,{children:[(0,b.jsx)(C,{children:a}),(0,b.jsx)(D,{children:c})]}),(0,b.jsx)(F,{children:(d||[]).slice(0,4).map(a=>(0,b.jsx)(n.default,{product:a},String(a.id)))}),(0,b.jsx)(G,{children:(0,b.jsx)(I.default,{variant:"link",onClick:g,children:h})})]})]})}),K=f.default.button.withConfig({displayName:"CategoryCell.styles__CellButton",componentId:"sc-42d5b89c-0"})`
  position: relative;
  border: none;
  width: 100%;
  min-height: clamp(320px, 32vw, 480px);
  border-radius: 0;
  padding: 2.25rem 2rem;
  text-align: center;
  cursor: pointer;
  color: #ffffff;
  background-image: ${({$imageUrl:a})=>`linear-gradient(rgba(11, 27, 58, 0.62), rgba(11, 27, 58, 0.62)), url(${a})`};
  background-size: cover;
  background-position: center;
  box-shadow: 0 18px 45px rgba(11, 27, 58, 0.22);
  transition: transform 240ms ease;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(11, 27, 58, 0.75) 0%,
      rgba(11, 27, 58, 0.2) 55%,
      rgba(11, 27, 58, 0) 100%
    );
    opacity: 0;
    transform: translateY(8px);
    transition:
      opacity 420ms ease,
      transform 420ms ease;
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  &:hover,
  &:focus-visible {
    transform: translateY(-2px);
  }

  &:hover::after,
  &:focus-visible::after {
    opacity: 1;
    transform: translateY(0);
  }

  &:focus-visible {
    outline: none;
    box-shadow:
      0 26px 65px rgba(11, 27, 58, 0.28),
      0 0 0 2px rgba(255, 255, 255, 0.7),
      0 0 0 6px rgba(11, 27, 58, 0.5);
  }

  @media (max-width: 900px) {
    min-height: clamp(320px, 70vw, 520px);
    padding: 1.75rem 1.5rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &::after {
      transition: none;
    }
  }
`,L=f.default.h3.withConfig({displayName:"CategoryCell.styles__CellTitle",componentId:"sc-42d5b89c-1"})`
  margin: 0 0 0.5rem;
  font-size: 1.8rem;
  font-family: 'Cormorant Garamond', 'EB Garamond', 'GFS Didot', serif;
  font-weight: 400;
  letter-spacing: -0.02em;
`,M=f.default.p.withConfig({displayName:"CategoryCell.styles__CellDescription",componentId:"sc-42d5b89c-2"})`
  margin: 0;
  font-size: 0.9rem;
  font-family: 'GFS Didot', serif;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.5;
`,N=({title:a,description:c,imageUrl:d,onClick:e})=>(0,b.jsxs)(K,{type:"button",onClick:e,$imageUrl:d,children:[(0,b.jsx)(L,{children:a}),c?(0,b.jsx)(M,{children:c}):null]}),O="rgba(9, 28, 85, 0.89)",P="rgba(75, 34, 0, 0.89)",Q="#B79A6A",R={staggered:f.css`
    grid-template-columns: repeat(3, minmax(0, 1fr));
    row-gap: 3.5rem;
    column-gap: 2.75rem;
    align-items: start;
    justify-items: center;

    > div:nth-child(1) {
      transform: translateY(18px);
    }

    > div:nth-child(2) {
      transform: translateY(-6px);
    }

    > div:nth-child(3) {
      transform: translateY(30px);
    }

    @media (max-width: 900px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));

      > div {
        transform: none;
      }
    }

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  `,split_focus:f.css`
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2.75rem;
    align-items: center;
    justify-items: center;

    > div:nth-child(2) {
      transform: translateY(-18px) scale(1.08);
      max-width: 320px;
    }

    > div:nth-child(1),
    > div:nth-child(3) {
      opacity: 0.9;
    }

    @media (max-width: 900px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));

      > div:nth-child(2) {
        transform: none;
        max-width: 260px;
      }
    }

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  `,asymmetric_row:f.css`
    grid-template-columns:
      minmax(220px, 320px) minmax(180px, 240px)
      minmax(180px, 240px);
    gap: 3rem;
    align-items: start;
    justify-items: center;

    > div:nth-child(1) {
      max-width: 320px;
      justify-self: end;
    }

    > div:nth-child(2) {
      margin-top: 1.5rem;
    }

    > div:nth-child(3) {
      margin-top: 2.75rem;
      justify-self: start;
    }

    @media (max-width: 900px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));

      > div {
        margin-top: 0;
        justify-self: center;
      }
    }

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  `,overlap:f.css`
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0;
    align-items: center;
    justify-items: center;

    > div {
      position: relative;
    }

    > div:nth-child(2) {
      margin: 0 -28px;
      z-index: 2;
    }

    > div:nth-child(1),
    > div:nth-child(3) {
      z-index: 1;
    }

    > div:nth-child(1) {
      transform: translateX(8px);
    }

    > div:nth-child(3) {
      transform: translateX(-8px);
    }

    @media (max-width: 900px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 2rem;

      > div:nth-child(2) {
        margin: 0;
      }

      > div:nth-child(1),
      > div:nth-child(3) {
        transform: none;
      }
    }

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  `,editorial_grid:f.css`
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 3.25rem 3rem;
    align-items: start;
    justify-items: center;

    > div {
      max-width: 230px;
    }

    > div:nth-child(2) {
      padding-top: 1.2rem;
    }

    @media (max-width: 900px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  `},S=f.default.section.withConfig({displayName:"TemplateSection.styles__Section",componentId:"sc-38e96bb1-0"})`
  width: 100%;
  padding: 5rem 0.3rem 2.5rem;
  box-sizing: border-box;
  text-align: center;

  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.38), rgba(255, 255, 255, 0)),
    ${"#F7EFE9"};
`,T=f.default.div.withConfig({displayName:"TemplateSection.styles__HeaderRow",componentId:"sc-38e96bb1-1"})`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`,U=f.default.div.withConfig({displayName:"TemplateSection.styles__TitleBlock",componentId:"sc-38e96bb1-2"})`
  max-width: 680px;
  margin: 0 auto;
`,V=f.default.div.withConfig({displayName:"TemplateSection.styles__TitleRow",componentId:"sc-38e96bb1-3"})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`,W=f.default.span.withConfig({displayName:"TemplateSection.styles__TitleLine",componentId:"sc-38e96bb1-4"})`
  flex: 1;
  max-width: 120px;
  height: 1px;
  background-color: ${Q};
  opacity: 0.5;

  @media (max-width: 640px) {
    max-width: 60px;
  }
`,X=f.default.h2.withConfig({displayName:"TemplateSection.styles__Title",componentId:"sc-38e96bb1-5"})`
  margin: 0;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 500;
  font-family: 'Canela', 'Cormorant Garamond', 'EB Garamond', serif;
  letter-spacing: -0.03em;
  color: ${O};
`,Y=f.default.p.withConfig({displayName:"TemplateSection.styles__Description",componentId:"sc-38e96bb1-6"})`
  margin: 0 auto;
  max-width: 56ch;
  font-size: 1rem;
  font-family: 'Canela', 'Cormorant Garamond', 'EB Garamond', serif;
  line-height: 1.2;
  color: ${P};
`,Z=f.default.div.withConfig({displayName:"TemplateSection.styles__CardsGrid",componentId:"sc-38e96bb1-7"})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 200px));
  gap: 1.1rem;
  justify-content: center;
  max-width: 680px;
  margin: 0 auto 3rem;
  margin-bottom: 3rem;

  ${({$variant:a})=>a?R[a]:null}
`,$=f.default.div.withConfig({displayName:"TemplateSection.styles__Card",componentId:"sc-38e96bb1-8"})`
  max-width: 260px;
  margin: 0 auto;
  padding: 1.25rem 0.4rem 1rem;
  text-align: center;

  font-size: 0.95rem;
  line-height: 1.6;
  color: ${"rgba(63, 58, 54, 0.58)"};

  img {
    width: 100%;
    max-width: 220px;
    height: 200px;
    margin: 0 auto 0.9rem;
    display: block;
    object-fit: cover;
    border-radius: 12px;
  }

  h3 {
    margin: 0 0 0.5rem;
    font-size: 1.2rem;
    font-weight: 500;
    font-family: 'Canela', 'Cormorant Garamond', 'EB Garamond', serif;
    letter-spacing: -0.01em;
    color: ${O};
  }

  h3::after {
    content: '';
    display: block;
    width: 26px;
    height: 1px;
    margin: 0.45rem auto 0;
    background-color: ${Q};
    opacity: 0.65;
  }

  p {
    margin: 0;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    padding: 0 0.9rem;
    font-size: 1rem;
    font-family: 'Canela', 'Cormorant Garamond', 'EB Garamond', serif;
    line-height: 1.2;
    color: ${P};
    background: ${"rgba(255, 255, 255, 0.85)"};

    transform: translateY(-6px);
    transition:
      max-height 220ms ease,
      opacity 220ms ease,
      transform 220ms ease,
      padding 220ms ease;
  }

  &:hover p,
  &:focus-within p,
  h3:hover + p {
    max-height: 120px;
    opacity: 1;
    transform: translateY(0);
    padding: 0.35rem 0.6rem 0.4rem;
  }

  @media (prefers-reduced-motion: reduce) {
    p {
      transition: none;
    }
  }
`,_=f.default.div.withConfig({displayName:"TemplateSection.styles__SubcategoryGrid",componentId:"sc-38e96bb1-9"})`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 4px;
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,aa=({title:a,description:c,buttonLabel:d,onButtonClick:e,cards:f,subcategoryItems:g,layoutVariant:h})=>(0,b.jsxs)(S,{children:[(0,b.jsxs)(T,{children:[(0,b.jsxs)(U,{children:[(0,b.jsxs)(V,{children:[(0,b.jsx)(W,{"aria-hidden":"true"}),(0,b.jsx)(X,{children:a}),(0,b.jsx)(W,{"aria-hidden":"true"})]}),(0,b.jsx)(Y,{children:c})]}),d?(0,b.jsx)(I.default,{variant:"link",onClick:e,children:d}):null]}),f&&f.length>0?(0,b.jsx)(Z,{$variant:h,children:f.map((a,c)=>(0,b.jsx)($,{children:a},`card-${c}`))}):null,g&&g.length>0?(0,b.jsx)(_,{children:g.slice(0,4).map(a=>(0,b.jsx)(N,{title:a.title,description:a.description,imageUrl:a.imageUrl,onClick:a.onClick},a.title))}):null]});var ab=a.i(75795);a.i(56498);var ac=a.i(29111);let ad=()=>{let a=(0,d.useRouter)(),c=(0,d.useParams)(),e=(0,ac.normalizeLocale)(c?.locale),{categories:f}=(0,ab.useCategories)(),g=[(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{children:"Handmade"}),(0,b.jsx)("p",{children:"Every stitch tells a story, crafted by hand with care and patience."})]},"handmade"),(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{children:"Timeless"}),(0,b.jsx)("p",{children:"Designed to age beautifully, your everyday companion, season after season."})]},"timeless"),(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{children:"Personalizable"}),(0,b.jsx)("p",{children:"Choose your colors, details, and finish, to match your style or the moment."})]},"personalizable")],h=f.flatMap(b=>(b.subcategories||[]).map((c,d)=>({title:c.name,description:b.name,imageUrl:`/assets/bag${d%4+1}.webp`,onClick:()=>a.push((0,ac.withLocale)(e,`/products?category_id=${b.id}&subcategory_id=${c.id}`))}))).slice(0,4);return(0,b.jsx)(aa,{title:"Made to stay with you",description:"Made for the moments you keep, not just the ones you gift.",layoutVariant:"staggered",cards:g,subcategoryItems:h})},ae=f.default.div.withConfig({displayName:"LandingScreen.styles__LandingScreenContainer",componentId:"sc-70b8bc6c-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;var af=a.i(26863),ag=a.i(60590),ah=a.i(81462),ai=a.i(4232);let aj=e.default;function ak({initialTrendingBagsProducts:a=[],initialTrendingDressProducts:e=[]}){let f=(0,d.useRouter)(),g=(0,d.useSearchParams)(),h=(0,d.useParams)(),i=(0,ac.normalizeLocale)(h?.locale),{primaryColor:j,secondaryColor:m}=(0,af.useThemeColors)(),[n,o]=(0,c.useState)(a),[p,q]=(0,c.useState)(e);return(0,c.useEffect)(()=>{let a=g.get("scrollTo");if(!a)return;let b=document.getElementById(a);b&&(b.scrollIntoView({behavior:"smooth",block:"start"}),f.replace((0,ac.withLocale)(i,"/")))},[g,f,i]),(0,c.useEffect)(()=>{a.length>0||e.length>0||(async()=>{try{let[a,b]=await Promise.all([(0,ag.listProducts)({page:1,page_size:10,fields:ai.PRODUCT_CARD_FIELDS}),(0,ag.listProducts)({page:1,page_size:10,fields:ai.PRODUCT_CARD_FIELDS})]);o((0,ah.mapProductDtosToModels)(a.items)),q((0,ah.mapProductDtosToModels)(b.items))}catch(a){console.error("Error fetching products:",a)}})()},[a,e]),(0,b.jsxs)(ae,{children:[(0,b.jsx)(aj,{primaryColor:j,secondaryColor:m}),(0,b.jsx)(k,{}),(0,b.jsx)(ad,{}),(0,b.jsx)("section",{id:"bestsellers",children:(0,b.jsx)(J,{categoryTagline:"Carry Elegance",categoryDescription:"Discover our curated collection of premium bags and accessories that blend style with functionality.",featuredProducts:n.slice(0,4),mainImage:"/assets/bag2.jpg",mainImageAlt:"Premium bag collection",categoryLabel:"Featured Collection",ctaText:"Shop Bags",onCtaClick:()=>f.push((0,ac.withLocale)(i,"/products"))})}),(0,b.jsx)("section",{id:"deals",children:(0,b.jsx)(v,{primaryColor:j,secondaryColor:m,productType:"in Bags",data:n})}),(0,b.jsx)(aa,{title:"Handmade",description:"Every stitch tells a story, crafted by hand with care and patience."}),(0,b.jsx)("section",{id:"new",children:(0,b.jsx)(v,{primaryColor:j,secondaryColor:m,productType:"in Dresses and Matching Sets",data:p})}),(0,b.jsx)(l.default,{})]})}a.s(["default",()=>ak],33920)}];

//# sourceMappingURL=3d860_Dev_jasmine_frontend_src_presentation_screen_landing_LandingScreen_tsx_6fba51a9._.js.map