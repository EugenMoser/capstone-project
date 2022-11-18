import { useRouter } from "next/router";

function Header() {
  const { pathname } = useRouter();

  console.log(pathname);
  return (
    <>
      {pathname.startsWith("/articleDetails") ? (
        <h1>Details</h1>
      ) : (
        <h1>Bazam</h1>
      )}
    </>
  );
}

export default Header;
