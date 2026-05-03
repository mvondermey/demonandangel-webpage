import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Phone } from 'lucide-react'
import MarketingHero from '@/components/MarketingHero'
import PageCTA from '@/components/PageCTA'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  pathname: '/laser-haarentfernung-gesicht',
  title: 'Laser Haarentfernung Gesicht Frankfurt ab 29€ | Oberlippe, Kinn ✓',
  description: 'Laser Haarentfernung Gesicht Frankfurt ⭐ Oberlippe 29€ ⭐ Kinn 30€ ⭐ Gesicht komplett 99€. Schmerzfrei, dauerhaft. ☎ 015238228127',
  keywords: ['laser haarentfernung gesicht frankfurt', 'oberlippe lasern frankfurt', 'kinn haarentfernung laser', 'gesicht haare lasern', 'dauerhafte haarentfernung gesicht'],
  openGraph: {
    title: 'Laser Haarentfernung Gesicht Frankfurt | Demon (And) Angel',
    description: 'Schmerzfreie dauerhafte Haarentfernung im Gesicht. Oberlippe, Kinn, Koteletten - moderne 3-Wellenlängen-Technologie.',
  },
})


const vorteile = [
  'Schmerzfreie Behandlung mit Kühlung',
  'Für alle Hauttypen geeignet (Fitzpatrick I-VI)',
  'Keine Narben oder Hautirritationen',
  'Sofort sichtbare Ergebnisse nach 1-3 Wochen',
  'Dauerhafte Haarentfernung (bis zu 95% Reduktion)',
  'Keine Wartezeiten zwischen Behandlungen',
  'Behandlung auch bei gebräunter Haut möglich',
  'Keine Einwachsphänomene wie beim Waxing',
  'Präzise Behandlung einzelner Haarfollikel',
  'Schonung der umliegenden Hautbereiche',
]

const wissenschaftInfo = [
  {
    title: '3-Wellenlängen-Technologie',
    content: 'Unsere kombinierte 755nm (Alexandrit), 810nm (Diode) und 1064nm (YAG) Technologie ermöglicht die Behandlung aller Haarfarben und Hauttypen.'
  },
  {
    title: 'FDA-zugelassene Methode',
    content: 'Der Diodenlaser ist von der FDA als sichere und effektive Methode zur dauerhaften Haarentfernung zugelassen.'
  },
  {
    title: 'Studienbestätigte Wirksamkeit',
    content: 'Klinische Studien zeigen eine permanente Haarreduktion von 80-95% nach 4-6 Behandlungen.'
  },
]

const tipps = [
  'Vermeiden Sie Sonnenbäder 2 Wochen vor der Behandlung',
  'Rasieren Sie die Behandlungszone 24-48 Stunden vorher',
  'Keine chemischen Peelings oder Fruchtsäuren 1 Woche vorher',
  'Verwenden Sie nach der Behandlung hohe Lichtschutzfaktoren',
  'Vermeiden Sie heiße Bäder und Sauna für 24 Stunden',
  'Kein Sport oder Schwitzen für 24 Stunden nach der Behandlung',
]

export default function GesichtPage() {
  return (
    <>
      <MarketingHero
        eyebrow="Praezise fuer sichtbare Zonen"
        title="Laser Haarentfernung im Gesicht"
        description="Oberlippe, Kinn, Wangen oder Koteletten behandeln wir besonders praezise, hautschonend und alltagstauglich in Frankfurt."
        highlights={['Oberlippe ab 29 EUR', 'Kurze Behandlungszeiten', 'Fuer Frauen und Maenner']}
        primaryAction={{ label: 'Gesicht behandeln lassen', href: 'tel:+4915238228127', kind: 'phone' }}
        secondaryAction={{ label: 'Preise ansehen', href: '/preise' }}
      />

      {/* Warum Gesichtslaser */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Endlich frei von lästigen Gesichtshaaren</h2>
          </div>
          
          <div className="card bg-gradient-to-br from-demon-600/10 to-angel-600/10">
            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>
                <strong className="text-white">Jeden Morgen zupfen, rasieren, bleichen?</strong> Das muss nicht sein. 
                Unsere Laser-Behandlung befreit Sie dauerhaft von unerwünschten Gesichtshaaren.
              </p>
              <p>
                Ob <strong className="text-white">Oberlippe, Kinn, Wangen oder Koteletten</strong> – unsere präzise 3-Wellenlängen-Technologie 
                behandelt selbst feinste Härchen schonend und effektiv. Ohne Hautirritationen, ohne Narben.
              </p>
              <p>
                <strong className="text-white">Das Gesicht ist Ihre Visitenkarte.</strong> Nach nur wenigen Behandlungen genießen Sie 
                makellos glatte Haut – ohne täglichen Aufwand. Perfekt für ein selbstbewusstes Auftreten.
              </p>
              <p>
                <strong className="text-white">Schnell, diskret und schmerzfrei.</strong> Eine Oberlippen-Behandlung dauert nur 10 Minuten – 
                ideal in der Mittagspause.
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

      {/* Wissenschaftliche Informationen */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Wissenschaftliche Hintergrundinformationen</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Moderne Laser-Technologie basiert auf jahrzehntelanger Forschung und klinischen Studien.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {wissenschaftInfo.map((info, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-semibold text-white mb-4">{info.title}</h3>
                <p className="text-white/70 leading-relaxed">{info.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipps & Pflegehinweise */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Tipps & Pflegehinweise</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Für optimale Ergebnisse beachten Sie diese wichtigen Hinweise vor und nach der Behandlung.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Vor der Behandlung</h3>
              <div className="space-y-3">
                {tipps.slice(0, 3).map((tipp, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{tipp}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Nach der Behandlung</h3>
              <div className="space-y-3">
                {tipps.slice(3).map((tipp, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{tipp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vergleichstabelle */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Laser vs. Traditionelle Methoden</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Warum Laser-Haarentfernung die überlegene Wahl ist.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left p-4 text-white font-semibold">Methode</th>
                  <th className="text-left p-4 text-white font-semibold">Dauerhaftigkeit</th>
                  <th className="text-left p-4 text-white font-semibold">Schmerzhaft</th>
                  <th className="text-left p-4 text-white font-semibold">Kosten langfristig</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="p-4 text-white font-semibold">Laser</td>
                  <td className="p-4 text-green-400">Permanent (95% Reduktion)</td>
                  <td className="p-4 text-green-400">Kaum spürbar</td>
                  <td className="p-4 text-green-400">Günstigste Langzeitlösung</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 text-white/80">Waxing</td>
                  <td className="p-4 text-yellow-400">2-4 Wochen</td>
                  <td className="p-4 text-red-400">Sehr schmerzhaft</td>
                  <td className="p-4 text-yellow-400">Hoch (monatlich)</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 text-white/80">Rasieren</td>
                  <td className="p-4 text-red-400">1-3 Tage</td>
                  <td className="p-4 text-yellow-400">Hautreizungen möglich</td>
                  <td className="p-4 text-yellow-400">Mittel (täglich/wöchentlich)</td>
                </tr>
                <tr>
                  <td className="p-4 text-white/80">Epilieren</td>
                  <td className="p-4 text-yellow-400">2-4 Wochen</td>
                  <td className="p-4 text-red-400">Sehr schmerzhaft</td>
                  <td className="p-4 text-yellow-400">Niedrig (zu Hause)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Vorteile der Gesichtslaserung</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Unsere moderne Laser-Technologie bietet zahlreiche Vorteile für die Haarentfernung im Gesicht.
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

      {/* Ablauf */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Behandlungsablauf</h2>
            <p className="text-white/60">
              So einfach ist die dauerhafte Haarentfernung im Gesicht.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Beratung', desc: 'Kostenlose Analyse Ihres Hauttyps' },
              { step: '2', title: 'Vorbereitung', desc: 'Rasieren 1-2 Tage vorher' },
              { step: '3', title: 'Behandlung', desc: 'Schmerzfreie Laseranwendung' },
              { step: '4', title: 'Ergebnis', desc: 'Haare fallen nach 1-3 Wochen aus' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-400">{item.step}</span>
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Häufige Fragen</h2>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: 'Ist die Gesichtslaserung schmerzhaft?',
                a: 'Nein! Unsere 3-Wellenlängen-Technologie mit integrierter Kühlung macht die Behandlung nahezu schmerzfrei. Sie fühlen nur ein leichtes Kribbeln.'
              },
              {
                q: 'Kann ich mich direkt nach der Behandlung schminken?',
                a: 'Wir empfehlen 24 Stunden zu warten. Danach können Sie wieder normal schminken. Die Haut ist nach der Behandlung nicht gerötet.'
              },
              {
                q: 'Wie viele Behandlungen brauche ich für das Gesicht?',
                a: 'Für das Gesicht empfehlen wir 4-6 Behandlungen im Abstand von 4-8 Wochen für optimale Ergebnisse.'
              },
              {
                q: 'Funktioniert die Gesichtslaserung auch bei dunkler Haut?',
                a: 'Ja! Unser 3-Wellenlängen-Diodenlaser ist für alle Hauttypen geeignet, auch für gebräunte Haut.'
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
        title="Bereit fuer ein haarfreies Gesicht?"
        description="Vereinbaren Sie jetzt Ihren kostenlosen Beratungstermin und erfahren Sie, welche Gesichtszone fuer Sie sinnvoll und hautschonend behandelbar ist."
        primaryAction={{ label: 'Kostenlos beraten lassen', href: 'tel:+4915238228127', kind: 'phone' }}
        secondaryAction={{ label: 'Alle Preise ansehen', href: '/preise' }}
      />
    </>
  )
}
