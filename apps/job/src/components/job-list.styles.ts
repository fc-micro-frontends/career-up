import styled from "@emotion/styled";

export const JobListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: white;
  padding: 16px;
  gap: 16px;
  border: 1px solid rgb(0 0 0 / 0.1);

  .job--job-list-top {
    display: flex;
    flex-direction: column;
    gap: 6px;

    .job--job-list-top-title {
      font-size: 19px;
      font-weight: 600;
    }

    .job--job-list-top-subtitle {
      color: rgba(0, 0, 0, 0.6);
      font-size: 15px;
    }
  }
`;
