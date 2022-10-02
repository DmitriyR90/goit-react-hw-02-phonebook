import { ContactWrap, ContactBtn } from './Contact.styled';

export const Contact = ({ name, number, id, onDeleteContact }) => {
  return (
    <ContactWrap>
      <p>{name}:</p>
      <p>{number} </p>
      <ContactBtn type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </ContactBtn>
    </ContactWrap>
  );
};
