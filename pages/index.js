import ArticleList from "../components/ArticleList";
import styled from "styled-components";
import useSWR from "swr";
import { fetcher } from "../helpers/api";

function Home() {
  const { data: articles, error } = useSWR("/api/articles", fetcher);

  if (!articles) {
    return <h4>loading...</h4>;
  }
  return (
    <>
      <ArticleList articles={articles} />
    </>
  );
}

export default Home;
