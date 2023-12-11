import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";
import { getArticles } from "../utils/axios";

const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticles().then((articles) => {
            setArticles(articles);
        });
    }, []);

    return (
        <section className="articles">
            <ul className="articles-list">
                {
                    articles.map((article) => {
                        return (<ArticleCard key={ article.article_id } article={ article }/>);
                    })
                }
            </ul>
        </section>
    );
}

export default Articles;