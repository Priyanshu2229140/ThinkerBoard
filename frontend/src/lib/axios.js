import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api", // adjust to your backend URL
  withCredentials: true,
});

export default api; // ✅ this is required for "import api from ..."
