import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import {
  signupUser,
  loginUser,
  logoutUser,
  refreshUser,
} from './userOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    // signUser
    [signupUser.pending](state, action) {
      state.isRefreshing = true;
    },

    [signupUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [signupUser.rejected](state, action) {
      state.error = action.payload;
    },

    // loginUser
    [loginUser.pending](state, action) {
      state.isRefreshing = true;
    },

    [loginUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [loginUser.rejected](state) {
      state.isRefreshing = false;
    },

    // logoutUser
    [logoutUser.pending](state, action) {
      state.isRefreshing = true;
    },

    [logoutUser.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    [logoutUser.rejected](state) {
      state.isRefreshing = false;
    },

    // refreshUser
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },

    [refreshUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },

    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

export const persistedUsersReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
