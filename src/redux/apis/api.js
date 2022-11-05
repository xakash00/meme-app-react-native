import axios from 'axios';
let url = 'https://meme-api.herokuapp.com/gimme/20'

export const api = axios.create({
  baseURL: url,
  timeout: 60000,
});


