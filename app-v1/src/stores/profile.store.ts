import { create } from 'zustand';

import { Profile } from '~/src/openapi/api';

type State = {
  profile: Profile | null;
};

type Actions = {
  setProfile: (profile: Profile) => void;
  clear: () => void;
};

const initialState: State = {
  profile: null,
};

export const useStore = create<State & Actions>()((set, get) => ({
  ...initialState,
  setProfile: (profile: Profile) => {
    set({ profile: profile });
  },
  clear: () => {
    set(initialState);
  },
}));
