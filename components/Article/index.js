import Svg from "../Svg";
import {
  StyledArticle,
  StyledDetailsLink,
  StyledArticleImageContainer,
  StyledList,
  StyledListItem,
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
        <StyledListItem>
          Größe: <StyledSpan>{size}</StyledSpan>
        </StyledListItem>
        <StyledListItem>
          Geschlecht: <StyledSpan>{gender}</StyledSpan>
        </StyledListItem>
        <StyledListItem>
          Preis (Euro): <StyledSpan>{price}</StyledSpan>
        </StyledListItem>
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
