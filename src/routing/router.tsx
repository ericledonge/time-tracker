import {
  createBrowserRouter,
  RouterProvider as RouterProviderRDM,
} from "react-router-dom";

import { Layout } from "./layout.tsx";
import { DashboardPage, LandingPage, LoginPage, TrackingPage } from "../pages";
import { AdminPage } from "../pages/admin";

export const APP_NAME = import.meta.env.PROD
  ? "Time Tracker"
  : "Time Tracker (Dev)";

export enum PAGES {
  "LANDING" = "/",
  "LOGIN" = "login",
  "TRACKING" = "tracking",
  "DASHBOARD" = "dashboard",
  "ADMIN" = "admin",
}

const router = createBrowserRouter([
  {
    path: PAGES.LANDING,
    element: <Layout />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: PAGES.LOGIN,
        element: <LoginPage />,
      },
      {
        path: PAGES.TRACKING,
        element: <TrackingPage />,
      },
      {
        path: PAGES.DASHBOARD,
        element: <DashboardPage />,
      },
      {
        path: PAGES.ADMIN,
        element: <AdminPage />,
      },
    ],
  },
]);

export const RouterProvider = () => <RouterProviderRDM router={router} />;
