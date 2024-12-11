"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Combobox from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetCities } from "@/services/city/hooks";
import { getCosts } from "@/services/cost/controller";
import { TCostRequest, TCostResponse } from "@/services/cost/model";
import { useGetProvinces } from "@/services/province/hooks";
import { Courier } from "@/types/courier";
import toRupiah from "@/utils/to-rupiah";
import { useMutation } from "@tanstack/react-query";
import { useMemo, useState } from "react";

export default function ShippingCompare() {
  const [originProvince, setOriginProvince] = useState("");
  const [originCity, setOriginCity] = useState("");
  const [destinationProvince, setDestinationProvince] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [weight, setWeight] = useState("");
  const [courier, setCourier] = useState("jne");
  const [costs, setCosts] = useState<TCostResponse>({
    code: "",
    costs: [],
    name: "",
  });

  const couriers = [
    { id: "jne", name: "JNE" },
    { id: "pos", name: "POS Indonesia" },
    { id: "tiki", name: "TIKI" },
  ];
  const { data: provinceData } = useGetProvinces();
  const { data: citiesOriginData } = useGetCities(originProvince);
  const { data: citiesDestinationData } = useGetCities(destinationProvince);
  const { mutateAsync: getCost, isPending } = useMutation({
    mutationFn: (request: TCostRequest) => getCosts(request),
    onSuccess: data => setCosts(data),
  });

  const provinceOptions = useMemo(
    () =>
      (provinceData ?? []).map(province => ({
        label: province.province,
        value: province.province_id,
      })),
    [provinceData]
  );

  const cityOriginOptions = useMemo(
    () =>
      (citiesOriginData ?? []).map(city => ({
        label: city.city_name,
        value: city.city_id,
      })),
    [citiesOriginData]
  );

  const cityDestinationOptions = useMemo(
    () =>
      (citiesDestinationData ?? []).map(city => ({
        label: city.city_name,
        value: city.city_id,
      })),
    [citiesDestinationData]
  );

  const handleCheck = async () => {
    await getCost({
      origin: originCity,
      destination: destinationCity,
      weight: parseInt(weight),
      courier: courier as Courier,
    });
  };

  return (
    <Card className="mb-8">
      <CardHeader className="p-3">
        <CardTitle className="sr-only">Cek Harga Ongkir</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2 space-y-2">
            <Label htmlFor="originProvince">Provinsi Asal</Label>
            <Combobox
              onChangeAction={setOriginProvince}
              options={provinceOptions}
              placeholder="Masukkan provinsi asal"
            />
          </div>
          <div className="flex flex-col gap-2 space-y-2">
            <Label htmlFor="originCity">Kota Asal</Label>
            <Combobox
              disabled={originProvince === ""}
              onChangeAction={setOriginCity}
              options={cityOriginOptions}
              placeholder="Masukkan kota asal"
            />
          </div>
          <div className="flex flex-col gap-2 space-y-2">
            <Label htmlFor="destinationProvince">Provinsi Tujuan</Label>
            <Combobox
              onChangeAction={setDestinationProvince}
              options={provinceOptions}
              placeholder="Masukkan provinsi tujuan"
            />
          </div>
          <div className="flex flex-col gap-2 space-y-2">
            <Label htmlFor="destinationCity">Kota Tujuan</Label>
            <Combobox
              disabled={destinationProvince === ""}
              onChangeAction={setDestinationCity}
              options={cityDestinationOptions}
              placeholder="Masukkan kota tujuan"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="weight">Berat (kg)</Label>
            <Input
              id="weight"
              onChange={e => setWeight(e.target.value)}
              placeholder="Masukkan berat paket"
              type="number"
              value={weight}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="courier">Kurir</Label>
            <Select onValueChange={setCourier} value={courier}>
              <SelectTrigger id="courier">
                <SelectValue placeholder="Pilih kurir" />
              </SelectTrigger>
              <SelectContent>
                {couriers.map(c => (
                  <SelectItem key={c.id} value={c.id.toString()}>
                    {c.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button disabled={isPending} onClick={() => void handleCheck()}>
          {isPending ? "Memeriksa..." : "Cek Harga Pengiriman"}
        </Button>
      </CardFooter>
      {costs ? (
        <CardContent>
          <h3 className="mb-2 text-lg font-semibold">List Harga Pengiriman</h3>
          <Table>
            <TableCaption>{costs.name}</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Layanan</TableHead>
                <TableHead>Estimasi</TableHead>
                <TableHead>Harga</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {costs.costs.map((cost, index) => (
                <TableRow key={index}>
                  <TableCell>{cost.service}</TableCell>
                  <TableCell>{cost.cost[0].etd} hari</TableCell>
                  <TableCell>{toRupiah(cost.cost[0].value ?? 0)}</TableCell>
                </TableRow>
              ))}
              {costs.costs.length === 0 && (
                <TableRow>
                  <TableCell className="text-center" colSpan={3}>
                    Tidak ada data harga pengiriman
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      ) : null}
    </Card>
  );
}
