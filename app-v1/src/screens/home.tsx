import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const HomeScreen = () => {

  return (

    // <View className='flex-1 justify-center items-center'>
    //   <Image
    //     className='w-32 h-32 mt-4'
    //     source={require('../assets/images/react-logo.png')}
    //   />
    //   <Text className='text-lg'>Welcome to Home Screen</Text>
    // </View>

    <SafeAreaView className="bg-background justify-center items-center flex-1 flex-col">
      <Text className='text-text'>Spectra</Text>
    </SafeAreaView>

  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
