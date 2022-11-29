import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";
import css from "styled-jsx/css";
import Svg from "../../../components/Svg";
import ShowContact from "../../../components/ShowContact";
import Link from "next/link";
import Head from "next/head";

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
      <StyledArticle>
        <h3>Details zum Artikel: {name}</h3>
        <Image
          src={image}
          alt={`Ein Bild von / vom ${name}`}
          width={150}
          height={200}
        />
        <ul>
          <StyledListItem>Preis: {price} Euro</StyledListItem>
          <StyledListItem>Größe: {size}</StyledListItem>
          <StyledListItem>Geschlecht: {gender}</StyledListItem>
          <StyledListItem>Zustand: {status}</StyledListItem>

          <StyledListItem variant={!animal ? "hide" : undefined}>
            Tierhaushalt
          </StyledListItem>
          <StyledListItem variant={!smoker ? "hide" : undefined}>
            Raucherhaushalt
          </StyledListItem>
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
        </ul>
        <StyledButton
          onClick={() => router.back()}
          aria-label="Artikel Details schließen und zurück"
        >
          <Svg variant="close" />
        </StyledButton>
        <ShowContact
          article={article}
          variant={author === "Eugen" ? "hide" : undefined}
        />
        <ButtonContainer>
          <StyledEditLink
            href={`/articleDetails/${id}/edit`}
            variant={author !== "Eugen" ? "hide" : undefined}
          >
            <Svg
              variant="edit"
              color="black"
            />
          </StyledEditLink>
          <StyledButton
            variant={author !== "Eugen" ? "hide" : "delete"}
            onClick={() => deleteArticle(id)}
          >
            <Svg variant="delete" />
          </StyledButton>
        </ButtonContainer>
      </StyledArticle>
    </>
  );
}

export default articleDetails;

const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
`;

const StyledEditLink = styled(Link)`
  width: 35px;
  height: 35px;
  border: 2px solid green;
  ${({ variant }) =>
    variant === "hide" &&
    css`
      display: none;
    `};
`;

const StyledArticle = styled.article`
  position: relative;
  margin-bottom: 50px; //for navbar
`;

const StyledListItem = styled.li`
  list-style: none;
  ${({ variant }) =>
    variant === "hide" &&
    css`
      display: none;
    `}
`;

const StyledButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  padding: 0;
  border-style: none;
  color: inherit;
  background-color: inherit;
  border: 2px solid green;
  cursor: pointer;
  ${({ variant }) =>
    variant === "delete" &&
    css`
      position: relative;
    `}
  ${({ variant }) =>
    variant === "hide" &&
    css`
      display: none;
    `};
`;
