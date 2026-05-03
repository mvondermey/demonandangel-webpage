import type { Metadata } from 'next'
import { CheckCircle, Heart, Phone, Sparkles } from 'lucide-react'
import MarketingHero from '@/components/MarketingHero'
import PageCTA from '@/components/PageCTA'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  pathname: '/laser-haarentfernung-frauen',
  title: 'Laser Haarentfernung Frauen Frankfurt ab 29€ | Beine, Bikini ✓',
  description: 'Laser Haarentfernung Frauen Frankfurt ⭐ Beine ab 89€ ⭐ Achseln 59€ ⭐ Bikini 69€. Schmerzfrei, alle Hauttypen. ☎ 015238228127',
  keywords: ['laser haarentfernung frauen frankfurt', 'beine lasern frankfurt', 'achseln laser haarentfernung', 'bikinizone lasern frankfurt', 'dauerhafte haarentfernung frauen'],
  openGraph: {
    title: 'Laser Haarentfernung für Frauen Frankfurt | Demon (And) Angel',
    description: 'Spezialisierte dauerhafte Haarentfernung für Frauen. Beine, Achseln, Bikinizone, Gesicht - moderne 3-Wellenlängen-Technologie.',
  },
})

const vorteile = [
  'Seidig glatte Haut - dauerhaft',
  'Keine Rasur mehr nötig',
  'Keine eingewachsenen Haare',
  'Keine Hautirritationen',
  'Mehr Selbstbewusstsein',
  'Zeitersparnis im Alltag',
]

export default function FrauenPage() {
  return (
    <>
      <MarketingHero
        eyebrow="Speziell fuer Frauen"
        title="Laser Haarentfernung fuer Frauen"
        description="Seidig glatte Haut ohne taegliches Rasieren. Beine, Achseln, Bikinizone und weitere Zonen behandeln wir schonend und diskret in Frankfurt."
        highlights={['Weibliche Behandlerinnen', 'Sanfte Behandlung', 'Beine, Bikini, Achseln']}
        primaryAction={{ label: 'Frauen-Termin buchen', href: 'tel:+4915238228127', kind: 'phone' }}
        secondaryAction={{ label: 'Preise ansehen', href: '/preise' }}
        supportingLinks={[
          { label: 'Maenner', href: '/laser-haarentfernung-maenner' },
          { label: 'Kontakt', href: '/kontakt' },
        ]}
      />

      {/* Warum Frauen zu uns kommen */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Endlich Schluss mit dem täglichen Rasieren</h2>
          </div>
          
          <div className="card bg-gradient-to-br from-demon-600/10 to-angel-600/10">
            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>
                <strong className="text-white">Kennen Sie das?</strong> Jeden Tag rasieren, trotzdem Stoppeln am Abend. 
                Eingewachsene Haare, Rasierpickel, gereizte Haut. Das muss nicht sein.
              </p>
              <p>
                Unsere <strong className="text-white">3-Wellenlängen-Laser-Technologie</strong> befreit Sie dauerhaft von unerwünschten Haaren – 
                an Beinen, Achseln, Bikinizone, Gesicht oder am ganzen Körper.
              </p>
              <p>
                <strong className="text-white">Stellen Sie sich vor:</strong> Morgens aufwachen mit perfekt glatter Haut. 
                Spontan ins Schwimmbad, ohne vorher zu rasieren. Selbstbewusst im Sommerkleid – jeden Tag.
              </p>
              <p>
                <strong className="text-white">Sanft und schmerzfrei.</strong> Unsere moderne Kühltechnologie macht die Behandlung 
                angenehm. Und nach 4-6 Sitzungen genießen Sie das Ergebnis – für immer.
              </p>
            </div>
            <div className="mt-8 text-center">
              <a href="tel:+4915238228127" className="btn-primary inline-flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Jetzt Beratung anfragen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Ihre Vorteile</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Warum Frauen die dauerhafte Laser Haarentfernung lieben.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {vorteile.map((vorteil, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/80">{vorteil}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beliebte Behandlungen */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Beliebte Behandlungen</h2>
            <p className="text-white/60">
              Unsere meistgebuchten Pakete für Frauen.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card bg-gradient-to-br from-demon-600/20 to-angel-600/20">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-6 w-6 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">Sommer-Paket</h3>
              </div>
              <p className="text-white/70 mb-4">Beine + Achseln + Bikinizone</p>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>• 4-6 Behandlungen</li>
                <li>• Perfekt für den Sommer</li>
                <li>• Nie wieder rasieren</li>
              </ul>
            </div>
            
            <div className="card bg-gradient-to-br from-purple-600/20 to-demon-600/20">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-6 w-6 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">Ganzkörper</h3>
              </div>
              <p className="text-white/70 mb-4">Komplette Haarentfernung</p>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>• 4-6 Behandlungen</li>
                <li>• Alle Körperzonen</li>
                <li>• Maximale Freiheit</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ergebnisse */}
      <section className="py-16 bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Ihr Weg zu glatter Haut</h2>
            <p className="text-white/60">
              So verändert sich Ihre Haut nach den Behandlungen.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { phase: 'Nach 1-2 Behandlungen', desc: 'Erste Haare fallen aus, Haut wird glatter' },
              { phase: 'Nach 3-4 Behandlungen', desc: '50-60% weniger Haare, deutlich weniger Rasieren' },
              { phase: 'Nach 4-6 Behandlungen', desc: '90-95% weniger Haare, dauerhaft glatt' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/20 to-demon-500/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-purple-400">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-white mb-2">{item.phase}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Häufige Fragen</h2>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: 'Ist die Behandlung schmerzhaft?',
                a: 'Nein! Unsere moderne Technologie mit integrierter Kühlung macht die Behandlung nahezu schmerzfrei. Die meisten Kundinnen beschreiben es als leichtes Kribbeln.'
              },
              {
                q: 'Kann ich eine weibliche Behandlerin wählen?',
                a: 'Ja, selbstverständlich! Bei der Terminbuchung können Sie Ihre bevorzugte Behandlerin angeben. Ihr Wohlbefinden ist uns wichtig.'
              },
              {
                q: 'Wie viele Behandlungen brauche ich?',
                a: 'Für optimale Ergebnisse empfehlen wir 4-6 Behandlungen im Abstand von 4-8 Wochen. Danach sind Sie dauerhaft haarfrei.'
              },
              {
                q: 'Funktioniert es auch bei hellen Haaren?',
                a: 'Unsere 3-Wellenlängen-Technologie kann auch hellere Haare behandeln. Bei sehr hellen Haaren beraten wir Sie gerne persönlich.'
              },
            ].map((faq, index) => (
              <details key={index} className="card group">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-lg font-medium text-white pr-4">{faq.q}</span>
                </summary>
                <p className="mt-4 text-white/70 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Bereit fuer seidig glatte Haut?"
        description="Vereinbaren Sie jetzt Ihren Termin und erleben Sie, wie viel Alltag Sie mit dauerhaft glatter Haut sparen koennen."
        primaryAction={{ label: 'Frauen-Termin buchen', href: 'tel:+4915238228127', kind: 'phone' }}
        secondaryAction={{ label: 'Alle Preise ansehen', href: '/preise' }}
      />
    </>
  )
}
