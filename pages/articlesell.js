import Form from "../components/Form";

import Head from "next/head";

function ArticleSell({ onAddArticle }) {
  return (
    <>
      <Head>
        <title>Artikel verkaufen</title>
        <meta
          property="og:title"
          content="Artikel verkaufen"
          key="title"
        />
        <link
          rel="shortcut icon"
          href="/favicon.png"
        />
      </Head>
      <Form
        onSubmit={onAddArticle}
        buttonText="Bestätigen"
      />
    </>
  );
}

export default ArticleSell;
