import { type ConnectionType } from "./types";

const SERVER_URL = process.env.REACT_APP_SERVER_URL!;

export async function getConnections(token: string): Promise<ConnectionType[]> {
  const res = await fetch(`${SERVER_URL}/connections?_limit=3`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.json();
}
