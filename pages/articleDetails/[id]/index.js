import { useRouter } from "next/router";
import Svg from "../../../components/Svg";
import ShowContact from "../../../components/Modal/ShowContact";
import {
  ButtonContainer,
  StyledArticle,
} from "../../../components/Style/ArticleDetails.styled";
import { StyledButton } from "../../../components/Style/Button.styled";
import {
  StyledArticleImageContainer,
  StyledList,
  StyledListItem,
} from "../../../components/Article/Article.styled";
import { StyledImage } from "../../../components/Style/Image.styled";

import Head from "next/head";
import ShowDeleteModal from "../../../components/Modal/ShowDeleteModal";

function articleDetails({ getArticleById, setArticles }) {
  const router = useRouter();
  const { id } = router.query;

  const article = getArticleById(id);
  if (!article) return <h3>Artikel Details werden geladen...</h3>;

  function deleteArticle(id) {
    setArticles((previousArticles) => {
      const newArticles = previousArticles.filter(
        (article) => article.id !== id
      );
      return newArticles;
    });

    router.push("/myArticles");
  }

  const {
    name,
    price,
    size,
    gender,
    status,
    animal,
    smoker,
    description,
    distance,
    image,
    author,
  } = article;

  return (
    <>
      <Head>
        <title>Artikeldetails</title>
        <meta
          property="og:title"
          content="Artikeldetails"
          key="title"
        />
      </Head>
      <StyledButton
        variant="close"
        onClick={() => router.back()}
        aria-label="Artikel Details schließen und zurück"
      >
        <Svg variant="close" />
      </StyledButton>
      <StyledArticle>
        <StyledArticleImageContainer>
          <StyledImage
            src={image}
            alt={`Ein Bild von / vom ${name}`}
            fill
          />
        </StyledArticleImageContainer>
        <h3>{name}</h3>
        <StyledList>
          <StyledListItem>
            Größe: <span>{size}</span>
          </StyledListItem>
          <StyledListItem>
            Geschlecht: <span>{gender}</span>
          </StyledListItem>
          <StyledListItem>
            Zustand: <span>{status}</span>
          </StyledListItem>
          <StyledListItem>
            Beschreibung:{" "}
            <span>
              {description.length === 0
                ? "keine Beschreibung vorhanden"
                : description}
            </span>
          </StyledListItem>
          <StyledListItem
            variant={author === "Eugen" ? "hide" : undefined}
          >
            Entfernung (km): <span>{distance}</span>
          </StyledListItem>
          <StyledListItem variant={!animal ? "hide" : undefined}>
            Tierhaushalt
          </StyledListItem>
          <StyledListItem variant={!smoker ? "hide" : undefined}>
            Raucherhaushalt
          </StyledListItem>
          <StyledListItem>
            Preis (Euro): <span>{price}</span>{" "}
          </StyledListItem>
        </StyledList>

        <ShowContact article={article} />
        <ButtonContainer>
          <StyledButton
            onClick={() =>
              (window.location.href = `/articleDetails/${id}/edit`)
            }
            variant={author !== "Eugen" ? "hide" : "edit"}
          >
            <Svg
              variant="edit"
              size="25px"
            />
          </StyledButton>
          <ShowDeleteModal
            articleName={name}
            articleId={id}
            articleAuthor={author}
            deleteArticle={deleteArticle}
          />
        </ButtonContainer>
      </StyledArticle>
    </>
  );
}

export default articleDetails;
