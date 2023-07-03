import { useState } from "react";
import { Button, createStyles, Select, Text } from "@mantine/core";
import { useStopwatch } from "react-timer-hook";

const dataCompany = [
  { label: "Béton Provincial", value: "Béton Provincial" },
  { label: "HRCOM", value: "HRCOM" },
  { label: "Partage Club", value: "Partage Club" },
];

const dataActivity = [
  { label: "Activity 1", value: "Activity 1" },
  { label: "Activity 2", value: "Activity 2" },
  { label: "Activity 3", value: "Activity 3" },
];

export const TrackingPage = () => {
  const { classes } = useStyles();

  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedActivity, setSelectedActivity] = useState("");
  const [startingDate, setStartingDate] = useState<Date>();
  const { hours, minutes, isRunning, start, pause } = useStopwatch();

  const isStartClickable = selectedCompany && selectedActivity;

  const handleClickStart = () => {
    setStartingDate(new Date());
    start();
  };

  const handleClickPause = () => {
    pause();
  };

  const handleClickStop = () => {
    pause();
  };

  return (
    <div className={classes.mainContainer}>
      <h1 style={{ textAlign: "center" }}>Tracking</h1>

      <div className={classes.formContainer}>
        <Select
          label="Company"
          data={dataCompany}
          value={selectedCompany}
          onChange={(value) => setSelectedCompany(value)}
          placeholder="Pick one"
        />
        <Select
          label="Activity"
          data={dataActivity}
          value={selectedActivity}
          onChange={(value) => setSelectedActivity(value)}
          placeholder="Pick one"
        />
      </div>

      <div className={classes.buttonContainer}>
        <Button
          onClick={handleClickStart}
          disabled={!isStartClickable || isRunning}
          fullWidth
        >
          {minutes > 0 ? "Resume" : "Start"}
        </Button>
        <Button
          onClick={handleClickPause}
          disabled={!isRunning}
          variant="default"
          fullWidth
        >
          Pause
        </Button>
        <Button
          onClick={handleClickStop}
          disabled={!isRunning}
          color="red"
          fullWidth
        >
          Stop
        </Button>
      </div>

      <div className={classes.statusContainer}>
        <Text>
          Started at:{" "}
          {startingDate?.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Text>
        <Text>{`Elapsed time: ${hours}h ${minutes}m`}</Text>
      </div>
    </div>
  );
};

const useStyles = createStyles((theme) => ({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: 400,
    marginLeft: "auto",
    marginRight: "auto",
    gap: 20,
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 20,

    [theme.fn.largerThan("sm")]: {
      flexDirection: "row",
    },
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: 20,
  },
  statusContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
}));
