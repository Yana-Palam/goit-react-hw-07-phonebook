import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { Form, Label, Input } from './ContactForm.styled';
import Button from 'components/Button';
import { addContact } from 'redux/contacts/contactsOperations';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const normalizedName = name.toLowerCase();

    if (contacts.find(({ name }) => name.toLowerCase() === normalizedName)) {
      return toast.error(`${name} is already in contacts`);
    }
    const newContact = {
      name,
      number,
    };
    dispatch(addContact(newContact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const nameInputId = nanoid();
  const numberInputId = nanoid();
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor={nameInputId}>Name</Label>
        <Input
          id={nameInputId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
        <Label htmlFor={numberInputId}>Number</Label>
        <Input
          id={numberInputId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
        <Button type="submit" children="Add contacts" />
      </Form>
    </>
  );
};

export default ContactForm;
