import ArticleList from "../components/ArticleList";
import Head from "next/head";
import { StyledLink } from "../components/Modal/Modal.styled";

function MyArticles({ articles, placeholderImage }) {
  const authorArticles = articles.filter(
    (findAuthor) => findAuthor.author === "Eugen"
  );

  return (
    <>
      <Head>
        <title>meine Artikel</title>
        <meta
          property="og:title"
          content="meine Artikel"
          key="title"
        />
      </Head>
      {authorArticles.length ? (
        <ArticleList
          articles={authorArticles}
          placeholderImage={placeholderImage}
          secondHeadline="Das sind deine Artikel:"
        />
      ) : (
        <h2>
          Du hast keine Artikel zum Verkauf.
          <StyledLink
            href="articleSell"
            variant="linkToSell"
          >
            Hier kannst du deine Artikel erstellen.
          </StyledLink>
        </h2>
      )}
    </>
  );
}

export default MyArticles;
