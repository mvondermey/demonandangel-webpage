import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung von Demon (And) Angel - Laser Haarentfernung Frankfurt. Informationen zum Datenschutz gemäß DSGVO.',
}

export default function DatenschutzPage() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          <span className="gradient-text">Datenschutzerklärung</span>
        </h1>

        <div className="prose prose-invert max-w-none space-y-8">
          <div className="card">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-xl font-semibold text-white mb-3">Allgemeine Hinweise</h3>
            <p className="text-white/70">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
              persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen 
              Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Verantwortliche Stelle</h2>
            <p className="text-white/70">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="text-white/70 mt-4">
              Demon (And) Angel<br />
              Europa-Allee 43<br />
              60327 Frankfurt am Main<br />
              Deutschland
            </p>
            <p className="text-white/70 mt-4">
              Telefon: +49 152 38228127<br />
              E-Mail: info@demonandangel.com
            </p>
            <p className="text-white/70 mt-4">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen 
              über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
            </p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold text-white mb-4">3. Datenerfassung auf dieser Website</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3">Cookies</h3>
            <p className="text-white/70">
              Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf 
              Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung 
              (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies 
              werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät 
              gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
            </p>
            <p className="text-white/70 mt-4">
              Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-Party-Cookies). 
              Third-Party-Cookies ermöglichen die Einbindung bestimmter Dienstleistungen von Drittunternehmen innerhalb 
              von Webseiten (z.B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Server-Log-Dateien</h3>
            <p className="text-white/70">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
              die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside text-white/70 mt-2 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="text-white/70 mt-4">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser 
              Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Anfrage per E-Mail, Telefon oder WhatsApp</h3>
            <p className="text-white/70">
              Wenn Sie uns per E-Mail, Telefon oder WhatsApp kontaktieren, wird Ihre Anfrage inklusive aller daraus 
              hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei 
              uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="text-white/70 mt-4">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage 
              mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen 
              erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse 
              an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf 
              Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
            </p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold text-white mb-4">4. Google Tag Manager</h2>
            <p className="text-white/70">
              Diese Website nutzt den Google Tag Manager. Der Google Tag Manager ist eine Lösung, mit der wir 
              sog. Website-Tags über eine Oberfläche verwalten können. Der Tag Manager selbst (der die Tags 
              implementiert) ist eine cookielose Domain und erfasst keine personenbezogenen Daten. Der Tag Manager 
              sorgt für die Auslösung anderer Tags, die ihrerseits unter Umständen Daten erfassen. Google Tag Manager 
              greift nicht auf diese Daten zu. Wenn auf Domain- oder Cookie-Ebene eine Deaktivierung vorgenommen 
              wurde, bleibt diese für alle Tracking-Tags bestehen, die mit Google Tag Manager implementiert werden.
            </p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold text-white mb-4">5. Ihre Rechte</h2>
            <p className="text-white/70">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
              gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung 
              oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt 
              haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das 
              Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten 
              zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
            <p className="text-white/70 mt-4">
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
            </p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold text-white mb-4">6. Widerspruch gegen Werbe-E-Mails</h2>
            <p className="text-white/70">
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von 
              nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. 
              Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten 
              Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
            </p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold text-white mb-4">7. SSL- bzw. TLS-Verschlüsselung</h2>
            <p className="text-white/70">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie 
              zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. 
              TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des 
              Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
            <p className="text-white/70 mt-4">
              Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, 
              nicht von Dritten mitgelesen werden.
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
