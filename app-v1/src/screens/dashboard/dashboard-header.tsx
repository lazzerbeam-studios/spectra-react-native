import { Link } from 'expo-router';
import { View, StyleSheet } from 'react-native';

const logoWidth = 1602;
const logoHeight = 755;
const logoAspectRatio = logoWidth / logoHeight;

export const DashboardHeader = () => {
  return (
    <View className='h-16 flex-row items-center'>
      <View className='ms-2'>
        <Link href='/dashboard' asChild>
        </Link>
      </View>
      <View className='flex-1'></View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 40,
    marginStart: 16,
    aspectRatio: logoAspectRatio,
  },
});
