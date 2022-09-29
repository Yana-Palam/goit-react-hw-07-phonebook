import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contactsSelectors';
import { getValueFilter } from 'redux/filters/filtersSelectors';
import ContactListItem from 'components/ContactListItem';
import { List, Contact } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getValueFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = filterValue.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

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
