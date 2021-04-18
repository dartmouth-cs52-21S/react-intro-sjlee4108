import axios from 'axios';

const API_URL = 'https://official-joke-api.appspot.com/random_joke';

const jokeSearch = () => new Promise((resolve, reject) => {
  axios.get(`${API_URL}`, {})
    .then((response) => {
      resolve(response.data);
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(`joke api error: ${error}`);
      reject(error);
    });
});

export default jokeSearch;
