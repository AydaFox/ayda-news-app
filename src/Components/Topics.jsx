import { useEffect, useState } from "react";
import { getTopics } from "../utils/axios";

const Topics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((response) => {
      setTopics(response);
    })
  }, []);

  console.log(topics);

  return (
    <>
      <div>Topics</div>
      <ul className="topic-dropdown">
        {
          topics.map((topic) => {
            return <li key={topic.slug}>{topic.slug}</li>
          })
        }
      </ul>
    </>
  );
};

export default Topics;
