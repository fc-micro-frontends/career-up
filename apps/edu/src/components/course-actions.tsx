import React from "react";
import { CourseActionsWrapper } from "./course-actions.styles";
import { Button } from "@career-up/ui-kit";

const CourseActions: React.FC = () => {
  return (
    <CourseActionsWrapper>
      <Button>Like this Course</Button>
      <Button>Add to My Course</Button>
    </CourseActionsWrapper>
  );
};

export default CourseActions;
