import styled from "@emotion/styled";

export const MyCourseInfoWrapper = styled.div`
  .edu--my-course-info-top {
    display: flex;
    flex-direction: column;
    background-color: white;

    padding: 16px 12px 16px;
    border-radius: 8px 8px 0 0;
    border-bottom: 1px solid rgb(0 0 0 / 0.1);
    gap: 10px;

    .edu--my-course-info-top-title {
      font-size: 15px;
      font-weight: bold;
      height: 15px;
    }
  }

  .edu--my-course-info-bottom {
    display: flex;
    flex-direction: column;
    padding: 16px 12px 16px;
    border-radius: 0 0 8px 8px;
    background-color: white;
    gap: 10px;

    .edu--my-course-info-bottom-item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      color: rgb(0 0 0/0.6);
      font-size: 14px;

      .edu--my-course-info-bottom-item-count {
        color: #0a66c2;
        cursor: pointer;
      }
    }
  }
`;
