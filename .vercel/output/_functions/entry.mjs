import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Dg0k1TyV.mjs';
import { manifest } from './manifest_BkkvZec-.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/send-email.astro.mjs');
const _page3 = () => import('./pages/catalogo.astro.mjs');
const _page4 = () => import('./pages/contacto.astro.mjs');
const _page5 = () => import('./pages/nosotros.astro.mjs');
const _page6 = () => import('./pages/vehiculos/_name_/_id_.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/send-email.ts", _page2],
    ["src/pages/catalogo.astro", _page3],
    ["src/pages/contacto.astro", _page4],
    ["src/pages/nosotros.astro", _page5],
    ["src/pages/vehiculos/[name]/[id].astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "014b5543-e8eb-4f89-b32b-b8e948879877",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
