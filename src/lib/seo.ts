import type { Metadata } from 'next'

const BASE_URL = 'https://demonandangel.eu'
const DEFAULT_SHARE_IMAGE = '/images/logo-removebg-preview.png'

type PageMetadataInput = {
  pathname: string
  title: string
  description: string
  keywords?: string[]
  openGraph?: NonNullable<Metadata['openGraph']>
  robots?: Metadata['robots']
}

export function createPageMetadata({
  pathname,
  title,
  description,
  keywords,
  openGraph,
  robots,
}: PageMetadataInput): Metadata {
  const canonical = pathname === '/' ? BASE_URL : `${BASE_URL}${pathname}`

  return {
    title,
    description,
    keywords,
    robots,
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'website',
      locale: 'de_DE',
      siteName: 'Demon (And) Angel',
      title,
      description,
      url: canonical,
      images: [
        {
          url: DEFAULT_SHARE_IMAGE,
          width: 1200,
          height: 1200,
          alt: 'Demon (And) Angel - Laser Haarentfernung Frankfurt',
        },
      ],
      ...openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [DEFAULT_SHARE_IMAGE],
    },
  }
}
