import React, { useEffect } from "react";
import { type ConnectionType } from "../types";
import * as css from "./connections.css";
import Connection from "./connection";

interface ConnectionsProps {
  connections: ConnectionType[];
  fetchConnections: () => Promise<void>;
}

const Connections: React.FC<ConnectionsProps> = ({
  connections,
  fetchConnections,
}) => {
  useEffect(() => {
    fetchConnections();
  }, [fetchConnections]);

  return (
    <div className={css.wrapper}>
      <div>서울 인천 지역에 사는 사람</div>
      <div className={css.connections}>
        {connections.map((connection) => (
          <Connection {...connection} />
        ))}
      </div>
    </div>
  );
};

export default Connections;
