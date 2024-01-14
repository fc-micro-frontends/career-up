import React, { useCallback, useState } from "react";
import { ConnectionType } from "../types";
import { useAuth0Client } from "@career-up/shell-router";
import { getConnections } from "../apis";
import RecommendConnections from "../components/recommend-connections";

const RecommendConnectionsContainer: React.FC = () => {
  const auth0Client = useAuth0Client();
  const [connections, setConnections] = useState<ConnectionType[]>([]);

  const fetchConnections = useCallback(async () => {
    (async () => {
      try {
        const token = await auth0Client.getTokenSilently();
        const connections = await getConnections(token);
        setConnections(connections);
      } catch (error) {
        alert(error);
      }
    })();
  }, [auth0Client]);

  return (
    <RecommendConnections
      connections={connections}
      fetchConnections={fetchConnections}
    />
  );
};

export default RecommendConnectionsContainer;
