import { create } from 'zustand';

type State = {
  token: string;
  authBool: boolean;
};

type Actions = {
  tokenSet: (token: string) => void;
  clear: () => void;
};

const initState: State = {
  token: '',
  authBool: false,
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
