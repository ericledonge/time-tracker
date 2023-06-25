import {
  createBrowserRouter,
  RouterProvider as RouterProviderRDM,
} from "react-router-dom";

import { Layout } from "./layout.tsx";
import { DashboardPage, LandingPage, LoginPage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      // {
      //   path: "signup",
      //   element: <Signup />,
      // },
      // {
      //   path: "logout",
      // },
    ],
  },
]);

export const RouterProvider = () => <RouterProviderRDM router={router} />;
