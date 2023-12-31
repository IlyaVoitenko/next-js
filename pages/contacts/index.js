import React from "react";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  try {
    const rep = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await rep.json();
    if (!data) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        contacts: data,
      },
    };
  } catch (error) {
    console.warn(error);
  }
};

const contacts = ({ contacts }) => {
  return (
    <>
      <Head>
        <title>contacts</title>
      </Head>
      {contacts &&
        contacts.map(({ name, id }) => {
          return (
            <p key={id}>
              <Link href={`/contacts/${id}`}>{name}</Link>
            </p>
          );
        })}
    </>
  );
};

export default contacts;
