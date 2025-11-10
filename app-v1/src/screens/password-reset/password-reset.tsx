import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PasswordResetHeader } from './password-reset-header';
import { PasswordResetContent } from './password-reset-content';

export const PasswordResetScreen = () => {
  return (
    <SafeAreaView>

      <PasswordResetHeader />

      <View className='items-center'>
        <View className='w-full pt-16 sm:w-1/3'>
          <PasswordResetContent />
        </View>
      </View>

    </SafeAreaView>
  );
};
