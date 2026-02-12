import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Users, Phone, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Laser Haarentfernung für Männer Frankfurt | Rücken, Brust, Bart',
  description: 'Professionelle Laser Haarentfernung für Männer in Frankfurt. Rücken, Brust, Bauch, Bart, Intimbereich - schmerzfrei & effektiv. Jetzt Termin buchen!',
  keywords: ['laser haarentfernung männer frankfurt', 'rücken lasern männer frankfurt', 'brust haarentfernung laser männer', 'bart laser frankfurt', 'intimbereich männer laser'],
  openGraph: {
    title: 'Laser Haarentfernung für Männer Frankfurt | Demon (And) Angel',
    description: 'Spezialisierte dauerhafte Haarentfernung für Männer. Rücken, Brust, Bart, Intimbereich - moderne 3-Wellenlängen-Technologie.',
    url: 'https://demonandangel.eu/laser-haarentfernung-maenner',
  },
}


const vorteile = [
  'Kein Rasieren mehr - dauerhaft glatt',
  'Keine eingewachsenen Haare mehr',
  'Bessere Hygiene und Frische',
  'Athletischerer Körperbau',
  'Keine Hautirritationen mehr',
  'Zeitersparnis im Alltag',
]

export default function MaennerPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-demon-900/20 via-purple-900/20 to-angel-900/20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Laser Haarentfernung für Männer</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Professionelle dauerhafte Haarentfernung für Männer. Rücken, Brust, Bauch, 
              Bart und mehr - schmerzfrei in Frankfurt.
            </p>
            <div className="flex items-center gap-6 text-white/60 mb-8">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-400" />
                <span>Männliche Behandler verfügbar</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-purple-400" />
                <span>Spezialisiert auf Männerhaut</span>
              </div>
            </div>
            <a href="tel:+4915238228127" className="btn-primary inline-flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Männer-Termin buchen
            </a>
          </div>
        </div>
      </section>

      {/* Warum Männer zu uns kommen */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Warum immer mehr Männer lasern</h2>
          </div>
          
          <div className="card bg-gradient-to-br from-demon-600/10 to-angel-600/10">
            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>
                <strong className="text-white">Männerhaut ist anders.</strong> Dickere Haare, stärkerer Wuchs, empfindlichere Haut nach dem Rasieren. 
                Genau dafür haben wir unsere Behandlung optimiert.
              </p>
              <p>
                Ob <strong className="text-white">Rücken, Brust, Schultern oder Intimbereich</strong> – unsere 3-Wellenlängen-Technologie 
                ist speziell für dickes, dunkles Männerhaar entwickelt. Das Ergebnis: schnellere Ergebnisse, weniger Behandlungen.
              </p>
              <p>
                <strong className="text-white">Keine Rasur mehr. Keine eingewachsenen Haare.</strong> Stattdessen: glatte Haut, 
                die Ihre Muskeln besser zur Geltung bringt – im Fitnessstudio, am Strand oder im Alltag.
              </p>
              <p>
                Und ja: <strong className="text-white">Männliche Behandler verfügbar.</strong> Wir verstehen, dass Diskretion wichtig ist.
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
            <h2 className="section-heading">Vorteile für Männer</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Warum immer mehr Männer zur Laser Haarentfernung wählen.
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

      {/* Beliebte Kombinationen */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Beliebte Kombinationen</h2>
            <p className="text-white/60">
              Unsere meistgebuchten Behandlungspakete für Männer.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card bg-gradient-to-br from-demon-600/20 to-angel-600/20">
              <h3 className="text-2xl font-bold text-white mb-4">Athleten-Paket</h3>
              <p className="text-white/70 mb-4">Rücken + Brust + Bauch</p>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>• 4-6 Behandlungen</li>
                <li>• Perfekt für Sportler</li>
                <li>• Athletische Optik</li>
              </ul>
            </div>
            
            <div className="card bg-gradient-to-br from-purple-600/20 to-demon-600/20">
              <h3 className="text-2xl font-bold text-white mb-4">Komplett-Paket</h3>
              <p className="text-white/70 mb-4">Rücken + Brust + Bauch + Achseln</p>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>• 4-6 Behandlungen</li>
                <li>• Komplett haarfrei</li>
                <li>• Maximale Ersparnis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vorher Nachher */}
      <section className="py-16 bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Typische Ergebnisse</h2>
            <p className="text-white/60">
              So verändert sich Ihre Haut nach den Behandlungen.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { phase: 'Vor Behandlung', desc: 'Starke Behaarung, Hautirritationen' },
              { phase: 'Nach 3 Behandlungen', desc: '60% weniger Haare, glattere Haut' },
              { phase: 'Nach 4-6 Behandlungen', desc: '95% weniger Haare, perfekt glatt' },
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
            <h2 className="section-heading">Fragen von Männern</h2>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: 'Ist die Laserbehandlung für Männer schmerzhaft?',
                a: 'Nein! Unsere moderne 3-Wellenlängen-Technologie mit Kühlung macht die Behandlung nahezu schmerzfrei. Männerhaut ist oft unempfindlicher als Frauenhaut.'
              },
              {
                q: 'Funktioniert die Laserung auch bei dichten/männlichen Haaren?',
                a: 'Ja! Männliche Haare sind oft dunkler und dicker, was die Laserbehandlung sogar effektiver macht. Die Ergebnisse sind bei Männern oft noch besser.'
              },
              {
                q: 'Wie viele Behandlungen brauche ich als Mann?',
                a: 'Für Männer empfehlen wir 4-6 Behandlungen im Abstand von 4-8 Wochen. Männerhaut reagiert oft etwas langsamer, aber die Ergebnisse sind dauerhaft.'
              },
              {
                q: 'Kann ich während des Trainings behandelt werden?',
                a: 'Ja! Sie können direkt nach der Behandlung wieder trainieren. Wir empfehlen nur 24 Stunden auf intensives Schwitzen zu verzichten.'
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
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="cta-heading">
            Bereit für den perfekten Körper?
          </h2>
          <p className="text-white/70 mb-8">
            Vereinbaren Sie jetzt Ihren Termin und genießen Sie die Vorteile 
            dauerhafter Haarentfernung für Männer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+4915238228127" className="btn-primary inline-flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Männer-Termin buchen
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
