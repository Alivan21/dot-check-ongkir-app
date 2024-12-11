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
