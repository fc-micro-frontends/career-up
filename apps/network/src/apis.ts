import { type ConnectionType, type MyNetworkType } from "./types";

const SERVER_URL = process.env.REACT_APP_SERVER_URL!;

export async function getMyNetwork(token: string): Promise<MyNetworkType> {
  const res = await fetch(`${SERVER_URL}/my-network`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.json();
}

export async function getConnections(token: string): Promise<ConnectionType[]> {
  const res = await fetch(`${SERVER_URL}/connections`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.json();
}
