import { dateFormatter } from "../utils/dateFormatter";
import Votes from "./Votes";

const CommentCard = ({ comment }) => {
  return (
    <li className="comment-card">
      <p>
        <span className="comment-user">{comment.author}</span>{" "}
        {dateFormatter(comment.created_at)}
      </p>
      <p>{comment.body}</p>
      <Votes comment={comment} />
    </li>
  );
};

export default CommentCard;
