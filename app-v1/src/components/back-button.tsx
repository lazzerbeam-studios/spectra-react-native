import { router } from 'expo-router';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const BackButton = () => {
  const goBack = () => {
    router.back();
  };

  return (
    <>
      {router.canGoBack() && (
        <Pressable className='p-2 web:ms-2' onPress={goBack}>
          <Ionicons className="color-foreground" name="chevron-back" size={35} />
        </Pressable>
      )}
    </>
  );
};
