import { apiClient } from "./api.service.ts";

export const signInWithEmail = async (email: string, password: string) => {
  return await apiClient.auth.signInWithPassword({
    email,
    password,
  });
};
