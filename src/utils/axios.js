import axios from "axios";

const aydaNewsApi = axios.create({
    baseURL: "https://ayda-news-api.onrender.com/api"
});

export const getArticles = () => {
    return aydaNewsApi
        .get("/articles")
        .then(({ data }) => {
            return data.articles;
        });
}