import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // Importa los módulos necesarios
import { getFeaturedCars } from "../../lib/fetchVehicles";
import { VehicleCard } from "../catalog/VehiculeCard";
import type { Datum } from "../../types/vehicule";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Define la interfaz para un vehículo
interface VehicleCardProps {
  readonly vehicle: Datum;
}

export const FeaturedCars: React.FC = () => {
  // Estado para almacenar los vehículos (arreglo de objetos de tipo Vehicle)
  const [vehicles, setVehicles] = useState<VehicleCardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Función para obtener los vehículos destacados
  const fetchFeaturedCars = async () => {
    try {
      const autos: Datum[] = await getFeaturedCars();
      setVehicles(autos.map((auto) => ({ vehicle: auto })));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching vehicles:", error);
      setLoading(false);
    }
  };

  // useEffect para cargar los vehículos al montar el componente
  useEffect(() => {
    fetchFeaturedCars();
  }, []);

  return (
    <section className="py-16 md:py-[150px] text-black">
      <div className="container mx-auto px-4">
        <div className="h-2 bg-amber-600 w-16 mb-3"></div>
        <h2 className="text-3xl md:text-5xl font-bold text-left py-3">
          DESTACADOS
        </h2>
        <p className="text-left mb-12 text-gray-600">
          Tenemos una amplia variedad de vehículos usados y de todas las marcas
        </p>

        {loading ? (
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <Swiper
            modules={[Navigation, Autoplay]} // Registra los módulos
            spaceBetween={30} // Espacio entre diapositivas
            slidesPerView={4} // Cantidad de diapositivas visibles
            pagination={{ clickable: true }} // Activa paginación con clic
            autoplay={{
              delay: 3000, // Tiempo entre cada cambio de diapositiva (en ms)
              disableOnInteraction: false, // Continúa el autoplay incluso si el usuario interactúa
            }}
            loop={true} // Deshabilita el bucle
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              639: {
                slidesPerView: 1,
              },
              865: {
                slidesPerView: 2,
              },
              1000: {
                slidesPerView: 4,
              },
              1500: {
                slidesPerView: 4,
              },
              1700: {
                slidesPerView: 4,
              },
            }}
          >
            {vehicles.map(({ vehicle }) => (
              <SwiperSlide key={vehicle.id}>
                <VehicleCard vehicle={vehicle} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};
