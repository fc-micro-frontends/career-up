import "./post.scss";

import React from "react";
import { Button } from "@career-up/ui-kit";

interface PostProps {
  id: number;
  author: {
    picture: string;
    name: string;
    email: string;
  };
  message: string;
  deletePostById: (id: number) => void;
}

const Post: React.FC<PostProps> = ({ id, author, message, deletePostById }) => {
  const onDeleteClick = () => {
    deletePostById(id);
  };

  return (
    <div className="posting--post">
      <div className="posting--post-profile">
        <img src={author.picture} />
        <div className="posting--post-profile-text">
          <div className="posting--post-profile-name">{author.name}</div>
          <div className="posting--post-profile-email">{author.email}</div>
        </div>
      </div>
      <div
        className="posting--post-message"
        dangerouslySetInnerHTML={{ __html: message }}
      />
      <div className="posting--post-actions">
        <Button onClick={onDeleteClick}>Delete</Button>
      </div>
    </div>
  );
};

export default Post;
