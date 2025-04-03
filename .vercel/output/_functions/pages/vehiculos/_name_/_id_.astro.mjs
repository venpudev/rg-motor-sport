/* empty css                                          */
import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_BDyvm90E.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Thumbs } from 'swiper/modules';
/* empty css                                      */
import '../../../chunks/_id_.fe7d4371_l0sNRNKZ.mjs';
import { g as getCarsByIds, f as formatPrice } from '../../../chunks/formatHelpers_Ckgwm5su.mjs';
import { $ as $$Layout } from '../../../chunks/Layout_B_e2BNeu.mjs';
import { FaRoad, FaMapMarkerAlt } from 'react-icons/fa';
import { BsFillFuelPumpFill } from 'react-icons/bs';
import { GiGearStickPattern } from 'react-icons/gi';
export { renderers } from '../../../renderers.mjs';

const CarWiew = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return /* @__PURE__ */ jsxs("div", { className: "w-full max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsx(
      Swiper,
      {
        modules: [Navigation, Autoplay, Thumbs],
        spaceBetween: 2,
        slidesPerView: 1,
        pagination: { clickable: true },
        thumbs: { swiper: thumbsSwiper },
        autoplay: {
          delay: 3e3,
          disableOnInteraction: false
        },
        loop: true,
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 30
          }
        },
        children: images.length > 0 ? images.map((img, index) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx(
          "img",
          {
            src: img.imageUrl,
            alt: img.alt || `Imagen ${index + 1}`,
            className: "w-full h-56 sm:h-50 md:h-[550px] shadow-md hover:shadow-lg object-cover cursor-pointer rounded-lg"
          }
        ) }, img.imageUrl)) : /* @__PURE__ */ jsx("p", { className: "text-center text-gray-500", children: "No hay imágenes disponibles." })
      }
    ),
    /* @__PURE__ */ jsx(
      Swiper,
      {
        modules: [Thumbs],
        onSwiper: setThumbsSwiper,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        className: "mt-4",
        breakpoints: {
          0: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20
          }
        },
        children: images.map((img, index) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx(
          "img",
          {
            src: img.imageUrl,
            alt: img.alt || `Thumbnail ${index + 1}`,
            className: "w-full h-20 md:h-36 object-cover cursor-pointer rounded-lg"
          }
        ) }, img.imageUrl))
      }
    )
  ] });
};

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params || {};
  const response = await getCarsByIds({ id: id || "" });
  if (!response || !response.status) {
    throw new Error(`No se encontr\xF3 el veh\xEDculo con ID: ${id}`);
  }
  const vehicle = response.data;
  const seoData = {
    title: `${vehicle.name} - Detalles`,
    description: `Compra el ${vehicle.name}, un veh\xEDculo con ${vehicle.miles} km, transmisi\xF3n ${vehicle.transmission} y motor ${vehicle.fuelType}.`,
    image: vehicle.imageUrl
  };
  const formattedPrice = formatPrice(vehicle.price);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { ...seoData }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-white text-gray-100 py-36"> <div class="container mx-auto md:px-0 px-5"> <div class="text-left pl-3 md:pl-0 mb-10"> <div> ${vehicle.available ? renderTemplate`<div class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm inline-block">
Disponible
</div>` : renderTemplate`<div class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm inline-block">
Vendido
</div>`} </div> <h1 class="text-xl md:text-3xl font-extrabold text-black mt-5">${vehicle.name}</h1> <div class="mt-2"> <small class="text-sm block text-gray-800">Precio:</small> <p class="text-xl md:text-2xl text-amber-600 font-bold">${formattedPrice ? formattedPrice : "Precio No disponible"}</p> </div> </div> <!-- Contenedor principal --> <div class="grid grid-cols-1 lg:grid-cols-3 gap-5"> <!-- Galería de imágenes --> <div class="col-span-2"> ${renderComponent($$result2, "CarWiew", CarWiew, { "client:load": true, "images": vehicle.imageGallery || [], "client:component-hydration": "load", "client:component-path": "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/components/car-view/CarWiew", "client:component-export": "CarWiew" })} </div> <!-- Especificaciones y detalles --> <div class="col-span-1 bg-black rounded-lg shadow-md border border-gray-700 p-6"> <!-- Título --> <h2 class="text-xl lg:text-2xl font-bold text-gray-100 mb-6">Detalles del Vehículo</h2> <!-- Especificaciones --> <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6"> <div> <h3 class="text-md font-medium text-amber-600 uppercase tracking-wide flex items-center gap-2">${renderComponent($$result2, "FaRoad", FaRoad, {})} Kilometraje</h3> <p class="text-sm font-semibold text-gray-200">${vehicle.miles ? `${vehicle.miles} km` : "No disponible"}</p> </div> <div> <h3 class="text-md font-medium text-amber-600 uppercase tracking-wide flex items-center gap-2">${renderComponent($$result2, "BsFillFuelPumpFill", BsFillFuelPumpFill, {})} Tipo de Combustible</h3> <p class="text-sm font-semibold text-gray-200">${vehicle.fuelType ? vehicle.fuelType : "No disponible"}</p> </div> <div> <h3 class="text-md font-medium text-amber-600 uppercase tracking-wide flex items-center gap-2">${renderComponent($$result2, "GiGearStickPattern", GiGearStickPattern, {})} Transmisión</h3> <p class="text-sm font-semibold text-gray-200">${vehicle.transmission ? vehicle.transmission : "No disponible"}</p> </div> <div> <h3 class="text-md font-medium text-amber-600 uppercase tracking-wide flex items-center gap-2">${renderComponent($$result2, "FaMapMarkerAlt", FaMapMarkerAlt, {})} Ubicación</h3> <p class="text-sm font-semibold text-gray-200">${vehicle.location ? vehicle.location : "No disponible"}</p> </div> </div> <!-- Llamada a la acción --> <div class="border-t border-gray-700 pt-6"> <div class="pb-5"> <h3 class="text-sm font-medium text-gray-400 uppercase tracking-wide">Descripción:</h3> <ul class="list-disc pl-5 text-lg font-semibold text-gray-200 mt-5"> ${vehicle.description ? vehicle.description.split(/[*•°●]+/).map((item) => renderTemplate`<li>${item.trim()}</li>`) : renderTemplate`<li>Descripción no disponible</li>`} </ul> </div> <h3 class="text-lg font-medium text-gray-100 mb-4">¿Interesado en este vehículo?</h3> <a href="/contacto" class="inline-block w-full text-center px-6 py-3 bg-amber-700 text-white font-semibold rounded-lg shadow-md hover:bg-amber-600 transition duration-300">
Contáctanos ahora
</a> </div> </div> </div> </div> </section> ` })}`;
}, "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/pages/vehiculos/[name]/[id].astro", void 0);

const $$file = "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/pages/vehiculos/[name]/[id].astro";
const $$url = "/vehiculos/[name]/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
