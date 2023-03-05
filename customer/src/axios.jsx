import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://89.116.212.238:8800/api/",

  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});
