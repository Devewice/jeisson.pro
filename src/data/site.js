export const SITE = {
  name: 'Jeisson David Riveros García',
  shortName: 'Jeisson',
  profileImage: '/images/profile.jpg',
  tagline: 'Desarrollador full stack · diseño como complemento al código',
  email: 'contacto@jeisson.pro',
  siteUrl: 'https://jeisson.pro',
  location: 'Bogotá D.C., Colombia',
  phone: '+57 312 724 0080',
  phoneTel: '+573127240080',
  whatsapp: '573127240080',
  birthNote: 'Colombiano · español nativo · inglés B2 para documentación técnica',
}

export const FOOTER = {
  tagline:
    'Desarrollo web full stack en Bogotá: APIs, deploy y producto digital. Complemento con criterio visual cuando hace falta una idea inicial o encaje con tu equipo.',
  availability: 'Abierto a proyectos · remoto o híbrido',
  note: 'jeisson.pro',
}

export const HERO = {
  name: 'Jeisson David Riveros García',
  title: 'Desarrollador full stack',
  subtitle:
    'Más de 5 años en producción: código en Git, APIs documentadas, despliegues con Docker y CI/CD, y backoffice en NestJS/Next.js. También WordPress y plugins a medida — de la base de datos al sitio en línea.',
  ctas: [
    { label: 'Ver proyectos', to: '/proyectos', primary: true },
    { label: 'Escribirme', to: '/contacto', primary: false },
  ],
}

export const HERO_SLIDES = [
  {
    headline: 'Stack en producción',
    sub: 'PHP · TypeScript · NestJS · Next.js · WordPress · PostgreSQL',
  },
  {
    headline: 'Diseño como complemento',
    sub: 'Idea visual inicial · Figma · handoff sin fricción con el código',
  },
  {
    headline: 'Productos que ya están en línea',
    sub: 'motai.app · backoffice NestJS · plugins · APIs documentadas',
  },
]

export const HOME_STATS = [
  { value: '5+', label: 'Años construyendo en serio' },
  { value: '10+', label: 'Proyectos en el portafolio' },
  { value: 'Git', label: 'CI/CD y deploy en serio' },
  { value: 'Bogotá', label: 'Colombia · remoto OK' },
]

export const TECH_MARQUEE = [
  'TypeScript',
  'NestJS',
  'Next.js',
  'React',
  'PHP',
  'Laravel',
  'Node.js',
  'WordPress',
  'PostgreSQL',
  'Redis',
  'Docker',
  'OpenAPI',
  'Git',
]

/** Stack agrupado — fuente para Servicios, home y Sobre mí */
export const TECH_STACK = [
  {
    group: 'Lenguajes',
    items: ['PHP', 'JavaScript', 'TypeScript', 'HTML5', 'CSS'],
  },
  {
    group: 'Backend y APIs',
    items: ['Laravel', 'NestJS', 'Node.js', 'Express', 'REST', 'OpenAPI', 'Webhooks'],
  },
  {
    group: 'Frontend',
    items: ['React', 'Next.js', 'Vite'],
  },
  {
    group: 'Datos y caché',
    items: ['PostgreSQL', 'MySQL', 'Redis', 'TypeORM'],
  },
  {
    group: 'CMS y e-commerce',
    items: ['WordPress', 'WooCommerce', 'Plugins PHP (PSR-4)', 'WooCommerce REST'],
  },
  {
    group: 'DevOps y pruebas',
    items: ['Git', 'GitHub Actions', 'Docker', 'CI/CD', 'Jest', 'Vitest'],
  },
  {
    group: 'Producto e integraciones',
    items: ['RBAC', 'SSE', 'WebSockets', 'Sync ERP', 'reCAPTCHA', 'LiteSpeed'],
  },
]

export const WHY_BUILD = [
  {
    title: 'Menos vueltas, más entrega',
    text: 'Alcance claro, releases cortos y código que puedes revisar en Git — no promesas vagas en un PDF.',
  },
  {
    title: 'Diseño que complementa el código',
    text: 'Puedo aportar una idea visual inicial y afinarla contigo o con tu equipo. Leo Figma y el handoff llega al deploy sin perderse.',
  },
  {
    title: 'Código que otro puede seguir',
    text: 'APIs documentadas, nombres legibles y estructura que el siguiente dev entiende sin adivinar.',
  },
  {
    title: 'Trayectoria en producción',
    text: 'De motai.app a plataformas escolares: código que sigue en línea y APIs documentadas.',
  },
]

export const HOME_PROCESS = [
  {
    step: '01',
    title: 'Aterrizar',
    text: 'Qué problema resuelve, quién lo usa y qué ya tienes (hosting, marca, plazos).',
  },
  {
    step: '02',
    title: 'Armar',
    text: 'Desarrollo por iteraciones; si hay UI, la integro alineado a Figma o al equipo de diseño.',
  },
  {
    step: '03',
    title: 'Dejar listo',
    text: 'Deploy, documentación y ajustes post-lanzamiento. El producto queda operable en producción.',
  },
]

export const EXPLORE_NAV = [
  {
    to: '/sobre-mi',
    title: 'Sobre mí',
    desc: 'De dónde vengo, qué estudié y con qué herramientas trabajo hoy.',
    icon: '01',
    size: 'half',
    accent: 'matrix',
  },
  {
    to: '/servicios',
    title: 'Servicios',
    desc: 'Full stack, backoffice, WordPress y el detalle del stack que uso.',
    icon: '02',
    size: 'half',
    accent: 'cyan',
  },
  {
    to: '/proyectos',
    title: 'Proyectos',
    desc: 'Proyectos en código, educación y editorial.',
    icon: '03',
    size: 'wide',
    accent: 'matrix',
  },
  {
    to: '/contacto',
    title: 'Contacto',
    desc: 'Un correo con la idea alcanza. Te respondo con alcance y tiempos.',
    icon: '04',
    size: 'third',
    accent: 'gold',
  },
]

export const PAGE_COPY = {
  services: {
    title: 'Servicios',
    heading: 'Desarrollo web y producto',
    subtitle:
      'Contratas desarrollo: APIs, backoffice, WordPress a medida y deploy. El diseño lo sumo como complemento — una idea inicial que pulimos juntos o con tu equipo.',
    intro:
      'En motai.app desarrollé WooCommerce, varios plugins a medida (sync ERP y flujos propios) y backoffice en NestJS; también Laravel, React, WordPress y este sitio. Abajo el stack; editorial o motion solo si el proyecto lo incluye.',
    stackTitle: 'Tecnologías que uso en producción',
    stackSub:
      'Lo que aparece abajo son herramientas con las que ya he entregado — no una lista de moda.',
    outro: 'Si tu stack no está aquí pero el proyecto es web, escríbeme igual: suelo entrar por auditoría y un primer sprint acotado.',
  },
  projects: {
    title: 'Portafolio',
    heading: 'Proyectos con contexto',
    subtitle:
      'No es un catálogo de logos: cada ficha dice qué hice, con qué stack y en qué ventana de tiempo.',
    intro:
      'La mayoría son entregas de desarrollo; hay fichas con fuerte componente visual de años en editorial. Filtra por categoría o abre el enlace cuando el sitio sigue activo.',
  },
  contact: {
    title: 'Contacto',
    heading: 'Cuéntame qué necesitas',
    subtitle: 'Correo, WhatsApp o el formulario — elige el canal que te quede más cómodo.',
    intro:
      'Cuéntame qué hay que construir o mantener en código: stack actual, plazo y si ya tienes diseño/UX o prefieres que aporte una idea visual inicial.',
    bullets: [
      'Qué producto o sistema necesitas (web, API, backoffice, tienda…)',
      'Stack o restricciones (hosting, WordPress, base de datos)',
      'Si hay diseñadores/UX en el proyecto y en qué fase estás',
    ],
    response: 'Correo: 24–48 h hábiles · WhatsApp: suele ser el mismo día en horario laboral',
    formNote: 'El formulario abre tu cliente de correo con el mensaje listo — no guardo datos en servidor.',
    whatsappPrefill: 'Hola Jeisson, vi jeisson.pro y me gustaría hablar de un proyecto:',
  },
  about: {
    title: 'Sobre mí',
    subtitle:
      'Desarrollador full stack en Bogotá. APIs, deploy y WordPress; diseño como complemento cuando el proyecto lo necesita.',
  },
}

export const HOME_COPY = {
  explore: {
    sub: 'Trayectoria dev, servicios con stack, casos en producción y contacto.',
  },
  aboutTeaser: {
    title: 'En resumen',
    sub: null,
  },
  services: {
    sub: 'Full stack, backoffice, WordPress y stack detallado en la página de servicios.',
  },
  projects: {
    sub: 'Casos en código y, en algunos, capa visual — filtra por categoría.',
  },
  whyBuild: {
    title: 'Por qué contratar desarrollo bien hecho',
    sub: 'Menos deuda técnica, diseño como complemento cuando toca y producto que aguanta el día a día.',
  },
  capabilities: {
    sub: 'Lo que ya usé en producción — de motai.app a colegios y proyectos propios.',
  },
  process: {
    sub: 'Tres fases orientadas a entregar software funcionando, no solo maquetas.',
  },
}

export const FEATURED_PROJECT_KEYS = [
  'Motai — motai.app',
  'jeisson.pro',
  'Revista Occidente XXI',
  'Colegio Van Leeuwenhoek',
]

export const ABOUT = {
  intro: [
    'Desarrollo web full stack hace más de cinco años: PHP, TypeScript, APIs, WordPress y lo que hace falta para publicar — Git, Docker, bases de datos. En motai.app desarrollé el sitio en WooCommerce, varios plugins a medida (sync con ERP y lógica propia) y un backoffice con NestJS y PostgreSQL; ahí concentras buena parte del stack que manejo.',
    'Antes de dedicarme a tiempo completo al código coordiné TIC y trabajé diseño en colegios y editorial. Complemento el desarrollo con criterio visual: puedo proponer una idea inicial y afinarla contigo, en Figma o con tu equipo de UX. Hoy busco encargos de desarrollo.',
  ],
  highlights: [
    { label: '5+ años', detail: 'Código, APIs y producto en producción' },
    { label: 'Diseño (complemento)', detail: 'Idea inicial · Figma y handoff' },
    { label: 'Rubros', detail: 'Educación, editorial, moda, e-commerce, motos' },
    { label: 'Estudios', detail: 'UCMC, Panamericana, SENA, técnico en redes' },
  ],
}

export const INTERESTS = [
  'Arquitectura web, APIs y producto digital',
  'Complementar desarrollo con diseño o UX cuando el proyecto lo pide',
  'DevOps, CI/CD y herramientas internas',
  'Motion y piezas visuales puntuales (no el núcleo del encargo)',
  'IA como apoyo al flujo de código y diseño',
]

export const TOOLKIT = {
  design: ['Photoshop', 'Illustrator', 'InDesign', 'Premiere', 'Audition', 'Blender', 'Figma'],
  dev: [
    'PHP',
    'TypeScript',
    'JavaScript',
    'Laravel',
    'NestJS',
    'Next.js',
    'React',
    'Node.js',
    'Express',
    'Vite',
    'WordPress',
    'WooCommerce',
    'PostgreSQL',
    'MySQL',
    'Redis',
    'OpenAPI',
    'Docker',
  ],
  other: ['Git', 'GitHub Actions', 'CI/CD', 'REST', 'Webhooks', 'SSE', 'Divi', 'SEO on-page'],
}

export const EDUCATION = [
  {
    school: 'Universidad Colegio Mayor de Cundinamarca (UCMC)',
    degree: 'Tecnólogo en Diseño Digital y Multimedia',
    period: '2023 – 2025',
    status: 'Graduado',
    detail: 'Productos multimediales, comunicación visual y análisis de mercado.',
  },
  {
    school: 'Universidad Panamericana',
    degree: 'Tecnólogo en Desarrollo de Software',
    period: '2022 – 2024',
    status: 'Graduado',
    detail: 'Lógica de programación, arquitectura de sistemas y redes.',
  },
  {
    school: 'SENA',
    degree: 'Tecnólogo en Desarrollo de Medios Gráficos Visuales',
    period: 'Jun 2022 – Dic 2023',
    status: 'Completado',
    detail: 'Desarrollo web, CRM/CMS y contenidos adaptables.',
  },
  {
    school: 'Instituto Integrado de Suba',
    degree: 'Técnico en Mantenimiento de Cómputo',
    period: '2021',
    status: 'Completado',
    detail: 'Hardware, redes y soporte de equipos.',
  },
]

export const SERVICES = [
  {
    title: 'Desarrollo web full stack',
    description:
      'Sitios y APIs con PHP (Laravel), TypeScript (NestJS, Next.js, React) y Node/Express cuando encaja. Git, revisiones de código, pruebas (Jest/Vitest) y despliegue acordado contigo.',
    tags: ['PHP', 'TypeScript', 'Laravel', 'NestJS', 'Next.js', 'React', 'Node.js'],
  },
  {
    title: 'Backoffice y producto digital',
    description:
      'Paneles con NestJS, Next.js y PostgreSQL: cotizaciones, contratos, RBAC, OpenAPI y tiempo real (SSE/WebSockets). Lo implementé en el backoffice de motai.app; mismo perfil para tu operación.',
    tags: ['NestJS', 'Next.js', 'PostgreSQL', 'TypeORM', 'OpenAPI', 'RBAC'],
  },
  {
    title: 'WordPress, WooCommerce y plugins',
    description:
      'Plugins PHP (PSR-4), WooCommerce, sync ERP, Redis y REST/AJAX. En motai.app varios plugins a medida sobre el frente WooCommerce; también optimización y formularios con reCAPTCHA.',
    tags: ['WordPress', 'WooCommerce', 'PHP', 'Redis', 'REST/AJAX'],
  },
  {
    title: 'Educación y coordinación TIC',
    description:
      'Portales escolares, plataformas internas en JavaScript/CMS y soporte a comunidades grandes (+800 usuarios). El foco es que el sistema funcione; la parte gráfica va aparte si se contrata.',
    tags: ['TIC', 'JavaScript', 'CMS', 'Plataformas'],
  },
  {
    title: 'Diseño editorial (complemento)',
    description:
      'Solo si el proyecto lo incluye: revistas, identidad, InDesign. Trayectoria en Occidente XXI (+20 ediciones); hoy priorizo contratos de desarrollo.',
    tags: ['InDesign', 'Editorial', 'Branding'],
  },
  {
    title: 'Motion y redes (complemento)',
    description:
      'Animación 2D, Premiere/Audition o piezas para redes cuando no hay equipo creativo y el alcance lo contempla — no es el servicio principal.',
    tags: ['Blender', 'Premiere', 'Motion 2D'],
  },
]

export const PROJECTS = [
  {
    title: 'jeisson.pro',
    period: '2026 — Presente',
    url: 'https://jeisson.pro',
    category: 'dev',
    description:
      'Este portafolio: parte pública y zona privada de CV con enlaces temporales para reclutadores. React, Vite y Express.',
    tags: ['React', 'Node.js', 'Express'],
  },
  {
    title: 'Motai — motai.app',
    period: '2025 — 2026',
    url: 'https://motai.app',
    category: 'dev',
    description:
      'WooCommerce, varios plugins a medida, sync ERP y backoffice interno (NestJS, PostgreSQL): cotizaciones, contratos y APIs documentadas.',
    tags: ['WordPress', 'NestJS', 'TypeScript', 'PostgreSQL'],
  },
  {
    title: 'jeisson.pro — Estudio creativo',
    period: '2019 — Presente',
    url: 'https://jeisson.pro',
    category: 'creative',
    description:
      'Marca personal: desarrollo web como base; diseño y motion en encargos puntuales para educación y comercio.',
    tags: ['WordPress', 'Desarrollo', 'Branding'],
  },
  {
    title: 'Revista Occidente XXI',
    period: '2020 — 2024',
    url: 'https://www.occidentexxi.com/ediciones',
    category: 'creative',
    description:
      'Diseño editorial de más de 20 ediciones, identidad por número y cobertura fotográfica de eventos. Archivo en occidentexxi.com/ediciones.',
    tags: ['InDesign', 'Editorial', 'Fotografía', 'Web'],
  },
  {
    title: 'Colegio Van Leeuwenhoek',
    period: '2020 — 2025',
    url: 'https://colvanlee.edu.co',
    category: 'education',
    description:
      'Coordinación TIC, web, plataforma interna, rebranding y emisora. Soporte diario a docentes y estudiantes.',
    tags: ['TIC', 'JavaScript', 'CMS', 'Radio'],
  },
  {
    title: 'Colegio Reina de Gales',
    period: '2021 — 2025',
    url: null,
    category: 'education',
    description:
      'Portal web, contenidos online, radio/TV escolar y landings por ciclo académico.',
    tags: ['Web', 'Audiovisual', 'Contenidos', 'Institucional'],
  },
  {
    title: 'Santiago Aviador — E-commerce',
    period: '2024 — 2025',
    url: null,
    category: 'dev',
    description:
      'Sitio corporativo y tienda WooCommerce con catálogo, pagos y contenidos centralizados en WordPress (Divi).',
    tags: ['WooCommerce', 'WordPress', 'SEO', 'UX'],
  },
  {
    title: 'Roger Murillo SAS',
    period: '2023 — 2025',
    url: null,
    category: 'creative',
    description:
      'Campañas, animación 2D, sitios en CMS y piezas gráficas para la marca del cliente.',
    tags: ['Animación', 'CM', 'WordPress', 'Marketing'],
  },
  {
    title: 'Corporación ESHAC',
    period: '2022',
    url: null,
    category: 'creative',
    description:
      'Maquetación publicitaria y piezas para redes alineadas a la identidad existente.',
    tags: ['Diseño gráfico', 'Redes', 'Maquetación'],
  },
  {
    title: 'Campus — Administración escolar',
    period: 'Open source',
    url: 'https://github.com/Devewice/Campus',
    category: 'dev',
    description:
      'Sistema de administración escolar en PHP, publicado en GitHub (Devewice).',
    tags: ['PHP', 'GitHub', 'Educación'],
  },
]

export const PROJECT_CATEGORIES = {
  all: 'Todos',
  dev: 'Desarrollo',
  creative: 'Diseño y multimedia',
  education: 'Educación',
}
