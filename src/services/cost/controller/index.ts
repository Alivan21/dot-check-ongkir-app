import { api } from "@/lib/axios";
import { TBaseResponse } from "@/types/base-response";
import { Courier } from "@/types/courier";
import { TCostRequest, TCostResponse } from "../model";

export async function getCosts({ origin, destination, weight, courier }: TCostRequest) {
  type query = {
    origin: string;
    destination: string;
    weight: number;
    courier: Courier;
  };
  const formData = new FormData();
  formData.append("origin", origin);
  formData.append("destination", destination);
  formData.append("weight", weight.toString());
  formData.append("courier", courier);
  const { data } = await api.post<TBaseResponse<query, TCostResponse[]>>("/cost", formData);
  return data.rajaongkir.results[0];
}
