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

        // Brand Colors - Primary
        brand: {
          primary: '#1E4D7B',      // Deniz Mavisi
          'primary-dark': '#163A5F', // Darker variant
          'primary-light': '#2C5F96', // Lighter variant
          sky: '#8FB3D6',           // Gök Mavisi
          gold: '#C3A878',          // Altın Sarısı
          navy: '#2C3E50',          // Koyu Lacivert
        },

        // Neutral Colors
        neutral: {
          50: '#F5F7FA',   // Açık Gri
          100: '#E8ECEF',  // Orta Gri
          200: '#D1D9E0',
          300: '#B4BFC8',
          400: '#8FA0AC',
          500: '#6B7C8A',
          600: '#546575',
          700: '#3E4F5E',
          800: '#2C3E50',  // Metin Gri (dark navy)
          900: '#1A2632',
        },

        // Status Colors
        success: '#27AE60',
        error: '#E74C3C',
        info: '#3498DB',
        warning: '#F39C12',
      },

      // Animation System
      animation: {
        // Entrance animations
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',

        // Continuous animations
        'pulse-gentle': 'pulseGentle 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
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
          '0%, 100%': { boxShadow: '0 0 20px rgba(30, 77, 123, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(30, 77, 123, 0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },

      // Typography
      fontFamily: {
        sans: ['Roboto', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
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

      // Box Shadow
      boxShadow: {
        'sm': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'DEFAULT': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px rgba(0, 0, 0, 0.1)',
        'hover': '0 12px 20px rgba(30, 77, 123, 0.15)',
        'glow': '0 0 20px rgba(30, 77, 123, 0.3)',
      },
    },
  },
  plugins: [],
} satisfies Config;
