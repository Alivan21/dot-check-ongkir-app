import { TProvinceResponse } from "@/services/province/model";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/province`, {
      headers: {
        "Content-Type": "application/json",
        key: `${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    });

    const data = (await response.json()) as TProvinceResponse;
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch province data" }, { status: 500 });
  }
}
