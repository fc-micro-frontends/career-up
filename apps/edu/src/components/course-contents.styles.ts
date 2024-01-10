import styled from "@emotion/styled";

export const CourseContentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  .edu--course-contents-goal {
    border-radius: 8px;
    background-color: white;
    padding: 16px;
    border: 1px solid rgb(0 0 0 / 0.1);
    flex: 1;

    h3 {
      color: black;
    }

    p {
      color: rgba(0, 0, 0, 0.6);
      font-size: 15px;
    }
  }

  .edu--course-contents-summary {
    border-radius: 8px;
    background-color: white;
    padding: 16px;
    border: 1px solid rgb(0 0 0 / 0.1);
    flex: 1;

    h3 {
      color: black;
    }

    p {
      color: rgba(0, 0, 0, 0.6);
      font-size: 15px;
    }
  }
`;
