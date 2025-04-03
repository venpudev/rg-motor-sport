const fetchWithToken = async (url, options = {}) => {
  const token = "PU3KsVR0v4WA8MmjjIDvz74vTFqd64hM2F4QkcYLKcf9EQKTwgj5AjR0w1FxJidV8Q3ifuAqqPPuzRmEQRHmcxmSZ1VOTaWrxQqZMJp6TI9j875uJtRgBe2B2IkHtkgHMqkEEUidIlOH0wAVxgTS2Qt9WcoJFlFrK0Wtp0SW0atmoC2TMWH1OteBOzk76MqA";
  const res = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...options.headers
    }
  });
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res;
};
const getCarsByIds = async ({ id }) => {
  try {
    const res = await fetchWithToken(`https://venpu.cl/api/cars/stock/${id}`);
    const vehiculo = await res.json();
    return vehiculo;
  } catch (error) {
    console.error("Error fetching vehicle:", error);
    throw error;
  }
};
const getFeaturedCars = async () => {
  try {
    const res = await fetchWithToken("https://venpu.cl/api/cars/destacados");
    const { data: autos } = await res.json();
    return autos;
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    throw error;
  }
};
const fetchAllVehicles = async () => {
  try {
    const res = await fetchWithToken("https://venpu.cl/api/cars/stock");
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    throw error;
  }
};

function formatPrice(price, locale = "es-CL", currency = "CLP") {
  const numericPrice = typeof price === "string" ? Number(price.replace(/[^\d]/g, "")) : price;
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency
  }).format(numericPrice);
}

export { fetchAllVehicles as a, getFeaturedCars as b, formatPrice as f, getCarsByIds as g };
