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
    [signupUser.pending](state, _) {
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

    [loginUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [loginUser.rejected](state, action) {
      state.error = action.payload;
    },

    // logoutUser

    [logoutUser.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    [logoutUser.rejected](state, action) {
      state.error = action.payload;
    },

    // refreshUser

    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },

    [refreshUser.rejected](state, action) {
      state.error = action.payload;
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
