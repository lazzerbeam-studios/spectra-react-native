import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

import { useStore } from '../../stores/profile.store';

const Index = () => {
  const { salmon, tuna, addSalmon, addTuna } = useStore();

  return (
    <View style={styles.page}>

      <Text className='text-lg text-bubble-gum'>
        Profile
      </Text>

      <Text className='text-lg text-bubble-gum'>
        {salmon}
      </Text>

      <Text className='text-lg text-bubble-gum'>
        {tuna}
      </Text>

      <TouchableOpacity onPressIn={() => addSalmon(1)}>
        <Text>Add Salmon</Text>
      </TouchableOpacity>

      <TouchableOpacity onPressIn={() => addTuna(1)}>
        <Text>Add Tuna</Text>
      </TouchableOpacity>

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
