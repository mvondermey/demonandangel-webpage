import { NextResponse } from "next/server";
import { listReviews } from "@/lib/store";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({ reviews: listReviews() });
}
