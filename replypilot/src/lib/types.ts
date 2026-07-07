export type Sentiment = "positive" | "neutral" | "negative";

export interface Review {
  id: string;
  author: string;
  rating: number; // 1-5
  text: string;
  source: "Google" | "Yelp" | "Facebook";
  createdAt: string; // ISO date
  reply?: string;
  replied: boolean;
}

export interface BusinessProfile {
  id: string;
  name: string;
  category: string;
  tone: "warm" | "professional" | "playful";
  signature: string;
}

export const PLANS = {
  starter: {
    id: "starter",
    name: "Starter",
    price: 99,
    priceLabel: "$99",
    tagline: "For a single location getting started.",
    features: [
      "1 business location",
      "Up to 150 AI replies / month",
      "Google & Facebook reviews",
      "Review-request links (email)",
      "Sentiment dashboard",
    ],
    highlight: false,
  },
  pro: {
    id: "pro",
    name: "Pro",
    price: 299,
    priceLabel: "$299",
    tagline: "For growing multi-location businesses.",
    features: [
      "Up to 5 locations",
      "Unlimited AI replies",
      "Google, Yelp & Facebook",
      "SMS + email review requests",
      "Custom brand voice & auto-reply rules",
      "Priority support",
    ],
    highlight: true,
  },
} as const;

export type PlanId = keyof typeof PLANS;
