import React from "react";
import { wrapper, center, left } from "./layout.css";
import MyNetworkContainer from "../containers/my-network-container";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className={wrapper}>
      <div className={left}>
        <MyNetworkContainer />
      </div>
      <div className={center}>{children}</div>
    </div>
  );
};

export default Layout;
