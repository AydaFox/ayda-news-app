import arrowup from "../assets/arrow-up-black.png";
import arrowdown from "../assets/arrow-down-black.png";
import { patchVotes } from "../utils/axios";
import { useState } from "react";

const Votes = ({ article, comment }) => {
  let [path, element, element_id] = [];
  if (article) {
    [path, element, element_id] = ["article", article, "article_id"];
  } else if (comment) {
    [path, element, element_id] = ["comment", comment, "comment_id"];
  }

  const [voteCount, setVoteCount] = useState(element.votes);
  const [err, setErr] = useState(null);

  const clickUpHandler = () => {
    setVoteCount((currVoteCount) => currVoteCount + 1);
    setErr(null);
    patchVotes(path, element[element_id], 1).catch((error) => {
      setVoteCount((currVoteCount) => currVoteCount - 1);
      setErr("Something went wrong, please try again.");
    });
  };

  const clickDownHandler = () => {
    setVoteCount((currVoteCount) => currVoteCount - 1);
    setErr(null);
    patchVotes(path, element[element_id], -1).catch((error) => {
      setVoteCount((currVoteCount) => currVoteCount + 1);
      setErr("Something went wrong, please try again.");
    });
  };

  return (
    <div className="votes">
      <img src={arrowup} onClick={clickUpHandler}></img>
      <span className="vote-number">{voteCount}</span>
      <img src={arrowdown} onClick={clickDownHandler}></img>
      {err ? <p className="error-message">{err}</p> : null}
    </div>
  );
};

export default Votes;
