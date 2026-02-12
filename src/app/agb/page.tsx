import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Allgemeine Geschäftsbedingungen',
  description: 'AGB von Demon (And) Angel - Laser Haarentfernung Frankfurt. Allgemeine Geschäftsbedingungen für unsere Dienstleistungen.',
}

export default function AGBPage() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          <span className="gradient-text">Allgemeine Geschäftsbedingungen</span>
        </h1>

        <div className="prose prose-invert max-w-none space-y-8">
          <div className="card">
            <h2 className="text-2xl font-semibold text-white mb-4">§ 1 Geltungsbereich</h2>
            <p className="text-white/70">
              (1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen Demon (And) Angel, 
              Europa-Allee 43, 60327 Frankfurt am Main (nachfolgend „Anbieter") und dem Kunden über Dienstleistungen 
              im Bereich der Laser-Haarentfernung.
            </p>
            <p className="text-white/70 mt-4">
              (2) Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, der Anbieter stimmt ihrer 
              Geltung ausdrücklich schriftlich zu.
            </p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold text-white mb-4">§ 2 Vertragsschluss und Terminvereinbarung</h2>
            <p className="text-white/70">
              (1) Die Darstellung der Dienstleistungen auf der Website stellt kein rechtlich bindendes Angebot, 
              sondern eine Aufforderung zur Terminvereinbarung dar.
            </p>
            <p className="text-white/70 mt-4">
              (2) Der Vertrag kommt durch die Bestätigung eines Termins durch den Anbieter zustande. Die Bestätigung 
              erfolgt per Telefon, WhatsApp oder E-Mail.
            </p>
            <p className="text-white/70 mt-4">
              (3) Termine können telefonisch unter +49 152 38228127, per WhatsApp oder per E-Mail an 
              info@demonandangel.com vereinbart werden.
            </p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold text-white mb-4">§ 3 Preise und Zahlung</h2>
            <p className="text-white/70">
              (1) Es gelten die zum Zeitpunkt der Terminvereinbarung auf der Website angegebenen Preise. 
              Alle Preise verstehen sich in Euro und beinhalten die gesetzliche Mehrwertsteuer.
            </p>
            <p className="text-white/70 mt-4">
              (2) Die Zahlung erfolgt unmittelbar nach der Behandlung in bar oder per EC-Karte.
            </p>
            <p className="text-white/70 mt-4">
              (3) Bei Buchung von Paketen oder Aktionsangeboten ist der Gesamtbetrag vor der ersten Behandlung fällig.
            </p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold text-white mb-4">§ 4 Terminabsage und Stornierung</h2>
            <p className="text-white/70">
              (1) Termine können bis 24 Stunden vor dem vereinbarten Termin kostenfrei storniert oder verschoben werden.
            </p>
            <p className="text-white/70 mt-4">
              (2) Bei Absagen, die weniger als 24 Stunden vor dem Termin erfolgen, oder bei Nichterscheinen ohne 
              Absage, behält sich der Anbieter vor, eine Ausfallgebühr in Höhe von 50% des vereinbarten 
              Behandlungspreises zu berechnen.
            </p>
            <p className="text-white/70 mt-4">
              (3) Der Anbieter behält sich vor, Termine aus wichtigem Grund (z.B. Krankheit) abzusagen. In diesem 
              Fall wird ein Ersatztermin angeboten.
            </p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold text-white mb-4">§ 5 Behandlung und Mitwirkungspflichten</h2>
            <p className="text-white/70">
              (1) Vor der ersten Behandlung findet ein Beratungsgespräch statt, in dem der Kunde über den 
              Behandlungsablauf, mögliche Risiken und Kontraindikationen aufgeklärt wird.
            </p>
            <p className="text-white/70 mt-4">
              (2) Der Kunde ist verpflichtet, vor jeder Behandlung wahrheitsgemäße Angaben zu seinem 
              Gesundheitszustand zu machen, insbesondere zu:
            </p>
            <ul className="list-disc list-inside text-white/70 mt-2 space-y-1">
              <li>Hauterkrankungen</li>
              <li>Medikamenteneinnahme (insbesondere photosensibilisierende Medikamente)</li>
              <li>Schwangerschaft</li>
              <li>Sonnenbäder oder Solariumbesuche in den letzten 2 Wochen</li>
              <li>Verwendung von Selbstbräunern</li>
            </ul>
            <p className="text-white/70 mt-4">
              (3) Der Kunde ist verpflichtet, die zu behandelnden Körperstellen vor der Behandlung zu rasieren 
              (idealerweise 24 Stunden vorher).
            </p>
            <p className="text-white/70 mt-4">
              (4) Der Anbieter behält sich vor, eine Behandlung abzulehnen, wenn Kontraindikationen vorliegen 
              oder der Kunde die erforderlichen Mitwirkungspflichten nicht erfüllt.
            </p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold text-white mb-4">§ 6 Haftung</h2>
            <p className="text-white/70">
              (1) Der Anbieter haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder 
              der Gesundheit, die auf einer vorsätzlichen oder fahrlässigen Pflichtverletzung beruhen.
            </p>
            <p className="text-white/70 mt-4">
              (2) Für sonstige Schäden haftet der Anbieter nur bei Vorsatz und grober Fahrlässigkeit.
            </p>
            <p className="text-white/70 mt-4">
              (3) Der Anbieter haftet nicht für Schäden, die durch falsche Angaben des Kunden oder durch 
              Nichtbeachtung der Vor- und Nachsorgehinweise entstehen.
            </p>
            <p className="text-white/70 mt-4">
              (4) Typische Nebenwirkungen wie vorübergehende Rötungen, leichte Schwellungen oder ein leichtes 
              Brennen nach der Behandlung stellen keinen Mangel der Dienstleistung dar.
            </p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold text-white mb-4">§ 7 Ergebnisse</h2>
            <p className="text-white/70">
              (1) Die Ergebnisse der Laser-Haarentfernung können individuell variieren und hängen von verschiedenen 
              Faktoren ab, wie Haarfarbe, Haarstruktur, Hauttyp und hormonellen Einflüssen.
            </p>
            <p className="text-white/70 mt-4">
              (2) Für optimale Ergebnisse werden in der Regel 4-6 Behandlungen im Abstand von 4-8 Wochen empfohlen.
            </p>
            <p className="text-white/70 mt-4">
              (3) Eine Garantie für vollständige und dauerhafte Haarentfernung kann nicht gegeben werden.
            </p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold text-white mb-4">§ 8 Datenschutz</h2>
            <p className="text-white/70">
              Die Erhebung und Verarbeitung personenbezogener Daten erfolgt gemäß unserer Datenschutzerklärung, 
              die auf unserer Website einsehbar ist.
            </p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold text-white mb-4">§ 9 Schlussbestimmungen</h2>
            <p className="text-white/70">
              (1) Es gilt das Recht der Bundesrepublik Deutschland.
            </p>
            <p className="text-white/70 mt-4">
              (2) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit 
              der übrigen Bestimmungen unberührt.
            </p>
            <p className="text-white/70 mt-4">
              (3) Gerichtsstand ist Frankfurt am Main, sofern der Kunde Kaufmann ist oder keinen allgemeinen 
              Gerichtsstand in Deutschland hat.
            </p>
          </div>

          <div className="card">
            <p className="text-white/60 text-sm">
              Stand: Februar 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
