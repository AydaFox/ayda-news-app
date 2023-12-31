import { useEffect, useState } from "react";
import { getComments } from "../utils/axios";
import CommentCard from "./CommentCard";
import Loading from "./Loading";
import CommentAdder from "./CommentAdder";

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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="comments">
      <h3>Comments</h3>
      <CommentAdder article_id={article_id} setComments={setComments} />
      {!comments.length ? <h2>No comments</h2> : null}
      <ul className="comments-list">
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </ul>
    </div>
  );
};

export default Comments;
