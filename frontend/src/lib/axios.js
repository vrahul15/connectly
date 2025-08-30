// import axios from "axios";

// // const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";
// const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:<PORT>/api" : "/api";
// export const axiosInstance = axios.create({
//   baseURL: BASE_URL,
//   withCredentials: true, // send cookies with the request
// });


import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5001/api" // Ensure this matches your backend URL
    : "/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // Send cookies with the request
});