import Article from "../Article";

function ArticleList({ articles }) {
  return (
    <>
      {articles.map((article) => {
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
