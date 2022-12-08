import Head from "next/head";
import Article from "../components/Article";

function Bookmark({ placeholderImage, articles, toggleBookmark }) {
  // console.log(toggleBookmark(article[0].id));
  return (
    <>
      <Head>
        <title>Merkliste</title>
        <meta
          property="og:title"
          content="Merkliste"
          key="title"
        />
        <link
          rel="shortcut icon"
          href="/favicon.png"
        />
      </Head>
      <h2>Merkliste under construction...</h2>
      {articles.map(
        (article) =>
          article.isBookmarked && (
            <li key={article.id}>
              <Article
                article={article}
                placeholderImage={placeholderImage}
                toggleBookmark={toggleBookmark}
              />
            </li>
          )
      )}
    </>
  );
}

export default Bookmark;
