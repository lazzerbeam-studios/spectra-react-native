import { Platform } from 'react-native';
import { MMKV } from 'react-native-mmkv';
import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SplashScreen, Stack } from 'expo-router';
import { PortalHost } from '@rn-primitives/portal';
import { Theme, ThemeProvider } from '@react-navigation/native';

import { NAV_THEME } from '~/src/lib/themeConstants';
import { useColorScheme } from '~/src/lib/useColorScheme';
import { setAndroidNavigationBar } from '~/src/lib/setAndroidNavigationBar';

import '~/src/global.css';
import { profileStore } from '~/src/stores/profile.store';

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
  const [colorSchemeLoaded, colorSchemeLoadedSet] = useState(false);
  const [apiLoaded, apiLoadedSet] = useState(false);

  useEffect(() => {
    (async () => {
      const colorTheme = (storage.getString('colorTheme') || colorScheme) === 'dark' ? 'dark' : 'light';
      colorSchemeLoadedSet(true);
      setColorScheme(colorTheme);
      setAndroidNavigationBar(colorTheme);
      if (Platform.OS === 'web') {
        document.documentElement.classList.add('bg-background');
      }
    })().finally(() => {
      SplashScreen.hideAsync();
    });
  }, []);

  useEffect(() => {
    (async () => {
      await profileStore.getState().profileInit();
      apiLoadedSet(true);
    })();
  }, []);

  if (!colorSchemeLoaded || !apiLoaded) {
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
