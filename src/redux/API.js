import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Utils

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// Contact

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function addContact(credentials) {
  const res = await axios.post(`/contacts`, credentials);
  return res.data;
}

export async function updateContact(contactId, { name: newName, number: newNumber }) {
  const res = await axios.patch(`/contacts/${contactId}`, {
    name: newName,
    number: newNumber,
  });
  return res.data;
}

export async function deleteContact(contactId) {
  const res = await axios.delete(`/contacts/${contactId}`);
  return res.data;
}
