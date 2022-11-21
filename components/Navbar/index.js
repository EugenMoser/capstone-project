import Link from "next/link";
import styled from "styled-components";

function Navbar() {
  return (
    <StyledNavbar>
      <Link
        href="/"
        aria-label="zurück zur Startseite"
      >
        Home
      </Link>
      <Link
        href="/articleSell"
        aria-label="zurück zur Startseite"
      >
        verkaufen
      </Link>
    </StyledNavbar>
  );
}

export default Navbar;

const StyledNavbar = styled.nav`
  position: fixed;
  bottom: 0;
  background-color: lightblue;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 40px;
`;