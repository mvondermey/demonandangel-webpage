"use client";

import { useEffect, useMemo, useState } from "react";
import { Logo } from "@/components/SiteChrome";
import type { Review } from "@/lib/types";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="text-amber-500" aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(rating)}
      <span className="text-slate-300">{"★".repeat(5 - rating)}</span>
    </span>
  );
}

function timeAgo(iso: string): string {
  const diff = Date.now() - +new Date(iso);
  const days = Math.floor(diff / 86_400_000);
  if (days <= 0) return "today";
  if (days === 1) return "yesterday";
  return `${days} days ago`;
}

export default function Dashboard() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [drafts, setDrafts] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState<Record<string, "gen" | "save" | undefined>>({});
  const [aiTag, setAiTag] = useState<Record<string, "ai" | "template">>({});

  async function load() {
    setLoading(true);
    const res = await fetch("/api/reviews");
    const data = await res.json();
    setReviews(data.reviews);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  const stats = useMemo(() => {
    const total = reviews.length;
    const avg =
      total === 0
        ? 0
        : reviews.reduce((s, r) => s + r.rating, 0) / total;
    const replied = reviews.filter((r) => r.replied).length;
    const pending = total - replied;
    return {
      avg: avg.toFixed(1),
      total,
      replied,
      pending,
      rate: total === 0 ? 0 : Math.round((replied / total) * 100),
    };
  }, [reviews]);

  async function generate(id: string) {
    setBusy((b) => ({ ...b, [id]: "gen" }));
    try {
      const res = await fetch("/api/generate-reply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reviewId: id }),
      });
      const data = await res.json();
      if (data.reply) {
        setDrafts((d) => ({ ...d, [id]: data.reply }));
        setAiTag((t) => ({ ...t, [id]: data.source }));
      }
    } finally {
      setBusy((b) => ({ ...b, [id]: undefined }));
    }
  }

  async function approve(id: string) {
    const reply = drafts[id];
    if (!reply?.trim()) return;
    setBusy((b) => ({ ...b, [id]: "save" }));
    try {
      await fetch("/api/generate-reply", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reviewId: id, reply }),
      });
      await load();
      setDrafts((d) => {
        const next = { ...d };
        delete next[id];
        return next;
      });
    } finally {
      setBusy((b) => ({ ...b, [id]: undefined }));
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="container-page flex h-16 items-center justify-between">
          <Logo />
          <div className="flex items-center gap-3 text-sm">
            <span className="hidden text-slate-500 sm:inline">Bella Vista Trattoria</span>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-100 font-semibold text-brand-700">
              BV
            </span>
          </div>
        </div>
      </header>

      <main className="container-page py-8">
        <h1 className="text-2xl font-bold text-slate-900">Review inbox</h1>
        <p className="mt-1 text-sm text-slate-500">
          Draft a reply with AI, edit if you like, then post — all in one place.
        </p>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ["Avg. rating", `${stats.avg}★`],
            ["Total reviews", stats.total],
            ["Awaiting reply", stats.pending],
            ["Response rate", `${stats.rate}%`],
          ].map(([label, value]) => (
            <div key={label as string} className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="text-2xl font-bold text-slate-900">{value}</div>
              <div className="text-xs text-slate-500">{label}</div>
            </div>
          ))}
        </div>

        {/* Reviews */}
        <div className="mt-8 space-y-4">
          {loading && <p className="text-sm text-slate-500">Loading reviews…</p>}
          {!loading &&
            reviews.map((r) => (
              <article key={r.id} className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-900">{r.author}</span>
                      <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
                        {r.source}
                      </span>
                      <span className="text-xs text-slate-400">{timeAgo(r.createdAt)}</span>
                    </div>
                    <div className="mt-1">
                      <Stars rating={r.rating} />
                    </div>
                  </div>
                  {r.replied ? (
                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                      Replied
                    </span>
                  ) : (
                    <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                      Needs reply
                    </span>
                  )}
                </div>

                <p className="mt-3 text-sm text-slate-700">{r.text}</p>

                {/* Existing / posted reply */}
                {r.replied && r.reply && (
                  <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Your reply
                    </div>
                    <p className="text-sm text-slate-700">{r.reply}</p>
                  </div>
                )}

                {/* Draft workflow */}
                {!r.replied && (
                  <div className="mt-4">
                    {drafts[r.id] === undefined ? (
                      <button
                        onClick={() => generate(r.id)}
                        disabled={busy[r.id] === "gen"}
                        className="btn-primary !py-2"
                      >
                        {busy[r.id] === "gen" ? "Drafting…" : "✨ Draft reply with AI"}
                      </button>
                    ) : (
                      <div>
                        <div className="mb-1 flex items-center justify-between">
                          <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                            AI draft — edit before posting
                          </label>
                          {aiTag[r.id] === "template" && (
                            <span className="text-xs text-slate-400">
                              template mode (no API key)
                            </span>
                          )}
                        </div>
                        <textarea
                          value={drafts[r.id]}
                          onChange={(e) =>
                            setDrafts((d) => ({ ...d, [r.id]: e.target.value }))
                          }
                          rows={4}
                          className="w-full rounded-xl border border-slate-300 p-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                        />
                        <div className="mt-2 flex gap-2">
                          <button
                            onClick={() => approve(r.id)}
                            disabled={busy[r.id] === "save"}
                            className="btn-primary !py-2"
                          >
                            {busy[r.id] === "save" ? "Posting…" : "Approve & post"}
                          </button>
                          <button
                            onClick={() => generate(r.id)}
                            disabled={busy[r.id] === "gen"}
                            className="btn-ghost !py-2"
                          >
                            {busy[r.id] === "gen" ? "…" : "↻ Regenerate"}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </article>
            ))}
        </div>
      </main>
    </div>
  );
}
