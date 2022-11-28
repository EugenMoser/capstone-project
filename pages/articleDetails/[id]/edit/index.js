import Form from "../../../../components/Form";
import { useRouter } from "next/router";

function Edit({ setArticles, getArticleById }) {
  const { query } = useRouter();
  const { id } = query;

  const article = getArticleById(id);
  if (!article) return <p>Artikel Details werden geladen...</p>;

  const {
    name,
    size,
    gender,
    status,
    animal,
    smoker,
    description,
    price,
  } = article;

  function editArticle(
    id,
    newName,
    newSize,
    newGender,
    newStatus,
    newAnimal,
    newSmoker,
    newDescription,
    newPrice
  ) {
    setArticles((oldArticles) =>
      oldArticles.map((article) => {
        if (id === article.id) {
          return {
            ...article,
            name: newName,
            size: newSize,
            gender: newGender,
            status: newStatus,
            animal: newAnimal,
            smoker: newSmoker,
            description: newDescription,
            price: newPrice,
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
        id={id}
        content={article}
        nameContent={name}
        sizeContent={size}
        genderContent={gender}
        statusContent={status}
        animalContent={animal}
        smokerContent={smoker}
        descriptionContent={description}
        priceContent={price}
        onSubmit={editArticle}
        buttonText="aktualisieren"
      />
    </>
  );
}

export default Edit;
