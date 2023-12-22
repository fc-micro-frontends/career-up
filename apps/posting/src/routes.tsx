import React from "react";
import { type RouteObject } from "react-router-dom";
import { AppRoutingManager } from "@career-up/shell-router";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppRoutingManager type="app-posting" />,
    errorElement: <div>App Posting Error</div>,
    children: [
      {
        index: true,
        element: <div>App Posting Root</div>,
      },
      {
        path: "1",
        element: <div>App Posting Page 1</div>,
      },
    ],
  },
];
