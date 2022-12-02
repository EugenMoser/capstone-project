import GlobalStyles from "../components/Style/GlobalStyles";
import Layout from "../components/Layout";
import { useLocalStorage } from "../helpers/hooks";
import articlesDb from "../helpers/db.json";
import { CloudinaryContext } from "cloudinary-react";

function MyApp({ Component, pageProps }) {
  const [articles, setArticles] = useLocalStorage("Articles", articlesDb);

  function getArticleById(id) {
    return articles.find((article) => article.id === id);
  }

  return (
    <>
      <CloudinaryContext cloudName="depezzq0e">
        <GlobalStyles />
        <Layout>
          <Component
            {...pageProps}
            articles={articles}
            setArticles={setArticles}
            getArticleById={getArticleById}
          />
        </Layout>
      </CloudinaryContext>
    </>
  );
}

export default MyApp;
