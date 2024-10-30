import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '~/src/components/ui/text';
import { Button } from '~/src/components/ui/button';

const HomeScreen = () => {
  return (
    <SafeAreaView className='flex flex-1 flex-col items-center justify-center'>

      <Text className='mb-32 text-8xl font-bold'>
        Spectra
      </Text>

      <Link href='/sign-up' push asChild>
        <Button className='rounded-full'>
          <Text>
            Sign Up
          </Text>
        </Button>
      </Link>

      <Link href='/sign-in'>
        <Button className='rounded-full'>
          <Text>
            Sign In
          </Text>
        </Button>
      </Link>

    </SafeAreaView>
  );
};

export default HomeScreen;
