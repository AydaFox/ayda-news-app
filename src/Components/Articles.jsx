import ArticleCard from "./ArticleCard";
import { useEffect, useState, useContext } from "react";
import { getArticles } from "../utils/axios";
import { LoadingContext } from "../contexts/LoadingContext";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  useEffect(() => {
    setIsLoading(true);
    getArticles()
      .then((articles) => {
        setArticles(articles);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className="articles">
      <ul className="articles-list">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </section>
  );
};

export default Articles;
