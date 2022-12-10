import Svg from "../Svg";
import {
  StyledArticle,
  StyledDetailsLink,
  StyledArticleImageContainer,
  StyledList,
  StyledListItem,
} from "./Article.styled";
import { StyledImage } from "../Style/Image.styled";
import { StyledButton } from "../Style/Button.styled";

function Article({ article, placeholderImage, toggleBookmark }) {
  const { id, name, size, gender, price, image, isBookmarked, author } =
    article;

  return (
    <StyledArticle>
      <StyledButton
        variant={author === "Eugen" ? "hide" : "favorite"}
        onClick={() => {
          toggleBookmark(id);
        }}
      >
        <Svg
          variant={isBookmarked ? "bookmark_fill" : "bookmark_empty"}
          color="var(--color-red)"
        />
      </StyledButton>

      <StyledArticleImageContainer>
        <StyledImage
          variant="article"
          src={image === "" ? placeholderImage : image}
          alt={`Ein Bild von ${name}`}
          layout="fill"
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
        href={`/details/${id}`}
        aria-label="Article Details"
      >
        <Svg variant={"details"} />
      </StyledDetailsLink>
    </StyledArticle>
  );
}

export default Article;
