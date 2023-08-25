import { apiClient } from "./api.service.ts";

export const signUp = async (email: string, password: string) => {
  try {
    const { data, error } = await apiClient.auth.signUp({
      email,
      password,
    });
  } catch (error) {
    console.error(error);
  }
};
