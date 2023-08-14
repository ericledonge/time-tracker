import { useState } from "react";
import { Button, createStyles, Select, Text } from "@mantine/core";
import { useStopwatch } from "react-timer-hook";
import { mapTimeToDisplay } from "../../utils";

// TODO: CreateTable https://mantine.dev/core/select/#creatable

const dataCompany = [
  { label: "Company 1", value: "Company 1" },
  { label: "Company 2", value: "Company 2" },
  { label: "Company 3", value: "Company 3" },
];

const dataActivity = [
  { label: "Activity 1", value: "Activity 1" },
  { label: "Activity 2", value: "Activity 2" },
  { label: "Activity 3", value: "Activity 3" },
];

export const TrackingPage = () => {
  const { classes } = useStyles();

  const { hours, minutes, isRunning, start, pause } = useStopwatch();

  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedActivity, setSelectedActivity] = useState("");
  const [startingDate, setStartingDate] = useState<Date>();
  const [hasStarted, setHasStarted] = useState(false);

  const isStartClickable = selectedCompany && selectedActivity;

  const isNewTaskClickable = hasStarted && !isRunning;

  const handleClickStart = () => {
    setHasStarted(true);
    setStartingDate(new Date());
    start();
  };

  const handleClickResume = () => {
    start();
  };

  const handleClickStop = () => {
    pause();
  };

  const handleClickNewTask = () => {
    // save the task in the backend
    // reset the form
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.titleContainer}>
        <h1 className={classes.title}>Tracking</h1>

        <Button
          onClick={handleClickNewTask}
          disabled={!isNewTaskClickable}
          fullWidth
        >
          + New task
        </Button>
      </div>

      <div className={classes.formContainer}>
        <Select
          label="Company"
          data={dataCompany}
          value={selectedCompany}
          onChange={(value) => setSelectedCompany(value!)}
          placeholder="Pick one"
        />
        <Select
          label="Activity"
          data={dataActivity}
          value={selectedActivity}
          onChange={(value) => setSelectedActivity(value!)}
          placeholder="Pick one"
        />
      </div>

      <div className={classes.buttonContainer}>
        {!hasStarted ? (
          <Button
            onClick={handleClickStart}
            disabled={!isStartClickable || isRunning}
            color="green"
            fullWidth
          >
            Start
          </Button>
        ) : (
          <Button
            onClick={handleClickResume}
            disabled={!isStartClickable || isRunning}
            color="green"
            fullWidth
          >
            Resume
          </Button>
        )}

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
        {hasStarted ? (
          <>
            <Text>
              Started at:{" "}
              {startingDate?.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Text>
            <Text>{mapTimeToDisplay({ hours, minutes })}</Text>
          </>
        ) : (
          <Text>Not started</Text>
        )}
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
  title: {
    marginRight: 80,
    textAlign: "center",
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
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
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));
