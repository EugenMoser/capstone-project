import { useRouter } from "next/router";

function Edit({ article }) {
  // const { query } = useRouter();
  // const { id } = query;

  // function getArticlesById(id) {
  //   return articles.find((article) => article.id === id);
  // }
  // const article = getArticlesById(id);
  // if (!article) return <p>Artikel Details werden geladen...</p>;
  return <p>test Ausgabe: {article}</p>;
}

export default Edit;
