import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { YStack, XStack, Text, useTheme, styled } from 'tamagui';

const HomeScreen = () => {
  const theme = useTheme();

  const background = theme.background.get();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: background,
    }
  })

  const Heading = styled(Text, {
    fontSize: 50,
    color: '$color',
    fontFamily: '$body',
  })

  return (

    <SafeAreaView style={styles.container}>

      <YStack flex={1} alignItems='center' justifyContent='center'>
        <Heading>Heading</Heading>
      </YStack>

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
