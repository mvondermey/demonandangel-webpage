import { NextResponse } from "next/server";
import { appUrl, getStripe, priceIdForPlan } from "@/lib/stripe";
import type { PlanId } from "@/lib/types";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const plan = (body?.plan as PlanId) ?? "pro";

  const stripe = getStripe();

  // Demo mode: no Stripe key configured -> simulate a successful subscription
  // so the whole flow is testable without credentials.
  if (!stripe) {
    return NextResponse.json({
      url: `${appUrl()}/dashboard?welcome=1&plan=${plan}&demo=1`,
      demo: true,
    });
  }

  const price = priceIdForPlan(plan);
  if (!price) {
    return NextResponse.json(
      { error: "Price is not configured for this plan" },
      { status: 500 },
    );
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price, quantity: 1 }],
      success_url: `${appUrl()}/dashboard?welcome=1&plan=${plan}`,
      cancel_url: `${appUrl()}/pricing?canceled=1`,
      allow_promotion_codes: true,
    });
    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout failed:", err);
    return NextResponse.json(
      { error: "Could not start checkout" },
      { status: 500 },
    );
  }
}
