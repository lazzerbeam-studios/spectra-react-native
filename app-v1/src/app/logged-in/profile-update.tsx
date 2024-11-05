import { Stack, Redirect } from 'expo-router';

import { AuthStore } from '~/src/stores/auth.store';
import ProfileUpdateScreen from '~/src/screens/profile-update/profile-update';

const ProfileUpdate = () => {
  const { authBool } = AuthStore();
  if (!authBool) {
    return <Redirect href='/'></Redirect>;
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
      <ProfileUpdateScreen></ProfileUpdateScreen>
    </>
  );
};

export default ProfileUpdate;
