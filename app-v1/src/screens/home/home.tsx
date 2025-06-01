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
    <SafeAreaView className='mb-36 flex flex-1 flex-col items-center justify-center' onLayout={onLayout}>

      <Text className='native:pt-2 mb-24 font-Poppins500 text-8xl'>
        Spectra
      </Text>

      <Link href='/sign-up' push asChild>
        <TouchableOpacity className='native:h-20 mb-6 h-20 w-96 rounded-full'>
          <Text className='native:text-4xl text-4xl'>
            Sign Up
          </Text>
        </TouchableOpacity>
      </Link>

      <Link href='/sign-in' push asChild>
        <TouchableOpacity className='native:h-20 h-20 w-96 rounded-full'>
          <Text className='native:text-4xl text-4xl'>
            Sign In
          </Text>
        </TouchableOpacity>
      </Link>

    </SafeAreaView>
  );
};
