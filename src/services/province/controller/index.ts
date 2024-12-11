import { api } from "@/lib/axios";
import { TBaseResponse } from "@/types/base-response";
import { TProvinceResponse } from "../model";

export async function getProvinces() {
  const { data } = await api.get<TBaseResponse<null, TProvinceResponse[]>>("/province");
  return data.rajaongkir.results;
}
