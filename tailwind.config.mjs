// @ts-check
import { createPreset } from 'fumadocs-ui/tailwind-plugin';
 
/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  presets: [createPreset({ preset: 'dusk' })],
  content: [
    './node_modules/fumadocs-ui/dist/**/*.js',
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/content/**/*.mdx',
    './src/mdx-components.tsx',
  ],
};

export default config;