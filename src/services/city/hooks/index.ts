import { useQuery } from "@tanstack/react-query";
import { getCities } from "../controller";

export function useGetCities(provinceId: string) {
  return useQuery({
    queryKey: ["cities", provinceId],
    queryFn: () => getCities(provinceId),
  });
}
