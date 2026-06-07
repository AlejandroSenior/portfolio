import type { ExperienceEntry, NavLink, Project, SocialLink } from 'src/interfaces';

export const EMAIL = 'alejandrosenior@outlook.es';

export const navLinks: NavLink[] = [
  { label: 'nav.experience', href: '#experience', icon: 'lucide:briefcase' },
  { label: 'nav.projects', href: '#projects', icon: 'lucide:folder-git' },
  { label: 'nav.about', href: '#about', icon: 'lucide:user' },
  { label: 'nav.contact', href: '#contact', icon: 'lucide:mail' }
];

export const heroSocials: SocialLink[] = [
  { label: 'social.linkedin', href: 'https://linkedin.com/in/alejandrosenior', icon: 'lucide:linkedin' },
  { label: 'social.github', href: 'https://github.com/AlejandroSenior', icon: 'lucide:github' },
  { label: 'social.email', href: `mailto:${EMAIL}`, icon: 'lucide:mail' },
  { label: 'social.resume', href: '/CV-Alejandro-Senior.pdf', icon: 'lucide:scroll' }
];

export const contactSocials: SocialLink[] = [
  { label: 'social.linkedin', href: 'https://linkedin.com/in/alejandrosenior', icon: 'lucide:linkedin' }
];

export const experience: ExperienceEntry[] = [
  {
    title: 'experience.microwd.title',
    href: 'https://www.microwd.es',
    location: 'experience.microwd.location',
    start: { label: 'experience.microwd.start', datetime: '2022-07' },
    end: { label: 'experience.microwd.end', datetime: '2024-5' },
    paragraphs: ['experience.microwd.p1', 'experience.microwd.p2', 'experience.microwd.p3', 'experience.microwd.p4'],
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
    title: 'experience.animasoluciones.title',
    href: 'https://animasoluciones.es',
    location: 'experience.animasoluciones.location',
    start: { label: 'experience.animasoluciones.start', datetime: '2020-07' },
    end: { label: 'experience.animasoluciones.end', datetime: '2022-07' },
    paragraphs: [
      'experience.animasoluciones.p1',
      'experience.animasoluciones.p2',
      'experience.animasoluciones.p3',
      'experience.animasoluciones.p4'
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
    blurb: 'projects.imcarrows.blurb',
    links: [
      { href: 'https://github.com/AlejandroSenior/Imcarrows', tippy: 'projects.imcarrows.linkSource', icon: 'lucide:github' },
      { href: 'https://www.imcarrows.com', tippy: 'projects.imcarrows.linkDemo', icon: 'lucide:external-link' }
    ],
    paragraphs: ['projects.imcarrows.p1', 'projects.imcarrows.p2'],
    skills: [
      { label: 'TypeScript', icon: 'skills/typescript' },
      { label: 'Git', icon: 'skills/git' }
    ],
    media: {
      cover: '/_astro/imcarrows-cover.webp',
      sources: [{ srcset: '/_astro/imcarrows-cover.webp', type: 'image/webp' }],
      alt: 'projects.imcarrows.imageAlt',
      poster: '/_astro/imcarrows-website.gif',
      videos: [{ src: '/_astro/imcarrows-website.gif', type: 'video/gif' }]
    }
  }
];
