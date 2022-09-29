import React from 'react';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/contactsSelectors';
import ContactListItem from 'components/ContactListItem';
import { List, Contact } from './ContactList.styled';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <Contact key={id}>
          <ContactListItem name={name} number={number} id={id} />
        </Contact>
      ))}
    </List>
  );
};

export default ContactList;
