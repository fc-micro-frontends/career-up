import styled from "@emotion/styled";

export const ApplyStatusWrapper = styled.div`
  .job--apply-status-top {
    display: flex;
    flex-direction: column;
    background-color: white;

    padding: 16px 12px 16px;
    border-radius: 8px 8px 0 0;
    border-bottom: 1px solid rgb(0 0 0 / 0.1);
    gap: 10px;

    .job--apply-status-top-title {
      font-size: 15px;
      font-weight: bold;
      height: 15px;
    }
  }

  .job--apply-status-bottom {
    display: flex;
    flex-direction: column;
    padding: 16px 12px 16px;
    border-radius: 0 0 8px 8px;
    background-color: white;
    gap: 10px;

    .job--apply-status-bottom-item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      color: rgb(0 0 0/0.6);
      font-size: 14px;

      .job--apply-status-bottom-item-count {
        color: #0a66c2;
        cursor: pointer;
      }
    }
  }
`;
