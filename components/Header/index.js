import { useRouter } from "next/router";

import { StyledImage } from "../Image/Image.styled";
import { StyledH1, StyledHeader } from "./Header.styled";

function Header() {
  const { pathname } = useRouter();

  return (
    <StyledHeader>
      {pathname === "/articleSell" ? (
        <StyledH1>Artikel verkaufen</StyledH1>
      ) : pathname.startsWith("/myArticles") ? (
        <StyledH1>Meine Artikel</StyledH1>
      ) : pathname.endsWith("/edit") ? (
        <StyledH1>Artikel editieren</StyledH1>
      ) : pathname.startsWith("/articleDetails") ? (
        <StyledH1>Artikeldetails</StyledH1>
      ) : (
        <StyledImage
          src="/Logo_Bazam.png"
          alt={`Bazam Logo`}
          objectFit="contain"
          fill
        />
      )}
    </StyledHeader>
  );
}

export default Header;
