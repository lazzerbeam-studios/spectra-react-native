import { createInterFont } from '@tamagui/font-inter';

const poppinsFont = createInterFont({
  family: 'PoppinsExtraBold',
  size: {
    1: 12,
  },
  lineHeight: {
    1: 17,
  },
  weight: {
    3: '300',
    4: '400',
    5: '500',
    6: '600',
    7: '700',
    8: '800',
  },
  letterSpacing: {
    1: 0,
  },
  face: {
    400: { normal: 'PoppinsRegular' },
    800: { normal: 'PoppinsExtraBold' },
  },
});

export default poppinsFont;
