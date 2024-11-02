import { create } from 'zustand';

type State = {
  token: string;
};

type Actions = {
  tokenSet: (token: string) => void;
  tokenClear: () => void;
};

const initialState: State = {
  token: 'null',
};

export const authStore = create<State & Actions>()((set, get) => ({
  ...initialState,
  tokenSet: (token: string) => {
    set({ token: token });
  },
  tokenClear: () => {
    set(initialState);
  },
}));
