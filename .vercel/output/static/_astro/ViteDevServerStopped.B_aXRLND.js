import{j as r}from"./jsx-runtime.CLpGMVip.js";import{C as a,a as u,S as c,H as m,T as x,b as f}from"./studio-component.p_qIOE-T.js";import{r as v}from"./index.2Kbpc7Tc.js";import"./client.CuXuStBN.js";const S="Dev server stopped",E="The development server has stopped. You may need to restart it to continue working.";class D extends Error{constructor(){super(S),this.name="ViteDevServerStoppedError",this.ViteDevServerStoppedError=!0}}const d=void 0,l=e=>!!e,j=()=>{const e=f.c(5),[n,h]=v.useState(!1);let t;e[0]===Symbol.for("react.memo_cache_sentinel")?(t=()=>h(!0),e[0]=t):t=e[0];const p=t;let o,s;e[1]===Symbol.for("react.memo_cache_sentinel")?(o=()=>{l(d)&&d.on("vite:ws:disconnect",p)},s=[p],e[1]=o,e[2]=s):(o=e[1],s=e[2]),v.useEffect(o,s);let i;return e[3]!==n?(i={devServerStopped:n},e[3]=n,e[4]=i):i=e[4],i},w=()=>{const{devServerStopped:e}=j();if(e)throw new D;return null},_=()=>l(d)?r.jsx(w,{}):null,b=()=>r.jsx(a,{height:"fill",overflow:"auto",paddingY:[4,5,6,7],paddingX:4,sizing:"border",tone:"critical",children:r.jsx(u,{width:3,children:r.jsxs(c,{space:4,children:[r.jsx(m,{children:S}),r.jsx(a,{border:!0,radius:2,overflow:"auto",padding:4,tone:"inherit",children:r.jsx(c,{space:4,children:r.jsx(x,{size:2,children:E})})})]})})});export{_ as DetectViteDevServerStopped,b as DevServerStoppedErrorScreen};