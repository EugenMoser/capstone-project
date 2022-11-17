import styled from "styled-components";
import Image from "next/image";

function Article({ article }) {
  const { name, size, gender, price, image } = article;
  console.log(name, size, gender, price, image);
  return (
    <StyledArticle>
      <Image
        src={image}
        alt="article picture"
        width={150}
        height={200}
      />

      <h3>{name}</h3>
      <ul>
        <li>Größe: {size}</li>
        <li>Geschlecht: {gender}</li>
        <li>Preis: {price}</li>
      </ul>
    </StyledArticle>
  );
}

export default Article;

const StyledArticle = styled.article`
  border: 1px solid black;
  margin: 2rem;
  list-style: none;
`;
