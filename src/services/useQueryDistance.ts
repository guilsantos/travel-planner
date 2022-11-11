import { useQuery, UseQueryResult } from "react-query";
import { QUERY_KEY } from "./queryKey";
import { getDistanceAPI } from "./api";

const getDistance = async (cities: string[]) => {
  const response = await getDistanceAPI(cities);

  return response;
};

export const useQueryDistance = (
  cities: string[]
): UseQueryResult<number[]> => {
  return useQuery([QUERY_KEY.DISTANCES, cities], () => getDistance(cities), {
    staleTime: Infinity,
  });
};
