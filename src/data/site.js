export const SITE = {
  name: 'Jeisson David Riveros García',
  shortName: 'Jeisson',
  tagline: 'Desarrollo web full stack y diseño multimedial',
  email: 'contacto@jeisson.pro',
  siteUrl: 'https://jeisson.pro',
  location: 'Bogotá D.C., Colombia',
}

export const HERO = {
  title: 'Construyo productos web y experiencias visuales con propósito',
  subtitle:
    'Más de 5 años en producción: PHP, TypeScript, WordPress, APIs y diseño editorial. Disponible para proyectos full stack, plugins a medida y comunicación visual.',
  ctas: [
    { label: 'Conóceme', to: '/sobre-mi', primary: false },
    { label: 'Ver proyectos', to: '/proyectos', primary: true },
    { label: 'Contactar', to: '/contacto', primary: false },
  ],
}

export const ABOUT = {
  intro: [
    'Soy desarrollador web full stack y diseñador multimedial con base en Bogotá. Me muevo entre código en producción, WordPress/WooCommerce a escala y piezas visuales con criterio editorial.',
    'He liderado plataformas educativas, e-commerce y productos como motai.app, además de mantener desarrollo activo en backoffice interno (NestJS, Next.js, PostgreSQL).',
    'Trabajo con equipos ágiles, Git, CI/CD y documentación de APIs. También diseño marca, revistas digitales y campañas cuando el proyecto lo pide.',
  ],
  highlights: [
    { label: '5+ años', detail: 'En desarrollo y diseño en producción' },
    { label: 'Full stack', detail: 'PHP, TypeScript, React, WordPress, SQL' },
    { label: 'Dos perfiles', detail: 'CV técnico y CV creativo (área interna)' },
    { label: 'Remoto / híbrido', detail: 'Colombia y clientes internacionales' },
  ],
}

export const SERVICES = [
  {
    title: 'Desarrollo web full stack',
    description:
      'Sitios, APIs REST, plugins WordPress, integraciones ERP y backoffice con NestJS/Next.js. Código mantenible y despliegue continuo.',
    tags: ['PHP', 'TypeScript', 'Laravel', 'NestJS', 'PostgreSQL'],
  },
  {
    title: 'WordPress & e-commerce',
    description:
      'WooCommerce, catálogos, caché, sincronización de inventario y optimización para conversión y Core Web Vitals.',
    tags: ['WooCommerce', 'Plugins custom', 'Redis', 'SEO técnico'],
  },
  {
    title: 'Diseño multimedial',
    description:
      'Branding, editorial, motion 2D, fotografía y piezas para redes. Portfolio creativo en Behance y elcreador.com.co.',
    tags: ['Adobe Suite', 'Branding', 'Editorial', 'Motion'],
  },
  {
    title: 'Consultoría y formación TIC',
    description:
      'Coordinación TIC en instituciones educativas, plataformas internas y acompañamiento a equipos no técnicos.',
    tags: ['Educación', 'CMS', 'UX', 'Soporte'],
  },
]

export const PROJECTS = [
  {
    title: 'jeisson.pro',
    period: '2026 — Presente',
    url: 'https://jeisson.pro',
    description: 'Portafolio personal y sistema interno de CV con autenticación.',
    tags: ['React', 'Node.js', 'Express'],
  },
  {
    title: 'Motai — motai.app',
    period: '2025 — 2026',
    url: 'https://motai.app',
    description:
      'Producto público WooCommerce y backoffice operativo (TypeScript, NestJS, Next.js).',
    tags: ['WordPress', 'NestJS', 'PostgreSQL'],
  },
  {
    title: 'El Creador',
    period: '2019 — Presente',
    url: 'https://www.elcreador.com.co',
    description: 'Marca personal: diseño, web, animación y servicios creativos.',
    tags: ['WordPress', 'Branding', 'Portfolio'],
  },
  {
    title: 'Colegio Van Leeuwenhoek',
    period: '2020 — 2023',
    url: 'https://colvanlee.edu.co',
    description: 'Coordinación TIC, web institucional y plataforma educativa.',
    tags: ['JavaScript', 'CMS', 'Educación'],
  },
  {
    title: 'Occidente XXI — Ediciones',
    period: '2020 — 2024',
    url: 'https://www.occidentexxi.com/ediciones',
    description: 'Diseño editorial digital e impreso por edición.',
    tags: ['InDesign', 'Editorial', 'Fotografía'],
  },
  {
    title: 'Campus',
    period: 'Open source',
    url: 'https://github.com/Devewice/Campus',
    description: 'Sistema de administración escolar (PHP).',
    tags: ['PHP', 'GitHub'],
  },
]
