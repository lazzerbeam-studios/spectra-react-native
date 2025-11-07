import { Stack } from 'expo-router';

import { ResetPasswordScreen } from '~/src/screens/reset-password/reset-password';

const PasswordReset = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
      <ResetPasswordScreen></ResetPasswordScreen>
    </>
  );
};

export default PasswordReset;
