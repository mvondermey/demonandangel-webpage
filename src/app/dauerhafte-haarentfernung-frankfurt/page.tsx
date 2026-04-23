import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, Shield, Clock, Zap, Star, ArrowRight, AlertCircle, Calendar, Euro, Sparkles, Heart, MapPin, Users, Ban, CreditCard, Train, MessageCircle } from 'lucide-react'
import { createPageMetadata } from '@/lib/seo'

// Customer Reviews
const customerReviews = [
  {
    name: 'Maria S.',
    rating: 5,
    text: 'Beste Entscheidung! Nach 5 Behandlungen bin ich fast komplett haarfrei. Das Team ist super professionell und die Behandlung war viel angenehmer als erwartet.',
    area: 'Beine & Achseln'
  },
  {
    name: 'Thomas K.',
    rating: 5,
    text: 'Als Mann war ich erst skeptisch, aber die Rückenbehandlung hat mein Leben verändert. Endlich keine lästigen Haare mehr. Sehr zu empfehlen!',
    area: 'Rücken'
  },
  {
    name: 'Sandra M.',
    rating: 5,
    text: 'Ich habe schon viele Studios ausprobiert, aber hier stimmt einfach alles: moderne Technik, faire Preise und ein tolles Ergebnis. Danke!',
    area: 'Bikinizone'
  },
]

// Contraindications
const contraindications = [
  'Schwangerschaft und Stillzeit',
  'Aktive Hautinfektionen oder Entzündungen',
  'Frische Bräune oder Sonnenbrand',
  'Einnahme von photosensibilisierenden Medikamenten',
  'Aktive Akne im Behandlungsbereich',
  'Frische Tattoos im Behandlungsbereich',
  'Bestimmte Hauterkrankungen (z.B. Vitiligo)',
  'Einnahme von Isotretinoin (Accutane) in den letzten 6 Monaten',
]

// Comprehensive FAQ Schema for SEO
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wie funktioniert dauerhafte Haarentfernung mit Laser?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Der Laserstrahl wird vom Melanin (Farbstoff) im Haar absorbiert und in Wärme umgewandelt. Diese Wärme zerstört die Haarwurzel gezielt, ohne das umliegende Gewebe zu beschädigen. Durch die Verödung der Haarwurzel wird das Haarwachstum dauerhaft gestoppt.'
      }
    },
    {
      '@type': 'Question',
      name: 'Wie viele Behandlungen sind für eine dauerhafte Haarentfernung nötig?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Für optimale Ergebnisse empfehlen wir 4-6 Behandlungen im Abstand von 4-8 Wochen. Die genaue Anzahl hängt von Haartyp, Hautfarbe, Körperregion und individuellen Faktoren ab. Haare wachsen in Zyklen, daher müssen mehrere Sitzungen durchgeführt werden, um alle Haare in ihrer aktiven Wachstumsphase zu erreichen.'
      }
    },
    {
      '@type': 'Question',
      name: 'Kann ich nach der Behandlung Sport machen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wir empfehlen, 24-48 Stunden nach der Behandlung auf intensiven Sport zu verzichten. Schwitzen kann die behandelte Haut reizen. Leichte Aktivitäten sind in der Regel kein Problem.'
      }
    },
    {
      '@type': 'Question',
      name: 'Wie lange muss ich die Sonne meiden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vor der Behandlung sollten Sie 2 Wochen direkte Sonneneinstrahlung und Solarium vermeiden. Nach der Behandlung empfehlen wir ebenfalls 2 Wochen Sonnenschutz mit hohem LSF.'
      }
    },
    {
      '@type': 'Question',
      name: 'Ist die Behandlung auch für Männer geeignet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolut! Immer mehr Männer entscheiden sich für dauerhafte Haarentfernung. Besonders beliebt sind Rücken, Brust, Schultern und Nacken. Unser Laser ist für alle Geschlechter gleichermaßen effektiv.'
      }
    },
    {
      '@type': 'Question',
      name: 'Ist die Laser-Haarentfernung schmerzhaft?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Unsere moderne 3-Wellenlängen-Technologie mit integrierter Kontaktkühlung macht die Behandlung nahezu schmerzfrei. Die meisten Kunden beschreiben das Gefühl als leichtes Kribbeln oder angenehme Wärme. Eine Betäubung ist nicht notwendig.'
      }
    },
    {
      '@type': 'Question',
      name: 'Welche Körperstellen können behandelt werden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fast alle Körperregionen können behandelt werden: Gesicht (Oberlippe, Kinn, Wangen), Achseln, Arme, Beine, Rücken, Brust, Bauch, Bikinizone und Intimbereich. Unser 3-Wellenlängen-Diodenlaser ist für alle Hauttypen (I-VI) geeignet.'
      }
    },
    {
      '@type': 'Question',
      name: 'Was kostet eine dauerhafte Haarentfernung in Frankfurt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Kosten hängen von der zu behandelnden Körperregion ab. Bei Demon (And) Angel beginnen die Preise bei 29€ für kleine Zonen wie die Oberlippe. Ganzkörperbehandlungen sind ab 199€ im Aktionsangebot erhältlich (statt 350€). Alle Preise verstehen sich pro Behandlung.'
      }
    },
    {
      '@type': 'Question',
      name: 'Kann ich mich auch mit gebräunter Haut behandeln lassen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja! Unser 3-Wellenlängen-Diodenlaser mit 755nm, 810nm und 1064nm Wellenlängen ist auch für gebräunte Haut geeignet. Bei sehr frischer oder intensiver Bräune empfehlen wir jedoch, 1-2 Wochen zu warten, um optimale Ergebnisse zu erzielen.'
      }
    }
  ]
}

// Service Schema for Local SEO
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Dauerhafte Haarentfernung mit Laser',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Demon (And) Angel - Laser Haarentfernung Frankfurt',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Europa-Allee 43',
      addressLocality: 'Frankfurt am Main',
      postalCode: '60327',
      addressCountry: 'DE'
    },
    telephone: '+49 152 38228127',
    priceRange: '€€'
  },
  areaServed: {
    '@type': 'City',
    name: 'Frankfurt am Main'
  },
  description: 'Professionelle dauerhafte Haarentfernung mit modernster 3-Wellenlängen-Diodenlaser Technologie in Frankfurt. Schmerzfrei, sicher und effektiv für alle Hauttypen.',
  offers: {
    '@type': 'Offer',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'EUR',
      price: '29',
      minPrice: '29',
      maxPrice: '249'
    }
  }
}

export const metadata: Metadata = createPageMetadata({
  pathname: '/dauerhafte-haarentfernung-frankfurt',
  title: 'Dauerhafte Haarentfernung Frankfurt ab 29€ | Bis zu 95% Haarreduktion ✓',
  description: 'Dauerhafte Haarentfernung Frankfurt ⭐ ab 29€ ⭐ bis zu 95% Haarreduktion möglich. 3-Wellenlängen-Laser, schonend, alle Hauttypen. Ganzkörper 199€. ☎ 015238228127',
  keywords: [
    'dauerhafte haarentfernung frankfurt',
    'laser haarentfernung frankfurt',
    'haarentfernung laser frankfurt',
    'dauerhafte enthaarung frankfurt',
    'diodenlaser haarentfernung',
    'schmerzfreie haarentfernung',
    'haarentfernung frauen frankfurt',
    'haarentfernung männer frankfurt',
    'laser epilation frankfurt',
    'permanente haarentfernung'
  ],
  openGraph: {
    title: 'Dauerhafte Haarentfernung Frankfurt | Demon (And) Angel',
    description: 'Professionelle dauerhafte Laser-Haarentfernung in Frankfurt. Moderne 3-Wellenlängen-Technologie, schonend und für alle Hauttypen geeignet.',
    type: 'website',
  },
})

const behandlungsZonen = [
  { zone: 'Gesicht komplett', preis: '99 €', aktion: true },
  { zone: 'Oberlippe', preis: '29 €' },
  { zone: 'Achseln', preis: '59 €' },
  { zone: 'Bikinizone', preis: '69 €' },
  { zone: 'Beine komplett', preis: '178 €' },
  { zone: 'Ganzkörper', preis: '199 €', altPreis: '350 €', aktion: true },
]

const haarzyklusPhasen = [
  {
    name: 'Anagen (Wachstumsphase)',
    beschreibung: 'In dieser aktiven Phase ist das Haar mit der Haarwurzel verbunden und enthält am meisten Melanin. Dies ist die optimale Phase für die Laserbehandlung, da die Energie direkt zur Wurzel geleitet wird.',
    prozent: '20-30%',
    optimal: true,
  },
  {
    name: 'Katagen (Übergangsphase)',
    beschreibung: 'Das Haar löst sich von der Wurzel und die Zellteilung stoppt. In dieser Phase ist die Behandlung weniger effektiv.',
    prozent: '3-4%',
    optimal: false,
  },
  {
    name: 'Telogen (Ruhephase)',
    beschreibung: 'Das Haar ruht und fällt schließlich aus. Ein neues Haar beginnt zu wachsen. Haare in dieser Phase können nicht effektiv behandelt werden.',
    prozent: '70-80%',
    optimal: false,
  },
]

export default function DauerhafteHaarentfernungFrankfurtPage() {
  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-demon-900/40 via-purple-900/30 to-angel-900/40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/20 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 mb-6">
            <Shield className="h-4 w-4 text-green-400" />
            <span className="text-white/80 text-sm">NiSV-zertifiziert • Medizinisch geprüft</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Dauerhafte Haarentfernung in Frankfurt</span>
          </h1>
          
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Professionelle Laser-Haarentfernung mit modernster 3-Wellenlängen-Diodenlaser Technologie. 
            Schmerzfrei, sicher und effektiv – für Damen und Herren, alle Hauttypen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="https://wa.me/4915238228127" 
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Kostenlose Beratung
            </a>
            <Link 
              href="/preise" 
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              <Euro className="h-5 w-5" />
              Preise ansehen
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
              <div className="text-2xl font-bold text-white">5.0 ★</div>
              <div className="text-white/60 text-sm">Google Bewertung</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
              <div className="text-2xl font-bold text-white">1000+</div>
              <div className="text-white/60 text-sm">Behandlungen</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
              <div className="text-2xl font-bold text-white">NiSV</div>
              <div className="text-white/60 text-sm">Zertifiziert</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-white/60 text-sm">Schonende Kühlung</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Bar */}
      <section className="py-6 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-green-400" />
              <span className="text-white/80 font-semibold">NiSV Zertifiziert</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-blue-400" />
              <span className="text-white/80 font-semibold">CE-Konform</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-purple-400" />
              <span className="text-white/80 font-semibold">Datenschutz-Konform</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-6 w-6 text-yellow-400" />
              <span className="text-white/80 font-semibold">Google 5.0 Sterne</span>
            </div>
          </div>
        </div>
      </section>

      {/* Was ist dauerhafte Haarentfernung */}
      <section className="py-20 bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="gradient-text">Was ist dauerhafte Haarentfernung mit Laser?</span>
          </h2>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Die <strong>dauerhafte Haarentfernung mit Laser</strong> ist die effektivste und sicherste Methode, 
              um unerwünschte Körperbehaarung langfristig zu beseitigen. Bei diesem medizinischen Verfahren wird 
              gebündeltes Licht (Laserstrahl) mit präziser Wellenlänge gezielt auf die Haarwurzel (Follikel) gerichtet.
            </p>
            
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Das <strong>Melanin</strong> (der natürliche Farbstoff im Haar) absorbiert die Lichtenergie und 
              wandelt sie in kontrollierte Wärme um. Diese thermische Energie verödet die Haarwurzel selektiv, 
              ohne das umliegende Gewebe zu beschädigen. Das Ergebnis: Eine dauerhafte Reduktion des Haarwachstums 
              von bis zu 95% nach Abschluss der Behandlungsserie.
            </p>

            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Im Gegensatz zu temporären Methoden wie Rasieren, Wachsen oder Epilieren, bei denen nur die 
              sichtbaren Haare entfernt werden, greift die Laserbehandlung direkt an der Wurzel an. Dies 
              macht sie zur einzig wirklich <strong>permanenten Lösung</strong> gegen unerwünschte Behaarung.
            </p>

            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Die Behandlung ist für <strong>alle Hauttypen (I-VI)</strong> geeignet und kann an fast jeder 
              Körperregion durchgeführt werden. Moderne Lasergeräte wie unser 3-Wellenlängen-System ermöglichen 
              eine sichere und effektive Behandlung selbst bei empfindlicher Haut oder gebräunter Hauttypen.
            </p>

            <div className="bg-gradient-to-r from-demon-500/20 to-angel-500/20 rounded-2xl p-6 border border-white/10 my-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="h-6 w-6 text-purple-400" />
                Warum ist Laser besser als andere Methoden?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <span><strong>Dauerhaft:</strong> Im Gegensatz zu Rasieren, Wachsen oder Epilieren werden die Haarwurzeln dauerhaft zerstört</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <span><strong>Schmerzfrei:</strong> Moderne Kühltechnologie macht die Behandlung angenehm</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <span><strong>Präzise:</strong> Nur das Haar wird behandelt, die Haut bleibt unversehrt</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <span><strong>Kosteneffizient:</strong> Langfristig günstiger als jahrelanges Rasieren oder Wachsen</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Behandlungsprozess */}
      <section className="py-20 bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="gradient-text">Der Behandlungsablauf</span>
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Calendar className="h-6 w-6 text-purple-400" />
                1. Kostenlose Erstberatung & Testbehandlung
              </h3>
              <p className="text-white/70 leading-relaxed mb-3">
                In Ihrer persönlichen Erstberatung führen wir eine detaillierte Hautanalyse durch und 
                erstellen einen maßgeschneiderten Behandlungsplan. Wir klären alle Fragen zum Ablauf, 
                Kosten und erwarteten Ergebnissen.
              </p>
              <p className="text-white/70 leading-relaxed">
                <strong>Optional:</strong> Kleine Testbehandlung zur Einschätzung der Verträglichkeit und 
                Demonstration des Behandlungsgefühls.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Clock className="h-6 w-6 text-purple-400" />
                2. Vorbereitung
              </h3>
              <p className="text-white/70 leading-relaxed mb-4">
                1-2 Tage vor der Behandlung rasieren Sie die betroffene Zone. Vermeiden Sie 2 Wochen vorher 
                Sonnenbäder, Solarium und Selbstbräuner. Kein Wachsen, Epilieren oder Zupfen 4 Wochen vor 
                der Behandlung.
              </p>
              <p className="text-white/70 leading-relaxed">
                Am Behandlungstag kommen Sie ohne Make-up, Cremes oder Deodorants in den behandelten 
                Bereichen. Die Haut sollte sauber und trocken sein.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="h-6 w-6 text-purple-400" />
                3. Behandlungsserie (6-8 Sitzungen)
              </h3>
              <p className="text-white/70 leading-relaxed mb-3">
                <strong>Behandlungsdauer:</strong> 10-60 Minuten pro Sitzung je nach Körperregion
              </p>
              <p className="text-white/70 leading-relaxed mb-3">
                <strong>Abstände:</strong> Anfangs 4 Wochen (Gesicht), 6 Wochen (Körper). 
                Mit fortschreitender Behandlungsdauer verlängern sich die Abstände um 1-2 Wochen.
              </p>
              <p className="text-white/70 leading-relaxed mb-3">
                <strong>Schmerzempfinden:</strong> Leicht unangenehm wie kurzer Stich, keine Betäubung notwendig
              </p>
              <p className="text-white/70 leading-relaxed">
                Die integrierte Kontaktkühlung sorgt für maximalen Komfort während der Behandlung.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-purple-400" />
                4. Langfristige Ergebnisse & Auffrischung
              </h3>
              <p className="text-white/70 leading-relaxed mb-3">
                Das Ergebnis ist dauerhaft. Einzelne Haare können hormonell bedingt nachwachsen, lassen sich 
                aber mit wenigen Nachbehandlungen dauerhaft entfernen.
              </p>
              <p className="text-white/70 leading-relaxed mb-3">
                <strong>Optionale Auffrischung:</strong> Nach 12-24 Monaten bei Bedarf für perfekte Ergebnisse
              </p>
              <p className="text-white/70 leading-relaxed">
                Direkt nach der Behandlung kann die Haut leicht gerötet sein – dies klingt normalerweise 
                innerhalb weniger Stunden ab. Vermeiden Sie 24-48 Stunden heiße Duschen, Sauna und direkte Sonneneinstrahlung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Numbers */}
      <section className="py-16 bg-gradient-to-r from-demon-500/10 via-purple-500/10 to-angel-500/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">1,000+</div>
              <div className="text-white/70">Erfolgreiche Behandlungen</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-white/70">Zufriedene Kunden</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">5+</div>
              <div className="text-white/70">Jahre Erfahrung</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
              <div className="text-white/70">Kundenzufriedenheit</div>
            </div>
          </div>
        </div>
      </section>

      {/* Unsere Technologie */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Unsere Laser-Technologie</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Modernste 3-Wellenlängen-Diodenlaser Technologie für optimale Ergebnisse bei allen Haut- und Haartypen
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Medizinisches 3-Wellenlängen-Diodenlaser System</h3>
              
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="h-5 w-5 text-green-400" />
                  <span className="text-green-400 font-semibold">Medizinproduktklasse IIa • CE-zertifiziert</span>
                </div>
                <p className="text-white/70">
                  Unser fortschrittliches Laser-System kombiniert drei bewährte Wellenlängen in einem Gerät – 
                  entwickelt von führenden Herstellern der medizinischen Lasertechnologie.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-demon-500 pl-4">
                  <h4 className="font-bold text-demon-400">755nm Alexandrit-Wellenlänge</h4>
                  <p className="text-white/70">Vergleichbar mit GentleLase Pro™ Technologie. Optimal für helle Haut und dunkle Haare. 
                  Höchste Melanin-Absorption bei minimaler Hautbelastung.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-purple-400">810nm Dioden-Wellenlänge</h4>
                  <p className="text-white/70">Der Goldstandard für alle Hauttypen. Tiefe Penetration für dauerhafte Ergebnisse 
                  bei maximaler Sicherheit.</p>
                </div>
                
                <div className="border-l-4 border-angel-500 pl-4">
                  <h4 className="font-bold text-angel-400">1064nm Nd:YAG-Wellenlänge</h4>
                  <p className="text-white/70">Perfekt für dunklere Hauttypen und tief sitzende Haarfollikel – 
                  vergleichbar mit GentleMax Pro™ Effizienz.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Technische Spezifikationen</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/70">Wellenlängen</span>
                  <span className="text-white font-semibold">755nm, 810nm, 1064nm</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/70">Hauttypen</span>
                  <span className="text-white font-semibold">I - VI (alle Typen)</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/70">Kühlung</span>
                  <span className="text-white font-semibold">Saphir-Applikator Kontaktkühlung</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/70">Spotgrößen</span>
                  <span className="text-white font-semibold">12mm x 12mm und 23mm x 38mm</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/70">Maximale Frequenz</span>
                  <span className="text-white font-semibold">3 Hz im gliding mode</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/70">Impulsoptionen</span>
                  <span className="text-white font-semibold">Sehr kurze bis sehr lange Impulse</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-white/70">Leistungsabgabe</span>
                  <span className="text-white font-semibold">Hohe Leistungsabgaben</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vorteile Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-demon-500/20 to-transparent rounded-xl p-6 border border-demon-500/30">
              <Zap className="h-10 w-10 text-demon-400 mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Besonders angenehme Behandlung</h4>
              <p className="text-white/70">Integrierte Kühlung für maximalen Komfort während der gesamten Behandlung.</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/20 to-transparent rounded-xl p-6 border border-purple-500/30">
              <Shield className="h-10 w-10 text-purple-400 mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Sicher auch bei gebräunter Haut</h4>
              <p className="text-white/70">Sicher auch bei gebräunter Haut durch intelligente Wellenlängen-Kombination.</p>
            </div>
            
            <div className="bg-gradient-to-br from-angel-500/20 to-transparent rounded-xl p-6 border border-angel-500/30">
              <Clock className="h-10 w-10 text-angel-400 mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Schnelle Behandlung</h4>
              <p className="text-white/70">Große Behandlungsflächen in kurzer Zeit durch effiziente Technologie.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ergebnisse & Erwartungen */}
      <section className="py-20 bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="gradient-text">Ergebnisse & realistische Erwartungen</span>
          </h2>
          
          <div className="prose prose-lg prose-invert max-w-none mb-8">
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Die Ergebnisse der Laser-Haarentfernung sind <strong>permanent und dauerhaft</strong>. Nach Abschluss 
              der empfohlenen 4-6 Behandlungen können Sie mit einer Haarreduktion von bis zu 95% in den 
              behandelten Bereichen rechnen. Die wenigen verbleibenden Haare sind deutlich feiner und heller.
            </p>

            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Bereits nach der ersten Behandlung bemerken viele Kunden eine Reduktion des Haarwachstums. 
              Die Haare wachsen langsamer nach und werden dünner. Nach jeder weiteren Behandlung verbessern 
              sich die Ergebnisse weiter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-green-500/20 to-transparent rounded-xl p-6 border border-green-500/30">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-400" />
                Was Sie erwarten können
              </h3>
              <ul className="space-y-2 text-white/70">
                <li>• Bis zu 95% permanente Haarreduktion</li>
                <li>• Deutlich feinere und hellere Resthaare</li>
                <li>• Keine eingewachsenen Haare mehr</li>
                <li>• Keine Hautirritationen durch Rasieren</li>
                <li>• Zeitersparnis im Alltag</li>
                <li>• Mehr Selbstbewusstsein</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-500/20 to-transparent rounded-xl p-6 border border-yellow-500/30">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-yellow-400" />
                Wichtige Hinweise
              </h3>
              <ul className="space-y-2 text-white/70">
                <li>• Ergebnisse variieren individuell</li>
                <li>• Geduld ist entscheidend</li>
                <li>• Regelmäßige Termine wichtig</li>
                <li>• Hormonelle Veränderungen können Ergebnisse beeinflussen</li>
                <li>• Gelegentliche Nachbehandlungen möglich</li>
                <li>• Sonnenschutz ist unerlässlich</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/30">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-purple-400" />
              Langfristige Vorteile
            </h3>
            <p className="text-white/70 leading-relaxed">
              Investieren Sie einmal in Ihre dauerhafte Haarentfernung und genießen Sie jahrelang 
              haarfreie Haut. Die Kostenersparnis im Vergleich zu lebenslangem Rasieren, Wachsen oder 
              Epilieren ist erheblich. Addieren Sie die Zeitersparnis und den Komfort – die Laser-Haarentfernung 
              ist eine Investition in Ihre Lebensqualität.
            </p>
          </div>
        </div>
      </section>

      {/* Kostenvergleich & Zeitersparnis */}
      <section className="py-20 bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="gradient-text">Laser vs. Traditionelle Methoden</span>
          </h2>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-white/5">
                  <th className="text-left py-4 px-6 text-white/80 font-semibold">Methode</th>
                  <th className="text-center py-4 px-6 text-white/80 font-semibold">Dauerhaft</th>
                  <th className="text-center py-4 px-6 text-white/80 font-semibold">Schmerz</th>
                  <th className="text-right py-4 px-6 text-white/80 font-semibold">Langfristige Kosten</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-green-500/10">
                  <td className="py-4 px-6 text-white font-semibold">Laser-Haarentfernung</td>
                  <td className="py-4 px-6 text-center text-green-400">✅ Permanent</td>
                  <td className="py-4 px-6 text-center text-green-400">✅ Minimal</td>
                  <td className="py-4 px-6 text-right text-green-400">✅ Einmalige Investition</td>
                </tr>
                <tr className="bg-white/[0.02]">
                  <td className="py-4 px-6 text-white">Wachsen</td>
                  <td className="py-4 px-6 text-center text-red-400">❌ Temporär</td>
                  <td className="py-4 px-6 text-center text-red-400">❌ Hoch</td>
                  <td className="py-4 px-6 text-right text-red-400">❌ Kontinuierlich</td>
                </tr>
                <tr className="bg-white/[0.02]">
                  <td className="py-4 px-6 text-white">Epilieren</td>
                  <td className="py-4 px-6 text-center text-red-400">❌ Temporär</td>
                  <td className="py-4 px-6 text-center text-red-400">❌ Sehr hoch</td>
                  <td className="py-4 px-6 text-right text-red-400">❌ Kontinuierlich</td>
                </tr>
                <tr className="bg-white/[0.02]">
                  <td className="py-4 px-6 text-white">Rasieren</td>
                  <td className="py-4 px-6 text-center text-red-400">❌ Temporär</td>
                  <td className="py-4 px-6 text-center text-green-400">✅ Minimal</td>
                  <td className="py-4 px-6 text-right text-red-400">❌ Täglich</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-gradient-to-br from-green-500/20 to-transparent rounded-xl p-6 border border-green-500/30">
              <Euro className="h-10 w-10 text-green-400 mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Kostenersparnis</h4>
              <p className="text-white/70 text-sm">
                Langfristig günstiger als jahrelanges Rasieren, Wachsen oder Epilieren. 
                Eine einmalige Investition in jahrelange Freiheit.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/20 to-transparent rounded-xl p-6 border border-purple-500/30">
              <Clock className="h-10 w-10 text-purple-400 mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Zeitersparnis</h4>
              <p className="text-white/70 text-sm">
                Kein tägliches Rasieren mehr, keine wöchentlichen Waxing-Termine. 
                Gewinnen Sie wertvolle Zeit für sich zurück.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-angel-500/20 to-transparent rounded-xl p-6 border border-angel-500/30">
              <Star className="h-10 w-10 text-angel-400 mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Lebensqualität</h4>
              <p className="text-white/70 text-sm">
                Mehr Selbstbewusstsein, keine Hautirritationen, keine eingewachsenen Haare. 
                Investition in Ihre Lebensqualität.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Behandlungsverlauf */}
      <section className="py-20 bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="gradient-text">Ihr Behandlungsverlauf</span>
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-demon-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-demon-400 font-bold">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">Erste Behandlung</h3>
                  <p className="text-white/70">Erste Reduktion des Haarwachstums sichtbar. Die Haare wachsen langsamer nach und werden dünner.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-400 font-bold">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">Dritte Behandlung</h3>
                  <p className="text-white/70">Deutliche Verbesserung der Ergebnisse. Bis zu 50% der Haare sind bereits dauerhaft entfernt.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-angel-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-angel-400 font-bold">6</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">Sechste Behandlung</h3>
                  <p className="text-white/70">Bis zu 95% permanente Haarreduktion erreicht. Die wenigen verbleibenden Haare sind deutlich feiner und heller.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-angel-500/20 rounded-xl p-6 border border-green-500/30">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-400 font-bold">∞</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">Langfristige Ergebnisse</h3>
                  <p className="text-white/70">Dauerhaft glatte Haut. Gelegentliche Nachbehandlungen bei hormonellen Veränderungen möglich.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Behandlungsbereiche */}
      <section className="py-20 bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="gradient-text">Diese Bereiche lassen sich behandeln</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-purple-400" />
                Gesicht & Hals
              </h3>
              <ul className="space-y-2 text-white/70">
                <li>• Oberlippe</li>
                <li>• Kinn & Kiefer</li>
                <li>• Wangen</li>
                <li>• Augenbrauen (Formen)</li>
                <li>• Hals</li>
                <li>• Seitenbartbereich</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-purple-400" />
                Körper & Extremitäten
              </h3>
              <ul className="space-y-2 text-white/70">
                <li>• Achseln</li>
                <li>• Arme (Ober- & Unterarme)</li>
                <li>• Beine (Ober- & Unterschenkel)</li>
                <li>• Brust & Dekolleté</li>
                <li>• Rücken & Nacken</li>
                <li>• Bauch & Taille</li>
                <li>• Schultern</li>
                <li>• Hände & Füße</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500/20 to-angel-500/20 rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Heart className="h-6 w-6 text-angel-400" />
              Intimbereiche (Diskret & Professionell)
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-2">Für Damen</h4>
                <ul className="space-y-1 text-white/70 text-sm">
                  <li>• Bikinizone (klassisch)</li>
                  <li>• Brazilian (komplett)</li>
                  <li>• Hollywood (komplett)</li>
                  <li>• Schamlippen</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Für Herren</h4>
                <ul className="space-y-1 text-white/70 text-sm">
                  <li>• kompletter Intimbereich</li>
                  <li>• Hodensack</li>
                  <li>• Schamhaaransatz</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Besonders beliebt</h4>
                <ul className="space-y-1 text-white/70 text-sm">
                  <li>• Brust (Männer)</li>
                  <li>• Rücken (Männer)</li>
                  <li>• Schulterbereich</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Haarwachstumszyklus */}
      <section className="py-20 bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Warum sind mehrere Behandlungen nötig?</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Der natürliche Haarwachstumszyklus erklärt, warum 4-6 Sitzungen für optimale Ergebnisse empfohlen werden
            </p>
          </div>

          <div className="prose prose-lg prose-invert max-w-none mb-12">
            <p className="text-white/80 text-lg leading-relaxed">
              Haare wachsen nicht alle gleichzeitig. Jedes Haar durchläuft einen eigenen Zyklus aus drei Phasen. 
              Die Laserbehandlung ist nur in der <strong>aktiven Wachstumsphase (Anagen)</strong> effektiv, 
              da das Haar in dieser Phase mit der Wurzel verbunden ist und das meiste Melanin enthält.
            </p>
          </div>

          <div className="space-y-6">
            {haarzyklusPhasen.map((phase) => (
              <div 
                key={phase.name}
                className={`rounded-xl p-6 border ${
                  phase.optimal 
                    ? 'bg-green-500/10 border-green-500/30' 
                    : 'bg-white/5 border-white/10'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white">{phase.name}</h3>
                      {phase.optimal && (
                        <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full">
                          Optimal für Laser
                        </span>
                      )}
                    </div>
                    <p className="text-white/70">{phase.beschreibung}</p>
                  </div>
                  <div className="text-center md:text-right">
                    <div className="text-2xl font-bold text-white">{phase.prozent}</div>
                    <div className="text-white/50 text-sm">der Haare</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-purple-500/10 rounded-xl p-6 border border-purple-500/30">
            <div className="flex items-start gap-4">
              <Calendar className="h-8 w-8 text-purple-400 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Empfohlener Behandlungsplan</h4>
                <p className="text-white/70">
                  <strong>4-6 Behandlungen</strong> im Abstand von <strong>4-8 Wochen</strong> sind optimal. 
                  Bei Gesichtshaaren empfehlen wir kürzere Abstände (4 Wochen), bei Körperhaaren längere (6-8 Wochen). 
                  So erreichen wir alle Haare in ihrer aktiven Wachstumsphase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Behandlungszonen & Preise */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Behandlungszonen & Preise</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Transparente Preise für alle Körperregionen. Alle Preise pro Behandlung.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden mb-8">
            <table className="w-full">
              <thead>
                <tr className="bg-white/5">
                  <th className="text-left py-4 px-6 text-white/80 font-semibold">Zone</th>
                  <th className="text-right py-4 px-6 text-white/80 font-semibold">Preis</th>
                </tr>
              </thead>
              <tbody>
                {behandlungsZonen.map((item, index) => (
                  <tr key={item.zone} className={index % 2 === 0 ? 'bg-white/[0.02]' : ''}>
                    <td className="py-4 px-6 text-white">
                      {item.zone}
                      {item.aktion && (
                        <span className="ml-2 bg-demon-500/20 text-demon-400 text-xs px-2 py-1 rounded-full">
                          AKTION
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {item.altPreis && (
                          <span className="text-lg text-white/40 line-through">{item.altPreis}</span>
                        )}
                        <span className="text-xl font-bold gradient-text">{item.preis}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center">
            <Link 
              href="/preise" 
              className="btn-secondary inline-flex items-center gap-2"
            >
              Vollständige Preisliste ansehen
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Nebenwirkungen & Sicherheit */}
      <section className="py-20 bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Sicherheit & mögliche Nebenwirkungen</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Transparente Information über Risiken und unsere Sicherheitsmaßnahmen
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-green-400" />
                Unsere Sicherheitsmaßnahmen
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>NiSV-zertifiziertes Fachpersonal</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Individuelle Hautanalyse vor jeder Behandlung</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>CE-zertifizierte Lasergeräte neuester Generation</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Integrierte Kontaktkühlung zum Hautschutz</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Anpassung der Parameter an Ihren Hauttyp</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-yellow-400" />
                Sicherheit & mögliche Nebenwirkungen
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Normale Reaktionen</h4>
                  <ul className="space-y-2 text-white/80">
                    <li>• <strong>Leichte Rötung:</strong> Normal, verschwindet innerhalb weniger Stunden</li>
                    <li>• <strong>Wärmegefühl:</strong> Vorübergehend, ähnlich einem leichten Sonnenbrand</li>
                    <li>• <strong>Leichte Schwellung:</strong> Selten, klingt schnell ab</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">Seltene Nebenwirkungen</h4>
                  <ul className="space-y-2 text-white/80">
                    <li>• <strong>Leichte allergische Reaktion:</strong> Meist schnell abklingend</li>
                    <li>• <strong>Pigmentveränderungen:</strong> Sehr selten, meist temporär</li>
                  </ul>
                </div>

                <div className="bg-yellow-500/10 rounded-xl p-4 border border-yellow-500/30">
                  <h4 className="font-semibold text-yellow-400 mb-2">Risiken bei unsachgemäßer Anwendung</h4>
                  <p className="text-white/70 text-sm">
                    Bei unsachgemäßer Anwendung können ernsthafte Komplikationen auftreten: 
                    Verbrennungen, Pigmentstörungen oder Entzündungen. 
                    Deshalb behandeln wir ausschließlich mit geschultem Fachpersonal und 
                    zertifizierten Geräten.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weiterführende Artikel & Interne Links */}
      <section className="py-20 bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="gradient-text">Weiterführende Informationen</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Spezialisierte Behandlungen</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/laser-haarentfernung-frauen" className="text-purple-400 hover:text-purple-300 flex items-center gap-2">
                    <ArrowRight className="h-4 w-4" />
                    Laser-Haarentfernung für Frauen
                  </Link>
                </li>
                <li>
                  <Link href="/laser-haarentfernung-maenner" className="text-purple-400 hover:text-purple-300 flex items-center gap-2">
                    <ArrowRight className="h-4 w-4" />
                    Laser-Haarentfernung für Männer
                  </Link>
                </li>
                <li>
                  <Link href="/laser-haarentfernung-gesicht" className="text-purple-400 hover:text-purple-300 flex items-center gap-2">
                    <ArrowRight className="h-4 w-4" />
                    Gesichtsbehandlungen
                  </Link>
                </li>
                <li>
                  <Link href="/laser-haarentfernung-intimbereich" className="text-purple-400 hover:text-purple-300 flex items-center gap-2">
                    <ArrowRight className="h-4 w-4" />
                    Intimbereich
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Hilfreiche Artikel</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/wie-viele-sitzungen-laser-haarentfernung" className="text-purple-400 hover:text-purple-300 flex items-center gap-2">
                    <ArrowRight className="h-4 w-4" />
                    Wie viele Sitzungen sind nötig?
                  </Link>
                </li>
                <li>
                  <Link href="/laser-haarentfernung-bei-gebraeunter-haut" className="text-purple-400 hover:text-purple-300 flex items-center gap-2">
                    <ArrowRight className="h-4 w-4" />
                    Behandlung bei gebräunter Haut
                  </Link>
                </li>
                <li>
                  <Link href="/technologie" className="text-purple-400 hover:text-purple-300 flex items-center gap-2">
                    <ArrowRight className="h-4 w-4" />
                    Unsere Laser-Technologie im Detail
                  </Link>
                </li>
                <li>
                  <Link href="/preise" className="text-purple-400 hover:text-purple-300 flex items-center gap-2">
                    <ArrowRight className="h-4 w-4" />
                    Vollständige Preisübersicht
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Urgency Banner */}
          <div className="bg-gradient-to-r from-demon-500/20 to-angel-500/20 rounded-2xl p-6 border border-demon-500/30 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Clock className="h-6 w-6 text-demon-400" />
              <span className="text-demon-400 font-bold">Begrenzte Verfügbarkeit</span>
            </div>
            <p className="text-white/80 mb-4">
              Nur noch <strong className="text-white">3 Termine</strong> diese Woche verfügbar. 
              Sichern Sie sich jetzt Ihren kostenlosen Beratungstermin!
            </p>
            <a 
              href="https://wa.me/4915238228127" 
              className="btn-primary inline-flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Jetzt Termin buchen
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Häufig gestellte Fragen</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Antworten auf die wichtigsten Fragen zur dauerhaften Haarentfernung
            </p>
          </div>

          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.name}</h3>
                  <p className="text-white/70">{faq.acceptedAnswer.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/faq" 
              className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-2"
            >
              Alle FAQs ansehen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Kundenbewertungen */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Das sagen unsere Kunden</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-white/80 font-semibold">5.0 auf Google</span>
            </div>
            <p className="text-white/60">Über 50 verifizierte Bewertungen</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {customerReviews.map((review, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-1 mb-3">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-white/80 mb-4 italic">"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">{review.name}</span>
                  <span className="text-white/50 text-sm">{review.area}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/bewertungen" 
              className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-2"
            >
              Alle Bewertungen ansehen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Kontraindikationen */}
      <section className="py-20 bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="gradient-text">Wer sollte keine Laserbehandlung durchführen?</span>
          </h2>
          
          <div className="bg-red-500/10 rounded-2xl p-6 border border-red-500/30 mb-8">
            <div className="flex items-start gap-4">
              <Ban className="h-8 w-8 text-red-400 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Kontraindikationen</h3>
                <p className="text-white/70 mb-4">
                  Aus Sicherheitsgründen führen wir keine Behandlung durch bei:
                </p>
                <ul className="grid md:grid-cols-2 gap-2">
                  {contraindications.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-white/70">
                      <span className="text-red-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-500/10 rounded-2xl p-6 border border-green-500/30">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-8 w-8 text-green-400 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Kostenlose Vorab-Beratung</h3>
                <p className="text-white/70">
                  Unsicher, ob die Behandlung für Sie geeignet ist? In unserer kostenlosen Erstberatung 
                  klären wir alle Fragen und prüfen, ob eine Laserbehandlung für Sie in Frage kommt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preise & Finanzierung */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="gradient-text">Preise & Zahlungsoptionen</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-demon-500/20 to-purple-500/20 rounded-2xl p-6 border border-demon-500/30">
              <div className="flex items-center gap-3 mb-4">
                <Euro className="h-8 w-8 text-demon-400" />
                <h3 className="text-xl font-bold text-white">Faire Einzelpreise</h3>
              </div>
              <ul className="space-y-2 text-white/70 mb-4">
                <li>• Ab 29€ pro Behandlung (Oberlippe)</li>
                <li>• Ganzkörper ab 199€ (statt 350€)</li>
                <li>• Transparente Preise ohne versteckte Kosten</li>
              </ul>
              <Link href="/preise" className="text-demon-400 hover:text-demon-300 inline-flex items-center gap-2">
                Vollständige Preisliste
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-angel-500/20 to-purple-500/20 rounded-2xl p-6 border border-angel-500/30">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="h-8 w-8 text-angel-400" />
                <h3 className="text-xl font-bold text-white">Flexible Zahlung</h3>
              </div>
              <ul className="space-y-2 text-white/70 mb-4">
                <li>• Barzahlung</li>
                <li>• EC-Karte & Kreditkarte</li>
                <li>• Paketpreise mit Rabatt möglich</li>
                <li>• Kostenlose Erstberatung inklusive</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-500/10 rounded-2xl p-6 border border-purple-500/30 text-center">
            <Sparkles className="h-10 w-10 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Aktuelle Aktion</h3>
            <p className="text-white/70 mb-4">
              Ganzkörper-Behandlung jetzt nur <span className="text-white font-bold">199€</span> statt <span className="line-through text-white/50">350€</span>
            </p>
            <a 
              href="https://wa.me/4915238228127" 
              className="btn-primary inline-flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Jetzt Termin sichern
            </a>
          </div>
        </div>
      </section>

      {/* Anfahrt & Erreichbarkeit */}
      <section className="py-20 bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="gradient-text">Anfahrt & Erreichbarkeit</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-8 w-8 text-purple-400" />
                <h3 className="text-xl font-bold text-white">Standort</h3>
              </div>
              <p className="text-white/70 mb-4">
                <strong className="text-white">Demon (And) Angel</strong><br />
                Europa-Allee 43<br />
                60327 Frankfurt am Main<br />
                (Europaviertel)
              </p>
              <p className="text-white/60 text-sm">
                Im modernen Europaviertel, direkt neben dem Skyline Plaza
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Train className="h-8 w-8 text-purple-400" />
                <h3 className="text-xl font-bold text-white">Öffentliche Verkehrsmittel</h3>
              </div>
              <ul className="space-y-2 text-white/70">
                <li>• <strong>S-Bahn:</strong> Frankfurt Messe (5 Min. Fußweg)</li>
                <li>• <strong>U-Bahn:</strong> Festhalle/Messe (3 Min. Fußweg)</li>
                <li>• <strong>Hauptbahnhof:</strong> 10 Min. mit S-Bahn</li>
                <li>• <strong>Parkplätze:</strong> Skyline Plaza Parkhaus</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-demon-500/20 to-angel-500/20 rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-8 w-8 text-purple-400" />
              <h3 className="text-xl font-bold text-white">Wir behandeln Kunden aus der gesamten Region</h3>
            </div>
            <p className="text-white/70 mb-4">
              Neben Frankfurt am Main begrüßen wir regelmäßig Kunden aus:
            </p>
            <div className="flex flex-wrap gap-2">
              {['Offenbach', 'Mainz', 'Wiesbaden', 'Darmstadt', 'Bad Homburg', 'Hanau', 'Aschaffenburg', 'Gießen'].map((city) => (
                <span key={city} className="bg-white/10 px-3 py-1 rounded-full text-white/70 text-sm">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Warum Demon (And) Angel? */}
      <section className="py-20 bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="gradient-text">Warum Demon (And) Angel in Frankfurt?</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Star className="h-6 w-6 text-yellow-400" />
                Medizinische Expertise & Erfahrung
              </h3>
              <ul className="space-y-2 text-white/70">
                <li>• Jahrzehnte Erfahrung in ästhetischer Lasermedizin</li>
                <li>• Fachärztlich begleitetes Behandlungsteam</li>
                <li>• Spezialisten für Laser-Dermatologie</li>
                <li>• Kontinuierliche Fortbildungen und Zertifizierungen</li>
                <li>• Tausende erfolgreiche Behandlungen</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-green-400" />
                Sicherheit & Qualität
              </h3>
              <ul className="space-y-2 text-white/70">
                <li>• NiSV-zertifizierte Behandlungen</li>
                <li>• Höchste Hygienestandards</li>
                <li>• Medizinproduktklasse IIa Geräte</li>
                <li>• Persönliche Betreuung & Diskretion</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-demon-500/20 to-angel-500/20 rounded-2xl p-6 border border-white/10 mt-8">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <MapPin className="h-6 w-6 text-purple-400" />
              Zentral & Gut Erreichbar in Frankfurt
            </h3>
            <p className="text-white/70 leading-relaxed">
              Unser Studio befindet sich im Herzen von Frankfurt am Main – Europa-Allee 43 im 
              modernen Europaviertel. Nur wenige Minuten vom Hauptbahnhof entfernt mit 
              exzellenten ÖPNV-Verbindungen und Parkmöglichkeiten in der Nähe.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-demon-900/40 via-purple-900/30 to-angel-900/40">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Bereit für dauerhaft glatte Haut?</span>
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Vereinbaren Sie jetzt Ihre kostenlose Beratung und erfahren Sie, wie wir Ihnen zu 
            dauerhaft haarfreier Haut verhelfen können.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="https://wa.me/4915238228127" 
              className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-4"
            >
              <Phone className="h-6 w-6" />
              WhatsApp: 0152 38228127
            </a>
            <Link 
              href="/kontakt" 
              className="btn-secondary inline-flex items-center justify-center gap-2 text-lg px-8 py-4"
            >
              Kontaktformular
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6 text-white/60">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>Kostenlose Beratung</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>Keine versteckten Kosten</span>
            </div>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Besuchen Sie uns in Frankfurt</h3>
          <p className="text-white/70 mb-6">
            Demon (And) Angel • Europa-Allee 43 • 60327 Frankfurt am Main
          </p>
          <p className="text-white/60">
            Zentral gelegen im Europaviertel, nur wenige Minuten vom Hauptbahnhof entfernt. 
            Öffentliche Parkplätze und gute ÖPNV-Anbindung vorhanden.
          </p>
        </div>
      </section>
    </>
  )
}
