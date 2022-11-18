import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "../../../helpers/api";
import Image from "next/image";
import styled from "styled-components";
import css from "styled-jsx/css";
import Svg from "../../../components/Svg";
import ShowContact from "../../../components/ShowContact";
import Link from "next/link";

function articleDetails() {
  const { query } = useRouter();
  const { id } = query;
  const { data: article, error } = useSWR(`/api/articles/${id}`, fetcher);

  if (error) return <p>Fehler! keine Artikel Details gefunden.</p>;
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
  } = article;

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
          <StyledListItem>Preis: {price} Euro</StyledListItem>
          <StyledListItem>Größe: {size}</StyledListItem>
          <StyledListItem>Geschlecht: {gender}</StyledListItem>
          <StyledListItem>Zustand: {status}</StyledListItem>

          <StyledListItem variant={!animal && "hide"}>
            Tierhaushalt
          </StyledListItem>
          <StyledListItem variant={!smoker && "hide"}>
            Raucherhaushalt{smoker}
          </StyledListItem>
          <StyledListItem>
            kurze Beschreibung: {description}
          </StyledListItem>
          <StyledListItem>Entfernung: {distance} KM</StyledListItem>
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
        <ShowContact article={article} />
      </StyledArticle>
    </>
  );
}

export default articleDetails;
const StyledArticle = styled.article`
  position: relative;
`;

const StyledListItem = styled.li`
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
