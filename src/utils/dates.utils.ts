interface TimeToDisplay {
  hours: number;
  minutes: number;
}

export const mapTimeToDisplay = ({ hours, minutes }: TimeToDisplay) => {
  const timeString = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  return `Elapsed time: ${timeString}`;
};
