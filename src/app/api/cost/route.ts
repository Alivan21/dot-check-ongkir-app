import { TCostResponse } from "@/services/cost/model";
import { Courier } from "@/types/courier";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      origin: string;
      destination: string;
      weight: string;
      courier: Courier;
    };
    const formData = new FormData();
    formData.append("origin", body.origin);
    formData.append("destination", body.destination);
    formData.append("weight", body.weight);
    formData.append("courier", body.courier);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cost`, {
      method: "POST",
      headers: {
        key: `${process.env.NEXT_PUBLIC_API_KEY}`,
      },
      body: formData,
    });

    const data = (await response.json()) as TCostResponse;
    return NextResponse.json(data);
  } catch (error) {
    console.error("Cost calculation error:", error);
    return NextResponse.json(
      { error: "Failed to calculate shipping cost", details: error },
      { status: 500 }
    );
  }
}
