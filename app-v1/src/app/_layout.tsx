import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { useState, useEffect } from 'react';
import { SplashScreen, Stack } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Theme, ThemeProvider, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

import { NavTheme } from '~/src/theme-constants';
import { ProfileStore } from '~/src/stores/profile.store';
import { setAndroidNavigationBar } from '~/src/scripts/android-navigation-bar';

import '~/src/global.css';

const LIGHT_THEME: Theme = {
  ...DefaultTheme,
  colors: NavTheme.light,
};
const DARK_THEME: Theme = {
  ...DarkTheme,
  colors: NavTheme.dark,
};

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const { colorScheme, setColorScheme } = useColorScheme();

  const [apiLoaded, apiLoadedSet] = useState(false);
  const [colorSchemeLoaded, colorSchemeLoadedSet] = useState(false);

  const [fontsLoaded] = useFonts({
    Poppins400: Poppins_400Regular,
    Poppins500: Poppins_500Medium,
    Poppins600: Poppins_600SemiBold,
    Poppins700: Poppins_700Bold,
  });

  useEffect(() => {
    (async () => {
      const colorTheme = (await AsyncStorage.getItem('colorScheme') || colorScheme) === 'dark' ? 'dark' : 'light';
      colorSchemeLoadedSet(true);
      setColorScheme(colorTheme);
      setAndroidNavigationBar(colorTheme);
    })().finally(() => {
      SplashScreen.hideAsync();
    });
  }, [colorScheme, setColorScheme]);

  useEffect(() => {
    (async () => {
      await ProfileStore.getState().profileInit();
      apiLoadedSet(true);
    })();
  }, []);

  if (!fontsLoaded || !colorSchemeLoaded || !apiLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={(colorScheme === 'dark') ? DARK_THEME : LIGHT_THEME}>
      <StatusBar style={(colorScheme === 'dark') ? 'light' : 'dark'}></StatusBar>
      <Stack>
        <Stack.Screen name='(app)' options={{ headerShown: false }}></Stack.Screen>
      </Stack>
    </ThemeProvider>
  );
}

export default RootLayout;
