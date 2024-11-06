import { Platform } from 'react-native';
import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SplashScreen, Stack } from 'expo-router';
import { PortalHost } from '@rn-primitives/portal';
import { Theme, ThemeProvider } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavTheme } from '~/src/lib/themeConstants';
import { ProfileStore } from '~/src/stores/profile.store';
import { useColorScheme } from '~/src/lib/useColorScheme';
import { setAndroidNavigationBar } from '~/src/lib/setAndroidNavigationBar';

import '~/src/global.css';

const LIGHT_THEME: Theme = {
  dark: false,
  colors: NavTheme.light,
};
const DARK_THEME: Theme = {
  dark: true,
  colors: NavTheme.dark,
};

SplashScreen.preventAutoHideAsync();

export { ErrorBoundary } from 'expo-router';

const RootLayout = () => {
  const { colorScheme, setColorScheme, isDarkColorScheme } = useColorScheme();

  const [colorSchemeLoaded, colorSchemeLoadedSet] = useState(false);
  const [apiLoaded, apiLoadedSet] = useState(false);

  useEffect(() => {
    (async () => {
      const colorTheme = (await AsyncStorage.getItem('colorTheme') || colorScheme) === 'dark' ? 'dark' : 'light';
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
      await ProfileStore.getState().profileInit();
      apiLoadedSet(true);
    })();
  }, []);

  if (!colorSchemeLoaded || !apiLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
      <StatusBar style={isDarkColorScheme ? 'light' : 'dark'}></StatusBar>
      <Stack>
        <Stack.Screen name='(app)' options={{ headerShown: false }} />
      </Stack>
      <PortalHost></PortalHost>
    </ThemeProvider>
  );
}

export default RootLayout;
