import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TouchableOpacity } from 'react-native';

export const NotFoundScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 32 }}>
          404 Not Found
        </Text>

        <Link href='/' asChild>
          <TouchableOpacity
            style={{
              marginTop: 32,
              marginBottom: 16,
              paddingHorizontal: 32,
              paddingVertical: 16,
              backgroundColor: '#000',
              borderRadius: 9999
            }}
          >
            <Text style={{ fontSize: 24, color: '#fff' }}>
              Go Home
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}
