import { create } from 'zustand';
import { MMKV } from 'react-native-mmkv';

import { usersApi } from '~/src/api';
import { Profile } from '~/src/openapi/api';
import { authStore } from '~/src/stores/auth.store';

const storage = new MMKV();
const { authSet, authClear } = authStore();

type State = {
  profile: Profile | null;
};

type Actions = {
  profileSet: (profile: Profile) => void;
  profileClear: () => void;
  profileInit: () => Promise<void>;
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
    const token = storage.getString('token');

    if (token) {
      authSet(token);
      const response = await usersApi.profileGet(token);
      set({ profile: response.data.object });
      get().profileSet(response.data.object);
    } else {
      authClear();
      get().profileClear();
    }

  }
}));
