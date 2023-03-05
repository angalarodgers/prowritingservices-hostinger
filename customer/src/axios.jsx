import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://api.prowritingservice.net/api/",
  withCredentials: true,
});
