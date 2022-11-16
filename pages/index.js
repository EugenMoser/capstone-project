import ArticleList from "../components/ArticleList";
// import useSWR from "swr";
import articlesDb from "../helpers/db.json";

function Home() {
  // function fetcher(url) {
  //   return fetch(url).then((res) => res.json());
  // }
  // const { data, error } = useSWR("../helpers/db.json", fetcher);
  // console.log(data);
  console.log(articlesDb);

  return (
    <>
      <h2>Alle Artikel in deiner Nähe:</h2>
      <ArticleList articlesDb={articlesDb} />
    </>
  );
}

export default Home;
