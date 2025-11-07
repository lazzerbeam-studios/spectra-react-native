import { Stack } from 'expo-router';

import { ForgotPasswordScreen } from '~/src/screens/forgot-password/forgot-password';

const PasswordForgot = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
      <ForgotPasswordScreen></ForgotPasswordScreen>
    </>
  );
};

export default PasswordForgot;
