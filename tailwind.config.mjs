/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Satoshi",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        header: ["Onest", "Arial", "Liberation Sans", "sans-serif"],
      },
      fontSize: {
        "2xs": [
          "clamp(0.6944rem, calc(0.69237rem + 0.01038vw), 0.70233rem)",
          { lineHeight: "1.6" },
        ],
      },
      colors: {
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      minHeight: {
        header: "var(--header-height)",
      },
      height: {
        header: "var(--header-height)",
      },
      maxWidth: {
        "screen-xl": "1280px",
        "screen-2xl": "1536px",
      },
      keyframes: {
        "fade-down": {
          "0%": { opacity: "0", transform: "translateY(-2rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%": { translate: "0 0" },
          "50%": { translate: "0 -15px" },
          "100%": { translate: "0 0" },
        },
        beat: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "fade-down":
          "fade-down var(--tw-animate-duration, 1s) var(--tw-animate-easing, ease) var(--tw-animate-delay, 0s) var(--tw-animate-iteration, 1) var(--tw-animate-fill, both)",
        float: "float 3s ease-in-out infinite alternate",
        beat: "beat 1s infinite",
      },
    },
  },
  plugins: [],
};
