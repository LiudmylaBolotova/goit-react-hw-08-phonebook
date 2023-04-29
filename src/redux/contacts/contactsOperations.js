import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../API';

// Contact

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await API.fetchContacts();
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (credentials, thunkAPI) => {
    try {
      const addContact = await API.addContact(credentials);
      return addContact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (contactId, { name: newName, number: newNumber }, thunkAPI) => {
    console.log(contactId, {
      name: newName,
      number: newNumber,
    });
    try {
      const updateContact = await API.updateContact(contactId, {
        name: newName,
        number: newNumber,
      });

      return updateContact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const deleteContact = await API.deleteContact(contactId);
      return deleteContact;
    } catch (error) {
     return thunkAPI.rejectWithValue(error.message);
    }
  }
);
