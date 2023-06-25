import { useGetIsUserAuthenticated, useSetLogout } from "../store/user";

export const useAuthentication = () => {
  const isUserAuthenticated = useGetIsUserAuthenticated();

  const setLogout = useSetLogout();

  return {
    isUserAuthenticated,
    setLogout,
  };
};
