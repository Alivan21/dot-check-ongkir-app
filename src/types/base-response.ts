export type TBaseResponse<TQuery, TResult> = {
  rajaongkir: {
    query: TQuery;
    status: {
      code: number;
      description: string;
    };
    results: TResult;
  };
};
