# ReplyPilot

**AI reputation management for local businesses.** Draft on-brand replies to
every Google / Yelp / Facebook review in seconds, and collect more 5-star
ratings on autopilot.

This is a working MVP: a marketing site, Stripe-powered subscription checkout,
and a functional dashboard where AI drafts review replies you can edit and post.

## Why this business

- **Validated market:** Podium and Birdeye built 9-figure ARR selling review
  management to local businesses at $200–500/mo. The willingness to pay is proven.
- **Huge TAM:** every restaurant, dentist, salon, and contractor has reviews and
  no time to respond. Millions of them.
- **Recurring revenue:** 1,000 customers × $250/mo ≈ $3M ARR. ~3,300 customers
  gets you to $10M ARR. The math is a sales-and-retention problem, not a tech one.
- **AI is the wedge:** instant, on-brand replies at a fraction of an agency's cost.

## Quick start

```bash
cd replypilot
npm install
cp .env.example .env.local   # optional — works without keys in demo mode
npm run dev                  # http://localhost:3000
```

The app works fully **without any API keys**:

- **No `ANTHROPIC_API_KEY`** → replies use a high-quality local template.
- **No `STRIPE_SECRET_KEY`** → checkout simulates a successful subscription and
  drops you into the dashboard.

Add real keys in `.env.local` to switch AI drafting and billing to production.

## What's built

| Route | What it does |
| --- | --- |
| `/` | Marketing landing page (hero, features, social proof, CTA) |
| `/pricing` | Two plans with live Stripe checkout |
| `/dashboard` | Review inbox — generate, edit, and post AI replies; live stats |
| `/r/[businessId]` | Public review-request page with smart 4★-gating |
| `POST /api/generate-reply` | Generate an AI reply for a review |
| `PUT /api/generate-reply` | Save/post an approved reply |
| `POST /api/checkout` | Create a Stripe subscription checkout session |
| `GET /api/reviews` | List reviews for the dashboard |

## Architecture

- **Next.js 14 (App Router) + TypeScript + Tailwind.**
- **AI:** `src/lib/ai.ts` — Anthropic Haiku for cheap, fast, high-volume replies,
  with a deterministic template fallback so the product never hard-fails.
- **Billing:** `src/lib/stripe.ts` — Stripe subscriptions, demo mode when unkeyed.
- **Data:** `src/lib/store.ts` — in-memory store seeded with realistic reviews.
  Every consumer uses only the exported functions, so swapping in
  Prisma/Postgres is a one-file change.

## Roadmap to production (next steps)

1. **Persistence:** replace the in-memory store with Postgres + Prisma.
2. **Auth & multi-tenant:** accounts, per-business data isolation (e.g. NextAuth).
3. **Real review sync:** Google Business Profile API + Yelp/Facebook ingestion.
4. **Stripe webhooks:** activate/deactivate access on subscription events.
5. **Auto-reply rules & SMS review requests** (Twilio) for the Pro plan.

## Go-to-market (how this becomes revenue)

1. Pick one vertical (e.g. dentists) and one city; cold-email 100/day with a
   free "we already drafted replies to your last 5 reviews" teaser.
2. Land at $99–299/mo. Reinvest into paid search on "reply to Google reviews".
3. Add agencies/resellers for multi-location deals once retention is proven.
