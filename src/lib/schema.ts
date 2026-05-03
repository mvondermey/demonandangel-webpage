const BASE_URL = 'https://demonandangel.eu'
const BUSINESS_NAME = 'Demon (And) Angel - Laser Haarentfernung Frankfurt'
const SHARE_IMAGE_URL = `${BASE_URL}/images/logo-removebg-preview.png`

type BreadcrumbItem = {
  name: string
  path: string
}

type AggregateRatingInput = {
  path: string
  description: string
  ratingValue: number
  reviewCount: number
}

type OfferCatalogItem = {
  name: string
  description: string
  price: string
  priceCurrency?: string
}

type OfferCatalogInput = {
  path: string
  name: string
  description: string
  items: OfferCatalogItem[]
}

function toAbsoluteUrl(path: string) {
  return path === '/' ? BASE_URL : `${BASE_URL}${path}`
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path),
    })),
  }
}

export function createAggregateRatingSchema({
  path,
  description,
  ratingValue,
  reviewCount,
}: AggregateRatingInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}#localbusiness`,
    name: BUSINESS_NAME,
    url: toAbsoluteUrl(path),
    image: SHARE_IMAGE_URL,
    description,
    telephone: '+49 152 38228127',
    priceRange: 'EUR',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Europa-Allee 43',
      addressLocality: 'Frankfurt am Main',
      postalCode: '60327',
      addressCountry: 'DE',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue,
      reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
  }
}

export function createOfferCatalogSchema({
  path,
  name,
  description,
  items,
}: OfferCatalogInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${toAbsoluteUrl(path)}#service`,
    name,
    description,
    url: toAbsoluteUrl(path),
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${BASE_URL}#localbusiness`,
      name: BUSINESS_NAME,
      image: SHARE_IMAGE_URL,
      telephone: '+49 152 38228127',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Europa-Allee 43',
        addressLocality: 'Frankfurt am Main',
        postalCode: '60327',
        addressCountry: 'DE',
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name,
      itemListElement: items.map((item) => ({
        '@type': 'Offer',
        price: item.price,
        priceCurrency: item.priceCurrency ?? 'EUR',
        itemOffered: {
          '@type': 'Service',
          name: item.name,
          description: item.description,
        },
      })),
    },
  }
}
