import Heading from "@/components/heading";

const ContactInfo = ({ contact }) => {
  const { id, name, username, email, address } = contact || {};
  const { street, suite, city } = address || {};
  if (!contact) {
    return <Heading text={"contact not found"} />;
  }
  return (
    <div>
      <Heading text={name} />
      <span>{id}</span>
      <span>{username}</span>
      <span>{email}</span>
      <span>{city}</span>
      <span>{suite}</span>
      <span>{street}</span>
    </div>
  );
};

export default ContactInfo;
