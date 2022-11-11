import { CITIES } from "./constants";

export const getCitiesAPI = (citie: string) => {
  if (citie === "fail") throw new Error("API error");

  return CITIES.filter((city) =>
    city?.[0]?.toLowerCase().includes(citie.toLowerCase())
  );
};
