import { StyleSheet, Text, View, Image } from 'react-native';

const HomeScreen = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-lg">Welcome to Home Screen</Text>
      <Image
        className="w-32 h-32 mt-4"
        source={{ uri: 'https://example.com/your-image-url.png' }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
});
