import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { useState, useEffect } from 'react';
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

import { ProfileStore } from '~/src/stores/profile.store';

import '~/src/global.css';

const RootLayout = () => {
  const [apiLoaded, apiLoadedSet] = useState(false);

  const [fontsLoaded] = useFonts({
    Poppins400: Poppins_400Regular,
    Poppins500: Poppins_500Medium,
    Poppins600: Poppins_600SemiBold,
    Poppins700: Poppins_700Bold,
  });

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
