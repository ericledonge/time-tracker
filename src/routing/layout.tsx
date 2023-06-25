import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AppShell } from "@mantine/core";

import { useGetIsUserAuthenticated } from "../store/user";
import { FooterApp, HeaderApp } from "../components";

export const Layout = () => {
  const isUserAuthenticated = useGetIsUserAuthenticated();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserAuthenticated) {
      navigate("/");
    }
  }, [isUserAuthenticated, navigate]);

  return (
    <AppShell header={<HeaderApp />} footer={<FooterApp />}>
      <Outlet />
    </AppShell>
  );
};
