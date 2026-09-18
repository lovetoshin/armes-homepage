import type { PrivacyDoc } from "../privacyDocs";

// 사실 정보(모든 언어 공통 — 번역하지 않는다)
const EMAIL = "lovetoshin@gmail.com";
const ADDRESS_DE =
  "4. Etage, Raum 6406, 425-80 Gyeongbok-daero, Jinjeop-eup, Namyangju-si, Gyeonggi-do, Republik Korea (Gründerzentrum der Kyungbok University / 경기도 남양주시 진접읍 경복대로 425-80, 4층 6406호, 경복대학교 창업보육센터)";

// ── Deutsch (Übersetzung) ─────────────────────────────────────────
export const de: PrivacyDoc = {
  langName: "Deutsch",
  title: "Datenschutzrichtlinie von RewardTalk",
  subtitle:
    "Die ARMES Co., Ltd. (주식회사 아르메스, nachfolgend „das Unternehmen“) hält die einschlägigen Rechtsvorschriften ein, darunter das Gesetz zum Schutz personenbezogener Daten (개인정보 보호법), das Gesetz über den Schutz und die Nutzung von Standortdaten u. a. (위치정보의 보호 및 이용 등에 관한 법률) sowie das Gesetz zur Förderung der Nutzung von Informations- und Kommunikationsnetzen und zum Datenschutz u. a. (정보통신망 이용촉진 및 정보보호 등에 관한 법률), und hat zum Schutz der personenbezogenen Daten der Nutzer die folgende Datenschutzrichtlinie aufgestellt.",
  updatedLabel: "Zuletzt aktualisiert",
  updatedAt: "23. Juni 2026",
  note: "Das Unternehmen veröffentlicht diese Datenschutzrichtlinie innerhalb der App sowie auf den vom Unternehmen betriebenen Webseiten, damit die Nutzer sie jederzeit leicht einsehen können.",
  sections: [
    {
      num: "1",
      title: "Erhobene Kategorien personenbezogener Daten und Erhebungsmethoden",
      body: [
        { type: "p", text: "Zur Erbringung des Dienstes erhebt das Unternehmen die nachstehenden personenbezogenen Daten." },
        { type: "sub", text: "a. Bei der Registrierung und Anmeldung" },
        {
          type: "ul",
          items: [
            { b: "Pflichtangaben", t: ": E-Mail-Adresse, Nickname (Profilname), Anmelde-Authentifizierungsdaten (Kennungen für Social Login, Apple-Login-Kennungen u. a.)" },
            { b: "Freiwillige Angaben", t: ": Profilbild" },
          ],
        },
        { type: "sub", text: "b. Während der Nutzung des Dienstes erhobene Angaben" },
        {
          type: "ul",
          items: [
            { b: "Standortdaten", t: ": GPS-basierter Standort des Endgeräts (Breiten- und Längengrad) — zum Zweck der Suche nach Partnergeschäften in der Umgebung und der Bereitstellung standortbezogener Vorteile" },
            { b: "Kontakte (Adressbuch)", t: ": Ein Zugriff erfolgt ausschließlich dann, wenn der Nutzer die Funktion zur Weitergabe von Kontakten, etwa in Gruppenkauf-Chaträumen, verwendet" },
            { b: "Kamera sowie Fotos/Medien", t: ": beim Aufnehmen bzw. Auswählen eines Profilbildes, beim Scannen von QR-Codes und beim Hochladen von Produktbildern (Gutschein-/Gifticon-Bildern)" },
            { b: "Geräte- und Dienstnutzungsdaten", t: ": Gerätekennung, Betriebssysteminformationen, Push-Benachrichtigungs-Token, App-Nutzungsverlauf, Verlauf von Verlosungen, Teilnahmen und Gewinnen, Verlauf der Teilnahme an Gruppenkäufen" },
            { b: "Werbekennung", t: ": Werbe-ID zur Bereitstellung von Werbung und zur Verhinderung missbräuchlicher Nutzung" },
          ],
        },
        { type: "sub", text: "c. Erhebungsmethoden" },
        {
          type: "ul",
          items: [
            "Erhebung durch direkte Eingabe des Nutzers oder durch dessen Einwilligung in Geräteberechtigungen im Rahmen der Registrierung, der Nutzung des Dienstes und der Teilnahme an Veranstaltungen innerhalb der App",
            "Während der Nutzung des Dienstes automatisch erzeugte und erhobene Informationen",
          ],
        },
      ],
    },
    {
      num: "2",
      title: "Zwecke der Erhebung und Nutzung personenbezogener Daten",
      body: [
        {
          type: "ul",
          items: [
            { b: "Identifizierung und Verwaltung der Mitglieder", t: ": Bereitstellung mitgliedschaftsbasierter Dienste, Identitätsprüfung, Verhinderung missbräuchlicher Nutzung" },
            { b: "Bereitstellung standortbezogener Dienste", t: ": Suche nach Partnergeschäften und Filialen in der Umgebung, Entfernungsberechnung, Bereitstellung regionaler Prämien und Vorteile" },
            { b: "Betrieb der Prämien- und Verlosungsdienste", t: ": Roulette-/Teilnahme-Verlosungen, Verwaltung der Gewinner, Versand von Gewinnen (Gutscheinen/Gifticons)" },
            { b: "Gruppenkauf- und Community-Funktionen", t: ": Chat, Transaktionen, Verbindung zwischen Verkäufern und Käufern" },
            { b: "Bereitstellung von Benachrichtigungen", t: ": Versand von Push-Benachrichtigungen wie Gewinnbenachrichtigungen, Chat-Benachrichtigungen und Bekanntmachungen" },
            { b: "Bearbeitung von Kundenanfragen und Beilegung von Streitigkeiten" },
            { b: "Verbesserung des Dienstes und statistische Auswertung" },
            { b: "Bereitstellung von Werbung", t: ": Einblendung von Werbung innerhalb der App und Messung der Werbewirkung" },
          ],
        },
      ],
    },
    {
      num: "3",
      title: "Aufbewahrungs- und Nutzungsdauer personenbezogener Daten",
      body: [
        { type: "p", text: "Das Unternehmen vernichtet die personenbezogenen Daten grundsätzlich unverzüglich, sobald der Zweck der Erhebung und Nutzung erreicht ist oder das Mitglied die Kündigung seiner Mitgliedschaft beantragt." },
        { type: "p", text: "Sofern eine Aufbewahrung nach den einschlägigen Rechtsvorschriften erforderlich ist, werden die Daten jedoch wie folgt aufbewahrt." },
        {
          type: "ul",
          items: [
            "Aufzeichnungen über Verträge oder Widerruf von Angeboten: 5 Jahre (Gesetz über den elektronischen Geschäftsverkehr / 전자상거래법)",
            "Aufzeichnungen über Zahlungen und die Lieferung von Waren u. a.: 5 Jahre (Gesetz über den elektronischen Geschäftsverkehr / 전자상거래법)",
            "Aufzeichnungen über Verbraucherbeschwerden oder die Beilegung von Streitigkeiten: 3 Jahre (Gesetz über den elektronischen Geschäftsverkehr / 전자상거래법)",
            "Nachweisdaten über die Nutzung und Bereitstellung von Standortdaten: 6 Monate (Gesetz über Standortdaten / 위치정보법)",
            "Aufzeichnungen über den Dienstbesuch: 3 Monate (Gesetz zum Schutz des Kommunikationsgeheimnisses / 통신비밀보호법)",
          ],
        },
      ],
    },
    {
      num: "4",
      title: "Weitergabe personenbezogener Daten an Dritte",
      body: [
        { type: "p", text: "Das Unternehmen nutzt die personenbezogenen Daten der Nutzer ausschließlich im Rahmen des in dieser Richtlinie mitgeteilten Umfangs und gibt sie ohne vorherige Einwilligung des Nutzers nicht an Dritte weiter. In den folgenden Fällen gelten jedoch Ausnahmen." },
        {
          type: "ul",
          items: [
            "wenn der Nutzer zuvor eingewilligt hat",
            "wenn dies aufgrund gesetzlicher Bestimmungen erfolgt oder eine Ermittlungsbehörde zu Ermittlungszwecken nach dem gesetzlich festgelegten Verfahren und in der gesetzlich festgelegten Weise ein entsprechendes Ersuchen stellt",
            "wenn zur Erbringung des Dienstes, etwa für den Versand von Gewinnen (Gutscheinen/Gifticons), eine Beauftragung von Zustell- oder Versanddienstleistern erforderlich ist; in diesem Fall werden nur die für den jeweiligen Zweck erforderlichen Mindestangaben weitergegeben",
          ],
        },
      ],
    },
    {
      num: "5",
      title: "Auftragsverarbeitung personenbezogener Daten",
      body: [
        { type: "p", text: "Zur reibungslosen Erbringung des Dienstes beauftragt das Unternehmen externe Auftragnehmer wie folgt mit der Verarbeitung personenbezogener Daten." },
        {
          type: "table",
          headers: ["Auftragnehmer", "Beauftragte Tätigkeit", "Aufbewahrungs- und Nutzungsdauer"],
          rows: [
            ["Supabase Inc.", "Datenspeicherung und Betrieb der Server-Infrastruktur", "bis zur Kündigung der Mitgliedschaft oder Beendigung des Auftragsvertrags"],
            ["Google LLC (AdMob)", "Bereitstellung von Werbung innerhalb der App und Verarbeitung der Werbekennung", "bis zur Kündigung der Mitgliedschaft oder Beendigung des Auftragsvertrags"],
            ["Google LLC / Apple Inc.", "Versand von Push-Benachrichtigungen, Authentifizierung des Social Logins", "bis zur Kündigung der Mitgliedschaft oder Beendigung des Auftragsvertrags"],
          ],
        },
        { type: "p", text: "Das Unternehmen legt beim Abschluss des Auftragsvertrags die nach den einschlägigen Rechtsvorschriften erforderlichen Punkte fest, damit die personenbezogenen Daten sicher verwaltet werden können." },
      ],
    },
    {
      num: "6",
      title: "Verarbeitung von Standortdaten",
      body: [
        {
          type: "ul",
          items: [
            "Das Unternehmen nutzt die Standortdaten des Endgeräts der Nutzer, um Partnergeschäfte in der Umgebung zu finden und standortbezogene Vorteile bereitzustellen.",
            { b: "", t: "Die Standortdaten werden nur zum Zeitpunkt der Nutzung des Dienstes vorübergehend verarbeitet; eine kontinuierliche Standortverfolgung findet nicht statt." },
            "Der Nutzer kann die Standortberechtigung jederzeit in den Geräteeinstellungen widerrufen; im Falle eines Widerrufs kann die Nutzung standortbezogener Funktionen eingeschränkt sein.",
          ],
        },
      ],
    },
    {
      num: "7",
      title: "Werbekennung und personalisierte Werbung",
      body: [
        {
          type: "ul",
          items: [
            "Diese App stellt Werbung über Google AdMob bereit, wobei in diesem Zusammenhang eine Werbekennung (Advertising ID) verwendet werden kann.",
            "Der Nutzer kann die Werbekennung im Menü Geräteeinstellungen > Google > Werbung zurücksetzen oder personalisierte Werbung einschränken.",
          ],
        },
      ],
    },
    {
      num: "8",
      title: "Rechte der Nutzer und ihrer gesetzlichen Vertreter sowie Ausübung dieser Rechte",
      body: [
        {
          type: "ul",
          items: [
            "Der Nutzer kann seine personenbezogenen Daten jederzeit einsehen und berichtigen und durch Kündigung seiner Mitgliedschaft seine Einwilligung in die Erhebung und Nutzung personenbezogener Daten widerrufen.",
            "Anträge auf Einsicht, Berichtigung, Löschung oder Aussetzung der Verarbeitung personenbezogener Daten können schriftlich oder per E-Mail an den nachstehenden Datenschutzbeauftragten gerichtet werden; wir werden unverzüglich die erforderlichen Maßnahmen ergreifen.",
          ],
        },
      ],
    },
    {
      num: "9",
      title: "Personenbezogene Daten von Kindern unter 14 Jahren",
      body: [
        { type: "p", text: "Das Unternehmen nimmt keine Registrierung von Kindern unter 14 Jahren an und erhebt keine personenbezogenen Daten von Kindern unter 14 Jahren." },
      ],
    },
    {
      num: "10",
      title: "Verfahren und Methoden zur Vernichtung personenbezogener Daten",
      body: [
        {
          type: "ul",
          items: [
            { b: "Vernichtungsverfahren", t: ": Personenbezogene Daten, deren Zweck erreicht ist, werden nach den internen Richtlinien und den einschlägigen Rechtsvorschriften für einen bestimmten Zeitraum gespeichert und anschließend vernichtet." },
            { b: "Vernichtungsmethode", t: ": Informationen in Form elektronischer Dateien werden mit einem technischen Verfahren gelöscht, das eine Wiederherstellung ausschließt; Papierdokumente werden geschreddert oder verbrannt." },
          ],
        },
      ],
    },
    {
      num: "11",
      title: "Maßnahmen zur Gewährleistung der Sicherheit personenbezogener Daten",
      body: [
        {
          type: "ul",
          items: [
            "Minimierung der Zugriffsberechtigungen für personenbezogene Daten und Zugriffskontrolle",
            "Anwendung einer Verschlüsselung der Übertragungsstrecke (SSL/TLS)",
            "Zugriffskontrolle und Sicherheitsverwaltung für die Datenbank, in der personenbezogene Daten gespeichert werden",
          ],
        },
      ],
    },
    {
      num: "12",
      title: "Datenschutzbeauftragter",
      body: [
        { type: "p", text: "Der Nutzer kann sich mit Anfragen, Beschwerden, Ansprüchen auf Abhilfe u. a. im Zusammenhang mit dem Schutz personenbezogener Daten an die nachstehende zuständige Person wenden." },
        {
          type: "contact",
          rows: [
            { label: "Firmenname", value: "주식회사 아르메스 (ARMES Co., Ltd.)" },
            { label: "Gesetzlicher Vertreter", value: "신지한 (Shin Ji-han)" },
            { label: "Anschrift", value: ADDRESS_DE },
            { label: "Datenschutzbeauftragter", value: "신지한 (Shin Ji-han)" },
            { label: "E-Mail", value: EMAIL },
          ],
        },
        { type: "p", text: "Falls Sie eine Meldung erstatten oder eine Beratung zu weiteren Verletzungen des Schutzes personenbezogener Daten benötigen, können Sie sich an die nachstehenden Stellen wenden." },
        {
          type: "ul",
          items: [
            "Meldestelle für Verletzungen personenbezogener Daten / 개인정보침해신고센터 (privacy.kisa.or.kr / ohne Vorwahl 118)",
            "Cyber-Ermittlungsabteilung der Obersten Staatsanwaltschaft / 대검찰청 사이버수사과 (www.spo.go.kr / ohne Vorwahl 1301)",
            "Cyber-Ermittlungsbüro der Nationalen Polizeibehörde / 경찰청 사이버수사국 (cyberbureau.police.go.kr / ohne Vorwahl 182)",
          ],
        },
      ],
    },
    {
      num: "13",
      title: "Änderung der Datenschutzrichtlinie",
      body: [
        { type: "p", text: "Diese Datenschutzrichtlinie kann aufgrund von Änderungen der Rechtsvorschriften, der Richtlinien oder der Sicherheitstechnik ergänzt, gestrichen oder geändert werden; im Falle einer Änderung wird diese über die Bekanntmachungen innerhalb der App oder über diese Seite mitgeteilt." },
        {
          type: "ul",
          items: ["Datum der Bekanntmachung: 23. Juni 2026", "Datum des Inkrafttretens: 23. Juni 2026"],
        },
      ],
    },
  ],
};
