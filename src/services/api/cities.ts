import { CITIES } from "./constants";

export const getCitiesAPI = async (citie: string) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  if (citie === "fail") throw new Error("API error");
  if (!citie) return [];

  const CITIES_LIST = CITIES.filter((city) =>
    city?.[0]?.toLowerCase().includes(citie.toLowerCase())
  );

  return CITIES_LIST;
};
