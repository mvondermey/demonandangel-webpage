import { NextResponse } from "next/server";
import { getBusiness, listReviews } from "@/lib/store";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const businessId = searchParams.get("businessId") ?? "demo";
  return NextResponse.json({
    business: getBusiness(businessId),
    reviews: listReviews(businessId),
  });
}
