import Article from "../Article";

function ArticleList({ articlesDb }) {
  return (
    <>
      {articlesDb.map((article) => {
        return (
          <Article
            key={article.id}
            article={article}
          />
        );
      })}
    </>
  );
}

export default ArticleList;
