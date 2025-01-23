import axios from 'axios';

const corsProxy = 'https://cors-anywhere.herokuapp.com/';
const clanTag = '#2G8UCRVPP';

const api = axios.create({
  baseURL: 'http://localhost:5000/',
});

export const getClanDetails = () => {
  return api.get(`/clan/${encodeURIComponent(clanTag)}`);
};