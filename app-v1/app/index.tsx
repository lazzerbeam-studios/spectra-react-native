import { Text, View, StyleSheet } from 'react-native';

const Index = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text className="flex-1 items-center justify-center bg-white">
        Edit app/index.tsx to edit this screen.
      </Text>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
