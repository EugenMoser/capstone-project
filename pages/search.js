import Head from "next/head";
import Searchbar from "../components/Searchbar";
import ArticleList from "../components/ArticleList";

function Search({
  articles,
  placeholderImage,
  filteredArticles,
  inputHandler,
  searchedText,
  resetValue,
  toggleBookmark,
}) {
  return (
    <>
      <Head>
        <title>Artikelbezeichnung:</title>
        <meta
          property="og:title"
          content="Artikel suchen"
          key="title"
        />
        <link
          rel="shortcut icon"
          href="/favicon.png"
        />
      </Head>
      <Searchbar
        articles={articles}
        inputHandler={inputHandler}
        resetValue={resetValue}
      />
      {searchedText ? (
        <ArticleList
          articles={filteredArticles}
          placeholderImage={placeholderImage}
          secondHeadline="gefundene Artikel:"
          toggleBookmark={toggleBookmark}
        />
      ) : (
        <h2>keine Artikel gefunden</h2>
      )}
    </>
  );
}
export default Search;
