import ArticleList from "../components/ArticleList";
import Head from "next/head";

function Home({ articles, placeholderImage, toggleBookmark }) {
  return (
    <>
      <Head>
        <title>Bazam</title>
        <meta
          property="og:title"
          content="Startseite"
          key="title"
        />
        <link
          rel="shortcut icon"
          href="/favicon.png"
        />
      </Head>
      <ArticleList
        articles={articles}
        placeholderImage={placeholderImage}
        secondHeadline="Alle Artikel in deiner Nähe:"
        toggleBookmark={toggleBookmark}
      />
    </>
  );
}

export default Home;
