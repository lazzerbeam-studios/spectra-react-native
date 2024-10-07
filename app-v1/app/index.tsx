import { Text, View, StyleSheet } from 'react-native';

const Index = () => {
  return (
    <View style={styles.page}>
      <Text className="text-lg text-bubble-gum">
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
