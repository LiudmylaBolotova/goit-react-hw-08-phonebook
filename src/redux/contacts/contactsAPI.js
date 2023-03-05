import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Utils

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// Contact

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function addContact({ name, number }) {
  const res = await axios.post(`/contacts`, { name, number });
  return res.data;
}

export async function updateContact(contactId) {
  const { data } = await axios.patch(`/contacts/{contactId}`);
  return data;
}

export async function deleteContact(contactId) {
  const res = await axios.delete(`/contacts/${contactId}`);
  return res.data;
}

// User

export async function signupUser({name, email, password}) {
  const res = await axios.post(`/users/signup`);
  return res.data;
}

export async function loginUser({ email, password }) {
  const res = await axios.post(`/users/login`);
  return res.data;
}

export async function logoutUser() {
  const res = await axios.post(`/users/logout`);
  return res.data;
}

export async function currentUser() {
  const res = await axios.get(`/users/current`);
  return res.data;
}