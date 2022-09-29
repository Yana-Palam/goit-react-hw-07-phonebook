import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { GlobalStyles } from 'utils/GlobalStyle';
import { Wrapper, TitlePhonebook, TitleContacts } from './App.styled';

export const App = () => {
  return (
    <Wrapper>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      <ContactList />
      <GlobalStyles />
      <ToastContainer style={{ fontSize: '20px' }} />
    </Wrapper>
  );
};
