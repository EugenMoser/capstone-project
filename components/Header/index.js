import { useRouter } from "next/router";

function Header() {
  const { pathname } = useRouter();

  return (
    <h1>
      {pathname === "/"
        ? "Bazam"
        : pathname === "/articleSell"
        ? "Artikel verkaufen"
        : "Artikeldetails"}
    </h1>
  );
}

export default Header;
