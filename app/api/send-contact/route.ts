import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { naam, email, bericht } = body;

    const klantId = process.env.KLANT_ID;

    if (!klantId) {
      return NextResponse.json({ error: "Server configuratie fout" }, { status: 500 });
    }

    const response = await fetch(process.env.LANNIE_API_URL as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        naam,
        email,
        bericht,
        klantId,
      }),
    });

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json({ error: "Interne server fout" }, { status: 500 });
  }
}
