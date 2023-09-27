import Link from "next/link";
import style from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={style.container}>
      <span>Nacbar</span>
      <nav className={style.navLinks}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/contacts">
          <a>Contacts</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
