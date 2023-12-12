import { useParams } from "react-router";
import { getArticleById } from "../utils/axios";
import { useEffect, useState } from "react";
import { dateFormatter } from "../utils/dateFormatter";
import arrowup from "../assets/arrow-up-black.png";
import arrowdown from "../assets/arrow-down-black.png";
import Comments from "./Comments";
import Loading from "./Loading";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then((response) => {
        setArticle(response);
      })
      .then(() => {
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
        <div className="article-votes">
          <img src={arrowup}></img>
          <span className="vote-number">{article.votes}</span>
          <img src={arrowdown}></img>
        </div>
      </article>
      <Comments article_id={article_id} />
    </div>
  );
};

export default SingleArticle;
