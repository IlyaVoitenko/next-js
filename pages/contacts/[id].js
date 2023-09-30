import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";

export const getServerSideProps = async (context) => {
  try {
    const { id } = context.params;
    const rep = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await rep.json();
    if (!data) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        contact: data,
      },
    };
  } catch (error) {
    console.warn(error);
  }
};

const Contact = ({ contact }) => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactInfo contact={contact} />
    </>
  );
};
export default Contact;
