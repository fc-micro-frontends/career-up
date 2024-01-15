import "./recommend-connections.css";

import React from "react";
import { type ConnectionType } from "../types";
import Connection from "./connection";

interface RecommendConnectionsProps {
  connections: ConnectionType[];
}

const RecommendConnections: React.FC<RecommendConnectionsProps> = ({
  connections,
}) => {
  return (
    <div className="fragment-recommend-connections--recommend-connections">
      <div className="fragment-recommend-connections--recommend-connections-top">
        <span className="fragment-recommend-connections--recommend-connections-top-title">
          일촌 추천
        </span>
      </div>
      <div className="fragment-recommend-connections--recommend-connections-bottom">
        {connections.map((connection, index) => (
          <Connection key={index} {...connection} />
        ))}
      </div>
    </div>
  );
};

export default RecommendConnections;
