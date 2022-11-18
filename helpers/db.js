import articlesDb from "./db.json";

function getAllArticles() {
  return articlesDb;
}

function getArticlesById(id) {
  return articlesDb.find((article) => {
    return article.id === id;
  });
}
export { getAllArticles, getArticlesById };
