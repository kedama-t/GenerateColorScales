import type { Config } from 'tailwindcss';
import { createThemes } from 'tw-colors';
import generateColorScales from './generateColorScales';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {},
  plugins: [
    createThemes({
      light: {
        ...generateColorScales({
          primary: '#8ec07c',
          secondary: '#458588',
          tertiary: '#d79921',
        }),
      },
      dark: {
        ...generateColorScales(
          {
            primary: '#d79921',
            secondary: '#cc241d',
            tertiary: '#3c3836',
          },
          true
        ),
      },
    }),
  ],
};
export default config;
