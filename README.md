# Generate Color Scales from seed color.

- [Qiita:シード色からTainwindCSSのカラーパレットを生成して楽をする](https://qiita.com/kedama-t/items/26284af2e961f7c3acbc)

- Inspired by Flutter's [Colorscheme.fromSeed()](https://api.flutter.dev/flutter/material/ColorScheme/ColorScheme.fromSeed.html).

- This script depends on [unjs/theme-colors](https://github.com/unjs/theme-colors)

```typescript
// tailwind.config.ts
import generateColorScales from './generateColorScales';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
     colors: {
      ...generateColorScales({
        primary: "#8ec07c",
        secondary: "#458588",
        tertiary: "#d79921",
      }),
    },
  }
};
```

```html
<p className="bg-primary-100 text-on-primary-100">100</p>
<p className="bg-primary text-on-primary">seed color</p>
```

## Work With [`tw-colors`](https://github.com/L-Blondy/tw-colors)

```typescript
// tailwind.config.ts
import generateColorScales from './generateColorScales';
import { createThemes } from 'tw-colors';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [
    createThemes({
      light: {
        ...generateColorScales({
          primary: "#8ec07c",
          secondary: "#458588",
          tertiary: "#d79921",
        }),
      },
      dark: {
        ...generateColorScales(
          {
            primary: "#d79921",
            secondary: "#cc241d",
            tertiary: "#3c3836",
          },
          true
        ),
      },
    }),
  ],
};
```
