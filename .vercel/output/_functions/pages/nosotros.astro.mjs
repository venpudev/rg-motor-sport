/* empty css                                    */
import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BDyvm90E.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_FP6s_mGl.mjs';
import { $ as $$Layout } from '../chunks/Layout_B_e2BNeu.mjs';
import { I as ImageSlider, $ as $$ViewStock } from '../chunks/ViewStock_B9SMnDYJ.mjs';
export { renderers } from '../renderers.mjs';

const item1 = new Proxy({"src":"/_astro/item-1.BgxacvW6.webp","width":1080,"height":1080,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/assets/images/item-1.webp";
							}
							
							return target[name];
						}
					});

const item2 = new Proxy({"src":"/_astro/item-2.D4s2pLFW.webp","width":1080,"height":1080,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/assets/images/item-2.webp";
							}
							
							return target[name];
						}
					});

const item3 = new Proxy({"src":"/_astro/item-3.CXQZ2Pxg.webp","width":1080,"height":1080,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/assets/images/item-3.webp";
							}
							
							return target[name];
						}
					});

const $$Nosotros = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nosotros - Doble Tracci\xF3n", "description": "Conoce m\xE1s sobre nosotros" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ImageSlider", ImageSlider, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/components/image-slider/ImageSlider", "client:component-export": "ImageSlider" })} ${maybeRenderHead()}<section> <div class="container mx-auto py-12"> <div class="py-10 md:py-[100px]"> <h1 class="text-3xl md:text-5xl font-bold text-center py-3">Nosotros</h1> <p class="text-center text-lg text-balance px-3 md:px-[200px] pt-3">En RG Motorsport, convertimos la compra y venta de vehículos en una
        experiencia confiable, segura y personalizada. Con más de 15 años en el rubro,
        nos apasiona ayudarte a encontrar el auto perfecto, ofreciéndote un servicio
        transparente y de calidad en cada paso del camino.
        " </p> </div> <h2 class="text-2xl md:text-3xl font-bold text-center py-10">
¿Por qué elegir RG Motorsport?
</h2> <div> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> <div class="p-4 rounded-lg flex flex-col items-center"> ${renderComponent($$result2, "Image", $$Image, { "src": item1, "alt": "Experiencia y trayectoria", "width": 250, "height": 250 })} <h3 class="text-xl font-bold pb-5">Experiencia y trayectoria</h3> <p class="text-balance text-center">Con más de 15 años en el
            mercado, hemos construido
            una reputación basada en
            confianza, transparencia.</p> </div> <div class="p-4 rounded-lg flex flex-col items-center"> ${renderComponent($$result2, "Image", $$Image, { "src": item2, "alt": "Atenci\xF3n personalizada", "width": 250, "height": 250 })} <h3 class="text-xl font-bold pb-5">Atención personalizada</h3> <p class="text-balance text-center">Nos enfocamos en
            brindarte una experiencia
            única, acompañándote en
            cada etapa.</p> </div> <div class="p-4 rounded-lg flex flex-col items-center"> ${renderComponent($$result2, "Image", $$Image, { "src": item3, "alt": "Seguridad y transparencia", "width": 250, "height": 250 })} <h3 class="text-xl font-bold pb-5">Seguridad y transparencia</h3> <p class="text-balance text-center">Vehículos con revisión
            previa, asegurando que
            cada compra o
            consignación sea segura.</p> </div> </div> </div> </div></section> ${renderComponent($$result2, "ViewStock", $$ViewStock, {})} ` })}`;
}, "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/pages/nosotros.astro", void 0);

const $$file = "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/pages/nosotros.astro";
const $$url = "/nosotros";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Nosotros,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
