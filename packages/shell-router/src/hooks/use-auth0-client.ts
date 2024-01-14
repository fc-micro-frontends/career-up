import { useContext } from "react";
import { Auth0ClientContext } from "../providers/auth0-client-provider";

export default function useAuth0Client() {
  const auth0Client = useContext(Auth0ClientContext);

  if (auth0Client === null) {
    throw new Error("useAuth0Client must be used within Auth0ClientProvider");
  }

  return auth0Client;
}
