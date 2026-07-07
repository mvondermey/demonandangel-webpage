"use client";

import { useState } from "react";
import { Footer, Nav } from "@/components/SiteChrome";
import { PLANS, type PlanId } from "@/lib/types";

export default function PricingPage() {
  const [loading, setLoading] = useState<PlanId | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function subscribe(plan: PlanId) {
    setError(null);
    setLoading(plan);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || "Something went wrong. Please try again.");
        setLoading(null);
      }
    } catch {
      setError("Network error. Please try again.");
      setLoading(null);
    }
  }

  return (
    <main>
      <Nav />
      <section className="container-page py-16 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Simple pricing that pays for itself
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-slate-600">
          One won-back customer usually covers the whole month. Every plan
          includes a 14-day free trial.
        </p>

        {error && (
          <p className="mx-auto mt-6 max-w-md rounded-lg bg-red-50 px-4 py-2 text-sm text-red-700">
            {error}
          </p>
        )}

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {(Object.values(PLANS) as (typeof PLANS)[PlanId][]).map((plan) => (
            <div
              key={plan.id}
              className={`card text-left ${
                plan.highlight
                  ? "ring-2 ring-brand-500"
                  : ""
              }`}
            >
              {plan.highlight && (
                <span className="mb-3 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                  Most popular
                </span>
              )}
              <h2 className="text-xl font-bold text-slate-900">{plan.name}</h2>
              <p className="mt-1 text-sm text-slate-500">{plan.tagline}</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-slate-900">
                  {plan.priceLabel}
                </span>
                <span className="text-slate-500">/month</span>
              </div>
              <button
                onClick={() => subscribe(plan.id as PlanId)}
                disabled={loading !== null}
                className={plan.highlight ? "btn-primary mt-6 w-full" : "btn-ghost mt-6 w-full"}
              >
                {loading === plan.id ? "Starting…" : "Start free trial"}
              </button>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-0.5 text-brand-600">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-xl text-xs text-slate-400">
          Prices in USD. Cancel anytime from your dashboard. Need multiple
          brands or 10+ locations? Contact us for volume pricing.
        </p>
      </section>
      <Footer />
    </main>
  );
}
