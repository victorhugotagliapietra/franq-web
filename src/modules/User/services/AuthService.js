import axios from 'axios';

const API_URL = 'http://localhost:3000';

export default {
  async register(user) {
    try {
      const response = await axios.post(`${API_URL}/register`, user);
      console.log('Registration successful', response.data);

      return response.data;
    } catch (error) {
      console.error('There was an error fetching the data:', error);
      return {};
    }
  },
  async login(user) {
    try {
      const response = await axios.post(`${API_URL}/login`, user);
      console.log('login successful', response.data);

      return response.data;
    } catch (error) {
      console.error('There was an error fetching the data:', error);
      return {};
    }
  }
};
