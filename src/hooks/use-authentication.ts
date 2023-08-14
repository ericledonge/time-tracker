import { useGetIsUserAuthenticated } from "../store/user";

export const useAuthentication = () => {
  const isUserAuthenticated = useGetIsUserAuthenticated();

  return {
    isUserAuthenticated,
  };
};
