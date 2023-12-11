import { useParams } from "react-router";
import { getArticleById } from "../utils/axios";
import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../contexts/LoadingContext";
import { dateFormatter } from "../utils/dateFormatter";

const SingleArticle = () => {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then((data) => {
        setArticle(data);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <article>
      <p>{article.topic}</p>
      <p>{article.author}</p>
      <p>{dateFormatter(article.created_at)}</p>
      <h2>{article.title}</h2>
    </article>
  );
};

export default SingleArticle;
