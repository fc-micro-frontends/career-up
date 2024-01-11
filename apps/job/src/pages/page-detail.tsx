import React from "react";
import { useParams } from "react-router-dom";

const PageDetail: React.FC = () => {
  const { id } = useParams();
  return <div>id: {id}</div>;
};

export default PageDetail;
