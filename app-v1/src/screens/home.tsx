import { Link } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView className='flex flex-1 flex-col items-center justify-center bg-background'>

      <Text className='mb-32 text-8xl font-bold text-text'>
        Spectra
      </Text>

      <Link href='/sign-up' push asChild>
        <TouchableOpacity className='w-60 rounded-full border-2 border-text bg-primary hover:bg-background'>
          <Text className='p-4 text-center text-3xl font-semibold text-primarytext hover:text-text'>
            Sign Up
          </Text>
        </TouchableOpacity>
      </Link>

    </SafeAreaView>
  );
};

export default HomeScreen;
