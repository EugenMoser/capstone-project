import Head from "next/head";
import Article from "../components/Article";

import { StyledArticleList } from "../components/Article/Article.styled";

function Bookmark({ placeholderImage, articles, toggleBookmark }) {
  const anyBookmark = articles.every(
    (article) =>
      (article.isBookmarked === false) |
      (article.isBookmarked === undefined)
  );

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
      {!anyBookmark ? (
        <>
          <h2>Deine Favoriten</h2>
          <StyledArticleList>
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
          </StyledArticleList>
        </>
      ) : (
        <h2>keine Favoriten hinzugefügt</h2>
      )}
    </>
  );
}

export default Bookmark;
