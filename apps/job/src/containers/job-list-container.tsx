import React, { useCallback } from "react";
import JobList from "../components/job-list";
import { useDispatch, useSelector } from "react-redux";
import useAuth0Client from "../hooks/use-auth0-client";
import { type AppDispatch, type RootState } from "../redux/create";
import { done, fail, start } from "../redux/modules/jobs";
import { getJobs } from "../apis";

const JobListContainer: React.FC = () => {
  const auth0Client = useAuth0Client();
  const dispatch = useDispatch<AppDispatch>();
  const jobs = useSelector((state: RootState) => state.jobs.data);

  const fetchJobs = useCallback(async () => {
    try {
      dispatch(start());
      const token = await auth0Client.getTokenSilently();
      const applyStatus = await getJobs(token);
      dispatch(done(applyStatus));
    } catch (error) {
      dispatch(fail(error));
    }
  }, [dispatch, auth0Client]);

  return <JobList jobs={jobs} fetchJobs={fetchJobs} />;
};

export default JobListContainer;
