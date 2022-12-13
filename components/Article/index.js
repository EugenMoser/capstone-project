import Svg from "../Svg";
import {
  StyledArticle,
  StyledDetailsLink,
  StyledArticleImageContainer,
  StyledList,
  StyledListItem,
} from "./Article.styled";
import { StyledImage } from "../Style/Image.styled";
import Button from "../Button";

function Article({ article, placeholderImage, toggleBookmark }) {
  const { id, name, size, gender, price, image, isBookmarked, author } =
    article;

  return (
    <StyledArticle>
      <Button
        variant={author === "Eugen" ? "hide" : "favorite"}
        ariaLabel="Favoriet hinzufügen/entfernen"
        onClick={() => {
          toggleBookmark(id);
        }}
      >
        test
        <Svg
          variant={isBookmarked ? "bookmark_fill" : "bookmark_empty"}
          color="var(--color-red)"
        />
      </Button>

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
        href={`/details/${id}`}
        aria-label="Article Details"
      >
        <Svg variant={"details"} />
      </StyledDetailsLink>
    </StyledArticle>
  );
}

export default Article;
