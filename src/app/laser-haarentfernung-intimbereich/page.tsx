import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Shield, Phone, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Laser Haarentfernung Intimbereich Frankfurt | Bikinizone & Brazilian',
  description: 'Professionelle Laser Haarentfernung im Intimbereich in Frankfurt. Bikinizone, Brazilian, Hollywood - schmerzfrei & diskret. Jetzt Termin buchen!',
  keywords: ['laser haarentfernung intimbereich frankfurt', 'bikinizone lasern frankfurt', 'brazilian laser frankfurt', 'hollywood laser haarentfernung', 'intim lasern frankfurt'],
  openGraph: {
    title: 'Laser Haarentfernung Intimbereich Frankfurt | Demon (And) Angel',
    description: 'Diskrete dauerhafte Haarentfernung im Intimbereich. Bikinizone, Brazilian, Hollywood - moderne 3-Wellenlängen-Technologie.',
    url: 'https://demonandangel.eu/laser-haarentfernung-intimbereich',
  },
}

const intimZonen = [
  { zone: 'Bikinizone', preis: '49€', dauer: '15 Min.', beschreibung: 'Haare außerhalb der Slip-Linie' },
  { zone: 'Brazilian', preis: '79€', dauer: '25 Min.', beschreibung: 'Haare vorne, kleiner Streifen übrig' },
  { zone: 'Hollywood', preis: '99€', dauer: '30 Min.', beschreibung: 'Komplett haarfrei, keine Haare übrig' },
  { zone: 'Intimbereich komplett', preis: '99€', dauer: '30 Min.', beschreibung: 'Alle Intimbereiche' },
]

const vorteile = [
  'Diskrete Behandlung in privater Atmosphäre',
  'Weibliche/männliche Behandlungsperson wählbar',
  'Schmerzfrei mit fortschrittlicher Kühltechnologie',
  'Keine eingewachsenen Haare mehr',
  'Keine Hautirritationen wie beim Rasieren',
  'Bis zu 95% permanente Haarreduktion',
  'Keine Infektionsgefahr wie beim Waxing',
  'Behandlung auch bei empfindlicher Haut möglich',
  'Schnelle Behandlung (15-30 Minuten)',
  'Langfristig kostensparend',
]

const medizinInfo = [
  {
    title: 'Sicherheit & Hygiene',
    content: 'Unsere Geräte sind medizinisch zertifiziert und werden nach jeder Behandlung sterilisiert. Einwegmaterialien garantieren höchste Hygienestandards.'
  },
  {
    title: 'Hautverträglichkeit',
    content: 'Die 3-Wellenlängen-Technologie ist besonders schonend zur empfindlichen Haut im Intimbereich und minimiert das Risiko von Hautirritationen.'
  },
  {
    title: 'Langzeitergebnisse',
    content: 'Klinische Studien zeigen eine dauerhafte Haarreduktion von 80-95% nach durchschnittlich 6-8 Behandlungen im Intimbereich.'
  },
]

const nachsorgeTipps = [
  'Vermeiden Sie Sauna und heiße Bäder für 48 Stunden',
  'Tragen Sie lockere Baumwollunterwäsche',
  'Verwenden Sie keine parfümierten Produkte für 24 Stunden',
  'Kein Sport oder Schwitzen für 24 Stunden',
  'Leichte Kühlung bei Bedarf (kalter Waschlappen)',
  'Vermeiden Sie direkte Sonneneinstrahlung für 1 Woche',
]

export default function IntimbereichPage() {
  return (
    <>
      {/* Hero */}
      <section className="pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-demon-900/20 via-purple-900/20 to-angel-900/20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Laser Haarentfernung Intimbereich</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Diskrete und schmerzfreie dauerhafte Haarentfernung im Intimbereich. 
              Bikinizone, Brazilian & Hollywood in Frankfurt.
            </p>
            <div className="flex items-center gap-6 text-white/60 mb-8">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-purple-400" />
                <span>100% diskret</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-purple-400" />
                <span>Weibliche/männliche Behandler</span>
              </div>
            </div>
            <a href="https://wa.me/4915238228127" className="btn-primary inline-flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Diskreten Termin buchen
            </a>
          </div>
        </div>
      </section>

      {/* Intimbereiche */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Intimbereiche & Preise</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Wählen Sie die passende Behandlung für Ihre Bedürfnisse.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {intimZonen.map((item) => (
              <div key={item.zone} className="card hover:scale-105 transition-transform">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-white">{item.zone}</h3>
                  <div className="text-2xl font-bold gradient-text">{item.preis}</div>
                </div>
                <p className="text-white/60 text-sm mb-2">{item.beschreibung}</p>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Shield className="h-4 w-4" />
                  <span>{item.dauer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medizinische Informationen */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Medizinische Sicherheit & Qualität</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Ihre Gesundheit und Sicherheit stehen bei uns an erster Stelle.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {medizinInfo.map((info, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-semibold text-white mb-4">{info.title}</h3>
                <p className="text-white/70 leading-relaxed">{info.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nachsorge & Pflegehinweise */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Wichtige Nachsorgehinweise</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Für optimale Ergebnisse und schnelle Heilung beachten Sie diese Pflegehinweise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-white mb-6">Erste 24 Stunden</h3>
              <div className="space-y-3">
                {nachsorgeTipps.slice(0, 3).map((tipp, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{tipp}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-white mb-6">Erste Woche</h3>
              <div className="space-y-3">
                {nachsorgeTipps.slice(3).map((tipp, index) => (
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

      {/* Detaillierte Vergleichstabelle */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Detaillierter Methodenvergleich</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Alle Vor- und Nachteile im Überblick für Ihre Entscheidung.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left p-4 text-white font-semibold">Methode</th>
                  <th className="text-left p-4 text-white font-semibold">Dauerhaftigkeit</th>
                  <th className="text-left p-4 text-white font-semibold">Schmerz</th>
                  <th className="text-left p-4 text-white font-semibold">Hautreizungen</th>
                  <th className="text-left p-4 text-white font-semibold">Kosten/Jahr</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="p-4 text-white font-semibold">Laser</td>
                  <td className="p-4 text-green-400">Permanent (95%)</td>
                  <td className="p-4 text-green-400">Minimal</td>
                  <td className="p-4 text-green-400">Keine</td>
                  <td className="p-4 text-green-400">€300-500 (Erstjahr)</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 text-white/80">Waxing</td>
                  <td className="p-4 text-yellow-400">2-4 Wochen</td>
                  <td className="p-4 text-red-400">Hoch</td>
                  <td className="p-4 text-yellow-400">Mittel</td>
                  <td className="p-4 text-yellow-400">€600-800</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 text-white/80">Rasieren</td>
                  <td className="p-4 text-red-400">1-3 Tage</td>
                  <td className="p-4 text-green-400">Minimal</td>
                  <td className="p-4 text-red-400">Hoch</td>
                  <td className="p-4 text-yellow-400">€100-200</td>
                </tr>
                <tr>
                  <td className="p-4 text-white/80">Epilieren</td>
                  <td className="p-4 text-yellow-400">2-4 Wochen</td>
                  <td className="p-4 text-red-400">Sehr hoch</td>
                  <td className="p-4 text-yellow-400">Mittel</td>
                  <td className="p-4 text-green-400">€50-100</td>
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
            <h2 className="section-heading">Vorteile der Intimlaserung</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Die dauerhafte Haarentfernung im Intimbereich bietet zahlreiche Vorteile.
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

      {/* Vergleich */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Vergleich: Laser vs. Andere Methoden</h2>
          </div>
          
          <div className="card overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-white">Methode</th>
                  <th className="text-center p-4 text-white">Dauerhaft</th>
                  <th className="text-center p-4 text-white">Schmerzhaft</th>
                  <th className="text-center p-4 text-white">Hautreizungen</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="p-4 text-white font-semibold">Laser</td>
                  <td className="p-4 text-center text-green-400">✅ Ja</td>
                  <td className="p-4 text-center text-green-400">❌ Nein</td>
                  <td className="p-4 text-center text-green-400">❌ Nein</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4 text-white">Wachsen</td>
                  <td className="p-4 text-center text-orange-400">⚠️ 2-4 Wochen</td>
                  <td className="p-4 text-center text-red-400">✅ Ja</td>
                  <td className="p-4 text-center text-orange-400">⚠️ Manchmal</td>
                </tr>
                <tr>
                  <td className="p-4 text-white">Rasieren</td>
                  <td className="p-4 text-center text-red-400">❌ Nein</td>
                  <td className="p-4 text-center text-green-400">❌ Nein</td>
                  <td className="p-4 text-center text-red-400">✅ Ja</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="py-16 bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Diskreter Behandlungsablauf</h2>
            <p className="text-white/60">
              Ihre Privatsphäre hat bei uns höchste Priorität.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Diskrete Beratung', desc: 'Privates Gespräch ohne Wartezeit' },
              { step: '2', title: 'Vorbereitung', desc: 'Rasieren 1-2 Tage vorher' },
              { step: '3', title: 'Behandlung', desc: 'Schmerzfrei mit Kühlung' },
              { step: '4', title: 'Ergebnis', desc: 'Wochenlang haarfrei' },
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
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Häufige Fragen</h2>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: 'Ist die Behandlung im Intimbereich schmerzhaft?',
                a: 'Nein! Unsere moderne Laser-Technologie mit Kühlung macht die Behandlung nahezu schmerzfrei. Sie fühlen nur ein leichtes Wärmegefühl.'
              },
              {
                q: 'Kann ich eine weibliche Behandlungsperson wählen?',
                a: 'Ja, selbstverständlich! Bei der Terminbuchung können Sie Ihre bevorzugte Behandlungsperson angeben. Wir legen größten Wert auf Ihr Wohlbefinden.'
              },
              {
                q: 'Wie viele Behandlungen brauche ich für den Intimbereich?',
                a: 'Für den Intimbereich empfehlen wir 6-8 Behandlungen im Abstand von 4-8 Wochen für optimale Ergebnisse.'
              },
              {
                q: 'Ist die Behandlung diskret?',
                a: 'Absolut! Privater Behandlungsraum, keine Wartezeiten, diskrete Abrechnung. Ihre Privatsphäre wird bei uns respektiert.'
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

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Bereit für dauerhafte Freiheit?
          </h2>
          <p className="text-white/70 mb-8">
            Vereinbaren Sie jetzt Ihren diskreten Beratungstermin und genießen Sie 
            wochenlang die Freiheit von unerwünschter Behaarung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/4915238228127" className="btn-primary inline-flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Diskret beraten lassen
            </a>
            <Link href="/preise" className="btn-secondary">
              Alle Preise ansehen
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
