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
        <Pressable onPress={goBack} className='p-2 web:ms-2'>
          <Ionicons name="chevron-back" size={35} className="color-foreground" />
        </Pressable>
      )}
    </>
  );
};
