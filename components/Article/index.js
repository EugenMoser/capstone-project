import styled from "styled-components";
import Image from "next/image";
import Svg from "../Svg";
import Link from "next/link";

function Article({ article }) {
  const { id, name, size, gender, price, image } = article;

  return (
    <StyledArticle>
      <Image
        src={image}
        alt={`Ein Bild von ${name}`}
        width={150}
        height={200}
      />

      <h3>{name}</h3>

      <ul>
        <li>Größe: {size}</li>
        <li>Geschlecht: {gender}</li>
        <li>Preis: {price}</li>
      </ul>
      <StyledDetailsLink
        href={`/articleDetails/${id}`}
        aria-label="Article Details"
      >
        <Svg variant={"details"}></Svg>
      </StyledDetailsLink>
    </StyledArticle>
  );
}

export default Article;

const StyledArticle = styled.article`
  border: 1px solid black;
  margin: 1rem 1rem 50px 1rem;
  list-style: none;
  position: relative;
  background-color: white;
  border: none;
  border-radius: 2px;
`;

const StyledDetailsLink = styled(Link)`
  position: absolute;
  right: 10px;
  top: 10px;
  border-style: none;
  color: inherit;
`;
