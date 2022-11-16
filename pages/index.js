import ArticleList from "../components/ArticleList";
import styled from "styled-components";
import useSWR from "swr";
import { fetcher } from "../helpers/api";
//import articlesDb from "../helpers/db.json";

function Home() {
  const { data: articles, error } = useSWR("/api/articles", fetcher);
  console.log(articles);

  if (!articles) {
    return <h4>loading...</h4>;
  }
  return (
    <>
      <h2>Alle Artikel in deiner Nähe:</h2>
      <UL>
        <ArticleList articles={articles} />
      </UL>
    </>
  );
}

export default Home;

const UL = styled.ul`
  padding: 0;
`;
