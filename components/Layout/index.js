import Header from "../Header";
import Navbar from "../Navbar";
import { StyledMain } from "../Layout/Layout.styled";

function Layout({ children }) {
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Navbar />
    </>
  );
}

export default Layout;
