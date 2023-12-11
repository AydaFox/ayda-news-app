const ArticleCard = ({ article }) => {
    return (
        <li className="article-card">
            <p className="article-title">{ article.title }</p>
            <img src={ article.article_img_url }></img>
            <p className="article-author">{ article.author }</p>
            <p className="article-topic">{ article.topic }</p>
            <div className="article-votes">
                <img src="./src/assets/arrow-up-black.png"></img>
                <span className="vote-number">{ article.votes }</span>
                <img src="./src/assets/arrow-down-black.png"></img>
            </div>
        </li>
    );
}

export default ArticleCard;