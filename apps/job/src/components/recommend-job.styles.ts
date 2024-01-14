import styled from "@emotion/styled";

export const RecommendJobWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 12px 16px;

  .job--recommend-job-position {
    font-size: 16px;
    font-weight: 600;
    color: rgb(0 0 0 / 0.9);

    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }

  .job--recommend-job-company {
    font-size: 14px;
    color: rgb(0 0 0 / 0.6);
  }

  :hover {
    background-color: rgb(0 0 0 / 0.1);
    cursor: pointer;
  }
`;
