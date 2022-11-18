import { useRouter } from "next/router";

function Header() {
  const { pathname } = useRouter();
  const isArticleDetails = pathname.startsWith("/articleDetails");
  return <h1>{isArticleDetails ? "Details" : "Bazam"}</h1>;
}

export default Header;
