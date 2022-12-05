import Svg from "../Svg";
import {
  StyledArticle,
  StyledDetailsLink,
  StyledArticleImageContainer,
  StyledList,
  StyledListItem,
} from "./Article.styled";
import { StyledImage } from "../Style/Image.styled";

function Article({ article, placeholderImage }) {
  const { id, name, size, gender, price, image } = article;

  return (
    <StyledArticle>
      <StyledArticleImageContainer>
        <StyledImage
          variant="article"
          src={image === "" ? placeholderImage : image}
          alt={`Ein Bild von ${name}`}
          fill
        />
      </StyledArticleImageContainer>
      <h3>{name}</h3>

      <StyledList>
        <StyledListItem>
          Größe: <span>{size}</span>
        </StyledListItem>
        <StyledListItem>
          Geschlecht:<span>{gender}</span>
        </StyledListItem>
        <StyledListItem>
          Preis (Euro): <span>{price}</span>
        </StyledListItem>
      </StyledList>
      <StyledDetailsLink
        href={`/articleDetails/${id}`}
        aria-label="Article Details"
      >
        <Svg variant={"details"} />
      </StyledDetailsLink>
    </StyledArticle>
  );
}

export default Article;
