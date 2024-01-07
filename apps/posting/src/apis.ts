import { type UserType, type PostType } from "./types";

export async function getPosts(token: string): Promise<PostType[]> {
  const res = await fetch("http://localhost:4000/posts?_sort=id&_order=desc", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.json();
}

export async function createPost(
  token: string,
  body: { message: string }
): Promise<void> {
  await fetch("http://localhost:4000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });
}

export async function removePost(token: string, id: number): Promise<void> {
  await fetch(`http://localhost:4000/posts/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function getUser(token: string): Promise<UserType> {
  const res = await fetch("http://localhost:4000/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.json();
}
