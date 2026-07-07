import type { BusinessProfile, Review } from "./types";

// In-memory store for the MVP. Swap this module for a Prisma/Postgres-backed
// repository in production — every consumer only uses the exported functions,
// so the persistence layer can change without touching the app.

export const business: BusinessProfile = {
  id: "demo",
  name: "Bella Vista Trattoria",
  category: "Italian restaurant",
  tone: "warm",
  signature: "— The Bella Vista Team",
};

let reviews: Review[] = [
  {
    id: "r1",
    author: "Marcus T.",
    rating: 5,
    text: "Best carbonara I've had outside of Rome. The service was quick and the staff made our anniversary feel special. We'll be back!",
    source: "Google",
    createdAt: "2026-07-05T18:20:00Z",
    replied: false,
  },
  {
    id: "r2",
    author: "Priya N.",
    rating: 2,
    text: "Food was good but we waited almost 40 minutes for a table even with a reservation. Felt disorganized on a Friday night.",
    source: "Google",
    createdAt: "2026-07-04T20:05:00Z",
    replied: false,
  },
  {
    id: "r3",
    author: "Dan R.",
    rating: 4,
    text: "Great atmosphere and the tiramisu is a must. Only knock is the pasta was a touch salty for me, but I'd still recommend it.",
    source: "Yelp",
    createdAt: "2026-07-03T19:40:00Z",
    replied: false,
  },
  {
    id: "r4",
    author: "Sofia L.",
    rating: 1,
    text: "Really disappointed. Ordered gluten-free and got regular pasta. My partner has celiac — this is a safety issue, not just a mistake.",
    source: "Facebook",
    createdAt: "2026-07-02T21:15:00Z",
    replied: false,
  },
  {
    id: "r5",
    author: "Kenji A.",
    rating: 5,
    text: "Cozy spot, fair prices, and the owner came by to check on us. Exactly the kind of neighborhood place you want to support.",
    source: "Google",
    createdAt: "2026-07-01T18:55:00Z",
    reply:
      "Grazie, Kenji! It means the world that you felt at home with us. Come hungry next time — dessert's on us. — The Bella Vista Team",
    replied: true,
  },
];

export function getBusiness(): BusinessProfile {
  return business;
}

export function listReviews(): Review[] {
  return [...reviews].sort(
    (a, b) => +new Date(b.createdAt) - +new Date(a.createdAt),
  );
}

export function getReview(id: string): Review | undefined {
  return reviews.find((r) => r.id === id);
}

export function saveReply(id: string, reply: string): Review | undefined {
  const review = reviews.find((r) => r.id === id);
  if (!review) return undefined;
  review.reply = reply;
  review.replied = true;
  return review;
}

export function addReview(review: Review): void {
  reviews = [review, ...reviews];
}
