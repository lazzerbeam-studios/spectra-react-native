import { Stack } from 'expo-router';

import ProfileScreen from '~/src/screens/profile/profile';

const Profile = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
      <ProfileScreen></ProfileScreen>
    </>
  );
};

export default Profile;
