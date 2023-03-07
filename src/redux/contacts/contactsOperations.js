import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../API';

// Contact

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await API.fetchContacts();
      return contacts;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const addContact = await API.addContact({ name, number });
      return addContact;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const updateContact = await API.updateContact(contactId);
      API.setAuthHeader(updateContact.data.token);
      return updateContact;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const deleteContact = await API.deleteContact(contactId);
      return deleteContact;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
