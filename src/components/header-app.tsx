import {
  createStyles,
  Header,
  Group,
  Button,
  Text,
  Burger,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";

import { HeaderAppMobile } from "./header-app-mobile.tsx";
import { APP_NAME, PAGES } from "../routing";
import { useAuthentication } from "../hooks";

export function HeaderApp() {
  const { classes } = useStyles();

  const { isUserAuthenticated, setLogout } = useAuthentication();

  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: "100%" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Text>{APP_NAME}</Text>
          </Link>

          {isUserAuthenticated && (
            <Group
              sx={{ height: "100%" }}
              spacing={0}
              className={classes.hiddenMobile}
            >
              <Link to={PAGES.TRACKING} className={classes.link}>
                Tracking
              </Link>
              <Link to={PAGES.DASHBOARD} className={classes.link}>
                Dashboard
              </Link>
            </Group>
          )}

          {!isUserAuthenticated ? (
            <Group className={classes.hiddenMobile}>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button variant="default">Log in</Button>
              </Link>
              <Button>Sign up</Button>
            </Group>
          ) : (
            <Group className={classes.hiddenMobile}>
              <Button onClick={setLogout} variant="default">
                Log out
              </Button>
            </Group>
          )}

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <HeaderAppMobile drawerOpened={drawerOpened} closeDrawer={closeDrawer} />
    </>
  );
}

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));
