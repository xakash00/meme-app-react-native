import axios from 'axios';
import {api} from './api';

export const memeApi = count => {
  return axios.get(`https://meme-api.herokuapp.com/gimme/${count}`);
};
