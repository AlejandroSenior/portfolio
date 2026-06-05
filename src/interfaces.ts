import type { icons } from "@data/icons";

export interface NavLink {
  label: string;
  href: string;
  icon: IconName;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconName;
}
export interface Skill {
  label: string;
  icon: IconName;
}
export interface ExperienceEntry {
  title: string;
  href: string;
  location: string;
  start: { label: string; datetime: string };
  end: { label: string; datetime: string };
  /** HTML paragraphs (verbatim, may contain inline markup). */
  paragraphs: string[];
  skills: Skill[];
}
export interface ProjectLink {
  href: string;
  tippy: string;
  icon: IconName;
}
export interface ProjectMedia {
  cover: string; // fallback (png) src
  sources: { srcset: string; type: string }[]; // avif/webp/png
  alt: string;
  poster: string;
  videos: { src: string; type: string }[];
}

export interface Project {
  name: string;
  year: string;
  blurb: string; // emoji + short tagline
  links: ProjectLink[];
  paragraphs: string[]; // HTML
  skills: Skill[];
  media: ProjectMedia;
}

export interface IconDef {
  viewBox: string;
  body: string;
}

export type IconName = keyof typeof icons;
