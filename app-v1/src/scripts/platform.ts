import { useWindowDimensions } from 'react-native';

export const WidthGet = (): number => {
  const { width } = useWindowDimensions();
  return width;
};

export const HeightGet = (): number => {
  const { height } = useWindowDimensions();
  return height;
};

export const IsDesktopGet = (): boolean => {
  const width = WidthGet();
  return width >= 768;
};

export const IsMobileGet = (): boolean => {
  const width = WidthGet();
  return width < 768;
};
