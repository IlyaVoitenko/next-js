import Heading from "@/components/heading";
import style from "../styles/Home.module.scss";

const Home = () => {
  return (
    <div className={style.container}>
      <Heading text={"hello world"} />
    </div>
  );
};
export default Home;
