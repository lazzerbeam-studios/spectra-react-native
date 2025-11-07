import { Stack } from 'expo-router';

import { ForgotPasswordScreen } from '~/src/screens/password-forgot/password-forgot';

const PasswordForgot = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
      <ForgotPasswordScreen></ForgotPasswordScreen>
    </>
  );
};

export default PasswordForgot;
