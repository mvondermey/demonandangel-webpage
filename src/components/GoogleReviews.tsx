'use client'

import { Star, ExternalLink } from 'lucide-react'

const reviews = [
  {
    author: 'Julia M.',
    rating: 5,
    date: 'vor 2 Wochen',
    text: 'Nach nur 4 Behandlungen sind meine Beine komplett glatt. Das Team ist super professionell und die Atmosphäre sehr angenehm. Absolute Empfehlung!',
    avatar: 'JM',
  },
  {
    author: 'Thomas K.',
    rating: 5,
    date: 'vor 1 Monat',
    text: 'Endlich eine dauerhafte Lösung für meinen Rücken. Die Behandlung war schmerzfrei und das Ergebnis überzeugt. Sehr zufrieden!',
    avatar: 'TK',
  },
  {
    author: 'Sarah L.',
    rating: 5,
    date: 'vor 1 Monat',
    text: 'Sehr diskret und professionell. Ich fühle mich so viel wohler. Die Beratung war ausführlich und alle meine Fragen wurden beantwortet.',
    avatar: 'SL',
  },
  {
    author: 'Michael B.',
    rating: 5,
    date: 'vor 2 Monaten',
    text: 'Top Studio in Frankfurt! Moderne Ausstattung, freundliches Personal und faire Preise. Die Ergebnisse sprechen für sich.',
    avatar: 'MB',
  },
  {
    author: 'Anna S.',
    rating: 5,
    date: 'vor 2 Monaten',
    text: 'Hatte anfangs Bedenken wegen der Schmerzen, aber die Kühlung macht es wirklich angenehm. Nach 6 Behandlungen bin ich begeistert!',
    avatar: 'AS',
  },
  {
    author: 'David R.',
    rating: 5,
    date: 'vor 3 Monaten',
    text: 'Professionelle Beratung und Behandlung. Das Team nimmt sich Zeit und erklärt alles genau. Preis-Leistung stimmt!',
    avatar: 'DR',
  },
]

export default function GoogleReviews() {
  const averageRating = 5.0
  const totalReviews = 47

  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with Google Rating */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <svg className="h-10 w-10" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-2xl font-bold text-white">Google Bewertungen</span>
          </div>
          
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-5xl font-bold text-white">{averageRating.toFixed(1)}</div>
            <div>
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-white/60">{totalReviews} Bewertungen</p>
            </div>
          </div>
          
          <a 
            href="https://www.google.com/maps/place/Demon+(And)+Angel" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            Alle Bewertungen auf Google ansehen
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="card hover:scale-105 transition-transform">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-demon-500 to-angel-500 flex items-center justify-center text-white font-semibold">
                  {review.avatar}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white">{review.author}</h4>
                  <p className="text-white/50 text-sm">{review.date}</p>
                </div>
                <svg className="h-6 w-6 opacity-50" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-white/80 text-sm leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-white/60 mb-4">Zufrieden mit unserer Behandlung?</p>
          <a 
            href="https://www.google.com/maps/place/Demon+(And)+Angel" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Star className="h-5 w-5" />
            Bewertung schreiben
          </a>
        </div>
      </div>
    </section>
  )
}
