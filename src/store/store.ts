import { create } from "zustand";

import { createUserSlice, UserSlice } from "./user";

export type RootStoreType = UserSlice;

export const useStore = create<RootStoreType>((set, get) => ({
  ...createUserSlice(set, get),
}));
