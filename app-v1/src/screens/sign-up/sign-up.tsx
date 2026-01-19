import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SignUpHeader } from './sign-up-header';
import { SignUpContent } from './sign-up-content';

export const SignUpScreen = () => {
  return (
    <SafeAreaView>

      <SignUpHeader />

      <ScrollView keyboardShouldPersistTaps='handled' className='h-full'>
        <View className='items-center'>
          <View className='w-full pt-16 sm:w-1/3'>
            <SignUpContent />
          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
};
