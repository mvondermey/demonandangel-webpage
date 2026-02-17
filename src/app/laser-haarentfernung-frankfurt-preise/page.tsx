import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Phone, Euro, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Laser Haarentfernung Frankfurt Preise | Demon (And) Angel',
  description: 'Transparente Preise für Laser Haarentfernung in Frankfurt. Alle Körperzonen für Frauen & Männer. Keine versteckten Kosten. Jetzt informieren!',
  keywords: ['laser haarentfernung frankfurt preise', 'haarentfernung kosten frankfurt', 'laser preise frankfurt', 'dauerhafte haarentfernung kosten'],
}

export default function PreiseSeite() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-demon-900/20 via-purple-900/20 to-angel-900/20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Laser Haarentfernung Frankfurt Preise</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Transparente und faire Preise für dauerhafte Haarentfernung in Frankfurt. 
              Keine versteckten Kosten, keine Überraschungen.
            </p>
            <Link href="/preise" className="btn-primary inline-flex items-center gap-2">
              <Euro className="h-5 w-5" />
              Zur vollständigen Preisliste
            </Link>
          </div>
        </div>
      </section>

      {/* Preis-Übersicht */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Was kostet Laser Haarentfernung in Frankfurt?</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Unsere Preise richten sich nach der Körperzone und der Größe des zu behandelnden Bereichs.
            </p>
          </div>
          
          <div className="card bg-gradient-to-br from-demon-600/10 to-angel-600/10">
            <div className="space-y-6 text-white/80">
              <p className="text-lg">
                <strong className="text-white">Kleine Zonen</strong> (z.B. Oberlippe, Kinn, Achseln): 
                <span className="text-purple-400 font-bold ml-2">ab 30€ pro Sitzung</span>
              </p>
              <p className="text-lg">
                <strong className="text-white">Mittlere Zonen</strong> (z.B. Unterarme, Bikinizone): 
                <span className="text-purple-400 font-bold ml-2">ab 60€ pro Sitzung</span>
              </p>
              <p className="text-lg">
                <strong className="text-white">Große Zonen</strong> (z.B. Beine, Rücken): 
                <span className="text-purple-400 font-bold ml-2">ab 120€ pro Sitzung</span>
              </p>
              <div className="pt-6 border-t border-white/10">
                <p className="text-white/60">
                  <CheckCircle className="h-5 w-5 text-green-400 inline mr-2" />
                  Alle Preise verstehen sich pro Behandlung
                </p>
                <p className="text-white/60 mt-2">
                  <CheckCircle className="h-5 w-5 text-green-400 inline mr-2" />
                  Für optimale Ergebnisse empfehlen wir 4-6 Behandlungen
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detaillierte Preisübersicht */}
      <section className="py-16 bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Preise nach Körperzonen</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Detaillierte Übersicht unserer Laser Haarentfernung Preise in Frankfurt
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-4">Für Frauen</h3>
              <div className="space-y-3 text-white/80">
                <div className="flex justify-between">
                  <span>Oberlippe</span>
                  <span className="text-purple-400 font-bold">30€</span>
                </div>
                <div className="flex justify-between">
                  <span>Kinn</span>
                  <span className="text-purple-400 font-bold">35€</span>
                </div>
                <div className="flex justify-between">
                  <span>Achseln</span>
                  <span className="text-purple-400 font-bold">60€</span>
                </div>
                <div className="flex justify-between">
                  <span>Bikinizone</span>
                  <span className="text-purple-400 font-bold">80€</span>
                </div>
                <div className="flex justify-between">
                  <span>Beine (komplett)</span>
                  <span className="text-purple-400 font-bold">150€</span>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-4">Für Männer</h3>
              <div className="space-y-3 text-white/80">
                <div className="flex justify-between">
                  <span>Hals</span>
                  <span className="text-purple-400 font-bold">40€</span>
                </div>
                <div className="flex justify-between">
                  <span>Bart</span>
                  <span className="text-purple-400 font-bold">90€</span>
                </div>
                <div className="flex justify-between">
                  <span>Brust</span>
                  <span className="text-purple-400 font-bold">80€</span>
                </div>
                <div className="flex justify-between">
                  <span>Rücken</span>
                  <span className="text-purple-400 font-bold">120€</span>
                </div>
                <div className="flex justify-between">
                  <span>Bauch</span>
                  <span className="text-purple-400 font-bold">70€</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preisvergleich */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Laser Haarentfernung vs. Alternativen</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Warum sich Laser Haarentfernung langfristig lohnt
            </p>
          </div>
          
          <div className="card bg-gradient-to-br from-demon-600/10 to-angel-600/10">
            <div className="overflow-x-auto">
              <table className="w-full text-white/80">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3">Methode</th>
                    <th className="text-center py-3">Kosten pro Jahr</th>
                    <th className="text-center py-3">Dauerhaftigkeit</th>
                    <th className="text-center py-3">Schmerzhaft</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="py-3">Rasieren</td>
                    <td className="text-center py-3">120€</td>
                    <td className="text-center py-3">❌ Nein</td>
                    <td className="text-center py-3">⚠️ Leicht</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3">Wachsen</td>
                    <td className="text-center py-3">480€</td>
                    <td className="text-center py-3">❌ Nein</td>
                    <td className="text-center py-3">✅ Stark</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3">Creme</td>
                    <td className="text-center py-3">180€</td>
                    <td className="text-center py-3">❌ Nein</td>
                    <td className="text-center py-3">⚠️ Leicht</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold text-white">Laser</td>
                    <td className="text-center py-3 font-bold text-green-400">240€</td>
                    <td className="text-center py-3">✅ Ja</td>
                    <td className="text-center py-3">❌ Nein</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-white/60 mt-4">
              *Berechnung über 5 Jahre bei 4 Behandlungen im ersten Jahr
            </p>
          </div>
        </div>
      </section>

      {/* Warum unsere Preise fair sind */}
      <section className="py-16 bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Warum unsere Preise fair sind</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Modernste 3-Wellenlängen-Technologie',
              'NiSV-zertifiziertes Fachpersonal',
              'Keine versteckten Zusatzkosten',
              'Transparente Beratung vor Ort',
              'Flexible Paketpreise verfügbar',
              'Zentrale Lage in Frankfurt',
            ].map((punkt, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/80">{punkt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zusatzleistungen */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Im Preis enthalten</h2>
          </div>
          
          <div className="card bg-gradient-to-br from-demon-600/10 to-angel-600/10">
            <div className="grid md:grid-cols-2 gap-6 text-white/80">
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Vor der Behandlung</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Kostenlose Erstberatung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Hauttyp-Analyse</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Individueller Behandlungsplan</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Nach der Behandlung</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Kühle Aftercare-Produkte</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Follow-up Beratung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Garantie auf Ergebnis</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="card text-center bg-gradient-to-br from-demon-600/20 to-angel-600/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Persönliche Beratung zu Preisen & Behandlung
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Jede Haut ist unterschiedlich. Vereinbaren Sie einen kostenlosen Beratungstermin 
              und erhalten Sie ein individuelles Angebot für Ihre Wunschzonen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+4915238228127" className="btn-primary inline-flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Jetzt Beratung buchen
              </a>
              <Link href="/preise" className="btn-secondary inline-flex items-center gap-2">
                Vollständige Preisliste
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
