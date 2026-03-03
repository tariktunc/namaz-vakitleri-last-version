import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Legacy CSS variables (keep for compatibility)
        background: "var(--background)",
        foreground: "var(--foreground)",

        // Brand Colors - Emerald Green (Islamic Identity)
        brand: {
          primary: '#1B7D5A',          // Derin Zümrüt
          'primary-dark': '#15614A',   // Koyu Zümrüt (hover, footer bg)
          'primary-light': '#22996E',  // Orta Zümrüt
          'primary-50': '#E8F5EE',     // Fısıltı Yeşil (arka plan tonu)
          'primary-100': '#C7E9D5',    // Yumuşak Nane
          gold: '#D4A853',             // Zengin Altın
          'gold-dark': '#B8912F',      // Koyu Altın (hover)
          'gold-light': '#E8C97A',     // Yumuşak Altın
          'gold-50': '#FDF6E3',        // Krem Altın (arka plan)
          accent: '#1A3A4A',           // Gece Teal
          'accent-light': '#2A5468',   // Okyanus
        },

        // Neutral Colors - Warm tones (not cold gray)
        neutral: {
          50: '#FAFAF6',    // Sıcak Beyaz
          100: '#F0EDE5',   // Parşömen
          200: '#E0DCD2',   // Sıcak Kum
          300: '#C4BFB3',   // Taş
          400: '#9A9488',   // Toprak
          500: '#706B60',   // Toprak (koyu)
          600: '#524E45',   // Koyu Toprak
          700: '#3A3732',   // Kömür
          800: '#262421',   // Neredeyse Siyah
          900: '#141310',   // Mürekkep Siyahı
        },

        // Status Colors (harmonized with emerald)
        success: '#2D9F6A',
        error: '#C94A3A',
        info: '#2B7A9E',
        warning: '#D4960C',
      },

      // Animation System
      animation: {
        // Entrance animations
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',

        // Skeleton shimmer
        'shimmer': 'shimmer 1.5s ease-in-out infinite',

        // Continuous animations
        'pulse-gentle': 'pulseGentle 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'gold-pulse': 'goldPulse 2s ease-in-out infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulseGentle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(27, 125, 90, 0.25)' },
          '50%': { boxShadow: '0 0 35px rgba(27, 125, 90, 0.40)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        goldPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212, 168, 83, 0.4)' },
          '50%': { boxShadow: '0 0 0 8px rgba(212, 168, 83, 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },

      // Typography
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },

      // Spacing (8pt grid system)
      spacing: {
        '18': '4.5rem',  // 72px
        '88': '22rem',   // 352px
        '128': '32rem',  // 512px
      },

      // Border Radius
      borderRadius: {
        'sm': '4px',
        'DEFAULT': '8px',
        'lg': '16px',
        'xl': '24px',
      },

      // Box Shadow - Emerald tinted
      boxShadow: {
        'sm': '0 1px 3px rgba(27, 125, 90, 0.06)',
        'DEFAULT': '0 4px 6px rgba(27, 125, 90, 0.08)',
        'md': '0 4px 12px rgba(27, 125, 90, 0.10)',
        'lg': '0 10px 24px rgba(27, 125, 90, 0.12)',
        'xl': '0 20px 40px rgba(27, 125, 90, 0.15)',
        'hover': '0 12px 28px rgba(27, 125, 90, 0.18)',
        'glow': '0 0 20px rgba(27, 125, 90, 0.25)',
        'gold': '0 4px 16px rgba(212, 168, 83, 0.20)',
      },
    },
  },
  plugins: [],
} satisfies Config;
