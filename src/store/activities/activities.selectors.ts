import { useStore } from "../store.ts";

export const useAddActivity = () => useStore((state) => state.addActivity);

export const useGetActivities = () => useStore((state) => state.activities);
