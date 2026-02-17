import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Phone, Sun, Shield, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Laser Haarentfernung bei gebräunter Haut | Demon (And) Angel',
  description: 'Ist Laser Haarentfernung bei gebräunter Haut möglich? Erfahren Sie alles über Sicherheit, Wartezeiten und unsere 3-Wellenlängen-Technologie.',
  keywords: ['laser haarentfernung gebräunte haut', 'haarentfernung nach urlaub', 'laser nach sonnenbad', 'gebräunt lasern'],
}

export default function GebraeunteHautSeite() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-demon-900/20 via-purple-900/20 to-angel-900/20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Laser Haarentfernung bei gebräunter Haut</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Kann ich mit Bräune zur Laser-Behandlung? Was Sie vor und nach dem Urlaub 
              beachten sollten.
            </p>
          </div>
        </div>
      </section>

      {/* Hauptantwort */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="card bg-gradient-to-br from-orange-600/10 to-red-600/10 border-orange-500/20">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="h-8 w-8 text-orange-400 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">
                  Wichtig: Keine Behandlung bei frischer Bräune
                </h2>
                <p className="text-white/80 text-lg">
                  Laser Haarentfernung sollte <strong className="text-white">nicht auf frisch gebräunter Haut</strong> durchgeführt 
                  werden – weder nach Sonnenbad noch nach Solarium.
                </p>
              </div>
            </div>
            
            <div className="space-y-4 text-white/80">
              <p>
                <strong className="text-white">Warum?</strong> Der Laser zielt auf das Melanin (Farbpigment) 
                im Haar ab. Gebräunte Haut enthält ebenfalls viel Melanin, was zu Verbrennungen, 
                Pigmentstörungen oder Narben führen kann.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wartezeiten */}
      <section className="py-16 bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Empfohlene Wartezeiten</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <Sun className="h-12 w-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Vor der Behandlung</h3>
              <p className="text-white/80 mb-4">
                <strong className="text-white">Mindestens 4 Wochen</strong> vor der Laser-Behandlung:
              </p>
              <ul className="space-y-2 text-white/70">
                <li>• Kein Sonnenbad</li>
                <li>• Kein Solarium</li>
                <li>• Kein Selbstbräuner</li>
                <li>• Sonnencreme mit LSF 50+ verwenden</li>
              </ul>
            </div>
            
            <div className="card">
              <Shield className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Nach der Behandlung</h3>
              <p className="text-white/80 mb-4">
                <strong className="text-white">Mindestens 2 Wochen</strong> nach der Laser-Behandlung:
              </p>
              <ul className="space-y-2 text-white/70">
                <li>• Behandelte Stellen vor Sonne schützen</li>
                <li>• Sonnencreme mit LSF 50+ verwenden</li>
                <li>• Kein Solarium</li>
                <li>• Kein Selbstbräuner auf behandelten Stellen</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Unsere Technologie */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Unsere 3-Wellenlängen-Technologie</h2>
          </div>
          
          <div className="card bg-gradient-to-br from-demon-600/10 to-angel-600/10">
            <div className="space-y-6 text-white/80">
              <p className="text-lg">
                Unsere moderne <strong className="text-white">3-Wellenlängen-Diodenlaser-Technologie</strong> ist 
                besonders sicher und kann verschiedene Hauttypen behandeln – aber auch wir halten uns 
                an die Sicherheitsrichtlinien.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-demon-400 mb-2">755nm</div>
                  <p className="text-sm">Alexandrit - für helle Haut</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">810nm</div>
                  <p className="text-sm">Diode - für mittlere Hauttypen</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-angel-400 mb-2">1064nm</div>
                  <p className="text-sm">YAG - für dunkle Haut</p>
                </div>
              </div>
              
              <p className="pt-6 border-t border-white/10">
                <CheckCircle className="h-5 w-5 text-green-400 inline mr-2" />
                Auch mit dieser Technologie gilt: <strong className="text-white">Keine Behandlung bei frischer Bräune</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wissenschaftliche Erklärung */}
      <section className="py-16 bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Warum Bräune und Laser nicht vertragen</h2>
          </div>
          
          <div className="card bg-gradient-to-br from-orange-600/10 to-red-600/10">
            <div className="space-y-6 text-white/80">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Die Rolle des Melanins</h3>
                <p className="mb-4">
                  <strong className="text-white">Melanin</strong> ist das Farbpigment, das sowohl in Haaren als auch in Haut vorkommt. 
                  Der Laser funktioniert durch gezielte Energieabgabe an Melanin.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="font-bold text-white mb-2">✅ Ideale Situation</h4>
                    <p className="text-sm">
                      Helle Haut + dunkle Haare = Laser zielt präzise auf Haar-Melanin
                    </p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="font-bold text-white mb-2">❌ Gebräunte Haut</h4>
                    <p className="text-sm">
                      Gebräunte Haut + Haare = Laser absorbiert auch Haut-Melanin
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">Mögliche Risiken bei gebräunter Haut</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-orange-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-white mb-1">Verbrennungen</h4>
                      <p className="text-sm">Die Haut kann durch die Laserenergie verbrennen</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-orange-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-white mb-1">Pigmentstörungen</h4>
                      <p className="text-sm">Dunkle oder helle Flecken können entstehen</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-orange-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-white mb-1">Narbenbildung</h4>
                      <p className="text-sm">In selten Fällen kann es zu Narben kommen</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-orange-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-white mb-1">Weniger effektiv</h4>
                      <p className="text-sm">Die Behandlung funktioniert nicht optimal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detaillierte Wartezeiten */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Exakte Wartezeiten für verschiedene Situationen</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <Sun className="h-12 w-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Nach Sonnenexposition</h3>
              <div className="space-y-3 text-white/80">
                <div className="flex justify-between">
                  <span>Leichte Bräune (1-2 Tage)</span>
                  <span className="text-orange-400 font-bold">2 Wochen</span>
                </div>
                <div className="flex justify-between">
                  <span>Mittlere Bräune (1 Woche)</span>
                  <span className="text-orange-400 font-bold">4 Wochen</span>
                </div>
                <div className="flex justify-between">
                  <span>Starke Bräune (2+ Wochen)</span>
                  <span className="text-orange-400 font-bold">6-8 Wochen</span>
                </div>
                <div className="flex justify-between">
                  <span>Sonnenbrand</span>
                  <span className="text-orange-400 font-bold">Bis zur Heilung</span>
                </div>
              </div>
            </div>
            
            <div className="card">
              <Shield className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Nach künstlicher Bräune</h3>
              <div className="space-y-3 text-white/80">
                <div className="flex justify-between">
                  <span>Solarium (1-2x)</span>
                  <span className="text-purple-400 font-bold">4 Wochen</span>
                </div>
                <div className="flex justify-between">
                  <span>Solarium (regelmäßig)</span>
                  <span className="text-purple-400 font-bold">6-8 Wochen</span>
                </div>
                <div className="flex justify-between">
                  <span>Selbstbräuner</span>
                  <span className="text-purple-400 font-bold">1 Woche</span>
                </div>
                <div className="flex justify-between">
                  <span>Bräunungs-Spray</span>
                  <span className="text-purple-400 font-bold">1 Woche</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nach der Behandlung */}
      <section className="py-16 bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Nach der Laser-Behandlung</h2>
          </div>
          
          <div className="card bg-gradient-to-br from-demon-600/10 to-angel-600/10">
            <div className="space-y-6 text-white/80">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Erste 2 Wochen: Extra Vorsicht</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Sonnencreme LSF 50+ täglich</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Keine direkte Sonneneinstrahlung</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Hut oder Kappe im Freien</span>
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Kein Solarium</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Kein Selbstbräuner</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Keine Peelings oder Scrubs</span>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">Nach 2 Wochen: Normale Pflege</h3>
                <p className="mb-3">
                  Nach 2 Wochen können Sie wieder normal sonnen, aber verwenden Sie weiterhin 
                  guten Sonnenschutz auf den behandelten Stellen.
                </p>
                <p className="text-sm text-white/60">
                  <strong className="text-white">Tipp:</strong> Die behandelten Stellen sind oft empfindlicher gegenüber Sonne. 
                  Langfristig ist guter Sonnenschutz immer empfehlenswert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tipps */}
      <section className="py-16 bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Praktische Tipps für Ihren Alltag</h2>
          </div>
          
          <div className="space-y-4">
            {[
              { 
                title: 'Urlaub geplant?', 
                text: 'Planen Sie Ihre Laser-Behandlungen außerhalb der Urlaubszeit oder warten Sie 4 Wochen nach dem Urlaub. Im Winter behandeln lassen, im Sommer genießen!' 
              },
              { 
                title: 'Sommer-Behandlung?', 
                text: 'Auch im Sommer möglich! Planen Sie Behandlungen für Abendstunden und tragen Sie tagsüber immer Sonnencreme LSF 50+ auf behandelten Stellen.' 
              },
              { 
                title: 'Selbstbräuner?', 
                text: 'Mindestens 1 Woche vor der Behandlung absetzen. Verwenden Sie einen milden Peelingschwamm, um Reste vollständig zu entfernen.' 
              },
              { 
                title: 'Medikamente?', 
                text: 'Einige Medikamente (z.B. Antibiotika, Antidepressiva) können die Lichtempfindlichkeit erhöhen. Informieren Sie uns bei der Beratung.' 
              },
              { 
                title: 'Hauttyp beachten', 
                text: 'Helle Hauttypen (Typ I-II) benötigen mehr Vorsicht als dunkle Hauttypen (Typ IV-VI). Wir beraten Sie individuell.' 
              },
              { 
                title: 'Unsicher?', 
                text: 'Rufen Sie uns an! Wir beraten Sie gerne, ob Ihre Haut aktuell für die Behandlung geeignet ist. Besser fragen als riskieren!' 
              },
            ].map((tipp, index) => (
              <div key={index} className="card flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{tipp.title}</h3>
                  <p className="text-white/70">{tipp.text}</p>
                </div>
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
                q: "Kann ich mit gebräunter Haut behandelt werden, wenn ich es riskiere?",
                a: "Wir empfehlen dringend dagegen. Das Risiko von Verbrennungen und Pigmentstörungen ist zu hoch. Ihre Sicherheit steht an erster Stelle."
              },
              {
                q: "Was passiert, wenn ich mich versehentlich in die Sonne begehe?",
                a: "Keine Panik! Verwenden Sie sofort Sonnencreme LSF 50+. Verschieben Sie die nächste Behandlung um 2-4 Wochen, je nach Stärke der Bräune."
              },
              {
                q: "Funktioniert die Behandlung auch bei dunkler Haut?",
                a: "Ja! Unsere 3-Wellenlängen-Technologie ist für alle Hauttypen geeignet. Bei dunkler Haut sind die Wartezeiten oft kürzer, da die Haut natürlichen Schutz hat."
              },
              {
                q: "Kann ich meine normale Bräune durch Laser entfernen?",
                a: "Nein. Laser entfernt nur Haare, nicht Hautpigment. Die Bräune muss natürlich verblassen oder Sie müssen die Wartezeiten einhalten."
              },
              {
                q: "Wie erkenne ich, ob meine Haut zu gebräunt ist?",
                a: "Vergleichen Sie die unbehandelte Haut mit einer nicht sonnenexponierten Stelle (z.B. Po-Innenseite). Bei sichtbarem Unterschied warten Sie bitte."
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

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="card text-center bg-gradient-to-br from-demon-600/20 to-angel-600/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Fragen zu Ihrer Haut?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Unsicher, ob Ihre Haut aktuell für die Behandlung geeignet ist? 
              Rufen Sie uns an – wir beraten Sie ehrlich und kompetent.
            </p>
            <a href="tel:+4915238228127" className="btn-primary inline-flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Jetzt anrufen
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
