import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PasswordForgotHeader } from './password-forgot-header';
import { PasswordForgotContent } from './password-forgot-content';

export const PasswordForgotScreen = () => {
  return (
    <SafeAreaView>

      <PasswordForgotHeader />

      <ScrollView keyboardShouldPersistTaps='handled' className='h-full'>
        <View className='items-center'>
          <View className='w-full pt-16 sm:w-1/3'>
            <PasswordForgotContent />
          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
};
