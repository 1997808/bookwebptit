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

// const getAllData = async () =>
// await MyAxios.get("/getalldata", {
//   headers: {
//     "x-access-token": localStorage.getItem("token"),
//   },
// }).then((response) => {
//   console.log(response.data);
//   if (response.data.message) {
//     alert(response.data.message);
//   }
// });
