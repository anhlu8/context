import axios from "axios";

export default {
  getData: () => {
    return axios.get("http://localhost:3001/data");
  },

  getFormData: () => {
    return axios.get("http://localhost:3002/data");
  }
};
