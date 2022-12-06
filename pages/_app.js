import GlobalStyles from "../components/Style/GlobalStyles";
import Layout from "../components/Layout";
import { useLocalStorage } from "../helpers/hooks";
import articlesDb from "../helpers/db.json";
import { CloudinaryContext } from "cloudinary-react";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [articles, setArticles] = useLocalStorage("Articles", articlesDb);
  const router = useRouter();
  const placeholderImage =
    "https://res.cloudinary.com/depezzq0e/image/upload/v1670228543/placeholder-image_j7hueu.jpg";
  function getArticleById(id) {
    return articles.find((article) => article.id === id);
  }

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

  function editArticle(
    id,
    newName,
    newSize,
    newGender,
    newStatus,
    newAnimal,
    newSmoker,
    newDescription,
    newPrice,
    newImage
  ) {
    setArticles((previousArticles) =>
      previousArticles.map((article) => {
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
            image: newImage === "" ? article.image : newImage,
          };
        }
        return article;
      })
    );
  }

  function deleteArticle(id) {
    setArticles((previousArticles) => {
      const newArticles = previousArticles.filter(
        (article) => article.id !== id
      );
      return newArticles;
    });

    router.push("/myarticles");
  }

  return (
    <>
      <CloudinaryContext cloudName="depezzq0e">
        <GlobalStyles />
        <Layout>
          <Component
            {...pageProps}
            articles={articles}
            onAddArticle={addArticle}
            onEditArticle={editArticle}
            onDeleteArticle={deleteArticle}
            getArticleById={getArticleById}
            placeholderImage={placeholderImage}
          />
        </Layout>
      </CloudinaryContext>
    </>
  );
}

export default MyApp;
