import { useState, useEffect } from 'react';
import { Stack } from 'expo-router';

import { ProfileStore } from '~/src/stores/profile.store';

import '~/src/global.css';

const RootLayout = () => {

  const [apiLoaded, apiLoadedSet] = useState(false);

  useEffect(() => {
    (async () => {
      await ProfileStore.getState().profileInit();
      apiLoadedSet(true);
    })();
  }, []);

  if (!apiLoaded) {
    return null;
  }

  return (
    <>
      <Stack>
        {/* <Stack.Screen name='(app)' options={{ headerShown: false }}></Stack.Screen> */}
      </Stack>
    </>
  );
}

export default RootLayout;
