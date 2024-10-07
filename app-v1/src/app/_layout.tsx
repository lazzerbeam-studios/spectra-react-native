import { Stack } from 'expo-router';

import './_global.css';

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name='(auth)' options={{ headerShown: false }} />
      <Stack.Screen name='charged/profile' options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
