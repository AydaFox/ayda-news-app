import { useNavigate } from "react-router";
import { dateFormatter } from "../utils/dateFormatter";
import Votes from "./Votes";

const ArticleCard = ({ article }) => {
  const navigate = useNavigate();
  const handleArticleClick = () => {
    navigate(`/article/${article.article_id}`);
  };

  return (
    <section className="article-card">
      <li className="article-card-link" onClick={handleArticleClick}>
        <p className="article-topic">{`${article.topic[0].toUpperCase()}${article.topic
          .slice(1)
          .toLowerCase()}`}</p>
        <h2 className="article-title">{article.title}</h2>
        <img src={article.article_img_url}></img>
        <p className="article-author">Posted by: {article.author}</p>
        <p className="article-time">{dateFormatter(article.created_at)}</p>
      </li>
        <Votes article={article} />
    </section>
  );
};

export default ArticleCard;
