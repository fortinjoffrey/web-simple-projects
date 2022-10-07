import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (endpoint) => {
  const { data } = await axios.get(`${BASE_URL}/${endpoint}`, options);

  // function delay(time) {
  //   return new Promise(resolve => setTimeout(resolve, time));
  // }
  
  // await delay(5000);

  return data;
};
