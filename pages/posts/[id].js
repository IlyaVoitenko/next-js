import React from "react";
import Head from "next/head";
import PostInfo from "@/components/PostInfo";

export const getStaticPaths = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    const paths = data.map(({ id }) => ({
      params: {
        id: id.toString(),
      },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.warn(error);
  }
};

export const getStaticProps = async (context) => {
  try {
    const { id } = context.params;
    const rep = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await rep.json();
    if (!data) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        post: data,
      },
    };
  } catch (error) {
    console.warn(error);
  }
};

const Post = ({ post }) => {
  return (
    <div>
      <Head>
        <title>Post</title>
      </Head>
      post
      <PostInfo post={post} />
    </div>
  );
};
export default Post;
