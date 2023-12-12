import { dateFormatter } from "../utils/dateFormatter";
import arrowup from "../assets/arrow-up-black.png";
import arrowdown from "../assets/arrow-down-black.png";

const CommentCard = ({ comment }) => {
  return (
    <li className="comment-card">
      <p>
        <span className="comment-user">{comment.author}</span> {dateFormatter(comment.created_at)}
      </p>
      <p>{comment.body}</p>
      <div className="comment-votes">
        <img src={arrowup}></img>
        <span className="vote-number">{comment.votes}</span>
        <img src={arrowdown}></img>
      </div>
    </li>
  );
};

export default CommentCard;
