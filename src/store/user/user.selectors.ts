import { useStore } from "../store.ts";

export const useSetLogin = () => useStore((state) => state.login);
export const useSetLogout = () => useStore((state) => state.logout);

export const useGetIsUserAuthenticated = () =>
  useStore((state) => state.user.isAuthenticated);
