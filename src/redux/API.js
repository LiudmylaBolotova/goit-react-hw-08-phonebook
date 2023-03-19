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

export async function addContact({ name, number }) {
  const res = await axios.post(`/contacts`, { name, number });
  return res.data;
}

export async function updateContact(id, credentials) {
  const { data } = await axios.patch(`/contacts/${id}`, credentials);
  return data;
}

export async function deleteContact(contactId) {
  const res = await axios.delete(`/contacts/${contactId}`);
  return res.data;
}
