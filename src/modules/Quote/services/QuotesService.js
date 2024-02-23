import axios from 'axios';

const API_URL = 'https://api.hgbrasil.com/finance';

export default {
  async fetchData() {
    try {
      const apiKey = 'f4097493';
      const response = await axios.get(API_URL, { params: {
      format: 'json-cors',
      key: apiKey
    }});
      console.log(response.data, 'RESPONSE');
      return response.data
    } catch (error) {
      console.error('There was an error fetching the data:', error);
      return {};
    }
  }
};