import type { ExperienceEntry, NavLink, Project, SocialLink } from 'src/interfaces';

export const EMAIL = 'alejandrosenior@outlook.es';

export const navLinks: NavLink[] = [
  { label: 'nav.experience', href: '#experience', icon: 'lucide:briefcase' },
  { label: 'nav.projects', href: '#projects', icon: 'lucide:folder-git' },
  { label: 'nav.about', href: '#about', icon: 'lucide:user' },
  { label: 'nav.contact', href: '#contact', icon: 'lucide:mail' }
];

export const heroSocials: SocialLink[] = [
  { name: 'LinkedIn', label: 'social.linkedin', href: 'https://linkedin.com/in/alejandrosenior', icon: 'lucide:linkedin' },
  { name: 'GitHub', label: 'social.github', href: 'https://github.com/AlejandroSenior', icon: 'lucide:github' },
  { name: 'Email', label: 'social.email', href: `mailto:${EMAIL}`, icon: 'lucide:mail' },
  { name: 'CV', label: 'social.resume', href: '/CV-Alejandro-Senior.pdf', icon: 'lucide:scroll' }
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
    blurb: 'projects.imcarrows.blurb',
    links: [
      { href: 'https://github.com/AlejandroSenior/Imcarrows', tippy: 'projects.imcarrows.linkSource', icon: 'lucide:github' },
      { href: 'https://www.imcarrows.com', tippy: 'projects.imcarrows.linkDemo', icon: 'lucide:external-link' }
    ],
    paragraphs: ['projects.imcarrows.p1', 'projects.imcarrows.p2'],
    skills: [
      { label: 'Astro', icon: 'skills/astro' },
      { label: 'TypeScript', icon: 'skills/typescript' },
      { label: 'Tailwind', icon: 'skills/tailwind' },
      { label: 'Cloudflare', icon: 'skills/cloudflare' }
    ],
    media: {
      cover: '/_astro/imcarrows-cover.webp',
      sources: [{ srcset: '/_astro/imcarrows-cover.webp', type: 'image/webp' }],
      alt: 'projects.imcarrows.imageAlt',
      poster: '/_astro/imcarrows-cover.webp',
      videos: [
        { src: '/_astro/imcarrows-website.webm', type: 'video/webm' },
        { src: '/_astro/imcarrows-website.mp4', type: 'video/mp4' }
      ]
    }
  },
  {
    name: 'Real Tajo C.F.',
    blurb: 'projects.realtajo.blurb',
    links: [
      { href: 'https://github.com/AlejandroSenior/realtajocf', tippy: 'projects.realtajo.linkSource', icon: 'lucide:github' },
      { href: 'https://real-tajo-cf.web.app', tippy: 'projects.realtajo.linkDemo', icon: 'lucide:external-link' }
    ],
    paragraphs: ['projects.realtajo.p1', 'projects.realtajo.p2'],
    skills: [
      { label: 'Astro', icon: 'skills/astro' },
      { label: 'Vue', icon: 'skills/vue' },
      { label: 'TypeScript', icon: 'skills/typescript' },
      { label: 'Tailwind', icon: 'skills/tailwind' },
      { label: 'Firebase', icon: 'skills/firebase' }
    ],
    media: {
      cover: '/_astro/realtajo-cover.webp',
      sources: [{ srcset: '/_astro/realtajo-cover.webp', type: 'image/webp' }],
      alt: 'projects.realtajo.imageAlt',
      poster: '/_astro/realtajo-cover.webp',
      videos: [
        { src: '/_astro/realtajo-website.webm', type: 'video/webm' },
        { src: '/_astro/realtajo-website.mp4', type: 'video/mp4' }
      ]
    }
  },
  {
    name: 'El 1%',
    blurb: 'projects.elunoporciento.blurb',
    links: [
      { href: 'https://github.com/AlejandroSenior/el-uno-por-ciento', tippy: 'projects.elunoporciento.linkSource', icon: 'lucide:github' },
      { href: 'https://el-uno-por-ciento.pages.dev', tippy: 'projects.elunoporciento.linkDemo', icon: 'lucide:external-link' }
    ],
    paragraphs: ['projects.elunoporciento.p1', 'projects.elunoporciento.p2'],
    skills: [
      { label: 'Astro', icon: 'skills/astro' },
      { label: 'Vue', icon: 'skills/vue' },
      { label: 'TypeScript', icon: 'skills/typescript' },
      { label: 'Tailwind', icon: 'skills/tailwind' },
      { label: 'Cloudflare', icon: 'skills/cloudflare' }
    ],
    media: {
      cover: '/_astro/elunoporciento-cover.webp',
      sources: [{ srcset: '/_astro/elunoporciento-cover.webp', type: 'image/webp' }],
      alt: 'projects.elunoporciento.imageAlt',
      poster: '/_astro/elunoporciento-cover.webp',
      videos: [
        { src: '/_astro/elunoporciento-website.webm', type: 'video/webm' },
        { src: '/_astro/elunoporciento-website.mp4', type: 'video/mp4' }
      ]
    }
  }
];
