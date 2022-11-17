import articlesDb from "./db.json";

function getAllArticles() {
  return articlesDb;
}

function getArticlesById(id) {
  console.log(id);
  return articlesDb.find((article) => {
    return article.id === id;
  });
}
export { getAllArticles, getArticlesById };
