import axios from "axios";
import { getItem } from "./utils/storage";

const instance = axios.create();

instance.interceptors.request.use(function (config) {
  (config.headers ??= {}).Authorization = "Token " + getItem("authToken");

  return config;
});

export default instance;
