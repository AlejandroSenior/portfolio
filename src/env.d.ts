/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Window {
  smoothScrollTo: (target: string, event?: Event) => void;
}
