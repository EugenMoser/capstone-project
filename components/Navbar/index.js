import Link from "next/link";
import { StyledNavbar } from "./Navbar.styled";
import Svg from "../Svg";
import { useRouter } from "next/router";

function Navbar() {
  const { pathname } = useRouter();

  return (
    <footer>
      <StyledNavbar>
        <Link
          href="/"
          aria-label="zurück zur Startseite"
        >
          <Svg
            variant="home"
            color={
              pathname === "/"
                ? "var(--navbar-icon-active)"
                : "var(--navbar-icon)"
            }
            aria-label="Home Icon"
          />
        </Link>
        <Link
          href="/search"
          aria-label="zur Suche"
        >
          <Svg
            variant="search"
            color={
              pathname === "/search"
                ? "var(--navbar-icon-active)"
                : "var(--navbar-icon)"
            }
            aria-label="Suchen Icon"
          />
        </Link>
        <Link
          href="/articlesell"
          aria-label="zur Artikel verkaufen Seite"
        >
          <Svg
            variant="sell"
            color={
              pathname === "/articlesell"
                ? "var(--navbar-icon-active)"
                : "var(--navbar-icon)"
            }
            aria-label="Verkaufen Icon"
          />
        </Link>
        <Link
          href="/myarticles"
          aria-label="zur meinen Artikel"
        >
          <Svg
            variant="myarticles"
            color={
              pathname === "/myarticles"
                ? "var(--navbar-icon-active)"
                : "var(--navbar-icon)"
            }
            aria-label="meine Artikel Icon"
          />
        </Link>
        <Link
          href="/bookmark"
          aria-label="zur meinen Artikel"
        >
          <Svg
            variant="bookmark_empty"
            color={
              pathname === "/bookmark"
                ? "var(--navbar-icon-active)"
                : "var(--navbar-icon)"
            }
            aria-label="meine Artikel Icon"
          />
        </Link>
      </StyledNavbar>
    </footer>
  );
}

export default Navbar;
