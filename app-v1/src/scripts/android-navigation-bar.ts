import { Platform } from 'react-native';
import { NavTheme } from '~/src/theme-constants';
import * as NavigationBar from 'expo-navigation-bar';

export async function setAndroidNavigationBar(theme: 'light' | 'dark') {
  if (Platform.OS !== 'android') return;
  await NavigationBar.setButtonStyleAsync((theme === 'dark') ? 'light' : 'dark');
  await NavigationBar.setBackgroundColorAsync((theme === 'dark') ? NavTheme.dark.background : NavTheme.light.background);
}
