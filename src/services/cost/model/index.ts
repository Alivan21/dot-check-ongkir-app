import { Courier } from "@/types/courier";

type TCost = {
  service: string;
  description: string;
  cost: {
    value: number;
    etd: string;
    note: string;
  }[];
};

export type TCostResponse = {
  code: string;
  name: string;
  costs: TCost[];
};

export type TCostRequest = {
  origin: string;
  destination: string;
  weight: number;
  courier: Courier;
};
