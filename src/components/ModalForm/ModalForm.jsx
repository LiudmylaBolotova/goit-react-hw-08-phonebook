import propTypes from 'prop-types';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as contactsOperations from '../../redux/contacts/contactsOperations';
import { getContacts } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import {
  StyledModalForm,
  InputModalForm,
  TitleModalForm,
  BtnModalForm,
} from './ModalForm.styled';

function ModalForm({ activeContact, onClose }) {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const filteredContacts = contacts.find(
    contact => contact.id === activeContact
  );

  const [name, setName] = useState(filteredContacts.name);
  const [number, setNumber] = useState(filteredContacts.number);

  const contactId = filteredContacts.id;

  const handleSubmitModalForm = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (!name || !number) {
      return toast.error(`You can't store an empty string!`);
    }
    dispatch(contactsOperations.updateContact({ contactId, name, number }));

    onClose();
  };

  const onChangeName = event => {
    event.preventDefault();
    setName(event.target.value);
  };

  const onChangeNumber = event => {
    event.preventDefault();
    setNumber(event.target.value);
  };

  return (
    <StyledModalForm onSubmit={handleSubmitModalForm}>
      <TitleModalForm>New name</TitleModalForm>
      <label>
        <InputModalForm
          type="text"
          name="name"
          value={name}
          onChange={onChangeName}
        />
      </label>
      <TitleModalForm>New number</TitleModalForm>
      <label>
        <InputModalForm
          type="tel"
          name="number"
          value={number}
          onChange={onChangeNumber}
        />
      </label>
      <BtnModalForm type="submit">Update</BtnModalForm>
    </StyledModalForm>
  );
}

export default ModalForm;

ModalForm.propTypes = {
  onClose: propTypes.func.isRequired,
  activeContact: propTypes.string.isRequired,
};
