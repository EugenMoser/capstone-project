import ArticleList from "../components/ArticleList";
import { useRouter } from "next/router";

function Home({ articles }) {
  return (
    <ArticleList
      articles={articles}
      secondHeadline="Alle Artikel in deiner Nähe:"
    />
  );
}

export default Home;
