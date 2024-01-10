import React from "react";
import { CourseDetailItemWrapper } from "./course-detail-item.styles";

interface CourseDetailItemProps {
  thumbnail: string;
  title: string;
  description: string;
}

const CourseDetailItem: React.FC<CourseDetailItemProps> = ({
  title,
  thumbnail,
  description,
}) => {
  return (
    <CourseDetailItemWrapper>
      <div className="edu--course-detail-item-thumnail">
        <img src={thumbnail} />
      </div>
      <div className="edu--course-detail-item-info">
        <div className="edu--course-detail-item-info-title">{title}</div>
        <div
          className="edu--course-detail-item-info-description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </CourseDetailItemWrapper>
  );
};

export default CourseDetailItem;
