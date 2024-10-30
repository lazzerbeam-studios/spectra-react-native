import { Stack } from 'expo-router';
import HomeScreen from '~/src/screens/home/home';

const Home = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
      <HomeScreen></HomeScreen>
    </>
  );
}

export default Home;
