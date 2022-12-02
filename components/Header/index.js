import { useRouter } from "next/router";
import { StyledImage } from "../Style/Image.styled";
import { StyledHeader } from "./Header.styled";

function Header() {
  const { pathname } = useRouter();

  return (
    <StyledHeader>
      {pathname === "/articleSell" ? (
        <h1>Artikel verkaufen:</h1>
      ) : pathname.startsWith("/myArticles") ? (
        <h1>Meine Artikel:</h1>
      ) : pathname.endsWith("/edit") ? (
        <h1>Artikel editieren:</h1>
      ) : pathname.startsWith("/articleDetails") ? (
        <h1>Details:</h1>
      ) : (
        <h1>
          <StyledImage
            variant="logo"
            src="/Logo_Bazam.png"
            alt={`Bazam Logo`}
            fill
          />
        </h1>
      )}
    </StyledHeader>
  );
}

export default Header;
