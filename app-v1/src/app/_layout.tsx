import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { TamaguiProvider } from 'tamagui';
import { SplashScreen, Stack } from 'expo-router';

import config from '../../tamagui.config';

export default function Layout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <TamaguiProvider config={config}>
      <Stack />
    </TamaguiProvider>
  );
}
