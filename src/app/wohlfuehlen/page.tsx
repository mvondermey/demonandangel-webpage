import { ArrowRight, Phone, MapPin, Sparkles } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Dauerhafte Haarentfernung - Fühle dich wohl | Demon (And) Angel',
  description: 'Lust auf ein unbeschwertes Körpergefühl, ohne Haare und ohne viel Zeitaufwand? Wir bieten diskrete Ganzkörper-Behandlungen für Mann und Frau.',
  keywords: ['Haarentfernung', 'Körpergefühl', 'Ganzkörper', 'diskret', 'wohlfühlen'],
  openGraph: {
    title: 'Dauerhafte Haarentfernung - Fühle dich wohl | Demon (And) Angel',
    description: 'Lust auf ein unbeschwertes Körpergefühl? Diskrete Ganzkörper-Behandlungen für Mann und Frau in Frankfurt.',
    url: 'https://demonandangel.com/wohlfuehlen',
    images: ['/images/logo-removebg-preview.png'],
  },
}

export default function WohlfuehlenPage() {
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
        
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Kennst Du dieses tolle Gefühl</span>
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-purple-400 mb-6">
            vollkommen haarfrei zu sein?
          </p>
          <p className="text-xl text-white/70 mb-6">
            Die Kleidung direkt an deine Haut zu spüren? Kein lästiges Schwitzen mehr durch lästige Haare. Denke auch an deinem Partner. Er wird es Dir danken.
          </p>
          <p className="text-2xl md:text-3xl font-bold text-purple-400 mb-8">
            Versuche mal eine dauerhafte Haarentfernung mit Laser! Total schmerzfrei!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/49015238228127" className="btn-primary inline-flex items-center gap-2">
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

      {/* Ultra glatte beine Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading mb-8">ultra glatte beine. Keine Stopeln.</h2>
              <h3 className="text-2xl font-bold text-white mb-6">Immer dieselbe Story</h3>
              <p className="text-xl text-white/70 mb-6">
                Stell Dir vor, Du bist spät dran für ein erstes Date und es bleibt keine Zeit mehr unerwünschte Haare zu entfernen? Kein Problem! Mit unserem innovativen permanenten Haarentfernungsverfahren (Diodenlaser Haarentfernung mit Alexandrit-Laser Technologie) kommst Du nie wieder in eine solche Situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/preise" className="btn-primary inline-flex items-center gap-2">
                  <ArrowRight className="h-5 w-5" />
                  Jetzt behandeln lassen
                </Link>
                <Link href="/technologie" className="btn-secondary inline-flex items-center gap-2">
                  <ArrowRight className="h-5 w-5" />
                  Technologie entdecken
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/beautiful-female-legs.jpg" 
                alt="Ultra glatte Beine"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fühle dich wohl Section */}
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src="/images/young-beautiful-woman.jpg" 
                alt="Wohlfühlen"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="section-heading mb-8">Fühle dich wohl</h2>
              <h3 className="text-2xl font-bold text-white mb-6">Individualismus an erster Stelle</h3>
              <p className="text-xl text-white/70 mb-6">
                Lust auf ein unbeschwertes Körpergefühl, ohne Haare und ohne viel Zeitaufwand? Wir bieten diskrete Ganzkörper-Behandlungen für eine dauerhafte haarentfernung für Mann und Frau. (Laser Haarentfernung).
              </p>
              <p className="text-xl text-white/70 mb-8">
                Wähle ganz einfach Deine weibliche oder männliche Behandlungsperson und los geht's!
              </p>
              <div className="flex items-center gap-2 text-white/60 mb-8">
                <MapPin className="h-5 w-5" />
                <span>Europa-Allee 43, 60327 Frankfurt am Main</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/49015238228127" className="btn-primary inline-flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Termin vereinbaren
                </a>
                <Link href="/kontakt" className="btn-secondary inline-flex items-center gap-2">
                  <ArrowRight className="h-5 w-5" />
                  Kontakt aufnehmen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Was macht uns aus? Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-heading">Was macht uns aus?</h2>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-white/70 mb-8">
              In einer angenehmen Studioatmosphäre verbinden wir hochmoderne Technik mit kompetenter Behandlung zu fabelhaften Preisen. Die neueste Laser-Generation (Alexandrit-Laser, Diodenlaser Haarentfernung) sichert beste Ergebnisse für eine permanente Haarentfernung und ein angenehmes Behandlungserlebnis um Haare mit Laser zu entfernen.
            </p>
            <p className="text-xl text-white/70 mb-8">
              Rufen Sie uns an unter <span className="text-purple-400 font-bold">015238228127</span>. Wir freuen uns auf den Anruf.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/49015238228127" className="btn-primary inline-flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Jetzt anrufen
              </a>
              <Link href="/preise" className="btn-secondary inline-flex items-center gap-2">
                <ArrowRight className="h-5 w-5" />
                Preise ansehen
              </Link>
            </div>
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
            <span className="gradient-text">Bereit für ein unbeschwertes Körpergefühl?</span>
          </h2>
          <p className="text-xl text-white/70 mb-8">
            Wähle Deine Behandlungsperson und genieße die Freiheit von unerwünschten Haaren.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/49015238228127" className="btn-primary inline-flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Kostenlos beraten lassen
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
