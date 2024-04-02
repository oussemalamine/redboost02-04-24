import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://redboostbeta.onrender.com",
  withCredentials: true, // Important for sessions
});

export default axiosInstance;
