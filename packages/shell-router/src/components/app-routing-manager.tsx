import React from "react";
import { Outlet } from "react-router-dom";
import useAppEvent from "../hooks/use-app-event";

interface AppRoutingManagerProps {
  type: string;
}

const AppRoutingManager: React.FC<AppRoutingManagerProps> = ({ type }) => {
  useAppEvent(type);

  return <Outlet />;
};

export default AppRoutingManager;
