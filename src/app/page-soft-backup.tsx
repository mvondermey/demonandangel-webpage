import Link from 'next/link'
import { ArrowRight, Star, Shield, Clock, Zap, CheckCircle, Phone, MapPin, Sparkles, Heart, Leaf, ShieldCheck } from 'lucide-react'

const vorteile = [
  {
    icon: Heart,
    title: 'Sanfte Behandlung',
    description: 'Moderne Kühltechnologie sorgt für eine angenehme, schmerzfreie Erfahrung.',
  },
  {
    icon: ShieldCheck,
    title: 'Höchste Sicherheit',
    description: 'NiSV-zertifizierte Expertise mit medizinischem Standard für Ihre Sicherheit.',
  },
  {
    icon: Leaf,
    title: 'Für alle Hauttypen',
    description: 'Spezielle 3-Wellenlängen-Technologie behandelt alle Haut- und Haartypen sicher.',
  },
  {
    icon: Clock,
    title: 'Lang anhaltende Ergebnisse',
    description: 'Nach 6-8 Behandlungen dauerhaft glatte Haut - nie wieder rasieren.',
  },
]

const behandlungen = [
  {
    name: 'Gesicht',
    description: 'Oberlippe, Kinn, Wangen - für ein gepflegtes, glattes Erscheinungsbild.',
    href: '/laser-haarentfernung-gesicht',
  },
  {
    name: 'Körper',
    description: 'Achseln, Arme, Beine, Rücken - für alle Körperzonen.',
    href: '/laser-haarentfernung-maenner',
  },
  {
    name: 'Intimbereich',
    description: 'Bikinizone, Intim, Po - diskret, professionell und hygienisch.',
    href: '/laser-haarentfernung-intimbereich',
  },
]

export default function HomeAlternative() {
  return (
    <>
      {/* Hero Section - Soft Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 via-white to-purple-50">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-100/20 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
          <div className="animate-fade-in space-y-4">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full shadow-lg">
              <span className="text-white font-bold text-lg">🎉 25% Rabatt auf Ihre erste Behandlung</span>
            </div>
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 text-rose-700 text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                NiSV-zertifiziert • Medizinischer Standard
              </span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 mt-8 animate-slide-up text-gray-800">
            <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Dauerhaft glatte Haut
            </span>
            <br />
            <span className="text-gray-600 text-3xl md:text-4xl lg:text-5xl font-light">
              ohne Schmerzen
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 animate-slide-up">
            Moderne Laser-Haarentfernung in Frankfurt. 
            Sanft, sicher und effektiv für Frauen und Männer.
          </p>

          <div className="flex items-center justify-center gap-2 text-gray-500 mb-12">
            <MapPin className="h-5 w-5 text-rose-500" />
            <span>Europa-Allee 43, 60327 Frankfurt am Main</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <a href="https://wa.me/4915238228127" className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-full hover:from-rose-400 hover:to-pink-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Termin vereinbaren
            </a>
            <Link href="/preise" className="px-8 py-4 border-2 border-rose-300 text-rose-600 font-semibold rounded-full hover:bg-rose-50 transition-all duration-300">
              Preise ansehen
            </Link>
          </div>
          
          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '6-8', label: 'Behandlungen' },
              { value: '100%', label: 'Schmerzfrei' },
              { value: '3', label: 'Laser-Typen' },
              { value: '5★', label: 'Bewertungen' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Warum <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">Demon & Angel</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ihr Wohlbefinden steht bei uns an erster Stelle. Moderne Technologie trifft auf fürsorgliche Betreuung.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vorteile.map((vorteil) => (
              <div key={vorteil.title} className="bg-gradient-to-br from-rose-50 to-purple-50 rounded-2xl p-8 border border-rose-100 hover:shadow-lg transition-all duration-300 text-center group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-400 to-pink-400 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <vorteil.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{vorteil.title}</h3>
                <p className="text-gray-600">{vorteil.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Behandlungen */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Unsere <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">Behandlungen</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Für jede Körperzone die passende Lösung. Individuell, diskret und effektiv.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {behandlungen.map((behandlung) => (
              <Link
                key={behandlung.name}
                href={behandlung.href}
                className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-rose-300 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-rose-500 transition-colors">
                  {behandlung.name}
                </h3>
                <p className="text-gray-600 mb-6">{behandlung.description}</p>
                <div className="flex items-center gap-2 text-rose-500 font-semibold">
                  <span>Mehr erfahren</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Shield className="h-16 w-16 text-rose-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Ihre Sicherheit ist uns wichtig
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            NiSV-zertifiziertes Fachpersonal, modernste Hygienestandards und eine entspannte Atmosphäre 
            – für Ihr Wohlbefinden bei jeder Behandlung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/4915238228127" className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-full hover:from-rose-400 hover:to-pink-400 transition-all duration-300 shadow-lg inline-flex items-center gap-2 justify-center">
              <Phone className="h-5 w-5" />
              Kostenlose Beratung
            </a>
            <Link href="/technologie" className="px-8 py-4 border-2 border-rose-300 text-rose-600 font-semibold rounded-full hover:bg-rose-50 transition-all duration-300">
              Unsere Technologie
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
