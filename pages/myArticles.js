import ArticleList from "../components/ArticleList";

function MyArticles({ articles }) {
  const authorArticles = articles.filter(
    (findAuthor) => findAuthor.author === "Eugen"
  );

  return (
    <ArticleList
      articles={authorArticles}
      secondHeadline="Das sind deine Artikel:"
    />
  );
}

export default MyArticles;
