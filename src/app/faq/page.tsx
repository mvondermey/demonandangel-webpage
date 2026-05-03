import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import MarketingHero from '@/components/MarketingHero'
import PageCTA from '@/components/PageCTA'
import { createPageMetadata } from '@/lib/seo'

// FAQ Schema for SEO
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wie funktioniert die Laser Haarentfernung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Der Laserstrahl wird vom Melanin (Farbstoff) im Haar absorbiert und in Wärme umgewandelt. Diese Wärme zerstört die Haarwurzel, ohne das umliegende Gewebe zu beschädigen. Dadurch wird das Haarwachstum dauerhaft gestoppt.'
      }
    },
    {
      '@type': 'Question',
      name: 'Ist die Behandlung schmerzhaft?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Unsere moderne 3-Wellenlängen-Technologie mit integrierter Kühlung macht die Behandlung nahezu schmerzfrei. Die meisten Kunden beschreiben das Gefühl als leichtes Kribbeln oder Wärme.'
      }
    },
    {
      '@type': 'Question',
      name: 'Wie viele Behandlungen sind notwendig?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Für optimale Ergebnisse empfehlen wir 4-6 Behandlungen im Abstand von 4-8 Wochen. Die genaue Anzahl hängt von Haartyp, Hautfarbe und der zu behandelnden Zone ab.'
      }
    },
    {
      '@type': 'Question',
      name: 'Wie bereite ich mich auf die Behandlung vor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rasieren Sie die zu behandelnde Zone 1-2 Tage vor dem Termin. Vermeiden Sie Sonnenbäder und Selbstbräuner 2 Wochen vorher. Wachsen, Epilieren oder Zupfen sollten 4 Wochen vor der Behandlung vermieden werden.'
      }
    },
    {
      '@type': 'Question',
      name: 'Kann ich mich behandeln lassen, wenn ich gebräunt bin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja! Unser 3-Wellenlängen-Diodenlaser ist auch für gebräunte Haut geeignet. Bei sehr frischer oder intensiver Bräune empfehlen wir jedoch, 1-2 Wochen zu warten.'
      }
    },
    {
      '@type': 'Question',
      name: 'Gibt es ein kostenloses Beratungsgespräch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja! Das persönliche Beratungsgespräch ist kostenlos und als Teil Ihrer ersten Behandlung enthalten. Wir analysieren Ihren Hauttyp, besprechen Ihre Ziele und erstellen einen maßgeschneiderten Behandlungsplan für optimale Ergebnisse.'
      }
    }
  ]
}

export const metadata: Metadata = createPageMetadata({
  pathname: '/faq',
  title: 'FAQ - Häufig gestellte Fragen zur Laser Haarentfernung Frankfurt',
  description: 'Antworten auf häufig gestellte Fragen zur Laser Haarentfernung bei Demon (And) Angel in Frankfurt. Alles über Behandlung, Kosten, Ablauf und NiSV-Zertifizierung.',
  keywords: ['FAQ laser haarentfernung', 'fragen haarentfernung frankfurt', 'diodenlaser fragen', 'haarentfernung ablauf', 'laser behandlung fragen', 'NiSV zertifizierung', 'schmerzfreie haarentfernung fragen'],
  openGraph: {
    title: 'FAQ - Häufig gestellte Fragen | Demon (And) Angel Frankfurt',
    description: 'Antworten auf alle Fragen zur dauerhaften Laser Haarentfernung in Frankfurt.',
  },
})

const faqCategories = [
  {
    name: 'Allgemeine Fragen',
    faqs: [
      {
        question: 'Wie funktioniert die Laser Haarentfernung?',
        answer: 'Der Laserstrahl wird vom Melanin (Farbstoff) im Haar absorbiert und in Wärme umgewandelt. Diese Wärme zerstört die Haarwurzel, ohne das umliegende Gewebe zu beschädigen. Dadurch wird das Haarwachstum dauerhaft gestoppt.',
      },
      {
        question: 'Ist die Behandlung schmerzhaft?',
        answer: 'Unsere moderne 3-Wellenlängen-Technologie mit integrierter Kühlung macht die Behandlung nahezu schmerzfrei. Die meisten Kunden beschreiben das Gefühl als leichtes Kribbeln oder Wärme.',
      },
      {
        question: 'Wie viele Behandlungen sind notwendig?',
        answer: 'Für optimale Ergebnisse empfehlen wir 4-6 Behandlungen im Abstand von 4-8 Wochen. Die genaue Anzahl hängt von Haartyp, Hautfarbe und der zu behandelnden Zone ab.',
      },
    ],
  },
  {
    name: 'Vor der Behandlung',
    faqs: [
      {
        question: 'Wie bereite ich mich auf die Behandlung vor?',
        answer: 'Rasieren Sie die zu behandelnde Zone 1-2 Tage vor dem Termin. Vermeiden Sie Sonnenbäder und Selbstbräuner 2 Wochen vorher. Wachsen, Epilieren oder Zupfen sollten 4 Wochen vor der Behandlung vermieden werden.',
      },
      {
        question: 'Kann ich mich behandeln lassen, wenn ich gebräunt bin?',
        answer: 'Ja! Unser 3-Wellenlängen-Diodenlaser ist auch für gebräunte Haut geeignet. Bei sehr frischer oder intensiver Bräune empfehlen wir jedoch, 1-2 Wochen zu warten.',
      },
      {
        question: 'Gibt es ein kostenloses Beratungsgespräch?',
        answer: 'Ja! Das persönliche Beratungsgespräch ist kostenlos und als Teil Ihrer ersten Behandlung enthalten. Wir analysieren Ihren Hauttyp, besprechen Ihre Ziele und erstellen einen maßgeschneiderten Behandlungsplan für optimale Ergebnisse.',
      },
    ],
  },
  {
    name: 'Während der Behandlung',
    faqs: [
      {
        question: 'Wie lange dauert eine Behandlung?',
        answer: 'Die Dauer variiert je nach Körperzone: Oberlippe ca. 10 Minuten, Achseln ca. 15 Minuten, Beine komplett ca. 60 Minuten. Die genauen Zeiten finden Sie in unserer Preisliste.',
      },
      {
        question: 'Kann ich eine weibliche oder männliche Behandlungsperson wählen?',
        answer: 'Ja, selbstverständlich! Bei der Terminbuchung können Sie Ihre bevorzugte Behandlungsperson angeben. Wir legen großen Wert auf Ihre Privatsphäre und Wohlbefinden.',
      },
      {
        question: 'Welche Körperzonen können behandelt werden?',
        answer: 'Wir behandeln alle Körperzonen: Gesicht, Achseln, Arme, Beine, Rücken, Brust, Bauch und Intimbereich. Sowohl für Frauen als auch für Männer.',
      },
    ],
  },
  {
    name: 'Nach der Behandlung',
    faqs: [
      {
        question: 'Was muss ich nach der Behandlung beachten?',
        answer: 'Vermeiden Sie direkte Sonneneinstrahlung und Solarien für 2 Wochen. Verwenden Sie Sonnenschutz (LSF 30+). Verzichten Sie 24 Stunden auf Sport, Sauna und heiße Bäder. Leichte Rötungen sind normal und klingen schnell ab.',
      },
      {
        question: 'Wann sehe ich erste Ergebnisse?',
        answer: 'Die behandelten Haare fallen innerhalb von 1-3 Wochen nach der Behandlung aus. Bereits nach der ersten Sitzung bemerken die meisten Kunden eine deutliche Reduzierung des Haarwuchses.',
      },
      {
        question: 'Ist das Ergebnis wirklich dauerhaft?',
        answer: 'Ja, die zerstörten Haarwurzeln produzieren keine neuen Haare mehr. Nach Abschluss der Behandlungsserie sind 80-90% der Haare dauerhaft entfernt. Gelegentliche Auffrischungen können bei hormonellen Veränderungen sinnvoll sein.',
      },
    ],
  },
  {
    name: 'Preise & Termine',
    faqs: [
      {
        question: 'Wie kann ich einen Termin buchen?',
        answer: 'Am schnellsten erreichen Sie uns per WhatsApp unter 015238228127. Sie können uns auch anrufen oder eine E-Mail an info@demonandangel.com senden.',
      },
      {
        question: 'Welche Zahlungsmethoden werden akzeptiert?',
        answer: 'Wir akzeptieren Barzahlung, EC-Karte und alle gängigen Kreditkarten.',
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <>
      {/* FAQ Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <MarketingHero
        eyebrow="Antworten vor dem ersten Termin"
        title="FAQ zur Laser Haarentfernung"
        description="Hier finden Sie die wichtigsten Antworten zu Behandlung, Vorbereitung, Preisen, Hauttypen und Nachsorge bei Demon (And) Angel in Frankfurt."
        highlights={['Kostenlose Erstberatung', 'Fragen zu Preisen', 'Antworten zur Nachsorge']}
        primaryAction={{ label: 'WhatsApp schreiben', href: 'https://wa.me/4915238228127', kind: 'whatsapp' }}
        secondaryAction={{ label: 'Kontakt aufnehmen', href: '/kontakt' }}
        supportingLinks={[
          { label: 'Preise', href: '/preise' },
          { label: 'Bewertungen', href: '/bewertungen' },
          { label: 'Technologie', href: '/technologie' },
        ]}
      />

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          {faqCategories.map((category) => (
            <div key={category.name} className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">{category.name}</h2>
              <div className="space-y-4">
                {category.faqs.map((faq) => (
                  <details key={faq.question} className="card group">
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <span className="text-lg font-medium text-white pr-4">{faq.question}</span>
                      <ChevronDown className="h-5 w-5 text-purple-400 flex-shrink-0 transition-transform group-open:rotate-180" />
                    </summary>
                    <p className="mt-4 text-white/70 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <PageCTA
        title="Noch Fragen offen?"
        description="Wenn Ihre Frage hier noch nicht beantwortet wurde, klaeren wir sie gern persoenlich per WhatsApp, Telefon oder vor Ort in Frankfurt."
        primaryAction={{ label: 'WhatsApp schreiben', href: 'https://wa.me/4915238228127', kind: 'whatsapp' }}
        secondaryAction={{ label: 'Kontakt aufnehmen', href: '/kontakt' }}
      />
    </>
  )
}
