import { useFonts } from 'expo-font';
import { Platform } from 'react-native';
import { useColorScheme } from 'nativewind';
import { useState, useEffect } from 'react';
import { SplashScreen, Stack } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

import { ProfileStore } from '~/src/stores/profile.store';

import '~/src/global.css';

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
      setColorScheme(colorTheme);
      colorSchemeLoadedSet(true);
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

  if (!fontsLoaded || !apiLoaded) {
    return null;
  }

  return (
    <>
      <Stack>
        <Stack.Screen name='(app)' options={{ headerShown: false }}></Stack.Screen>
      </Stack>
    </>
  );
}

export default RootLayout;
