import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { postComment } from "../utils/axios";

const CommentAdder = ({ article_id, setComments }) => {
  const { user } = useContext(UserContext);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(article_id, user.username, newComment)
      .then((response) => {
        setComments((currComments) => {
          return [response, ...currComments];
        });
      })
      .then(() => {
        setNewComment("");
      });
  };

  return (
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
      <button className="comment-adder-button">comment</button>
    </form>
  );
};

export default CommentAdder;
