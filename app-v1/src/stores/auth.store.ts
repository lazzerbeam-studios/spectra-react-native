import { create } from 'zustand';

type State = {
  authBool: boolean;
  authToken: string;
};

type Actions = {
  authSet: (token: string) => void;
  authClear: () => void;
};

const initState: State = {
  authBool: false,
  authToken: '',
};

export const AuthStore = create<State & Actions>()((set, get) => ({
  ...initState,
  authSet: (authToken: string) => {
    set({
      authBool: true,
      authToken: authToken,
    });
  },
  authClear: () => {
    set(initState);
  },
}));
