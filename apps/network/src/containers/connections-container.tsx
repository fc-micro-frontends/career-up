import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { connectionsAtom } from "../atoms";
import Connections from "../components/connections";
import { getConnections } from "../apis";
import { useAuth0Client } from "@career-up/shell-router";

const ConnectionsContainer: React.FC = () => {
  const auth0Client = useAuth0Client();
  const [connections, setConnections] = useRecoilState(connectionsAtom);

  const fetchConnections = useCallback(async () => {
    try {
      const token = await auth0Client.getTokenSilently();
      const connections = await getConnections(token);
      setConnections(connections);
    } catch (error) {
      alert(error);
    }
  }, [auth0Client, setConnections]);

  return (
    <Connections
      connections={connections}
      fetchConnections={fetchConnections}
    />
  );
};

export default ConnectionsContainer;
