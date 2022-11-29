import GlobalStyles from "../components/GlobalStyles";
import Layout from "../components/Layout";
import { useLocalStorage } from "../helpers/hooks";
import articlesDb from "../helpers/db.json";

function MyApp({ Component, pageProps }) {
  const [articles, setArticles] = useLocalStorage("Articles", articlesDb);

  function getArticleById(id) {
    return articles.find((article) => article.id === id);
  }

  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component
          {...pageProps}
          articles={articles}
          setArticles={setArticles}
          getArticleById={getArticleById}
          //deleteArticle={deleteArticle}
        />
      </Layout>
    </>
  );
}

export default MyApp;
