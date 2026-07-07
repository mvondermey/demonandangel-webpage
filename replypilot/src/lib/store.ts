import type { BusinessProfile, Review } from "./types";

// Multi-tenant in-memory store for the MVP. Each business ("tenant") has its
// own profile and review inbox. Swap this module for a Prisma/Postgres-backed
// repository in production — every consumer only uses the exported functions,
// so the persistence layer can change without touching the app.

interface Tenant {
  profile: BusinessProfile;
  reviews: Review[];
}

const tenants: Record<string, Tenant> = {
  demo: {
    profile: {
      id: "demo",
      name: "Bella Vista Trattoria",
      category: "Italian restaurant",
      tone: "warm",
      language: "en",
      signature: "— The Bella Vista Team",
      initials: "BV",
    },
    reviews: [
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
    ],
  },

  studio: {
    profile: {
      id: "studio",
      name: "Studio Belle Peau",
      category: "Kosmetikstudio",
      tone: "warm",
      language: "de",
      signature: "— Dein Studio Belle Peau Team",
      initials: "BP",
    },
    reviews: [
      {
        id: "s1",
        author: "Lena K.",
        rating: 5,
        text: "Beste Gesichtsbehandlung, die ich je hatte! Meine Haut strahlt seit Tagen und die Kosmetikerin hat sich super viel Zeit für mich genommen. Absolute Empfehlung!",
        source: "Google",
        createdAt: "2026-07-06T11:10:00Z",
        replied: false,
      },
      {
        id: "s2",
        author: "Sandra M.",
        rating: 2,
        text: "Mein Termin hat sich um über 30 Minuten verzögert und die Behandlung wirkte danach etwas gehetzt. Das Ergebnis war okay, aber der Ablauf hat mich gestört.",
        source: "Google",
        createdAt: "2026-07-05T16:30:00Z",
        replied: false,
      },
      {
        id: "s3",
        author: "Nadine T.",
        rating: 4,
        text: "Sehr schöne Wimpernverlängerung, hält wirklich gut. Nur die Preise sind zuletzt etwas gestiegen. Ich komme aber trotzdem wieder.",
        source: "Facebook",
        createdAt: "2026-07-04T14:00:00Z",
        replied: false,
      },
      {
        id: "s4",
        author: "Melanie R.",
        rating: 1,
        text: "Nach der Behandlung hatte ich eine allergische Reaktion und ich wurde vorher nicht nach Allergien oder Unverträglichkeiten gefragt. Das finde ich fahrlässig.",
        source: "Google",
        createdAt: "2026-07-03T18:45:00Z",
        replied: false,
      },
      {
        id: "s5",
        author: "Julia S.",
        rating: 5,
        text: "Tolles Ambiente, super freundliches Team und meine Nägel sind einfach perfekt geworden. Ich fühle mich hier rundum wohl!",
        source: "Google",
        createdAt: "2026-07-02T13:20:00Z",
        reply:
          "Liebe Julia, ganz herzlichen Dank für deine lieben Worte! Es freut uns riesig, dass du dich bei uns so wohlfühlst und mit deinen Nägeln glücklich bist. Wir freuen uns schon auf deinen nächsten Besuch! — Dein Studio Belle Peau Team",
        replied: true,
      },
    ],
  },
};

const DEFAULT_TENANT = "demo";

function tenant(businessId?: string): Tenant {
  return tenants[businessId ?? DEFAULT_TENANT] ?? tenants[DEFAULT_TENANT];
}

export function listBusinesses(): BusinessProfile[] {
  return Object.values(tenants).map((t) => t.profile);
}

export function getBusiness(businessId?: string): BusinessProfile {
  return tenant(businessId).profile;
}

export function listReviews(businessId?: string): Review[] {
  return [...tenant(businessId).reviews].sort(
    (a, b) => +new Date(b.createdAt) - +new Date(a.createdAt),
  );
}

export function getReview(
  businessId: string,
  id: string,
): Review | undefined {
  return tenant(businessId).reviews.find((r) => r.id === id);
}

export function saveReply(
  businessId: string,
  id: string,
  reply: string,
): Review | undefined {
  const review = tenant(businessId).reviews.find((r) => r.id === id);
  if (!review) return undefined;
  review.reply = reply;
  review.replied = true;
  return review;
}

export function addReview(businessId: string, review: Review): void {
  const t = tenant(businessId);
  t.reviews = [review, ...t.reviews];
}
