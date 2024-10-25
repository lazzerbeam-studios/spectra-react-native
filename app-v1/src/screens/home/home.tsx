import { Link } from 'expo-router';

import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (

    <SafeAreaView>

      <Text>
        Spectra
      </Text>

      <Link href='/sign-up' push asChild>
        <Text>
          Sign Up
        </Text>
      </Link>

      <Link href='/sign-in' push asChild>
        <Text>
          Sign In
        </Text>
      </Link>

    </SafeAreaView>

  );
};

export default HomeScreen;
