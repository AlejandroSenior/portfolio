import type { icons } from '@data/icons';
import type { TranslationKey } from '@i18n/ui';

export interface NavLink {
  label: TranslationKey;
  href: string;
  icon: IconName;
}

export interface SocialLink {
  label: TranslationKey;
  href: string;
  icon: IconName;
  name?: string;
}
export interface Skill {
  label: string;
  icon: IconName;
}
export interface ExperienceEntry {
  title: TranslationKey;
  href: string;
  location: TranslationKey;
  start: { label: TranslationKey; datetime: string };
  end: { label: TranslationKey; datetime: string };
  /** Translation keys whose resolved value is an HTML paragraph (verbatim, may contain inline markup). */
  paragraphs: TranslationKey[];
  skills: Skill[];
}
export interface ProjectLink {
  href: string;
  tippy: TranslationKey;
  icon: IconName;
}
export interface ProjectMedia {
  cover: string; // fallback (png) src
  sources: { srcset: string; type: string }[]; // avif/webp/png
  alt: TranslationKey;
  poster: string;
  videos: { src: string; type: string }[];
}

export interface Project {
  name: string;
  blurb: TranslationKey; // emoji + short tagline
  links: ProjectLink[];
  paragraphs: TranslationKey[]; // HTML
  skills: Skill[];
  media: ProjectMedia;
}

export interface IconDef {
  viewBox: string;
  body: string;
}

export type IconName = keyof typeof icons;
