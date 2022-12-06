import ArticleList from "../components/ArticleList";
import Head from "next/head";

function Home({ articles, placeholderImage }) {
  return (
    <>
      <Head>
        <title>Bazam</title>
        <meta
          property="og:title"
          content="Startseite"
          key="title"
        />
      </Head>
      <ArticleList
        articles={articles}
        placeholderImage={placeholderImage}
        secondHeadline="Alle Artikel in deiner Nähe:"
      />
    </>
  );
}

export default Home;
