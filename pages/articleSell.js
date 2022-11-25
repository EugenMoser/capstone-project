import Form from "../components/Form";
import { nanoid } from "nanoid";

function ArticleSell({ setArticles }) {
  function addArticle(
    id,
    name,
    size,
    gender,
    status,
    animal,
    smoker,
    description,
    price,
    accountData
  ) {
    setArticles((oldArticles) => [
      ...oldArticles,
      {
        id: nanoid(),
        name,
        size,
        gender,
        status,
        animal,
        smoker,
        description,
        price,
        ...accountData,
      },
    ]);
  }

  return (
    <Form
      onSubmit={addArticle}
      buttonText="bestätigen"
    />
  );
}

export default ArticleSell;
