import Svg from "../Svg";
import {
  StyledArticle,
  StyledDetailsLink,
  StyledArticleImageContainer,
  StyledList,
  StyledListItem,
} from "./Article.styled";
import { StyledImage } from "../Style/Image.styled";

function Article({ article }) {
  const { id, name, size, gender, price, image } = article;

  return (
    <>
      <StyledArticle>
        <StyledArticleImageContainer>
          <StyledImage
            variant="article"
            src={
              image === ""
                ? "https://res.cloudinary.com/depezzq0e/image/upload/v1670228543/placeholder-image_j7hueu.jpg"
                : image
            }
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
          <Svg variant={"details"}></Svg>
        </StyledDetailsLink>
      </StyledArticle>
    </>
  );
}

export default Article;
