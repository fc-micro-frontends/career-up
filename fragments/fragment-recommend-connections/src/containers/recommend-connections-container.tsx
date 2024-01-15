import React from "react";
import { useAuth0Client } from "@career-up/shell-router";
import RecommendConnections from "../components/recommend-connections";
import useSWR from "swr";

const SERVER_URL = process.env.REACT_APP_SERVER_URL!;

const RecommendConnectionsContainer: React.FC = () => {
  const auth0Client = useAuth0Client();

  const { data } = useSWR("/connections?_limit=3", async (url) => {
    const token = await auth0Client.getTokenSilently();

    const res = await fetch(`${SERVER_URL}${url}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return await res.json();
  });

  return <RecommendConnections connections={data ?? []} />;
};

export default RecommendConnectionsContainer;
