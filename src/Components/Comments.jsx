import { useEffect, useState } from "react";
import { getComments } from "../utils/axios";
import CommentCard from "./CommentCard";
import Loading from "./Loading";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getComments(article_id)
      .then((response) => {
        setComments(response);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Loading />;

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
