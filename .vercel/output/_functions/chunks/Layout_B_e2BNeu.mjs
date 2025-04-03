import { c as createComponent, m as maybeRenderHead, b as renderTemplate, r as renderComponent, a as createAstro, f as renderScript, d as addAttribute, g as renderHead, h as renderSlot } from './astro/server_BDyvm90E.mjs';
/* empty css                            */

const $$Facebook = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="https://web.facebook.com/profile.php?id=61564025917686" target="_blank" rel="noopener noreferrer" class="text-white hover:text-yellow-500"> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"></path> </svg> </a>`;
}, "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/components/icons/Facebook.astro", void 0);

const $$Instagram = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="https://www.instagram.com/rg__motorsport_/" target="_blank" rel="noopener noreferrer" class="text-white hover:text-yellow-500"> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.27.2-6.78,2.71-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.27,2.71,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.27-.2,6.78-2.71,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.27-2.71-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z"></path> </svg> </a>`;
}, "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/components/icons/Instagram.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-black text-white py-12 px-5 md:px-0 border-t border-gray-800"> <div class="container mx-auto"> <div class="grid grid-cols-1 md:grid-cols-4 gap-8"> <div> <a href="/"> <img src="/images/logo/LogoRG.webp" alt="RG Motor Sport" class="h-auto w-20"> </a> <p class="text-gray-400 py-5">
RG Motor Sport @2025 <br> Todos los derechos reservados.
</p> <div class="flex items-center space-x-4 py-2"> ${renderComponent($$result, "Facebook", $$Facebook, {})} ${renderComponent($$result, "Instagram", $$Instagram, {})} </div> </div> <div> <h3 class="font-bold text-lg mb-4">Enlaces</h3> <ul class="space-y-2"> <li><a href="/" class="text-gray-400 hover:text-amber-600">Inicio</a></li> <li><a href="/nosotros" class="text-gray-400 hover:text-amber-600">Nosotros</a></li> <li><a href="/catalogo" class="text-gray-400 hover:text-amber-600">Catálogo</a></li> <li><a href="/contacto" class="text-gray-400 hover:text-amber-600">Contacto</a></li> </ul> </div> <div> <h3 class="font-bold text-lg mb-4">Contacto</h3> <ul class="space-y-2 text-gray-400"> <li> <h3 class=" text-amber-600">Llámanos:</h3> <div class="mt-4"> <div class="py-1"> <a href="tel:+56965991691" class="underline">+56 9 6599 1691</a></div> </div> </li> <li> <h3 class="py-2 text-amber-600">Información:</h3> <div> <a href="mailto:contacto@rgmotorsport.cl" class="underline">
contacto@rgmotorsport.cl
</a> </div> </li> <li>Av. Cerro Paranal 375, Antofagasta.</li> </ul> </div> <div> <img src="/images/logo/logo-webpay.webp" alt="logo-webpay" class="h-24 md:h-36"> </div> </div> <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"> <p>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Diseño y desarrollo | venpu.cl</p> </div> </div> </footer>`;
}, "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navbar;
  const menuItems = [
    { path: "/", name: "Inicio" },
    { path: "/nosotros", name: "Nosotros" },
    { path: "/catalogo", name: "Cat\xE1logo" },
    { path: "/contacto", name: "Contacto" }
  ];
  const currentPath = Astro2.url.pathname;
  const isActive = (path) => {
    if (path === "/") {
      return currentPath === path;
    }
    return currentPath.startsWith(path);
  };
  return renderTemplate`${maybeRenderHead()}<nav> <div class="container mx-auto px-4 sm:px-0 lg:px-0"> <div class="flex items-center justify-between h-16"> <!-- Logo --> <div class="flex-shrink-0"> <a href="/"> <img src="/images/logo/LogoRG.webp" alt="RG Motor Sport" class="h-auto w-20"> </a> </div> <!-- Desktop Menu --> <div class="hidden md:flex md:items-center md:space-x-4"> ${menuItems.map((item) => renderTemplate`<a${addAttribute(item.path, "href")}${addAttribute(`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(item.path) ? "bg-gray-900 text-white" : "text-white hover:bg-amber-600 hover:text-white"}`, "class")}> ${item.name} </a>`)} </div> <!-- Social Media and Button --> <div class="hidden md:flex md:items-center md:space-x-4"> ${renderComponent($$result, "Facebook", $$Facebook, {})} ${renderComponent($$result, "Instagram", $$Instagram, {})} </div> <!-- Mobile menu button --> <div class="md:hidden"> <button type="button" class="mobile-menu-button inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"> <span class="sr-only">Open main menu</span> <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </div> </div> <!-- Mobile menu --> <div class="mobile-menu hidden md:hidden"> <div class="px-2 pt-2 pb-3 space-y-1"> ${menuItems.map((item) => renderTemplate`<a${addAttribute(item.path, "href")}${addAttribute(`block px-3 py-2 rounded-md text-base font-medium ${isActive(item.path) ? "bg-gray-900 text-white" : "text-white hover:bg-amber-600"}`, "class")}> ${item.name} </a>`)} <div class="flex items-center space-x-4 px-3 py-2"> <a href="https://web.facebook.com/profile.php?id=61564025917686" target="_blank">${renderComponent($$result, "Facebook", $$Facebook, {})}</a> <a href="https://www.instagram.com/rg__motorsport_/" target="_blank"> ${renderComponent($$result, "Instagram", $$Instagram, {})}</a> </div> <a href="/contacto" class="block px-3 py-2 rounded-md text-base font-medium bg-amber-600 text-white hover:bg-amber-500 mx-2">
Contáctanos
</a> </div> </div> </nav> ${renderScript($$result, "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/components/Navbar.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="py-4 z-[999] fixed top-0 left-0 right-0 transition-colors duration-300 px-section bg-black border-b border-gray-800"> ${renderComponent($$result, "Navbar", $$Navbar, {})} </header>`;
}, "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/components/Header.astro", void 0);

const $$WhatsappIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="96px" height="96px" fill-rule="evenodd" clip-rule="evenodd"><path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path></svg>`;
}, "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/components/icons/WhatsappIcon.astro", void 0);

const $$Whatsapp = createComponent(($$result, $$props, $$slots) => {
  const phoneNumbers = [
    { number: "+56965991691", label: "Servicio cliente" }
  ];
  return renderTemplate`${maybeRenderHead()}<button class="whatsapp-button" id="whatsapp-button" data-astro-cid-luyouduc> ${renderComponent($$result, "WhatsappIcon", $$WhatsappIcon, { "data-astro-cid-luyouduc": true })} </button> <div class="phone-list flex" id="phone-list" style="display: none; z-index: 10;" data-astro-cid-luyouduc> ${phoneNumbers.map(({ number, label }) => renderTemplate`<div class="flex items-center border-b-2 border-gray-100" data-astro-cid-luyouduc> <small class="text-xs text-gray-500" data-astro-cid-luyouduc>🟢</small> <a${addAttribute(`https://wa.me/${number}`, "href")} target="_blank" class="text-sm text-blue-500" data-astro-cid-luyouduc>${label}</a> </div>`)} </div>  ${renderScript($$result, "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/components/whatsapp/Whatsapp.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/components/whatsapp/Whatsapp.astro", void 0);

const urlImage = new Proxy({"src":"/_astro/LogoRG.Boon_qzG.webp","width":150,"height":139,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/public/images/logo/LogoRG.webp";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  console.log(urlImage.src);
  const { slug } = Astro2.params;
  const { title, description } = Astro2.props;
  const url = `https://www.rgmotorsport.cl/${slug}`;
  return renderTemplate`<html lang="es" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(urlImage.src, "content")}><meta property="og:type" content="website"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(urlImage.src, "content")}><link rel="canonical"${addAttribute(url, "href")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true })} ${renderComponent($$result, "Whatsapp", $$Whatsapp, { "data-astro-cid-sckkx6r4": true })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} </body></html>`;
}, "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
