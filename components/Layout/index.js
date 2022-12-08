import Header from "../Header";
import Navbar from "../Navbar";

function Layout({ children, getArticleById }) {
  return (
    <>
      <Header getArticleById={getArticleById} />
      <main>{children}</main>
      <Navbar />
    </>
  );
}

export default Layout;
