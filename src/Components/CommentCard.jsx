import { useContext, useState } from "react";
import { dateFormatter } from "../utils/dateFormatter";
import Votes from "./Votes";
import { UserContext } from "../contexts/UserContext";
import { deleteComment } from "../utils/axios";

const CommentCard = ({ comment }) => {
  const { user } = useContext(UserContext);
  const [deleting, setDeleting] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [err, setErr] = useState(null);

  const handleDelete = () => {
    setDeleting(true);
    setErr(null);
    deleteComment(comment.comment_id)
      .then(() => {
        setIsDeleted(true);
      })
      .catch((err) => {
        setDeleting(false);
        setErr("Something went wrong, please try again.");
      });
  };

  if (isDeleted) {
    return <h3 className="delete-message">Comment deleted</h3>;
  }

  return (
    <li className="comment-card">
      <p>
        <span className="comment-user">{comment.author}</span>{" "}
        {dateFormatter(comment.created_at)}
      </p>
      <p>{comment.body}</p>
      <Votes comment={comment} />
      {comment.author === user.username ? (
        <button
          className="delete-comment-button"
          onClick={handleDelete}
          disabled={deleting}
        >
          delete
        </button>
      ) : null}
      {err ? <p className="error-message">{err}</p> : null}
    </li>
  );
};

export default CommentCard;
