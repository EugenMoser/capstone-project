import { useRouter } from "next/router";

function Header() {
  const { pathname } = useRouter();

  return (
    <h1>
      {pathname === "/"
        ? "Bazam"
        : pathname === "/articleSell"
        ? "Artikel verkaufen"
        : pathname.startsWith("/articleDetails")
        ? "Artikeldetails"
        : pathname.startsWith("/myArticles")
        ? "Meine Artikel"
        : "Bazam"}
    </h1>
  );
}

export default Header;
