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
    lead: 'Pathway es la plataforma de pagos de Fastco. El cobro, la facturación y el rastro de la operación viven ahí. El motor de notificaciones y el programador son una pieza de esa plataforma. El contact center y el centro de mando van en el mismo periodo.',
    scope: [
      'Plataforma de pagos: el flujo de cobro de la operación y las conexiones con las pasarelas.',
      'Generación de facturación a partir de esa operación.',
      'Integración con la API de WhatsApp de Meta, además del canal de email.',
      'Motor de notificaciones: catálogo de eventos, preferencias y medios del usuario, historial y estado de cada envío.',
      'Programador de envíos únicos o recurrentes. Elige un tipo de evento ya definido, arma la audiencia, valida el contenido y deja la programación activa o apagada.',
      'Roles de usuario: quién puede operar, ver o cambiar cada parte de la plataforma.',
      'Auditoría de la operación: qué se hizo, quién lo hizo y sobre qué registro.',
      'Eventos y trazabilidad de punta a punta, para seguir un pago, un envío o un cambio.',
      'Backoffice de notificaciones: alta y edición de programaciones, historial de ejecuciones, errores y disparo manual para probar.',
      'Reglas de ejecución del programador: un envío a la vez por programación, cierre de corridas colgadas y tope de destinatarios por tanda.',
      'Contact center: API propia, con autenticación, tiempo real y mensajería entre servicios.',
      'Centro de mando de la operación, en el mismo entorno de trabajo de Fastco.',
    ],
    pieces: [
      {
        title: 'Pagos y facturación',
        text: 'Pathway opera los cobros. Las pasarelas entran por integración, y la facturación sale de esa misma operación, no de un archivo aparte.',
      },
      {
        title: 'Notificaciones y WhatsApp',
        text: 'El motor resuelve los canales del evento, email y WhatsApp vía la API de Meta. Una programación puede restringirlos. Si el evento está apagado en el catálogo, la corrida falla y no envía.',
      },
      {
        title: 'Roles, auditoría y trazabilidad',
        text: 'Los roles delimitan la plataforma. La auditoría registra la acción y el evento deja rastro para seguir un pago, una factura o un envío hasta su estado.',
      },
      {
        title: 'Contact center',
        text: 'Backend Node con API documentada, pruebas y contenedores. Tiempo real con Socket.IO y Redis. Colas con RabbitMQ. Pensado para correr en cluster.',
      },
    ],
    stack: [
      {
        title: 'Plataforma',
        items: ['pagos', 'pasarelas', 'facturación', 'roles de usuario', 'auditoría', 'eventos', 'trazabilidad'],
      },
      { title: 'Pathway — interfaz', items: ['Vue', 'Vuetify', 'TypeScript', 'Axios'] },
      {
        title: 'Pathway — API',
        items: ['Node.js', 'TypeScript', 'OpenAPI / TSOA', 'SQL Server', 'Objection', 'Knex', 'Zod', 'cron'],
      },
      {
        title: 'Canales',
        items: ['Email', 'WhatsApp (Meta)', 'plantillas', 'preferencias por usuario', 'historial de envíos'],
      },
      {
        title: 'Contact center',
        items: ['Express', 'OpenAPI', 'OAuth2', 'JWT', 'Socket.IO', 'Redis', 'RabbitMQ', 'Docker', 'Jest', 'Knex'],
      },
      { title: 'Datos según módulo', items: ['SQL Server', 'PostgreSQL', 'MySQL'] },
    ],
  },
  motai: {
    lead: 'De julio de 2025 a junio de 2026 construí y mantuve el producto público de Motai y el backoffice con el que opera el negocio: tienda, inventario sincronizado, cotizaciones y contratos.',
    scope: [
      'motai.app en producción: WooCommerce, apps web y flujos propios encima de la tienda.',
      'Plugins a medida en PHP (PSR-4) para el catálogo, la sincronización con el ERP y la caché.',
      'API JSON entre la tienda y el ERP, con Redis para no pegarle al origen en cada visita.',
      'Backoffice operativo: cotizaciones, contratos, permisos por rol y APIs documentadas con OpenAPI.',
      'Servicios externos de identidad, firma digital y ERP, conectados por webhooks.',
      'Tiempo real con SSE y WebSockets para que la operación no dependa de recargar la página.',
      'CI/CD con GitHub Actions y Docker, migraciones de base de datos y pruebas con Jest y Vitest.',
      'Trabajo en Git con revisión por pull request antes de llegar a producción.',
    ],
    pieces: [
      {
        title: 'Tienda',
        text: 'WooCommerce como base, con plugins propios en lugar de estirar el tema. El inventario se sincroniza con el ERP y la caché evita repetir esa consulta en cada request.',
      },
      {
        title: 'Backoffice',
        text: 'Aplicación NestJS y Next.js sobre PostgreSQL. Ahí viven cotizaciones, contratos y el control de quién puede ver o cambiar cada cosa. Las APIs quedan descritas en OpenAPI.',
      },
      {
        title: 'Integraciones',
        text: 'Identidad, firma digital y ERP entran por webhooks. Lo que tiene que verse al momento usa SSE o WebSockets, no un refresco manual.',
      },
    ],
    stack: [
      { title: 'Tienda', items: ['WordPress', 'WooCommerce', 'PHP', 'PSR-4', 'Redis', 'API JSON'] },
      { title: 'Backoffice', items: ['NestJS', 'Next.js', 'TypeScript', 'PostgreSQL', 'OpenAPI', 'RBAC'] },
      { title: 'Tiempo real e integraciones', items: ['Webhooks', 'SSE', 'WebSockets', 'identidad', 'firma digital', 'ERP'] },
      { title: 'Entrega', items: ['Git', 'GitHub Actions', 'Docker', 'Jest', 'Vitest', 'migraciones'] },
    ],
  },
  'jeisson-pro': {
    lead: 'Sitio personal y visor privado del CV. El portafolio es público; las hojas de vida solo se abren con sesión de administrador o con un enlace de invitación.',
    scope: [
      'Páginas públicas: inicio, sobre mí, servicios, proyectos y contacto.',
      'Ficha de cada proyecto con alcance y tecnologías, abierta desde el portafolio y desde el CV.',
      'Login de administrador y área interna para crear enlaces de invitados al CV, con caducidad o sin límite.',
      'Dos hojas de vida: desarrollo y creativa. La creativa oculta los roles que no son de diseño.',
      'Descarga a PDF con Chrome headless. La versión ATS sale en una columna, sin foto ni redes secundarias.',
      'JSON de Reactive Resume como fuente del contenido, y HTML embebido para verlo en el navegador.',
      'Encargos de la marca: diseño gráfico, desarrollo, animación y producción audiovisual para clientes de educación y comercio.',
    ],
    pieces: [
      {
        title: 'Público',
        text: 'React y Vite. El inicio usa motion y un carrusel de casos. Los textos del sitio viven en un solo módulo de datos, no repartidos por las vistas.',
      },
      {
        title: 'CV',
        text: 'Express sirve el HTML del CV y genera el PDF. La sesión va en cookie. Un invitado entra por un token y no ve el menú de administración.',
      },
    ],
    stack: [
      { title: 'Web', items: ['React 19', 'Vite', 'React Router', 'Framer Motion', 'Swiper'] },
      { title: 'Servidor', items: ['Node.js', 'Express', 'sesiones', 'Puppeteer', 'Chrome headless'] },
      { title: 'Contenido', items: ['Reactive Resume', 'HTML', 'CSS', 'dos perfiles de CV'] },
    ],
  },
  campus: {
    lead: 'Plugin de WordPress para operar un colegio sin planillas sueltas: periodos, cursos, carga de profesores, notas, asistencia y reportes. El código está publicado.',
    scope: [
      'Años académicos y su división en periodos (trimestres o bimestres).',
      'Cursos, grupos, áreas y asignaturas del plan de estudios.',
      'Carga académica: qué profesor dicta qué materia en qué curso, y tutores de grupo.',
      'Escalas de valoración configurables, en lugar de una nota fija de 1 a 5.',
      'Criterios de asistencia y seguimiento por estudiante.',
      'Notas, usuarios con roles y reportes para la coordinación.',
      'Repositorio público en GitHub para revisión y uso.',
    ],
    pieces: [
      {
        title: 'Qué reemplaza',
        text: 'El manejo manual de planillas. La institución configura el año, asigna la carga y registra desde el mismo WordPress donde ya está el sitio.',
      },
    ],
    stack: [
      { title: 'Aplicación', items: ['PHP', 'WordPress', 'MySQL', 'Bootstrap'] },
      { title: 'Módulos', items: ['años', 'cursos', 'asignaturas', 'carga académica', 'notas', 'asistencia', 'reportes', 'roles'] },
      { title: 'Publicación', items: ['GitHub', 'código abierto'] },
    ],
  },
  'santiago-aviador': {
    lead: 'Tienda y sitio de alimentación escolar. El acudiente pide con anticipación, el pedido se entrega en el salón y el cupo se descuenta por estudiante.',
    scope: [
      'Sitio corporativo y tienda en el mismo WordPress, con catálogo y checkout.',
      'Pasarela de pago para que el padre recargue o pague desde la casa el cupo ya consumido.',
      'Pedidos con anticipación, no una compra suelta el mismo día.',
      'Entrega asociada al salón de clases, no a una dirección de domicilio.',
      'Cupo por estudiante: se consume en el colegio y se paga después.',
      'Contenidos de la marca centralizados en el CMS, para no publicar a mano en varios lados.',
      'Plantillas de conversión con SEO on-page y diseño responsive en Divi.',
      'UX/UI de la tienda y de las páginas de conversión, no solo el catálogo.',
      'Identidad visual aplicada en la web y en piezas de campaña de la marca.',
    ],
    pieces: [
      {
        title: 'Operación',
        text: 'El flujo no es el de una tienda genérica. Hay que saber a qué estudiante corresponde el pedido, en qué salón se entrega y cuánto cupo queda por cobrar.',
      },
      {
        title: 'Marca',
        text: 'El sitio y la tienda salen juntos. La identidad de Santiago Aviador se aplica en la interfaz y en las piezas de campaña, con plantillas pensadas para convertir.',
      },
    ],
    stack: [
      { title: 'Tienda', items: ['WordPress', 'WooCommerce', 'Divi', 'PHP', 'CSS'] },
      { title: 'Operación escolar', items: ['pedidos programados', 'entrega al salón', 'cupo por estudiante', 'pago remoto'] },
      { title: 'Contenido y marca', items: ['CMS', 'SEO on-page', 'responsive', 'UX/UI', 'identidad visual', 'piezas de campaña'] },
    ],
  },
  'van-leeuwenhoek': {
    lead: 'Coordinación TIC y desarrollo para el colegio, de 2020 a 2025. El sitio público, las herramientas internas y el soporte diario convivían en la misma área, para una comunidad de más de 800 usuarios.',
    scope: [
      'Sitio institucional en colvanlee.edu.co y plataforma interna de la operación.',
      'Aplicaciones móviles pedidas por la institución, no solo la página.',
      'Software de transmisión propio para la emisora escolar.',
      'Carnetización y reportes para secretaría y coordinación.',
      'Soporte cotidiano a docentes: cuentas, aula y fallas del día.',
      'Coordinación del área: infraestructura, plataformas internas y soporte institucional.',
      'Rebranding y creación de la marca institucional, más piezas audiovisuales del ciclo.',
      'Recursos educativos digitales y módulos web interactivos junto al CMS.',
      'Operación de la emisora: locución, edición de audio, programación y archivo multimedia.',
    ],
    pieces: [
      {
        title: 'Web y plataforma',
        text: 'La página pública y la plataforma interna salieron del mismo equipo TIC. El contenido institucional vive en el CMS; lo que el CMS no cubría se hizo a medida, junto con la marca del colegio.',
      },
      {
        title: 'Emisora y carnets',
        text: 'La emisora no usó un reproductor genérico: el software de transmisión se adaptó a la programación del colegio. En cabina también hubo locución, edición en Audition y archivo de lo emitido. Carnets y reportes cubren la parte administrativa.',
      },
    ],
    stack: [
      { title: 'Web', items: ['JavaScript', 'HTML5', 'CSS', 'CMS', 'módulos interactivos'] },
      { title: 'A medida', items: ['apps móviles', 'software de emisión', 'carnetización', 'reportes'] },
      { title: 'Emisora', items: ['locución', 'Adobe Audition', 'programación', 'archivo multimedia'] },
      { title: 'Operación', items: ['infraestructura', 'soporte a docentes', '+800 usuarios', 'rebranding'] },
    ],
  },
  'reina-de-gales': {
    lead: 'Portal, landings de cada ciclo y software de la operación del colegio. Fue una jornada parcial, en paralelo con otros contratos.',
    scope: [
      'Mantenimiento del portal institucional en HTML, CSS, JavaScript y CMS, con accesibilidad y diseño responsive.',
      'Más de 15 landing pages y recursos digitales por ciclo escolar.',
      'Software de transmisión radial basado en una aplicación propia.',
      'Inventarios para el uso interno de la institución.',
      'Sistema de notas, aparte del sitio público.',
      'Actualización de contenidos para la comunidad educativa en cada periodo.',
      'Clase de radio y televisión: producción audiovisual, locución, edición y proyectos de la emisora escolar.',
      'Producción de contenidos online: redes, plataformas web y materiales multimedia de la institución.',
      'Jornada parcial, en paralelo con otros contratos.',
    ],
    pieces: [
      {
        title: 'Sitio',
        text: 'El portal y las landings se actualizan con el calendario escolar. La página se mantiene accesible y responsive; no se publica una vez y se deja.',
      },
      {
        title: 'Software interno',
        text: 'Radio, inventarios y notas cubren la operación del día a día. El sitio informa; estos sistemas registran.',
      },
      {
        title: 'Radio y contenidos',
        text: 'Además del portal hubo clase de radio y televisión (producción, locución y edición) y producción de contenidos para redes y la web, con la edición de los materiales institucionales.',
      },
    ],
    stack: [
      { title: 'Web', items: ['HTML', 'CSS', 'JavaScript', 'CMS', 'accesibilidad', 'responsive'] },
      { title: 'Sistemas', items: ['transmisión radial', 'inventarios', 'notas', 'landings por ciclo'] },
      { title: 'Contenidos', items: ['radio escolar', 'locución', 'edición', 'redes', 'multimedia institucional'] },
    ],
  },
  'occidente-xxi': {
    lead: 'Portal de la revista y diseño de cada número, de 2020 a 2024. El sitio publica y archiva; InDesign cierra la edición impresa y la digital.',
    scope: [
      'Portal de noticias en WordPress: publicación continua y archivo de ediciones.',
      'Capas anti-bots para que el tráfico automático no tumbe ni ensucie el sitio.',
      'Redis y caché para aguantar la portada y el archivo sin regenerar cada visita.',
      'Más de 20 ediciones, cada una con identidad visual propia.',
      'Maquetación en InDesign, retoque fotográfico y adaptación del número a la web.',
      'Fotografía de eventos culturales que después entra a la edición.',
      'Cierre editorial con fecha: cada número sale en impreso, en digital y adaptado a la web.',
    ],
    pieces: [
      {
        title: 'Portal',
        text: 'No es una landing de la revista. Es un sitio de noticias con archivo. Anti-bots, Redis y caché están ahí porque el archivo y la portada se consultan todo el tiempo.',
      },
      {
        title: 'Edición',
        text: 'Cada número tiene su propia línea visual. La maqueta, la foto y la versión web salen del mismo cierre editorial, con fecha de imprenta.',
      },
    ],
    stack: [
      { title: 'Web', items: ['WordPress', 'Redis', 'caché', 'anti-bots'] },
      { title: 'Editorial', items: ['InDesign', 'Photoshop', 'Illustrator', 'fotografía', '+20 ediciones'] },
    ],
  },
  'roger-murillo': {
    lead: 'Web, formación, tienda y automatización para la marca del cliente, entre 2023 y 2025. El mismo encargo mezclaba sitio, cursos, bonos y piezas de campaña.',
    scope: [
      'Sitio institucional y comercial en WordPress.',
      'Plataforma e-learning para los cursos de la marca.',
      'Tienda en línea con bonos: la compra no era solo un producto físico.',
      'Flujos en n8n con chatbots para atención y procesos repetidos.',
      'Campañas multicanal: redes, landings y seguimiento de las piezas publicadas.',
      'Coordinación creativa de cada campaña, desde el concepto hasta la publicación y el seguimiento.',
      'Animación 2D cuando la campaña lo pedía, no como un servicio aparte.',
    ],
    pieces: [
      {
        title: 'Producto digital',
        text: 'WordPress sostiene el sitio, el e-learning y la tienda. Los bonos y los cursos cambian el checkout respecto a un catálogo simple.',
      },
      {
        title: 'Atención y campaña',
        text: 'n8n conecta los chatbots con los procesos. Las piezas de redes y la animación salen del mismo calendario de campaña.',
      },
    ],
    stack: [
      { title: 'Web', items: ['WordPress', 'e-learning', 'e-commerce', 'bonos', 'landings'] },
      { title: 'Automatización', items: ['n8n', 'chatbots'] },
      { title: 'Campaña', items: ['Blender', 'Premiere', 'redes', 'animación 2D'] },
    ],
  },
  eshac: {
    lead: 'Sitio, agenda y piezas de la corporación durante 2022. La web, las citas y la gráfica salieron con la misma identidad.',
    scope: [
      'Sitio institucional de la corporación.',
      'Cronogramas automatizados, para no armar el calendario a mano cada ciclo.',
      'Agendamiento de citas conectado a ese calendario.',
      'Maquetación de campañas impresas y digitales.',
      'Piezas para redes alineadas al manual de marca, no a una plantilla genérica.',
      'Estrategia de comunicación visual de esas redes, no solo la pieza suelta.',
      'Contenidos promocionales con la misma línea visual que el sitio.',
    ],
    pieces: [
      {
        title: 'Operación',
        text: 'El cronograma y las citas evitan que la agenda viva en hojas sueltas. Quien publica una fecha lo hace en el sistema, no en un archivo aparte.',
      },
      {
        title: 'Marca',
        text: 'Impreso, redes y sitio usan la misma identidad. La maqueta no se diseña al margen de lo que ya está publicado.',
      },
    ],
    stack: [
      { title: 'Web', items: ['sitio institucional', 'cronogramas', 'agendamiento de citas'] },
      { title: 'Gráfico', items: ['maquetación', 'campañas impresas', 'redes', 'manual de marca'] },
    ],
  },
}
