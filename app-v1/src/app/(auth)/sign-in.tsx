import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';


import { petApi } from '../api';

const SignIn = () => {

  const [pet, setPet] = useState({});

  const getThePet = async (id: number) => {
    try {
      const fetchedPet = await petApi.signUp({
        email: 'ad',
        password: '',
      });
      setPet(fetchedPet.data);
    } catch (error) {
      console.warn(error)
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
