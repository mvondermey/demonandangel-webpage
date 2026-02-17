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

      {/* Tipps */}
      <section className="py-16 bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Praktische Tipps</h2>
          </div>
          
          <div className="space-y-4">
            {[
              { title: 'Urlaub geplant?', text: 'Planen Sie Ihre Laser-Behandlungen außerhalb der Urlaubszeit oder warten Sie 4 Wochen nach dem Urlaub.' },
              { title: 'Sommer-Behandlung?', text: 'Auch im Sommer möglich, aber behandelte Stellen konsequent mit Sonnencreme schützen.' },
              { title: 'Selbstbräuner?', text: 'Mindestens 1 Woche vor der Behandlung absetzen und vollständig abwaschen lassen.' },
              { title: 'Unsicher?', text: 'Rufen Sie uns an! Wir beraten Sie gerne, ob Ihre Haut aktuell für die Behandlung geeignet ist.' },
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
