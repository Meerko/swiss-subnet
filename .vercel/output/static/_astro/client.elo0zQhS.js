import{a as n,e as p}from"./client.Dm-eYAro.js";const c=({value:t,name:r,hydrate:e=!0})=>{if(!t)return null;const a=e?"astro-slot":"astro-static-slot";return n.createElement(a,{name:r,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:t}})};c.shouldComponentUpdate=()=>!1;function b(t){for(const r in t)if(r.startsWith("__reactContainer"))return r}function h(t){let r={};for(const e of t.attributes)r[e.name]=e.value;return t.firstChild===null?n.createElement(t.localName,r):n.createElement(t.localName,r,Array.from(t.childNodes).map(e=>e.nodeType===Node.TEXT_NODE?e.data:e.nodeType===Node.ELEMENT_NODE?h(e):void 0).filter(e=>!!e))}function g(t,r){if(r&&t){let e=[],a=document.createElement("template");a.innerHTML=t;for(let i of a.content.children)e.push(h(i));return e}else return t?n.createElement(c,{value:t}):void 0}let m=new WeakMap;const y=(t,r)=>{let e=m.get(t);return e||(e=r(),m.set(t,e)),e},M=t=>(r,e,{default:a,...i},{client:N})=>{if(!t.hasAttribute("ssr"))return;const d=t.getAttribute("data-action-key"),f=t.getAttribute("data-action-name"),l=t.getAttribute("data-action-result"),A=d&&f&&l?[JSON.parse(l),d,f]:void 0,T={identifierPrefix:t.getAttribute("prefix"),formState:A};for(const[s,o]of Object.entries(i))e[s]=n.createElement(c,{value:o,name:s});const u=n.createElement(r,e,g(a,t.hasAttribute("data-react-children"))),E=b(t);if(E&&delete t[E],N==="only")return n.startTransition(()=>{y(t,()=>{const o=p.createRoot(t);return t.addEventListener("astro:unmount",()=>o.unmount(),{once:!0}),o}).render(u)});n.startTransition(()=>{y(t,()=>{const o=p.hydrateRoot(t,u,T);return t.addEventListener("astro:unmount",()=>o.unmount(),{once:!0}),o}).render(u)})};export{M as default};
