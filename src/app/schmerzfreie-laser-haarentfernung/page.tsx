import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Zap, Phone, Heart, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Schmerzfreie Laser Haarentfernung Frankfurt | Ohne Schmerzen',
  description: 'Völlig schmerzfreie Laser Haarentfernung in Frankfurt mit 3-Wellenlängen-Technologie und Kühlung. Für alle Körperzonen. Jetzt Termin buchen!',
  keywords: ['schmerzfreie laser haarentfernung frankfurt', 'schmerzlos haare lasern frankfurt', 'laser haarentfernung ohne schmerzen', 'painless laser hair removal frankfurt'],
  openGraph: {
    title: 'Schmerzfreie Laser Haarentfernung Frankfurt | Demon (And) Angel',
    description: 'Völlig schmerzlose dauerhafte Haarentfernung. Moderne 3-Wellenlängen-Technologie mit integrierter Kühlung.',
    url: 'https://demonandangel.eu/schmerzfreie-laser-haarentfernung',
  },
}

const technologieVorteile = [
  {
    title: '3-Wellenlängen-Technologie',
    beschreibung: 'Drei verschiedene Wellenlängen behandeln alle Hauttypen und Haarfarben optimal',
    icon: Zap,
  },
  {
    title: 'Integrierte Kühlung',
    beschreibung: 'Kühlt die Haut während der Behandlung - kein Schmerz, keine Rötung',
    icon: Heart,
  },
  {
    title: 'Saphir-Kühlkopf',
    beschreibung: 'Professionelle Kühlung wie bei medizinischen Geräten',
    icon: Zap,
  },
  {
    title: 'Schnelle Impulse',
    beschreibung: 'Ultra-kurze Laserimpulse für maximalen Komfort',
    icon: Heart,
  },
]

const schmerzfreiVorteile = [
  'Keine Nadelstiche oder Schmerzen',
  'Keine Betäubung notwendig',
  'Keine Hautreizungen danach',
  'Angenehmes Wärmegefühl maximal',
  'Sofort weiter im Alltag möglich',
  'Für schmerzempfindliche Personen ideal',
]

const vergleiche = [
  {
    methode: 'Unsere Laser-Technologie',
    schmerz: 'Kein Schmerz',
    kuehlung: 'Integrierte Kühlung',
    ergebnis: '95% dauerhaft',
    komfort: '⭐⭐⭐⭐⭐',
  },
  {
    methode: 'IPL-Geräte',
    schmerz: 'Leicht bis mittel',
    kuehlung: 'Keine Kühlung',
    ergebnis: '60% temporär',
    komfort: '⭐⭐',
  },
  {
    methode: 'Alte Laser',
    schmerz: 'Mittel bis stark',
    kuehlung: 'Externe Kühlung',
    ergebnis: '80% dauerhaft',
    komfort: '⭐⭐',
  },
  {
    methode: 'Wachsen/Epilieren',
    schmerz: 'Stark',
    kuehlung: 'Keine Kühlung',
    ergebnis: '2-4 Wochen',
    komfort: '⭐',
  },
]

export default function SchmerzfreiPage() {
  return (
    <>
      {/* Hero */}
      <section className="pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-demon-900/20 via-purple-900/20 to-angel-900/20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Schmerzfreie Laser Haarentfernung</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Völlig schmerzfrei und ohne Betäubung. Unsere moderne 3-Wellenlängen-Technologie 
              mit integrierter Kühlung macht dauerhafte Haarentfernung zum angenehmen Erlebnis.
            </p>
            <div className="flex items-center gap-6 text-white/60 mb-8">
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-purple-400" />
                <span>100% schmerzfrei</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-purple-400" />
                <span>Medizinische Kühlung</span>
              </div>
            </div>
            <a href="https://wa.me/4915238228127" className="btn-primary inline-flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Schmerzfrei behandeln lassen
            </a>
          </div>
        </div>
      </section>

      {/* Technologie */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Warum unsere Behandlung schmerzfrei ist</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Unsere moderne Laser-Technologie wurde für maximalen Komfort entwickelt.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologieVorteile.map((item, index) => (
              <div key={index} className="card text-center hover:scale-105 transition-transform">
                <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.beschreibung}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Vorteile der schmerzfreien Behandlung</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Genießen Sie alle Vorteile ohne Schmerzen oder Unannehmlichkeiten.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {schmerzfreiVorteile.map((vorteil, index) => (
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
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Schmerz-Vergleich</h2>
            <p className="text-white/60">
              Wie sich unsere Methode von anderen unterscheidet.
            </p>
          </div>
          
          <div className="card overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-white">Methode</th>
                  <th className="text-center p-4 text-white">Schmerzlevel</th>
                  <th className="text-center p-4 text-white">Kühlung</th>
                  <th className="text-center p-4 text-white">Ergebnis</th>
                  <th className="text-center p-4 text-white">Komfort</th>
                </tr>
              </thead>
              <tbody>
                {vergleiche.map((item, index) => (
                  <tr key={index} className={`border-b border-white/5 ${index === 0 ? 'bg-purple-500/10' : ''}`}>
                    <td className={`p-4 font-semibold ${index === 0 ? 'text-purple-400' : 'text-white'}`}>
                      {item.methode}
                    </td>
                    <td className="p-4 text-center">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        item.schmerz === 'Kein Schmerz' 
                          ? 'bg-green-500/20 text-green-400' 
                          : item.schmerz === 'Stark' 
                          ? 'bg-red-500/20 text-red-400'
                          : 'bg-orange-500/20 text-orange-400'
                      }`}>
                        {item.schmerz}
                      </span>
                    </td>
                    <td className="p-4 text-center text-white/70">{item.kuehlung}</td>
                    <td className="p-4 text-center text-white/70">{item.ergebnis}</td>
                    <td className="p-4 text-center">{item.komfort}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Behandlungsgefühl */}
      <section className="py-16 bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Wie fühlt sich die Behandlung an?</h2>
            <p className="text-white/60">
              Ehrliche Beschreibung unseres Kunden.
            </p>
          </div>
          
          <div className="card bg-gradient-to-br from-purple-600/20 to-demon-600/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-2xl font-bold text-white mb-2">"Überraschend angenehm!"</p>
              <p className="text-white/60">- Sarah K., Frankfurt</p>
            </div>
            
            <div className="space-y-4 text-white/70">
              <p>
                "Ich hatte große Angst vor Schmerzen, aber es war wirklich nichts. 
                Man fühlt nur eine leichte Wärme, fast wie eine warme Massage. 
                Die Kühlung macht einen riesigen Unterschied."
              </p>
              <p>
                "Nach 15 Minuten war die Behandlung vorbei und ich konnte direkt 
                wieder einkaufen gehen. Keine Rötung, kein Schmerz - einfach perfekt!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Für wen geeignet */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Perfekt für schmerzempfindliche Personen</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Unsere schmerzfreie Methode ist ideal für:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Erstbehandler',
                beschreibung: 'Noch nie laserieren lassen? Bei uns starten Sie ohne Angst und Schmerzen.',
                icon: Heart,
              },
              {
                title: 'Niedrige Schmerzschwelle',
                beschreibung: 'Empfindliche Haut? Unsere Kühlung macht die Behandlung angenehm.',
                icon: Zap,
              },
              {
                title: 'Große Flächen',
                beschreibung: 'Beine, Rücken oder Brust - auch bei großen Flächen kein Problem.',
                icon: CheckCircle,
              },
            ].map((item, index) => (
              <div key={index} className="card text-center">
                <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/60">{item.beschreibung}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Fragen zur schmerzfreien Behandlung</h2>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: 'Ist die Behandlung wirklich 100% schmerzfrei?',
                a: 'Ja! Unsere 3-Wellenlängen-Technologie mit integrierter Saphir-Kühlung macht die Behandlung vollständig schmerzfrei. Sie fühlen nur eine angenehme Wärme.'
              },
              {
                q: 'Brauche ich eine Betäubungscreme?',
                a: 'Nein, absolut nicht! Unsere Kühlung ersetzt jede Betäubung. Sie können sofort nach der Behandlung nach Hause gehen.'
              },
              {
                q: 'Funktioniert die schmerzfreie Methode auch bei empfindlicher Haut?',
                a: 'Ja, sie ist perfekt für empfindliche Haut! Die Kühlung schützt die Haut und verhindert jegliche Irritationen.'
              },
              {
                q: 'Kann ich alle Körperzonen schmerzfrei behandeln lassen?',
                a: 'Ja! Alle Körperzonen von Gesicht bis Intimbereich können vollständig schmerzfrei behandelt werden.'
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
            Bereit für schmerzfreie Schönheit?
          </h2>
          <p className="text-white/70 mb-8">
            Vereinbaren Sie jetzt Ihren Termin und erleben Sie, wie angenehm 
            dauerhafte Haarentfernung sein kann.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/4915238228127" className="btn-primary inline-flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Schmerzfrei beraten lassen
            </a>
            <Link href="/preise" className="btn-secondary">
              Preise ansehen
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
