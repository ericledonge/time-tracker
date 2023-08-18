import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { createUserSlice, UserSlice } from "./user";
import { ActivitiesSlice, createActivitiesSlice } from "./activities";

export type RootStoreType = UserSlice & ActivitiesSlice;

export const useStore = create<RootStoreType>()(
  devtools((set, get) => ({
    ...createUserSlice(set, get),
    ...createActivitiesSlice(set, get),
  }))
);
