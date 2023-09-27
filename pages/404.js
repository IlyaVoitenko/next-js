import Heading from "@/components/heading";
import { useEffect } from "react";
import { useRouter } from "next/router";

const ErrorPage = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return <Heading text={"404 page not found"} />;
};

export default ErrorPage;
