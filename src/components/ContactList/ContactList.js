export const ContactList = ({ contacts }) => {
  return (
    <div>
      <h3>Contacts</h3>
      <ul>
        {contacts.map(({ name, id }) => {
          return <li key={id}>{name}</li>;
        })}
      </ul>
    </div>
  );
};
