import { Stack } from 'expo-router';

import { SignInScreen } from '~/src/screens/sign-in/sign-in';

const SignIn = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
      <SignInScreen></SignInScreen>
    </>
  );
};

export default SignIn;
