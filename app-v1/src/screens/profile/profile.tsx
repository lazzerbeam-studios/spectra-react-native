import { useEffect } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ProfileStore } from '~/src/stores/profile.store';

import { ProfileHeader } from './profile-header';
import { ProfileContent } from './profile-content';

export const ProfileScreen = () => {
  const { profileInit } = ProfileStore();

  useEffect(() => {
    profileInit();
  }, [profileInit]);

  return (
    <SafeAreaView>

      <ProfileHeader />

      <View className='items-center'>
        <View className='w-full sm:w-1/3'>
          <ProfileContent />
        </View>
      </View>

    </SafeAreaView>
  );
};
