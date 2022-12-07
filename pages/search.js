import Head from "next/head";
import Searchbar from "../components/Searchbar";
import ArticleList from "../components/ArticleList";
import { useState } from "react";

function Search({ articles, placeholderImage }) {
  const [searchedText, setSearchedText] = useState("");

  const filteredArticles = articles.filter((findArticles) =>
    findArticles.name.toLowerCase().includes(searchedText.toLowerCase())
  );

  function inputHandler(event) {
    const searchValue = event.target.value;
    setSearchedText(searchValue.trim());
  }
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
      <Searchbar
        articles={articles}
        inputHandler={inputHandler}
      />

      {!filteredArticles.length ? (
        <h2>keine Artikel gefunden</h2>
      ) : searchedText.length ? (
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
