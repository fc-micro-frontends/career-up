import { type ConnectionType, type MyNetworkType } from "./types";

export async function getMyNetwork(token: string): Promise<MyNetworkType> {
  const res = await fetch("http://localhost:4000/my-network", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.json();
}

export async function getConnections(token: string): Promise<ConnectionType[]> {
  const res = await fetch("http://localhost:4000/connections", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.json();
}
