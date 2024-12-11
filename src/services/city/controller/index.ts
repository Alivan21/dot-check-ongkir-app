import { api } from "@/lib/axios";
import { TBaseResponse } from "@/types/base-response";
import { TCityResponse } from "../model";

export async function getCities(provinceId: string) {
  type query = {
    province: string;
  };

  const { data } = await api.get<TBaseResponse<query, TCityResponse[]>>(`/city`, {
    params: {
      province: provinceId,
    },
  });

  return data.rajaongkir.results;
}
