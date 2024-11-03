import { create } from 'zustand';

type State = {
  authToken: string;
  authBool: boolean;
};

type Actions = {
  authSet: (token: string) => void;
  authClear: () => void;
};

const initState: State = {
  authToken: '',
  authBool: false,
};

export const authStore = create<State & Actions>()((set, get) => ({
  ...initState,
  authSet: (authToken: string) => {
    set({
      authToken: authToken,
      authBool: true,
    });
  },
  authClear: () => {
    set(initState);
  },
}));
