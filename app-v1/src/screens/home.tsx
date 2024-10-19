import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const HomeScreen = () => {

  return (
    <SafeAreaView className='bg-background justify-center items-center flex-1 flex-col'>

      <Text className='text-text text-4xl font-bold'>Spectra</Text>

      <TouchableOpacity onPress={() => alert('Button Pressed!')}>
        <Text className='text-text text-4xl font-bold'>Click Me</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
