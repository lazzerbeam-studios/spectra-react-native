import { Stack } from 'expo-router';

import { ResetPasswordScreen } from '~/src/screens/password-reset/password-reset';

const PasswordReset = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
      <ResetPasswordScreen></ResetPasswordScreen>
    </>
  );
};

export default PasswordReset;
