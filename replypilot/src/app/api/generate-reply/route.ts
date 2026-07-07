import { NextResponse } from "next/server";
import { generateReply } from "@/lib/ai";
import { getBusiness, getReview, saveReply } from "@/lib/store";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const businessId = (body?.businessId as string) ?? "demo";
  const reviewId = body?.reviewId as string | undefined;
  if (!reviewId) {
    return NextResponse.json({ error: "reviewId is required" }, { status: 400 });
  }

  const review = getReview(businessId, reviewId);
  if (!review) {
    return NextResponse.json({ error: "Review not found" }, { status: 404 });
  }

  const { reply, source } = await generateReply(getBusiness(businessId), review);
  return NextResponse.json({ reply, source });
}

// Approve/save a (possibly edited) reply.
export async function PUT(req: Request) {
  const body = await req.json().catch(() => null);
  const businessId = (body?.businessId as string) ?? "demo";
  const reviewId = body?.reviewId as string | undefined;
  const reply = body?.reply as string | undefined;
  if (!reviewId || !reply) {
    return NextResponse.json(
      { error: "reviewId and reply are required" },
      { status: 400 },
    );
  }
  const updated = saveReply(businessId, reviewId, reply);
  if (!updated) {
    return NextResponse.json({ error: "Review not found" }, { status: 404 });
  }
  return NextResponse.json({ review: updated });
}
