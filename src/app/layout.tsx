import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://demonandangel.com'),
  title: {
    default: 'Dauerhafte Laser Haarentfernung Frankfurt | Demon (And) Angel',
    template: '%s | Demon (And) Angel Frankfurt'
  },
  description: 'Professionelle dauerhafte Haarentfernung mit 3-Wellenlängen-Diodenlaser in Frankfurt. Schmerzfrei, effektiv & für alle Hauttypen. Jetzt Termin buchen! ☎ 015238228127',
  keywords: ['dauerhafte haarentfernung frankfurt', 'laser haarentfernung frankfurt', 'diodenlaser haarentfernung', 'haarentfernung permanent frankfurt', 'alexandrit laser frankfurt', 'haarentfernung frauen frankfurt', 'haarentfernung männer frankfurt', 'intimbereich laser frankfurt', 'beine lasern frankfurt', 'achseln lasern frankfurt', 'schmerzfreie haarentfernung', 'NiSV zertifiziert', '3 wellenlängen laser', 'bikinizone lasern', 'brazilian laser frankfurt', 'hollywood laser frankfurt'],
  authors: [{ name: 'Demon (And) Angel' }],
  creator: 'Demon (And) Angel',
  publisher: 'Demon (And) Angel',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://demonandangel.com',
    siteName: 'Demon (And) Angel',
    title: 'Dauerhafte Laser Haarentfernung Frankfurt | Demon (And) Angel',
    description: 'Professionelle dauerhafte Haarentfernung mit modernster 3-Wellenlängen-Diodenlaser Technologie in Frankfurt. Schmerzfrei & für alle Hauttypen.',
    images: [
      {
        url: '/images/logo-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'Demon (And) Angel - Dauerhafte Laser Haarentfernung Frankfurt',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dauerhafte Laser Haarentfernung Frankfurt | Demon (And) Angel',
    description: 'Professionelle dauerhafte Haarentfernung mit 3-Wellenlängen-Diodenlaser in Frankfurt. Schmerzfrei & effektiv.',
    images: ['/images/logo-removebg-preview.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'f_B_bNmB37S8DTcRWf7c1HbPsAEBqFFR8t6y5opYe3w',
  },
  alternates: {
    canonical: 'https://demonandangel.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': 'https://demonandangel.com',
              name: 'Demon (And) Angel - Laser Haarentfernung Frankfurt',
              'sameAs': [
                'https://www.facebook.com/demonandangel',
                'https://www.instagram.com/demonandangel'
              ],
              'aggregateRating': {
                '@type': 'AggregateRating',
                'ratingValue': '5',
                'reviewCount': '47',
                'bestRating': '5',
                'worstRating': '1'
              },
              image: 'https://demonandangel.com/logo.png',
              url: 'https://demonandangel.com',
              telephone: '+49 152 38228127',
              email: 'info@demonandangel.com',
              description: 'Professionelle dauerhafte Haarentfernung mit 3-Wellenlängen-Diodenlaser in Frankfurt am Main. Schmerzfrei, effektiv und für alle Hauttypen geeignet. NiSV-zertifiziertes Fachpersonal.',
              'medicalSpecialty': 'Dermatology',
              'availableService': [
                {
                  '@type': 'MedicalProcedure',
                  'name': 'Laser Haarentfernung Gesicht',
                  'procedureType': 'https://schema.org/NoninvasiveProcedure'
                },
                {
                  '@type': 'MedicalProcedure',
                  'name': 'Laser Haarentfernung Körper',
                  'procedureType': 'https://schema.org/NoninvasiveProcedure'
                },
                {
                  '@type': 'MedicalProcedure',
                  'name': 'Laser Haarentfernung Intimbereich',
                  'procedureType': 'https://schema.org/NoninvasiveProcedure'
                }
              ],
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Europa-Allee 43',
                addressLocality: 'Frankfurt am Main',
                postalCode: '60327',
                addressCountry: 'DE',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 50.1109,
                longitude: 8.6821,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '09:00',
                closes: '20:00',
              },
              priceRange: '€€',
              areaServed: {
                '@type': 'City',
                name: 'Frankfurt am Main',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Laser Haarentfernung Behandlungen',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Dauerhafte Laser Haarentfernung',
                      description: '3-Wellenlängen-Diodenlaser Behandlung',
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="pt-24 lg:pt-32">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
