import axios from "axios";
import { getItem } from "./utils/storage";

const instance = axios.create();

instance.interceptors.request.use(function (config) {
  const token = getItem("authToken");

  if (token) {
    (config.headers ??= {}).Authorization = `Token ${token}`;
  }

  return config;
});

export default instance;
