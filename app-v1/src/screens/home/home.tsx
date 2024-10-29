import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '~/src/components/ui/text';
import { Button } from '~/src/components/ui/button';

const HomeScreen = () => {
  return (
    <SafeAreaView className='flex flex-1 flex-col items-center justify-center bg-background'>

      <Text className='mb-32 text-8xl font-bold'>
        Spectra
      </Text>

      <Link href='/sign-up' push asChild>
        <Button className='border-text mb-6 w-60 rounded-full border-2 bg-primary'>
          <Text className='p-4 text-center text-3xl font-semibold'>
            Sign Up
          </Text>
        </Button>
      </Link>

      <Link href='/sign-in' push asChild>
        <Button className='border-text w-60 rounded-full border-2 bg-primary'>
          <Text className='p-4 text-center text-3xl font-semibold'>
            Sign In
          </Text>
        </Button>
      </Link>

    </SafeAreaView>
  );
};

export default HomeScreen;
