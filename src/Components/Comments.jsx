import { useEffect, useState } from "react";
import { getComments } from "../utils/axios";
import CommentCard from "./CommentCard";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(article_id).then((response) => {
      setComments(response);
    });
  }, []);

  return (
    <div className="comments">
      <h3>Comments</h3>
      <ul className="comments-list">
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </ul>
    </div>
  );
};

export default Comments;
