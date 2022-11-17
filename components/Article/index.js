import styled from "styled-components";
import Image from "next/image";
import Svg from "../Svg";

function Article({ article }) {
  const { name, size, gender, price, image } = article;

  return (
    <StyledArticle>
      <Image
        src={image}
        alt={`image of ${name}`}
        width={150}
        height={200}
      />

      <h3>{name}</h3>

      <ul>
        <li>Größe: {size}</li>
        <li>Geschlecht: {gender}</li>
        <li>Preis: {price}</li>
      </ul>
      <StyledButton>
        <Svg
          variant="details"
          size="25px"
        ></Svg>
      </StyledButton>
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

const StyledButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 3px;
`;
