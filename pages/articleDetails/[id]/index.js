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
} from "../../../components/Article/Article.styled";
import { StyledListItem } from "../../../components/Article/Article.styled";
import { StyledImage } from "../../../components/Style/Image.styled";
import {
  StyledH3,
  StyledSpan,
} from "../../../components/Style/Font.styled";
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
          <StyledListItem>
            Größe: <StyledSpan>{size}</StyledSpan>
          </StyledListItem>
          <StyledListItem>
            Geschlecht: <StyledSpan>{gender}</StyledSpan>
          </StyledListItem>
          <StyledListItem>
            Zustand: <StyledSpan>{status}</StyledSpan>
          </StyledListItem>
          <StyledListItem>
            Beschreibung:{" "}
            <StyledSpan>
              {description.length === 0
                ? "keine Beschreibung vorhanden"
                : description}
            </StyledSpan>
          </StyledListItem>
          <StyledListItem
            variant={author === "Eugen" ? "hide" : undefined}
          >
            Entfernung (km): <StyledSpan>{distance}</StyledSpan>
          </StyledListItem>
          <StyledListItem variant={!animal ? "hide" : undefined}>
            Tierhaushalt
          </StyledListItem>
          <StyledListItem variant={!smoker ? "hide" : undefined}>
            Raucherhaushalt
          </StyledListItem>
          <StyledListItem>
            Preis (Euro): <StyledSpan>{price}</StyledSpan>{" "}
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
