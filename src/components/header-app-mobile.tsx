import {
  Button,
  createStyles,
  Divider,
  Drawer,
  Group,
  rem,
  ScrollArea,
} from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";

import { APP_NAME, PAGES } from "../routing";
import { useGetIsUserAuthenticated, useSetLogout } from "../store/user";

type HeaderAppMobileProps = {
  drawerOpened: boolean;
  closeDrawer: () => void;
};

export const HeaderAppMobile = ({
  drawerOpened,
  closeDrawer,
}: HeaderAppMobileProps) => {
  const { classes, theme } = useStyles();

  const navigate = useNavigate();

  const isUserAuthenticated = useGetIsUserAuthenticated();
  const setLogout = useSetLogout();

  const handleLoginClick = () => {
    navigate(PAGES.LOGIN);
    closeDrawer();
  };

  const handleLogoutClick = () => {
    setLogout();
    closeDrawer();
  };

  return (
    <Drawer
      opened={drawerOpened}
      onClose={closeDrawer}
      size="100%"
      padding="md"
      title={APP_NAME}
      className={classes.hiddenDesktop}
      zIndex={1000000}
    >
      <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
        {isUserAuthenticated && (
          <>
            <Divider
              my="sm"
              color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
            />
            <Link
              to={PAGES.TRACKING}
              onClick={closeDrawer}
              className={classes.link}
            >
              Tracking
            </Link>
            <Link
              to={PAGES.DASHBOARD}
              onClick={closeDrawer}
              className={classes.link}
            >
              Dashboard
            </Link>
            <Divider
              my="sm"
              color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
            />
          </>
        )}

        {!isUserAuthenticated ? (
          <Group position="center" grow pb="xl" px="md">
            <Button onClick={handleLoginClick} variant="default">
              Log in
            </Button>
            <Button>Sign up</Button>
          </Group>
        ) : (
          <Group position="center" grow pb="xl" px="md">
            <Button onClick={handleLogoutClick} variant="default">
              Log out
            </Button>
          </Group>
        )}
      </ScrollArea>
    </Drawer>
  );
};

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: rem(42),
    width: "100%",
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

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));
