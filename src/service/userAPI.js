import axios from 'axios'

const URL = `https://hurb-notificationapi.azurewebsites.net/api/registration`;

export const fetchAuthUser = (userEmail, password) => (
  axios.post(URL, {
    userEmail,
    password
  }, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
  }})
  .then(response => response.json())
  .then(data => data)
  .catch((error) => error)
);

export default { fetchAuthUser };