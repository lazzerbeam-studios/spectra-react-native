import { Stack } from 'expo-router';

import { ForgotPasswordScreen } from '~/src/screens/forgot-password/forgot-password';

const ForgotPassword = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
      <ForgotPasswordScreen></ForgotPasswordScreen>
    </>
  );
};

export default ForgotPassword;
