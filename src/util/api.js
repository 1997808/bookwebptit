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

// {
//   categoryID: data.categoryID,
//   name: data.name,
//   image: data.image,
//   author: data.author,
//   translator: data.translator,
//   publisher: data.publisher,
//   pages: data.pages,
//   size: data.size,
//   price: data.price,
//   discount: data.discount,
//   stock: data.stock,
//   description: data.description,
// }
