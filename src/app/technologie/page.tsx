import { Shield, Clock, CheckCircle, Star, Sparkles } from 'lucide-react'

export const metadata = {
  title: 'Diodenlaser 3-Wellenlängen-Technologie | Demon (And) Angel',
  description: 'Entdecken Sie die Vorteile der dauerhaften Haarentfernung durch den Diodenlaser 3 in 1 – die modernste, effizienteste und sicherste Methode auf dem Markt.',
  keywords: ['Diodenlaser', '3-Wellenlängen', 'Alexandrit-Laser', 'Yag-Laser', 'Haarentfernungstechnologie'],
  openGraph: {
    title: 'Diodenlaser 3-Wellenlängen-Technologie | Demon (And) Angel',
    description: 'Modernste 3-Wellenlängen-Diodenlaser Technologie für schmerzfreie und permanente Haarentfernung in Frankfurt.',
    url: 'https://demonandangel.eu/technologie',
    images: ['/images/logo-removebg-preview.png'],
  },
}

const technologieVorteile = [
  {
    icon: Shield,
    title: 'völlig SCHMERZFREI',
    description: 'Moderste Technologie für eine angenehme Behandlung ohne Schmerzen.',
  },
  {
    icon: Shield,
    title: 'keine Verbrennungsgefahr bei gebräunter Haut',
    description: 'Sicher auch bei gebräunter Haut durch unsere 3-Wellenlängen-Technologie.',
  },
  {
    icon: Clock,
    title: 'kürzere Behandlungszeit',
    description: 'Effiziente Behandlung durch moderne Laser-Technologie.',
  },
  {
    icon: Clock,
    title: 'kürzere Abstände zwischen einzelnen Behandlungen',
    description: 'Weniger Zeit zwischen einzelnen Behandlungen erforderlich.',
  },
  {
    icon: Star,
    title: 'weniger Behandlungen im Vergleich zu anderen Methoden',
    description: 'Im Vergleich zu anderen Methoden weniger Sitzungen nötig.',
  },
  {
    icon: Sparkles,
    title: 'weiße, graue, rote und feine Haare können behandelt werden',
    description: 'Alle Haarfarben und -typen können erfolgreich behandelt werden.',
  },
]

export default function TechnologiePage() {
  return (
    <>
      {/* Hero */}
      <section className="pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Laser Haarentfernung Hintergrund"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-demon-900/80 via-purple-900/60 to-angel-900/80" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Diodenlaser 3-Wellenlängen-Technologie</span>
          </h1>
          <p className="text-xl text-white/70 mb-8">
            Entdecken Sie die Vorteile der dauerhaften Haarentfernung durch den Diodenlaser 3 in 1 – die modernste, effizienteste und sicherste Methode auf dem Markt.
          </p>
        </div>
      </section>

      {/* Technologie Erklärung */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-white/70 mb-8">
              Unsere innovative Technologie (Haarentfernungstechnologie) kombiniert drei wirksame Laser-Wellenlängen, die alle Bereiche der Haarwurzel in den verschiedenen Tiefen der Haut ansprechen.
            </p>
            <p className="text-xl text-white/70 mb-8">
              Mit der Kombination aus Alexandrit, Dioden- und Yag-Laser können nun selbst hellere oder dünnere Haare, die bisher nur schwer oder gar nicht zu entfernen waren, erfolgreich behandelt werden.
            </p>
            <p className="text-xl text-white/70 mb-8">
              Unser Diodenlaser 3 in 1 bietet Ihnen eine schnelle und nahezu schmerzfreie Behandlung, ohne Nebenwirkungen und mit besserem Hautschutz als herkömmliche Systeme. Die Wellenlängen von 755nm, 810nm und 1064nm sind jeweils speziell auf verschiedene Haartypen und Hautfarben abgestimmt.
            </p>
            <p className="text-xl text-white/70 mb-8">
              Die Alexandrit-Wellenlänge eignet sich besonders für helles und dünnes Haar, die Diodenlaser-Wellenlänge ist eine klassische Lösung für mittlere Haarstärken und die Yag-Wellenlänge bietet eine fokussierte Lösung für dunklere Hauttypen.
            </p>
            <p className="text-xl text-white/70">
              Verabschieden Sie sich von lästigen Haaren an Armen, Beinen oder im Intimbereich und genießen Sie seidig glatte Haut nach nur 6 Anwendungen. Mit dem Diodenlaser 3 in 1 erreichen Sie ein ganzheitliches und dauerhaftes Ergebnis der Haarentfernung. Entdecken Sie die Vorteile unserer innovativen Technologie und lassen Sie sich von uns begeistern.
            </p>
          </div>
        </div>
      </section>

      {/* Wellenlängen Detail */}
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-heading">Die drei Wellenlängen im Detail</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div className="space-y-6">
              <div className="card text-center">
                <div className="text-4xl font-bold text-demon-400 mb-2">755nm</div>
                <h3 className="text-xl font-semibold text-white mb-2">Alexandrit</h3>
                <p className="text-white/60">Ideal für helles und dünnes Haar</p>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">810nm</div>
                <h3 className="text-xl font-semibold text-white mb-2">Diodenlaser</h3>
                <p className="text-white/60">Klassische Lösung für mittlere Haarstärken</p>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold text-angel-400 mb-2">1064nm</div>
                <h3 className="text-xl font-semibold text-white mb-2">Yag-Laser</h3>
                <p className="text-white/60">Perfekt für dunklere Hauttypen</p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/laser-epilation.jpg" 
                alt="3-Wellenlängen-Diodenlaser Technologie"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile der Methode */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-heading">Vorteile der 3-Wellenlängen-Diodenlaser-Methode</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologieVorteile.map((vorteil) => (
              <div key={vorteil.title} className="card group hover:scale-105 transition-transform duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-demon-500 to-angel-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <vorteil.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{vorteil.title}</h3>
                <p className="text-white/60">{vorteil.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Haarwachstumsphasen - Warum 6 Behandlungen */}
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-heading">Warum sind 6-8 Behandlungen nötig?</h2>
            <p className="text-white/60 max-w-3xl mx-auto">
              Der Haarwuchs durchläuft drei Phasen. Der Laser kann nur Haare in der aktiven Wachstumsphase behandeln.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card text-center">
              <div className="text-4xl font-bold text-green-400 mb-4">1</div>
              <h3 className="text-xl font-semibold text-white mb-2">Anagenphase</h3>
              <p className="text-white/60">Aktive Wachstumsphase - hier wirkt der Laser am effektivsten (20-30% der Haare)</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-4">2</div>
              <h3 className="text-xl font-semibold text-white mb-2">Katagenphase</h3>
              <p className="text-white/60">Übergangsphase - das Haar löst sich von der Wurzel</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-red-400 mb-4">3</div>
              <h3 className="text-xl font-semibold text-white mb-2">Telogenphase</h3>
              <p className="text-white/60">Ruhephase - das Haar fällt aus, neues Haar wächst nach</p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-white/70 max-w-2xl mx-auto">
              Da sich nicht alle Haare gleichzeitig in der Wachstumsphase befinden, sind mehrere Sitzungen im Abstand von 4-8 Wochen notwendig, um alle Haarwurzeln dauerhaft zu deaktivieren.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
