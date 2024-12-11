import { TCityResponse } from "@/services/city/model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const province = searchParams.get("province");

    if (!province) {
      return NextResponse.json({ error: "Province ID is required" }, { status: 400 });
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/city?province=${province}`, {
      headers: {
        "Content-Type": "application/json",
        key: `${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    });

    const data = (await response.json()) as TCityResponse;
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch city data" }, { status: 500 });
  }
}
