import { useEffect, useState } from "react";
import { getTopics } from "../utils/axios";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [dropdown, setDropdown] = useState(null);

  useEffect(() => {
    getTopics().then((response) => {
      setTopics(response);
    });
  }, []);

  const toggleDropdown = () => {
    setDropdown((currDropdown) => {
      return currDropdown ? null : "visible";
    });
  };

  return (
    <>
      <div className="nav-button" onClick={toggleDropdown}>
        Topics
      </div>
      <ul className={`topic-dropdown ${dropdown}`}>
        {topics.map((topic) => {
          return <li key={topic.slug}>{topic.slug}</li>;
        })}
      </ul>
    </>
  );
};

export default Topics;
