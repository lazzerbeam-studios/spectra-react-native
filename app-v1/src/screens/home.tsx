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

    <View className='flex flex-1 flex-row bg-purple'>
      <Text className='text-primary' style={{ backgroundColor: 'red' }}>Yeah</Text>
      <Text className='text-secondary' style={{ backgroundColor: 'darkorange' }}>Yeah</Text>
      <Text className='text-typography' style={{ backgroundColor: 'green' }}>Yeah</Text>
    </View>

  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
