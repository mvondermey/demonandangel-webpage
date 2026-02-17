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
