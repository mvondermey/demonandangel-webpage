import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Star, Shield, Clock, Zap, CheckCircle, Phone, MapPin, Sparkles, MessageCircle } from 'lucide-react'
import HeroGallery from '@/components/HeroGallery'
import PageCTA from '@/components/PageCTA'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  pathname: '/',
  title: 'Laser Haarentfernung Frankfurt ab 29€ | Schmerzfrei & Dauerhaft ✓',
  description: 'Laser Haarentfernung Frankfurt ⭐ ab 29€ ⭐ Schmerzfrei mit 3-Wellenlängen-Diodenlaser. NiSV-zertifiziert, für alle Hauttypen. Ganzkörper nur 199€. ☎ Jetzt Termin: 015238228127',
})

const vorteile = [
  {
    icon: Zap,
    title: 'Besonders angenehme Behandlung',
    description: 'Modernste Technologie für eine angenehme Behandlung ohne Schmerzen.',
  },
  {
    icon: Shield,
    title: 'Sicher auch bei gebräunter Haut',
    description: 'Sicher auch bei gebräunter Haut durch unsere 3-Wellenlängen-Technologie.',
  },
  {
    icon: Clock,
    title: 'Kürzere Behandlungszeit',
    description: 'Effiziente Behandlung durch moderne Laser-Technologie.',
  },
  {
    icon: CheckCircle,
    title: 'Alle Haarfarben',
    description: 'Helle, graue, rote und feine Haare können behandelt werden.',
  },
]

const behandlungen = [
  {
    name: 'Gesicht',
    description: 'Oberlippe, Kinn, Wangen, Koteletten - für ein glattes Gesicht.',
    href: '/laser-haarentfernung-gesicht',
  },
  {
    name: 'Für Frauen',
    description: 'Beine, Achseln, Bikinizone - seidig glatte Haut für Sie.',
    href: '/laser-haarentfernung-frauen',
  },
  {
    name: 'Für Männer',
    description: 'Rücken, Brust, Bauch, Bart - spezialisiert auf Männerhaut.',
    href: '/laser-haarentfernung-maenner',
  },
  {
    name: 'Intimbereich',
    description: 'Bikinizone & Intimbereich - diskret und professionell.',
    href: '/laser-haarentfernung-intimbereich',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="keep-dark relative min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Rotating Photo Gallery Background */}
        <HeroGallery />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm">
              <Sparkles className="h-4 w-4 text-purple-400" />
              NiSV-zertifiziertes Fachpersonal • Medizinisches Niveau
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 animate-slide-up">
            <span className="gradient-text">Dauerhafte</span>
            <br />
            <span className="text-white">Laser Haarentfernung Frankfurt</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-8 animate-slide-up">
            Professionelle Haarentfernung für Frauen und Männer in Frankfurt. 
            Schmerzfrei, effektiv und für alle Hauttypen geeignet.
          </p>

          <div className="flex items-center justify-center gap-2 text-white/60 mb-12">
            <MapPin className="h-5 w-5" />
            <span>Europa-Allee 41-43, 60327 Frankfurt am Main</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <a href="tel:+4915238228127" className="btn-primary inline-flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Jetzt Termin buchen
            </a>
            <a href="https://wa.me/4915238228127" className="inline-flex items-center gap-2 rounded-full bg-green-600 px-8 py-4 font-semibold text-white shadow-lg shadow-green-900/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl">
              <MessageCircle className="h-5 w-5" />
              WhatsApp schreiben
            </a>
            <Link href="/preise" className="btn-secondary">
              Preise ansehen
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-white/70">
            <Link href="/bewertungen" className="page-support-link">Bewertungen</Link>
            <Link href="/faq" className="page-support-link">FAQ</Link>
            <Link href="/kontakt" className="page-support-link">Kontakt</Link>
          </div>
          
          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '4', label: 'Behandlungen' },
              { value: 'Schonend', label: 'Mit Kühlung' },
              { value: '3', label: 'Wellenlängen' },
              { value: '5★', label: 'Bewertungen' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
                <div className="text-white/60 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="homepage-light">

      {/* Professionelle Laser-Haarentfernung Einführung */}
      <section className="py-24 bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Professionelle Laser-Haarentfernung in Frankfurt</h2>
          </div>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Niemand muss heute mehr Haare an Stellen dulden, die sie oder er lieber haarlos sehen möchte. 
              Für alle, die sich dauerhaft unerwünschter Haare entledigen wollen, bietet Demon (And) Angel 
              in Frankfurt ein hochmodernes, Laser-basiertes Haarentfernungsprogramm, welches von erfahrenen 
              Experten betreut wird und hervorragende Ergebnisse liefert.
            </p>
            
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Kontinuierliche Optimierungen der eingesetzten Technologien und Verfahren haben dazu geführt, 
              dass die Haarentfernung mit Laser heute nicht nur die effektivste Methode ist, Haare dauerhaft 
              zu entfernen, sondern auch eine der sichersten und schonendsten. Mit keiner anderen Methode 
              lassen sich auf möglichst schonende Weise so gute und anhaltende Ergebnisse erzielen.
            </p>

            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Der Laserstrahl, bei dem es sich um gebündeltes Licht handelt, wirkt gezielt auf die Haarwurzel 
              ein, ohne umliegendes Gewebe zu beschädigen. Das ist möglich, weil Melanin, der Farbstoff der 
              Haare, in hohem Maße Licht absorbiert, wodurch Wärme entsteht. Bei der Bestrahlung mit unserem 
              Speziallaser entsteht in der Haarwurzel für einen kurzen Moment eine kontrollierte Hitze, 
              die die Haarwurzel verödet.
            </p>

            <p className="text-white/80 text-lg leading-relaxed">
              Behandelt werden können fast alle Körperregionen: vom Gesicht über die Arme und die Beine 
              bis zu den Achselhöhlen oder der Bikinizone. Moderne Lasergeräte lassen sich zudem optimal 
              auf unterschiedliche Haut- und Haartypen einstellen, um die perfekte Balance zwischen 
              Intensität und Effektivität zu gewährleisten. Wer nach einer schonenden, dauerhaften 
              Haarentfernung in Frankfurt sucht, ist bei den Spezialisten von Demon (And) Angel in den besten Händen.
            </p>
          </div>
        </div>
      </section>

      {/* Technologie Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-heading">3-Wellenlängen-Diodenlaser Technologie</h2>
            <p className="text-white/60 max-w-3xl mx-auto">
              Unser innovativer Diodenlaser 3 in 1 kombiniert drei wirksame Laser-Wellenlängen 
              (Alexandrit 755nm, Diode 810nm, Yag 1064nm), die alle Bereiche der Haarwurzel 
              in verschiedenen Tiefen der Haut ansprechen.
            </p>
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
                alt="3-Wellenlängen-Diodenlaser Technologie bei Demon (And) Angel Frankfurt"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story Link */}
      <section className="py-16 bg-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-demon-500/20 via-purple-500/20 to-angel-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-demon-400" />
              <div className="w-3 h-3 rounded-full bg-purple-400" />
              <div className="w-3 h-3 rounded-full bg-angel-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Warum Demon (And) Angel?
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Entdecken Sie die Geschichte hinter unserem Namen und die Philosophie, 
              die uns zur perfekten Balance aus Kraft und Sanftheit macht.
            </p>
            <Link 
              href="/why-demonandangel" 
              className="btn-primary inline-flex items-center gap-2"
            >
              Unsere Geschichte entdecken
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Vorteile Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-heading">Ihre Vorteile bei uns</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              In einer angenehmen Studioatmosphäre verbinden wir hochmoderne Technik 
              mit kompetenter Behandlung zu fabelhaften Preisen.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vorteile.map((vorteil) => (
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

      {/* Behandlungen Preview */}
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-heading">Unsere Behandlungen</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Wählen Sie Ihre weibliche oder männliche Behandlungsperson. 
              Wir bieten diskrete Ganzkörper-Behandlungen für Mann und Frau.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {behandlungen.map((behandlung, index) => (
              <Link key={behandlung.name} href={behandlung.href} className="group">
                <div className="card overflow-hidden p-0">
                  <div className="aspect-video relative overflow-hidden">
                    {index === 0 && (
                      <img 
                        src="/images/young-beautiful-woman.jpg" 
                        alt="Laser Haarentfernung Gesicht - Schmerzfreie Behandlung in Frankfurt"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    )}
                    {index === 1 && (
                      <img 
                        src="/images/beautiful-female-legs.jpg" 
                        alt="Laser Haarentfernung Beine für Frauen - Dauerhafte Haarentfernung Frankfurt"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    )}
                    {index === 2 && (
                      <img 
                        src="/images/maenner-behandlung.jpg" 
                        alt="Laser Haarentfernung Männer Brust und Rücken - Professionelle Behandlung"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    )}
                    {index === 3 && (
                      <img 
                        src="/images/2149134359.jpg" 
                        alt="Laser Haarentfernung Intimbereich Bikinizone - Diskrete Behandlung in Frankfurt"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {behandlung.name}
                    </h3>
                    <p className="text-white/60">{behandlung.description}</p>
                    <span className="inline-flex items-center gap-2 mt-4 text-purple-400 group-hover:gap-3 transition-all">
                      Mehr erfahren <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/wohlfuehlen" className="btn-primary inline-flex items-center gap-2">
              Mehr über unser Wohlfühl-Konzept
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Detaillierte Behandlungsbereiche */}
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-heading">Alle Behandlungsbereiche im Überblick</h2>
            <p className="text-white/60 max-w-3xl mx-auto">
              Wir behandeln nahezu alle Körperregionen mit unserem modernsten 3-Wellenlängen-Diodenlaser. 
              Ob Gesicht, Körper oder Intimbereich – für jede Zone haben wir die optimale Lösung.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card">
              <h3 className="text-xl font-semibold text-white mb-4">Gesicht & Hals</h3>
              <ul className="space-y-2 text-white/70">
                <li>• Oberlippe – ab 29€</li>
                <li>• Kinn – ab 30€</li>
                <li>• Wangen – ab 34€</li>
                <li>• Hals – ab 37€</li>
                <li>• Gesicht komplett – 99€</li>
                <li>• Seitenbart (Männer)</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-white mb-4">Körper & Extremitäten</h3>
              <ul className="space-y-2 text-white/70">
                <li>• Achseln – ab 59€</li>
                <li>• Arme (Ober/Unter) – ab 69€</li>
                <li>• Beine (Ober/Unter) – ab 89€</li>
                <li>• Rücken (Männer) – ab 89€</li>
                <li>• Brust (Männer) – ab 89€</li>
                <li>• Ganzkörper – 199€ (statt 350€)</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-white mb-4">Intimbereich</h3>
              <ul className="space-y-2 text-white/70">
                <li>• Bikinizone klassisch – ab 69€</li>
                <li>• Brazilian (Damen) – ab 79€</li>
                <li>• Hollywood komplett – ab 89€</li>
                <li>• Intimbereich Männer – ab 79€</li>
                <li>• Diskret & professionell</li>
                <li>• Wahlweise weibliche/männliche Behandler</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="text-white/60 mb-4">
              Alle Preise pro Behandlung. Bei Buchung mehrerer Sitzungen erhalten Sie attraktive Paketpreise.
            </p>
            <Link href="/preise" className="btn-primary inline-flex items-center gap-2">
              <ArrowRight className="h-5 w-5" />
              Vollständige Preisliste ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Der Behandlungsablauf */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-heading">So läuft Ihre Behandlung ab</h2>
            <p className="text-white/60 max-w-3xl mx-auto">
              Von der ersten Beratung bis zum langfristigen Ergebnis – wir begleiten Sie Schritt für Schritt 
              auf dem Weg zu dauerhaft haarfreier Haut.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-demon-500 to-angel-500 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-3">Kostenlose Erstberatung & Hautanalyse</h3>
                <p className="text-white/70 leading-relaxed mb-3">
                  In einem unverbindlichen Gespräch analysieren wir Ihren Haut- und Haartyp, besprechen Ihre 
                  Wünsche und Ziele. Wir erklären Ihnen den Ablauf, die erwarteten Ergebnisse und beantworten 
                  alle Ihre Fragen.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Bei Bedarf führen wir eine kleine Testbehandlung durch, damit Sie das Gefühl kennenlernen 
                  und sich von der Verträglichkeit überzeugen können.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-demon-500 to-angel-500 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-3">Vorbereitung auf die Behandlung</h3>
                <p className="text-white/70 leading-relaxed mb-3">
                  1-2 Tage vor dem Termin rasieren Sie die zu behandelnde Zone. Vermeiden Sie 2 Wochen vorher 
                  Sonnenbäder, Solarium und Selbstbräuner. 
                </p>
                <p className="text-white/70 leading-relaxed">
                  Am Behandlungstag kommen Sie bitte ohne Make-up, Cremes oder Deodorants in den zu behandelnden 
                  Bereichen. Die Haut sollte sauber und trocken sein.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-demon-500 to-angel-500 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-3">Die Behandlungsserie (6-8 Sitzungen)</h3>
                <p className="text-white/70 leading-relaxed mb-3">
                  Die Behandlung dauert je nach Körperregion 10-60 Minuten. Wir reinigen die Haut, kalibrieren 
                  den Laser für Ihre Hauttypen und führen die Behandlung schmerzfrei durch.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Die Sitzungen finden im Abstand von 4-8 Wochen statt (Gesicht: 4 Wochen, Körper: 6-8 Wochen). 
                  Dieser Rhythmus ermöglicht es, alle Haare in ihrer Wachstumsphase zu erfassen.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-demon-500 to-angel-500 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-3">Langfristige Ergebnisse & Nachsorge</h3>
                <p className="text-white/70 leading-relaxed mb-3">
                  Nach Abschluss der Behandlungsserie können Sie mit bis zu 95% dauerhafter Haarreduktion 
                  rechnen. Die verbleibenden Haare sind deutlich feiner und heller.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Bei hormonellen Veränderungen oder besonders hartnäckigen Haaren empfehlen wir nach 
                  12-24 Monaten eine Auffrischungsbehandlung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warum mehrere Behandlungen nötig sind */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Warum sind mehrere Behandlungen nötig?</h2>
          </div>
          
          <div className="prose prose-lg prose-invert max-w-none mb-12">
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Die gründliche, auf dauerhafte Ergebnisse ausgerichtete Vorgehensweise der bei uns praktizierten 
              Laser-Haarentfernung führt dazu, dass meist mehrere Sitzungen eingeplant werden sollten. Der Grund 
              liegt vor allem in den unterschiedlichen Wachstumsphasen der Haare sowie weiteren individuellen 
              Dispositionen, denn die Anzahl der Haare, deren Durchmesser und Wachstum sind bei jeder Person unterschiedlich.
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">Die Behandlungsdauer hängt von folgenden Faktoren ab:</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <span className="text-purple-400 font-semibold">1. Hauttyp</span>
                <p className="text-white/60 text-sm mt-1">Helle Haut reagiert anders als dunkle Haut</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <span className="text-purple-400 font-semibold">2. Haartyp</span>
                <p className="text-white/60 text-sm mt-1">Dicke, dunkle Haare vs. feine, helle Haare</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <span className="text-purple-400 font-semibold">3. Haarwachstumsphase</span>
                <p className="text-white/60 text-sm mt-1">Nur aktive Haare können behandelt werden</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <span className="text-purple-400 font-semibold">4. Körperregion</span>
                <p className="text-white/60 text-sm mt-1">Verschiedene Zonen haben unterschiedliche Zyklen</p>
              </div>
            </div>

            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Eine bestimmte Körperstelle benötigt meist mehrere Behandlungen, da die sichtbaren Haare nur einen 
              Teil der vorhandenen Behaarung darstellen. Haare entstehen und wachsen in Zyklen. Alle Körperhaare 
              befinden sich an unterschiedlichen Zeitpunkten ihres Haarzyklus. Das hat zur Folge, dass manche 
              Haare noch in der Haut "schlummern", während eine bestimmte Stelle behandelt wird.
            </p>

            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Die Behandlungssitzungen orientieren sich an den natürlichen Wachstumszyklen der Haare, um optimale 
              Ergebnisse zu erzielen. Da Gesichtshaare schneller wachsen, ist der durchschnittliche Abstand 
              zwischen der Haarentfernung im Gesicht mit anfangs 4 Wochen kürzer als der der Haarentfernung 
              an anderen Stellen des Körpers mit anfangs rund 6 Wochen. Mit zunehmender Behandlungsdauer 
              verlängern sich die Abstände zwischen den einzelnen Sitzungen um ein bis zwei Wochen.
            </p>

            <p className="text-white/80 text-lg leading-relaxed">
              Die Geduld zahlt sich jedoch aus, denn der Vorteil liegt auf der Hand: Wurden die Haarwurzeln 
              einmal verödet, produzieren sie in der Regel keine neuen Haare. Der Weg zur permanent haarfreien 
              Haut wird so geebnet.
            </p>
          </div>

          <div className="text-center">
            <Link href="/technologie" className="btn-secondary inline-flex items-center gap-2">
              Mehr über unsere Technologie erfahren
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Für immer haarfrei? */}
      <section className="py-24 bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Laser-Haarentfernung: Für immer haarfrei?</h2>
          </div>
          
          <div className="prose prose-lg prose-invert max-w-none mb-12">
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Haare weglasern ist die derzeit beste Methode, unerwünschte Haare dauerhaft zu entfernen. 
              Nach Abschluss der empfohlenen Behandlungsserie können Sie mit bis zu 95% dauerhafter 
              Haarreduktion rechnen. Die verbleibenden Haare sind deutlich feiner und heller.
            </p>

            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Allerdings kann es auch bei diesem fortschrittlichen Verfahren vorkommen, dass einzelne 
              Haarwurzeln sich soweit regenerieren können, dass sie wieder, meist kleine, Haare nachbilden. 
              Dies kann auch erst nach einigen Jahren in Gang gesetzt werden. Auch hormonelle Schwankungen 
              des Körpers können dafür sorgen, dass es zu einem erneuten Wachstum von Haaren kommt.
            </p>

            <p className="text-white/80 text-lg leading-relaxed">
              Sollte dies der Fall sein, kann mit einer Nachbehandlung Abhilfe geschaffen werden. 
              Diese Auffrischungsbehandlungen sind in der Regel deutlich kürzer und günstiger als 
              die ursprüngliche Behandlungsserie.
            </p>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold text-white mb-4">Ist bei der Haarentfernung mit Nebenwirkungen zu rechnen?</h3>
            <p className="text-white/70 leading-relaxed mb-4">
              Haare lasern ist, wenn es von Experten mit geeigneten Geräten durchgeführt wird, eine der 
              sichersten Methoden, um dauerhaft Haare zu entfernen. Die Behandlung ist nicht schmerzhaft, 
              der einwirkende Laserstrahl ist mit dem leicht unangenehmen Gefühl eines kurzen Stichs zu vergleichen. 
              Eine Betäubung ist nicht notwendig.
            </p>
            <p className="text-white/70 leading-relaxed mb-4">
              Nach der Laserbehandlung kann es zu Rötungen der betroffenen Hautpartie kommen, die allerdings 
              schnell wieder verschwinden. In seltenen Fällen kann es zu einer allergischen Reaktion kommen, 
              die in der Regel ebenfalls schnell abklingt.
            </p>
            <p className="text-white/70 leading-relaxed">
              Dank unseres erfahrenen Teams, das ausschließlich moderne Lasertechnologie zur schonenden 
              Entfernung von Haaren verwendet, ist die Behandlung bei Demon (And) Angel Frankfurt sicher 
              und zuverlässig. Es ist ratsam, nur bei erfahrenem und geschultem Fachpersonal Haare lasern 
              zu lassen, da es bei unsachgemäßer Anwendung durchaus zu Nachteilen kommen kann.
            </p>
          </div>
        </div>
      </section>

      {/* Kosten der Haarentfernung */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Haarentfernung mit Laser: Die Kosten</h2>
          </div>
          
          <div className="prose prose-lg prose-invert max-w-none mb-12">
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Die Kosten für die dauerhafte Haarentfernung in Frankfurt hängen von der zu behandelnden 
              Körperregion und den nötigen Sitzungen ab. Jede Behandlung bei Demon (And) Angel umfasst 
              die Betreuung durch Spezialisten, die vor der Laser-Haarentfernung eine individuelle 
              Analyse der Haut vornehmen. Zum Einsatz kommen ausschließlich Lasergeräte der neuesten Generation.
            </p>

            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Wir bieten transparente und faire Preise ohne versteckte Kosten. Kleine Bereiche wie die 
              Oberlippe beginnen bei nur 29€ pro Behandlung. Größere Flächen wie Beine oder Rücken 
              sind ab 89€ erhältlich. Unser beliebtes Ganzkörper-Paket ist aktuell im Aktionsangebot 
              für nur 199€ (statt 350€) verfügbar.
            </p>

            <p className="text-white/80 text-lg leading-relaxed">
              Die Vereinbarung mehrerer Termine führt zu einem vergünstigten Preis. Sprechen Sie uns 
              auf unsere attraktiven Paketangebote an und sparen Sie bei der Buchung mehrerer Sitzungen.
            </p>
          </div>

          <div className="text-center">
            <Link href="/preise" className="btn-primary inline-flex items-center gap-2">
              Vollständige Preisliste ansehen
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Warum Demon (And) Angel?</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Ihr Vertrauen ist unser höchstes Gut. Deshalb setzen wir auf höchste Qualitätsstandards.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div className="card">
              <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
              <h3 className="font-semibold text-white mb-2">Zufriedene Kunden</h3>
              <p className="text-white/60 text-sm">Seit 2024 in Frankfurt</p>
            </div>
            <div className="card">
              <Shield className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">NiSV-Zertifiziert</h3>
              <p className="text-white/60 text-sm">Geschultes Fachpersonal nach gesetzlicher Verordnung</p>
            </div>
            <div className="card">
              <Star className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">5,0 ★ Google</h3>
              <p className="text-white/60 text-sm">Top bewertet auf Google</p>
            </div>
            <div className="card">
              <Zap className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Physiker im Team</h3>
              <p className="text-white/60 text-sm">Laser-Experte für optimale Einstellungen</p>
            </div>
            <div className="card">
              <Clock className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Kostenlose Beratung</h3>
              <p className="text-white/60 text-sm">Unverbindliches Erstgespräch inkl. Hautanalyse</p>
            </div>
          </div>
        </div>
      </section>

      {/* Häufig gestellte Fragen - Homepage FAQ */}
      <section className="py-24 bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Häufig gestellte Fragen</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Antworten auf die wichtigsten Fragen zur Laser-Haarentfernung in Frankfurt
            </p>
          </div>

          <div className="space-y-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-3">Ist die Laser-Haarentfernung wirklich schmerzfrei?</h3>
              <p className="text-white/70 leading-relaxed">
                Ja! Unsere moderne 3-Wellenlängen-Technologie mit integrierter Saphir-Kontaktkühlung macht die Behandlung 
                nahezu schmerzfrei. Die meisten Kunden beschreiben das Gefühl als leichtes Kribbeln oder angenehme Wärme. 
                Eine Betäubung ist nicht notwendig.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-3">Wie viele Behandlungen benötige ich?</h3>
              <p className="text-white/70 leading-relaxed">
                Für optimale Ergebnisse empfehlen wir 4-6 Behandlungen im Abstand von 4-8 Wochen. 
                Die genaue Anzahl hängt von Ihrem Haartyp, Ihrer Hautfarbe und der zu behandelnden Zone ab. 
                Haare wachsen in Zyklen, daher müssen mehrere Sitzungen durchgeführt werden, um alle Haare 
                in ihrer aktiven Wachstumsphase zu erreichen.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-3">Funktioniert die Behandlung auch bei dunkler Haut?</h3>
              <p className="text-white/70 leading-relaxed">
                Absolut! Unser 3-Wellenlängen-Diodenlaser mit 755nm, 810nm und 1064nm Wellenlängen ist für alle 
                Hauttypen (I-VI) geeignet. Die 1064nm Nd:YAG-Wellenlänge wurde speziell für dunklere Hauttypen 
                entwickelt und arbeitet besonders sicher und effektiv.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-3">Wie lange dauert eine Behandlung?</h3>
              <p className="text-white/70 leading-relaxed">
                Die Behandlungsdauer variiert je nach Körperregion: Kleine Bereiche wie Oberlippe oder Kinn 
                dauern etwa 10-15 Minuten, während größere Flächen wie Beine oder Rücken 30-60 Minuten 
                in Anspruch nehmen können. Eine Ganzkörperbehandlung umfasst ca. 90 Minuten.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-3">Ist das Ergebnis wirklich dauerhaft?</h3>
              <p className="text-white/70 leading-relaxed">
                Ja, nach Abschluss der empfohlenen Behandlungsserie können Sie mit bis zu 95% dauerhafter 
                Haarreduktion rechnen. Die verbleibenden Haare sind deutlich feiner und heller. Bei hormonellen 
                Veränderungen können gelegentlich einzelne Haare nachwachsen, die mit wenigen 
                Auffrischungsbehandlungen dauerhaft entfernt werden können.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-3">Was kostet eine Laser-Haarentfernung in Frankfurt?</h3>
              <p className="text-white/70 leading-relaxed">
                Die Kosten hängen von der Körperregion ab. Kleine Bereiche wie die Oberlippe beginnen bei 29€, 
                während größere Flächen wie der Rücken oder die Beine ab 89€ kosten. Unser beliebtes 
                Ganzkörper-Paket ist aktuell für nur 199€ (statt 350€) erhältlich. 
                <Link href="/preise" className="text-purple-400 hover:text-purple-300 ml-1">Hier geht es zur vollständigen Preisliste.</Link>
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/faq" className="btn-secondary inline-flex items-center gap-2">
              Alle FAQs ansehen
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Kundenstimmen */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Das sagen unsere Kunden</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Echte Bewertungen von zufriedenen Kunden aus Frankfurt und Umgebung
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-white/80 font-semibold">5.0 auf Google</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-white/80 mb-4 italic">
                "Beste Entscheidung! Nach 5 Behandlungen bin ich fast komplett haarfrei. 
                Das Team ist super professionell und die Behandlung war viel angenehmer als erwartet."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-demon-500 to-angel-500 flex items-center justify-center">
                  <span className="text-white font-semibold">M</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Maria S.</div>
                  <div className="text-white/60 text-sm">Beine & Achseln</div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-white/80 mb-4 italic">
                "Als Mann war ich erst skeptisch, aber die Rückenbehandlung hat mein Leben verändert. 
                Endlich keine lästigen Haare mehr. Sehr zu empfehlen!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-demon-500 to-angel-500 flex items-center justify-center">
                  <span className="text-white font-semibold">T</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Thomas K.</div>
                  <div className="text-white/60 text-sm">Rücken</div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-white/80 mb-4 italic">
                "Ich habe schon viele Studios ausprobiert, aber hier stimmt einfach alles: 
                moderne Technik, faire Preise und ein tolles Ergebnis. Absolut empfehlenswert!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-demon-500 to-angel-500 flex items-center justify-center">
                  <span className="text-white font-semibold">S</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Sandra M.</div>
                  <div className="text-white/60 text-sm">Bikinizone</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/bewertungen" className="btn-secondary inline-flex items-center gap-2">
              Alle Bewertungen lesen
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Lokale Verfügbarkeit */}
      <section className="py-24 bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Wir sind für Sie da</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Zentral gelegen im Herzen von Frankfurt mit exzellenter Verkehrsanbindung
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-white mb-4">Standort Frankfurt</h3>
              <p className="text-white/70 mb-4">
                <strong className="text-white">Demon (And) Angel</strong><br />
                Europa-Allee 41-43<br />
                60327 Frankfurt am Main<br />
                Europaviertel
              </p>
              <p className="text-white/60 text-sm">
                Direkt neben dem Skyline Plaza, nur 5 Minuten Fußweg von der Messe
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-white mb-4">Öffentliche Verkehrsmittel</h3>
              <ul className="space-y-2 text-white/70">
                <li><strong>S-Bahn:</strong> Frankfurt Messe (5 Min. Fußweg)</li>
                <li><strong>U-Bahn:</strong> Festhalle/Messe (3 Min. Fußweg)</li>
                <li><strong>Hauptbahnhof:</strong> 10 Min. mit S-Bahn</li>
                <li><strong>Parken:</strong> Skyline Plaza Parkhaus</li>
              </ul>
            </div>
          </div>

          <div className="card text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Wir behandeln Kunden aus der gesamten Region</h3>
            <p className="text-white/70 mb-4">
              Neben Frankfurt begrüßen wir regelmäßig Kunden aus:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Offenbach', 'Mainz', 'Wiesbaden', 'Darmstadt', 'Bad Homburg', 'Hanau', 'Aschaffenburg', 'Gießen'].map((city) => (
                <span key={city} className="bg-white/10 px-3 py-1 rounded-full text-white/70 text-sm">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fotogalerie - Teaser */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Fotogalerie</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              sei du selbst. So wunderschön drinnen wie draussen.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <img 
                src="/images/young-beautiful-woman.jpg" 
                alt="Zufriedene Kundin nach Laser Haarentfernung Gesicht - Demon (And) Angel Frankfurt"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <img 
                src="/images/beautiful-female-legs.jpg" 
                alt="Laser Haarentfernung Beine - Perfekt glatte Haut nach Behandlung"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <img 
                src="/images/laser-epilation.jpg" 
                alt="Moderster 3-Wellenlängen-Diodenlaser - Hochauflösende Technologie"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/galerie" className="btn-secondary inline-flex items-center gap-2">
              Alle Fotos ansehen
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Google Reviews - Teaser */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <svg className="h-8 w-8" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-2xl font-bold text-white">5.0</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white/60">(47 Bewertungen)</span>
            </div>
            <h2 className="section-heading">Was unsere Kunden sagen</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { name: 'Julia M.', text: 'Nach nur 4 Behandlungen sind meine Beine komplett glatt. Absolute Empfehlung!' },
              { name: 'Thomas K.', text: 'Endlich eine dauerhafte Lösung. Die Behandlung war schmerzfrei.' },
              { name: 'Sarah L.', text: 'Sehr diskret und professionell. Ich fühle mich so viel wohler.' },
            ].map((review, i) => (
              <div key={i} className="card">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white/80 mb-4 italic">&quot;{review.text}&quot;</p>
                <p className="font-semibold text-white">{review.name}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/bewertungen" className="btn-secondary inline-flex items-center gap-2">
              Alle Bewertungen lesen
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      </div>

      <PageCTA
        title="Bereit fuer dauerhafte Haarentfernung?"
        description="Schmerzfrei, effektiv und fuer alle Hauttypen geeignet. Starten Sie mit einer kostenlosen Beratung und klaeren Sie Preise, Zonen und realistische Sitzungszahlen direkt am Anfang."
        primaryAction={{ label: 'Jetzt anrufen: 015238228127', href: 'tel:+4915238228127', kind: 'phone' }}
        secondaryAction={{ label: 'Preise ansehen', href: '/preise' }}
      />
    </>
  )
}
