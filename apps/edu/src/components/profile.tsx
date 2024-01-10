import React from "react";
import { ProfileWrapper } from "./profile.styles";
import { type UserType } from "../types";

interface ProfileProps {
  user: UserType | null;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  if (user === null) {
    return null;
  }

  const { picture, name, email, view_count, update_count } = user;

  return (
    <ProfileWrapper>
      <div className="edu--profile-top">
        <img src={picture} />
        <div className="edu--profile-name">{name}</div>
        <div className="edu--profile-email">{email}</div>
      </div>
      <div className="edu--profile-bottom">
        <div className="edu--profile-bottom-item">
          <div>프로필 조회자</div>
          <div className="edu--profile-bottom-item-count">{view_count}</div>
        </div>
        <div className="edu--profile-bottom-item">
          <div>업데이트 노출</div>
          <div className="edu--profile-bottom-item-count">{update_count}</div>
        </div>
      </div>
    </ProfileWrapper>
  );
};

export default Profile;
