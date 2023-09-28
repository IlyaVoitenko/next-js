import Heading from "@/components/heading";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const ErrorPage = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <Heading text={"404 page not found"} tag={"span"} />
    </>
  );
};

export default ErrorPage;
