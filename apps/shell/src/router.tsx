import React, { Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/layout";
import { appEduBasename, appPostingBasename } from "./constants/prefix";
import { Auth0ProviderWithNavigator } from "./components/auth0-provider-with-navigator";

const AppPostingLazy = React.lazy(() => import("./components/app-posting"));
const AppEduLazy = React.lazy(() => import("./components/app-edu"));

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
        element: (
          <Suspense fallback="Loading Posting...">
            <AppPostingLazy />
          </Suspense>
        ),
      },
      {
        path: `${appEduBasename}/*`,
        element: (
          <Suspense fallback="Loading Edu...">
            <AppEduLazy />
          </Suspense>
        ),
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={browserRouter} />;
}
