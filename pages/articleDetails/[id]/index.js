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
import { StyledH3 } from "../../../components/Style/Font.styled";
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
        <StyledH3>{name}</StyledH3>
        <StyledList>
          <StyledListItem>Preis: {price} Euro</StyledListItem>
          <StyledListItem>Größe: {size}</StyledListItem>
          <StyledListItem>Geschlecht: {gender}</StyledListItem>
          <StyledListItem>Zustand: {status}</StyledListItem>
          <StyledListItem>
            Beschreibung:{" "}
            {description.length === 0
              ? "keine Beschreibung vorhanden"
              : description}
          </StyledListItem>
          <StyledListItem
            variant={author === "Eugen" ? "hide" : undefined}
          >
            Entfernung: {distance} KM
          </StyledListItem>
          <StyledListItem variant={!animal ? "hide" : undefined}>
            Tierhaushalt
          </StyledListItem>
          <StyledListItem variant={!smoker ? "hide" : undefined}>
            Raucherhaushalt
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
            <Svg variant="edit" />
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
