import axios from "axios";

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Expose-Headers": "*"
  }
});

export const authClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  withCredentials: true
});
