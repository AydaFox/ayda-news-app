import axios from "axios";

const aydaNewsApi = axios.create({
  baseURL: "https://ayda-news-api.onrender.com/api",
});

export const getArticles = () => {
  return aydaNewsApi.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const getArticleById = (article_id) => {
  return aydaNewsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getComments = (article_id) => {
  return aydaNewsApi
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    });
};

export const patchVotes = (path, id, num) => {
  return aydaNewsApi
    .patch(`${path}s/${id}`, { inc_votes: num })
    .then(({ data }) => {
      return data[path];
    });
};
