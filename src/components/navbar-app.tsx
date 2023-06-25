import { Navbar, Text } from "@mantine/core";

import { useGetIsUserAuthenticated } from "../store/user";

type NavbarAppProps = {
  isOpen: boolean;
};

export const NavbarApp = ({ isOpen }: NavbarAppProps) => {
  const isUserAuthenticated = useGetIsUserAuthenticated();

  return (
    <>
      {isUserAuthenticated && (
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!isOpen}
          width={{ sm: 200, lg: 300 }}
        >
          <Text>Time Tracker</Text>
        </Navbar>
      )}
    </>
  );
};
