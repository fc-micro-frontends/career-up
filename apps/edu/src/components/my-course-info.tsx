import React from "react";
import { MyCourseInfoWrapper } from "./my-course-info.styles";
import { type UserType } from "../types";

interface MyCourseInfoProps {
  user: UserType | null;
}

const MyCourseInfo: React.FC<MyCourseInfoProps> = ({ user }) => {
  if (user === null) {
    return null;
  }

  const { courses } = user;

  return (
    <MyCourseInfoWrapper>
      <div className="edu--my-course-info-top">
        <span className="edu--my-course-info-top-title">나의 학습 현황</span>
      </div>
      <div className="edu--my-course-info-bottom">
        <div className="edu--my-course-info-bottom-item">
          <div>전체 수강 강좌</div>
          <div className="edu--my-course-info-bottom-item-count">
            {courses.length}
          </div>
        </div>
        <div className="edu--my-course-info-bottom-item">
          <div>수강 중인 강좌</div>
          <div className="edu--my-course-info-bottom-item-count">
            {courses.filter((course) => !course.done).length}
          </div>
        </div>
        <div className="edu--my-course-info-bottom-item">
          <div>수강 완료한 강좌</div>
          <div className="edu--my-course-info-bottom-item-count">
            {courses.filter((course) => course.done).length}
          </div>
        </div>
      </div>
    </MyCourseInfoWrapper>
  );
};

export default MyCourseInfo;
