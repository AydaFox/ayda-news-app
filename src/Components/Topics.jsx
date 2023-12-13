import { useEffect, useState } from "react";
import { getTopics } from "../utils/axios";
import { Link } from "react-router-dom";

const Topics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((response) => {
      setTopics(response);
    });
  }, []);

  return (
    <div className="dropdown">
      <button className="nav-button">
        Topics <span className="dropdown-arrow">&#10151;</span>
      </button>
      <div className={`dropdown-topics`}>
        {topics.map((topic) => {
          return (
            <Link
              to={`/articles/${topic.slug}`}
              className="link"
              key={topic.slug}
            >
              {`${topic.slug[0].toUpperCase()}${topic.slug
                .slice(1)
                .toLowerCase()}`}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Topics;
