import Head from "next/head";
import Article from "../components/Article";
import { StyledArticleList } from "../components/Article/Article.styled";

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
                  s
                />
              </li>
            )
        )}
      </StyledArticleList>
    </>
  );
}

export default Bookmark;
