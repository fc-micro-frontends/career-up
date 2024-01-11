import { type User } from "@auth0/auth0-spa-js";

export interface UserType extends User {}

export interface MyNetworkType {
  connectionCount: number;
  contactCount: number;
  eventCount: number;
  pageCount: number;

  user: UserType;
}

export interface ConnectionType {
  name: string;
  picture: string | null;
  role: string;
  networkCount: number;
}
