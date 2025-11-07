import { Stack } from 'expo-router';

import { PasswordResetScreen } from '~/src/screens/password-reset/password-reset';

const PasswordReset = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
      <PasswordResetScreen></PasswordResetScreen>
    </>
  );
};

export default PasswordReset;
