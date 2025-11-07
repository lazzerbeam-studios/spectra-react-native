import { create } from 'zustand';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { usersApi } from '~/src/api';
import { Profile } from '~/src/openapi/api';
import { ErrorGet } from '~/src/scripts/error';
import { AuthStore } from '~/src/stores/auth.store';

type State = {
  profile: Profile | null;
};

type Actions = {
  profileSet: (profile: Profile) => void;
  profileClear: () => Promise<void>;
  profileInit: () => Promise<void>;
  profileUpdate: (profile: Profile) => Promise<void>;
  profileLogout: () => void;
};

const initState: State = {
  profile: null,
};

export const ProfileStore = create<State & Actions>()((set, get) => ({
  ...initState,
  profileSet: (profile: Profile) => {
    set({ profile: profile });
  },
  profileClear: async () => {
    set(initState);
    AuthStore.getState().authClear();
    await AsyncStorage.removeItem('token');
  },
  profileInit: async () => {
    let token = await AsyncStorage.getItem('token');
    if (token) {
      AuthStore.getState().authSet(token);
      token = AuthStore.getState().authToken;
      try {
        const response = await usersApi.profileGetAPI(token);
        get().profileSet(response.data.object);
      } catch (error: any) {
        await get().profileClear();
      }
    } else {
      await get().profileClear();
    }
  },
  profileUpdate: async (profile: Profile) => {
    const token = AuthStore.getState().authToken;
    try {
      const response = await usersApi.profileUpdateAPI(profile, token);
      get().profileSet(response.data.object);
    } catch (errors: any) {
      const error = ErrorGet(errors.response.data);
      throw error;
    }
  },
  profileLogout: async () => {
    await get().profileClear();
    router.navigate('/');
  }
}));
