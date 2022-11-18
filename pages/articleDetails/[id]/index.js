import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "../../../helpers/api";
import Image from "next/image";
import styled from "styled-components";
import css from "styled-jsx/css";
import Svg from "../../../components/Svg";
import Link from "next/link";

function articleDetails() {
  const { query } = useRouter();
  const { id } = query;
  const { data: article, error } = useSWR(`/api/articles/${id}`, fetcher);

  if (!article) return <p>Artikel Details werden geladen...</p>;
  if (error) return <p>Fehler! keine Artikel Details gefunden.</p>;
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
  } = article;
  console.log(animal, smoker);
  return (
    <>
      <StyledArticle>
        <h3>Details zum Artikel: {name}</h3>
        <Image
          src={image}
          alt={`Bild von ${name}`}
          width={150}
          height={200}
        />
        <ul>
          <StyledList>Preis: {price} Euro</StyledList>
          <StyledList>Größe: {size}</StyledList>
          <StyledList>Geschlecht: {gender}</StyledList>
          <StyledList>Zustand: {status}</StyledList>

          <StyledList variant={!animal && "hide"}>Tierhaushalt</StyledList>
          <StyledList variant={!smoker && "hide"}>
            Raucherhaushalt{smoker}
          </StyledList>
          <StyledList>kurze Beschreibung: {description}</StyledList>
          <StyledList>Entfernung: {distance} KM</StyledList>
        </ul>
        <StyledLink
          href="/"
          aria-label="Artikel Details schließen und zur Homepage zurück"
        >
          <Svg
            variant="close"
            size="35px"
          />
        </StyledLink>
      </StyledArticle>
    </>
  );
}

export default articleDetails;
const StyledArticle = styled.article`
  position: relative;
`;

const StyledList = styled.li`
  list-style: none;
  ${({ variant }) =>
    variant === "hide" &&
    css`
      display: none;
    `}
`;

const StyledLink = styled(Link)`
  position: absolute;
  right: 10px;
  top: 10px;
  border-style: none;
  color: inherit;
`;
