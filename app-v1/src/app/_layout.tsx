import { Stack } from 'expo-router';
import { Appearance } from 'react-native';

import '../global.css';

const RootLayout = () => {

  const colorScheme = Appearance.getColorScheme();
  if (colorScheme === 'dark') {
    document.querySelector('html')?.setAttribute('data-theme', 'dark');
  } else {
    document.querySelector('html')?.setAttribute('data-theme', '');
  }

  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name='(auth)' options={{ headerShown: false }} />
      <Stack.Screen name='logged-in/profile' options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
