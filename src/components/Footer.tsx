import Link from 'next/link'
import { Zap, Mail, MapPin, Phone, Facebook, Instagram, Clock } from 'lucide-react'

const footerLinks = {
  behandlungen: [
    { name: 'Für Frauen', href: '/laser-haarentfernung-frauen' },
    { name: 'Für Männer', href: '/laser-haarentfernung-maenner' },
    { name: 'Gesicht', href: '/laser-haarentfernung-gesicht' },
    { name: 'Intimbereich', href: '/laser-haarentfernung-intimbereich' },
  ],
  information: [
    { name: 'Preise', href: '/preise' },
    { name: 'Technologie', href: '/technologie' },
    { name: 'Galerie', href: '/galerie' },
    { name: 'Bewertungen', href: '/bewertungen' },
    { name: 'FAQ', href: '/faq' },
  ],
  rechtliches: [
    { name: 'Impressum', href: '/impressum' },
    { name: 'Datenschutz', href: '/datenschutz' },
    { name: 'AGB', href: '/agb' },
  ],
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61580188569455' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/demonandangellaser/' },
]

export default function Footer() {
  return (
    <footer className="bg-black/90 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img src="/images/logo-removebg-preview.png" alt="Demon (And) Angel Logo" className="h-12 w-auto" />
              <span className="text-2xl font-bold gradient-text">Demon (And) Angel</span>
            </Link>
            <p className="text-white/60 mb-6 max-w-sm">
              Professionelle dauerhafte Laser Haarentfernung mit modernster 3-Wellenlängen-Diodenlaser Technologie in Frankfurt am Main.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5 text-white/80" />
                </a>
              ))}
            </div>
          </div>

          {/* Behandlungen */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Behandlungen</h3>
            <ul className="space-y-3">
              {footerLinks.behandlungen.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Information</h3>
            <ul className="space-y-3">
              {footerLinks.information.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Rechtliches</h3>
            <ul className="space-y-3">
              {footerLinks.rechtliches.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-wrap gap-8 justify-center text-sm text-white/60">
            <a href="mailto:info@demonandangel.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="h-4 w-4" />
              info@demonandangel.com
            </a>
            <a href="tel:+4915238228127" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="h-4 w-4" />
              015238228127
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Europa-Allee 43, Frankfurt
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Täglich 09:00 – 20:00
            </span>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Demon (And) Angel. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
            <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
