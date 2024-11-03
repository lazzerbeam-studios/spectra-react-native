import { create } from 'zustand';

type State = {
  authToken: string;
  authBool: boolean;
};

type Actions = {
  tokenSet: (token: string) => void;
  clear: () => void;
};

const initState: State = {
  authToken: '',
  authBool: false,
};

export const authStore = create<State & Actions>()((set, get) => ({
  ...initState,
  tokenSet: (token: string) => {
    set({ authToken: token });
  },
  clear: () => {
    set(initState);
  },
}));
