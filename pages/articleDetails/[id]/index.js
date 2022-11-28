import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";
import css from "styled-jsx/css";
import Svg from "../../../components/Svg";
import ShowContact from "../../../components/ShowContact";
import Link from "next/link";

function articleDetails({ getArticleById }) {
  const router = useRouter();
  const { id } = router.query;

  const article = getArticleById(id);
  if (!article) return <p>Artikel Details werden geladen...</p>;

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
          <StyledListItem>Beschreibung: {description}</StyledListItem>

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
        <StyledEditLink
          href={`/articleDetails/${id}/edit`}
          variant={author !== "Eugen" ? "hide" : undefined}
        >
          <Svg
            variant="edit"
            color={"black"}
          />
        </StyledEditLink>
      </StyledArticle>
    </>
  );
}

export default articleDetails;

const StyledEditLink = styled(Link)`
  border: 1px solid black;
  background-color: white;
  width: 35px;
  height: 35px;
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
  border-style: none;
  color: inherit;
  background-color: inherit;
  cursor: pointer;
`;
