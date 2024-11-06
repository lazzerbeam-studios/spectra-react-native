import { Stack } from 'expo-router';

import { SignUpScreen } from '~/src/screens/sign-up/sign-up';

const SignUp = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
      <SignUpScreen></SignUpScreen>
    </>
  );
};

export default SignUp;
