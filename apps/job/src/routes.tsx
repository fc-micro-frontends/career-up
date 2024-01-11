import React from "react";
import { type RouteObject } from "react-router-dom";
import { AppRoutingManager } from "@career-up/shell-router";
import Auth0ClientProvider from "./providers/auth0-client-provider";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Auth0ClientProvider>
        <AppRoutingManager type="app-edu" />
      </Auth0ClientProvider>
    ),
    errorElement: <div>App Job Error</div>,
    children: [
      {
        index: true,
        element: <div>job home</div>,
      },
    ],
  },
];
