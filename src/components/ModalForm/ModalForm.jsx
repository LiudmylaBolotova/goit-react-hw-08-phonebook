import React from 'react';
import { useState } from 'react';
// import { GrFormClose } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import * as contactsOperations from '../../redux/contacts/contactsOperations';
import { getContacts } from '../../redux/selectors';
import { useSelector } from 'react-redux';
// import toast from 'react-hot-toast';
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

  const [newName, setNewName] = useState(filteredContacts.name);
  const [newNumber, setNewNumber] = useState(filteredContacts.number);

  const contactId = filteredContacts.id;

  const handleSubmitModalForm = event => {
    event.preventDefault();
dispatch(
  contactsOperations.updateContact(contactId, {
    name: newName,
    number: newNumber,
  })
);
   
console.log(contactId, {name: newName, number: newNumber});
    // onClose();
  };

  const onChangeName = event => {
    event.preventDefault();
    setNewName(event.target.value);
  };

  const onChangeNumber = event => {
    event.preventDefault();
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <StyledModalForm onSubmit={handleSubmitModalForm}>
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
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            // required
          />
        </label>
        <BtnModalForm type="submit">Update</BtnModalForm>
      </StyledModalForm>
    </div>
  );
}

export default ModalForm;
