import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        400: '#38bdf8',
        500: '#0ea5e9',
        600: '#0284c7',
      },
      purple: {
        400: '#c084fc',
        500: '#a855f7',
        600: '#9333ea',
      },
      gray: {
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        900: '#111827',
      },
      red: {
        500: '#ef4444',
      },
    },
    spacing: {
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      4: '1rem',
      6: '1.5rem',
      8: '2rem',
      16: '4rem',
      20: '5rem',
      32: '8rem',
      40: '10rem',
    },
    borderRadius: {
      'none': '0',
      'full': '9999px',
      'lg': '0.5rem',
    },
  },
  experimental: {
    optimizeUniversalDefaults: true,
  },
  plugins: [],
} satisfies Config;
