import { CITIES } from "./constants";
import { City } from "../../models";

const toRad = (number: number) => {
  return (number * Math.PI) / 180;
};

const calcDistance = (startCity: City, endCity: City) => {
  const startLatitude = startCity[1];
  const startLongitude = startCity[2];
  const endLatitude = endCity[1];
  const endLongitude = endCity[2];

  const R = 6371; // km

  const x1 = endLatitude - startLatitude;
  const dLat = toRad(x1);
  const x2 = endLongitude - startLongitude;
  const dLon = toRad(x2);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(startLatitude)) *
      Math.cos(toRad(endLatitude)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return distance;
};

export const getDistanceAPI = (cities: string[]) => {
  if (cities.includes("Dijon")) throw new Error("API error");

  const distances: number[] = [];

  const fullCities: City[] = cities.map(
    (c) => CITIES.filter((city) => city?.[0]?.includes(c))?.[0] ?? ["", 0, 0]
  );

  for (let i = 0; i < fullCities.length - 1; i++) {
    const distance = calcDistance(fullCities[i], fullCities[i + 1]);
    distances.push(distance);
  }

  return distances;
};
