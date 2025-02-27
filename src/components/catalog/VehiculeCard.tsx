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

  return (
    <div className="relative bg-black rounded-lg shadow-lg overflow-hidden h-full">
      <div className="absolute top-2 right-3">
        {vehicle.available ? (
          <div className="flex items-center justify-center gap-2">
            <div className="bg-green-500 text-white px-2 py-1 rounded-full text-[9px] font-bold uppercase">
              Disponible
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2">
            <div className="bg-red-500 text-white px-2 py-1 rounded-full text-[9px] font-bold uppercase">
              Vendido
            </div>
          </div>
        )}
      </div>
      <a href={`/vehiculos/${formatNameForURL(vehicle.name)}/${vehicle.id}`}>
        <img
          src={vehicle.imageUrl}
          alt={vehicle.name}
          className="w-full h-60 object-cover"
        />
      </a>
      <div className="p-6">
        {/* <span className="text-sm text-gray-400">{vehicle.year}</span> */}
        <h3 className="font-bold text-[12px] text-white">
          <div className="h-6">
            <a
              href={`/vehiculos/${formatNameForURL(vehicle.name)}/${
                vehicle.id
              }`}
            >
              {vehicle.name}
            </a>
          </div>
        </h3>
        <span className="text-xl font-bold text-amber-500">
          {formattedPrice}
        </span>
        <div className="flex flex-wrap gap-2">
          <span className="relative px-2 py-1 w-fit text-center bg-white font-bold text-[9px] text-[#1C3328] rounded-full uppercase inline-flex justify-center items-center mt-3.5 gap-2">
            <div className="flex items-center gap-1">
              <FaRoad /> {vehicle.miles ? vehicle.miles + "KM" : "Sin dato"}
            </div>
          </span>

          <span className="relative px-2 py-1 w-fit text-center bg-white font-bold text-[9px] text-[#1C3328] rounded-full uppercase inline-flex justify-center  items-center mt-3.5">
            <div className="flex items-center gap-1">
              <BsFillFuelPumpFill />
              {vehicle.fuelType ? vehicle.fuelType : "Sin dato"}
            </div>
          </span>
          <span className="relative px-2 py-1 w-fit text-center bg-white font-bold text-[9px] text-[#1C3328] rounded-full uppercase inline-flex justify-center  items-center mt-3.5">
            <div className="flex items-center gap-1">
              <TbManualGearboxFilled />
              {vehicle.transmission ? vehicle.transmission : "Sin dato"}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
