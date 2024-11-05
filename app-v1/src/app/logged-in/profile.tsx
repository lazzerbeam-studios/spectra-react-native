import { Redirect } from 'expo-router';

import { AuthStore } from '~/src/stores/auth.store';
import ProfileScreen from '~/src/screens/profile/profile';

const Profile = () => {
  const { authBool } = AuthStore();
  if (!authBool) {
    return <Redirect href='/'></Redirect>;
  }

  return (
    <ProfileScreen></ProfileScreen>
  );
};

export default Profile;
