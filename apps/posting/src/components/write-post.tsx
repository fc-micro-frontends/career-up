import "./write-post.scss";

import React, { useRef } from "react";
import { Button } from "@career-up/ui-kit";

interface WritePostProps {
  writePost: (message: string) => Promise<void>;
}

const WritePost: React.FC<WritePostProps> = ({ writePost }) => {
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const onWriteClick = async () => {
    if (messageRef.current) {
      await writePost(
        messageRef.current.value.replace(/(?:\r\n|\r|\n)/g, "<br />")
      );
      messageRef.current.value = "";
    }
  };

  return (
    <div className="posting--write-post">
      <textarea className="posting--write-post-textarea" ref={messageRef} />
      <div className="posting--write-post-actions">
        <Button onClick={onWriteClick}>Post</Button>
      </div>
    </div>
  );
};

export default WritePost;
