// src/utils/fetchVehicles.ts
import { type Datum, type APICars } from "../types/vehicule";

interface APIVehicles {
  data: Datum[];
  pagination: any;
}

// Función para obtener un vehículo por su ID
const fetchWithToken = async (url: string, options: RequestInit = {}) => {
  const token = import.meta.env.PUBLIC_TOKEN;
  const res = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  return res;
};

// Función para obtener un vehículo por su ID
export const getCarsByIds = async ({ id }: { id: string }) => {
  try {
    const res = await fetchWithToken(`https://venpu.cl/api/cars/stock/${id}`);
    const vehiculo = (await res.json()) as {
      status: boolean;
      error: any;
      data: Datum;
    };
    return vehiculo;
  } catch (error) {
    console.error("Error fetching vehicle:", error);
    throw error;
  }
};

// Función existente para obtener autos destacados (no modificada)
export const getFeaturedCars = async () => {
  try {
    const res = await fetchWithToken("https://venpu.cl/api/cars/destacados");
    const { data: autos } = (await res.json()) as APICars;
    return autos;
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    throw error;
  }
};

// Función para obtener todos los IDs de los autos del stock completo
export const getAllCarIds = async (): Promise<number[]> => {
  try {
    const res = await fetchWithToken("https://venpu.cl/api/cars/stock");
    const { data: cars } = (await res.json()) as APICars;
    return cars.map((car) => car.id);
  } catch (error) {
    console.error("Error fetching vehicle IDs:", error);
    throw error;
  }
};
// Función para obtener todos los vehículos del stock completo
export const fetchAllVehicles = async (): Promise<Datum[]> => {
  try {
    const res = await fetchWithToken("https://venpu.cl/api/cars/stock");
    const { data } = (await res.json()) as APIVehicles;
    return data;
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    throw error;
  }
};
