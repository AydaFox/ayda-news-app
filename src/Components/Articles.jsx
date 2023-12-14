import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";
import { getArticles } from "../utils/axios";
import Loading from "./Loading";
import { useParams } from "react-router-dom";
import Error from "./Error";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic)
      .then((response) => {
        setArticles(response);
        setIsLoading(false);
        setApiError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setApiError(err.response.data.msg);
      });
  }, [topic]);

  if (isLoading) {
    return <Loading />;
  } else if (apiError) {
    return <Error msg={apiError} />;
  } else if (!articles.length) {
    return <h2>No articles have been posted</h2>;
  }

  return (
    <section className="articles">
      {topic ? (
        <h2 className="topic-title">{`${topic[0].toUpperCase()}${topic
          .slice(1)
          .toLowerCase()}`}</h2>
      ) : null}
      <ul className="articles-list">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </section>
  );
};

export default Articles;
