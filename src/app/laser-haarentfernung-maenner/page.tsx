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
    url: 'https://demonandangel.com/laser-haarentfernung-maenner',
  },
}

const maennerZonen = [
  { zone: 'Rücken', preis: '99€', dauer: '30 Min.', beschreibung: 'Oberer und unterer Rücken' },
  { zone: 'Brust', preis: '99€', dauer: '30 Min.', beschreibung: 'Komplette Brustregion' },
  { zone: 'Bauch', preis: '69€', dauer: '20 Min.', beschreibung: 'Bauchbereich und Sixpack' },
  { zone: 'Brust + Bauch', preis: '149€', dauer: '45 Min.', beschreibung: 'Kombinationsbehandlung' },
  { zone: 'Schultern', preis: '59€', dauer: '20 Min.', beschreibung: 'Schulter- und Nackenbereich' },
  { zone: 'Achseln', preis: '39€', dauer: '15 Min.', beschreibung: 'Achselhöhlen' },
  { zone: 'Arme komplett', preis: '119€', dauer: '35 Min.', beschreibung: 'Ober- und Unterarme' },
  { zone: 'Beine komplett', preis: '199€', dauer: '60 Min.', beschreibung: 'Ober- und Unterschenkel' },
  { zone: 'Intimbereich', preis: '99€', dauer: '30 Min.', beschreibung: 'Diskrete Behandlung' },
  { zone: 'Bartkontur', preis: '79€', dauer: '25 Min.', beschreibung: 'Perfekte Bartlinie' },
]

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
      <section className="pt-32 pb-16 relative overflow-hidden">
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
            <a href="https://wa.me/49015238228127" className="btn-primary inline-flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Männer-Termin buchen
            </a>
          </div>
        </div>
      </section>

      {/* Männerzonen */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Behandlungszonen für Männer</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Spezialisierte Behandlung für typische Männerprobleme.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {maennerZonen.map((item) => (
              <div key={item.zone} className="card hover:scale-105 transition-transform">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-white">{item.zone}</h3>
                  <div className="text-2xl font-bold gradient-text">{item.preis}</div>
                </div>
                <p className="text-white/60 text-sm mb-2">{item.beschreibung}</p>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Users className="h-4 w-4" />
                  <span>{item.dauer}</span>
                </div>
              </div>
            ))}
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
              <div className="text-3xl font-bold gradient-text mb-4">299€</div>
              <p className="text-white/60 text-sm mb-4">Statt 317€ - Sie sparen 18€</p>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>• 6-8 Behandlungen</li>
                <li>• Perfekt für Sportler</li>
                <li>• Athletische Optik</li>
              </ul>
            </div>
            
            <div className="card bg-gradient-to-br from-purple-600/20 to-demon-600/20">
              <h3 className="text-2xl font-bold text-white mb-4">Komplett-Paket</h3>
              <p className="text-white/70 mb-4">Rücken + Brust + Bauch + Achseln</p>
              <div className="text-3xl font-bold gradient-text mb-4">349€</div>
              <p className="text-white/60 text-sm mb-4">Statt 376€ - Sie sparen 27€</p>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>• 6-8 Behandlungen</li>
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
              { phase: 'Nach 6-8 Behandlungen', desc: '95% weniger Haare, perfekt glatt' },
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
                a: 'Für Männer empfehlen wir 6-8 Behandlungen im Abstand von 4-8 Wochen. Männerhaut reagiert oft etwas langsamer, aber die Ergebnisse sind dauerhaft.'
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
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Bereit für den perfekten Körper?
          </h2>
          <p className="text-white/70 mb-8">
            Vereinbaren Sie jetzt Ihren Termin und genießen Sie die Vorteile 
            dauerhafter Haarentfernung für Männer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/49015238228127" className="btn-primary inline-flex items-center gap-2">
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
