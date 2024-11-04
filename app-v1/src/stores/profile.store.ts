import { create } from 'zustand';
import { MMKV } from 'react-native-mmkv';

import { usersApi } from '~/src/api';
import { Profile } from '~/src/openapi/api';
import { authStore } from '~/src/stores/auth.store';

const storage = new MMKV();

type State = {
  profile: Profile | null;
};

type Actions = {
  profileSet: (profile: Profile) => void;
  profileClear: () => void;
  profileInit: () => Promise<void>;
  profileUpdate: () => Promise<void>;
};

const initState: State = {
  profile: null,
};

export const profileStore = create<State & Actions>()((set, get) => ({
  ...initState,
  profileSet: (profile: Profile) => {
    set({ profile: profile });
  },
  profileClear: () => {
    set(initState);
  },
  profileInit: async () => {
    let token = storage.getString('token');
    if (token) {
      authStore.getState().authSet(token);
      token = authStore.getState().authToken;
      const response = await usersApi.profileGet(token);
      get().profileSet(response.data.object);
    } else {
      authStore.getState().authClear();
      get().profileClear();
    }
  },
  profileUpdate: async () => {
    let token = storage.getString('token');
    if (token) {
      authStore.getState().authSet(token);
      token = authStore.getState().authToken;
      const response = await usersApi.profileGet(token);
      get().profileSet(response.data.object);
    } else {
      authStore.getState().authClear();
      get().profileClear();
    }
  }
}));
