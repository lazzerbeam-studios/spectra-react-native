import { Link } from 'expo-router';
import { View } from 'react-native';

import { Text } from '~/src/components/ui/text';
import { ProfileStore } from '~/src/stores/profile.store';
import { Avatar, AvatarFallback, AvatarImage } from '~/src/components/ui/avatar';

export const DashboardHeader = () => {
  const { profile } = ProfileStore();

  return (
    <View className='h-16 flex-row items-center'>
      <View className='flex-1'></View>
      <View className='me-2'>
        <Link href='/profile'>
          <View className='rounded-full bg-primary/25 p-1'>
            <Avatar alt={'profile-image'} className='size-12'>
              {profile?.image && <AvatarImage source={{ uri: profile.image }} />}
              <AvatarFallback>
                <Text className='font-Poppins500 text-2xl text-primary'>
                  H
                </Text>
              </AvatarFallback>
            </Avatar>
          </View>
        </Link>
      </View>
    </View>
  );
};
