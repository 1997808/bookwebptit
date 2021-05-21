import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { mycss } from "../../util/css";
import { MyAxios } from "../../util/api";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().trim().required(),
  author: yup.string().trim().required(),
  translator: yup.string().trim(),
  publisher: yup.string().trim(),
  category: yup.string().trim(),
  size: yup.string().trim(),
  price: yup.number().integer().positive(),
  discount: yup.number().integer(),
  stock: yup.number().integer().positive(),
  description: yup.string().trim(),
});
export default function BookAdd() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const { INPUT_FIELD, BUTTON_BLACK } = mycss;

  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    const getAllCategory = async () => {
      await MyAxios.get("/admin/category", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }).then((response) => {
        if (response.data.err) {
          alert(response.data.err);
        } else {
          setCategoryData(response.data.result);
        }
      });
    };
    getAllCategory();
  }, []);

  const onSubmit = async (data) => {
    const addBook = await MyAxios.post("/admin/book", data, {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    }).then((response) => {
      if (response.data.message) {
        alert(response.data.message);
      }
    });
    return addBook;
  };

  return (
    <>
      <h3 className="text-3xl font-medium pt-12 pb-5">Thêm mới sản phẩm</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder={"name"}
          {...register("name", { required: true })}
          className={`${INPUT_FIELD} mt-5 ${
            errors.name ? "border-red-300" : ""
          }`}
        />
        <input
          type="text"
          placeholder={"image"}
          {...register("image", { required: true })}
          className={`${INPUT_FIELD} mt-5 ${
            errors.image ? "border-red-300" : ""
          }`}
        />
        <select
          {...register("categoryID", { required: true })}
          className={`${INPUT_FIELD} mt-5`}
          defaultValue=""
        >
          <option value="" disabled hidden>
            {"category"}
          </option>

          {categoryData.map((items) => (
            <option key={items.categoryID} value={items.categoryID}>
              {items.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder={"author"}
          {...register("author", { required: true })}
          className={`${INPUT_FIELD} mt-5 ${
            errors.author ? "border-red-300" : ""
          }`}
        />
        <input
          type="text"
          placeholder={"translator"}
          {...register("translator")}
          className={`${INPUT_FIELD} mt-5 ${
            errors.translator ? "border-red-300" : ""
          }`}
        />
        <input
          type="text"
          placeholder={"publisher"}
          {...register("publisher")}
          className={`${INPUT_FIELD} mt-5 ${
            errors.publisher ? "border-red-300" : ""
          }`}
        />
        <input
          type="number"
          placeholder={"pages"}
          {...register("pages")}
          className={`${INPUT_FIELD} mt-5 ${
            errors.pages ? "border-red-300" : ""
          }`}
        />
        <input
          type="text"
          placeholder={"size"}
          {...register("size")}
          className={`${INPUT_FIELD} mt-5 ${
            errors.size ? "border-red-300" : ""
          }`}
        />
        <input
          type="number"
          placeholder={"price"}
          {...register("price", { required: true })}
          className={`${INPUT_FIELD} mt-5 ${
            errors.price ? "border-red-300" : ""
          }`}
        />
        <input
          type="number"
          placeholder={"discount"}
          {...register("discount")}
          className={`${INPUT_FIELD} mt-5 ${
            errors.discount ? "border-red-300" : ""
          }`}
        />
        <input
          type="number"
          placeholder={"stock"}
          {...register("stock")}
          className={`${INPUT_FIELD} mt-5 ${
            errors.stock ? "border-red-300" : ""
          }`}
        />
        <textarea
          type="text"
          placeholder={"description"}
          {...register("description")}
          className={`${INPUT_FIELD} h-36 mt-5 py-4 ${
            errors.description ? "border-red-300" : ""
          }`}
        />

        <button type="submit" className={`${BUTTON_BLACK} mt-5 mb-16`}>
          <p className="text-white">Lưu</p>
        </button>
      </form>
    </>
  );
}
