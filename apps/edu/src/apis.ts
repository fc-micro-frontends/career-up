import {
  type CourseContentsType,
  type CourseType,
  type UserType,
} from "./types";

const SERVER_URL = process.env.REACT_APP_SERVER_URL!;

export async function getCourses(token: string): Promise<CourseType[]> {
  const res = await fetch(`${SERVER_URL}/courses?_sort=id&_order=desc`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.json();
}

export async function getCourseContents(
  token: string,
  id: number
): Promise<CourseContentsType> {
  const res = await fetch(`${SERVER_URL}/course-contents/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.json();
}

export async function getUser(token: string): Promise<UserType> {
  const res = await fetch(`${SERVER_URL}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.json();
}
