import Header from "../Header";
import Navbar from "../Navbar";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Navbar />
    </>
  );
}

export default Layout;
