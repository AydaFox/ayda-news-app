import { useParams } from "react-router";
import { getArticleById } from "../utils/axios";
import { useEffect, useState } from "react";
import { dateFormatter } from "../utils/dateFormatter";
import Comments from "./Comments";
import Votes from "./Votes";
import Loading from "./Loading";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id).then((response) => {
      setArticle(response);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div>
      <article className="single-article">
        <p className="single-article-topic">{article.topic}</p>
        <p className="single-article-author">{article.author}</p>
        <p className="single-article-date">
          {dateFormatter(article.created_at)}
        </p>
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
