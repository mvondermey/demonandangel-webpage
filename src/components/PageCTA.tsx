import Link from 'next/link'
import { ArrowRight, MessageCircle, Phone } from 'lucide-react'

type CtaAction = {
  label: string
  href: string
  kind?: 'phone' | 'whatsapp' | 'link'
}

type PageCTAProps = {
  title: string
  description: string
  primaryAction: CtaAction
  secondaryAction?: CtaAction
}

function ActionIcon({ kind }: { kind?: CtaAction['kind'] }) {
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

export default function PageCTA({
  title,
  description,
  primaryAction,
  secondaryAction,
}: PageCTAProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="cta-surface text-center">
          <h2 className="cta-heading">{title}</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/70">{description}</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
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
        </div>
      </div>
    </section>
  )
}
