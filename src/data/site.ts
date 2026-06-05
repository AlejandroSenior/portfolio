import type { ExperienceEntry, NavLink, Project, SocialLink } from 'src/interfaces';

export const EMAIL = 'alejandrosenior@outlook.es';

export const navLinks: NavLink[] = [
  { label: 'Experience', href: '#experience', icon: 'lucide:briefcase' },
  { label: 'Projects', href: '#projects', icon: 'lucide:folder-git' },
  { label: 'About', href: '#about', icon: 'lucide:user' },
  { label: 'Contact', href: '#contact', icon: 'lucide:mail' }
];

export const heroSocials: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/alejandrosenior', icon: 'lucide:linkedin' },
  { label: 'GitHub', href: 'https://github.com/AlejandroSenior', icon: 'lucide:github' },
  { label: 'Email', href: `mailto:${EMAIL}`, icon: 'lucide:mail' },
  { label: 'Resume', href: '/CV-Alejandro-Senior.pdf', icon: 'lucide:scroll' }
];

export const contactSocials: SocialLink[] = [{ label: 'LinkedIn', href: 'https://linkedin.com/in/alejandrosenior', icon: 'lucide:linkedin' }];

export const experience: ExperienceEntry[] = [
  {
    title: 'Frontend Developer · Microwd',
    href: 'https://www.microwd.es',
    location: 'Madrid, Spain',
    start: { label: 'July 2022', datetime: '2022-07' },
    end: { label: 'May 2024', datetime: '2024-5' },
    paragraphs: [
      `<q>Technology becomes meaningful when it helps create opportunities for others.</q>`,
      `As part of a fintech platform focused on micro-investment opportunities, I have been responsible for building and maintaining user-facing applications that connect investors with projects in emerging markets.`,
      `My work includes developing new features, improving user experience, integrating external services, and ensuring the platform remains scalable and maintainable as the product grows. I collaborate closely with product and backend teams, contributing not only to implementation but also to technical decision-making and product evolution.`,
      `Over the years, I have taken ownership of complete projects, from initial idea and architecture to deployment and monitoring in production.`
    ],
    skills: [
      { label: 'Communication', icon: 'skills/communication' },
      { label: 'Vue', icon: 'skills/vue' },
      { label: 'Nuxt', icon: 'skills/nuxt' },
      { label: 'Angular', icon: 'skills/angular' },
      { label: 'TypeScript', icon: 'skills/typescript' },
      { label: 'Firebase', icon: 'skills/firebase' },
      { label: 'GCP', icon: 'skills/gcp' }
    ]
  },
  {
    title: 'Software Developer Consultant · Animasoluciones ↗',
    href: 'https://animasoluciones.es',
    location: 'Madrid, Spain',
    start: { label: 'julio 2019', datetime: '2020-07' },
    end: { label: 'julio 2022', datetime: '2022-07' },
    paragraphs: [
      `<q>The fastest way to grow as a developer is to solve different problems every day.</q>`,
      `During my time at the consultancy, I worked on a variety of client projects, each with unique technical and business challenges. This experience allowed me to develop a strong adaptability mindset and a broad understanding of software development.`,
      `My responsibilities included building web applications, implementing new features, integrating third-party services, and collaborating directly with clients to translate business requirements into technical solutions.`,
      `Working across multiple projects and technologies helped me strengthen both my technical skills and my ability to deliver value in dynamic environments.`
    ],
    skills: [
      { label: 'Communication', icon: 'skills/communication' },
      { label: 'Vue', icon: 'skills/vue' },
      { label: 'JavaScript', icon: 'skills/javascript' },
      { label: 'Wordpress', icon: 'skills/wordpress' },
      { label: 'Git', icon: 'skills/git' }
    ]
  }
];

export const projects: Project[] = [
  {
    name: 'Imcarrows',
    year: '2025',
    blurb: '🚗 Importación de coches desde Alemania',
    links: [
      { href: 'https://github.com/AlejandroSenior/Imcarrows', tippy: 'Source Code', icon: 'lucide:github' },
      { href: 'https://www.imcarrows.com', tippy: 'Try it out!', icon: 'lucide:external-link' }
    ],
    paragraphs: [
      `Desarrollé íntegramente Imcarrows, una web orientada a la captación de clientes interesados en importar vehículos desde Alemania a España. El objetivo del proyecto era explicar de forma clara el servicio completo —búsqueda de vehículos, inspección técnica, transporte y matriculación— y facilitar el contacto con potenciales clientes mediante formularios optimizados para conversión.`,
      `La empresa es de un buen amigo y me alegré poder ayudarle con su principal herramienta.`
    ],
    skills: [
      { label: 'TypeScript', icon: 'skills/typescript' },
      { label: 'Git', icon: 'skills/git' }
    ],
    media: {
      cover: '/_astro/imcarrows-cover.webp',
      sources: [{ srcset: '/_astro/imcarrows-cover.webp', type: 'image/webp' }],
      alt: 'Preview of the project "Imcarrows"',
      poster: '/_astro/imcarrows-website.gif',
      videos: [{ src: '/_astro/imcarrows-website.gif', type: 'video/gif' }]
    }
  }
];
