import Link from "next/link";
import { StyledNavbar } from "./Navbar.styled";
import Svg from "../Svg";
import { useState } from "react";

function Navbar() {
  const [page, setPage] = useState("home");

  return (
    <footer>
      <StyledNavbar>
        <Link
          href="/"
          aria-label="zurück zur Startseite"
          onClick={() => setPage("home")}
        >
          <Svg
            variant="home"
            color={
              page === "home"
                ? "var(--navbar-icon-active)"
                : "var(--navbar-icon)"
            }
          />
        </Link>
        <Link
          href="/articleSell"
          aria-label="zur Artikel verkaufen Seite"
          onClick={() => setPage("sell")}
        >
          <Svg
            variant="sell"
            color={
              page === "sell"
                ? "var(--navbar-icon-active)"
                : "var(--navbar-icon)"
            }
          />
        </Link>
        <Link
          href="/myArticles"
          aria-label="zur meinen Artikel"
          onClick={() => setPage("myarticles")}
        >
          <Svg
            variant="myarticles"
            color={
              page === "myarticles"
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
