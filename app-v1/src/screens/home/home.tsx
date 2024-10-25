import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SizableText } from 'tamagui';

const HomeScreen = () => {
  return (

    <SafeAreaView >
      <Text>
        Spectra
      </Text>

      <SizableText color={"$blue10"} fontSize={24} fontWeight={300}>Yeahh</SizableText>

    </SafeAreaView>

  );
};

export default HomeScreen;
