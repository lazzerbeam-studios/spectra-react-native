import { Stack } from 'expo-router';

import { PasswordForgotScreen } from '~/src/screens/password-forgot/password-forgot';

const PasswordForgot = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
      <PasswordForgotScreen></PasswordForgotScreen>
    </>
  );
};

export default PasswordForgot;
