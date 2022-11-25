import Form from "../../../../components/Form";
import { useRouter } from "next/router";

function Edit({ articles, setArticles }) {
  const { query } = useRouter();
  const { id } = query;

  function getArticlesById(id) {
    return articles.find((article) => article.id === id);
  }
  const article = getArticlesById(id);
  if (!article) return <p>Artikel Details werden geladen...</p>;

  return (
    <>
      <p>test Ausgabe: {article.name}</p>
      <Form
        content={article}
        id={article.id}
        articles={articles}
        setArticles={setArticles}
        isEdit
      />
    </>
  );
}

export default Edit;
