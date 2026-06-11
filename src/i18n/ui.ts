export const languages = {
  en: 'English',
  es: 'Español'
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const showDefaultLang = true;

export const ui = {
  en: {
    'meta.title': 'Alejandro Senior | Frontend Developer',
    'meta.description':
      "Hey! I'm Alejandro Senior, a frontend developer specialized in Vue.js, passionate about building great user experiences and continuously evolving products.",
    'meta.locale': 'en-US',

    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.language': 'Language',

    'a11y.linkTo': 'Link to',
    'a11y.forProject': 'for project',
    'a11y.opensInNewTab': '(Opens in a new tab)',
    'a11y.love': 'Love',

    'hero.greeting': "Hey! I'm Alejandro Senior",
    'hero.role': "I'm a <strong>frontend</strong> developer.",
    'hero.bio': `Specialized in frontend development with <strong>Vue.js</strong> and <strong>Angular</strong>, yet passionate about learning different technologies and continuously improving products and user experiences. Currently working at <a href="https://www.microwd.es" target="_blank"><strong><span style="color: #00f9ad; text-decoration: underline; text-underline-offset: 4px; text-decoration-thickness: 2px">Microwd</span></strong></a> as <strong>Frontend Lead</strong>, a role I started in July 2022.`,
    'hero.tagline': `My last name may say <em>Senior</em> — but there's always more to learn, and honestly, that's the best part.`,

    'social.linkedin': 'LinkedIn',
    'social.github': 'GitHub',
    'social.email': 'Email',
    'social.resume': 'Resume',

    'experience.heading': "Where I've worked",

    'experience.microwd.title': 'Frontend Developer · Microwd',
    'experience.microwd.location': 'Madrid, Spain',
    'experience.microwd.start': 'July 2022',
    'experience.microwd.end': 'now',
    'experience.microwd.p1': `<q>Technology becomes meaningful when it helps create opportunities for others.</q>`,
    'experience.microwd.p2': `As part of a <strong>fintech platform</strong> focused on micro-investment opportunities, I have been responsible for building and maintaining <strong>user-facing applications</strong> that connect investors with projects in <strong>emerging markets</strong>.`,
    'experience.microwd.p3': `My work includes developing new features, improving user experience, integrating external services, and ensuring the platform remains <strong>scalable and maintainable</strong> as the product grows. I collaborate closely with product and backend teams, contributing not only to implementation but also to <strong>technical decision-making</strong> and product evolution.`,
    'experience.microwd.p4': `Over the years, I have taken ownership of <strong>complete projects</strong>, from initial idea and architecture to <strong>deployment and monitoring in production</strong>.`,

    'experience.animasoluciones.title': 'Software Developer Consultant · Animasoluciones ↗',
    'experience.animasoluciones.location': 'Madrid, Spain',
    'experience.animasoluciones.start': 'July 2019',
    'experience.animasoluciones.end': 'July 2022',
    'experience.animasoluciones.p1': `<q>The fastest way to grow as a developer is to solve different problems every day.</q>`,
    'experience.animasoluciones.p2': `During my time at the consultancy, I worked on a variety of client projects, each with unique technical and business challenges. This experience allowed me to develop a strong <strong>adaptability</strong> mindset and a broad understanding of <strong>software development</strong>.`,
    'experience.animasoluciones.p3': `My responsibilities included building <strong>web applications</strong>, implementing new features, integrating <strong>third-party services</strong>, and collaborating directly with clients to <strong>translate business requirements into technical solutions</strong>.`,
    'experience.animasoluciones.p4': `Working across multiple projects and technologies helped me strengthen both my <strong>technical skills</strong> and my ability to <strong>deliver value in dynamic environments</strong>.`,

    'projects.heading': 'Some of my favorite projects',
    'projects.realtajo.blurb': "⚽ My football team's official website",
    'projects.realtajo.linkSource': 'Source Code',
    'projects.realtajo.linkDemo': 'Visit the club!',
    'projects.realtajo.p1': `Together with a friend, I built the official website for <strong>Real Tajo C.F.</strong>, the amateur football club I play for with my friends in Aranjuez. The site brings matchday online: a <strong>squad section</strong> with player cards, a <strong>photo gallery</strong> optimized through Cloudinary, and the <strong>latest result and league standings</strong> always up to date.`,
    'projects.realtajo.p2': `Built with Astro and Vue and deployed on Firebase, it's the perfect example of a side project made for the love of the game — and yes, we are the <strong>2025/2026 league champions</strong>. 🏆`,
    'projects.realtajo.imageAlt': 'Preview of the project "Real Tajo C.F."',

    'projects.elunoporciento.blurb': '🧠 Real-time multiplayer logic quiz',
    'projects.elunoporciento.linkSource': 'Source Code',
    'projects.elunoporciento.linkDemo': 'Play a round!',
    'projects.elunoporciento.p1': `Inspired by the TV quiz show, <strong>El 1%</strong> is a real-time multiplayer game of logic puzzles: create a room, share its 4-letter code, and up to <strong>6 players</strong> face <strong>10 elimination rounds</strong> answering simultaneously against the clock. Multiplayer synchronization runs on <strong>PartyKit over WebSockets</strong>, with each room's state living in <strong>Cloudflare Durable Objects</strong>.`,
    'projects.elunoporciento.p2': `I built it to settle a recurring debate on game nights with friends: who actually belongs to the smartest 1%? The verdict is still out — but the rooms keep filling up. 🧠`,
    'projects.elunoporciento.imageAlt': 'Preview of the project "El 1%"',

    'projects.imcarrows.blurb': '🚗 Importing cars from Germany',
    'projects.imcarrows.linkSource': 'Source Code',
    'projects.imcarrows.linkDemo': 'Try it out!',
    'projects.imcarrows.p1': `I independently developed <strong>Imcarrows</strong>, a website focused on attracting customers interested in importing vehicles from Germany to Spain. The goal of the project was to clearly explain the <strong>end-to-end service</strong>—including vehicle sourcing, technical inspections, transportation, and registration—and to facilitate <strong>lead generation</strong> through conversion-optimized contact forms.`,
    'projects.imcarrows.p2': `The company belongs to a close friend of mine, and I was glad to help by building what became their primary business tool.`,
    'projects.imcarrows.imageAlt': 'Preview of the project "Imcarrows"',

    'about.heading': 'A little more about me',
    'about.work.heading': 'At Work',
    'about.work.emojiAlt': 'Laptop Emoji',
    'about.work.p1': `With over 6 years of experience in frontend development, I work with a strong <strong>attention to detail</strong> and a genuine focus on <strong>product quality</strong>. I've grown from developer to leading the frontend team, becoming the <strong>technical reference</strong> for all UI-related decisions.`,
    'about.work.p2': `Building <strong>well-structured, maintainable interfaces</strong> that are also enjoyable to use is what drives me — and I'm always looking for ways to improve the codebase, the workflow, or the <strong>user experience</strong>.`,
    'about.work.approachAlt': 'My approach with code',

    'about.personal.heading': 'My personal side',
    'about.personal.emojiAlt': 'Waving Hand Emoji',
    'about.personal.p1': `The three words that best define me are <strong>curious</strong>, <strong>committed</strong>, and <strong>collaborative</strong>. I find great satisfaction in understanding things deeply, not just making them work.`,
    'about.personal.p2': `I enjoy <strong>sharing knowledge</strong> and growing alongside teammates. And off the screen, you'll find me doing some sport, diving into a game, or exploring whatever new tech has caught my attention.`,
    'about.loves.sport': 'Sport',
    'about.loves.sportAlt': 'Sport Emoji',
    'about.loves.tech': 'Tech',
    'about.loves.techAlt': 'Laptop Emoji',
    'about.loves.gaming': 'Video games',
    'about.loves.gamingAlt': 'Gamepad Emoji',

    'about.location.heading': 'Location',
    'about.location.emojiAlt': 'House Emoji',
    'about.location.basedIn': 'Based in <strong>Madrid</strong>',
    'about.location.sameTime': 'Same time as you',
    'about.location.ahead': 'ahead of you',
    'about.location.behind': 'behind you',

    'contact.heading': 'Shoot me a message',
    'contact.intro': "If you're working on something interesting, or have a project in mind, <strong>I'd love to hear from you</strong>",
    'contact.linkedin': 'Connect on LinkedIn',

    'footer.builtWith': 'Built with',
    'footer.credits': `by <strong>Alejandro Senior</strong>. Deployed on <a href="https://cloudflare.com" target="_blank" rel="noopener noreferrer">Cloudflare</a>.`,

    scrollToTop: 'Scroll To Top'
  },
  es: {
    'meta.title': 'Alejandro Senior | Desarrollador Frontend',
    'meta.description':
      '¡Hola! Soy Alejandro Senior, desarrollador frontend especializado en Vue.js, apasionado por crear grandes experiencias de usuario y por la evolución continua de los productos.',
    'meta.locale': 'es-ES',

    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'nav.contact': 'Contacto',
    'nav.menu': 'Menú',
    'nav.language': 'Idioma',

    'a11y.linkTo': 'Enlace a',
    'a11y.forProject': 'del proyecto',
    'a11y.opensInNewTab': '(se abre en una pestaña nueva)',
    'a11y.love': 'Cariño',

    'hero.greeting': '¡Hola! Soy Alejandro Senior',
    'hero.role': 'Desarrollador <strong>frontend</strong>.',
    'hero.bio': `Especializado en desarrollo frontend con <strong>Vue.js</strong> y <strong>Angular</strong>, aunque me apasiona aprender tecnologías nuevas y mejorar continuamente los productos y la experiencia de usuario. Actualmente trabajo en <a href="https://www.microwd.es" target="_blank"><strong><span style="color: #00f9ad; text-decoration: underline; text-underline-offset: 4px; text-decoration-thickness: 2px">Microwd</span></strong></a> como <strong>Frontend Lead</strong>, un puesto que ocupo desde julio de 2022.`,
    'hero.tagline': `Puede que mi apellido diga <em>Senior</em>, pero siempre queda algo nuevo por aprender — y, sinceramente, esa es la mejor parte.`,

    'social.linkedin': 'LinkedIn',
    'social.github': 'GitHub',
    'social.email': 'Correo',
    'social.resume': 'Currículum',

    'experience.heading': 'Dónde he trabajado',

    'experience.microwd.title': 'Desarrollador Frontend · Microwd',
    'experience.microwd.location': 'Madrid, España',
    'experience.microwd.start': 'julio de 2022',
    'experience.microwd.end': 'actualidad',
    'experience.microwd.p1': `<q>La tecnología cobra sentido cuando ayuda a crear oportunidades para otras personas.</q>`,
    'experience.microwd.p2': `Como parte de una <strong>plataforma fintech</strong> centrada en oportunidades de microinversión, me he encargado de construir y mantener <strong>aplicaciones para usuarios finales</strong> que conectan a inversores con proyectos en <strong>mercados emergentes</strong>.`,
    'experience.microwd.p3': `Mi trabajo incluye el desarrollo de nuevas funcionalidades, la mejora de la experiencia de usuario, la integración de servicios externos y velar por que la plataforma siga siendo <strong>escalable y mantenible</strong> a medida que el producto crece. Colaboro estrechamente con los equipos de producto y backend, aportando no solo en la implementación, sino también en la <strong>toma de decisiones técnicas</strong> y en la evolución del producto.`,
    'experience.microwd.p4': `A lo largo de los años he asumido la responsabilidad de <strong>proyectos completos</strong>, desde la idea inicial y la arquitectura hasta el <strong>despliegue y la monitorización en producción</strong>.`,

    'experience.animasoluciones.title': 'Consultor de Desarrollo de Software · Animasoluciones ↗',
    'experience.animasoluciones.location': 'Madrid, España',
    'experience.animasoluciones.start': 'julio de 2019',
    'experience.animasoluciones.end': 'julio de 2022',
    'experience.animasoluciones.p1': `<q>La forma más rápida de crecer como desarrollador es resolver problemas distintos cada día.</q>`,
    'experience.animasoluciones.p2': `Durante mi etapa en la consultora trabajé en una gran variedad de proyectos para clientes, cada uno con sus propios retos técnicos y de negocio. Esta experiencia me permitió desarrollar una sólida <strong>capacidad de adaptación</strong> y una visión amplia del <strong>desarrollo de software</strong>.`,
    'experience.animasoluciones.p3': `Mis responsabilidades incluían la construcción de <strong>aplicaciones web</strong>, la implementación de nuevas funcionalidades, la integración de <strong>servicios de terceros</strong> y la colaboración directa con clientes para <strong>traducir requisitos de negocio en soluciones técnicas</strong>.`,
    'experience.animasoluciones.p4': `Trabajar en múltiples proyectos y tecnologías me ayudó a reforzar tanto mis <strong>habilidades técnicas</strong> como mi capacidad para <strong>aportar valor en entornos cambiantes</strong>.`,

    'projects.heading': 'Algunos de mis proyectos favoritos',
    'projects.realtajo.blurb': '⚽ La web oficial de mi equipo de fútbol',
    'projects.realtajo.linkSource': 'Código fuente',
    'projects.realtajo.linkDemo': '¡Visita el club!',
    'projects.realtajo.p1': `Junto a un amigo, desarrollé la web oficial del <strong>Real Tajo C.F.</strong>, el club de fútbol amateur en el que juego con mis amigos en Aranjuez. La web traslada el día de partido a internet: una sección de <strong>plantilla</strong> con fichas de jugadores, una <strong>galería de fotos</strong> optimizada con Cloudinary y el <strong>último resultado y la clasificación</strong> siempre al día.`,
    'projects.realtajo.p2': `Construida con Astro y Vue y desplegada en Firebase, es el ejemplo perfecto de un proyecto hecho por amor al juego — y sí, somos los <strong>campeones de liga 2025/2026</strong>. 🏆`,
    'projects.realtajo.imageAlt': 'Vista previa del proyecto "Real Tajo C.F."',

    'projects.elunoporciento.blurb': '🧠 Quiz de lógica multijugador en tiempo real',
    'projects.elunoporciento.linkSource': 'Código fuente',
    'projects.elunoporciento.linkDemo': '¡Juega una partida!',
    'projects.elunoporciento.p1': `Inspirado en el concurso de televisión, <strong>El 1%</strong> es un juego multijugador de preguntas de lógica en tiempo real: creas una sala, compartes su código de 4 letras y hasta <strong>6 jugadores</strong> se enfrentan a <strong>10 rondas eliminatorias</strong> respondiendo a la vez contrarreloj. La sincronización corre sobre <strong>PartyKit con WebSockets</strong>, y el estado de cada sala vive en <strong>Cloudflare Durable Objects</strong>.`,
    'projects.elunoporciento.p2': `Lo construí para zanjar un debate recurrente en las noches de juegos con amigos: ¿quién pertenece de verdad al 1% más listo? El veredicto sigue pendiente — pero las salas se siguen llenando. 🧠`,
    'projects.elunoporciento.imageAlt': 'Vista previa del proyecto "El 1%"',

    'projects.imcarrows.blurb': '🚗 Importación de coches desde Alemania',
    'projects.imcarrows.linkSource': 'Código fuente',
    'projects.imcarrows.linkDemo': '¡Pruébalo!',
    'projects.imcarrows.p1': `Desarrollé de forma íntegra <strong>Imcarrows</strong>, una web orientada a captar clientes interesados en importar vehículos desde Alemania a España. El objetivo del proyecto era explicar con claridad el <strong>servicio completo</strong> —búsqueda de vehículos, inspección técnica, transporte y matriculación— y facilitar el <strong>contacto con clientes potenciales</strong> mediante formularios optimizados para la conversión.`,
    'projects.imcarrows.p2': `La empresa es de un buen amigo, y me alegró poder ayudarle construyendo lo que acabó siendo su principal herramienta de negocio.`,
    'projects.imcarrows.imageAlt': 'Vista previa del proyecto "Imcarrows"',

    'about.heading': 'Un poco más sobre mí',
    'about.work.heading': 'En el trabajo',
    'about.work.emojiAlt': 'Emoji de portátil',
    'about.work.p1': `Con más de 6 años de experiencia en desarrollo frontend, trabajo con una gran <strong>atención al detalle</strong> y un interés genuino por la <strong>calidad del producto</strong>. He pasado de ser desarrollador a liderar el equipo de frontend, convirtiéndome en el <strong>referente técnico</strong> de todas las decisiones relacionadas con la interfaz.`,
    'about.work.p2': `Lo que más me motiva es construir <strong>interfaces bien estructuradas y mantenibles</strong> que además resulten agradables de usar — y siempre estoy buscando formas de mejorar el código, el flujo de trabajo o la <strong>experiencia de usuario</strong>.`,
    'about.work.approachAlt': 'Mi forma de enfocar el código',

    'about.personal.heading': 'Mi lado personal',
    'about.personal.emojiAlt': 'Emoji de mano saludando',
    'about.personal.p1': `Las tres palabras que mejor me definen son <strong>curioso</strong>, <strong>comprometido</strong> y <strong>colaborador</strong>. Disfruto mucho entendiendo las cosas a fondo, no solo haciendo que funcionen.`,
    'about.personal.p2': `Me encanta <strong>compartir conocimiento</strong> y crecer junto a mis compañeros de equipo. Y fuera de la pantalla, lo más probable es que me encuentres haciendo deporte, metido de lleno en un videojuego o investigando la última tecnología que ha llamado mi atención.`,
    'about.loves.sport': 'Deporte',
    'about.loves.sportAlt': 'Emoji de deporte',
    'about.loves.tech': 'Tecnología',
    'about.loves.techAlt': 'Emoji de portátil',
    'about.loves.gaming': 'Videojuegos',
    'about.loves.gamingAlt': 'Emoji de mando de videoconsola',

    'about.location.heading': 'Ubicación',
    'about.location.emojiAlt': 'Emoji de casa',
    'about.location.basedIn': 'Vivo en <strong>Madrid</strong>',
    'about.location.sameTime': 'La misma hora que tú',
    'about.location.ahead': 'por delante de ti',
    'about.location.behind': 'por detrás de ti',

    'contact.heading': 'Envíame un mensaje',
    'contact.intro': 'Si estás trabajando en algo interesante o tienes un proyecto en mente, <strong>me encantaría saber de ti.</strong>',
    'contact.linkedin': 'Conectar en LinkedIn',

    'footer.builtWith': 'Hecho con',
    'footer.credits': `por <strong>Alejandro Senior</strong>. Desplegado en <a href="https://cloudflare.com" target="_blank" rel="noopener noreferrer">Cloudflare</a>.`,

    scrollToTop: 'Volver arriba'
  }
} as const;

export type TranslationKey = keyof (typeof ui)[typeof defaultLang];
