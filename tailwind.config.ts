import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Refined Cinematic Palette
        'deep-navy': '#161E2F',
        'midnight-blue': '#242F49',
        'slate-blue': '#384358',
        'soft-peach': '#FFA586',
        'muted-crimson': '#B51A2B',
        'wine-red': '#541A2E',
        'warm-sand': '#F2E5D7',
        'ash-gray': '#B4B8C5',
        'powder-blue': '#A9C1D9',
        // New accent colors for hero section
        'accent-orange': '#ff8055',
        'accent-cyan': '#8fd6f9',
        // Modern Hero Section Colors
        'deep-navy-purple': '#2C1A47',
        'muted-burgundy-red': '#7A1F2B',
        'golden-yellow': '#F6C667',
        'warm-amber': '#FF9E5E',
        'off-white': '#F9F9F9',
        'soft-coral': '#FF7854',
        'teal-blue': '#5FB4D6',
        'muted-teal': '#5FB4D6',
        'light-gray': '#D0D3D8',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
