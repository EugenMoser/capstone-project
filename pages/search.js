import { useState } from "react";
import Head from "next/head";
import ArticleList from "../components/ArticleList";

function Search({ articles, placeholderImage }) {
  const [searchText, setSearchText] = useState("");

  const filteredArticles = articles.filter((findArticles) =>
    findArticles.name.toLowerCase().includes(searchText.toLowerCase())
  );
  console.log(filteredArticles);

  function inputHandler(event) {
    const searchValue = event.target.value;
    setSearchText(searchValue.trim());
  }

  function filterArticles() {}
  console.log(searchText);
  return (
    <>
      <Head>
        <title>Artikelbezeichnung:</title>
        <meta
          property="og:title"
          content="Artikel suchen"
          key="title"
        />
      </Head>
      <label htmlFor="search"></label>
      <input
        type="text"
        id="search"
        name="search"
        value={searchText}
        onChange={inputHandler}
        placeholder="z.B. Strampler"
      />

      {searchText.length ? (
        <ArticleList
          articles={filteredArticles}
          placeholderImage={placeholderImage}
          secondHeadline="gefundene Artikel:"
        />
      ) : (
        <h2>keine Artikel gefunden</h2>
      )}
    </>
  );
}
export default Search;
