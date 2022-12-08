import { useRouter } from "next/router";
import { StyledImage } from "../Style/Image.styled";
import { StyledHeader } from "./Header.styled";

function Header({ getArticleById }) {
  const { pathname, query } = useRouter();
  const { id } = query;
  const article = getArticleById(id);
  return (
    <StyledHeader>
      {pathname === "/articlesell" ? (
        <h1>Artikel verkaufen:</h1>
      ) : pathname.startsWith("/myarticles") ? (
        <h1>Meine Artikel:</h1>
      ) : pathname.endsWith("/edit") ? (
        <h1>Artikel editieren:</h1>
      ) : pathname.startsWith("/details") ? (
        <h1>{article?.name}</h1>
      ) : pathname.startsWith("/search") ? (
        <h1>Suchen:</h1>
      ) : pathname === "/bookmark" ? (
        <h1>Merkliste:</h1>
      ) : (
        <StyledImage
          variant="logo"
          src="/Logo_Bazam.png"
          alt={`Bazam Logo`}
          fill
        />
      )}
    </StyledHeader>
  );
}

export default Header;
