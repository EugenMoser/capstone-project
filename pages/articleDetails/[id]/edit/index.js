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

  function editArticle(
    id,
    newname,
    newsize,
    newgender,
    newstatus,
    newanimal,
    newsmoker,
    newdescription,
    newprice
  ) {
    setArticles((oldArticles) =>
      oldArticles.map((article) => {
        if (id === article.id) {
          return {
            ...article,
            name: newname,
            size: newsize,
            gender: newgender,
            status: newstatus,
            animal: newanimal,
            smoker: newsmoker,
            description: newdescription,
            price: newprice,
          };
        }
        return article;
      })
    );
  }

  return (
    <>
      <p>Deinen Artikel ändern: {article.name}</p>
      <Form
        id={article.id}
        articles={articles}
        onSubmit={editArticle}
        buttonText="aktualisieren"
      />
    </>
  );
}

export default Edit;
