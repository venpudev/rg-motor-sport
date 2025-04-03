/* empty css                                    */
import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BDyvm90E.mjs';
import { $ as $$Layout } from '../chunks/Layout_B_e2BNeu.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect, useMemo } from 'react';
import { a as fetchAllVehicles } from '../chunks/formatHelpers_Ckgwm5su.mjs';
import { V as VehicleCard } from '../chunks/VehiculeCard_D6mRBG5N.mjs';
export { renderers } from '../renderers.mjs';

function SearchFilters({
  brands,
  selectedBrand,
  searchQuery,
  sortOrder,
  onBrandChange,
  onSearchChange,
  onSortChange
}) {
  const handleSearchChange = (e) => {
    onSearchChange(e.target.value);
  };
  const handleBrandChange = (e) => {
    onBrandChange(e.target.value);
  };
  const handleSortChange = (e) => {
    onSortChange(e.target.value);
  };
  return /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 bg-gray-50 p-2 rounded-lg", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        placeholder: "Buscar vehículos...",
        value: searchQuery,
        onChange: handleSearchChange,
        className: "p-2 rounded-md border border-gray-300 bg-white text-black"
      }
    ),
    /* @__PURE__ */ jsxs(
      "select",
      {
        value: selectedBrand,
        onChange: handleBrandChange,
        className: "p-2 rounded-md border border-gray-300 bg-white text-black",
        children: [
          /* @__PURE__ */ jsx("option", { value: "", children: "Todas las marcas" }),
          brands.map((brand) => /* @__PURE__ */ jsx("option", { value: brand, children: brand }, brand))
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "select",
      {
        value: sortOrder,
        onChange: handleSortChange,
        className: "p-2 rounded-md border border-gray-300 bg-white text-black",
        children: [
          /* @__PURE__ */ jsx("option", { value: "desc", children: "Mayor precio" }),
          /* @__PURE__ */ jsx("option", { value: "asc", children: "Menor precio" })
        ]
      }
    )
  ] });
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-2 mt-8", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => onPageChange(currentPage - 1),
        disabled: currentPage === 1,
        className: "px-4 py-2 rounded-md bg-gray-800 text-white disabled:opacity-50",
        children: "Anterior"
      }
    ),
    /* @__PURE__ */ jsxs("span", { className: "px-4 py-2 text-black", children: [
      "Página ",
      currentPage,
      " de ",
      totalPages
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => onPageChange(currentPage + 1),
        disabled: currentPage === totalPages,
        className: "px-4 py-2 rounded-md bg-gray-800 text-white disabled:opacity-50",
        children: "Siguiente"
      }
    )
  ] });
}

const ITEMS_PER_PAGE = 12;
function VehicleCatalog() {
  const [vehicles, setVehicles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const autos = await fetchAllVehicles();
      setVehicles(autos);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching vehicles:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const brands = useMemo(() => {
    const brandSet = new Set(
      vehicles.filter((v) => v.brand && typeof v.brand === "string").map((v) => v.brand)
    );
    return [...brandSet].sort((a, b) => a.localeCompare(b));
  }, [vehicles]);
  const filteredVehicles = useMemo(() => {
    let filtered = [...vehicles];
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (v) => v.name.toLowerCase().includes(query) || v.brand.toLowerCase().includes(query)
      );
    }
    if (selectedBrand) {
      filtered = filtered.filter((v) => v.brand === selectedBrand);
    }
    filtered.sort((a, b) => {
      const priceA = parseFloat(a.price) || 0;
      const priceB = parseFloat(b.price) || 0;
      return sortOrder === "desc" ? priceB - priceA : priceA - priceB;
    });
    return filtered;
  }, [vehicles, searchQuery, selectedBrand, sortOrder]);
  const totalPages = Math.ceil(filteredVehicles.length / ITEMS_PER_PAGE);
  const paginatedVehicles = filteredVehicles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      SearchFilters,
      {
        brands,
        selectedBrand,
        searchQuery,
        sortOrder,
        onBrandChange: setSelectedBrand,
        onSearchChange: setSearchQuery,
        onSortChange: setSortOrder
      }
    ),
    loading ? /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900" }) }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-col-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: paginatedVehicles.map((vehicle) => {
        return /* @__PURE__ */ jsx(VehicleCard, { vehicle }, vehicle.id);
      }) }),
      filteredVehicles.length > ITEMS_PER_PAGE && /* @__PURE__ */ jsx(
        Pagination,
        {
          currentPage,
          totalPages,
          onPageChange: handlePageChange
        }
      )
    ] })
  ] });
}

const $$Catalogo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cat\xE1logo de nuestros autos en Antofagasta", "description": "Cat\xE1logo de veh\xEDculos usados en Antofagasta, Chile" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-white min-h-screen py-36"> <div class="container mx-auto px-4 md:px-0"> <h1 class="text-4xl font-bold text-black mb-8">Catálogo de Vehículos</h1> ${renderComponent($$result2, "VehicleCatalog", VehicleCatalog, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/components/catalog/VehiculeCatalog", "client:component-export": "VehicleCatalog" })} </div> </main> ` })}`;
}, "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/pages/catalogo.astro", void 0);

const $$file = "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/pages/catalogo.astro";
const $$url = "/catalogo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Catalogo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
