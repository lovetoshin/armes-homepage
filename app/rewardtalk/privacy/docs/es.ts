import type { PrivacyDoc } from "../privacyDocs";

// 사실 정보(모든 언어 공통 — 번역하지 않는다)
const EMAIL = "lovetoshin@gmail.com";
const ADDRESS_ES =
  "Gyeongbok-daero 425-80, 4.º piso, Sala 6406, Jinjeop-eup, Namyangju-si, Gyeonggi-do, República de Corea (Centro de Incubación de Empresas de la Universidad Kyungbok) [경기도 남양주시 진접읍 경복대로 425-80, 4층 6406호 (경복대학교 창업보육센터)]";

// ── Español ─────────────────────────────────────────────
export const es: PrivacyDoc = {
  langName: "Español",
  title: "Política de Privacidad de RewardTalk",
  subtitle:
    "ARMES Co., Ltd. (주식회사 아르메스) (en adelante, la «Empresa») cumple con las leyes y reglamentos aplicables, incluidas la «Ley de Protección de Datos Personales», la «Ley sobre la Protección y el Uso de la Información de Localización» y la «Ley sobre el Fomento del Uso de Redes de Información y Comunicaciones y la Protección de Datos, entre otros», y establece la siguiente política de tratamiento con el fin de proteger los datos personales de los usuarios.",
  updatedLabel: "Última actualización",
  updatedAt: "23 de junio de 2026",
  note: "La Empresa publica la presente Política de Privacidad dentro de la aplicación y en las páginas web que opera, de modo que los usuarios puedan consultarla fácilmente en cualquier momento.",
  sections: [
    {
      num: "1",
      title: "Categorías de datos personales recopilados y métodos de recopilación",
      body: [
        { type: "p", text: "La Empresa recopila los siguientes datos personales para la prestación del servicio." },
        { type: "sub", text: "a. En el momento del registro de miembro e inicio de sesión" },
        {
          type: "ul",
          items: [
            { b: "Datos obligatorios", t: ": dirección de correo electrónico, apodo (nombre de perfil), información de autenticación de inicio de sesión (identificador de inicio de sesión social, identificador de Apple Login, entre otros)." },
            { b: "Datos opcionales", t: ": fotografía de perfil." },
          ],
        },
        { type: "sub", text: "b. Datos recopilados durante el uso del servicio" },
        {
          type: "ul",
          items: [
            { b: "Información de localización", t: ": ubicación del dispositivo basada en GPS (latitud y longitud), con el fin de buscar comercios afiliados cercanos y ofrecer beneficios basados en la ubicación." },
            { b: "Contactos (agenda)", t: ": se accede únicamente cuando el usuario utiliza la función de compartir contactos en las salas de chat de compra conjunta u otros espacios." },
            { b: "Cámara y fotos/multimedia", t: ": al tomar o seleccionar la fotografía de perfil, escanear códigos QR o registrar imágenes de productos (cupones de regalo)." },
            { b: "Información del dispositivo y de uso del servicio", t: ": identificador del dispositivo, información del sistema operativo, token de notificaciones push, registros de uso de la aplicación, historial de sorteos, participaciones y premios, e historial de participación en compras conjuntas." },
            { b: "Identificador publicitario", t: ": identificador publicitario para la provisión de publicidad y la prevención de usos fraudulentos." },
          ],
        },
        { type: "sub", text: "c. Métodos de recopilación" },
        {
          type: "ul",
          items: [
            "Recopilados mediante la introducción directa por parte del usuario o el consentimiento de los permisos del dispositivo durante el registro de miembro, el uso del servicio y la participación en eventos dentro de la aplicación.",
            "Información generada y recopilada de forma automática durante el uso del servicio.",
          ],
        },
      ],
    },
    {
      num: "2",
      title: "Finalidad de la recopilación y del uso de los datos personales",
      body: [
        {
          type: "ul",
          items: [
            { b: "Identificación y gestión de miembros", t: ": prestación de servicios para miembros, verificación de identidad y prevención de usos fraudulentos." },
            { b: "Prestación de servicios basados en la ubicación", t: ": búsqueda de comercios y establecimientos afiliados cercanos, cálculo de distancias, y provisión de recompensas y beneficios basados en la zona." },
            { b: "Operación de servicios de recompensas y sorteos", t: ": sorteos por ruleta o participación, gestión de ganadores y envío de premios (cupones de regalo)." },
            { b: "Funciones de compra conjunta y comunidad", t: ": chat, transacciones y conexión entre vendedores y compradores." },
            { b: "Provisión de notificaciones", t: ": envío de notificaciones push, como avisos de premios, notificaciones de chat y anuncios." },
            { b: "Atención de consultas de clientes y resolución de controversias." },
            { b: "Mejora del servicio y análisis estadístico." },
            { b: "Provisión de publicidad", t: ": exhibición de anuncios dentro de la aplicación y medición de su eficacia." },
          ],
        },
      ],
    },
    {
      num: "3",
      title: "Período de conservación y uso de los datos personales",
      body: [
        { type: "p", text: "Por regla general, la Empresa destruye los datos personales sin demora una vez alcanzada la finalidad de su recopilación y uso o cuando el usuario solicita la baja como miembro." },
        { type: "p", text: "No obstante, cuando su conservación sea necesaria conforme a las leyes y reglamentos aplicables, los datos se conservarán del siguiente modo." },
        {
          type: "ul",
          items: [
            "Registros relativos a contratos o a la revocación de suscripciones: 5 años (Ley de Comercio Electrónico).",
            "Registros relativos al pago y al suministro de bienes: 5 años (Ley de Comercio Electrónico).",
            "Registros relativos a reclamaciones o controversias de consumidores: 3 años (Ley de Comercio Electrónico).",
            "Datos de verificación del uso y la provisión de información de localización: 6 meses (Ley de Información de Localización).",
            "Registros de visitas al servicio: 3 meses (Ley de Protección del Secreto de las Comunicaciones).",
          ],
        },
      ],
    },
    {
      num: "4",
      title: "Cesión de datos personales a terceros",
      body: [
        { type: "p", text: "La Empresa utiliza los datos personales del usuario únicamente dentro del alcance comunicado en la presente política y no los cede a terceros sin el consentimiento previo del usuario. No obstante, se exceptúan los siguientes casos." },
        {
          type: "ul",
          items: [
            "Cuando el usuario haya prestado su consentimiento previo.",
            "Cuando así lo dispongan las leyes y reglamentos, o cuando exista un requerimiento de una autoridad investigadora, con fines de investigación, de acuerdo con los procedimientos y métodos establecidos por la ley.",
            "Cuando, para la ejecución del servicio —como el envío de premios (cupones de regalo)—, sea necesaria la intermediación de entrega o envío, limitándose a la información mínima necesaria para dicha finalidad.",
          ],
        },
      ],
    },
    {
      num: "5",
      title: "Encargo del tratamiento de datos personales",
      body: [
        { type: "p", text: "Para la prestación fluida del servicio, la Empresa encarga a terceros las tareas de tratamiento de datos personales del siguiente modo." },
        {
          type: "table",
          headers: ["Encargado del tratamiento", "Tarea encomendada", "Período de conservación y uso"],
          rows: [
            ["Supabase Inc.", "Almacenamiento de datos y operación de la infraestructura de servidores", "Hasta la baja del miembro o la finalización del contrato de encargo"],
            ["Google LLC (AdMob)", "Provisión de publicidad dentro de la aplicación y tratamiento del identificador publicitario", "Hasta la baja del miembro o la finalización del contrato de encargo"],
            ["Google LLC / Apple Inc.", "Envío de notificaciones push y autenticación de inicio de sesión social", "Hasta la baja del miembro o la finalización del contrato de encargo"],
          ],
        },
        { type: "p", text: "Al celebrar los contratos de encargo, la Empresa estipula los aspectos necesarios conforme a las leyes y reglamentos aplicables para que los datos personales se gestionen de forma segura." },
      ],
    },
    {
      num: "6",
      title: "Tratamiento de la información de localización",
      body: [
        {
          type: "ul",
          items: [
            "La Empresa utiliza la información de localización del dispositivo del usuario para la búsqueda de comercios afiliados cercanos y la provisión de beneficios basados en la ubicación.",
            { b: "", t: "La información de localización se trata únicamente de forma temporal en el momento del uso del servicio y no se realiza un seguimiento continuo de la ubicación." },
            "El usuario puede revocar en cualquier momento el permiso de ubicación desde la configuración del dispositivo; en tal caso, el uso de las funciones basadas en la ubicación puede quedar limitado.",
          ],
        },
      ],
    },
    {
      num: "7",
      title: "Identificador publicitario y publicidad personalizada",
      body: [
        {
          type: "ul",
          items: [
            "Esta aplicación ofrece publicidad a través de Google AdMob, y en dicho proceso puede utilizarse el identificador publicitario (Advertising ID).",
            "El usuario puede restablecer el identificador publicitario o limitar la publicidad personalizada en la configuración del dispositivo, en el menú Configuración > Google > Anuncios.",
          ],
        },
      ],
    },
    {
      num: "8",
      title: "Derechos del usuario y del representante legal y forma de ejercerlos",
      body: [
        {
          type: "ul",
          items: [
            "El usuario puede consultar y rectificar sus datos personales en cualquier momento, y puede revocar el consentimiento para la recopilación y el uso de datos personales mediante la baja como miembro.",
            "Las solicitudes de acceso, rectificación, supresión o suspensión del tratamiento de datos personales pueden dirigirse por escrito o por correo electrónico al responsable de protección de datos personales que figura a continuación, y se atenderán sin demora.",
          ],
        },
      ],
    },
    {
      num: "9",
      title: "Datos personales de menores de 14 años",
      body: [
        { type: "p", text: "La Empresa no admite el registro de menores de 14 años como miembros ni recopila datos personales de menores de 14 años." },
      ],
    },
    {
      num: "10",
      title: "Procedimiento y método de destrucción de los datos personales",
      body: [
        {
          type: "ul",
          items: [
            { b: "Procedimiento de destrucción", t: ": los datos personales cuya finalidad se haya cumplido se conservan durante un período determinado conforme a la política interna y a las leyes y reglamentos aplicables, y posteriormente se destruyen." },
            { b: "Método de destrucción", t: ": la información en formato de archivo electrónico se elimina mediante un método técnico que impide su recuperación, y los documentos en papel se trituran o se incineran." },
          ],
        },
      ],
    },
    {
      num: "11",
      title: "Medidas para garantizar la seguridad de los datos personales",
      body: [
        {
          type: "ul",
          items: [
            "Minimización de los permisos de acceso a los datos personales y control de acceso.",
            "Aplicación de cifrado en el tramo de transmisión (SSL/TLS).",
            "Control de acceso y gestión de seguridad de la base de datos en la que se almacenan los datos personales.",
          ],
        },
      ],
    },
    {
      num: "12",
      title: "Responsable de protección de datos personales",
      body: [
        { type: "p", text: "El usuario puede dirigir al responsable indicado a continuación las consultas, reclamaciones y solicitudes de reparación de daños relacionadas con la protección de datos personales." },
        {
          type: "contact",
          rows: [
            { label: "Nombre de la empresa", value: "주식회사 아르메스 (ARMES Co., Ltd.)" },
            { label: "Representante legal", value: "신지한 (Shin Ji-han)" },
            { label: "Dirección", value: ADDRESS_ES },
            { label: "Responsable de protección de datos personales", value: "신지한 (Shin Ji-han)" },
            { label: "Correo electrónico", value: EMAIL },
          ],
        },
        { type: "p", text: "Si necesita presentar una denuncia o recibir asesoramiento sobre otras vulneraciones de datos personales, puede dirigirse a los siguientes organismos." },
        {
          type: "ul",
          items: [
            "Centro de Denuncias de Vulneración de Datos Personales (privacy.kisa.or.kr / 118 sin prefijo).",
            "Departamento de Investigación Cibernética de la Fiscalía Suprema (www.spo.go.kr / 1301 sin prefijo).",
            "Oficina de Investigación Cibernética de la Agencia Nacional de Policía (cyberbureau.police.go.kr / 182 sin prefijo).",
          ],
        },
      ],
    },
    {
      num: "13",
      title: "Modificación de la Política de Privacidad",
      body: [
        { type: "p", text: "La presente Política de Privacidad puede ser objeto de adiciones, supresiones o modificaciones en función de los cambios en las leyes y reglamentos, las políticas o las tecnologías de seguridad; en caso de modificación, se comunicará a través de los anuncios dentro de la aplicación o de esta página." },
        {
          type: "ul",
          items: ["Fecha de publicación: 23 de junio de 2026.", "Fecha de entrada en vigor: 23 de junio de 2026."],
        },
      ],
    },
  ],
};
