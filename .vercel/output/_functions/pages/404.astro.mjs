/* empty css                                    */
import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BDyvm90E.mjs';
import { $ as $$Layout } from '../chunks/Layout_B_e2BNeu.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const { id } = Astro2.params || {};
  console.log("ID:", id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Veh\xEDculo no encontrado", "description": "Veh\xEDculo no encontrado" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4"> <div class="max-w-3xl bg-white shadow-md rounded-lg p-8 mt-10 border border-gray-200"> <h1 class="text-4xl font-extrabold text-gray-800 mb-4">404 - Vehículo no encontrado</h1> <p class="text-lg text-gray-600 mb-6">
Lamentamos las molestias, no pudimos encontrar un vehículo.
</p> <a href="/catalogo" class="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition">
Volver al catálogo
</a> </div> </main> ` })}`;
}, "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/pages/404.astro", void 0);

const $$file = "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
