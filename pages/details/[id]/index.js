import Svg from "../../../components/Svg";
import ShowContact from "../../../components/Modal/ShowContact";
import {
  ButtonContainer,
  StyledArticle,
} from "../../../components/Style/ArticleDetails.styled";
import Button from "../../../components/Button";
import {
  StyledArticleImageContainer,
  StyledList,
  StyledListItem,
  StyledTagContainer,
  StyledTagSpan,
} from "../../../components/Article/Article.styled";
import { StyledImage } from "../../../components/Style/Image.styled";
import { useRouter } from "next/router";
import Head from "next/head";
import ShowDeleteModal from "../../../components/Modal/ShowDeleteModal";

function articleDetails({
  getArticleById,
  onDeleteArticle,
  placeholderImage,
}) {
  const router = useRouter();
  const { id } = router.query;

  const article = getArticleById(id);
  if (!article) return <h3>Artikeldetails werden geladen...</h3>;

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
        <link
          rel="shortcut icon"
          href="/favicon.png"
        />
      </Head>
      <Button
        variant="close"
        ariaLabel="Artikel Details schließen und zurück"
        onClick={() => router.back()}
      >
        <Svg variant="close" />
      </Button>
      <StyledArticle>
        <StyledArticleImageContainer>
          <StyledImage
            src={image === "" ? placeholderImage : image}
            alt={`Ein Bild von / vom ${name}`}
            fill
          />
        </StyledArticleImageContainer>
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
          <StyledListItem variant="priceDetailspage">
            Preis (Euro): <span>{price}</span>{" "}
          </StyledListItem>

          <StyledTagContainer>
            <StyledListItem variant={!animal ? "hide" : "taganimal"}>
              <Svg
                variant="animal"
                size="20px"
              />
              <StyledTagSpan>Tierhaushalt</StyledTagSpan>
            </StyledListItem>
            <StyledListItem variant={!smoker ? "hide" : "tagsmoker"}>
              <Svg
                variant="smoker"
                size="20px"
              />
              <StyledTagSpan>Raucherhaushalt</StyledTagSpan>
            </StyledListItem>
          </StyledTagContainer>
        </StyledList>
        <ShowContact article={article} />
        <ButtonContainer>
          <Button
            variant={author !== "Eugen" ? "hide" : "edit"}
            ariaLabel="aktualisieren"
            onClick={() => router.push(`/details/${id}/edit`)}
          >
            <Svg
              variant="edit"
              size="25px"
            />
          </Button>
          <ShowDeleteModal
            articleName={name}
            articleId={id}
            articleAuthor={author}
            onDeleteArticle={onDeleteArticle}
          />
        </ButtonContainer>
      </StyledArticle>
    </>
  );
}

export default articleDetails;
