import { createTamagui } from 'tamagui';
import { shorthands } from '@tamagui/shorthands';
import { themes, tokens } from '@tamagui/themes';
import { createInterFont } from '@tamagui/font-inter';
import { createMedia } from '@tamagui/react-native-media-driver';

const interFont = createInterFont({
  family: 'PoppinsRegular',
  size: {
    1: 16,
  },
  lineHeight: {
    1: 22,
  },
  weight: {
    1: '300',
  },
  letterSpacing: {
    1: 0,
  },
  face: {
    600: { normal: 'PoppinsRegular' },
  },
});

const config = createTamagui({
  themes,
  tokens,
  shorthands,
  fonts: {
    body: interFont,
    heading: interFont,
  },
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
