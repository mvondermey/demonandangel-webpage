import type { Metadata } from 'next'
import Link from 'next/link'
import { Star, Phone, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kundenbewertungen - Laser Haarentfernung Frankfurt',
  description: 'Lesen Sie echte Kundenbewertungen zur Laser Haarentfernung bei Demon (And) Angel in Frankfurt. 5-Sterne Bewertungen von zufriedenen Kunden.',
  keywords: ['bewertungen laser haarentfernung', 'erfahrungen haarentfernung frankfurt', 'kundenmeinungen laser', 'rezensionen demon angel'],
  openGraph: {
    title: 'Kundenbewertungen | Demon (And) Angel Frankfurt',
    description: 'Echte Kundenbewertungen zur dauerhaften Laser Haarentfernung.',
    url: 'https://demonandangel.eu/bewertungen',
  },
}

const reviews = [
  {
    author: 'Julia M.',
    rating: 5,
    date: 'vor 2 Wochen',
    text: 'Nach nur 4 Behandlungen sind meine Beine komplett glatt. Das Team ist super professionell und die Atmosphäre sehr angenehm. Absolute Empfehlung!',
    behandlung: 'Beine & Achseln',
  },
  {
    author: 'Thomas K.',
    rating: 5,
    date: 'vor 1 Monat',
    text: 'Endlich eine dauerhafte Lösung für meinen Rücken. Die Behandlung war schmerzfrei und das Ergebnis überzeugt. Sehr zufrieden!',
    behandlung: 'Rücken',
  },
  {
    author: 'Sarah L.',
    rating: 5,
    date: 'vor 1 Monat',
    text: 'Sehr diskret und professionell. Ich fühle mich so viel wohler. Die Beratung war ausführlich und alle meine Fragen wurden beantwortet.',
    behandlung: 'Intimbereich',
  },
  {
    author: 'Michael B.',
    rating: 5,
    date: 'vor 2 Monaten',
    text: 'Top Studio in Frankfurt! Moderne Ausstattung, freundliches Personal und faire Preise. Die Ergebnisse sprechen für sich.',
    behandlung: 'Ganzkörper',
  },
  {
    author: 'Anna S.',
    rating: 5,
    date: 'vor 2 Monaten',
    text: 'Hatte anfangs Bedenken wegen der Schmerzen, aber die Kühlung macht es wirklich angenehm. Nach 4 Behandlungen bin ich begeistert!',
    behandlung: 'Beine',
  },
  {
    author: 'David R.',
    rating: 5,
    date: 'vor 3 Monaten',
    text: 'Professionelle Beratung und Behandlung. Das Team nimmt sich Zeit und erklärt alles genau. Preis-Leistung stimmt!',
    behandlung: 'Gesicht',
  },
  {
    author: 'Lisa M.',
    rating: 5,
    date: 'vor 3 Monaten',
    text: 'Endlich keine eingewachsenen Haare mehr! Die Behandlung ist schnell und effektiv. Kann ich nur weiterempfehlen.',
    behandlung: 'Bikinizone',
  },
  {
    author: 'Stefan H.',
    rating: 5,
    date: 'vor 4 Monaten',
    text: 'Als Mann war ich erst skeptisch, aber das Team ist sehr professionell. Die Ergebnisse sind fantastisch!',
    behandlung: 'Brust & Rücken',
  },
]

export default function BewertungenPage() {
  const averageRating = 5.0
  const totalReviews = 47

  return (
    <>
      {/* Hero */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-demon-900/20 via-purple-900/20 to-angel-900/20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-6">
              <svg className="h-12 w-12" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Kundenbewertungen</span>
            </h1>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="text-6xl font-bold text-white">{averageRating.toFixed(1)}</div>
              <div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white/60 text-lg">{totalReviews} Bewertungen auf Google</p>
              </div>
            </div>
            
            <a 
              href="https://www.google.com/maps/place/Demon+(and)+Angel/@50.1083314,8.6446407,17z/data=!4m6!3m5!1s0x651664106c8fe48d:0x211887032f4b5da4!8m2!3d50.1083314!4d8.6472156!16s%2Fg%2F11vr0ccyr5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-lg"
            >
              Alle Bewertungen auf Google ansehen
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="card hover:scale-105 transition-transform">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-demon-500 to-angel-500 flex items-center justify-center text-white font-bold text-lg">
                    {review.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white text-lg">{review.author}</h4>
                    <p className="text-purple-400 text-sm">{review.behandlung}</p>
                    <p className="text-white/50 text-sm">{review.date}</p>
                  </div>
                  <svg className="h-6 w-6 opacity-50" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-white/80 leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Write Review CTA */}
      <section className="py-16 bg-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="cta-heading">
            Zufrieden mit unserer Behandlung?
          </h2>
          <p className="text-white/70 mb-8">
            Wir freuen uns über Ihre Bewertung auf Google! Ihre Meinung hilft anderen Kunden bei ihrer Entscheidung.
          </p>
          <a 
            href="https://www.google.com/maps/place/Demon+(and)+Angel/@50.1083314,8.6446407,17z/data=!4m6!3m5!1s0x651664106c8fe48d:0x211887032f4b5da4!8m2!3d50.1083314!4d8.6472156!16s%2Fg%2F11vr0ccyr5" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Star className="h-5 w-5" />
            Bewertung schreiben
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="cta-heading">
            Werden Sie unser nächster zufriedener Kunde
          </h2>
          <p className="text-white/70 mb-8">
            Vereinbaren Sie jetzt Ihren kostenlosen Beratungstermin und erleben Sie professionelle Laser Haarentfernung.
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
