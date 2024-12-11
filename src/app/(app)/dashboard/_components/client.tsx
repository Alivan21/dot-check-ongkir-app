"use client";

import ShippingCompare from "./shipping/compare";

export default function DashboardClient() {
  return (
    <section className="space-y-8">
      <h1 className="text-xl font-medium">Cek Harga Ongkir Raja Ongkir</h1>
      <ShippingCompare />
    </section>
  );
}
