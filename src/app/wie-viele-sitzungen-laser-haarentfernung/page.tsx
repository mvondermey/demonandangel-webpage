import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Clock, TrendingDown } from 'lucide-react'
import MarketingHero from '@/components/MarketingHero'
import PageCTA from '@/components/PageCTA'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  pathname: '/wie-viele-sitzungen-laser-haarentfernung',
  title: 'Wie viele Sitzungen braucht man für Laser Haarentfernung?',
  description: 'Erfahren Sie, wie viele Laser-Sitzungen für dauerhafte Haarentfernung nötig sind. Faktoren, Zeitplan und was Sie erwarten können.',
  keywords: ['wie viele sitzungen laser haarentfernung', 'anzahl behandlungen haarentfernung', 'laser haarentfernung dauer'],
})

export default function SitzungenSeite() {
  return (
    <>
      <MarketingHero
        eyebrow="Eine der haeufigsten Fragen"
        title="Wie viele Sitzungen braucht man?"
        description="Die meisten Zonen benoetigen mehrere Sitzungen, weil Haare in unterschiedlichen Wachstumsphasen aktiv sind. Hier sehen Sie, womit Sie realistisch planen koennen."
        highlights={['Meist 4-6 Sitzungen', 'Abstand 4-8 Wochen', 'Individueller Plan']}
        primaryAction={{ label: 'Beratung buchen', href: 'tel:+4915238228127', kind: 'phone' }}
        secondaryAction={{ label: 'Preise ansehen', href: '/preise' }}
      />

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

      {/* Detaillierte Haarwachstumsphasen */}
      <section className="py-16 bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Die 3 Haarwachstumsphasen im Detail</h2>
          </div>
          
          <div className="space-y-6">
            <div className="card bg-gradient-to-br from-green-600/10 to-blue-600/10">
              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-green-400">1</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Anagenphase (Wachstumsphase)</h3>
                  <p className="text-white/80 mb-3">
                    <strong className="text-white">Dauer:</strong> 2-7 Jahre (je nach Körperzone)
                  </p>
                  <p className="text-white/80">
                    In dieser Phase wächst das Haar aktiv und ist mit der Haarwurzel verbunden. 
                    Nur in dieser Phase kann der Laser das Melanin im Haarfollikel effektiv zerstören. 
                    <strong className="text-white"> Nur 20-30% Ihrer Haare befinden sich gleichzeitig in dieser Phase.</strong>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="card bg-gradient-to-br from-yellow-600/10 to-orange-600/10">
              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-yellow-400">2</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Katagenphase (Übergangsphase)</h3>
                  <p className="text-white/80 mb-3">
                    <strong className="text-white">Dauer:</strong> 2-3 Wochen
                  </p>
                  <p className="text-white/80">
                    Das Haar hört auf zu wachsen und löst sich langsam von der Blutversorgung. 
                    Der Laser kann hier noch teilweise wirken, aber die Wirkung ist reduziert. 
                    <strong className="text-white"> Etwa 2-3% der Haare befinden sich in dieser Phase.</strong>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="card bg-gradient-to-br from-purple-600/10 to-pink-600/10">
              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-purple-400">3</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Telogenphase (Ruhephase)</h3>
                  <p className="text-white/80 mb-3">
                    <strong className="text-white">Dauer:</strong> 3-4 Monate
                  </p>
                  <p className="text-white/80">
                    Das Haar ist vollständig aus der Haarwurzel gelöst und wird bald ausgestoßen. 
                    <strong className="text-white"> Der Laser kann hier nicht wirken.</strong> 
                    <strong className="text-white"> 70-80% der Haare befinden sich in dieser Phase.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Behandlungsplan */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Ihr persönlicher Behandlungsplan</h2>
          </div>
          
          <div className="card bg-gradient-to-br from-demon-600/10 to-angel-600/10">
            <div className="space-y-6 text-white/80">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">Erste Phase (Sitzung 1-3)</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Abstand: 4-6 Wochen</li>
                    <li>• Ziel: Aktive Haarfollikel behandeln</li>
                    <li>• Ergebnis: 30-50% Reduktion</li>
                    <li>• Haare werden dünner und wachsen langsamer</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">Zweite Phase (Sitzung 4-6)</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Abstand: 6-8 Wochen</li>
                    <li>• Ziel: Verbliebene Haare behandeln</li>
                    <li>• Ergebnis: 80-95% Reduktion</li>
                    <li>• Nur noch feine, helle Haare</li>
                  </ul>
                </div>
              </div>
              
              <div className="pt-6 border-t border-white/10">
                <h3 className="text-lg font-bold text-white mb-3">Nachbehandlung (Optional)</h3>
                <p className="mb-3">
                  Nach 6-12 Monaten können 1-2 Auffrischungssitzungen sinnvoll sein, 
                  um eventuell nachgewachsene Haare zu behandeln.
                </p>
                <p className="text-sm text-white/60">
                  <strong className="text-white">Tipp:</strong> Viele Kunden benötigen nur alle 1-2 Jahre eine Auffrischung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faktoren */}
      <section className="py-16 bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Faktoren, die die Anzahl beeinflussen</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { 
                title: 'Körperzone', 
                text: 'Gesicht und Intimbereich reagieren oft schneller als Beine oder Rücken. Gesicht: 4-6 Sitzungen, Beine: 6-8 Sitzungen.' 
              },
              { 
                title: 'Haarfarbe', 
                text: 'Dunkle Haare (schwarz, braun) enthalten mehr Melanin und sprechen besser an. Helle Haare benötigen mehr Sitzungen.' 
              },
              { 
                title: 'Hauttyp', 
                text: 'Unsere 3-Wellenlängen-Technologie behandelt alle Hauttypen sicher. Bei sehr heller Haut sind oft weniger Sitzungen nötig.' 
              },
              { 
                title: 'Hormonhaushalt', 
                text: 'Hormonelle Veränderungen (Schwangerschaft, Menopause, Medikamente) können die Behandlungsdauer beeinflussen.' 
              },
              { 
                title: 'Alter', 
                text: 'Jüngere Menschen haben oft aktiveren Haarwuchs. Mit zunehmendem Alter reduziert sich die Haaraktivität natürlich.' 
              },
              { 
                title: 'Genetik', 
                text: 'Manche Menschen haben von Natur aus mehr Haarfollikel. Dies beeinflusst die Gesamtzahl der Behandlungen.' 
              },
            ].map((faktor, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-bold text-white mb-2">{faktor.title}</h3>
                <p className="text-white/70">{faktor.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Häufige Fragen</h2>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: "Was passiert, wenn ich eine Sitzung ausfallen lasse?",
                a: "Kein Problem! Setzen Sie die Behandlung einfach fort. Der Abstand zwischen den Sitzungen kann bis zu 12 Wochen betragen, ohne die Wirksamkeit zu beeinträchtigen."
              },
              {
                q: "Kann ich zwischen den Sitzungen rasieren?",
                a: "Ja, Sie können zwischen den Sitzungen rasieren. Vermeiden Sie aber Wachsen, Epilieren oder Zupfen 4 Wochen vor jeder Behandlung."
              },
              {
                q: "Warum sehe ich nach der ersten Behandlung noch Haare?",
                a: "Normal! Nur Haare in der Anagenphase werden zerstört. Die restlichen Haare fallen in den nächsten Wochen aus und werden in den folgenden Sitzungen behandelt."
              },
              {
                q: "Wie lange hält das Ergebnis?",
                a: "Nach Abschluss der Behandlung sind Sie 80-95% haarfrei. Viele Kunden benötigen nur noch 1-2 Auffrischungen pro Jahr."
              },
              {
                q: "Funktioniert es auch bei grauen Haaren?",
                a: "Graue Haare enthalten wenig bis kein Melanin. Unsere 3-Wellenlängen-Technologie kann auch graue Haare behandeln, es können aber mehr Sitzungen nötig sein."
              }
            ].map((faq, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-white/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Individuelle Beratung fuer Ihren Behandlungsplan"
        description="In einem kostenlosen Beratungsgespraech analysieren wir Haut, Haare und Zielzonen und planen realistische Abstaende und Sitzungszahlen."
        primaryAction={{ label: 'Jetzt Beratung buchen', href: 'tel:+4915238228127', kind: 'phone' }}
        secondaryAction={{ label: 'Kontakt aufnehmen', href: '/kontakt' }}
      />
    </>
  )
}
