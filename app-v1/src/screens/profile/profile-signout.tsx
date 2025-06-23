import { Text, TouchableOpacity } from 'react-native';

import { ProfileStore } from '~/src/stores/profile.store';

export const ProfileSignout = () => {
  const { profileLogout } = ProfileStore();

  const logout = () => {
    profileLogout();
  };

  return (
    <TouchableOpacity onPress={logout} className='mt-12'>
      <Text className='text-xl font-semibold text-red-500'>
        Sign Out
      </Text>
    </TouchableOpacity>
  );
}
