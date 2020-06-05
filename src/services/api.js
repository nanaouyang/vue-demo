import http from "../plugins/axios";
export const list = () => {
  return http({
    method: "get",
    url: "http://api.jello.annyyy.com/article/listArticles",
  });
};
