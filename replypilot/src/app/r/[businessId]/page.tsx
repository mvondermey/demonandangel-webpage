import { getBusiness } from "@/lib/store";

// Public "leave us a review" page. Happy customers are routed straight to the
// Google review form; unhappy customers are routed to private feedback first,
// so issues get fixed before they become public 1-stars.
export default function ReviewRequest({
  params,
}: {
  params: { businessId: string };
}) {
  const business = getBusiness();

  return (
    <main className="grid min-h-screen place-items-center bg-slate-50 px-5">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-brand-600 text-2xl text-white">
          ✈
        </div>
        <h1 className="text-2xl font-bold text-slate-900">
          How was your visit to {business.name}?
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Your feedback takes 10 seconds and means the world to our small team.
        </p>

        <div className="mt-8 flex justify-center gap-2 text-3xl">
          {[1, 2, 3, 4, 5].map((n) => (
            <a
              key={n}
              href={
                n >= 4
                  ? "https://search.google.com/local/writereview"
                  : `/r/${params.businessId}/feedback`
              }
              className="transition hover:scale-110"
              aria-label={`${n} stars`}
            >
              ⭐
            </a>
          ))}
        </div>

        <p className="mt-8 text-xs text-slate-400">
          Powered by ReplyPilot
        </p>
      </div>
    </main>
  );
}
