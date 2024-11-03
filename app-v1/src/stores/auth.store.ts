import { create } from 'zustand';

type State = {
  token: string;
  auth: boolean;
};

type Actions = {
  tokenSet: (token: string) => void;
  clear: () => void;
};

const initState: State = {
  token: '',
  auth: false,
};

export const authStore = create<State & Actions>()((set, get) => ({
  ...initState,
  tokenSet: (token: string) => {
    set({ token: token });
  },
  clear: () => {
    set(initState);
  },
}));
