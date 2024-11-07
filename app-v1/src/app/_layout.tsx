import { Platform } from 'react-native';
import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SplashScreen, Stack } from 'expo-router';
import { PortalHost } from '@rn-primitives/portal';
import { Theme, ThemeProvider } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useFonts } from 'expo-font';
import { NavTheme } from '~/src/lib/themeConstants';
import { ProfileStore } from '~/src/stores/profile.store';
import { useColorScheme } from '~/src/lib/useColorScheme';
import { setAndroidNavigationBar } from '~/src/lib/setAndroidNavigationBar';
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

import Toast from 'react-native-toast-message';
import { ToastConfig } from '~/src/components/toast';

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

  const [fontsLoaded] = useFonts({
    Poppins400: Poppins_400Regular,
    Poppins500: Poppins_500Medium,
    Poppins600: Poppins_600SemiBold,
    Poppins700: Poppins_700Bold,
  });

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

  if (!colorSchemeLoaded || !apiLoaded || !fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
      <StatusBar style={isDarkColorScheme ? 'light' : 'dark'}></StatusBar>
      <Stack>
        <Stack.Screen name='(app)' options={{ headerShown: false }}></Stack.Screen>
      </Stack>
      <PortalHost></PortalHost>
      <Toast config={ToastConfig}></Toast>
    </ThemeProvider>
  );
}

export default RootLayout;
