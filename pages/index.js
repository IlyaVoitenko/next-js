import Heading from "@/components/heading";
import style from "../styles/Home.module.scss";
import Head from "next/head";

const Home = () => {
  return (
    <div className={style.container}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text={"hello world"} />
    </div>
  );
};
export default Home;
