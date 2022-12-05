import Form from "../components/Form";
import { nanoid } from "nanoid";
import Head from "next/head";

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
    image,
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
        image,
        ...accountData,
      },
    ]);
  }

  return (
    <>
      <Head>
        <title>Artikel verkaufen</title>
        <meta
          property="og:title"
          content="Artikel verkaufen"
          key="title"
        />
      </Head>
      <Form
        onSubmit={addArticle}
        buttonText="Bestätigen"
      />
    </>
  );
}

export default ArticleSell;
