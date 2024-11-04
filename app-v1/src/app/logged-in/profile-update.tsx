import { Stack } from 'expo-router';

import ProfileUpdateScreen from '~/src/screens/profile-update/profile-update';

const ProfileUpdate = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
      <ProfileUpdateScreen></ProfileUpdateScreen>
    </>
  );
};

export default ProfileUpdate;
