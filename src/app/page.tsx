import Link from 'next/link'
import { ArrowRight, Star, Shield, Clock, Zap, CheckCircle, Phone, MapPin, Sparkles, MessageCircle } from 'lucide-react'
import HeroGallery from '@/components/HeroGallery'

const vorteile = [
  {
    icon: Zap,
    title: 'Völlig SCHMERZFREI',
    description: 'Modernste Technologie für eine angenehme Behandlung ohne Schmerzen.',
  },
  {
    icon: Shield,
    title: 'Keine Verbrennungsgefahr',
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
    description: 'Bikinizone, Brazilian, Hollywood - diskret und professionell.',
    href: '/laser-haarentfernung-intimbereich',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden">
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
            <span className="text-white">Laser Haarentfernung</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-8 animate-slide-up">
            Professionelle Haarentfernung für Frauen und Männer in Frankfurt. 
            Schmerzfrei, effektiv und für alle Hauttypen geeignet.
          </p>

          <div className="flex items-center justify-center gap-2 text-white/60 mb-12">
            <MapPin className="h-5 w-5" />
            <span>Europa-Allee 43, 60327 Frankfurt am Main</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <a href="tel:+4915238228127" className="btn-primary inline-flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Jetzt Termin buchen
            </a>
            <a href="https://wa.me/4915238228127" className="btn-secondary inline-flex items-center gap-2 bg-green-600 hover:bg-green-700">
              <MessageCircle className="h-5 w-5" />
              WhatsApp schreiben
            </a>
            <Link href="/preise" className="btn-secondary">
              Preise ansehen
            </Link>
          </div>
          
          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '4', label: 'Behandlungen' },
              { value: '100%', label: 'Schmerzfrei' },
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

      {/* Technologie Section */}
      <section className="py-24 bg-white/5">
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
                alt="3-Wellenlängen-Diodenlaser Technologie"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
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
                        alt="Gesichtsbehandlung"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                    {index === 1 && (
                      <img 
                        src="/images/beautiful-female-legs.jpg" 
                        alt="Frauen Behandlung"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                    {index === 2 && (
                      <img 
                        src="/images/maenner-behandlung.jpg" 
                        alt="Männer Behandlung"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                    {index === 3 && (
                      <img 
                        src="/images/2149134359.jpg" 
                        alt="Intimbereich Behandlung"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
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

      {/* Haarwachstumsphasen - Teaser */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="card text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Warum sind mindestens 4 Behandlungen nötig?</h2>
            <p className="text-white/60 mb-6">
              Der Haarwuchs durchläuft drei Phasen. Erfahren Sie mehr über unsere Technologie.
            </p>
            <Link href="/technologie" className="btn-secondary inline-flex items-center gap-2">
              Mehr erfahren
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
              <p className="text-white/60 text-sm">100% zufriedene Kunden auf Google</p>
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
                alt="Gesichtsbehandlung"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <img 
                src="/images/beautiful-female-legs.jpg" 
                alt="Körperbehandlung"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <img 
                src="/images/laser-epilation.jpg" 
                alt="Laser Technologie"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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

      {/* CTA */}
      <section className="pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Laser Haarentfernung Hintergrund"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-demon-900/80 via-purple-900/60 to-angel-900/80" />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/20 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Bereit für dauerhafte Haarentfernung?</span>
          </h2>
          <p className="text-xl text-white/70 mb-8">
            Schmerzfrei, effektiv und für alle Hauttypen geeignet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+4915238228127" className="btn-primary inline-flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Jetzt anrufen: 015238228127
            </a>
            <Link href="/preise" className="btn-secondary inline-flex items-center gap-2">
              <ArrowRight className="h-5 w-5" />
              Preise ansehen
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
