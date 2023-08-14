import { createClient } from "@supabase/supabase-js";

let apiClient;

if (import.meta.env.PROD) {
  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  apiClient = createClient(API_URL, API_KEY);
}

export { apiClient };
