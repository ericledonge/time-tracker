import { useSetLogout } from "../store/user";

export const useLogout = () => {
  const setLogout = useSetLogout();

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
  };
};
