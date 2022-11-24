import ArticleList from "../components/ArticleList";
import { useRouter } from "next/router";

function Home({ articles }) {
  const { pathname } = useRouter();

  return (
    <>
      {pathname === "/" && <ArticleList articles={articles} />}
      {pathname === "/myArticles" && <ArticleList articles={articles} />}
    </>
  );
}

export default Home;
