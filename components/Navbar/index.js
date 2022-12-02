import Link from "next/link";
import { StyledNavbar } from "./Navbar.styled";
import Svg from "../Svg";
import { useState } from "react";
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
          />
        </Link>
        <Link
          href="/articleSell"
          aria-label="zur Artikel verkaufen Seite"
        >
          <Svg
            variant="sell"
            color={
              pathname === "/articleSell"
                ? "var(--navbar-icon-active)"
                : "var(--navbar-icon)"
            }
          />
        </Link>
        <Link
          href="/myArticles"
          aria-label="zur meinen Artikel"
        >
          <Svg
            variant="myarticles"
            color={
              pathname === "/myArticles"
                ? "var(--navbar-icon-active)"
                : "var(--navbar-icon)"
            }
          />
        </Link>
      </StyledNavbar>
    </footer>
  );
}

export default Navbar;
