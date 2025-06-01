import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text, TouchableOpacity } from 'react-native';
import { ProfileStore } from '~/src/stores/profile.store';

export const HomeScreen = () => {

  const onLayout = () => {
    const profile = ProfileStore.getState().profile;
    if (profile && profile.id) {
      router.replace('/dashboad');
    }
  };

  return (
    <SafeAreaView className='mb-36 flex flex-1 flex-col items-center justify-center bg-background' onLayout={onLayout}>

      <Text className='mb-24 font-Poppins500 text-8xl text-foreground'>
        Spectra
      </Text>

      <Link href='/sign-up' push asChild>
        <TouchableOpacity className='mb-6 h-20 w-96 items-center justify-center rounded-full bg-foreground'>
          <Text className='font-Poppins500 text-4xl text-background'>
            Sign Up
          </Text>
        </TouchableOpacity>
      </Link>

      <Link href='/sign-in' push asChild>
        <TouchableOpacity className='h-20 w-96 items-center justify-center rounded-full bg-foreground'>
          <Text className='font-Poppins500 text-4xl text-background'>
            Sign In
          </Text>
        </TouchableOpacity>
      </Link>

    </SafeAreaView>
  );
};
