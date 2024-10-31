import React from 'react';
import { Platform } from 'react-native';
import { MMKV } from 'react-native-mmkv';
import { StatusBar } from 'expo-status-bar';
import { SplashScreen, Stack } from 'expo-router';
import { PortalHost } from '@rn-primitives/portal';
import { Theme, ThemeProvider } from '@react-navigation/native';

import { NAV_THEME } from '~/src/lib/themeConstants';
import { useColorScheme } from '~/src/lib/useColorScheme';
import { setAndroidNavigationBar } from '~/src/lib/setAndroidNavigationBar';

import '~/src/global.css';

const LIGHT_THEME: Theme = {
  dark: false,
  colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
  dark: true,
  colors: NAV_THEME.dark,
};

SplashScreen.preventAutoHideAsync();

export const storage = new MMKV();
export { ErrorBoundary } from 'expo-router';

const RootLayout = () => {
  const { colorScheme, setColorScheme, isDarkColorScheme } = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const theme = storage.getString('theme');
      if (!theme) {
        storage.set('theme', colorScheme);
        setIsColorSchemeLoaded(true);
        return;
      }
      if (Platform.OS === 'web') {
        document.documentElement.classList.add('bg-background');
      }
      const colorTheme = (theme === 'dark') ? 'dark' : 'light';
      if (colorTheme !== colorScheme) {
        setColorScheme(colorTheme);
        setAndroidNavigationBar(colorTheme);
        setIsColorSchemeLoaded(true);
        return;
      }
      setAndroidNavigationBar(colorTheme);
      setIsColorSchemeLoaded(true);
    })().finally(() => {
      SplashScreen.hideAsync();
    });
  }, []);

  if (!isColorSchemeLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
      <StatusBar style={isDarkColorScheme ? 'light' : 'dark'}></StatusBar>
      <Stack></Stack>
      <PortalHost></PortalHost>
    </ThemeProvider>
  );
}

export default RootLayout;
