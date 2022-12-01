import { useRouter } from "next/router";

import { StyledImage } from "../Style/Image.styled";
import { StyledHeader } from "./Header.styled";
import { StyledH1 } from "../Style/Font.styled";

function Header() {
  const { pathname } = useRouter();

  return (
    <StyledHeader>
      {pathname === "/articleSell" ? (
        <StyledH1>Artikel verkaufen:</StyledH1>
      ) : pathname.startsWith("/myArticles") ? (
        <StyledH1>Meine Artikel</StyledH1>
      ) : pathname.endsWith("/edit") ? (
        <StyledH1>Artikel editieren</StyledH1>
      ) : pathname.startsWith("/articleDetails") ? (
        <StyledH1>Details:</StyledH1>
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
