import axios from "axios";

const campersAPI = axios.create({
  baseURL: import.meta.env.VITE_CAMPERS_API_URL,
});

console.log(import.meta.env.VITE_CAMPERS_API_URL);

export const camperService = {
  api: campersAPI,
  async getAll() {
    const { data } = await campersAPI.get("campers");
    return data;
  },
  async getById(camperId) {
    const { data } = await campersAPI.get(`campers/${camperId}`);
    return data;
  },
};
