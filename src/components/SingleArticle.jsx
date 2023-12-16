import { useParams } from "react-router";
import { getArticleById } from "../utils/axios";
import { useEffect, useState } from "react";
import { dateFormatter } from "../utils/dateFormatter";
import Comments from "./Comments";
import Votes from "./Votes";
import Loading from "./Loading";
import Error from "./Error";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then((response) => {
        setArticle(response);
        setIsLoading(false);
        setApiError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setApiError(err.response.data.msg);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  } else if (apiError) {
    return <Error msg={apiError} />;
  }

  return (
    <div>
      <article className="single-article">
        <div className="single-article-header">
          <p className="single-article-topic">
            {article.topic
              ? `${article.topic[0].toUpperCase()}${article.topic
                  .slice(1)
                  .toLowerCase()}`
              : null}
          </p>
          <p className="single-article-author">
            Posted by: <span className="username">{article.author}</span>
          </p>
          <p className="single-article-date">
            {dateFormatter(article.created_at)}
          </p>
        </div>
        <h2 className="single-article-title">{article.title}</h2>
        <img src={article.article_img_url} className="single-article-img"></img>
        <p className="single-article-body">{article.body}</p>
        <Votes article={article} />
      </article>
      <Comments article_id={article_id} />
    </div>
  );
};

export default SingleArticle;
