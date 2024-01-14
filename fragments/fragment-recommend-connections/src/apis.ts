import { type ConnectionType } from "./types";

export async function getConnections(token: string): Promise<ConnectionType[]> {
  const res = await fetch("http://localhost:4000/connections?_limit=3", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.json();
}
