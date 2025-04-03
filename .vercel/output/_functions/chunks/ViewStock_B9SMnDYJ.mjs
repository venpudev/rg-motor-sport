import { jsx, jsxs } from 'react/jsx-runtime';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
/* empty css                        */
/* empty css                         */
import { c as createComponent, m as maybeRenderHead, b as renderTemplate } from './astro/server_BDyvm90E.mjs';

const slides = [{"id":1,"image":"/images/slider/slider-1.webp","title":"Compra con confianza, conduce con tranquilidad","description":"Encuentra tu próximo vehículo 4x4 con nosotros. Amplia selección de marcas y modelos con garantía."},{"id":2,"image":"/images/slider/slider-2.webp","title":"Tenemos una amplia gama de vechículos","description":"Encuentra tu próximo vehículo 4x4 con nosotros. Amplia selección de marcas y modelos con garantía."},{"id":3,"image":"/images/slider/slider-3.webp","title":"Tu próximo auto, una experiencia inolvidable","description":"Encuentra tu próximo vehículo 4x4 con nosotros. Amplia selección de marcas y modelos con garantía."},{"id":4,"image":"/images/slider/slider-4.webp","title":"Hablemos de tu próximo auto","description":"Encuentra tu próximo vehículo 4x4 con nosotros. Amplia selección de marcas y modelos con garantía."}];
const slidesData = {
  slides,
};

const ImageSlider = () => {
  const slides = slidesData.slides;
  return /* @__PURE__ */ jsx("div", { className: "container mx-auto h-[500px] relative mt-[150px] rounded-0 md:rounded-xl overflow-hidden p-4 md:p-0", children: /* @__PURE__ */ jsx(
    Swiper,
    {
      modules: [Autoplay, Navigation, Pagination, EffectFade],
      effect: "fade",
      autoplay: {
        delay: 5e3,
        disableOnInteraction: false
      },
      loop: true,
      className: "w-full h-full",
      children: slides.map((slide) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs("div", { className: "relative w-full h-full", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 rounded-xl" }),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: slide.image,
            alt: slide.title,
            className: "w-full h-full object-cover rounded-xl"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "container mx-auto z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-6 md:p-20", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center md:text-left bg-amber-600 bg-opacity-80 p-4 max-w-[100%] md:max-w-[550px] rounded-lg", children: slide.title }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-4", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "/contacto",
                className: "bg-amber-600 text-white px-6 py-3 rounded-md font-bold hover:bg-amber-500 text-center w-full md:w-auto",
                children: "CONSIGNA TU AUTO"
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "/catalogo",
                className: "bg-white text-black border-2 border-white px-6 py-3 rounded-md font-bold hover:bg-gray-100 hover:text-black text-center w-full md:w-auto",
                children: "VER STOCK"
              }
            )
          ] })
        ] })
      ] }) }, slide.id))
    }
  ) });
};

const $$ViewStock = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full h-24 flex justify-center items-center flex-col bg-black" data-astro-cid-uzeastqu> <div class="flex justify-center items-center gap-2 flex-col md:flex-rows" data-astro-cid-uzeastqu> <div class="flex items-center gap-4" data-astro-cid-uzeastqu> <a href="/catalogo" class="text-xl md:text-4xl font-bold text-white" data-astro-cid-uzeastqu>VER STOCK COMPLETO</a> <div class="arrow" data-astro-cid-uzeastqu> <span data-astro-cid-uzeastqu></span> <span data-astro-cid-uzeastqu></span> <span data-astro-cid-uzeastqu></span> </div> </div> </div> </div> `;
}, "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/components/banners/ViewStock.astro", void 0);

export { $$ViewStock as $, ImageSlider as I };
