import React from 'react';
import { useState, useEffect } from 'react';
import { act } from 'react-dom/test-utils';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsOperations from '../../redux/contacts/contactsOperations';
import { getContacts } from '../../redux/selectors';

// import toast from 'react-hot-toast';
import {
  StyledModalForm,
  InputModalForm,
  TitleModalForm,
  BtnModalForm,
} from './ModalForm.styled';

function ModalForm({ onClose, activeContact }) {
  const dispatch = useDispatch();

  const id = activeContact.id;
  const name = activeContact.name;
  const number = activeContact.number;

  console.log(activeContact.id);

  const [newName, setNewName] = useState(name);
  const [newNumber, setNewNumber] = useState(number);
  const [newId, setNewId] = useState(id);

  const makeId = (id) => {
    setNewId(id);
  }

  const handleSubmitModalForm = event => {
    event.preventDefault();
    const form = event.target;
    // const newName = form.elements.name.value;
    // const newNumber = form.elements.number.value;

    const credentials = {
      name: newName,
      number: newNumber,
    };

    // const credentials = JSON.stringify(user);

    dispatch(contactsOperations.updateContact(id, { credentials }));
    form.reset();
  };

  const onChangeName = event => {
    event.preventDefault();
    setNewName(event.target.value);
    makeId();
  };

  const onChangeNumber = event => {
    event.preventDefault();
    setNewNumber(event.target.value);
    makeId(id);
  };

  const handleButtonClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div>
      <StyledModalForm onSubmit={handleSubmitModalForm}>
        <button onClick={handleButtonClick}>Close</button>
        <TitleModalForm>New name</TitleModalForm>
        <label>
          <InputModalForm
            type="text"
            name="newName"
            value={newName}
            onChange={onChangeName}
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // required
          />
        </label>
        <TitleModalForm>New number</TitleModalForm>
        <label>
          <InputModalForm
            type="tel"
            name="newNumber"
            value={newNumber}
            onChange={onChangeNumber}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <BtnModalForm type="submit">Update</BtnModalForm>
      </StyledModalForm>
    </div>
  );
}

export default ModalForm;
