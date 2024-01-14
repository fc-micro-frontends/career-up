import React from "react";
import { type RouteObject } from "react-router-dom";
import {
  AppRoutingManager,
  Auth0ClientProvider,
} from "@career-up/shell-router";
import PageHome from "./pages/page-home";

const domain = process.env.REACT_APP_AUTH0_DOMAIN!;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID!;
const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL!;

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Auth0ClientProvider options={{ domain, clientId, redirectUri }}>
        <AppRoutingManager type="app-posting" />
      </Auth0ClientProvider>
    ),
    errorElement: <div>App Posting Error</div>,
    children: [
      {
        index: true,
        element: <PageHome />,
      },
    ],
  },
];
