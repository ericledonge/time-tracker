import { useNavigate } from "react-router-dom";
import { useGetIsUserAuthenticated } from "../store/user";
import { useEffect } from "react";
import { createStyles } from "@mantine/core";

export const LandingPage = () => {
  const navigate = useNavigate();

  const { classes } = useStyles();

  const isUserAuthenticated = useGetIsUserAuthenticated();

  useEffect(() => {
    if (!isUserAuthenticated) {
      navigate("/dashboard");
    }
  }, [isUserAuthenticated, navigate]);

  return (
    <div className={classes.mainContainer}>
      <h1>Landing page</h1>
    </div>
  );
};

const useStyles = createStyles(() => ({
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
