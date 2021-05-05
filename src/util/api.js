import Axios from "axios";

export const MyAxios = Axios.create({
  withCredentials: true,
  baseURL: "http://localhost:3001",
});
