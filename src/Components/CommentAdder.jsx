import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { postComment } from "../utils/axios";

const CommentAdder = ({ article_id, setComments }) => {
  const { user } = useContext(UserContext);
  const [newComment, setNewComment] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [err, setErr] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPosting(true);
    setErr(null);
    postComment(article_id, user.username, newComment)
      .then((response) => {
        setComments((currComments) => {
          return [response, ...currComments];
        });
      })
      .then(() => {
        setNewComment("");
        setIsPosting(false);
      })
      .catch((error) => {
        setErr("Something went wrong, please try again.");
        setIsPosting(false);
      });
  };

  return (
    <>
      <form className="comment-adder" onSubmit={handleSubmit}>
        <label htmlFor="new-comment-input">
          comment as <span className="comment-user">{user.username}</span>
        </label>
        <textarea
          id="new-comment-input"
          className="new-comment-input"
          placeholder="add a new comment"
          rows="10"
          required
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
        ></textarea>
        <button className="comment-adder-button" disabled={isPosting}>
          comment
        </button>
      </form>
      {err ? <p className="error-message">{err}</p> : null}
    </>
  );
};

export default CommentAdder;
