import GlobalStyles from "../components/GlobalStyles";
import Layout from "../components/Layout";
import { useLocalStorage } from "../helpers/hooks";
import articlesDb from "../helpers/db.json";

function MyApp({ Component, pageProps }) {
  const [articles, setArticles] = useLocalStorage("Articles", articlesDb);

  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component
          {...pageProps}
          articles={articles}
          setArticles={setArticles}
        />
      </Layout>
    </>
  );
}

export default MyApp;
