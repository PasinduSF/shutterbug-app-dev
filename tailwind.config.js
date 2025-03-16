/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#b4232a',
          dark: '#1b1b1b',
          light: '#f8e3e0',
        },
        background: {
          light: '#ffffff',
          dark: '#1b1b1b',
        },
        text: {
          light: '#1b1b1b',
          dark: '#ffffff',
        },
        accent: {
          DEFAULT: '#e0115f',
          light: '#ff1a75',
          dark: '#cc0e56',
        },
        neutral: {
          50: '#f8f8f8',
          100: '#e5e5e5',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#666666',
          600: '#4d4d4d',
          700: '#333333',
          800: '#1a1a1a',
          900: '#0d0d0d',
        },
        surface: {
          light: '#ffffff',
          dark: '#2d2d2d',
        },
        border: {
          light: '#e5e5e5',
          dark: '#404040',
        },
        success: {
          light: '#22c55e',
          dark: '#16a34a',
        },
        error: {
          light: '#ef4444',
          dark: '#dc2626',
        },
        warning: {
          light: '#f59e0b',
          dark: '#d97706',
        },
        info: {
          light: '#3b82f6',
          dark: '#2563eb',
        },
      },
    },
  },
  plugins: [],
}