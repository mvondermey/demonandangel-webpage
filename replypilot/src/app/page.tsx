import Link from "next/link";
import { Footer, Nav } from "@/components/SiteChrome";

const features = [
  {
    title: "AI replies in one click",
    body: "Every review gets an on-brand, human-sounding response drafted in seconds. Approve, tweak, or auto-post — you stay in control.",
    icon: "✍️",
  },
  {
    title: "Turn 1-stars into second chances",
    body: "Negative reviews are handled with empathy and a clear path to make things right — the responses that actually win customers back.",
    icon: "🛟",
  },
  {
    title: "Collect more 5-star reviews",
    body: "Send happy customers a one-tap review link by SMS or email. More reviews, higher rating, better Google ranking.",
    icon: "⭐",
  },
  {
    title: "Know how you're doing",
    body: "A live sentiment dashboard shows your rating trend, response rate, and which locations need attention.",
    icon: "📈",
  },
];

const steps = [
  {
    n: "1",
    title: "Connect your reviews",
    body: "Link Google, Yelp and Facebook in two minutes. New reviews flow into one inbox.",
  },
  {
    n: "2",
    title: "AI drafts the reply",
    body: "ReplyPilot writes a tailored response for each review, matched to your brand voice.",
  },
  {
    n: "3",
    title: "Approve & grow",
    body: "One click to post. Send review requests to happy customers and watch your rating climb.",
  },
];

export default function Home() {
  return (
    <main>
      <Nav />

      {/* Hero */}
      <section className="container-page pt-16 pb-20 text-center sm:pt-24">
        <p className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5 text-xs font-semibold text-brand-700">
          <span>New</span> AI that sounds like you, not a robot
        </p>
        <h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          Every review, answered.
          <span className="block text-brand-600">More customers, on autopilot.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          ReplyPilot drafts professional, on-brand replies to your Google, Yelp
          and Facebook reviews in seconds — and helps you collect more 5-star
          ratings. Reputation management that used to cost an agency, for a flat
          monthly price.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/pricing" className="btn-primary w-full sm:w-auto">
            Start 14-day free trial
          </Link>
          <Link href="/dashboard" className="btn-ghost w-full sm:w-auto">
            See a live demo →
          </Link>
        </div>
        <p className="mt-4 text-xs text-slate-400">
          No credit card required · Cancel anytime · Setup in under 5 minutes
        </p>

        {/* Social proof stats */}
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            ["4.9★", "Avg. rating our users reach"],
            ["3×", "More reviews collected"],
            ["8 min", "Saved per review"],
            ["92%", "Response rate"],
          ].map(([stat, label]) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-extrabold text-slate-900">{stat}</div>
              <div className="mt-1 text-xs text-slate-500">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-y border-slate-100 bg-slate-50 py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Your reputation, handled
            </h2>
            <p className="mt-4 text-slate-600">
              Reviews decide where new customers spend their money. ReplyPilot
              makes sure yours are working for you — not sitting ignored.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className="card">
                <div className="text-2xl">{f.icon}</div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Live in an afternoon
            </h2>
            <p className="mt-4 text-slate-600">
              No agency, no contracts, no learning curve.
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="relative">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-600 font-bold text-white">
                  {s.n}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="container-page pb-4">
        <figure className="mx-auto max-w-3xl rounded-3xl bg-brand-600 p-10 text-center text-white">
          <blockquote className="text-xl font-medium leading-relaxed sm:text-2xl">
            “We went from replying to maybe one review a week to answering every
            single one the same day. Our Google rating went from 4.1 to 4.7 in
            three months. ReplyPilot paid for itself the first weekend.”
          </blockquote>
          <figcaption className="mt-6 text-sm text-brand-100">
            Elena M. — owner, 3 café locations
          </figcaption>
        </figure>
      </section>

      {/* Final CTA */}
      <section className="container-page py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Stop losing customers to silence.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-600">
          Start your free trial today. Your next 5-star review is one reply away.
        </p>
        <div className="mt-8">
          <Link href="/pricing" className="btn-primary">
            Start free trial
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
