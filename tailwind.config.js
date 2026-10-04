/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-container-lowest": "var(--color-surface-container-lowest)",
        "primary-fixed": "var(--color-primary-fixed)",
        "on-error": "var(--color-on-error)",
        "error-container": "var(--color-error-container)",
        "surface-container": "var(--color-surface-container)",
        "primary-fixed-dim": "var(--color-primary-fixed-dim)",
        "inverse-on-surface": "var(--color-inverse-on-surface)",
        "surface-dim": "var(--color-surface-dim)",
        "outline": "var(--color-outline)",
        "tertiary-fixed-dim": "var(--color-tertiary-fixed-dim)",
        "background": "var(--color-background)",
        "on-secondary-container": "var(--color-on-secondary-container)",
        "tertiary-container": "var(--color-tertiary-container)",
        "on-primary-fixed-variant": "var(--color-on-primary-fixed-variant)",
        "on-surface": "var(--color-on-surface)",
        "error": "var(--color-error)",
        "surface-container-high": "var(--color-surface-container-high)",
        "tertiary": "var(--color-tertiary)",
        "on-tertiary-fixed-variant": "var(--color-on-tertiary-fixed-variant)",
        "surface-bright": "var(--color-surface-bright)",
        "on-primary-container": "var(--color-on-primary-container)",
        "tertiary-fixed": "var(--color-tertiary-fixed)",
        "inverse-surface": "var(--color-inverse-surface)",
        "secondary-fixed-dim": "var(--color-secondary-fixed-dim)",
        "inverse-primary": "var(--color-inverse-primary)",
        "primary-container": "var(--color-primary-container)",
        "surface": "var(--color-surface)",
        "on-secondary-fixed-variant": "var(--color-on-secondary-fixed-variant)",
        "primary": "var(--color-primary)",
        "on-background": "var(--color-on-background)",
        "surface-container-highest": "var(--color-surface-container-highest)",
        "on-surface-variant": "var(--color-on-surface-variant)",
        "secondary-fixed": "var(--color-secondary-fixed)",
        "surface-variant": "var(--color-surface-variant)",
        "surface-tint": "var(--color-surface-tint)",
        "on-tertiary-container": "var(--color-on-tertiary-container)",
        "surface-container-low": "var(--color-surface-container-low)",
        "on-secondary": "var(--color-on-secondary)",
        "on-error-container": "var(--color-on-error-container)",
        "on-primary": "var(--color-on-primary)",
        "on-primary-fixed": "var(--color-on-primary-fixed)",
        "outline-variant": "var(--color-outline-variant)",
        "on-tertiary-fixed": "var(--color-on-tertiary-fixed)",
        "secondary-container": "var(--color-secondary-container)",
        "secondary": "var(--color-secondary)",
        "on-secondary-fixed": "var(--color-on-secondary-fixed)",
        "on-tertiary": "var(--color-on-tertiary)"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "space-xl": "2.5rem",
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "gutter": "1.5rem",
        "space-lg": "1.5rem",
        "space-md": "1rem",
        "margin": "2rem",
        "margin-mobile": "1rem",
        "gutter-mobile": "1rem"
      },
      fontFamily: {
        "label-badge": ["Space Grotesk"],
        "label-md": ["Space Grotesk"],
        "display-hero": ["Space Grotesk"],
        "headline-sm": ["Space Grotesk"],
        "body-sm": ["Lexend"],
        "headline-lg": ["Space Grotesk"],
        "headline-lg-mobile": ["Space Grotesk"],
        "display-hero-mobile": ["Space Grotesk"],
        "body-md": ["Lexend"],
        "headline-md": ["Space Grotesk"],
        "body-lg": ["Lexend"],
        "label-lg": ["Space Grotesk"]
      },
      fontSize: {
        "label-badge": ["11px", { lineHeight: "14px", letterSpacing: "0.1em", fontWeight: "700" }],
        "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.08em", fontWeight: "600" }],
        "display-hero": ["56px", { lineHeight: "64px", letterSpacing: "-0.03em", fontWeight: "700" }],
        "headline-sm": ["20px", { lineHeight: "28px", letterSpacing: "0em", fontWeight: "600" }],
        "body-sm": ["13px", { lineHeight: "20px", letterSpacing: "0em", fontWeight: "400" }],
        "headline-lg": ["40px", { lineHeight: "48px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg-mobile": ["28px", { lineHeight: "36px", letterSpacing: "-0.01em", fontWeight: "700" }],
        "display-hero-mobile": ["36px", { lineHeight: "44px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "body-md": ["15px", { lineHeight: "24px", letterSpacing: "0em", fontWeight: "400" }],
        "headline-md": ["28px", { lineHeight: "36px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px", letterSpacing: "-0.01em", fontWeight: "400" }],
        "label-lg": ["14px", { lineHeight: "20px", letterSpacing: "0.06em", fontWeight: "700" }]
      },
      // ADDED ANIMATIONS FOR THE GRADIENT AND FLOATING LOGO
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        'gradient-x': 'gradient-x 4s ease infinite',
        'float-slow': 'float-slow 4s ease-in-out infinite',
        'float-delayed': 'float-delayed 5s ease-in-out 2s infinite',
      }
    }
  },
  plugins: [],
}