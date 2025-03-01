import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import slidesData from "../../data/slides.json";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export const ImageSlider = () => {
  const slides = slidesData.slides;
  return (
    <div className="container mx-auto h-[500px] relative mt-[150px] rounded-xl overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 rounded-xl"></div>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="container mx-auto z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-20">
                <h1 className="text-5xl font-bold mb-6 text-left inline-block bg-amber-600 bg-opacity-80 p-4 w-[550px] rounded-lg">
                  {slide.title}
                </h1>

                <div className="flex gap-4">
                  <a
                    href="/contacto"
                    className="bg-amber-600 text-white px-8 py-3 rounded-md font-bold hover:bg-amber-500"
                  >
                    COMPRA TU AUTO
                  </a>
                  <a
                    href="/catalogo"
                    className="bg-white text-black border-2 border-white px-8 py-3 rounded-md font-bold hover:bg-gray-100 hover:text-black"
                  >
                    VER STOCK
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
