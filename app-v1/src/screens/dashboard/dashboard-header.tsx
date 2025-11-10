import { Link } from 'expo-router';
import { View } from 'react-native';
import { CircleUserRound } from 'lucide-react-native';

import { Icon } from '~/src/components/ui/icon';

export const DashboardHeader = () => {
  return (
    <View className='h-16 flex-row items-center'>
      <View className='flex-1'></View>
      <View className='me-2'>
        <Link href='/profile'>
          <Icon as={CircleUserRound} size={48} />
        </Link>
      </View>
    </View>
  );
};
