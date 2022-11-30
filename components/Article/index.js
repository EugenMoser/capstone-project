import Svg from "../Svg";
import {
  StyledArticle,
  StyledDetailsLink,
  StyledArticleImageContainer,
  StyledList,
  StyledLisItems,
} from "./Article.styled";
import { StyledImage } from "../Style/Image.styled";
import { StyledH3 } from "../Style/Font.styled";

import styled from "styled-components";

function Article({ article }) {
  const { id, name, size, gender, price, image } = article;

  return (
    <StyledArticle>
      <StyledArticleImageContainer>
        <StyledImage
          variant="article"
          src={image}
          alt={`Ein Bild von ${name}`}
          fill
        />
      </StyledArticleImageContainer>
      <StyledH3>{name}</StyledH3>

      <StyledList>
        <StyledLisItems>
          Größe: <StyledSpan>{size}</StyledSpan>
        </StyledLisItems>
        <StyledLisItems>
          Geschlecht: <StyledSpan>{gender}</StyledSpan>
        </StyledLisItems>
        <StyledLisItems>
          Preis: <StyledSpan>{price}</StyledSpan> Euro
        </StyledLisItems>
      </StyledList>
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

const StyledSpan = styled.span`
  tab-size: 100px;
`;
