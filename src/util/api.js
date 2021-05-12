import Axios from "axios";

export const MyAxios = Axios.create({
  withCredentials: true,
  baseURL: "http://localhost:3001",
});

export const MyToken = {
  headers: {
    "x-access-token": localStorage.getItem("token"),
  },
};
