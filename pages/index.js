import ArticleList from "../components/ArticleList";

function Home({ articles }) {
  return (
    <>
      <ArticleList articles={articles} />
    </>
  );
}

export default Home;
