import Ionicons from '@expo/vector-icons/Ionicons';

import { useEffect } from 'react';
import { Link, Stack } from 'expo-router';
import { View, Text } from 'react-native';

import { BackButton } from '~/src/components/back-button';
import { ProfileStore } from '~/src/stores/profile.store';

import { ProfileSignout } from './profile-signout';
import { ProfileThemeButton } from './profile-theme-button';

export const ProfileScreen = () => {
  const { profile, profileInit } = ProfileStore();

  useEffect(() => {
    profileInit();
  }, [profileInit]);

  return (
    <>

      <Stack.Screen
        options={{
          title: '',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerLeft: () => <BackButton></BackButton>,
          headerRight: () => <ProfileThemeButton></ProfileThemeButton>,
        }}>
      </Stack.Screen>

      <View className='bg-secondary/30 flex h-full w-full flex-1 flex-row'>
        <View className='hidden flex-[0.2] sm:flex'></View>
        <View className='flex-1 items-center sm:flex-[0.6]'>

          <View className='bg-card mt-24 w-full max-w-sm rounded-2xl border border-foreground p-6 shadow'>
            <View className='items-center'>
              <Text className='pb-4 text-center text-xl font-semibold text-foreground'>
                Profile
              </Text>
              <View className='h-24 w-24 items-center justify-center rounded-full bg-foreground'>
                <Ionicons className="color-background" name="person" size={48} />
              </View>
            </View>
            <View className='mt-4'>
              <Text className='pb-4 text-center text-lg font-semibold text-foreground'>
                {profile?.name}
              </Text>
              <Text className='pb-8 text-center text-lg font-semibold text-foreground'>
                {profile?.email}
              </Text>
              <View className='rounded-md border border-foreground bg-foreground px-4 py-2'>
                <Link href='/profile-update' asChild>
                  <Text className='text-center text-sm font-medium text-background'>
                    Update
                  </Text>
                </Link>
              </View>
            </View>
          </View>

          <ProfileSignout></ProfileSignout>

        </View>
        <View className='hidden flex-[0.2] sm:flex'></View>
      </View>

    </>
  );
}
