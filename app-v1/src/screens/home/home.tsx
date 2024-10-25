import { Link } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, SizableText, View } from 'tamagui';

const HomeScreen = () => {
  return (

    <SafeAreaView >
      <Text>
        Spectra
      </Text>
      <HomeScreen></HomeScreen>

      <SizableText color={"$blue10"} fontSize={24} fontWeight={300}>Yeah</SizableText>

    </SafeAreaView>

  );
};

export default HomeScreen;
