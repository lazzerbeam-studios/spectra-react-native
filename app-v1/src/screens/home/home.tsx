import { useEffect } from 'react';
import { Link, router } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ProfileStore } from '~/src/stores/profile.store';

export const HomeScreen = () => {

  useEffect(() => {
    const profile = ProfileStore.getState().profile;
    if (profile && profile.id) {
      router.replace('/dashboad');
    }
  }, []);

  return (
    <SafeAreaView>

      <View className='items-center'>
        <View className='w-full sm:w-1/3'>

          <Text className='mb-24 pt-2 font-Poppins500 text-8xl text-foreground'>
            Spectra
          </Text>

          <Link href='/sign-up' push asChild>
            <TouchableOpacity className='mb-6 h-20 w-96 items-center justify-center rounded-full bg-foreground pt-1'>
              <Text className='font-Poppins500 text-4xl text-background'>
                Sign Up
              </Text>
            </TouchableOpacity>
          </Link>

          <Link href='/sign-in' push asChild>
            <TouchableOpacity className='h-20 w-96 items-center justify-center rounded-full bg-foreground pt-1'>
              <Text className='font-Poppins500 text-4xl text-background'>
                Sign In
              </Text>
            </TouchableOpacity>
          </Link>

        </View>
      </View>

    </SafeAreaView>
  );
};
