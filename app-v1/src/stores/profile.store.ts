import { create } from 'zustand';
import { MMKV } from 'react-native-mmkv';

import { usersApi } from '~/src/api';
import { Profile } from '~/src/openapi/api';

export const storage = new MMKV();

type State = {
  profile: Profile | null;
};

type Actions = {
  profileSet: (profile: Profile) => void;
  profileClear: () => void;
  init: () => Promise<void>;
};

const initialState: State = {
  profile: null,
};

export const profileStore = create<State & Actions>()((set, get) => ({
  ...initialState,
  profileSet: (profile: Profile) => {
    set({ profile: profile });
  },
  profileClear: () => {
    set(initialState);
  },
  init: async () => {
    const token = storage.getString('token');
    const response = await usersApi.profileGet(token);
    get().profileSet(response.data.object);
  }
}));
