import Link from 'next/link'
import { ArrowRight, MessageCircle, Phone } from 'lucide-react'

type HeroAction = {
  label: string
  href: string
  kind?: 'phone' | 'whatsapp' | 'link'
}

type HeroLink = {
  label: string
  href: string
}

type MarketingHeroProps = {
  eyebrow?: string
  title: string
  description: string
  highlights?: string[]
  primaryAction: HeroAction
  secondaryAction?: HeroAction
  supportingLinks?: HeroLink[]
  align?: 'left' | 'center'
}

function ActionIcon({ kind }: { kind?: HeroAction['kind'] }) {
  if (kind === 'phone') {
    return <Phone className="h-5 w-5" />
  }

  if (kind === 'whatsapp') {
    return <MessageCircle className="h-5 w-5" />
  }

  return <ArrowRight className="h-5 w-5" />
}

function isInternalHref(href: string) {
  return href.startsWith('/')
}

export default function MarketingHero({
  eyebrow,
  title,
  description,
  highlights = [],
  primaryAction,
  secondaryAction,
  supportingLinks = [],
  align = 'left',
}: MarketingHeroProps) {
  const isCentered = align === 'center'

  return (
    <section className="page-hero relative overflow-hidden">
      <div className="page-hero-glow page-hero-glow-primary" />
      <div className="page-hero-glow page-hero-glow-secondary" />
      <div className={`relative z-10 mx-auto max-w-6xl px-6 ${isCentered ? 'text-center' : ''}`}>
        <div className={isCentered ? 'mx-auto max-w-4xl' : 'max-w-3xl'}>
          {eyebrow ? (
            <div className={`mb-6 flex ${isCentered ? 'justify-center' : ''}`}>
              <span className="page-eyebrow">{eyebrow}</span>
            </div>
          ) : null}

          <h1 className="mb-6 text-5xl font-bold md:text-6xl">
            <span className="gradient-text">{title}</span>
          </h1>

          <p className="page-hero-copy mb-8 text-xl md:text-2xl">{description}</p>

          {highlights.length > 0 ? (
            <div className={`mb-8 flex flex-wrap gap-3 ${isCentered ? 'justify-center' : ''}`}>
              {highlights.map((highlight) => (
                <span key={highlight} className="page-highlight-pill">
                  {highlight}
                </span>
              ))}
            </div>
          ) : null}

          <div className={`flex flex-col gap-4 sm:flex-row ${isCentered ? 'justify-center' : ''}`}>
            {isInternalHref(primaryAction.href) ? (
              <Link href={primaryAction.href} className="btn-primary inline-flex items-center justify-center gap-2">
                <ActionIcon kind={primaryAction.kind} />
                {primaryAction.label}
              </Link>
            ) : (
              <a href={primaryAction.href} className="btn-primary inline-flex items-center justify-center gap-2">
                <ActionIcon kind={primaryAction.kind} />
                {primaryAction.label}
              </a>
            )}

            {secondaryAction ? (
              <Link
                href={secondaryAction.href}
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                <ActionIcon kind={secondaryAction.kind} />
                {secondaryAction.label}
              </Link>
            ) : null}
          </div>

          {supportingLinks.length > 0 ? (
            <div className={`mt-6 flex flex-wrap gap-3 text-sm ${isCentered ? 'justify-center' : ''}`}>
              {supportingLinks.map((link) => (
                <Link key={link.href} href={link.href} className="page-support-link">
                  {link.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
