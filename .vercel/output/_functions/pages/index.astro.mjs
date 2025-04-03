/* empty css                                    */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as createAstro, a as renderComponent } from '../chunks/astro/server_D14WbVHT.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_wvnpt76j.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$Icon } from '../chunks/Icon_Bi76ZR82.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { b as getFeaturedCars } from '../chunks/formatHelpers_Ckgwm5su.mjs';
import { V as VehicleCard } from '../chunks/VehiculeCard_D6mRBG5N.mjs';
/* empty css                                */
import { I as ImageSlider, $ as $$ViewStock } from '../chunks/ViewStock_aT33kAF8.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CyHoR29A.mjs';
export { renderers } from '../renderers.mjs';

const testimonials = [{"name":"caatalina.vega","text":"Gracias por tu amabilidad Ricardo, estamos muy contentos con tu excelente atención!","image":"https://placehold.co/100x100?text=CV","rating":5},{"name":"Danilo_seb17","text":"Estimado, agradezco la gestión realizada en la venta del vehículo, servicio 100% recomendable. Muy atento y preocupado de todos los aspectos, sin dudar volveríamos a contratar sus servicios Saludos!!","image":"https://placehold.co/100x100?text=DS","rating":5},{"name":"Laaj8415","text":"Excelente servicio, recibí una perfecta asesoría, un trato personalizado y lo mejor sin moverme del escritorio, pago inmediato. Calidad y seriedad garantizada!! Muchas gracias","image":"https://placehold.co/100x100?text=LJ","rating":5}];
const testimonialsData = {
  testimonials,
};

const $$Astro = createAstro();
const $$StarRating = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StarRating;
  const { rating } = Astro2.props;
  const stars = Array.from({ length: 5 }, (_, index) => index < rating);
  return renderTemplate`${maybeRenderHead()}<div class="flex"> ${stars.map((isFilled) => renderTemplate`<svg${addAttribute(`w-4 h-4 ${isFilled ? "text-yellow-500" : "text-gray-300"}`, "class")} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.838-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.34 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z"></path> </svg>`)} </div>`;
}, "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/components/rating-stars/StarRating.astro", void 0);

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const testimonials = testimonialsData.testimonials;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 md:py-[150px] bg-gray-50 " data-astro-cid-xvgx4aoa> <div class="container mx-auto px-4" data-astro-cid-xvgx4aoa> <div class="h-2 bg-amber-600 w-16 mb-3 mx-auto" data-astro-cid-xvgx4aoa></div> <h2 class="text-3xl md:text-5xl font-bold text-center py-3" data-astro-cid-xvgx4aoa>TESTIMONIOS</h2> <p class="text-center mb-12 text-gray-600 px-2 md:px-[240px]" data-astro-cid-xvgx4aoa>
Descubre lo que nuestros clientes tienen que decir sobre su experiencia con nosotros.
      Cada testimonio refleja nuestro compromiso con la calidad, el servicio personalizado y la
      satisfacción total.
</p> <div class="testimonials-carousel relative overflow-hidden" data-astro-cid-xvgx4aoa> <div class="testimonials-track flex transition-transform duration-500" data-astro-cid-xvgx4aoa> ${testimonials.concat(testimonials).map((testimonial) => renderTemplate`<div class="testimonial-slide w-full md:w-1/3 flex-shrink-0 px-4" data-astro-cid-xvgx4aoa> <div class="bg-white p-6 rounded-lg shadow-lg h-full" data-astro-cid-xvgx4aoa> <div class="flex items-center mb-4" data-astro-cid-xvgx4aoa> <img${addAttribute(testimonial.image, "src")}${addAttribute(testimonial.name, "alt")} class="w-12 h-12 rounded-full mr-4 object-cover aspect-square" data-astro-cid-xvgx4aoa> <h3 class="font-bold" data-astro-cid-xvgx4aoa>${testimonial.name} ${renderComponent($$result, "StarRating", $$StarRating, { "rating": testimonial.rating, "data-astro-cid-xvgx4aoa": true })} </h3> </div> <p class="text-gray-600 italic" data-astro-cid-xvgx4aoa>"${testimonial.text}"</p> </div> </div>`)} </div> </div> </div> </section> `;
}, "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/components/testimonials/Testimonials.astro", void 0);

const $$Maps = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-black py-20"> <div class="container mx-auto"> <div class="grid grid-cols-1 md:grid-cols-2 gap-2 px-5 md:px-0 py-3"> <!-- Mapa --> <div class="w-full h-full md:h-96 bg-gray-200 rounded-lg overflow-hidden "> <iframe class="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4152.97918721917!2d-70.42026162406323!3d-23.694548066499966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96afd5ed37027675%3A0x90efa1a9f24c50c!2sAv.%20Cerro%20Paranal%20375%2C%201272050%20Antofagasta!5e1!3m2!1ses-419!2scl!4v1740678152762!5m2!1ses-419!2scl" allowfullscreen="" loading="lazy"></iframe> </div> <!-- Información de dirección --> <div class="text-white flex flex-col justify-center px-2 md:px-10"> <h2 class="text-2xl md:text-2xl font-bold mb-4 text-amber-600">Nuestra Sucursal</h2> <p class="text-sm pb-5">Encuentra nuestra sucursal cerca de ti y recibe atención personalizada.</p> <div class="text-xl md:text-sm mb-4"> ${renderComponent($$result, "Icon", $$Icon, { "name": "map", "class": "w-6 h-6 inline-block mr-2" })}
Av. Cerro Paranal 375, Antofagasta.
</div> <div class="text-xl md:text-sm mb-4"> ${renderComponent($$result, "Icon", $$Icon, { "name": "phone", "class": "w-6 h-6 inline-block mr-2" })} <a href="tel:+569659916910"> +56 9 6599 1691.</a> </div> <div class="text-xl md:text-sm mb-4"> ${renderComponent($$result, "Icon", $$Icon, { "name": "email", "class": "w-6 h-6 inline-block mr-2" })}
contacto@ejemplo.com
</div> <div class="text-xl md:text-sm flex mb-4"> ${renderComponent($$result, "Icon", $$Icon, { "name": "clock", "class": "w-6 h-6 inline-block mr-2" })} <div class="flex flex-col"> <span><strong>Lunes a Viernes:</strong> 9:00 a 19:00 hrs.</span> <span><strong>Sabado:</strong> 10:00 a 14:00 hrs.</span> </div> </div> <h2 class="text-2xl md:text-2xl font-bold mb-4 text-amber-600 pt-5">Nuestros Partners</h2> <p class="text-sm pb-10">Optimizamos los procesos con datos validados por empresas certificadas</p> <div class="flex"> <img src="../../images/logo/dily-logo.webp" alt="logodily" class="h-auto w-24"> <img src="../../images/logo/logo-blanco.webp" alt="logo-venpu" class="h-auto w-36"> </div> </div> </div> </div> </section>`;
}, "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/components/maps/Maps.astro", void 0);

const FeaturedCars = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchFeaturedCars = async () => {
    try {
      const autos = await getFeaturedCars();
      setVehicles(autos.map((auto) => ({ vehicle: auto })));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching vehicles:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchFeaturedCars();
  }, []);
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-[150px] text-black", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsx("div", { className: "h-2 bg-amber-600 w-16 mb-3" }),
    /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-bold text-left py-3", children: "DESTACADOS" }),
    /* @__PURE__ */ jsx("p", { className: "text-left mb-12 text-gray-600", children: "Tenemos una amplia variedad de vehículos usados y de todas las marcas" }),
    loading ? /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center h-96", children: /* @__PURE__ */ jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900" }) }) : /* @__PURE__ */ jsx(
      Swiper,
      {
        modules: [Navigation, Autoplay],
        spaceBetween: 30,
        slidesPerView: 4,
        pagination: { clickable: true },
        autoplay: {
          delay: 3e3,
          // Tiempo entre cada cambio de diapositiva (en ms)
          disableOnInteraction: false
          // Continúa el autoplay incluso si el usuario interactúa
        },
        loop: true,
        breakpoints: {
          0: {
            slidesPerView: 1
          },
          639: {
            slidesPerView: 1
          },
          865: {
            slidesPerView: 2
          },
          1e3: {
            slidesPerView: 4
          },
          1500: {
            slidesPerView: 4
          },
          1700: {
            slidesPerView: 4
          }
        },
        children: vehicles.map(({ vehicle }) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx(VehicleCard, { vehicle }) }, vehicle.id))
      }
    )
  ] }) });
};

const service1 = new Proxy({"src":"/_astro/service-01.CFQyCiJ3.png","width":1080,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/assets/images/service-01.png";
							}
							
							return target[name];
						}
					});

const service2 = new Proxy({"src":"/_astro/service-02.DvC8OdzQ.png","width":1080,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/assets/images/service-02.png";
							}
							
							return target[name];
						}
					});

const service3 = new Proxy({"src":"/_astro/credito-03.Bi0IZdfy.png","width":1080,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/assets/images/service-03.png";
							}
							
							return target[name];
						}
					});

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="container mx-auto py-8 md:py-[150px]"> <div class="px-4 md:px-0"> <div class="h-2 bg-amber-600 w-16 mb-3 mx-auto"></div> <h2 class="text-3xl md:text-5xl font-bold text-center py-3">
SERVICIOS
</h2> <p class="text-center text-lg md:text-xl mb-8">
Asesoramiento automotriz especializado en compra y venta de vehículos.
</p> <div class="flex flex-col md:flex-row justify-center gap-4"> <div class="relative w-full md:w-1/3 h-64 md:h-96 rounded-xl overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "src": service1, "alt": "compra y venta de autos", "class": "w-full h-full object-cover rounded-xl", "width": 600, "height": 600 })} <!-- Degradado de sombra --> <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent rounded-b-xl group-hover:from-black group-hover:opacity-80 transition-opacity duration-300"></div> <div class="absolute bottom-0 left-0 p-4"> <h3 class="text-white text-xl md:text-2xl font-bold">COMPRA Y VENTA</h3> <p class="text-sm text-white">
En RG Motorsport compramos y vendemos vehículos, guiándote para encontrar el ideal o vender al mejor precio, con gestiones simples y claras.
</p> </div> </div> <div class="relative w-full md:w-1/3 h-64 md:h-96 rounded-xl overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "src": service2, "alt": "asesor\xEDa automotriz en compra y venta", "class": "w-full h-full object-cover rounded-xl", "width": 600, "height": 600 })} <!-- Degradado de sombra --> <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent rounded-b-xl group-hover:from-black group-hover:opacity-80 transition-opacity duration-300"></div> <div class="absolute bottom-0 left-0 p-4"> <h3 class="text-white text-xl md:text-2xl font-bold">ASESORÍA</h3> <p class="text-sm text-white">
Nuestros asesores te ayudan a decidir en la compra o venta de tu vehículo con consejos personalizados, evaluaciones exactas y un proceso fácil y sin estrés.
</p> </div> </div> <div class="relative w-full md:w-1/3 h-64 md:h-96 rounded-xl overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "src": service3, "alt": "Imagen 3", "class": "w-full h-full object-cover rounded-xl", "width": 600, "height": 600 })} <!-- Degradado de sombra --> <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent rounded-b-xl group-hover:from-black group-hover:opacity-80 transition-opacity duration-300"></div> <div class="absolute bottom-0 left-0 p-4"> <h3 class="text-white text-xl md:text-2xl font-bold">CRÉDITO</h3> <p class="text-sm text-white">
En RG Motorsport ofrecemos financiamiento flexible para tu vehículo ideal, con las mejores tasas y condiciones, guiándote en un proceso rápido y sencillo.
</p> </div> </div> </div> </div> </section>`;
}, "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/components/Services.astro", void 0);

const credito = new Proxy({"src":"/_astro/credito-03.Bi0IZdfy.png","width":1080,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/assets/images/credito-03.png";
							}
							
							return target[name];
						}
					});

const $$Consignacion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="container mx-auto bg-gray-50 overflow-hidden my-8 flex flex-col-reverse rounded-lg md:flex-row"> <!-- Imagen --> <div class="w-full md:w-1/2 overflow-hidden md:h-auto"> ${renderComponent($$result, "Image", $$Image, { "src": credito, "alt": "Entrega de llaves de auto", "class": "w-full h-full object-cover object-center", "width": 500, "height": 500 })} </div> <!-- Contenido --> <div class="w-full md:w-1/2 p-[30px] sm:p-[20px] md:p-[60px] flex flex-col justify-center"> <!-- Línea decorativa --> <div class="h-2 bg-amber-600 w-16 mb-3"></div> <!-- Título principal --> <h2 class="text-2xl md:text-4xl font-bold text-primary mb-4 text-amber-600">CONSIGNACIÓN</h2> <!-- Subtítulo --> <h3 class="text-xl font-semibold text-gray-800 mb-5">
Hacemos que vender tu auto sea rápido, fácil y seguro.
</h3> <!-- Lista de beneficios --> <div class="space-y-3 gap-5 pt-5"> <!-- Beneficio 1 --> <div class="bg-white p-4 rounded-lg flex"> <div class="h-full"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#d97706" class="mr-2"> <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path> </svg> </div> <div class="flex flex-col"> <h3 class="font-semibold text-lg md:text-xl flex items-center">
Nos encargamos de todo
</h3> <p class="text-sm md:text-base">Publicamos, mostramos y gestionamos las ofertas.</p> </div> </div> <!-- Beneficio 2 --> <div class="bg-white p-4 rounded-lg flex"> <div class="h-full"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#d97706" class="mr-2"> <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path> </svg> </div> <div class="flex flex-col"> <h3 class="font-semibold text-lg md:text-xl flex items-center">
Cuidamos tu vehículo
</h3> <p class="text-sm md:text-base">Siempre limpio y visible para potenciales compradores.</p> </div> </div> <!-- Beneficio 3 --> <div class="bg-white p-4 rounded-lg flex"> <div class="h-full"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#d97706" class="mr-2"> <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path> </svg> </div> <div class="flex flex-col"> <h3 class="font-semibold text-lg md:text-xl flex items-center">
Venta segura
</h3> <p class="text-sm md:text-base">Revisamos la documentación y garantizamos un proceso transparente.</p> </div> </div> </div> <!-- Texto adicional --> <p class="text-gray-700 font-medium my-4 text-lg md:text-2xl text-right">
Déjanos tu auto, nosotros lo vendemos por ti. <br>¡Sin complicaciones!
</p> <!-- Botón --> <div class="flex justify-end items-end"> <a href="/contacto" class="bg-black inline w-full md:w-48 text-white font-semibold text-lg py-2 px-4 rounded-lg mt-4 text-center">
CONSIGNA AQUÍ
</a> </div> </div> </section>`;
}, "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/components/Consignacion.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "RG Motor Sports", "description": "Venta de vehiculos usados en Antofagasta, Chile" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "ImageSlider", ImageSlider, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/components/image-slider/ImageSlider", "client:component-export": "ImageSlider" })} ${renderComponent($$result2, "FeaturedCars", FeaturedCars, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/components/featured-car/FeaturedCars", "client:component-export": "FeaturedCars" })} ${renderComponent($$result2, "ViewStock", $$ViewStock, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Consignacion", $$Consignacion, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "Maps", $$Maps, {})} </main> ` })}`;
}, "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/pages/index.astro", void 0);

const $$file = "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
