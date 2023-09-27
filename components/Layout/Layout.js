import Footer from "../Footer";
import Header from "../Header";
import style from "./Layout.module.scss";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={style.container}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
