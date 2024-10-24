import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { TamaguiProvider } from 'tamagui';
import { useColorScheme } from 'react-native';
import { SplashScreen, Stack } from 'expo-router';

import config from '../../tamagui.config';

SplashScreen.preventAutoHideAsync()

export default function Layout() {
  const colorScheme = useColorScheme()

  const [loaded, error] = useFonts({
    PoppinsRegular: require('../assets/fonts/poppins/Poppins-Regular.ttf'),
    PoppinsBold: require('../assets/fonts/poppins/Poppins-Bold.ttf'),
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
  }

  return (
    <TamaguiProvider config={config} defaultTheme={colorScheme === 'dark' ? 'dark' : 'light'}>
      <Stack />
    </TamaguiProvider>
  );
}
