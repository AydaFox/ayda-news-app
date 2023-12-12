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
        <p className="article-topic">{article.topic}</p>
        <p className="article-title">{article.title}</p>
        <img src={article.article_img_url}></img>
        <p className="article-author">Posted by: {article.author}</p>
        <p className="article-time">{dateFormatter(article.created_at)}</p>
      </li>
      <Votes article={article} />
    </section>
  );
};

export default ArticleCard;
