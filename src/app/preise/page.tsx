import type { Metadata } from 'next'
import { CheckCircle } from 'lucide-react'
import MarketingHero from '@/components/MarketingHero'
import PageCTA from '@/components/PageCTA'
import { createPageMetadata } from '@/lib/seo'
import { createBreadcrumbSchema, createOfferCatalogSchema } from '@/lib/schema'

export const metadata: Metadata = createPageMetadata({
  pathname: '/preise',
  title: 'Laser Haarentfernung Frankfurt Preise ab 29€ | Ganzkörper 199€',
  description: 'Laser Haarentfernung Preise Frankfurt ⭐ Oberlippe 29€ ⭐ Achseln 59€ ⭐ Bikini 69€ ⭐ Ganzkörper nur 199€ (statt 350€). Faire Preise, keine versteckten Kosten!',
  keywords: ['laser haarentfernung preise', 'haarentfernung kosten', 'dauerhafte haarentfernung preise frankfurt', 'diodenlaser kosten', 'intimbereich lasern preis'],
  openGraph: {
    title: 'Preise für Laser Haarentfernung | Demon (And) Angel Frankfurt',
    description: 'Transparente Preise für professionelle dauerhafte Haarentfernung. Alle Körperzonen, faire Konditionen.',
  },
})

const kategorien = [
  {
    name: 'Ganzkörper',
    beschreibung: 'Aktionsangebot.',
    zonen: [
      { zone: 'Ganzkörper AKTION', preis: '199 €', altPreis: '350 €' },
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

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Startseite', path: '/' },
  { name: 'Preise', path: '/preise' },
])
const offerCatalogSchema = createOfferCatalogSchema({
  path: '/preise',
  name: 'Preise Laser Haarentfernung Frankfurt',
  description: 'Transparente Preise fuer professionelle Laser Haarentfernung in Frankfurt am Main.',
  items: [
    {
      name: 'Ganzkoerper Behandlung',
      description: 'Ganzkoerper Aktionsangebot pro Behandlung.',
      price: '199',
    },
    {
      name: 'Oberlippe',
      description: 'Laser Haarentfernung Oberlippe pro Behandlung.',
      price: '29',
    },
    {
      name: 'Achseln',
      description: 'Laser Haarentfernung Achseln pro Behandlung.',
      price: '59',
    },
    {
      name: 'Unterschenkel',
      description: 'Laser Haarentfernung Unterschenkel pro Behandlung.',
      price: '89',
    },
    {
      name: 'Bikini',
      description: 'Laser Haarentfernung Bikini pro Behandlung.',
      price: '54',
    },
  ],
})

export default function PreisePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }}
      />
      <MarketingHero
        eyebrow="Transparente Preise ohne versteckte Kosten"
        title="Preise fuer Laser Haarentfernung in Frankfurt"
        description="Alle Preise verstehen sich pro Behandlung. Sie sehen direkt, welche Zonen moeglich sind und mit welchen Investitionen Sie realistisch rechnen koennen."
        highlights={['Oberlippe ab 29 EUR', 'Ganzkoerper 199 EUR', 'Kostenlose Erstberatung']}
        primaryAction={{ label: 'Kontakt aufnehmen', href: '/kontakt' }}
        secondaryAction={{ label: 'Termin buchen', href: '/kontakt' }}
        align="center"
      />

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
                            <div className="flex items-center justify-end gap-2">
                              {'altPreis' in item && item.altPreis && (
                                <span className="text-lg text-white/40 line-through">{item.altPreis}</span>
                              )}
                              <span className="text-xl font-bold gradient-text">{item.preis}</span>
                            </div>
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
              'Für ein dauerhaftes Ergebnis sind in der Regel 4-6 Behandlungen erforderlich.',
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

      <PageCTA
        title="Bereit fuer Ihre erste Behandlung?"
        description="Vereinbaren Sie jetzt Ihren kostenlosen Beratungstermin und erfahren Sie, welche Zonen fuer Sie sinnvoll sind und wie viele Sitzungen realistisch benoetigt werden."
        primaryAction={{ label: 'Jetzt Termin buchen', href: 'tel:+4915238228127', kind: 'phone' }}
        secondaryAction={{ label: 'Kontakt aufnehmen', href: '/kontakt' }}
      />
    </>
  )
}
