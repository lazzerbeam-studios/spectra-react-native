import { THEME } from '~/src/theme';
import { Platform } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';

export const AndroidNavigationBarSet = async (theme: 'light' | 'dark') => {
  if (Platform.OS !== 'android') return;
  await NavigationBar.setButtonStyleAsync((theme === 'dark') ? 'light' : 'dark');
  await NavigationBar.setBackgroundColorAsync((theme === 'dark') ? THEME.dark.background : THEME.light.background);
};
