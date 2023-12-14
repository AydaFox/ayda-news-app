import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";
import { getArticles } from "../utils/axios";
import Loading from "./Loading";
import { useParams, useSearchParams } from "react-router-dom";
import Error from "./Error";
import SortBar from "./SortBar";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const { topic } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sort_by");
  const order = searchParams.get("order");

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic, sortBy, order)
      .then((response) => {
        setArticles(response);
        setIsLoading(false);
        setApiError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setApiError(err.response.data.msg);
      });
  }, [topic, searchParams]);

  if (apiError) {
    return <Error msg={apiError} />;
  } else if (!articles.length && !isLoading) {
    return <h2>No articles have been posted</h2>;
  }

  return (
    <section className="articles">
      <SortBar searchParams={searchParams} setSearchParams={setSearchParams} />
      {topic ? (
        <h2 className="topic-title">{`${topic[0].toUpperCase()}${topic
          .slice(1)
          .toLowerCase()}`}</h2>
      ) : null}
      {isLoading ? (
        <Loading />
      ) : (
        <ul className="articles-list">
          {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      )}
    </section>
  );
};

export default Articles;
