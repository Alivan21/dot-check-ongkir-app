import { api } from "@/lib/axios";
import { TBaseResponse } from "@/types/base-response";
import { useQuery } from "@tanstack/react-query";
import { TProvinceResponse } from "../model";

export function useGetProvinces() {
  return useQuery({
    queryKey: ["provinces"],
    queryFn: async () => {
      const { data } = await api.get<TBaseResponse<null, TProvinceResponse[]>>("/province", {
        headers: {
          key: "c2d05d6630ce1a0a4f9f5ed9c0a594c3",
        },
      });
      return data.rajaongkir.results;
    },
  });
}
