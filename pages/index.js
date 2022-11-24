import ArticleList from "../components/ArticleList";
import { useRouter } from "next/router";

function Home({ articles }) {
  //const { pathname } = useRouter();

  return (
    <>
      <ArticleList
        articles={articles}
        secondHeadline="Alle Artikel in deiner Nähe:"
      />
      {/* {pathname === "/" && <ArticleList articles={articles} secondHeadline="Alle Artikel in deiner Nähe:"/>}
      {pathname === "/myArticles" && <ArticleList articles={articles} />} */}
    </>
  );
}

export default Home;
