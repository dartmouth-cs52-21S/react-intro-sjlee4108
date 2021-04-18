import axios from 'axios';

const API_URL = 'http://api.giphy.com/v1/gifs/';
const API_KEY = 'wNpkqqR67F3qBpbYyKCBYSHhg3J8F9xl';

const giphySearch = (term) => {
  const params = {
    limit: 10,
    api_key: API_KEY,
    q: term,
    rating: 'pg-13',
  };

  return new Promise((resolve, reject) => {
    axios.get(`${API_URL}search`, { params })
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(`giphy api error: ${error}`);
        reject(error);
      });
  });
};

export default giphySearch;
