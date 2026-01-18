import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, Info, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Preise - Laser Haarentfernung Kosten',
  description: 'Faire Preise für dauerhafte Laser Haarentfernung in Frankfurt. Transparente Kosten für Gesicht, Körper und Intimbereich. Jetzt informieren!',
  keywords: ['laser haarentfernung preise', 'haarentfernung kosten', 'dauerhafte haarentfernung preise frankfurt', 'diodenlaser kosten', 'intimbereich lasern preis'],
  openGraph: {
    title: 'Preise für Laser Haarentfernung | Demon (And) Angel Frankfurt',
    description: 'Transparente Preise für professionelle dauerhafte Haarentfernung. Alle Körperzonen, faire Konditionen.',
    url: 'https://demonandangel.com/preise',
  },
}

const kategorien = [
  {
    name: 'Ganzkörper',
    beschreibung: 'Aktionsangebote für mehrere Zonen.',
    zonen: [
      { zone: 'Ganzkörper (bis zu 6 Zonen) AKTION', preis: '249 €' },
      { zone: 'Ganzkörper (bis zu 12 Zonen) AKTION', preis: '349 €' },
    ],
  },
  {
    name: 'Gesicht',
    beschreibung: 'Sensible Bereiche – Diodenlaser.',
    zonen: [
      { zone: 'Gesicht komplett AKTION', preis: '99 €' },
      { zone: 'Oberlippe', preis: '29 €' },
      { zone: 'Wangen', preis: '34 €' },
      { zone: 'Kinn oder Kiefer', preis: '30 €' },
      { zone: 'Hals', preis: '37 €' },
    ],
  },
  {
    name: 'Arme & Achseln',
    beschreibung: 'Preise pro Behandlung.',
    zonen: [
      { zone: 'Achseln', preis: '59 €' },
      { zone: 'Oberarme', preis: '69 €' },
      { zone: 'Unterarme', preis: '69 €' },
    ],
  },
  {
    name: 'Beine',
    beschreibung: 'Preise pro Behandlung.',
    zonen: [
      { zone: 'Unterschenkel', preis: '89 €' },
      { zone: 'Oberschenkel', preis: '89 €' },
    ],
  },
  {
    name: 'Oberkörper',
    beschreibung: 'Preise pro Behandlung.',
    zonen: [
      { zone: 'Bauch', preis: '69 €' },
      { zone: 'Brust', preis: '69 €' },
      { zone: 'Unterer Rücken', preis: '69 €' },
      { zone: 'Oberer Rücken', preis: '69 €' },
      { zone: 'Schultern', preis: '59 €' },
    ],
  },
  {
    name: 'Intim & Po',
    beschreibung: 'Preise pro Behandlung.',
    zonen: [
      { zone: 'Bikini', preis: '54 €' },
      { zone: 'Intimzone', preis: '54 €' },
      { zone: 'Po-Falte', preis: '37 €' },
      { zone: 'Gesäss', preis: '56 €' },
    ],
  },
]

export default function PreisePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-demon-900/20 via-purple-900/20 to-angel-900/20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Unsere Preise</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Transparente und faire Preise für Ihre dauerhafte Laser Haarentfernung in einer angenehmen und diskreten Atmosphäre. 
              Alle Preise verstehen sich pro Behandlung.
            </p>
            <div className="flex items-center gap-4 text-white/60">
              <Info className="h-5 w-5 text-purple-400" />
              <span>Für optimale Ergebnisse empfehlen wir 6-8 Behandlungen im Abstand von 4-8 Wochen.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Preise nach Kategorien */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Preisliste</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Alle Preise pro Behandlung. Aktionsangebote zeitlich begrenzt.
            </p>
          </div>
          
          <div className="space-y-12">
            {kategorien.map((kategorie) => (
              <div key={kategorie.name}>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{kategorie.name}</h3>
                  <p className="text-white/60">{kategorie.beschreibung}</p>
                </div>
                <div className="overflow-hidden rounded-xl border border-white/10">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-white/5">
                        <th className="text-left py-4 px-6 text-white/80 font-semibold">Zone</th>
                        <th className="text-right py-4 px-6 text-white/80 font-semibold">Preis</th>
                      </tr>
                    </thead>
                    <tbody>
                      {kategorie.zonen.map((item, index) => (
                        <tr key={item.zone} className={index % 2 === 0 ? 'bg-white/[0.02]' : ''}>
                          <td className="py-4 px-6 text-white">{item.zone}</td>
                          <td className="py-4 px-6 text-right">
                            <span className="text-xl font-bold gradient-text">{item.preis}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hinweise */}
      <section className="py-16 bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="section-heading text-center mb-8">Wichtige Hinweise</h2>
          <div className="space-y-4">
            {[
              'Alle Preise verstehen sich pro Behandlung inklusive Mehrwertsteuer.',
              'Für ein dauerhaftes Ergebnis sind in der Regel 6-8 Behandlungen erforderlich.',
              'Der Abstand zwischen den Behandlungen beträgt 4-8 Wochen.',
              'Die erste Behandlung beinhaltet ein kostenloses Beratungsgespräch.',
              'Wir akzeptieren Barzahlung, EC-Karte und alle gängigen Kreditkarten.',
              'Individuelle Angebote für größere Behandlungszonen auf Anfrage.',
            ].map((hinweis, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/70">{hinweis}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Bereit für Ihre erste Behandlung?
          </h2>
          <p className="text-white/70 mb-8">
            Vereinbaren Sie jetzt Ihren kostenlosen Beratungstermin und erfahren Sie mehr 
            über die optimale Behandlung für Ihre Bedürfnisse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link href="/kontakt" className="btn-primary inline-flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
