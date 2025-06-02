import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export const BackButton = () => {

  const goBack = () => {
    router.back();
  };

  return (
    <>
      {router.canGoBack() && (
        <TouchableOpacity className='p-2 web:ms-2' onPress={goBack}>
          <Ionicons name="chevron-back" size={35} color="black" />
        </TouchableOpacity>
      )}
    </>
  );

}
