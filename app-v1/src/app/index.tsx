import Ionicons from '@expo/vector-icons/Ionicons';

import { Stack } from 'expo-router';
import { cssInterop } from 'nativewind';

import { HomeScreen } from '~/src/screens/home/home';

const Home = () => {
  cssInterop(Ionicons, {
    className: {
      target: "style",
    },
  });
  return (
    <>
      <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
      <HomeScreen></HomeScreen>
    </>
  );
}

export default Home;
