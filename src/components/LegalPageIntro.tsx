import Link from 'next/link'

type LegalPageIntroProps = {
  title: string
  description: string
}

export default function LegalPageIntro({ title, description }: LegalPageIntroProps) {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-4xl px-6">
        <div className="legal-hero">
          <div className="mb-4 flex flex-wrap gap-3 text-sm">
            <Link href="/kontakt" className="page-support-link">
              Kontakt
            </Link>
            <Link href="/impressum" className="page-support-link">
              Impressum
            </Link>
            <Link href="/datenschutz" className="page-support-link">
              Datenschutz
            </Link>
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="gradient-text">{title}</span>
          </h1>
          <p className="max-w-2xl text-base text-white/70 md:text-lg">{description}</p>
        </div>
      </div>
    </section>
  )
}
