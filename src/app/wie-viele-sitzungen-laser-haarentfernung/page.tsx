import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Phone, Clock, TrendingDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Wie viele Sitzungen braucht man für Laser Haarentfernung?',
  description: 'Erfahren Sie, wie viele Laser-Sitzungen für dauerhafte Haarentfernung nötig sind. Faktoren, Zeitplan und was Sie erwarten können.',
  keywords: ['wie viele sitzungen laser haarentfernung', 'anzahl behandlungen haarentfernung', 'laser haarentfernung dauer'],
}

export default function SitzungenSeite() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-demon-900/20 via-purple-900/20 to-angel-900/20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Wie viele Sitzungen braucht man?</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Die häufigste Frage zur Laser Haarentfernung: Wie oft muss ich kommen, 
              bis ich dauerhaft haarfrei bin?
            </p>
          </div>
        </div>
      </section>

      {/* Antwort */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="card bg-gradient-to-br from-demon-600/10 to-angel-600/10">
            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-purple-400 mb-4">4-6</div>
              <h2 className="text-3xl font-bold text-white mb-4">Behandlungen im Durchschnitt</h2>
              <p className="text-white/70 text-lg">
                Für die meisten Körperzonen benötigen Sie <strong className="text-white">4 bis 6 Sitzungen</strong>, 
                um dauerhaft haarfrei zu werden.
              </p>
            </div>
            
            <div className="space-y-4 text-white/80">
              <p>
                <CheckCircle className="h-5 w-5 text-green-400 inline mr-2" />
                <strong className="text-white">Abstand zwischen Sitzungen:</strong> 4-8 Wochen
              </p>
              <p>
                <CheckCircle className="h-5 w-5 text-green-400 inline mr-2" />
                <strong className="text-white">Gesamtdauer:</strong> 6-12 Monate
              </p>
              <p>
                <CheckCircle className="h-5 w-5 text-green-400 inline mr-2" />
                <strong className="text-white">Ergebnis:</strong> Dauerhaft glatte Haut
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Warum mehrere Sitzungen */}
      <section className="py-16 bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Warum sind mehrere Sitzungen nötig?</h2>
          </div>
          
          <div className="card">
            <div className="space-y-6 text-white/80">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Die 3 Haarwachstumsphasen</h3>
                <p className="mb-4">
                  Jedes Haar durchläuft drei Phasen: Wachstumsphase (Anagenphase), 
                  Übergangsphase (Katagenphase) und Ruhephase (Telogenphase).
                </p>
                <p className="mb-4">
                  <strong className="text-white">Der Laser wirkt nur in der Wachstumsphase.</strong> Da sich 
                  zu jedem Zeitpunkt nur etwa 20-30% Ihrer Haare in dieser Phase befinden, 
                  sind mehrere Behandlungen im Abstand von einigen Wochen nötig.
                </p>
              </div>
              
              <div className="pt-6 border-t border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">Was Sie erwarten können</h3>
                <div className="space-y-3">
                  <p>
                    <TrendingDown className="h-5 w-5 text-purple-400 inline mr-2" />
                    <strong className="text-white">Nach 1-2 Sitzungen:</strong> Erste Reduktion sichtbar
                  </p>
                  <p>
                    <TrendingDown className="h-5 w-5 text-purple-400 inline mr-2" />
                    <strong className="text-white">Nach 3-4 Sitzungen:</strong> Deutlich weniger Haarwuchs
                  </p>
                  <p>
                    <TrendingDown className="h-5 w-5 text-purple-400 inline mr-2" />
                    <strong className="text-white">Nach 4-6 Sitzungen:</strong> Dauerhafte Haarfreiheit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faktoren */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Faktoren, die die Anzahl beeinflussen</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Körperzone', text: 'Gesicht benötigt oft mehr Sitzungen als Beine' },
              { title: 'Haarfarbe', text: 'Dunkle Haare sprechen schneller an als helle' },
              { title: 'Hauttyp', text: 'Unsere 3-Wellenlängen-Technologie passt sich an' },
              { title: 'Hormonhaushalt', text: 'Kann die Behandlungsdauer beeinflussen' },
            ].map((faktor, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-bold text-white mb-2">{faktor.title}</h3>
                <p className="text-white/70">{faktor.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="card text-center bg-gradient-to-br from-demon-600/20 to-angel-600/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Individuelle Beratung für Ihren Behandlungsplan
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              In einem kostenlosen Beratungsgespräch analysieren wir Ihre Haut und 
              erstellen einen maßgeschneiderten Behandlungsplan.
            </p>
            <a href="tel:+4915238228127" className="btn-primary inline-flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Jetzt Beratung buchen
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
