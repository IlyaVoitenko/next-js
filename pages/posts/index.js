import Heading from "../../components/heading";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  try {
    const rep = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await rep.json();
    if (!data) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        posts: data,
      },
    };
  } catch (error) {
    console.warn(error);
  }
};

const Posts = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text={"posts list :"} />
      {posts &&
        posts.map(({ id, title }) => {
          return (
            <p key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
            </p>
          );
        })}
    </>
  );
};
export default Posts;
