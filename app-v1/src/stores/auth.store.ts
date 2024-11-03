import { create } from 'zustand';

type State = {
  token: string;
  auth: boolean;
};

type Actions = {
  tokenSet: (token: string) => void;
  clear: () => void;
};

const initialState: State = {
  token: 'null',
  auth: false,
};

export const authStore = create<State & Actions>()((set, get) => ({
  ...initialState,
  tokenSet: (token: string) => {
    set({ token: token });
  },
  clear: () => {
    set(initialState);
  },
}));
