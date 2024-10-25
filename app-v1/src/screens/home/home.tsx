import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { YStack, XStack, Text, useTheme, styled } from 'tamagui';

const HomeScreen = () => {
  const theme = useTheme();

  const background = theme.background.get();

  const Heading = styled(Text, {
    fontSize: 50,
    color: '$blue10',
    fontFamily: '$body',
  })

  return (

    <SafeAreaView style={{
      flex: 1,
      backgroundColor: background,
    }}>

      <YStack flex={1} alignItems='center' justifyContent='center'>
        <XStack backgroundColor='green'>

          <Heading>Heading</Heading>

        </XStack>
      </YStack>

      {/* <YStack flex={1}>

        <YStack alignItems='center' justifyContent='center'>

        </YStack>
      </YStack> */}

      {/* <Link href='/sign-up' push asChild>
        <H1 color={'$blue10'}>
          Sign Up
        </H1>
      </Link> */}

      {/* <Link href='/sign-in' push asChild>
        <H1 color={'$blue10'}>
          Sign In
        </H1>
      </Link> */}

    </SafeAreaView>
  );
};

export default HomeScreen;
