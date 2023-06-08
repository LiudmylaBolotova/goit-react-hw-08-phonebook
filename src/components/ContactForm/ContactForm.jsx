import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsOperations from '../../redux/contacts/contactsOperations';
import { getContacts } from '../../redux/selectors';
import toast from 'react-hot-toast';
import { BtnForm, Form, InputForm, TitleForm } from './ContactForm.styled';

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return toast.error(`${name} is already on the list!`);
    }

    if (
      contacts.find(
        contact => contact.number.toLowerCase() === number.toLowerCase()
      )
    ) {
      return toast.error(`${number} is already on the list!`);
    }

    if (!name && !number) {
      return toast.error('Enter name and number!');
    }
    dispatch(contactsOperations.addContact({ name, number }));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TitleForm>Name</TitleForm>
      <label>
        <InputForm type="text" name="name" />
      </label>
      <TitleForm>Number</TitleForm>
      <label>
        <InputForm type="tel" name="number" />
      </label>
      <BtnForm type="submit">Add contact</BtnForm>
    </Form>
  );
}

export default ContactForm;
