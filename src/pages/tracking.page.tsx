import { useState } from "react";
import { Button, createStyles, Select, Text } from "@mantine/core";
import { useStopwatch } from "react-timer-hook";

const dataCompany = ["Béton Provincial", "HRCOM", "Partage Club"];

const dataActivity = ["Activity 1", "Activity 2", "Activity 3"];

export const TrackingPage = () => {
  const { classes } = useStyles();

  const [selectedCompany, setSelectedCompany] = useState();
  const [selectedActivity, setSelectedActivity] = useState();
  const [startingDate, setStartingDate] = useState<Date>();

  const { minutes, hours, isRunning, start, pause, reset } = useStopwatch();

  const handleClickStart = () => {
    setStartingDate(new Date());
    start();
  };

  const handleClickPause = () => {
    pause();
  };

  const handleStop = () => {
    pause();
  };

  return (
    <div className={classes.mainContainer}>
      <h1 style={{ textAlign: "center" }}>Tracking</h1>

      <div className={classes.formContainer}>
        <Select label="Company" placeholder="Pick one" data={dataCompany} />
        <Select label="Activity" placeholder="Pick one" data={dataActivity} />
      </div>

      <div className={classes.buttonContainer}>
        <Button onClick={handleClickStart}>Start</Button>
        <Button onClick={handleClickPause} variant="default">
          Pause
        </Button>
        <Button onClick={handleClickStart} color="red">
          Stop
        </Button>
      </div>

      <div className={classes.formContainer}>
        <Text>Started at: {startingDate?.toDateString()}</Text>
        <Text>{`Running since: ${hours} hours : ${minutes} minutes`}</Text>
      </div>
    </div>
  );
};

const useStyles = createStyles((theme) => ({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 20,

    [theme.fn.largerThan("sm")]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-end",
    },
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: 20,
  },
  button: {
    [theme.fn.smallerThan("sm")]: {
      minWidth: 150,
    },
  },
}));
