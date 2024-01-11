import { type ApplyStatusType, type JobType } from "./types";

export async function getJobs(token: string): Promise<JobType[]> {
  const res = await fetch(`http://localhost:4000/jobs`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.json();
}

export async function getApplyStatus(token: string): Promise<ApplyStatusType> {
  const res = await fetch("http://localhost:4000/apply-status", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.json();
}
