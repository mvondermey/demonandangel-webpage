import type { Metadata } from 'next'

const BASE_URL = 'https://demonandangel.eu'

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
      title,
      description,
      url: canonical,
      ...openGraph,
    },
  }
}
