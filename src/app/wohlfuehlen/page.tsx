import type { Metadata } from 'next'
import { ArrowRight, Phone, MapPin, Sparkles } from 'lucide-react'
import Link from 'next/link'
import MarketingHero from '@/components/MarketingHero'
import PageCTA from '@/components/PageCTA'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  pathname: '/wohlfuehlen',
  title: 'Dauerhafte Haarentfernung - Fühle dich wohl | Demon (And) Angel',
  description: 'Lust auf ein unbeschwertes Körpergefühl, ohne Haare und ohne viel Zeitaufwand? Wir bieten diskrete Ganzkörper-Behandlungen für Mann und Frau.',
  keywords: ['Haarentfernung', 'Körpergefühl', 'Ganzkörper', 'diskret', 'wohlfühlen'],
  openGraph: {
    title: 'Dauerhafte Haarentfernung - Fühle dich wohl | Demon (And) Angel',
    description: 'Lust auf ein unbeschwertes Körpergefühl? Diskrete Ganzkörper-Behandlungen für Mann und Frau in Frankfurt.',
    images: ['/images/logo-removebg-preview.png'],
  },
})

export default function WohlfuehlenPage() {
  return (
    <>
      <MarketingHero
        eyebrow="Fokus auf Wohlbefinden"
        title="Fuehle dich wohl in deiner Haut"
        description="Dauerhafte Haarentfernung kann den Alltag leichter machen: weniger Rasur, weniger Hautirritationen und mehr Freiheit in Kleidung, Sport und Sommermomenten."
        highlights={['Diskrete Ganzkoerper-Behandlungen', 'Weibliche oder maennliche Behandler', 'Zentral in Frankfurt']}
        primaryAction={{ label: 'Jetzt anrufen: 015238228127', href: 'tel:+4915238228127', kind: 'phone' }}
        secondaryAction={{ label: 'Preise ansehen', href: '/preise' }}
      />

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
                <span>Europa-Allee 41-43, 60327 Frankfurt am Main</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+4915238228127" className="btn-primary inline-flex items-center gap-2">
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
              <a href="tel:+4915238228127" className="btn-primary inline-flex items-center gap-2">
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

      {/* Unsere Philosophie */}
      <section className="py-16 bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Unsere Philosophie: Demon & Angel</h2>
            <p className="text-white/60">
              Die perfekte Balance für deine Haut
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <img 
                src="/images/demon-side.png" 
                alt="Demon - Die Kraft der Laser Technologie"
                className="w-full h-48 object-cover rounded-xl mb-4 shadow-xl"
                loading="lazy"
              />
              <h3 className="text-xl font-bold text-demon-400 mb-2">Demon</h3>
              <p className="text-white/80 text-sm">
                Starke Laser-Technologie, die unerwünschte Haare an der Wurzel bekämpft
              </p>
            </div>
            
            <div className="text-center">
              <img 
                src="/images/angel-side.png" 
                alt="Angel - Die Sanftheit der Behandlung"
                className="w-full h-48 object-cover rounded-xl mb-4 shadow-xl"
                loading="lazy"
              />
              <h3 className="text-xl font-bold text-angel-400 mb-2">Angel</h3>
              <p className="text-white/80 text-sm">
                Sanfte, schmerzfreie Behandlung für perfekte Glätte und Hautpflege
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-lg rounded-full px-6 py-3 border border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-demon-400" />
                <span className="text-white/60 text-sm">Stärke</span>
              </div>
              <div className="w-px h-3 bg-white/20" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-400" />
                <span className="text-white/60 text-sm">+</span>
              </div>
              <div className="w-px h-3 bg-white/20" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-angel-400" />
                <span className="text-white/60 text-sm">Sanftheit</span>
              </div>
              <div className="w-px h-3 bg-white/20" />
              <span className="text-white/60 text-sm">= Perfekte Ergebnisse</span>
            </div>
          </div>
        </div>
      </section>

      <PageCTA
        title="Bereit fuer ein unbeschwertes Koerpergefuehl?"
        description="Waehlen Sie Ihre bevorzugte Behandlungsperson und lassen Sie sich beraten, welche Zonen Ihnen im Alltag wirklich Entlastung bringen."
        primaryAction={{ label: 'Kostenlos beraten lassen', href: 'tel:+4915238228127', kind: 'phone' }}
        secondaryAction={{ label: 'Preise ansehen', href: '/preise' }}
      />
    </>
  )
}
