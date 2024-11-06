import { Stack } from 'expo-router';

import { NotFoundScreen } from '~/src/screens/not-found/not-found';

const NotFound = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
      <NotFoundScreen></NotFoundScreen>
    </>
  );
}

export default NotFound;
