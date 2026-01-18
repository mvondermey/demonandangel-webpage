'use client'

import Link from 'next/link'
import { Phone, Download, ArrowLeft } from 'lucide-react'

const kategorien = [
  {
    name: 'Ganzkörper',
    beschreibung: 'Aktionsangebote für mehrere Zonen.',
    zonen: [
      { zone: 'Ganzkörper (bis zu 6 Zonen) AKTION', preis: '249 €' },
      { zone: 'Ganzkörper (bis zu 12 Zonen) AKTION', preis: '349 €' },
    ],
  },
  {
    name: 'Gesicht',
    beschreibung: 'Sensible Bereiche – Diodenlaser.',
    zonen: [
      { zone: 'Gesicht komplett AKTION', preis: '99 €' },
      { zone: 'Oberlippe', preis: '29 €' },
      { zone: 'Wangen', preis: '34 €' },
      { zone: 'Kinn oder Kiefer', preis: '30 €' },
      { zone: 'Hals', preis: '37 €' },
    ],
  },
  {
    name: 'Arme & Achseln',
    beschreibung: 'Preise pro Behandlung.',
    zonen: [
      { zone: 'Achseln', preis: '59 €' },
      { zone: 'Oberarme', preis: '69 €' },
      { zone: 'Unterarme', preis: '69 €' },
    ],
  },
  {
    name: 'Beine',
    beschreibung: 'Preise pro Behandlung.',
    zonen: [
      { zone: 'Unterschenkel', preis: '89 €' },
      { zone: 'Oberschenkel', preis: '89 €' },
    ],
  },
  {
    name: 'Oberkörper',
    beschreibung: 'Preise pro Behandlung.',
    zonen: [
      { zone: 'Bauch', preis: '69 €' },
      { zone: 'Brust', preis: '69 €' },
      { zone: 'Unterer Rücken', preis: '69 €' },
      { zone: 'Oberer Rücken', preis: '69 €' },
      { zone: 'Schultern', preis: '59 €' },
    ],
  },
  {
    name: 'Intim & Po',
    beschreibung: 'Preise pro Behandlung.',
    zonen: [
      { zone: 'Bikini', preis: '54 €' },
      { zone: 'Intimzone', preis: '54 €' },
      { zone: 'Po-Falte', preis: '37 €' },
      { zone: 'Gesäss', preis: '56 €' },
    ],
  },
]

export default function PreisePdfPage() {
  return (
    <div className="min-h-screen bg-white text-black p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Link href="/preise" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="h-5 w-5" />
          Zurück zur Preisübersicht
        </Link>
        
        <div className="text-center mb-8">
          <img src="/images/logo-removebg-preview.png" alt="Demon (And) Angel Logo" className="h-16 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Demon (And) Angel</h1>
          <p className="text-gray-600">Dauerhafte Laser Haarentfernung Frankfurt</p>
          <p className="text-sm text-gray-500">Europa-Allee 43, 60327 Frankfurt am Main</p>
          <p className="text-sm text-gray-500">Tel: 015238228127</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Introduction */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Preisliste</h2>
          <p className="text-gray-600 mb-2">Transparente und faire Preise für Ihre dauerhafte Laser Haarentfernung</p>
          <p className="text-gray-600">Alle Preise verstehen sich pro Behandlung inklusive Mehrwertsteuer</p>
          <p className="text-gray-600">Für optimale Ergebnisse empfehlen wir 6-8 Behandlungen im Abstand von 4-8 Wochen</p>
          <p className="text-gray-600">Die erste Behandlung beinhaltet ein kostenloses Beratungsgespräch</p>
        </div>

        {/* Price Tables */}
        {kategorien.map((kategorie) => (
          <div key={kategorie.name} className="page-break-after">
            <h3 className="text-xl font-bold mb-2">{kategorie.name}</h3>
            <p className="text-gray-600 mb-4">{kategorie.beschreibung}</p>
            
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Zone</th>
                  <th className="border border-gray-300 px-4 py-2 text-right font-semibold">Preis</th>
                </tr>
              </thead>
              <tbody>
                {kategorie.zonen.map((item, index) => (
                  <tr key={item.zone} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border border-gray-300 px-4 py-2">{item.zone}</td>
                    <td className="border border-gray-300 px-4 py-2 text-right font-semibold">{item.preis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}

        {/* Important Notes */}
        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-bold mb-4">Wichtige Hinweise</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Alle Preise verstehen sich pro Behandlung inklusive Mehrwertsteuer</li>
            <li>• Für ein dauerhaftes Ergebnis sind in der Regel 6-8 Behandlungen erforderlich</li>
            <li>• Der Abstand zwischen den Behandlungen beträgt 4-8 Wochen</li>
            <li>• Die erste Behandlung beinhaltet ein kostenloses Beratungsgespräch</li>
            <li>• Wir akzeptieren Barzahlung, EC-Karte und alle gängigen Kreditkarten</li>
            <li>• Individuelle Angebote für größere Behandlungszonen auf Anfrage</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center mt-12">
          <h3 className="text-lg font-bold mb-4">Kontakt & Terminvereinbarung</h3>
          <p className="text-gray-600 mb-2">Vereinbaren Sie jetzt Ihren kostenlosen Beratungstermin</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+4915238228127" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              <Phone className="h-5 w-5" />
              015238228127
            </a>
            <a href="https://wa.me/49015238228127" className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
              <Phone className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-300 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Demon (And) Angel - Dauerhafte Laser Haarentfernung Frankfurt</p>
          <p>Stand: {new Date().toLocaleDateString('de-DE')}</p>
        </div>
      </div>

      {/* Print Button */}
      <div className="fixed bottom-4 right-4">
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 shadow-lg"
        >
          <Download className="h-5 w-5" />
          Drucken / PDF
        </button>
      </div>

      <style jsx>{`
        @media print {
          .fixed {
            display: none !important;
          }
          
          .page-break-after {
            page-break-after: always;
          }
          
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  )
}
