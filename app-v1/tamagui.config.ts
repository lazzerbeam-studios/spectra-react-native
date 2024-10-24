import { createTamagui } from 'tamagui';
import { shorthands } from '@tamagui/shorthands';
import { themes, tokens } from '@tamagui/themes';
import { createInterFont } from '@tamagui/font-inter';
import { createMedia } from '@tamagui/react-native-media-driver';
import { createAnimations } from '@tamagui/animations-react-native';

const animations = createAnimations({
  bouncy: {
    damping: 10,
    mass: 0.9,
    stiffness: 100,
    type: 'spring',
  },
  lazy: {
    damping: 20,
    type: 'spring',
    stiffness: 60,
  },
  quick: {
    damping: 20,
    mass: 1.2,
    stiffness: 250,
    type: 'spring',
  },
});

const headingFont = createInterFont({
  family: 'Poppins',
  size: {
    1: 12,
    2: 14,
    3: 15,
    small: 99
  },
  lineHeight: {
    // 1 will be 22
    2: 22,
  },
  weight: {
    1: '300',
    2: '200',
    3: '600',
  },
  letterSpacing: {
    1: 0,
    2: -1,
    // 3 will be -1
  },
  // (native only) swaps out fonts by face/style
  face: {
    600: { normal: 'PoppinsBold' },
  },
});

const config = createTamagui({
  light: {
    color: {
      background: 'gray',
      text: 'black',
    },
  },
  defaultFont: 'body',
  animations,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands,
  fonts: {
    body: headingFont,
    heading: headingFont,
  },
  themes,
  tokens,
  media: createMedia({
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  }),
});

type AppConfig = typeof config;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig { }
}

export default config;
