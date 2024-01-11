import styled from "@emotion/styled";

export const JobListItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px;
  gap: 16px;
  border-top: 1px solid rgb(0 0 0 / 0.1);
  cursor: pointer;

  .job--job-list-item-left {
  }

  .job--job-list-item-right {
    display: flex;
    flex-direction: column;
    gap: 6px;

    .job--job-list-item-right-position {
      font-size: 18px;
      font-weight: 600;
      color: #0a66c2;
    }

    .job--job-list-item-right-location {
      color: rgba(0, 0, 0, 0.6);
      font-size: 15px;
    }
  }

  &:hover {
    .job--job-list-item-right-position {
      text-decoration: underline;
    }
  }
`;
