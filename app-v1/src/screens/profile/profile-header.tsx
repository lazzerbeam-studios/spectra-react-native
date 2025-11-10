import { View } from 'react-native';

import { BackButton } from '~/src/components/back-button';

export const ProfileHeader = () => {
  return (
    <View className='h-16 flex-row items-center'>
      <View className='ms-2'>
        <BackButton />
      </View>
      <View className='flex-1'></View>
    </View>
  );
};
