/** Ficha amplia por slug. Solo hechos que ya están en el trabajo o en el CV. */

export const PROJECT_DETAILS = {
  'paola-biker': {
    lead: 'Portal de la creadora Paola Biker: moto, parche y tienda. Un solo producto, con front y API propios, hablado en el tono de la marca y no como un club genérico.',
    scope: [
      'Cinco entradas públicas: Inicio, Parche, Tu voz, Tienda y Paola. Las alianzas viven en el pie, en el mismo conjunto que Parche.',
      'Rodadas con cupo propio. El pago humano (WhatsApp o correo) sigue disponible; la pasarela no lo apaga.',
      'Encuestas con flujo por pasos, introducción y cierre.',
      'Memorias con comentarios: crear, moderar, fijar y eliminar.',
      'Tienda, pedidos y pagos. Entrega en Bogotá y Soacha. Garantía por defecto de fabricación.',
      'Mapas para ubicar la operación del parche.',
      'Cuenta, sesión, roles y secciones editables de la marca.',
      'Voz de la marca separada del resto: relato, denuncias con moderación y constancia comunitaria, sin trámites que parezcan autoridad.',
    ],
    pieces: [
      {
        title: 'Arquitectura',
        text: 'Módulos que no se importan entre sí. El dominio no conoce Vue ni HTTP. Los casos de uso hablan con puertos y el arranque cablea los adapters. Cada vista recibe su módulo ya armado.',
      },
      {
        title: 'Qué quedó fuera a propósito',
        text: 'GPS en vivo, marketplace de terceros, trámites de comparendos, envío nacional, sincronización total de WhatsApp y moderación permanente. El sitio convive con WhatsApp; no lo reemplaza.',
      },
    ],
    stack: [
      { title: 'Interfaz', items: ['Vue 3', 'Vite', 'Vuetify', 'TypeScript', 'Vue Router', 'GSAP', 'Three.js', 'Leaflet'] },
      { title: 'API y datos', items: ['Node.js', 'TypeScript', 'Knex', 'MySQL', 'módulos por recurso'] },
      {
        title: 'Módulos',
        items: [
          'Inicio',
          'Club / parche',
          'Rodadas',
          'Tienda',
          'Pedidos',
          'Pagos',
          'Encuestas',
          'Voz',
          'Memorias',
          'Mapas',
          'Auth',
          'Roles',
          'Cuenta',
        ],
      },
    ],
  },
  'fastco-pathway': {
    lead: 'En Fastco el producto principal fue Pathway: notificaciones de la operación y el programador que las dispara. El contact center y el centro de mando van en el mismo periodo, como piezas aparte.',
    scope: [
      'Motor de notificaciones que ya existía y se extendió: catálogo de eventos, email y WhatsApp, preferencias y medios del usuario, historial y estado de cada envío.',
      'Programador de envíos únicos o recurrentes. Elige un tipo de evento ya definido, arma la audiencia, valida el contenido y deja la programación activa o apagada.',
      'Backoffice de notificaciones: alta y edición de programaciones, historial de ejecuciones, errores y disparo manual para probar.',
      'Reglas de ejecución: un envío a la vez por programación, cierre de corridas colgadas y tope de destinatarios por tanda.',
      'Contact center: API propia (antes apoyada en automatizaciones), con autenticación, tiempo real y mensajería entre servicios.',
      'Centro de mando de la operación, en el mismo entorno de trabajo de Fastco.',
    ],
    pieces: [
      {
        title: 'Pathway',
        text: 'Front de backoffice y API del programador. El motor resuelve canales del evento; una programación puede restringirlos. Si el evento está apagado en el catálogo, la corrida falla y no envía.',
      },
      {
        title: 'Contact center',
        text: 'Backend Node con API documentada, pruebas y contenedores. Tiempo real con Socket.IO y Redis. Colas con RabbitMQ. Pensado para correr en cluster.',
      },
    ],
    stack: [
      { title: 'Pathway — interfaz', items: ['Vue', 'Vuetify', 'TypeScript', 'Axios'] },
      {
        title: 'Pathway — API',
        items: ['Node.js', 'TypeScript', 'OpenAPI / TSOA', 'SQL Server', 'Objection', 'Knex', 'Zod', 'cron'],
      },
      { title: 'Canales', items: ['Email', 'WhatsApp', 'preferencias por usuario', 'historial de envíos'] },
      {
        title: 'Contact center',
        items: ['Express', 'OpenAPI', 'OAuth2', 'JWT', 'Socket.IO', 'Redis', 'RabbitMQ', 'Docker', 'Jest', 'Knex'],
      },
      { title: 'Datos según módulo', items: ['SQL Server', 'PostgreSQL', 'MySQL'] },
    ],
  },
  motai: {
    lead: 'E-commerce público y operación interna de Motai, de julio de 2025 a junio de 2026.',
    scope: [
      'motai.app: WooCommerce, plugins a medida y apps web, con sincronización hacia el ERP.',
      'Backoffice operativo: cotizaciones, contratos, permisos por rol y APIs documentadas.',
      'Integraciones por webhooks y actualización en tiempo real.',
      'Entrega continua: acciones de GitHub, Docker, migraciones y pruebas, con revisión por pull request.',
    ],
    stack: [
      { title: 'Tienda', items: ['WordPress', 'WooCommerce', 'PHP', 'PSR-4', 'Redis'] },
      { title: 'Backoffice', items: ['NestJS', 'Next.js', 'TypeScript', 'PostgreSQL', 'OpenAPI'] },
      { title: 'Integración y entrega', items: ['Webhooks', 'SSE', 'WebSockets', 'GitHub Actions', 'Docker', 'Jest', 'Vitest'] },
    ],
  },
  'jeisson-pro': {
    lead: 'Sitio personal y visor privado del CV. El portafolio es público; las hojas de vida solo se abren con sesión o con un enlace de invitación.',
    scope: [
      'Páginas públicas: inicio, sobre mí, servicios, proyectos y contacto.',
      'Área interna para generar enlaces temporales al CV.',
      'Dos versiones de hoja de vida (desarrollo y creativa) y descarga a PDF.',
    ],
    stack: [
      { title: 'Web', items: ['React 19', 'Vite', 'React Router', 'Framer Motion', 'Swiper'] },
      { title: 'Servidor', items: ['Node.js', 'Express', 'sesiones', 'Puppeteer'] },
    ],
  },
  campus: {
    lead: 'Plugin de WordPress para la operación académica de un colegio: periodos, cursos, notas y reportes, publicado como código abierto.',
    scope: [
      'Años, cursos, grupos, áreas y asignaturas.',
      'Carga académica, tutores y escalas de valoración.',
      'Asistencia y reportes para la operación administrativa.',
    ],
    stack: [{ title: 'Stack', items: ['PHP', 'WordPress', 'MySQL', 'Bootstrap', 'GitHub'] }],
  },
  'santiago-aviador': {
    lead: 'Tienda y sitio para alimentación escolar: el acudiente pide con anticipación, el pedido llega al salón y el cupo se consume por estudiante.',
    scope: [
      'Catálogo, checkout y pagos en WooCommerce.',
      'Pedidos programados y entrega al salón.',
      'Cupo por estudiante y pago remoto para padres.',
      'Contenidos centralizados en WordPress y SEO de las plantillas de conversión.',
    ],
    stack: [{ title: 'Stack', items: ['WordPress', 'WooCommerce', 'Divi', 'PHP', 'CSS'] }],
  },
  'van-leeuwenhoek': {
    lead: 'Coordinación TIC y desarrollo para el colegio: sitio, herramientas internas y soporte a una comunidad de más de 800 usuarios.',
    scope: [
      'Sitio institucional en colvanlee.edu.co y plataforma interna.',
      'Carnetización, reportes y software de la emisora.',
      'Soporte cotidiano a docentes y rebranding cuando el ciclo lo pedía.',
    ],
    stack: [{ title: 'Stack', items: ['JavaScript', 'HTML', 'CSS', 'CMS', 'apps móviles'] }],
  },
  'reina-de-gales': {
    lead: 'Portal del colegio, landings por ciclo y software de la operación diaria, en paralelo con otros contratos.',
    scope: [
      'Sitio institucional y más de 15 landings por ciclo.',
      'Transmisión radial, inventarios y notas.',
      'Contenidos y recursos digitales para la comunidad.',
    ],
    stack: [{ title: 'Stack', items: ['HTML', 'CSS', 'JavaScript', 'CMS'] }],
  },
  'occidente-xxi': {
    lead: 'Portal de la revista y archivo de ediciones, más el diseño de cada número.',
    scope: [
      'Sitio de noticias en WordPress con anti-bots, Redis y caché.',
      'Más de 20 ediciones impresas y digitales: maqueta, identidad del número y fotografía.',
    ],
    stack: [{ title: 'Stack', items: ['WordPress', 'Redis', 'InDesign', 'Photoshop', 'Illustrator'] }],
  },
  'roger-murillo': {
    lead: 'Web, formación en línea, tienda con bonos y automatizaciones de atención para la marca del cliente.',
    scope: [
      'Sitio institucional y comercial en WordPress.',
      'E-learning y compras en línea con bonos.',
      'Flujos en n8n con chatbots.',
      'Piezas de campaña y animación 2D cuando el encargo lo pedía.',
    ],
    stack: [{ title: 'Stack', items: ['WordPress', 'n8n', 'chatbots', 'e-learning', 'Blender', 'Premiere'] }],
  },
  eshac: {
    lead: 'Sitio, agenda y piezas de la corporación, alineadas a su identidad.',
    scope: [
      'Sitio institucional.',
      'Cronogramas y agendamiento de citas.',
      'Piezas para redes y campañas impresas y digitales.',
    ],
    stack: [{ title: 'Stack', items: ['Web', 'automatización', 'diseño gráfico', 'redes'] }],
  },
}
