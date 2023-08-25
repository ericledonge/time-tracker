import { FormEvent, useState } from "react";
import { Button, TextInput, createStyles } from "@mantine/core";

import { useAddCompany } from "../../hooks/use-add-company.ts";
import { notifications } from "@mantine/notifications";

export const AdminPage = () => {
  const { classes } = useStyles();

  const [companyName, setCompanyName] = useState("");

  const addCompany = useAddCompany();

  const handleSubmitNewCompany = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await addCompany({
      name: companyName,
    });

    setCompanyName("");

    notifications.show({
      title: "Company added",
      message: "The company was added successfully",
      color: "green",
    });
  };

  return (
    <div className={classes.mainContainer}>
      <h1 className={classes.title}>Admin</h1>

      <form onSubmit={handleSubmitNewCompany}>
        <div className={classes.formContainer}>
          <TextInput
            placeholder="Company name"
            label="Company name"
            withAsterisk
            required
            value={companyName}
            onChange={(event) => setCompanyName(event.currentTarget.value)}
          />
          <Button type="submit">Add Company</Button>
        </div>
      </form>
    </div>
  );
};

const useStyles = createStyles(() => ({
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
    alignItems: "flex-end",
    gap: 20,
  },
}));
