import { useEffect } from 'react';
import { View } from 'react-native';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '~/src/components/ui/text';
import { AuthStore } from '~/src/stores/auth.store';
import { Button } from '~/src/components/ui/button';

export const HomeScreen = () => {
  useEffect(() => {
    const authBool = AuthStore.getState().authBool;
    if (authBool) {
      router.replace('/dashboad');
    }
  }, []);

  return (
    <SafeAreaView>
      <View className='items-center'>
        <View className='w-full items-center pt-16 sm:w-1/3'>

          <Text className='mb-24 mt-24 font-Poppins500 text-8xl text-foreground'>
            Spectra
          </Text>

          <View className='gap-6'>

            <Link href='/sign-up' push asChild>
              <Button className='h-20 w-96 rounded-full bg-foreground hover:bg-foreground/90 active:bg-foreground'>
                <Text className='font-Poppins500 text-4xl text-background'>
                  Sign Up
                </Text>
              </Button>
            </Link>

            <Link href='/sign-in' push asChild>
              <Button className='h-20 w-96 rounded-full bg-foreground hover:bg-foreground/90 active:bg-foreground'>
                <Text className='font-Poppins500 text-4xl text-background'>
                  Sign In
                </Text>
              </Button>
            </Link>

          </View>

        </View>
      </View>
    </SafeAreaView>
  );
};
