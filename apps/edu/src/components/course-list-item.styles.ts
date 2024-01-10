import styled from "@emotion/styled";

export const CourseListItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  background-color: white;
  padding: 16px;
  gap: 16px;
  border: 1px solid rgb(0 0 0 / 0.1);

  .edu--course-list-item-thumnail {
    flex: 1;
    width: 308px;
    height: 168px;

    img {
      width: 308px;
      height: 168px;
      border-radius: 8px;
    }
  }

  .edu--course-list-item-info {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .edu--course-list-item-info-title {
      font-size: 19px;
      font-weight: 600;
    }

    .edu--course-list-item-info-description {
      color: rgba(0, 0, 0, 0.6);
      font-size: 15px;
    }
  }

  &:hover {
    border: 1px solid rgb(0 0 0 / 0.6);

    cursor: pointer;
  }
`;
