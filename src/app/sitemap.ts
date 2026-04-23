import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://demonandangel.eu'
  
  const routes = [
    '',
    '/dauerhafte-haarentfernung-frankfurt',
    '/preise',
    '/laser-haarentfernung-frankfurt-preise',
    '/kontakt',
    '/faq',
    '/technologie',
    '/wohlfuehlen',
    '/galerie',
    '/bewertungen',
    '/why-demonandangel',
    '/wie-viele-sitzungen-laser-haarentfernung',
    '/laser-haarentfernung-bei-gebraeunter-haut',
    '/laser-haarentfernung-gesicht',
    '/laser-haarentfernung-intimbereich',
    '/laser-haarentfernung-maenner',
    '/laser-haarentfernung-frauen',
    '/schmerzfreie-laser-haarentfernung',
    '/impressum',
    '/datenschutz',
    '/agb',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route === '/preise' ? 0.9 : 0.8,
  }))
}
