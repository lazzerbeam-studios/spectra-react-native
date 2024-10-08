import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { authApi } from '../api';

const SignIn = () => {

  const getThePet = async (id: number) => {
    try {
      const fetchedPet = await authApi.signIn({
        email: 'yoda@yahoo.com',
        password: 'admin123',
      });
      console.log(fetchedPet.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>

      <View className='flex-1 justify-center items-center'>
        <Text className='text-lg text-bubble-gum'>SignIn</Text>
      </View>

      <TouchableOpacity onPress={() => getThePet(1)} className='mt-4 p-2 bg-blue-500 rounded border border-black'>
        <Text className='text-black'>Get The Pet</Text>
      </TouchableOpacity>

    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
