import { Stack } from 'expo-router';

import { ResetPasswordScreen } from '~/src/screens/reset-password/reset-password';

const ResetPassword = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
      <ResetPasswordScreen></ResetPasswordScreen>
    </>
  );
};

export default ResetPassword;
