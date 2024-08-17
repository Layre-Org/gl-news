import { getTokenLocalStorage } from "@/context/AuthContext/util";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://gl-news.onrender.com/",
});

api.interceptors.request.use(
  (config) => {
    const token = getTokenLocalStorage();

    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
