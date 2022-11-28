import { useRouter } from "next/router";

function Header() {
  const { pathname } = useRouter();

  return (
    <h1>
      {pathname === "/"
        ? "Bazam"
        : pathname === "/articleSell"
        ? "Artikel verkaufen"
        : pathname.startsWith("/myArticles")
        ? "Meine Artikel"
        : pathname.endsWith("/edit")
        ? "Artikel editieren"
        : pathname.startsWith("/articleDetails")
        ? "Artikeldetails"
        : "Bazam"}
    </h1>
  );
}

export default Header;
