import ArticleList from "../components/ArticleList";
import useSWR from "swr";
import { fetcher } from "../helpers/api";

function Home() {
  const { data: articles, error } = useSWR("/api/articles", fetcher);

  if (!articles) {
    return <h4>Artikel Details werden geladen...</h4>;
  }

  if (error) return <h4>Error</h4>;

  return (
    <>
      <ArticleList articles={articles} />
    </>
  );
}

export default Home;
