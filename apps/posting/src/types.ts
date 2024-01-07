import { type User } from "@auth0/auth0-spa-js";

export interface PostType {
  id: string;
  message: string;
  createdAt: string;
  author: {
    name: string;
    email: string;
    picture: string;
  };
}

export interface UserType extends User {
  view_count: number;
  update_count: number;
}
