import { StoreSlice } from "../store.model.ts";

export type User = {
  isAuthenticated: boolean;
};

export type UserSlice = {
  user: User;
  login: () => void;
  logout: () => void;
};

export const createUserSlice: StoreSlice<UserSlice> = (set) => ({
  user: {
    isAuthenticated: false,
  },
  login: () => {
    set((state) => ({ user: { ...state.user, isAuthenticated: true } }));
  },
  logout: () => {
    set((state) => ({ user: { ...state.user, isAuthenticated: false } }));
  },
});
