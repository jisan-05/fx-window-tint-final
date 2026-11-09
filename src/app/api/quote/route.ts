import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      phone,
      email,
      vehicleYear,
      vehicleMake,
      vehicleModel,
      service,
      startingPrice,
      preferredDate,
      notes,
    } = body;

    // Validate essential fields
    if (!fullName || typeof fullName !== "string" || !fullName.trim()) {
      return NextResponse.json(
        { error: "Full name is required." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.replace(/\D/g, "").length < 10) {
      return NextResponse.json(
        { error: "A valid 10-digit phone number is required." },
        { status: 400 }
      );
    }

    if (!vehicleYear || !vehicleMake || !vehicleModel) {
      return NextResponse.json(
        { error: "Vehicle year, make, and model are required." },
        { status: 400 }
      );
    }

    // Generate reference ID for tracking
    const quoteId = `FX-${Date.now().toString(36).toUpperCase()}`;
    const timestamp = new Date().toISOString();

    // Log the lead details server-side (ready for email/webhook integrations like Resend, SendGrid, or SMS)
    console.log("==========================================");
    console.log(`[NEW QUOTE INQUIRY RECEIVED] ID: ${quoteId}`);
    console.log(`Timestamp: ${timestamp}`);
    console.log(`Customer: ${fullName.trim()} | Phone: ${phone.trim()} | Email: ${email || "Not provided"}`);
    console.log(`Vehicle: ${vehicleYear} ${vehicleMake} ${vehicleModel}`);
    console.log(`Service: ${service} (Starts at $${startingPrice})`);
    if (preferredDate) console.log(`Preferred Date: ${preferredDate}`);
    if (notes) console.log(`Customer Notes: ${notes}`);
    console.log("==========================================");

    return NextResponse.json(
      {
        success: true,
        message: "Your quote request has been received by our Houston shop.",
        quoteId,
        receivedAt: timestamp,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Quote API submission error:", error);
    return NextResponse.json(
      { error: "Failed to process quote inquiry. Please call (832) 768-6256." },
      { status: 500 }
    );
  }
}

