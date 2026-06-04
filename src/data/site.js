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
    'APIs, deploy y producto en producción — NestJS, Next.js, WordPress y lo que el proyecto pida.',
  focusLine: 'Último foco: e-commerce + backoffice (motai.app) · Bogotá · remoto OK',
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
  { value: 'APIs', label: 'Docker · CI/CD · deploy' },
  { value: 'Bogotá', label: 'Colombia · remoto OK' },
]

/** Caso ancla en home (título debe coincidir con PROJECTS) */
export const HOME_ANCHOR_PROJECT = 'Motai — motai.app'

export const HOME_ANCHOR = {
  eyebrow: 'Caso reciente',
  title: 'Motai — motai.app',
  problem:
    'Producto digital en motos: tienda pública, lógica a medida y operación interna conectada al negocio.',
  bullets: [
    'WooCommerce con varios plugins propios y sincronización ERP',
    'Backoffice NestJS + PostgreSQL: cotizaciones, contratos y APIs documentadas',
    'Deploy y mantenimiento del stack en producción',
  ],
  cta: { label: 'Ver todos los proyectos', to: '/proyectos' },
  link: { label: 'Visitar motai.app', href: 'https://motai.app' },
}

export const HOME_AUDIENCE = [
  { label: 'Startup / producto', detail: 'MVP, APIs y panel interno' },
  { label: 'Agencia con diseño', detail: 'Implemento Figma y handoff' },
  { label: 'Educación / TIC', detail: 'Portales y plataformas escolares' },
  { label: 'Tienda WordPress', detail: 'WooCommerce y plugins a medida' },
]

export const HOME_SECTORS = ['E-commerce', 'Educación', 'Editorial', 'Moda', 'Institucional']

/** Solo estos servicios en la preview del home */
export const HOME_SERVICES_KEYS = [
  'Desarrollo web full stack',
  'Backoffice y producto digital',
  'WordPress, WooCommerce y plugins',
]

export const HOME_FAQ = [
  {
    q: '¿Trabajas remoto?',
    a: 'Sí. Base en Bogotá; proyectos en Colombia y remoto con reuniones por videollamada y entregas en Git.',
  },
  {
    q: '¿Incluyes diseño?',
    a: 'El encargo principal es desarrollo. Puedo aportar una idea visual inicial o integrar el trabajo de tu equipo en Figma.',
  },
  {
    q: '¿Plazos y CV para reclutadores?',
    a: 'Plazos según alcance; primer contacto suele responder en 24–48 h. Si necesitas CV formal, escríbeme por contacto y te comparto enlace o versión acordada.',
  },
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

export const PAGE_NEXT = {
  '/sobre-mi': { label: 'Ver servicios y stack', to: '/servicios' },
  '/servicios': { label: 'Ver casos en proyectos', to: '/proyectos' },
  '/proyectos': { label: 'Pedir cotización', to: '/contacto' },
  '/contacto': { label: 'Volver al inicio', to: '/' },
}

export const PROJECT_CTA = {
  all: { label: 'Quiero algo parecido', to: '/contacto' },
  dev: { label: 'Cuéntame tu producto', to: '/contacto' },
  education: { label: 'Hablemos de tu colegio', to: '/contacto' },
  creative: { label: 'Consultar encargo visual', to: '/contacto' },
}

export const SERVICE_ENGAGEMENTS = [
  {
    title: 'Producto nuevo',
    text: 'De alcance y arquitectura a deploy: web, API o backoffice desde cero o sobre base acordada.',
  },
  {
    title: 'Feature en producto existente',
    text: 'Iteración en código ajeno o tuyo: integraciones, módulos, correcciones y releases acotados.',
  },
  {
    title: 'Auditoría + primer sprint',
    text: 'Revisión técnica, prioridades y un primer entregable en Git antes de comprometer roadmap largo.',
  },
]

export const SERVICES_PROCESS = [
  {
    step: '01',
    title: 'Aterrizar',
    text: 'Workshop breve o documento de alcance: problema, usuarios, stack, plazos y criterios de éxito.',
    deliverables: ['Alcance escrito', 'Riesgos y dependencias', 'Propuesta de fases'],
  },
  {
    step: '02',
    title: 'Armar',
    text: 'Sprints con entregas en Git; UI alineada a Figma o a tu equipo; revisiones y pruebas acordadas.',
    deliverables: ['Repos y ramas claras', 'Demos por iteración', 'APIs documentadas si aplica'],
  },
  {
    step: '03',
    title: 'Dejar listo',
    text: 'Deploy, handoff y ventana de ajustes. El sistema queda operable, no solo maquetado.',
    deliverables: ['Puesta en producción', 'Notas de operación', 'Soporte post-lanzamiento acordado'],
  },
]

export const PAGE_COPY = {
  services: {
    title: 'Servicios',
    heading: 'Desarrollo web y producto',
    subtitle:
      'APIs, backoffice, WordPress y deploy — con diseño como complemento cuando el proyecto lo necesita.',
    intro:
      'Stack probado en motai.app, colegios y proyectos propios. Los tres bloques principales están abajo; editorial y motion solo si el alcance lo incluye.',
    stackTitle: 'Tecnologías que uso en producción',
    stackSub:
      'Herramientas con las que ya he entregado — no una lista de moda.',
    outro: 'Si tu stack no está aquí pero el proyecto es web, escríbeme igual: suelo entrar por auditoría y un primer sprint acotado.',
    skillsEyebrow: 'Además del desarrollo',
    skillsTitle: 'Otras habilidades',
    skillsSub:
      'Diseño editorial, motion y piezas visuales — las aporto cuando el proyecto lo pide, no como servicio principal.',
    motaiLink: { label: 'Ver caso Motai en proyectos', to: '/proyectos#caso-destacado' },
  },
  projects: {
    title: 'Portafolio',
    heading: 'Proyectos',
    subtitle:
      'Cada caso indica qué hice, con qué stack trabajé y en qué fechas — de producto digital a TIC en instituciones.',
    intro:
      'Usa el filtro por categoría. Si un proyecto no tiene enlace, suele ser entrega interna o material de archivo.',
    checklistTitle: 'Qué mandar si quieres algo parecido',
  },
  contact: {
    title: 'Contacto',
    heading: 'Escribirme',
    subtitle:
      'Correo, WhatsApp, llamada o formulario. Con un poco de contexto te respondo con alcance y plazos orientativos.',
    intro:
      'Indica qué hay que construir o mantener: producto (web, API, backoffice, tienda), stack si ya lo tienes, plazo y si cuentas con diseño/UX o quieres que aporte una idea visual inicial.',
    bullets: [
      'Qué producto o sistema necesitas (web, API, backoffice, tienda…)',
      'Stack o restricciones (hosting, WordPress, base de datos)',
      'Si hay diseñadores/UX en el proyecto y en qué fase estás',
    ],
    response: 'Suelo responder en 24–48 h por correo; por WhatsApp, el mismo día en horario laboral (Colombia).',
    formNote: 'El formulario abre tu cliente de correo con el mensaje listo — no guardo datos en servidor.',
    formHints: [
      'Plazo aproximado o fecha límite',
      'Presupuesto orientativo (si lo tienes)',
      '¿Ya tienes diseño en Figma o equipo creativo?',
    ],
    whatsappPrefill: 'Hola Jeisson, vi jeisson.pro y me gustaría hablar de un proyecto:',
    recruiter: {
      eyebrow: 'Reclutadores',
      text: 'Si necesitas CV formal o perfil completo, escríbeme y te comparto enlace o versión acordada (también zona privada del sitio bajo solicitud).',
      cta: 'Solicitar CV',
      mailSubject: 'CV jeisson.pro — solicitud reclutador',
    },
  },
  about: {
    title: 'Sobre mí',
    heading: 'Jeisson — desarrollador full stack',
    subtitle:
      'Trayectoria en producto web, TIC en colegios y formación en desarrollo y diseño digital.',
    experienceTitle: 'Experiencia',
    toolkitNote: 'Listado completo de stack agrupado en Servicios.',
    toolkitLink: { label: 'Ver stack en servicios', to: '/servicios' },
    cvLink: { label: 'Solicitar CV', to: '/contacto' },
  },
}

export const HOME_COPY = {
  audience: {
    title: 'Con quién encajo',
    sub: 'Si te reconoces en alguno de estos perfiles, probablemente podemos arrancar rápido.',
  },
  aboutWhy: {
    eyebrow: 'Sobre mí',
    title: 'En resumen',
    sub: 'Desarrollo primero; diseño y TIC en colegios como base para hablar con equipos creativos.',
    cta: 'Conocer trayectoria',
  },
  services: {
    sub: 'Lo que más encargo hoy. El detalle completo está en la página de servicios.',
  },
  projects: {
    sub: 'Más casos en código, educación y editorial — filtra por categoría.',
  },
  whyBuild: {
    title: 'Por qué contratar desarrollo bien hecho',
    sub: 'Menos deuda técnica, diseño como complemento cuando toca y producto que aguanta el día a día.',
  },
  process: {
    sub: 'Tres fases orientadas a entregar software funcionando, no solo maquetas.',
  },
  ctaMid: {
    title: '¿Tienes alcance y plazo?',
    sub: 'Cuéntame qué hay que construir. Respondo con estimación inicial y siguientes pasos.',
  },
  faq: {
    title: 'Preguntas frecuentes',
    sub: 'Lo que suelen preguntar antes del primer correo.',
  },
}

export const FEATURED_PROJECT_KEYS = [
  'Motai — motai.app',
  'jeisson.pro',
  'Revista Occidente XXI',
  'Colegio Van Leeuwenhoek',
]

export const EXPERIENCE = [
  {
    role: 'Desarrollador full stack',
    org: 'Motai · motai.app',
    period: 'Jul 2025 – Jun 2026',
    status: 'Finalizado',
    bullets: [
      'WooCommerce, varios plugins a medida y sincronización con ERP',
      'Backoffice NestJS + PostgreSQL: cotizaciones, contratos, RBAC y APIs',
      'Deploy y mantenimiento del producto en producción',
    ],
  },
  {
    role: 'Coordinación TIC y desarrollo',
    org: 'Colegio Van Leeuwenhoek',
    period: '2020 – 2025',
    status: 'Finalizado',
    bullets: [
      'Sitio web, apps móviles y software de transmisión personalizado para la emisora',
      'Sistemas de carnetización, reportes y herramientas internas para la comunidad (+800 usuarios)',
      'Soporte diario a docentes; rebranding y proyectos audiovisuales institucionales',
    ],
  },
  {
    role: 'TIC y desarrollo de software',
    org: 'Colegio Reina de Gales',
    period: '2021 – 2025',
    status: 'Finalizado',
    bullets: [
      'Sitio web institucional y landings por ciclo académico',
      'Software de transmisión radial y sistemas de notas e inventarios',
      'Herramientas internas para la operación diaria de la institución',
    ],
  },
  {
    role: 'Desarrollo web y diseño editorial',
    org: 'Revista Occidente XXI',
    period: '2020 – 2024',
    status: 'Finalizado',
    bullets: [
      'Portal de noticias web: anti-bots, Redis y cacheo',
      '+20 ediciones InDesign, identidad por número y archivo de ediciones',
    ],
  },
  {
    role: 'Desarrollo y encargos creativos',
    org: 'Marca personal · jeisson.pro',
    period: '2019 – Presente',
    status: 'Activo',
    bullets: [
      'Portafolio, clientes en educación y comercio',
      'Desarrollo como base; diseño/motion puntuales si el proyecto lo incluye',
    ],
  },
]

export const ABOUT = {
  intro: [
    'Desarrollo web full stack hace más de cinco años: PHP, TypeScript, APIs, WordPress y lo que hace falta para publicar — Git, Docker, bases de datos. En motai.app desarrollé WooCommerce, varios plugins a medida y un backoffice con NestJS y PostgreSQL.',
    'Antes de dedicarme a tiempo completo al código coordiné TIC y trabajé diseño en colegios y editorial. Complemento el desarrollo con criterio visual cuando hace falta. Hoy busco encargos de desarrollo.',
  ],
  highlights: [
    { label: '5+ años', detail: 'Código, APIs y producto en producción' },
    { label: 'Diseño (complemento)', detail: 'Idea inicial · Figma y handoff' },
    { label: 'Rubros', detail: 'Educación, editorial, e-commerce, motos' },
    { label: 'Estudios', detail: 'UCMC, Panamericana, SENA, técnico en redes' },
  ],
  audienceLine:
    'Encajo con startups, agencias con diseño, colegios (TIC) y tiendas WordPress — ver perfiles en inicio.',
}

export const TOOLKIT_TOP = [
  'PHP',
  'TypeScript',
  'NestJS',
  'Next.js',
  'React',
  'Laravel',
  'WordPress',
  'PostgreSQL',
  'Docker',
  'Git',
]

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
    complement: false,
    description:
      'Sitios y APIs con PHP (Laravel), TypeScript (NestJS, Next.js, React) y Node/Express cuando encaja. Git, revisiones de código, pruebas (Jest/Vitest) y despliegue acordado contigo.',
    tags: ['PHP', 'TypeScript', 'Laravel', 'NestJS', 'Next.js', 'React', 'Node.js'],
    includes: ['Arquitectura y código en Git', 'Integración con tu hosting o el acordado', 'Documentación técnica básica'],
    excludes: ['Diseño de marca desde cero salvo acuerdo', 'Hosting facturado a tu nombre salvo gestión acordada'],
  },
  {
    title: 'Backoffice y producto digital',
    complement: false,
    description:
      'Paneles con NestJS, Next.js y PostgreSQL: cotizaciones, contratos, RBAC, OpenAPI y tiempo real (SSE/WebSockets). Mismo perfil que el backoffice de motai.app.',
    tags: ['NestJS', 'Next.js', 'PostgreSQL', 'TypeORM', 'OpenAPI', 'RBAC'],
    includes: ['Modelo de datos y APIs documentadas', 'Roles y permisos acordados', 'Entrega en entornos staging/prod'],
    excludes: ['App móvil nativa', 'Mantenimiento indefinido sin contrato'],
  },
  {
    title: 'WordPress, WooCommerce y plugins',
    complement: false,
    description:
      'Plugins PHP (PSR-4), WooCommerce, sync ERP, Redis y REST/AJAX. Varios plugins a medida en motai.app; optimización y formularios con reCAPTCHA.',
    tags: ['WordPress', 'WooCommerce', 'PHP', 'Redis', 'REST/AJAX'],
    includes: ['Plugins y temas hijo cuando aplica', 'Integraciones ERP/API', 'Puesta en línea acordada'],
    excludes: ['Contenido masivo de producto sin briefing', 'Licencias premium de terceros sin presupuesto'],
  },
  {
    title: 'Educación y coordinación TIC',
    complement: false,
    description:
      'Portales escolares, plataformas internas en JavaScript/CMS y soporte a comunidades grandes (+800 usuarios). El foco es que el sistema funcione; la parte gráfica va aparte si se contrata.',
    tags: ['TIC', 'JavaScript', 'CMS', 'Plataformas'],
    includes: ['Capacitación básica a equipo interno', 'Soporte en horario acordado'],
    excludes: ['Hardware y redes físicas', 'Diseño gráfico institucional completo'],
  },
  {
    title: 'Diseño editorial',
    complement: true,
    description:
      'Solo si el proyecto lo incluye: revistas, identidad, InDesign. Trayectoria en Occidente XXI (+20 ediciones); hoy priorizo contratos de desarrollo.',
    tags: ['InDesign', 'Editorial', 'Branding'],
  },
  {
    title: 'Motion y redes',
    complement: true,
    description:
      'Animación 2D, Premiere/Audition o piezas para redes cuando no hay equipo creativo y el alcance lo contempla — no es el servicio principal.',
    tags: ['Blender', 'Premiere', 'Motion 2D'],
  },
]

export const PROJECTS = [
  {
    title: 'Motai — motai.app',
    period: '2025 — 2026',
    url: 'https://motai.app',
    category: 'dev',
    status: 'online',
    role: 'Desarrollador full stack',
    description:
      'E-commerce y operación interna: WooCommerce, plugins a medida, sync ERP y backoffice NestJS + PostgreSQL.',
    highlights: [
      'Varios plugins PHP (PSR-4) y flujos propios sobre WooCommerce',
      'Backoffice: cotizaciones, contratos, RBAC y APIs documentadas',
    ],
    tags: ['WordPress', 'NestJS', 'TypeScript', 'PostgreSQL'],
  },
  {
    title: 'jeisson.pro',
    period: '2019 — Presente',
    url: 'https://jeisson.pro',
    category: 'dev',
    status: 'online',
    role: 'Desarrollo y producto',
    description:
      'Portafolio público, zona privada de CV para reclutadores y encargos puntuales de diseño/motion cuando el proyecto lo incluye.',
    highlights: ['React, Vite, Express y auth para CV', 'Marca personal: dev primero, creativo como complemento'],
    tags: ['React', 'Node.js', 'WordPress', 'Branding'],
  },
  {
    title: 'Campus — Administración escolar',
    period: 'Open source',
    url: 'https://github.com/Devewice/Campus',
    category: 'dev',
    status: 'opensource',
    role: 'Desarrollo full stack (PHP)',
    description:
      'Sistema de administración escolar open source (Devewice): matrículas, notas, reportes y módulos para la operación administrativa de instituciones educativas. Publicado en GitHub para revisión y uso.',
    highlights: [
      'Backend en PHP con lógica de negocio para procesos escolares',
      'Gestión académica y administrativa (notas, reportes, usuarios/roles)',
      'Proyecto abierto: documentación y código en el repositorio',
    ],
    tags: ['PHP', 'MySQL', 'GitHub', 'Educación', 'Open source'],
  },
  {
    title: 'Santiago Aviador — E-commerce',
    period: '2024 — 2025',
    url: null,
    category: 'dev',
    status: 'private',
    role: 'Desarrollo web (WooCommerce)',
    description:
      'Tienda WooCommerce para la operación de alimentación escolar: pedidos con anticipación, entrega al salón de clases y lógica de cupo (consumo por estudiante). Los acudientes pueden recargar o pagar desde casa el cupo consumido.',
    highlights: [
      'Catálogo, checkout y pagos en WordPress (Divi)',
      'Pedidos programados y entrega al salón',
      'Cupo por estudiante y pagos remotos para padres',
    ],
    tags: ['WooCommerce', 'WordPress', 'E-commerce', 'PHP'],
  },
  {
    title: 'Colegio Van Leeuwenhoek',
    period: '2020 — 2025',
    url: 'https://colvanlee.edu.co',
    category: 'education',
    status: 'online',
    role: 'TIC, desarrollo web y software a medida',
    description:
      'Coordinación TIC con desarrollo de página web, aplicaciones móviles y software de transmisión personalizado para la emisora, además de sistemas de carnetización, reportes y otras herramientas que la institución requería.',
    highlights: [
      'Sitio institucional y plataformas internas en producción',
      'Apps móviles y software de transmisión propio',
      'Carnetización, reportes y soporte a +800 usuarios (docentes y estudiantes)',
    ],
    tags: ['TIC', 'JavaScript', 'Web', 'Apps móviles', 'CMS'],
  },
  {
    title: 'Colegio Reina de Gales',
    period: '2021 — 2025',
    url: null,
    category: 'education',
    status: 'private',
    role: 'TIC, desarrollo web y software a medida',
    description:
      'Página web institucional, landings por ciclo y desarrollo de software para la operación de la institución: transmisión radial, gestión de inventarios y sistema de notas, entre otras necesidades internas.',
    highlights: [
      'Sitio web y contenidos por periodo lectivo',
      'Software de transmisión radial basado en aplicación propia',
      'Sistemas de inventario y notas para uso institucional',
    ],
    tags: ['TIC', 'JavaScript', 'Web', 'Software a medida', 'Institucional'],
  },
  {
    title: 'Revista Occidente XXI',
    period: '2020 — 2024',
    url: 'https://www.occidentexxi.com/ediciones',
    category: 'dev',
    status: 'archive',
    role: 'Desarrollo web y diseño editorial',
    description:
      'Portal de noticias web completo (publicación y archivo de ediciones) con sistemas anti-bots, Redis y cacheo. En paralelo: +20 ediciones en InDesign, identidad por número y cobertura fotográfica.',
    highlights: [
      'Sitio tipo portal de noticias en WordPress',
      'Capas anti-bots, Redis y estrategia de cacheo',
      'Diseño editorial y archivo público de números',
    ],
    tags: ['WordPress', 'Redis', 'Web', 'InDesign', 'Editorial'],
  },
  {
    title: 'Roger Murillo SAS',
    period: '2023 — 2025',
    url: null,
    category: 'dev',
    status: 'private',
    role: 'Desarrollo web, automatización y contenidos',
    description:
      'Sitio en WordPress, e-learning, tienda de compras en línea con bonos, automatizaciones en n8n con chatbots y piezas de campaña (incl. animación 2D cuando el proyecto lo requería).',
    highlights: [
      'Web institucional y comercial en WordPress',
      'Plataforma e-learning y sistema de compras online con bonos',
      'Flujos en n8n con chatbots para atención y procesos',
    ],
    tags: ['WordPress', 'n8n', 'Chatbots', 'E-learning', 'E-commerce', 'Automatización'],
  },
  {
    title: 'Corporación ESHAC',
    period: '2022',
    url: null,
    category: 'dev',
    status: 'private',
    role: 'Desarrollo web, automatización y diseño',
    description:
      'Sitio web, sistemas automatizados de cronogramas y agendamiento de citas, además de maquetación y piezas para redes alineadas a la identidad de la corporación.',
    highlights: [
      'Sitio web institucional',
      'Cronogramas automatizados y flujo de agendamiento de citas',
      'Piezas gráficas y campañas respetando el manual de marca',
    ],
    tags: ['Web', 'Automatización', 'Agendamiento', 'Diseño gráfico', 'Redes'],
  },
]

export const PROJECT_CATEGORIES = {
  all: 'Todos',
  dev: 'Desarrollo',
  creative: 'Diseño y multimedia',
  education: 'Educación',
}
