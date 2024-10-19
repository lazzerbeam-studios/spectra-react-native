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

    <SafeAreaView className='flex flex-1 flex-row bg-primary'>
      <Text className='text-primary' style={{ backgroundColor: 'red' }}>Yeah 1</Text>
      <Text className='text-secondary' style={{ backgroundColor: 'darkorange' }}>Yeah 2</Text>
      <Text className='text-typography' style={{ backgroundColor: 'green' }}>Yeah 3</Text>
    </SafeAreaView>

  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
