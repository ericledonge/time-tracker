import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AppShell } from "@mantine/core";

import { useGetIsUserAuthenticated } from "../store/user";
import { FooterApp, HeaderApp, NavbarApp } from "../components";

export const Layout = () => {
  const isUserAuthenticated = useGetIsUserAuthenticated();
  const navigate = useNavigate();

  const [isOpen] = useState(false);

  useEffect(() => {
    if (!isUserAuthenticated) {
      navigate("/");
    }
  }, [isUserAuthenticated, navigate]);

  return (
    <AppShell
      // navbarOffsetBreakpoint="sm"
      navbar={<NavbarApp isOpen={isOpen} />}
      footer={<FooterApp />}
      header={<HeaderApp />}
    >
      <Outlet />
    </AppShell>
  );
};
