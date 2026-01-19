import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ProfileUpdateHeader } from './profile-update-header';
import { ProfileUpdateContent } from './profile-update-content';

export const ProfileUpdateScreen = () => {
  return (
    <SafeAreaView>

      <ProfileUpdateHeader />

      <ScrollView keyboardShouldPersistTaps='handled' className='h-full'>
        <View className='items-center'>
          <View className='w-full sm:w-1/3'>
            <ProfileUpdateContent />
          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
};
