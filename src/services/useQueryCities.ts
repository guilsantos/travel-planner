import { useQuery, UseQueryResult } from "react-query";
import { QUERY_KEY } from "./queryKey";
import { getCitiesAPI } from "./api";
import { City } from "../models";

const getCities = async (citieName: string) => {
  const response = await getCitiesAPI(citieName);

  return response;
};

export const useQueryCities = (citieName: string): UseQueryResult<City[]> => {
  return useQuery([QUERY_KEY.CITIES, citieName], () => getCities(citieName), {
    staleTime: Infinity,
  });
};
