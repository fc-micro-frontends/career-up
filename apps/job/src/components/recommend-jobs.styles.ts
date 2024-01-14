import styled from "@emotion/styled";

export const RecommendJobsWrapper = styled.div`
  .job--recommend-jobs-top {
    display: flex;
    flex-direction: column;
    background-color: white;

    padding: 16px 12px 16px;
    border-radius: 8px 8px 0 0;
    border-bottom: 1px solid rgb(0 0 0 / 0.1);
    gap: 10px;
  }

  .job--recommend-jobs-top-title {
    font-size: 15px;
    font-weight: bold;
    height: 15px;
  }

  .job--recommend-jobs-bottom {
    display: flex;
    flex-direction: column;
    border-radius: 0 0 8px 8px;
    background-color: white;
  }
`;
