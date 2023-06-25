import { Button, createStyles, Select } from "@mantine/core";

const dataCompany = ["Béton Provincial", "HRCOM", "Partage Club"];

const dataActivity = ["Activity 1", "Activity 2", "Activity 3"];

export const TrackingPage = () => {
  const { classes } = useStyles();

  return (
    <>
      <h1>Tracking</h1>
      <section className={classes.formContainer}>
        <Select label="Company" placeholder="Pick one" data={dataCompany} />

        <Select label="Activity" placeholder="Pick one" data={dataActivity} />

        <Button>Start</Button>
      </section>
    </>
  );
};

const useStyles = createStyles((theme) => ({
  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 20,

    [theme.fn.largerThan("sm")]: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-end",
    },
  },
}));
