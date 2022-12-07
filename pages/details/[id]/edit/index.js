import Form from "../../../../components/Form";
import { useRouter } from "next/router";
import Head from "next/head";

function Edit({ onEditArticle, getArticleById }) {
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

  return (
    <>
      <Head>
        <title>Artikel editieren</title>
        <meta
          property="og:title"
          content="Artikel editieren"
          key="title"
        />
        <link
          rel="shortcut icon"
          href="/favicon.png"
        />
      </Head>
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
        onSubmit={onEditArticle}
        buttonText="aktualisieren"
      />
    </>
  );
}

export default Edit;
