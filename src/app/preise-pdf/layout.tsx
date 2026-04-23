import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Preisliste PDF Ansicht',
  description: 'Druckoptimierte Preislisten-Ansicht für Demon (And) Angel.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://demonandangel.eu/preise',
  },
}

export default function PreisePdfLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
