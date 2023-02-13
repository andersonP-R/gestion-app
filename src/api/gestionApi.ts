import axios from "axios";

const gestionApi = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

export default gestionApi;
