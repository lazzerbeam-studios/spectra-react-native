import { create } from 'zustand';

type State = {
  token: string;
};

type Actions = {
  setProfile: (token: string) => void;
  clear: () => void;
};

const initialState: State = {
  token: 'null',
};

export const authStore = create<State & Actions>()((set, get) => ({
  ...initialState,
  setProfile: (token: string) => {
    set({ token: token });
  },
  clear: () => {
    set(initialState);
  },
}));
