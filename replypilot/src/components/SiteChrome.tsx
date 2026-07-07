import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 font-bold text-slate-900">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-600 text-white">
        ✈
      </span>
      <span className="text-lg tracking-tight">ReplyPilot</span>
    </Link>
  );
}

export function Nav() {
  return (
    <header className="border-b border-slate-100">
      <div className="container-page flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="/#features" className="hover:text-slate-900">
            Features
          </a>
          <a href="/#how" className="hover:text-slate-900">
            How it works
          </a>
          <Link href="/pricing" className="hover:text-slate-900">
            Pricing
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="hidden text-sm font-semibold text-slate-700 hover:text-slate-900 sm:block">
            Log in
          </Link>
          <Link href="/pricing" className="btn-primary !py-2">
            Start free trial
          </Link>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-100 py-12">
      <div className="container-page flex flex-col items-start justify-between gap-6 text-sm text-slate-500 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <Logo />
        </div>
        <p>© {new Date().getFullYear()} ReplyPilot. Win back every customer.</p>
        <div className="flex gap-6">
          <Link href="/pricing" className="hover:text-slate-900">
            Pricing
          </Link>
          <Link href="/dashboard" className="hover:text-slate-900">
            Dashboard
          </Link>
        </div>
      </div>
    </footer>
  );
}
