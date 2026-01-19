import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SignInHeader } from './sign-in-header';
import { SignInContent } from './sign-in-content';

export const SignInScreen = () => {
  return (
    <SafeAreaView>

      <SignInHeader />

      <ScrollView keyboardShouldPersistTaps='handled' className='h-full'>
        <View className='items-center'>
          <View className='w-full pt-16 sm:w-1/3'>
            <SignInContent />
          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
};
