import type { PrivacyDoc } from "../privacyDocs";

// 사실 정보(모든 언어 공통 — 번역하지 않는다)
const EMAIL = "lovetoshin@gmail.com";
const ADDRESS_KO = "경기도 남양주시 진접읍 경복대로 425-80, 4층 6406호 (경복대학교 창업보육센터)";

// ── Português (포르투갈어) ─────────────────────────────────────────
export const pt: PrivacyDoc = {
  langName: "Português",
  title: "Política de Privacidade da RewardTalk",
  subtitle:
    "A ARMES Co., Ltd. (주식회사 아르메스) (doravante designada «Empresa») cumpre a legislação aplicável, incluindo a «Lei de Proteção de Dados Pessoais» (개인정보 보호법), a «Lei relativa à Proteção e Utilização de Informação de Localização» (위치정보의 보호 및 이용 등에 관한 법률) e a «Lei relativa à Promoção da Utilização de Redes de Informação e Comunicação e à Proteção da Informação» (정보통신망 이용촉진 및 정보보호 등에 관한 법률), e adota a política que se segue com o objetivo de proteger os dados pessoais dos utilizadores.",
  updatedLabel: "Última atualização",
  updatedAt: "23 de junho de 2026",
  note: "A Empresa divulga a presente Política de Privacidade na aplicação e nas páginas web por si operadas, de modo a que os utilizadores possam consultá-la facilmente a qualquer momento.",
  sections: [
    {
      num: "1",
      title: "Categorias de dados pessoais recolhidos e métodos de recolha",
      body: [
        { type: "p", text: "A Empresa recolhe os seguintes dados pessoais para efeitos de prestação do serviço." },
        { type: "sub", text: "a. No momento do registo de membro e da autenticação" },
        {
          type: "ul",
          items: [
            { b: "Elementos obrigatórios", t: ": endereço de correio eletrónico, alcunha (nome de perfil), informação de autenticação de início de sessão (identificador de início de sessão social, identificador de início de sessão Apple, entre outros)" },
            { b: "Elementos facultativos", t: ": fotografia de perfil" },
          ],
        },
        { type: "sub", text: "b. Elementos recolhidos no decurso da utilização do serviço" },
        {
          type: "ul",
          items: [
            { b: "Informação de localização", t: ": localização do dispositivo baseada em GPS (latitude e longitude) — para efeitos de pesquisa de estabelecimentos aderentes próximos e de prestação de benefícios baseados na localização" },
            { b: "Contactos (lista de endereços)", t: ": acesso exclusivamente nos casos em que o utilizador use a funcionalidade de partilha de contactos, por exemplo em salas de conversação de compra coletiva" },
            { b: "Câmara e fotografias/multimédia", t: ": ao captar ou selecionar a fotografia de perfil, ao ler códigos QR e ao carregar imagens de produtos (vales-presente)" },
            { b: "Informação sobre o dispositivo e a utilização do serviço", t: ": identificador do dispositivo, informação do sistema operativo, token de notificação push, registos de utilização da aplicação, histórico de sorteios, participações e prémios, e histórico de participação em compras coletivas" },
            { b: "Identificador de publicidade", t: ": ID de publicidade destinado à prestação de publicidade e à prevenção de utilizações fraudulentas" },
          ],
        },
        { type: "sub", text: "c. Métodos de recolha" },
        {
          type: "ul",
          items: [
            "Recolha através da introdução direta pelo utilizador ou do consentimento das permissões do dispositivo, no decurso do registo de membro, da utilização do serviço e da participação em eventos na aplicação",
            "Informação gerada e recolhida automaticamente no decurso da utilização do serviço",
          ],
        },
      ],
    },
    {
      num: "2",
      title: "Finalidades da recolha e da utilização dos dados pessoais",
      body: [
        {
          type: "ul",
          items: [
            { b: "Identificação e gestão de membros", t: ": prestação de serviços reservados a membros, verificação de identidade e prevenção de utilizações fraudulentas" },
            { b: "Prestação de serviços baseados na localização", t: ": pesquisa de estabelecimentos e lojas aderentes próximos, cálculo de distâncias e prestação de recompensas e benefícios de âmbito regional" },
            { b: "Operação de serviços de recompensas e sorteios", t: ": sorteios de roleta/participações, gestão de premiados e envio de prémios (vales-presente)" },
            { b: "Funcionalidades de compra coletiva e de comunidade", t: ": conversação, transações e ligação entre vendedores e compradores" },
            { b: "Prestação de notificações", t: ": envio de notificações push, tais como avisos de prémio, avisos de conversação e comunicados" },
            { b: "Resposta a pedidos de informação dos clientes e tratamento de litígios" },
            { b: "Melhoria do serviço e análise estatística" },
            { b: "Prestação de publicidade", t: ": exibição de publicidade na aplicação e medição da respetiva eficácia" },
          ],
        },
      ],
    },
    {
      num: "3",
      title: "Período de conservação e de utilização dos dados pessoais",
      body: [
        { type: "p", text: "Em regra, a Empresa destrói os dados sem demora quando a finalidade da recolha e da utilização é alcançada ou quando o membro solicita o cancelamento da adesão." },
        { type: "p", text: "Contudo, nos casos em que a conservação seja necessária nos termos da legislação aplicável, os dados são conservados conforme se indica em seguida." },
        {
          type: "ul",
          items: [
            "Registos relativos a contratos ou à revogação de subscrições: 5 anos (Lei do Comércio Eletrónico / 전자상거래법)",
            "Registos relativos a pagamentos e ao fornecimento de bens: 5 anos (Lei do Comércio Eletrónico / 전자상거래법)",
            "Registos relativos a reclamações de consumidores ou ao tratamento de litígios: 3 anos (Lei do Comércio Eletrónico / 전자상거래법)",
            "Dados de comprovação da utilização e do fornecimento de informação de localização: 6 meses (Lei da Informação de Localização / 위치정보법)",
            "Registos de acesso ao serviço: 3 meses (Lei da Proteção do Sigilo das Comunicações / 통신비밀보호법)",
          ],
        },
      ],
    },
    {
      num: "4",
      title: "Comunicação de dados pessoais a terceiros",
      body: [
        { type: "p", text: "A Empresa utiliza os dados pessoais dos utilizadores exclusivamente no âmbito comunicado na presente política e não os disponibiliza a terceiros sem o consentimento prévio do utilizador. Constituem, todavia, exceção os seguintes casos." },
        {
          type: "ul",
          items: [
            "Quando o utilizador tenha prestado o seu consentimento prévio",
            "Quando exista disposição legal nesse sentido ou quando, para fins de investigação, uma autoridade de investigação apresente um pedido de acordo com os procedimentos e métodos estabelecidos na lei",
            "Quando, para o cumprimento do serviço — como o envio de prémios (vales-presente) —, seja necessário recorrer a serviços de expedição ou entrega, disponibilizando-se, nesse caso, apenas a informação mínima necessária a essa finalidade",
          ],
        },
      ],
    },
    {
      num: "5",
      title: "Subcontratação do tratamento de dados pessoais",
      body: [
        { type: "p", text: "A fim de assegurar a prestação regular do serviço, a Empresa subcontrata a terceiros as operações de tratamento de dados pessoais indicadas em seguida." },
        {
          type: "table",
          headers: ["Subcontratante", "Operação subcontratada", "Período de conservação e de utilização"],
          rows: [
            ["Supabase Inc.", "Armazenamento de dados e operação da infraestrutura de servidores", "Até ao cancelamento da adesão ou à cessação do contrato de subcontratação"],
            ["Google LLC (AdMob)", "Prestação de publicidade na aplicação e tratamento do identificador de publicidade", "Até ao cancelamento da adesão ou à cessação do contrato de subcontratação"],
            ["Google LLC / Apple Inc.", "Envio de notificações push e autenticação de início de sessão social", "Até ao cancelamento da adesão ou à cessação do contrato de subcontratação"],
          ],
        },
        { type: "p", text: "Ao celebrar o contrato de subcontratação, a Empresa estabelece as disposições necessárias, nos termos da legislação aplicável, para que os dados pessoais sejam geridos de forma segura." },
      ],
    },
    {
      num: "6",
      title: "Tratamento da informação de localização",
      body: [
        {
          type: "ul",
          items: [
            "A Empresa utiliza a informação de localização do dispositivo do utilizador para a pesquisa de estabelecimentos aderentes próximos e para a prestação de benefícios baseados na localização.",
            { b: "", t: "A informação de localização é tratada apenas de forma pontual, no momento da utilização do serviço, não se procedendo a qualquer rastreio contínuo da localização." },
            "O utilizador pode revogar a qualquer momento a permissão de localização nas definições do dispositivo, podendo, em caso de revogação, existir restrições à utilização das funcionalidades baseadas na localização.",
          ],
        },
      ],
    },
    {
      num: "7",
      title: "Identificador de publicidade e publicidade personalizada",
      body: [
        {
          type: "ul",
          items: [
            "A presente aplicação presta publicidade através do Google AdMob, podendo, nesse processo, ser utilizado o identificador de publicidade (Advertising ID).",
            "O utilizador pode repor o identificador de publicidade ou limitar a publicidade personalizada no menu Definições do dispositivo > Google > Anúncios.",
          ],
        },
      ],
    },
    {
      num: "8",
      title: "Direitos do utilizador e do representante legal e forma de os exercer",
      body: [
        {
          type: "ul",
          items: [
            "O utilizador pode, a qualquer momento, consultar e retificar os seus dados pessoais e pode, mediante o cancelamento da adesão, revogar o consentimento para a recolha e a utilização dos dados pessoais.",
            "Os pedidos de acesso, retificação, eliminação ou suspensão do tratamento dos dados pessoais podem ser dirigidos, por escrito ou por correio eletrónico, ao responsável pela proteção de dados pessoais indicado em seguida, sendo objeto de resposta sem demora.",
          ],
        },
      ],
    },
    {
      num: "9",
      title: "Dados pessoais de menores de 14 anos",
      body: [
        { type: "p", text: "A Empresa não aceita o registo de menores de 14 anos nem recolhe dados pessoais de menores de 14 anos." },
      ],
    },
    {
      num: "10",
      title: "Procedimentos e métodos de destruição dos dados pessoais",
      body: [
        {
          type: "ul",
          items: [
            { b: "Procedimento de destruição", t: ": os dados pessoais cuja finalidade tenha sido alcançada são destruídos após terem sido conservados durante um período determinado, nos termos das políticas internas e da legislação aplicável." },
            { b: "Método de destruição", t: ": a informação em formato de ficheiro eletrónico é eliminada por um método técnico que não permite a sua recuperação, e os documentos em papel são triturados ou incinerados." },
          ],
        },
      ],
    },
    {
      num: "11",
      title: "Medidas de garantia da segurança dos dados pessoais",
      body: [
        {
          type: "ul",
          items: [
            "Minimização das permissões de acesso aos dados pessoais e controlo de acessos",
            "Aplicação de encriptação no tráfego de transmissão (SSL/TLS)",
            "Controlo de acessos e gestão de segurança das bases de dados onde os dados pessoais são armazenados",
          ],
        },
      ],
    },
    {
      num: "12",
      title: "Responsável pela proteção de dados pessoais",
      body: [
        { type: "p", text: "O utilizador pode dirigir ao responsável indicado em seguida os pedidos de informação, o tratamento de reclamações e os pedidos de reparação de danos relacionados com a proteção de dados pessoais." },
        {
          type: "contact",
          rows: [
            { label: "Denominação social", value: "주식회사 아르메스 (ARMES Co., Ltd.)" },
            { label: "Representante legal", value: "신지한 (Shin Ji-han)" },
            { label: "Endereço", value: ADDRESS_KO + " (Gyeongbok-daero 425-80, 4.º piso, sala 6406, Jinjeop-eup, Namyangju-si, Gyeonggi-do, Coreia do Sul — Centro de Incubação de Empresas da Universidade Gyeongbok)" },
            { label: "Responsável pela proteção de dados pessoais", value: "신지한 (Shin Ji-han)" },
            { label: "Correio eletrónico", value: EMAIL },
          ],
        },
        { type: "p", text: "Caso necessite de apresentar uma denúncia ou de obter aconselhamento sobre violações de dados pessoais, pode contactar as seguintes entidades." },
        {
          type: "ul",
          items: [
            "Centro de Denúncia de Violações de Dados Pessoais (privacy.kisa.or.kr / 118, sem indicativo)",
            "Divisão de Investigação Cibernética da Procuradoria-Geral (www.spo.go.kr / 1301, sem indicativo)",
            "Departamento de Investigação Cibernética da Agência Nacional de Polícia (cyberbureau.police.go.kr / 182, sem indicativo)",
          ],
        },
      ],
    },
    {
      num: "13",
      title: "Alterações à Política de Privacidade",
      body: [
        { type: "p", text: "A presente Política de Privacidade pode ser objeto de adições, eliminações ou modificações em função de alterações à legislação, às políticas ou às tecnologias de segurança, sendo, em caso de alteração, comunicada através dos avisos na aplicação ou da presente página." },
        {
          type: "ul",
          items: ["Data de publicação: 23 de junho de 2026", "Data de entrada em vigor: 23 de junho de 2026"],
        },
      ],
    },
  ],
};
