import { StyleSheet, Text, View } from 'react-native';
import { useSlice } from '../stores/profile.store';

const Index = () => {
  const { addSalmon, addTuna } = useSlice();

  return (
    <View style={styles.page}>
      <Text className='text-lg text-bubble-gum'>
        Edit app/index.tsx to edit this screen.
      </Text>
    </View>
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
