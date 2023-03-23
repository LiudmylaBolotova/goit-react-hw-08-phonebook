import React from 'react';
// import { useState, useRef } from 'react';
// import { GrFormClose } from 'react-icons/gr';
import {  useDispatch } from 'react-redux';
import * as contactsOperations from '../../redux/contacts/contactsOperations';
// import { getContacts } from '../../redux/selectors';
// import { useSelector } from 'react-redux';
// import toast from 'react-hot-toast';
import {
  StyledModalForm,
  InputModalForm,
  TitleModalForm,
  BtnModalForm,
} from './ModalForm.styled';

function ModalForm({ onClose, activeContact }) {
  // const dispatch = useDispatch();

  // const contactId = useRef(activeContact.id);
  

  // console.log(contactId);

  // const [newName, setNewName] = useState(activeContact.name);
  // const [newNumber, setNewNumber] = useState(activeContact.number);
  // const [newId, setNewId] = useState(id);

  // const makeId = (id) => {
  //   setNewId(id);
  // }
  // console.log(newName);
  // console.log(newNumber);
  // console.log(contactId);


  // const handleSubmitModalForm = event => {
  //   event.preventDefault();
  //   const form = event.target;
  //   // const newName = form.elements.name.value;
  //   // const newNumber = form.elements.number.value;

  //   // const credentials = {
  //   //   name: newName,
  //   //   number: newNumber,
     
  //   // };

  //   // const credentials = JSON.stringify(user);

  //   dispatch(contactsOperations.updateContact( contactId, {newName, newNumber }));
  //   form.reset();
  // };

  // const onChangeName = event => {
  //   event.preventDefault();
  //   setNewName(event.target.value);
    
  // };

  // const onChangeNumber = event => {
  //   event.preventDefault();
  //   setNewNumber(event.target.value);
   
  // };

  const handleButtonClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };


const dispatch = useDispatch();

// const contacts = useSelector(getContacts);

  const onSubmitForm = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
   

    dispatch(contactsOperations.updateContact(activeContact.id, {name, number }));
  };

  return (
    <div>
      <StyledModalForm onSubmit={onSubmitForm}>
        <button onClick={handleButtonClick}>Close</button>
        <TitleModalForm>New name</TitleModalForm>
        <label>
          <InputModalForm
            type="text"
            name="name"
            // value={newName}
            // onChange={onChangeName}
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // required
          />
        </label>
        <TitleModalForm>New number</TitleModalForm>
        <label>
          <InputModalForm
            type="tel"
            name="number"
            // value={newNumber}
            // onChange={onChangeNumber}
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
