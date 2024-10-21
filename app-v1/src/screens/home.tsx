import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const HomeScreen = () => {

  return (
    <SafeAreaView className='flex flex-1 flex-col items-center justify-center bg-background'>

      <Text className='text-4xl font-bold text-text'>
        Spectra
      </Text>

      <TouchableOpacity onPress={() => alert('Button Pressed!')}>
        <Text className='text-4xl font-bold text-text'>Click Me</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
