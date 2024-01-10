import {
  type CourseContentsType,
  type CourseType,
  type UserType,
} from "./types";

export async function getCourses(token: string): Promise<CourseType[]> {
  const res = await fetch(
    "http://localhost:4000/courses?_sort=id&_order=desc",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return await res.json();
}

export async function getCourseContents(
  token: string,
  id: number
): Promise<CourseContentsType> {
  const res = await fetch(`http://localhost:4000/course-contents/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.json();
}

export async function getUser(token: string): Promise<UserType> {
  const res = await fetch("http://localhost:4000/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.json();
}
