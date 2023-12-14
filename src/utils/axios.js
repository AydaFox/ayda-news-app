import axios from "axios";

const aydaNewsApi = axios.create({
  baseURL: "https://ayda-news-api.onrender.com/api",
});

export const getArticles = (topic, sortBy, order) => {
  return aydaNewsApi
    .get("/articles", {
      params: {
        topic: topic,
        sort_by: sortBy,
        order: order,
      },
    })
    .then(({ data }) => {
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

export const postComment = (article_id, username, body) => {
  return aydaNewsApi
    .post(`/articles/${article_id}/comments`, {
      username: username,
      body: body,
    })
    .then(({ data }) => {
      return data.comment;
    });
};

export const deleteComment = (comment_id) => {
  return aydaNewsApi.delete(`/comments/${comment_id}`);
};

export const getTopics = () => {
  return aydaNewsApi.get("/topics").then(({ data }) => {
    return data.topics;
  });
};
