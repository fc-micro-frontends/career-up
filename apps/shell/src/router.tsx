import React, { Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/layout";
import {
  appEduBasename,
  appJobBasename,
  appNetworkBasename,
  appPostingBasename,
} from "./constants/prefix";
import { Auth0ProviderWithNavigator } from "./components/auth0-provider-with-navigator";
import AppPosting from "./components/app-posting";
import AppEdu from "./components/app-edu";
import AppNetwork from "./components/app-network";
import AppJob from "./components/app-job";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Auth0ProviderWithNavigator>
        <Layout />
      </Auth0ProviderWithNavigator>
    ),
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        index: true,
        element: <Navigate to={`${appPostingBasename}`} />,
      },
      {
        path: `${appPostingBasename}/*`,
        element: <AppPosting />,
      },
      {
        path: `${appEduBasename}/*`,
        element: <AppEdu />,
      },
      {
        path: `${appNetworkBasename}/*`,
        element: <AppNetwork />,
      },
      {
        path: `${appJobBasename}/*`,
        element: <AppJob />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={browserRouter} />;
}
