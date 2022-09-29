import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Text } from './ContactListItem.styled';
import Button from 'components/Button';
import Avatar from 'react-avatar';
import { deleteContact } from 'redux/contacts/contactsOperations';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Avatar size="40" name={name} round={true} />
      <Text>
        {name}: {number}
      </Text>
      <Button
        onClick={() => {
          dispatch(deleteContact(id));
        }}
        children="Delete"
        type="button"
      />
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
