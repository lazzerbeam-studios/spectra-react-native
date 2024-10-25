import { Stack, YStack, SizableText, View, styled, Text, XStack } from 'tamagui';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {

  const Heading = styled(Text, {
    fontSize: 50,
    color: '$blue10',
    fontFamily: "$body",
  })

  return (

    <SafeAreaView style={{
      flex: 1,
      backgroundColor: 'black',
    }}>

      <View flex={1}>

        <YStack flex={1} alignItems='center' justifyContent='center'>
          <XStack backgroundColor="green">

            <Heading>Heading</Heading>

          </XStack>
        </YStack>

      </View>

      {/* <YStack flex={1}>

        <YStack alignItems="center" justifyContent="center">

        </YStack>
      </YStack> */}

      {/* <Link href='/sign-up' push asChild>
        <H1 color={"$blue10"}>
          Sign Up
        </H1>
      </Link> */}

      {/* <Link href='/sign-in' push asChild>
        <H1 color={"$blue10"}>
          Sign In
        </H1>
      </Link> */}

    </SafeAreaView>
  );
};

export default HomeScreen;
