import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../API';
import axios from 'axios';
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

// export const updateContact = createAsyncThunk(
//   'contacts/updateContact',
//   async(contactId, credentials) => {
//     try {
//       const { responce } = await axios.patch(`/contacts/${contactId}`, credentials );
//       return responce;
//     } catch (error) {
//       return (error.message);
//     }
//   }
// );

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (id, credentials) => {
    try {
      const res = await API.updateContact(id, credentials);
      return res.data;
    } catch (error) {
      return error.message;
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
