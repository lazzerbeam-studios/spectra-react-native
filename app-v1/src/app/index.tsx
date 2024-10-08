import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

import { useStore } from '../stores/profile.store';

import HomeScreen from '../screens/home';

const Index = () => {
  const { salmon, tuna, addSalmon, addTuna } = useStore();

  return (
    <HomeScreen />
  );
};

export default Index;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
