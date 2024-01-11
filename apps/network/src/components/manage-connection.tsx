import React from "react";
import * as css from "./manage-connection.css";
import { Button } from "@career-up/ui-kit";

const ManageConnection: React.FC = () => {
  return (
    <div className={css.wrapper}>
      <div>대기 중인 1촌 신청 없음</div>
      <div>
        <Button>관리</Button>
      </div>
    </div>
  );
};

export default ManageConnection;
