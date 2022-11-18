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
        alt={`Bild von ${name}`}
        width={150}
        height={200}
      />

      <h3>{name}</h3>

      <ul>
        <li>Größe: {size}</li>
        <li>Geschlecht: {gender}</li>
        <li>Preis: {price}</li>
      </ul>
      <StyledLink
        href={`/articleDetails/${id}`}
        aria-label="Article Details"
      >
        <Svg
          variant="details"
          size="35px"
        ></Svg>
      </StyledLink>
    </StyledArticle>
  );
}

export default Article;

const StyledArticle = styled.article`
  border: 1px solid black;
  margin: 2rem;
  list-style: none;
  position: relative;
`;

const StyledLink = styled(Link)`
  position: absolute;
  right: 10px;
  top: 10px;
  border-style: none;
`;
