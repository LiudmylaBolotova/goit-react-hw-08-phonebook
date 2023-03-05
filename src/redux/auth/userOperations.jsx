import * as contactsAPI from '../contacts/contactsAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

// User

export const signupUser = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const signupUser = await contactsAPI.signupUser();
      contactsAPI.setAuthHeader(signupUser.data.token);
      return signupUser.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const loginUser = await contactsAPI.loginUser();
      contactsAPI.setAuthHeader(loginUser.data.token);
      return loginUser.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await contactsAPI.logoutUser();
      contactsAPI.clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const currentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      contactsAPI.setAuthHeader(persistedToken);
      const currentUser = await contactsAPI.currentUser();
      return currentUser.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
