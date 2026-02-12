import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fotogalerie - Laser Haarentfernung Frankfurt',
  description: 'Einblicke in unser Studio für dauerhafte Laser Haarentfernung in Frankfurt. Moderne Ausstattung, professionelle Behandlungen.',
  keywords: ['galerie laser haarentfernung', 'studio frankfurt', 'laser behandlung bilder', 'haarentfernung frankfurt fotos'],
  openGraph: {
    title: 'Fotogalerie | Demon (And) Angel Frankfurt',
    description: 'Einblicke in unser Studio für dauerhafte Laser Haarentfernung.',
    url: 'https://demonandangel.eu/galerie',
  },
}

const galerieImages = [
  { src: '/images/young-beautiful-woman.jpg', alt: 'Gesichtsbehandlung', title: 'Gesichtsbehandlung' },
  { src: '/images/beautiful-female-legs.jpg', alt: 'Körperbehandlung', title: 'Glatte Beine' },
  { src: '/images/brunette-woman.jpg', alt: 'Laser Behandlung', title: 'Professionelle Behandlung' },
  { src: '/images/2149134359.jpg', alt: 'Intimbereich Behandlung', title: 'Diskrete Atmosphäre' },
  { src: '/images/laser-epilation.jpg', alt: 'Laser Technologie', title: 'Moderne Technologie' },
  { src: '/images/hero-bg.jpg', alt: 'Studio Atmosphäre', title: 'Angenehme Atmosphäre' },
]

export default function GaleriePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-demon-900/20 via-purple-900/20 to-angel-900/20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Fotogalerie</span>
            </h1>
            <p className="text-xl text-white/70 mb-4">
              sei du selbst. So wunderschön drinnen wie draussen.
            </p>
            <p className="text-purple-400 text-lg">
              sanfte dauerhafte professionelle Haarentfernung
            </p>
          </div>
        </div>
      </section>

      {/* Galerie Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galerieImages.map((image, index) => (
              <div key={index} className="group relative aspect-video overflow-hidden rounded-xl">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold text-white">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Info */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading mb-8">Unser Studio</h2>
              <p className="text-xl text-white/70 mb-6">
                In einer angenehmen Studioatmosphäre verbinden wir hochmoderne Technik mit kompetenter Behandlung zu fabelhaften Preisen.
              </p>
              <p className="text-xl text-white/70 mb-8">
                Moderne Ausstattung, diskrete Behandlungsräume und ein freundliches Team erwarten Sie bei uns in Frankfurt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+4915238228127" className="btn-primary inline-flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Termin vereinbaren
                </a>
                <Link href="/kontakt" className="btn-secondary inline-flex items-center gap-2">
                  <ArrowRight className="h-5 w-5" />
                  Kontakt
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/laser-epilation.jpg" 
                alt="Unser Studio"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-demon-500 to-angel-500 rounded-xl p-6 text-white">
                <Sparkles className="h-8 w-8 mb-2" />
                <p className="font-semibold">Moderne Ausstattung</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="cta-heading">
            Überzeugen Sie sich selbst
          </h2>
          <p className="text-white/70 mb-8">
            Besuchen Sie uns in unserem Studio in Frankfurt und erleben Sie professionelle Laser Haarentfernung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+4915238228127" className="btn-primary inline-flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Jetzt Termin buchen
            </a>
            <Link href="/preise" className="btn-secondary">
              Preise ansehen
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
