import arrowup from "../assets/arrow-up-black.png";
import arrowdown from "../assets/arrow-down-black.png";
import { patchVotes } from "../utils/axios";
import { useState } from "react";

const Votes = ({ article, setArticle }) => {
  const [voteCount, setVoteCount] = useState(article.votes);
  const [err, setErr] = useState(null);

  const clickUpHandler = () => {
    setVoteCount((currVoteCount) => currVoteCount + 1);
    patchVotes(article.article_id, 1).catch((error) => {
      setVoteCount((currVoteCount) => currVoteCount - 1);
      setErr("Something went wrong, please try again.");
    });
  };

  const clickDownHandler = () => {};

  return (
    <div className="votes">
      {err ? <p className="error-message">{err}</p> : null}
      <img src={arrowup} onClick={clickUpHandler}></img>
      <span className="vote-number">{voteCount}</span>
      <img src={arrowdown}></img>
    </div>
  );
};

export default Votes;
