import { useRouter } from "next/router";
import Link from "next/link";
import style from "./Navbar.module.scss";

const Navbar = () => {
  const { pathname } = useRouter();
  const linkNavigation = [
    { id: 1, path: "/", title: "Home" },
    { id: 2, path: "/contacts", title: "Contacts" },
    { id: 3, path: "/posts", title: "Posts" },
  ];
  return (
    <div className={style.container}>
      <span>Navbar</span>
      <nav className={style.navLinks}>
        {linkNavigation.map(({ id, path, title }) => {
          return (
            <Link
              key={id}
              href={path}
              className={pathname === path ? style.activeLink : null}
            >
              {title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
