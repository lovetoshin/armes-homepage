import type { PrivacyDoc } from "../privacyDocs";

// ── English ─────────────────────────────────────────────
export const en: PrivacyDoc = {
  langName: "English",
  title: "RewardTalk Privacy Policy",
  subtitle:
    "ARMES Co., Ltd. (hereinafter the \"Company\") complies with the Personal Information Protection Act, the Act on the Protection and Use of Location Information, the Act on Promotion of Information and Communications Network Utilization and Information Protection, and other relevant laws, and has established the following policy to protect users' personal information.",
  updatedLabel: "Last updated",
  updatedAt: "June 23, 2026",
  note: "The Company discloses this Privacy Policy within the app and on the web pages operated by the Company so that users may easily review it at any time.",
  sections: [
    {
      num: "1",
      title: "Personal Information Collected and Methods of Collection",
      body: [
        { type: "p", text: "The Company collects the following personal information in order to provide its services." },
        { type: "sub", text: "A. Upon membership registration and login" },
        {
          type: "ul",
          items: [
            { b: "Required items", t: ": email address, nickname (profile name), login authentication information (social login identifier, Apple login identifier, etc.)" },
            { b: "Optional items", t: ": profile photo" },
          ],
        },
        { type: "sub", text: "B. Items collected in the course of using the service" },
        {
          type: "ul",
          items: [
            { b: "Location information", t: ": the device's GPS-based location (latitude and longitude) — for the purpose of finding nearby merchants and providing location-based benefits" },
            { b: "Contacts (address book)", t: ": accessed only when the user uses the contact-sharing feature in a group-purchase chat room or the like" },
            { b: "Camera and photos/media", t: ": when taking or selecting a profile photo, scanning a QR code, or uploading product (gift voucher) images" },
            { b: "Device and service usage information", t: ": device identifier, OS information, push notification token, app usage records, draw/entry/winning history, group-purchase participation history" },
            { b: "Advertising identifier", t: ": advertising ID for providing advertisements and preventing fraudulent use" },
          ],
        },
        { type: "sub", text: "C. Methods of collection" },
        {
          type: "ul",
          items: [
            "Collected through the user's direct input or consent to device permissions during membership registration, service use, and event entry within the app",
            "Information automatically generated and collected in the course of using the service",
          ],
        },
      ],
    },
    {
      num: "2",
      title: "Purposes of Collection and Use of Personal Information",
      body: [
        {
          type: "ul",
          items: [
            { b: "Member identification and management", t: ": providing membership-based services, identity verification, prevention of fraudulent use" },
            { b: "Provision of location-based services", t: ": finding nearby merchants and stores, calculating distances, providing region-based rewards and benefits" },
            { b: "Operation of reward and draw services", t: ": roulette/entry draws, management of winners, dispatch of prizes (gift vouchers)" },
            { b: "Group-purchase and community features", t: ": chatting, transactions, connecting sellers and buyers" },
            { b: "Provision of notifications", t: ": sending push notifications such as winning notifications, chat notifications, and announcements" },
            { b: "Handling customer inquiries and resolving disputes" },
            { b: "Service improvement and statistical analysis" },
            { b: "Provision of advertisements", t: ": displaying in-app advertisements and measuring their effectiveness" },
          ],
        },
      ],
    },
    {
      num: "3",
      title: "Retention and Use Period of Personal Information",
      body: [
        { type: "p", text: "As a rule, the Company destroys personal information without delay once the purpose of collection and use has been achieved or the member has requested withdrawal." },
        { type: "p", text: "However, where retention is required under applicable laws, the Company retains the information as follows." },
        {
          type: "ul",
          items: [
            "Records on contracts or withdrawal of subscription: 5 years (Act on the Consumer Protection in Electronic Commerce (전자상거래법))",
            "Records on payment and the supply of goods, etc.: 5 years (Act on the Consumer Protection in Electronic Commerce (전자상거래법))",
            "Records on consumer complaints or dispute resolution: 3 years (Act on the Consumer Protection in Electronic Commerce (전자상거래법))",
            "Data confirming the use and provision of location information: 6 months (Act on the Protection and Use of Location Information (위치정보법))",
            "Service visit records: 3 months (Protection of Communications Secrets Act (통신비밀보호법))",
          ],
        },
      ],
    },
    {
      num: "4",
      title: "Provision of Personal Information to Third Parties",
      body: [
        { type: "p", text: "The Company uses users' personal information only within the scope disclosed in this policy and does not provide it to third parties without the user's prior consent. The following, however, are exceptions." },
        {
          type: "ul",
          items: [
            "Where the user has given prior consent",
            "Where required by the provisions of law, or where an investigative agency so requests in accordance with the procedures and methods prescribed by law for investigative purposes",
            "Where delivery/dispatch on the Company's behalf is necessary to perform the service, such as sending prizes (gift vouchers), in which case only the minimum information necessary for that purpose is provided",
          ],
        },
      ],
    },
    {
      num: "5",
      title: "Entrustment of Personal Information Processing",
      body: [
        { type: "p", text: "To provide its services smoothly, the Company entrusts personal information processing tasks to external parties as follows." },
        {
          type: "table",
          headers: ["Trustee", "Entrusted Task", "Retention and Use Period"],
          rows: [
            ["Supabase Inc.", "Data storage and server infrastructure operation", "Until membership withdrawal or termination of the entrustment agreement"],
            ["Google LLC (AdMob)", "Provision of in-app advertisements and processing of advertising identifiers", "Until membership withdrawal or termination of the entrustment agreement"],
            ["Google LLC / Apple Inc.", "Sending push notifications, social login authentication", "Until membership withdrawal or termination of the entrustment agreement"],
          ],
        },
        { type: "p", text: "When entering into entrustment agreements, the Company stipulates the matters necessary under applicable laws to ensure that personal information is managed securely." },
      ],
    },
    {
      num: "6",
      title: "Processing of Location Information",
      body: [
        {
          type: "ul",
          items: [
            "The Company uses the location information of the user's device to find nearby merchants and provide location-based benefits.",
            { b: "", t: "Location information is processed only temporarily at the time of service use, and no continuous location tracking is performed." },
            "The user may withdraw the location permission at any time in the device settings, and doing so may limit the use of location-based features.",
          ],
        },
      ],
    },
    {
      num: "7",
      title: "Advertising Identifier and Personalized Advertising",
      body: [
        {
          type: "ul",
          items: [
            "This app provides advertisements through Google AdMob, and in this process an advertising identifier (Advertising ID) may be used.",
            "The user may reset the advertising identifier or restrict personalized advertising in the device settings under Settings > Google > Ads.",
          ],
        },
      ],
    },
    {
      num: "8",
      title: "Rights of Users and Legal Representatives and How to Exercise Them",
      body: [
        {
          type: "ul",
          items: [
            "The user may view and modify their personal information at any time, and may withdraw consent to the collection and use of personal information by withdrawing their membership.",
            "Requests to access, correct, delete, or suspend the processing of personal information may be made in writing or by email to the Personal Information Protection Officer below, and the Company will take action without delay.",
          ],
        },
      ],
    },
    {
      num: "9",
      title: "Personal Information of Children Under 14",
      body: [
        { type: "p", text: "The Company does not accept membership registration from children under the age of 14 and does not collect personal information from children under the age of 14." },
      ],
    },
    {
      num: "10",
      title: "Procedure and Method of Destroying Personal Information",
      body: [
        {
          type: "ul",
          items: [
            { b: "Destruction procedure", t: ": personal information for which the purpose has been achieved is stored for a certain period in accordance with internal policies and applicable laws, and is then destroyed." },
            { b: "Destruction method", t: ": information in electronic file form is deleted using a technical method that renders it unrecoverable, and paper documents are shredded or incinerated." },
          ],
        },
      ],
    },
    {
      num: "11",
      title: "Measures to Ensure the Security of Personal Information",
      body: [
        {
          type: "ul",
          items: [
            "Minimization of access rights to personal information and access control",
            "Application of transmission encryption (SSL/TLS)",
            "Access control and security management for the database in which personal information is stored",
          ],
        },
      ],
    },
    {
      num: "12",
      title: "Personal Information Protection Officer",
      body: [
        { type: "p", text: "Users may direct inquiries, complaint handling, and remedy for damage relating to personal information protection to the person in charge below." },
        {
          type: "contact",
          rows: [
            { label: "Company name", value: "주식회사 아르메스 (ARMES Co., Ltd.)" },
            { label: "Representative", value: "신지한 (Shin Ji-han)" },
            { label: "Address", value: "경기도 남양주시 진접읍 경복대로 425-80, 4층 6406호 (경복대학교 창업보육센터) (Room 6406, 4th Floor, 425-80 Gyeongbok-daero, Jinjeop-eup, Namyangju-si, Gyeonggi-do, Republic of Korea (Kyungbok University Business Incubation Center))" },
            { label: "Personal Information Protection Officer", value: "신지한 (Shin Ji-han)" },
            { label: "Email", value: "lovetoshin@gmail.com" },
          ],
        },
        { type: "p", text: "If you need to report or consult about other personal information infringements, you may contact the following organizations." },
        {
          type: "ul",
          items: [
            "Personal Information Infringement Report Center (privacy.kisa.or.kr / 118 without an area code)",
            "Supreme Prosecutors' Office Cyber Investigation Division (www.spo.go.kr / 1301 without an area code)",
            "National Police Agency Cyber Investigation Bureau (cyberbureau.police.go.kr / 182 without an area code)",
          ],
        },
      ],
    },
    {
      num: "13",
      title: "Changes to the Privacy Policy",
      body: [
        { type: "p", text: "This Privacy Policy may be supplemented, deleted, or amended in accordance with changes in laws, policies, or security technology, and any changes will be announced through in-app notices or this page." },
        {
          type: "ul",
          items: ["Date of announcement: June 23, 2026", "Effective date: June 23, 2026"],
        },
      ],
    },
  ],
};
