import { StoreSlice } from "../store.model.ts";

export type Activity = {
  id: string;
  company: string;
  activity: string;
  time: 0;
};

export type ActivitiesSlice = {
  activities: Activity[];
  addActivity: (activity: Activity) => void;
};

export const createActivitiesSlice: StoreSlice<ActivitiesSlice> = (set) => ({
  activities: [],
  addActivity: (activity: Activity) => {
    set(
      (state) => ({ activities: [...state.activities, activity] }),
      false,
      // @ts-ignore
      "addActivity"
    );
  },
});
