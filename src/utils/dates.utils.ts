export const convertSeconds = (sec: number): string => {
  const hours = Math.floor(sec / 3600);
  const minutes = Math.floor((sec - hours * 3600) / 60);

  return hours + "h " + minutes + "m";
};
