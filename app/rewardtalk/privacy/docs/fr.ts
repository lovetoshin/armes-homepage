import type { PrivacyDoc } from "../privacyDocs";

// 사실 정보(모든 언어 공통 — 번역하지 않는다)
const EMAIL = "lovetoshin@gmail.com";
const ADDRESS_FR =
  "425-80 Gyeongbok-daero, Jinjeop-eup, Namyangju-si, Gyeonggi-do, 4e étage, unité 6406 (Centre d'incubation d'entreprises de l'Université Kyungbok) [경기도 남양주시 진접읍 경복대로 425-80, 4층 6406호 (경복대학교 창업보육센터)]";

// ── Français ─────────────────────────────────────────────
export const fr: PrivacyDoc = {
  langName: "Français",
  title: "Politique de confidentialité de RewardTalk",
  subtitle:
    "ARMES Co., Ltd. (주식회사 아르메스, ci-après « la Société ») respecte les lois et réglementations applicables, notamment la « Loi sur la protection des renseignements personnels », la « Loi relative à la protection et à l'utilisation des informations de localisation » et la « Loi sur la promotion de l'utilisation du réseau de communication d'information et la protection de l'information, etc. », et met en œuvre la présente politique afin de protéger les renseignements personnels des utilisateurs.",
  updatedLabel: "Dernière mise à jour",
  updatedAt: "23 juin 2026",
  note: "La Société publie la présente politique de confidentialité au sein de l'application ainsi que sur les pages Web exploitées par la Société, afin que les utilisateurs puissent la consulter aisément à tout moment.",
  sections: [
    {
      num: "1",
      title: "Catégories de renseignements personnels collectés et modalités de collecte",
      body: [
        { type: "p", text: "La Société collecte les renseignements personnels suivants aux fins de la fourniture du service." },
        { type: "sub", text: "A. Lors de l'inscription et de la connexion" },
        {
          type: "ul",
          items: [
            { b: "Éléments obligatoires", t: " : adresse électronique, pseudonyme (nom de profil), informations d'authentification de connexion (identifiant de connexion sociale, identifiant de connexion Apple, etc.)" },
            { b: "Éléments facultatifs", t: " : photo de profil" },
          ],
        },
        { type: "sub", text: "B. Éléments collectés au cours de l'utilisation du service" },
        {
          type: "ul",
          items: [
            { b: "Informations de localisation", t: " : localisation du terminal fondée sur le GPS (latitude et longitude) — aux fins de la recherche des commerces affiliés à proximité et de la fourniture d'avantages fondés sur la localisation" },
            { b: "Contacts (carnet d'adresses)", t: " : accès uniquement lorsque l'utilisateur recourt à la fonction de partage de contacts, par exemple au sein des salons de discussion d'achat groupé" },
            { b: "Appareil photo et photos/médias", t: " : lors de la prise ou de la sélection d'une photo de profil, de la lecture d'un code QR ou de l'enregistrement d'images de produits (bons cadeaux)" },
            { b: "Informations relatives à l'appareil et à l'utilisation du service", t: " : identifiant de l'appareil, informations sur le système d'exploitation, jeton de notification push, historique d'utilisation de l'application, historique des tirages, participations et gains, historique de participation aux achats groupés" },
            { b: "Identifiant publicitaire", t: " : identifiant publicitaire destiné à la diffusion de publicités et à la prévention des utilisations frauduleuses" },
          ],
        },
        { type: "sub", text: "C. Modalités de collecte" },
        {
          type: "ul",
          items: [
            "Collecte par saisie directe de l'utilisateur ou par consentement aux autorisations du terminal, lors de l'inscription, de l'utilisation du service ou de la participation à des événements au sein de l'application",
            "Informations générées et collectées automatiquement au cours de l'utilisation du service",
          ],
        },
      ],
    },
    {
      num: "2",
      title: "Finalités de la collecte et de l'utilisation des renseignements personnels",
      body: [
        {
          type: "ul",
          items: [
            { b: "Identification et gestion des membres", t: " : fourniture de services réservés aux membres, vérification d'identité, prévention des utilisations frauduleuses" },
            { b: "Fourniture de services fondés sur la localisation", t: " : recherche de commerces affiliés et de points de vente à proximité, calcul des distances, fourniture de récompenses et d'avantages fondés sur la région" },
            { b: "Exploitation des services de récompense et de tirage", t: " : tirages par roulette/participation, gestion des gagnants, envoi des lots (bons cadeaux)" },
            { b: "Fonctions d'achat groupé et de communauté", t: " : messagerie, transactions, mise en relation entre vendeurs et acheteurs" },
            { b: "Envoi de notifications", t: " : envoi de notifications push telles que les avis de gain, les notifications de messagerie et les annonces" },
            { b: "Traitement des demandes des clients et règlement des litiges" },
            { b: "Amélioration du service et analyse statistique" },
            { b: "Diffusion de publicités", t: " : affichage de publicités au sein de l'application et mesure de leur efficacité" },
          ],
        },
      ],
    },
    {
      num: "3",
      title: "Durée de conservation et d'utilisation des renseignements personnels",
      body: [
        { type: "p", text: "En principe, la Société détruit sans délai les renseignements personnels dès que la finalité de leur collecte et de leur utilisation est atteinte ou dès que l'utilisateur demande la résiliation de son adhésion." },
        { type: "p", text: "Toutefois, lorsque leur conservation est requise en vertu des lois et réglementations applicables, ils sont conservés comme suit." },
        {
          type: "ul",
          items: [
            "Enregistrements relatifs aux contrats ou aux rétractations de commande : 5 ans (Loi sur le commerce électronique / 전자상거래법)",
            "Enregistrements relatifs au paiement et à la fourniture de biens : 5 ans (Loi sur le commerce électronique / 전자상거래법)",
            "Enregistrements relatifs aux réclamations des consommateurs ou au règlement des litiges : 3 ans (Loi sur le commerce électronique / 전자상거래법)",
            "Données confirmant l'utilisation et la fourniture d'informations de localisation : 6 mois (Loi relative aux informations de localisation / 위치정보법)",
            "Enregistrements des visites du service : 3 mois (Loi sur la protection du secret des communications / 통신비밀보호법)",
          ],
        },
      ],
    },
    {
      num: "4",
      title: "Communication des renseignements personnels à des tiers",
      body: [
        { type: "p", text: "La Société n'utilise les renseignements personnels des utilisateurs que dans les limites énoncées dans la présente politique et ne les communique pas à des tiers sans le consentement préalable de l'utilisateur. Les cas suivants font toutefois exception." },
        {
          type: "ul",
          items: [
            "Lorsque l'utilisateur y a préalablement consenti",
            "Lorsque cela est prévu par les lois et réglementations, ou lorsqu'un organe d'enquête en fait la demande à des fins d'investigation, conformément aux procédures et modalités prévues par la loi",
            "Lorsque, aux fins de l'exécution du service telle que l'envoi de lots (bons cadeaux), le recours à un prestataire de livraison ou d'expédition est nécessaire, la communication se limite alors aux informations strictement nécessaires à cette finalité",
          ],
        },
      ],
    },
    {
      num: "5",
      title: "Sous-traitance du traitement des renseignements personnels",
      body: [
        { type: "p", text: "Afin d'assurer la bonne fourniture du service, la Société confie à des prestataires externes les tâches de traitement des renseignements personnels indiquées ci-après." },
        {
          type: "table",
          headers: ["Sous-traitant", "Tâches confiées", "Durée de conservation et d'utilisation"],
          rows: [
            ["Supabase Inc.", "Stockage des données et exploitation de l'infrastructure serveur", "Jusqu'à la résiliation de l'adhésion ou la fin du contrat de sous-traitance"],
            ["Google LLC (AdMob)", "Diffusion de publicités au sein de l'application et traitement de l'identifiant publicitaire", "Jusqu'à la résiliation de l'adhésion ou la fin du contrat de sous-traitance"],
            ["Google LLC / Apple Inc.", "Envoi de notifications push, authentification de la connexion sociale", "Jusqu'à la résiliation de l'adhésion ou la fin du contrat de sous-traitance"],
          ],
        },
        { type: "p", text: "Lors de la conclusion d'un contrat de sous-traitance, la Société stipule les dispositions nécessaires, conformément aux lois et réglementations applicables, afin que les renseignements personnels soient gérés en toute sécurité." },
      ],
    },
    {
      num: "6",
      title: "Traitement des informations de localisation",
      body: [
        {
          type: "ul",
          items: [
            "La Société utilise les informations de localisation du terminal de l'utilisateur aux fins de la recherche des commerces affiliés à proximité et de la fourniture d'avantages fondés sur la localisation.",
            { b: "", t: "Les informations de localisation ne sont traitées que de manière temporaire, au moment de l'utilisation du service, et aucun suivi continu de la localisation n'est effectué." },
            "L'utilisateur peut à tout moment retirer l'autorisation de localisation dans les réglages de son terminal ; ce retrait peut entraîner des restrictions dans l'utilisation des fonctions fondées sur la localisation.",
          ],
        },
      ],
    },
    {
      num: "7",
      title: "Identifiant publicitaire et publicité personnalisée",
      body: [
        {
          type: "ul",
          items: [
            "La présente application diffuse des publicités par l'intermédiaire de Google AdMob, et un identifiant publicitaire (Advertising ID) peut être utilisé au cours de ce processus.",
            "L'utilisateur peut réinitialiser l'identifiant publicitaire ou limiter la publicité personnalisée dans les réglages du terminal > Google > menu Annonces.",
          ],
        },
      ],
    },
    {
      num: "8",
      title: "Droits de l'utilisateur et de son représentant légal et modalités d'exercice",
      body: [
        {
          type: "ul",
          items: [
            "L'utilisateur peut à tout moment consulter et rectifier ses propres renseignements personnels et peut, par la résiliation de son adhésion, retirer son consentement à la collecte et à l'utilisation de ses renseignements personnels.",
            "Toute demande de consultation, de rectification, de suppression ou de suspension du traitement des renseignements personnels adressée par écrit ou par courrier électronique au responsable de la protection des renseignements personnels indiqué ci-dessous fera l'objet de mesures prises sans délai.",
          ],
        },
      ],
    },
    {
      num: "9",
      title: "Renseignements personnels des enfants de moins de 14 ans",
      body: [
        { type: "p", text: "La Société n'accepte pas l'inscription des enfants de moins de 14 ans et ne collecte pas les renseignements personnels des enfants de moins de 14 ans." },
      ],
    },
    {
      num: "10",
      title: "Procédure et modalités de destruction des renseignements personnels",
      body: [
        {
          type: "ul",
          items: [
            { b: "Procédure de destruction", t: " : les renseignements personnels dont la finalité a été atteinte sont conservés pendant une certaine durée conformément à la politique interne et aux lois et réglementations applicables, puis détruits." },
            { b: "Modalités de destruction", t: " : les informations sous forme de fichiers électroniques sont supprimées selon un procédé technique empêchant toute récupération, et les documents papier sont déchiquetés ou incinérés." },
          ],
        },
      ],
    },
    {
      num: "11",
      title: "Mesures visant à garantir la sécurité des renseignements personnels",
      body: [
        {
          type: "ul",
          items: [
            "Réduction au minimum des droits d'accès aux renseignements personnels et contrôle des accès",
            "Application du chiffrement des canaux de transmission (SSL/TLS)",
            "Contrôle des accès et gestion de la sécurité de la base de données où sont stockés les renseignements personnels",
          ],
        },
      ],
    },
    {
      num: "12",
      title: "Responsable de la protection des renseignements personnels",
      body: [
        { type: "p", text: "L'utilisateur peut adresser au responsable indiqué ci-dessous ses demandes, réclamations et demandes de réparation relatives à la protection des renseignements personnels." },
        {
          type: "contact",
          rows: [
            { label: "Raison sociale", value: "ARMES Co., Ltd. (주식회사 아르메스)" },
            { label: "Représentant légal", value: "Shin Ji-han (신지한)" },
            { label: "Adresse", value: ADDRESS_FR },
            { label: "Responsable de la protection des renseignements personnels", value: "Shin Ji-han (신지한)" },
            { label: "Adresse électronique", value: EMAIL },
          ],
        },
        { type: "p", text: "Pour tout signalement ou toute consultation concernant une atteinte aux renseignements personnels, l'utilisateur peut également s'adresser aux organismes suivants." },
        {
          type: "ul",
          items: [
            "Centre de signalement des atteintes aux renseignements personnels (privacy.kisa.or.kr / 118 sans indicatif)",
            "Division des enquêtes sur la cybercriminalité du Parquet suprême (www.spo.go.kr / 1301 sans indicatif)",
            "Bureau des enquêtes sur la cybercriminalité de l'Agence nationale de police (cyberbureau.police.go.kr / 182 sans indicatif)",
          ],
        },
      ],
    },
    {
      num: "13",
      title: "Modification de la politique de confidentialité",
      body: [
        { type: "p", text: "La présente politique de confidentialité peut faire l'objet d'ajouts, de suppressions ou de modifications en raison de changements dans les lois et réglementations, les politiques ou les technologies de sécurité ; en cas de modification, celle-ci est notifiée par le biais des annonces au sein de l'application ou de la présente page." },
        {
          type: "ul",
          items: ["Date de publication : 23 juin 2026", "Date d'entrée en vigueur : 23 juin 2026"],
        },
      ],
    },
  ],
};
