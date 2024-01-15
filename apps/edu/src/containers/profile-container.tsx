import { useAtomValue } from "jotai";
import React from "react";
import { userAtom } from "../atoms";
import { Profile } from "@career-up/ui-kit";

const ProfileContainer: React.FC = () => {
  const user = useAtomValue(userAtom);

  return <Profile user={user} />;
};

export default ProfileContainer;
