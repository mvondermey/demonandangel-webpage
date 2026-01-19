import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kontakt - Termin buchen',
  description: 'Kontaktieren Sie Demon (And) Angel für Ihre Laser Haarentfernung in Frankfurt. Termin buchen per WhatsApp oder Telefon. Europa-Allee 43, Frankfurt.',
  keywords: ['kontakt laser haarentfernung', 'termin buchen frankfurt', 'haarentfernung beratung', 'demon and angel kontakt'],
  openGraph: {
    title: 'Kontakt | Demon (And) Angel Frankfurt',
    description: 'Buchen Sie Ihren Termin für dauerhafte Laser Haarentfernung in Frankfurt.',
    url: 'https://demonandangel.com/kontakt',
  },
}

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-demon-900/20 via-purple-900/20 to-angel-900/20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Kontaktiere uns</span>
            </h1>
            <p className="text-xl text-white/70">
              Wir schätzen unsere Kunden sehr und freuen uns, dass Sie unsere Website besuchen. 
              Buchen Sie jetzt Ihren Termin für eine Laser Haarentfernung bei Demon (And) Angel!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="https://wa.me/49015238228127"
              className="card group hover:scale-105 transition-transform duration-300 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">WhatsApp</h3>
              <p className="text-white/60 text-sm mb-2">Schnell & einfach</p>
              <p className="text-purple-400 group-hover:text-purple-300 transition-colors">
                Jetzt schreiben
              </p>
            </a>

            <a
              href="tel:+4915238228127"
              className="card group hover:scale-105 transition-transform duration-300 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">Telefon</h3>
              <p className="text-white/60 text-sm mb-2">Direkt anrufen</p>
              <p className="text-purple-400 group-hover:text-purple-300 transition-colors">
                015238228127
              </p>
            </a>

            <a
              href="mailto:info@demonandangel.com"
              className="card group hover:scale-105 transition-transform duration-300 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">E-Mail</h3>
              <p className="text-white/60 text-sm mb-2">Schreiben Sie uns</p>
              <p className="text-purple-400 group-hover:text-purple-300 transition-colors">
                info@demonandangel.com
              </p>
            </a>

            <div className="card text-center">
              <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">Adresse</h3>
              <p className="text-white/60 text-sm mb-2">Besuchen Sie uns</p>
              <p className="text-white/70">
                Europa-Allee 43<br />
                60327 Frankfurt am Main
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Info */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <div className="card p-0 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.8!2d8.6621!3d50.1109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0ea7f0000001%3A0x0!2sEuropa-Allee%2043%2C%2060327%20Frankfurt%20am%20Main!5e0!3m2!1sde!2sde!4v1"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort Demon (And) Angel"
              />
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Demon (And) Angel</h2>
                <p className="text-white/70">
                  Ihr Studio für professionelle dauerhafte Laser Haarentfernung in Frankfurt am Main. 
                  Wir sind zentral gelegen in der Europa-Allee, direkt am Europaviertel.
                </p>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-purple-400" />
                  Öffnungszeiten
                </h3>
                <div className="space-y-2 text-white/70">
                  <div className="flex justify-between">
                    <span>Montag - Freitag</span>
                    <span>09:00 - 20:00 Uhr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samstag</span>
                    <span>09:00 - 20:00 Uhr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sonntag</span>
                    <span>09:00 - 20:00 Uhr</span>
                  </div>
                </div>
                <p className="text-white/60 text-sm mt-4">
                  Wir sind da wenn Sie uns brauchen. Einfach WhatsApp senden.
                </p>
              </div>

              <div className="card bg-gradient-to-br from-demon-600/20 to-angel-600/20">
                <h3 className="text-lg font-semibold text-white mb-2">Kostenlose Beratung</h3>
                <p className="text-white/70 mb-4">
                  Mit Ihrer ersten Behandlung bieten wir Ihnen ein kostenloses 
                  Beratungsgespräch an. Wir beantworten alle Ihre Fragen und erstellen einen 
                  individuellen Behandlungsplan.
                </p>
                <a 
                  href="https://wa.me/49015238228127" 
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Beratung anfragen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Nachricht senden</h2>
            <p className="text-white/60">
              Haben Sie Fragen? Schreiben Sie uns eine Nachricht und wir melden uns schnellstmöglich bei Ihnen.
            </p>
          </div>

          <form className="card space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Ihr Name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Ihre Telefonnummer"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                E-Mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="ihre@email.de"
              />
            </div>
            
            <div>
              <label htmlFor="behandlung" className="block text-sm font-medium text-white/80 mb-2">
                Gewünschte Behandlung
              </label>
              <select
                id="behandlung"
                name="behandlung"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
              >
                <option value="" className="bg-gray-900">Bitte wählen</option>
                <option value="gesicht" className="bg-gray-900">Gesicht</option>
                <option value="achseln" className="bg-gray-900">Achseln</option>
                <option value="beine" className="bg-gray-900">Beine</option>
                <option value="arme" className="bg-gray-900">Arme</option>
                <option value="ruecken" className="bg-gray-900">Rücken</option>
                <option value="brust" className="bg-gray-900">Brust</option>
                <option value="intimbereich" className="bg-gray-900">Intimbereich</option>
                <option value="andere" className="bg-gray-900">Andere / Mehrere Zonen</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                Nachricht
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                placeholder="Ihre Nachricht an uns..."
              />
            </div>
            
            <button
              type="submit"
              className="btn-primary w-full"
            >
              Nachricht senden
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
