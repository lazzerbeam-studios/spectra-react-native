import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// import { authApi } from '../api';

const SignInScreen = () => {

  // const signIn = async (id: number) => {
  //   try {
  //     const fetchedPet = await authApi.signIn({
  //       email: 'yoda@yahoo.com',
  //       password: 'admin123',
  //     });
  //     console.log(fetchedPet.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <View>

      <View className='flex-1 items-center justify-center'>
        <Text className='text-lg text-foreground'>Yeah broooooooo</Text>
      </View>

      {/* <TouchableOpacity onPress={() => signIn(1)} className='mt-4 rounded border border-black bg-blue-500 p-2'>
        <Text className='text-black'>yeah</Text>
      </TouchableOpacity> */}

    </View>
  )
}

export default SignInScreen
