import ArticleList from "../components/ArticleList";

function MyArticles({ articles }) {
  console.log(articles);
  const authorArticles = articles.filter(
    (findAuthor) => findAuthor.author === "Eugen"
  );
  console.log(find);
  return <ArticleList articles={authorArticles} />;
}

export default MyArticles;

// {articles.map((article) => {
//   // article.author === "Eugen" && (
//   <li key={article.id}>
//     <Article article={article} />
//   </li>;
//   // );
// })}
