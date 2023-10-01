import style from "../styles/Home.module.scss";
import Head from "next/head";
import Socials from "@/components/Socials";

export const getStaticProps = async () => {
  const request = await fetch(`${process.env.HOST_API}/socials`);
  const response = await request.json();

  if (!response) return { notFound: true };

  return { props: { socials: response } };
};

const Home = ({ socials }) => {
  return (
    <div className={style.container}>
      <Head>
        <title>Home</title>
      </Head>
      <Socials socials={socials} />
    </div>
  );
};
export default Home;
