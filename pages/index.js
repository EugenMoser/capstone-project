import ArticleList from "../components/ArticleList";

function Home({ articles }) {
  return (
    <ArticleList
      articles={articles}
      secondHeadline="Alle Artikel in deiner Nähe:"
    />
  );
}

export default Home;
