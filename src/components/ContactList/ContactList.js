import { Contact } from '../Contact/Contact';
import { ContactSection, ContactItem } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactSection>
      {contacts.map(({ name, id, number }) => {
        return (
          <ContactItem key={id}>
            <Contact
              id={id}
              name={name}
              number={number}
              onDeleteContact={onDeleteContact}
            />
          </ContactItem>
        );
      })}
    </ContactSection>
  );
};
