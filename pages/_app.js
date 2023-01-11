import GlobalStyles from "../components/Style/GlobalStyles";
import Layout from "../components/Layout";
import { useLocalStorage } from "../helpers/hooks";
import articlesDb from "../helpers/db.json";
import { CloudinaryContext } from "cloudinary-react";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [articles, setArticles] = useLocalStorage("Articles", articlesDb);
  const router = useRouter();
  const placeholderImage =
    "https://res.cloudinary.com/depezzq0e/image/upload/v1670434918/Logo_Bazam_Platzhalterbild-02_w0jx3d.png";
  const [searchedText, setSearchedText] = useState("");
  const resetValue = () => setSearchedText("");

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

  function toggleBookmark(id) {
    const newState = articles.map((article) => {
      if (article.id === id) {
        return { ...article, isBookmarked: !article.isBookmarked };
      } else {
        return article;
      }
    });
    setArticles(newState);
  }

  const filteredArticles = articles.filter((findArticle) =>
    findArticle.name.toLowerCase().includes(searchedText.toLowerCase())
  );
  function inputHandler(event) {
    const searchValue = event.target.value;
    setSearchedText(searchValue.trim());
  }

  const authorArticles = articles.filter(
    (findAuthor) => findAuthor.author === "Eugen"
  );

  return (
    <>
      <CloudinaryContext cloudName="depezzq0e">
        <GlobalStyles />
        <Layout getArticleById={getArticleById}>
          <Component
            {...pageProps}
            articles={articles}
            onAddArticle={addArticle}
            onEditArticle={editArticle}
            onDeleteArticle={deleteArticle}
            getArticleById={getArticleById}
            placeholderImage={placeholderImage}
            toggleBookmark={toggleBookmark}
            filteredArticles={filteredArticles}
            inputHandler={inputHandler}
            searchedText={searchedText}
            resetValue={resetValue}
            authorArticles={authorArticles}
            router={router}
          />
        </Layout>
      </CloudinaryContext>
    </>
  );
}

export default MyApp;
