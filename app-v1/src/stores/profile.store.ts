import { create } from 'zustand';
import { MMKV } from 'react-native-mmkv';

import { usersApi } from '~/src/api';
import { Profile } from '~/src/openapi/api';

export const storage = new MMKV();

type State = {
  profile: Profile | null;
};

type Actions = {
  profileClear: () => void;
  profileInit: () => Promise<void>;
};

const initialState: State = {
  profile: null,
};

export const profileStore = create<State & Actions>()((set, get) => ({
  ...initialState,
  profileClear: () => {
    set(initialState);
  },
  profileInit: async () => {
    const token = storage.getString('token');
    const response = await usersApi.profileGet(token);
    set({ profile: response.data.object });
  }
}));
