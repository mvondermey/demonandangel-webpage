import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, Sparkles, Zap, Heart } from 'lucide-react'
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
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-demon-900/40 via-purple-900/30 to-angel-900/40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-demon-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-angel-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-demon-500/20 to-angel-500/20 backdrop-blur-lg rounded-full px-6 py-2 mb-6 border border-white/10">
            <div className="w-2 h-2 rounded-full bg-demon-400" />
            <span className="text-white/80 text-sm font-medium">Unsere Geschichte</span>
            <div className="w-2 h-2 rounded-full bg-angel-400" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Warum Demon (And) Angel?</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            Unser Name steht für die perfekte Balance zwischen leistungsstarker Technologie und sanfter Pflege - 
            das Wesen außergewöhnlicher Laser-Haarentfernung
          </p>
          
          {/* Additional Text Content */}
          <div className="max-w-3xl mx-auto text-left space-y-6">
            <p className="text-lg text-white/70 leading-relaxed">
              In der Welt der Schönheitsbehandlungen suchen wir immer nach dem perfekten Gleichgewicht. 
              Zu viel Kraft kann verletzen, zu viel Sanftheit kann unwirksam sein. Bei Demon (And) Angel 
              haben wir diesen Sweet Spot gefunden – die harmonische Verbindung von zwei gegensätzlichen, 
              doch perfekt ergänzenden Prinzipien.
            </p>
            
            <p className="text-lg text-white/70 leading-relaxed">
              Unsere Philosophie entstand aus der Erkenntnis, dass wahre Exzellenz in der Laser-Haarentfernung 
              nicht nur von starker Technologie abhängt, sondern ebenso von der Art, wie wir diese Technologie 
              einsetzen. Es geht um mehr als nur das Entfernen von Haaren – es geht um das Wohlbefinden unserer 
              Kunden, die Gesundheit ihrer Haut und das Vertrauen, das sie in uns setzen.
            </p>
            
            <p className="text-lg text-white/70 leading-relaxed">
              Der Name "Demon (And) Angel)" spiegelt genau diese Dualität wider: Die unerbittliche Präzision 
              und Kraft modernster Lasertechnologie trifft auf die fürsorgliche, schonende Behandlung, 
              die Ihre Haut schützt und pflegt. Das Ergebnis ist eine Behandlungserfahrung, die sowohl 
              effektiv als auch angenehm ist – die perfekte Balance für Ihre Schönheit.
            </p>
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

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-demon-900/40 via-purple-900/30 to-angel-900/40" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Erleben Sie die perfekte Balance</span>
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Bereit, herauszufinden, warum unser Ansatz die besten Ergebnisse in der Laser-Haarentfernung liefert?
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
