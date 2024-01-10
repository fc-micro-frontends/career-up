import styled from "@emotion/styled";

export const ProfileWrapper = styled.div`
  .edu--profile-top {
    display: flex;
    flex-direction: column;
    background-color: white;

    padding: 30px 12px 16px;
    border-radius: 8px 8px 0 0;
    border-bottom: 1px solid rgb(0 0 0 / 0.1);
    gap: 10px;
    justify-content: center;
    align-items: center;

    img {
      width: 50px;
    }

    .edu--profile-name {
      font-size: 16px;
      font-weight: bold;
    }

    .edu--profile-email {
      color: rgb(0 0 0/0.6);
      font-size: 12px;
    }
  }

  .edu--profile-bottom {
    display: flex;
    flex-direction: column;
    padding: 16px 12px 16px;
    border-radius: 0 0 8px 8px;
    background-color: white;
    gap: 10px;

    .edu--profile-bottom-item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      color: rgb(0 0 0/0.6);
      font-size: 14px;

      .edu--profile-bottom-item-count {
        color: #0a66c2;
        cursor: pointer;
      }
    }
  }
`;
