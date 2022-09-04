import axios from 'axios'

const URL = `https://hurb-notificationapi.azurewebsites.net`;

export const fetchAuthUser = (userEmail, password) => (
  axios.post(`${URL}/login-validate`, {
    userEmail,
    password
  }, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
  }})
  .then(response => response)
  .catch((error) => error)
);

export const fetchRegisterUser = (hurbname, email, password) => (
  axios.post(`${URL}/new-hurb`, {
    hurbname,
    email,
    password
  }, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
  }})
  .then(response => response)
  .catch((error) => error)
);

export default { fetchAuthUser, fetchRegisterUser };