import { jsxs, jsx } from 'react/jsx-runtime';
import { f as formatPrice } from './formatHelpers_Ckgwm5su.mjs';
import { BsFillFuelPumpFill } from 'react-icons/bs';
import { FaRoad } from 'react-icons/fa6';
import { TbManualGearboxFilled } from 'react-icons/tb';

function formatNameForURL(name) {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
}

function VehicleCard({ vehicle }) {
  const formattedPrice = formatPrice(vehicle.price);
  const vehicleProperties = [
    {
      icon: /* @__PURE__ */ jsx(FaRoad, {}),
      label: (vehicle2) => vehicle2.miles ? `${vehicle2.miles} KM` : "Sin dato"
    },
    {
      icon: /* @__PURE__ */ jsx(BsFillFuelPumpFill, {}),
      label: (vehicle2) => vehicle2.fuelType ? vehicle2.fuelType : "Sin dato"
    },
    {
      icon: /* @__PURE__ */ jsx(TbManualGearboxFilled, {}),
      label: (vehicle2) => vehicle2.transmission ? vehicle2.transmission : "Sin dato"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "relative bg-black rounded-lg h-full ", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-2 right-3", children: vehicle.available ? /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center gap-2", children: /* @__PURE__ */ jsx("div", { className: "bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm", children: "Disponible" }) }) : /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center gap-2", children: /* @__PURE__ */ jsx("div", { className: "bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300", children: "Vendido" }) }) }),
    /* @__PURE__ */ jsx("a", { href: `/vehiculos/${formatNameForURL(vehicle.name)}/${vehicle.id}`, children: /* @__PURE__ */ jsx(
      "img",
      {
        src: vehicle.imageUrl,
        alt: vehicle.name,
        className: "w-full h-60 object-cover rounded-t-lg"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "px-3 py-5", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-bold text-[11px] md:text-[14px] text-white uppercase", children: /* @__PURE__ */ jsx("div", { className: "h-11 overflow-hidden", children: /* @__PURE__ */ jsx(
        "a",
        {
          href: `/vehiculos/${formatNameForURL(vehicle.name)}/${vehicle.id}`,
          children: vehicle.name
        }
      ) }) }),
      /* @__PURE__ */ jsx("span", { className: "text-xl font-bold text-white", children: formattedPrice }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: vehicleProperties.map((property, index) => /* @__PURE__ */ jsx(
        "span",
        {
          className: "relative px-1 py-2 w-fit text-center text-white text-[11px]  inline-flex justify-center items-center  gap-2",
          children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
            property.icon,
            " ",
            property.label(vehicle)
          ] })
        },
        index
      )) })
    ] })
  ] });
}

export { VehicleCard as V };
