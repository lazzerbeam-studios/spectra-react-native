import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const HomeScreen = () => {

  return (
    <SafeAreaView className='flex flex-1 flex-col items-center justify-center bg-background'>

      <Text className='mb-12 text-7xl font-bold text-text'>
        Spectra
      </Text>

      <Link href="/logged-in/profile" push asChild>
        <TouchableOpacity
          className='rounded-full border-2 border-text bg-primary p-4'
        >
          <Text className='w-60 text-center text-3xl font-semibold text-primarytext'>
            Sign Up
          </Text>
        </TouchableOpacity>
      </Link>

    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
