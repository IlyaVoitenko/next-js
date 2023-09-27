import Heading from "../heading";
import style from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={style.container}>
      <Heading tag={"h3"} text={"Footer"} />
    </footer>
  );
};

export default Footer;
