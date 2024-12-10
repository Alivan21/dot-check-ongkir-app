import { ChartColumnStacked, Container, Truck } from "lucide-react";

export const TeamDisplayMenu = {
  name: "Cek RajaOngkir",
  logo: Truck,
  plan: "Enterprise",
};

export const NavMenu = [
  {
    title: "Perbandingan Tarif",
    url: "/dashboard",
    icon: ChartColumnStacked,
  },
  {
    title: "Cek Ongkir",
    url: "/cek-ongkir",
    icon: Container,
  },
];
