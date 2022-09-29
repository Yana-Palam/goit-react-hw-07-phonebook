import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { GlobalStyles } from 'utils/GlobalStyle';
import { Wrapper, TitlePhonebook, TitleContacts } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { useEffect } from 'react';
import { selectError, selectIsLoading } from 'redux/contacts/contactsSelectors';
import Loader from './Loader';

export const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  error && toast.error(error);

  return (
    <Wrapper>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      <ContactList />
      <GlobalStyles />
      <ToastContainer style={{ fontSize: '20px' }} />
      {isLoading && !error && <Loader />}
    </Wrapper>
  );
};
