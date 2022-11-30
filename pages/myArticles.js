import ArticleList from "../components/ArticleList";
import Head from "next/head";
function MyArticles({ articles }) {
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

      <ArticleList
        articles={authorArticles}
        secondHeadline="Das sind deine Artikel:"
      />
    </>
  );
}

export default MyArticles;
