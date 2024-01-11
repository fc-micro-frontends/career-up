import React from "react";
import ManageConnection from "../components/manage-connection";
import ConnectionsContainer from "../containers/connections-container";

const PageHome: React.FC = () => {
  return (
    <>
      <ManageConnection />
      <ConnectionsContainer />
    </>
  );
};

export default PageHome;
