import { TProvinceResponse } from "@/services/province/model";

export type TCityResponse = TProvinceResponse & {
  city_id: string;
  city_name: string;
  type: string;
  postal_code: string;
};
