import React from "react";
import MyCourseInfo from "../components/my-course-info";
import { useAtomValue } from "jotai";
import { userAtom } from "../atoms";

const MyCourseInfoContainer: React.FC = () => {
  const user = useAtomValue(userAtom);

  return <MyCourseInfo user={user} />;
};

export default MyCourseInfoContainer;
