import { useNavigate } from "react-router";
import { dateFormatter } from "../utils/dateFormatter";

const ArticleCard = ({ article }) => {
  const navigate = useNavigate();
  const handleArticleClick = () => {
    navigate(`/article/${article.article_id}`);
  };

  return (
    <li className="article-card" onClick={handleArticleClick}>
      <p className="article-topic">{article.topic}</p>
      <p className="article-title">{article.title}</p>
      <img src={article.article_img_url}></img>
      <p className="article-author">Posted by: {article.author}</p>
      <p className="article-time">{dateFormatter(article.created_at)}</p>
      <div className="article-votes">
        <img src="./src/assets/arrow-up-black.png"></img>
        <span className="vote-number">{article.votes}</span>
        <img src="./src/assets/arrow-down-black.png"></img>
      </div>
    </li>
  );
};

export default ArticleCard;
