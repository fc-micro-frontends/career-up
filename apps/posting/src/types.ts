import { type User } from "@auth0/auth0-spa-js";

export interface PostType {
  id: number;
  message: string;
  createdAt: string;
  author: {
    email: string;
    name: string;
    picture: string;
  };
}

export interface UserType extends User {
  view_count: number;
  update_count: number;
  courses: { courseId: number; done: false }[];
}
