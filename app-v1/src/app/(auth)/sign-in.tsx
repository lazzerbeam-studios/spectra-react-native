import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
