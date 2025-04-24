import { type ChangeEvent } from "react";

interface SearchFiltersProps {
  readonly brands: string[];
  readonly selectedBrand: string;
  readonly searchQuery: string;
  readonly sortOrder: "asc" | "desc" | "";
  readonly onBrandChange: (brand: string) => void;
  readonly onSearchChange: (query: string) => void;
  readonly onSortChange: (order: "asc" | "desc") => void;
}

export function SearchFilters({
  brands,
  selectedBrand,
  searchQuery,
  sortOrder,
  onBrandChange,
  onSearchChange,
  onSortChange,
}: SearchFiltersProps) {
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  const handleBrandChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onBrandChange(e.target.value);
  };

  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onSortChange(e.target.value as "asc" | "desc");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative">
          <label
            htmlFor="search"
            className="absolute -top-2 left-2 bg-white px-1 text-xs font-medium text-gray-500"
          >
            Buscar vehículos
          </label>
          <input
            id="search"
            type="text"
            placeholder="Nombre o marca del vehículo"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all"
          />
        </div>

        <div className="relative">
          <label
            htmlFor="brand"
            className="absolute -top-2 left-2 bg-white px-1 text-xs font-medium text-gray-500"
          >
            Marca
          </label>
          <select
            id="brand"
            value={selectedBrand}
            onChange={handleBrandChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all appearance-none bg-white"
          >
            <option value="">Todas las marcas</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        <div className="relative">
          <label
            htmlFor="sort"
            className="absolute -top-2 left-2 bg-white px-1 text-xs font-medium text-gray-500"
          >
            Ordenar por precio
          </label>
          <select
            id="sort"
            value={sortOrder}
            onChange={handleSortChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all appearance-none bg-white"
          >
            <option value="" disabled>
              Filtrar Por:
            </option>
            <option value="desc">Mayor precio</option>
            <option value="asc">Menor precio</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
