import type { Metadata } from 'next'
import { Sparkles, Zap, Heart } from 'lucide-react'
import MarketingHero from '@/components/MarketingHero'
import PageCTA from '@/components/PageCTA'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  pathname: '/why-demonandangel',
  title: 'Warum Demon (And) Angel? | Unsere Philosophie der perfekten Balance',
  description: 'Entdecken Sie die Bedeutung hinter Demon (And) Angel - unsere Philosophie, die leistungsstarke Lasertechnologie mit sanfter Behandlung für perfekte Haarentfernungsergebnisse verbindet.',
  keywords: ['demon angel philosophie', 'laser haarentfernung philosophie', 'balance behandlung', 'kraft sanftheit', 'demon and angel bedeutung'],
  openGraph: {
    title: 'Warum Demon (And) Angel? | Unsere Philosophie',
    description: 'Die perfekte Balance zwischen Kraft und Sanftheit in der Laser-Haarentfernung.',
  },
})

export default function WhyDemonAngelPage() {
  return (
    <>
      <MarketingHero
        eyebrow="Unsere Geschichte und Haltung"
        title="Warum Demon (And) Angel?"
        description="Unser Name steht fuer die Balance zwischen wirksamer Lasertechnologie und sanfter, diskreter Behandlung. Genau diese Kombination praegt jede Beratung und jede Sitzung."
        highlights={['Wirksamkeit', 'Sanftheit', 'Vertrauen']}
        primaryAction={{ label: 'Termin buchen', href: 'tel:+4915238228127', kind: 'phone' }}
        secondaryAction={{ label: 'Preise ansehen', href: '/preise' }}
        align="center"
      />

      <section className="pb-6">
        <div className="mx-auto max-w-4xl px-6">
          <div className="card">
            <div className="space-y-5 text-lg text-white/80 leading-relaxed">
              <p>
                In der Welt der Schoenheitsbehandlungen suchen wir nach dem richtigen Gleichgewicht. Zu viel Kraft kann verletzen, zu viel Sanftheit kann unwirksam sein. Bei Demon (And) Angel verbinden wir beides bewusst.
              </p>
              <p>
                Unsere Philosophie entstand aus der Erkenntnis, dass moderne Lasertechnologie nur dann ueberzeugt, wenn sie wirksam, hautschonend und vertrauensvoll eingesetzt wird. Es geht um mehr als Haarentfernung: Es geht um Wohlbefinden, Sicherheit und gute Entscheidungen.
              </p>
              <p>
                Der Name &quot;Demon (And) Angel&quot; spiegelt genau diese Dualitaet wider: praezise Kraft trifft auf fuersorgliche Behandlung. Das Ergebnis ist eine Erfahrung, die effektiv ist und sich gleichzeitig gut anfuehlt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Concept */}
      <section className="py-24 bg-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="section-heading">Die Philosophie der Balance</h2>
            <p className="text-white/60 max-w-3xl mx-auto text-lg">
              Bei der Laser-Haarentfernung kommt es auf Harmonie an. Zu viel Kraft verursacht Unbehagen, 
              zu viel Sanftheit mangelt es an Wirksamkeit. Wir haben den Sweet Spot gefunden.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {/* Demon */}
            <div className="text-center">
              <div className="relative mb-8 group">
                <div className="absolute inset-0 bg-gradient-to-br from-demon-600 to-red-600 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="relative bg-gradient-to-br from-demon-500/20 to-red-500/20 backdrop-blur-lg rounded-3xl p-8 border border-demon-500/30">
                  <Zap className="h-16 w-16 text-demon-400 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-demon-400 mb-4">Demon</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Die <strong className="text-white">Stärke</strong>, um unerwünschte Haare 
                    an der Wurzel zu eliminieren. Kompromisslose Wirksamkeit, die 
                    Haarfollikel mit Präzision und Kraft zielt.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-demon-400" />
                  <span className="text-white/70">Präzisionstechnologie</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-demon-400" />
                  <span className="text-white/70">Maximale Wirksamkeit</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-demon-400" />
                  <span className="text-white/70">Behandlung auf Wurzel-Ebene</span>
                </div>
              </div>
            </div>
            
            {/* Balance */}
            <div className="text-center">
              <div className="relative mb-8 group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="relative bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/30">
                  <Sparkles className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-purple-400 mb-4">Balance</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Die <strong className="text-white">Harmonie</strong>, wo Stärke auf Sanftheit trifft. 
                    Unser Sweet Spot liefert optimale Ergebnisse und sorgt gleichzeitig 
                    für Ihren Komfort und die Hautgesundheit.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400" />
                  <span className="text-white/70">Perfekte Harmonie</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400" />
                  <span className="text-white/70">Optimale Ergebnisse</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400" />
                  <span className="text-white/70">Fortschrittliche Technologie</span>
                </div>
              </div>
            </div>
            
            {/* Angel */}
            <div className="text-center">
              <div className="relative mb-8 group">
                <div className="absolute inset-0 bg-gradient-to-br from-angel-600 to-blue-600 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="relative bg-gradient-to-br from-angel-500/20 to-blue-500/20 backdrop-blur-lg rounded-3xl p-8 border border-angel-500/30">
                  <Heart className="h-16 w-16 text-angel-400 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-angel-400 mb-4">Angel</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Die <strong className="text-white">Sanftheit</strong>, die Ihre Haut pflegt. 
                    Schmerzfreie Behandlung, die Ihre Haut nährt und gleichzeitig 
                    perfekt glatte Ergebnisse liefert.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-angel-400" />
                  <span className="text-white/70">Schmerzfreie Erfahrung</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-angel-400" />
                  <span className="text-white/70">Hautpflegende Behandlung</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-angel-400" />
                  <span className="text-white/70">Perfekte Glätte</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* The Formula */}
      <section className="py-24 bg-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="section-heading mb-12">Unsere Formel für Perfektion</h2>
          
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-demon-500 to-red-500 flex items-center justify-center mb-4 shadow-2xl">
                  <Zap className="h-12 w-12 text-white" />
                </div>
                <span className="text-demon-400 font-bold text-lg">Demon Kraft</span>
              </div>
              
              <div className="flex items-center">
                <div className="hidden md:block w-16 h-px bg-gradient-to-r from-demon-400 to-purple-400" />
                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center mx-4">
                  <span className="text-white font-bold text-xl">+</span>
                </div>
                <div className="hidden md:block w-16 h-px bg-gradient-to-r from-purple-400 to-angel-400" />
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-angel-500 to-blue-500 flex items-center justify-center mb-4 shadow-2xl">
                  <Heart className="h-12 w-12 text-white" />
                </div>
                <span className="text-angel-400 font-bold text-lg">Angel Sanftheit</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-px h-16 bg-gradient-to-b from-purple-400 to-purple-600 mx-auto mb-4" />
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto shadow-2xl">
                <Sparkles className="h-16 w-16 text-white" />
              </div>
              <p className="text-purple-400 font-bold text-xl mt-4">Perfekte Ergebnisse</p>
            </div>
          </div>
        </div>
      </section>

      <PageCTA
        title="Erleben Sie die Balance in der Praxis"
        description="Wenn Sie wissen moechten, wie wir Technologie, Diskretion und persoenliche Betreuung kombinieren, beraten wir Sie gern direkt zu Ihrer passenden Behandlung."
        primaryAction={{ label: 'Jetzt anrufen: 015238228127', href: 'tel:+4915238228127', kind: 'phone' }}
        secondaryAction={{ label: 'Preise ansehen', href: '/preise' }}
      />
    </>
  )
}
