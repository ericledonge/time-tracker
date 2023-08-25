// @ts-ignore
import { apiClient } from "./api.service.ts";

type signInResponse = {
  authenticated: boolean;
  error: unknown;
};

export const signInWithEmail = async (
  email: string,
  password: string
): Promise<signInResponse> => {
  try {
    // @ts-ignore
    const response = await apiClient.auth.signInWithPassword({
      email,
      password,
    });

    return {
      authenticated: response?.user?.aud === "authenticated",
      error: "",
    };
  } catch (error) {
    return {
      authenticated: false,
      error,
    };
  }
};

export const signInWithEmailMocked = async () => {
  return {
    authenticated: true,
    error: "",
  };
};
