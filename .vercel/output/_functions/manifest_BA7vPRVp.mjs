import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BypWjtyo.mjs';
import 'es-module-lexer';
import { g as decodeKey } from './chunks/astro/server_DGjQ4oXc.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || undefined,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : undefined,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/giorgiabagnasco/Sites/swiss-subnet/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/studio-route.B76AEjLn.css"},{"type":"inline","content":"body{margin:0;padding:0}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/studio/[...params]","pattern":"^\\/studio(?:\\/(.*?))?\\/?$","segments":[[{"content":"studio","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@sanity/astro/dist/studio/studio-route.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/giorgiabagnasco/Sites/swiss-subnet/node_modules/@sanity/astro/dist/studio/studio-route.astro",{"propagation":"none","containsHead":true}],["/Users/giorgiabagnasco/Sites/swiss-subnet/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/giorgiabagnasco/Sites/swiss-subnet/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/giorgiabagnasco/Sites/swiss-subnet/src/pages/news/[slug].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:node_modules/@sanity/astro/dist/studio/studio-route@_@astro":"pages/studio/_---params_.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/news/[slug]@_@astro":"pages/news/_slug_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","/Users/giorgiabagnasco/Sites/swiss-subnet/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Cma63rpM.mjs","\u0000@astrojs-manifest":"manifest_BA7vPRVp.mjs","/Users/giorgiabagnasco/Sites/swiss-subnet/src/components/ContactForm":"_astro/ContactForm.CkuyWvZO.js","@astrojs/react/client.js":"_astro/client.DfpLQ3lm.js","/Users/giorgiabagnasco/Sites/swiss-subnet/src/components/SectionAbout.astro?astro&type=script&index=0&lang.ts":"_astro/SectionAbout.astro_astro_type_script_index_0_lang.DnZyofDJ.js","/Users/giorgiabagnasco/Sites/swiss-subnet/node_modules/sanity/lib/_chunks-es/resources.mjs":"_astro/resources.DzwbfHoJ.js","/Users/giorgiabagnasco/Sites/swiss-subnet/node_modules/sanity/lib/_chunks-es/resources3.mjs":"_astro/resources3.B7ZfIQlm.js","/Users/giorgiabagnasco/Sites/swiss-subnet/node_modules/sanity/lib/_chunks-es/resources2.mjs":"_astro/resources2.SZb3zZtV.js","/Users/giorgiabagnasco/Sites/swiss-subnet/node_modules/sanity/lib/_chunks-es/ViteDevServerStopped.mjs":"_astro/ViteDevServerStopped.B_aXRLND.js","/Users/giorgiabagnasco/Sites/swiss-subnet/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":"_astro/stegaEncodeSourceMap.tMVKr5S5.js","/Users/giorgiabagnasco/Sites/swiss-subnet/node_modules/sanity/lib/_chunks-es/resources4.mjs":"_astro/resources4.D1VECJmO.js","/Users/giorgiabagnasco/Sites/swiss-subnet/node_modules/sanity/lib/_chunks-es/index3.mjs":"_astro/index3.0FT9V_zR.js","/Users/giorgiabagnasco/Sites/swiss-subnet/node_modules/sanity/lib/_chunks-es/index.mjs":"_astro/index.ChkztDpd.js","/Users/giorgiabagnasco/Sites/swiss-subnet/node_modules/sanity/lib/_chunks-es/index2.mjs":"_astro/index2.BtAgvAgP.js","/Users/giorgiabagnasco/Sites/swiss-subnet/node_modules/@sanity/astro/dist/studio/studio-component":"_astro/studio-component.CLbxbk1N.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/giorgiabagnasco/Sites/swiss-subnet/src/components/SectionAbout.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const s=document.querySelectorAll(\".card\");let e=0;const a=()=>{s.forEach((t,c)=>{c===e?t.classList.add(\"active\"):(t.classList.remove(\"active\"),t.classList.remove(\"initial\"))})};a(),setInterval(()=>{e=(e+1)%s.length,a()},3e3)});"]],"assets":["/_astro/studio-route.B76AEjLn.css","/favicon.svg","/logo.png","/_astro/ContactForm.CkuyWvZO.js","/_astro/ViteDevServerStopped.B_aXRLND.js","/_astro/browser.D7WWtt7B.js","/_astro/client.CuXuStBN.js","/_astro/client.DfpLQ3lm.js","/_astro/index.2Kbpc7Tc.js","/_astro/index.ChkztDpd.js","/_astro/index2.BtAgvAgP.js","/_astro/index3.0FT9V_zR.js","/_astro/jsx-runtime.CLpGMVip.js","/_astro/resources.DzwbfHoJ.js","/_astro/resources2.SZb3zZtV.js","/_astro/resources3.B7ZfIQlm.js","/_astro/resources4.D1VECJmO.js","/_astro/stegaEncodeSourceMap.tMVKr5S5.js","/_astro/studio-component.CLbxbk1N.js","/_astro/studio-component.p_qIOE-T.js","/fonts/IBMPlexMono-Medium.woff","/fonts/IBMPlexMono-Medium.woff2","/fonts/IBMPlexMono-Text.woff","/fonts/IBMPlexMono-Text.woff2","/fonts/PPNeueMontreal-Medium.woff","/fonts/PPNeueMontreal-Medium.woff2","/fonts/PPNeueMontreal-Regular.woff","/fonts/PPNeueMontreal-Regular.woff2","/404.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"UGIhjwcffSOWd9YS98emy0lav68PWnWViYq/+Kwh2J4="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
