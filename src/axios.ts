import axios from "axios";
import { getItem } from "./utils/storage";

const instance = axios.create();

const isAuthenticated = getItem("isAuthenticated");

if (isAuthenticated) {
  instance.defaults.headers.common["Authorization"] =
    "Token " + getItem("authToken");
}

export default instance;
