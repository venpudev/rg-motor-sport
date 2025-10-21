import type { Datum } from "../../types/vehicule";
import { formatNameForURL } from "../../helpers/stringHelpers";
import { formatPrice } from "../../helpers/formatHelpers";

//icons
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaRoad } from "react-icons/fa6";
import { TbManualGearboxFilled } from "react-icons/tb";

interface VehicleCardProps {
  readonly vehicle: Datum;
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
  const formattedPrice = formatPrice(vehicle.price);

  const vehicleProperties = [
    {
      icon: <FaRoad />,
      label: (vehicle: Datum) =>
        vehicle.miles ? `${vehicle.miles} KM` : "Sin dato",
    },
    {
      icon: <BsFillFuelPumpFill />,
      label: (vehicle: Datum) =>
        vehicle.fuelType ? vehicle.fuelType : "Sin dato",
    },
    {
      icon: <TbManualGearboxFilled />,
      label: (vehicle: Datum) =>
        vehicle.transmission ? vehicle.transmission : "Sin dato",
    },
  ];

  return (
    <div className="relative bg-black rounded-lg h-full ">
      <div className="absolute top-2 right-3">
        {vehicle.available ? (
          <div className="flex items-center justify-center gap-2">
            <div className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm">
              Disponible
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2">
            <div className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300">
              Vendido
            </div>
          </div>
        )}
      </div>
      <a href={`/vehiculos/${formatNameForURL(vehicle.name)}/${vehicle.id}`}>
        <img
          src={vehicle.imageUrl}
          alt={vehicle.name}
          className="w-full h-60 object-cover rounded-t-lg"
        />
      </a>
      <div className="px-3 py-5">
        {/* <span className="text-sm text-gray-400">{vehicle.year}</span> */}
        <h3 className="font-bold text-[11px] md:text-[14px] text-white uppercase">
          <div className="h-11 overflow-hidden">
            <a
              href={`/vehiculos/${formatNameForURL(vehicle.name)}/${
                vehicle.id
              }`}
            >
              {vehicle.name}
            </a>
          </div>
        </h3>
        <span className="text-xl font-bold text-white">{formattedPrice}</span>
        <div className="flex flex-wrap gap-2">
          {vehicleProperties.map((property, index) => (
            <span
              key={index}
              className="relative px-1 py-2 w-fit text-center text-white text-[11px]  inline-flex justify-center items-center  gap-2"
            >
              <div className="flex items-center gap-1">
                {property.icon} {property.label(vehicle)}
              </div>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
