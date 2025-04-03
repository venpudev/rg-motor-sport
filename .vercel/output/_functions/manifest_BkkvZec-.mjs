import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_B-YX5yYC.mjs';
import 'es-module-lexer';
import { e as decodeKey } from './chunks/astro/server_D14WbVHT.mjs';
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
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
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

const manifest = deserializeManifest({"hrefRoot":"file:///Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.V2R8AmkL.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.V2R8AmkL.js"}],"styles":[{"type":"external","src":"/_astro/catalogo.BDQaMw0L.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.V2R8AmkL.js"}],"styles":[],"routeData":{"route":"/api/send-email","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/send-email\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"send-email","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/send-email.ts","pathname":"/api/send-email","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.V2R8AmkL.js"}],"styles":[{"type":"external","src":"/_astro/catalogo.BDQaMw0L.css"}],"routeData":{"route":"/catalogo","isIndex":false,"type":"page","pattern":"^\\/catalogo\\/?$","segments":[[{"content":"catalogo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/catalogo.astro","pathname":"/catalogo","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.V2R8AmkL.js"}],"styles":[{"type":"external","src":"/_astro/catalogo.BDQaMw0L.css"}],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.V2R8AmkL.js"}],"styles":[{"type":"external","src":"/_astro/catalogo.BDQaMw0L.css"},{"type":"inline","content":".swiper-fade.swiper-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-fade .swiper-slide-active,.swiper-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.bg-patters[data-astro-cid-uzeastqu]{background-color:#f6f6f6;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23e1e1e1' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E\")}.arrow[data-astro-cid-uzeastqu]{position:relative;transform:translate(-50%,-50%);transform:rotate(-90deg);cursor:pointer;margin-left:40px}.arrow[data-astro-cid-uzeastqu] span[data-astro-cid-uzeastqu]{display:block;width:1.5vw;height:1.5vw;border-bottom:5px solid white;border-right:5px solid white;transform:rotate(45deg);margin:-10px;animation:animate 2s infinite}.arrow[data-astro-cid-uzeastqu] span[data-astro-cid-uzeastqu]:nth-child(2){animation-delay:-.2s}.arrow[data-astro-cid-uzeastqu] span[data-astro-cid-uzeastqu]:nth-child(3){animation-delay:-.4s}@keyframes animate{0%{opacity:0;transform:rotate(45deg) translate(-20px,-20px)}50%{opacity:1}to{opacity:0;transform:rotate(45deg) translate(20px,20px)}}@media (max-width: 768px){.arrow[data-astro-cid-uzeastqu]{margin-left:0}.arrow[data-astro-cid-uzeastqu] span[data-astro-cid-uzeastqu]{width:3vw;height:3vw}}@media (max-width: 480px){.arrow[data-astro-cid-uzeastqu] span[data-astro-cid-uzeastqu]{width:4vw;height:4vw}}\n"},{"type":"external","src":"/_astro/_id_.B_l4pjL9.css"}],"routeData":{"route":"/nosotros","isIndex":false,"type":"page","pattern":"^\\/nosotros\\/?$","segments":[[{"content":"nosotros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nosotros.astro","pathname":"/nosotros","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.V2R8AmkL.js"}],"styles":[{"type":"external","src":"/_astro/catalogo.BDQaMw0L.css"},{"type":"external","src":"/_astro/_id_.B_l4pjL9.css"}],"routeData":{"route":"/vehiculos/[name]/[id]","isIndex":false,"type":"page","pattern":"^\\/vehiculos\\/([^/]+?)\\/([^/]+?)\\/?$","segments":[[{"content":"vehiculos","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["name","id"],"component":"src/pages/vehiculos/[name]/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.V2R8AmkL.js"}],"styles":[{"type":"external","src":"/_astro/catalogo.BDQaMw0L.css"},{"type":"inline","content":"@media (max-width: 768px){.testimonial-slide[data-astro-cid-xvgx4aoa]{width:100%}}\n.swiper-fade.swiper-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-fade .swiper-slide-active,.swiper-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.bg-patters[data-astro-cid-uzeastqu]{background-color:#f6f6f6;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23e1e1e1' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E\")}.arrow[data-astro-cid-uzeastqu]{position:relative;transform:translate(-50%,-50%);transform:rotate(-90deg);cursor:pointer;margin-left:40px}.arrow[data-astro-cid-uzeastqu] span[data-astro-cid-uzeastqu]{display:block;width:1.5vw;height:1.5vw;border-bottom:5px solid white;border-right:5px solid white;transform:rotate(45deg);margin:-10px;animation:animate 2s infinite}.arrow[data-astro-cid-uzeastqu] span[data-astro-cid-uzeastqu]:nth-child(2){animation-delay:-.2s}.arrow[data-astro-cid-uzeastqu] span[data-astro-cid-uzeastqu]:nth-child(3){animation-delay:-.4s}@keyframes animate{0%{opacity:0;transform:rotate(45deg) translate(-20px,-20px)}50%{opacity:1}to{opacity:0;transform:rotate(45deg) translate(20px,20px)}}@media (max-width: 768px){.arrow[data-astro-cid-uzeastqu]{margin-left:0}.arrow[data-astro-cid-uzeastqu] span[data-astro-cid-uzeastqu]{width:3vw;height:3vw}}@media (max-width: 480px){.arrow[data-astro-cid-uzeastqu] span[data-astro-cid-uzeastqu]{width:4vw;height:4vw}}\n"},{"type":"external","src":"/_astro/_id_.B_l4pjL9.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/pages/catalogo.astro",{"propagation":"none","containsHead":true}],["/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/pages/nosotros.astro",{"propagation":"none","containsHead":true}],["/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/pages/vehiculos/[name]/[id].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/api/send-email@_@ts":"pages/api/send-email.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"pages/contacto.astro.mjs","\u0000@astro-page:src/pages/vehiculos/[name]/[id]@_@astro":"pages/vehiculos/_name_/_id_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/catalogo@_@astro":"pages/catalogo.astro.mjs","\u0000@astro-page:src/pages/nosotros@_@astro":"pages/nosotros.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/node_modules/@astrojs/vercel/dist/image/build-service.js":"chunks/build-service_DaS33-7F.mjs","\u0000@astrojs-manifest":"manifest_BkkvZec-.mjs","/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/components/catalog/VehiculeCatalog":"_astro/VehiculeCatalog.9EmRrKuv.js","/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/components/image-slider/ImageSlider":"_astro/ImageSlider.DSCsGPuw.js","/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/components/car-view/CarWiew":"_astro/CarWiew.BK5x-mib.js","/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/components/featured-car/FeaturedCars":"_astro/FeaturedCars.LOoBi-Qg.js","@astrojs/react/client.js":"_astro/client.BSOY9D2A.js","/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/components/whatsapp/Whatsapp.astro?astro&type=script&index=0&lang.ts":"_astro/Whatsapp.astro_astro_type_script_index_0_lang.BhbDOy05.js","/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/components/Navbar.astro?astro&type=script&index=0&lang.ts":"_astro/Navbar.astro_astro_type_script_index_0_lang.C9avMH20.js","astro:scripts/page.js":"_astro/page.V2R8AmkL.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/components/whatsapp/Whatsapp.astro?astro&type=script&index=0&lang.ts","const t=document.querySelector(\"#whatsapp-button\"),e=document.querySelector(\"#phone-list\");t.addEventListener(\"click\",()=>{e.style.display=e.style.display===\"none\"?\"block\":\"none\"});"],["/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/components/Navbar.astro?astro&type=script&index=0&lang.ts","const e=document.querySelector(\".mobile-menu-button\"),t=document.querySelector(\".mobile-menu\");e?.addEventListener(\"click\",()=>{t?.classList.toggle(\"hidden\")});"]],"assets":["/_astro/item-2.D4s2pLFW.webp","/_astro/item-3.CXQZ2Pxg.webp","/_astro/item-1.BgxacvW6.webp","/_astro/service-01.CFQyCiJ3.png","/_astro/credito-03.Bi0IZdfy.png","/_astro/service-02.DvC8OdzQ.png","/_astro/LogoRG.Boon_qzG.webp","/_astro/montserrat-vietnamese-wght-normal.BcziCZ2I.woff2","/_astro/montserrat-cyrillic-wght-normal.D3on441i.woff2","/_astro/montserrat-cyrillic-ext-wght-normal.DV_LRdWn.woff2","/_astro/montserrat-latin-wght-normal.AeMhpAKq.woff2","/_astro/montserrat-latin-ext-wght-normal.BLkAzDQP.woff2","/_astro/_id_.B_l4pjL9.css","/_astro/catalogo.BDQaMw0L.css","/favicon.svg","/_astro/CarWiew.BK5x-mib.js","/_astro/FeaturedCars.LOoBi-Qg.js","/_astro/ImageSlider.DSCsGPuw.js","/_astro/VehiculeCard.BMJjYrkr.js","/_astro/VehiculeCatalog.9EmRrKuv.js","/_astro/_id_.fe7d4371.l0sNRNKZ.js","/_astro/autoplay.B1A4r824.js","/_astro/client.BSOY9D2A.js","/_astro/index.DHQ29l5n.js","/_astro/index.DyjU0h27.css","/_astro/jsx-runtime.BqEXxvvU.js","/_astro/page.V2R8AmkL.js","/images/logo/LogoRG.webp","/images/logo/dily-logo.webp","/images/logo/logo-blanco.webp","/images/logo/logo-webpay.webp","/images/slider/slider-1.webp","/images/slider/slider-2.webp","/images/slider/slider-3.webp","/images/slider/slider-4.webp","/images/testimonials/alvaro-kirberg.webp","/images/testimonials/carlos-carrillo.webp","/images/testimonials/lucas-parra.webp","/images/testimonials/matias-bilbao.webp","/images/testimonials/pablo-letelier.webp","/images/testimonials/pedro-maldonado.webp","/images/team/benjamin.png","/images/team/diego.png","/images/team/fabiola.png","/images/team/gabriel.png","/images/team/hector.png","/images/team/javier.png","/images/team/jean.png","/images/team/william.png","/_astro/page.V2R8AmkL.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"92jZsQhFylZ58agByPusmgLk9JKEfuRKUvC+p29NaNQ="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
