import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Corp de cerere invalid." }, { status: 400 });
  }

  const { name, email, message } = payload;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Numele, emailul și mesajul sunt obligatorii." },
      { status: 400 },
    );
  }

  // TODO: connect to an email/CRM provider. For now this just acknowledges receipt.
  console.log("[contact]", payload);

  return NextResponse.json({ ok: true });
}
