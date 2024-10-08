import { StyleSheet, Text, View, Image } from 'react-native';

const HomeScreen = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Image
        className="w-32 h-32 mt-4"
        source={require('../assets/images/react-logo.png')}
      />
      <Text className="text-lg">Welcome to Home Screen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
});
