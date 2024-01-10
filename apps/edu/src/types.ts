import { type User } from "@auth0/auth0-spa-js";

export interface UserType extends User {
  view_count: number;
  update_count: number;
  courses: { courseId: number; done: false }[];
}

export interface CourseType {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  contents?: string;
}

export interface CourseContentsType {
  id: number;
  goals: string[];
  summaries: string[];
}
