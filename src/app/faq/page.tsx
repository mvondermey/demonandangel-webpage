import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronDown, Search, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'FAQ - Häufig gestellte Fragen zur Laser Haarentfernung Frankfurt',
  description: 'Antworten auf häufig gestellte Fragen zur Laser Haarentfernung bei Demon (And) Angel in Frankfurt. Alles über Behandlung, Kosten, Ablauf und NiSV-Zertifizierung.',
  keywords: ['FAQ laser haarentfernung', 'fragen haarentfernung frankfurt', 'diodenlaser fragen', 'haarentfernung ablauf', 'laser behandlung fragen', 'NiSV zertifizierung', 'schmerzfreie haarentfernung fragen'],
  openGraph: {
    title: 'FAQ - Häufig gestellte Fragen | Demon (And) Angel Frankfurt',
    description: 'Antworten auf alle Fragen zur dauerhaften Laser Haarentfernung in Frankfurt.',
    url: 'https://demonandangel.eu/faq',
  },
}

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
        answer: 'Für optimale Ergebnisse empfehlen wir 6-8 Behandlungen im Abstand von 4-8 Wochen. Die genaue Anzahl hängt von Haartyp, Hautfarbe und der zu behandelnden Zone ab.',
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
      {/* Hero */}
      <section className="pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-demon-900/20 via-purple-900/20 to-angel-900/20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">FAQ</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Hier finden Sie Antworten auf häufig gestellte Fragen zur Laser Haarentfernung, 
              Behandlungsablauf, Preisen und mehr.
            </p>
            
            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
              <input
                type="text"
                placeholder="Frage suchen..."
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

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

      {/* Still Have Questions */}
      <section className="py-16 bg-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <MessageCircle className="h-16 w-16 mx-auto mb-6 text-purple-400" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Noch Fragen?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Sie haben Ihre Frage nicht gefunden? Kontaktieren Sie uns - wir helfen Ihnen gerne weiter!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/4915238228127" className="btn-primary">
              WhatsApp schreiben
            </a>
            <Link href="/kontakt" className="btn-secondary">
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
