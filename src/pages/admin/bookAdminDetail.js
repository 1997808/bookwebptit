import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

export default function BookAdminDetail() {
  let { id } = useParams();
  const { INPUT_FIELD, BUTTON_BLACK, BUTTON_WHITE } = mycss;
  const [change, setChange] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      category: "",
      image: "",
      name: "",
      author: "",
      translator: "",
      publisher: "",
      pages: 0,
      size: "",
      price: 0,
      discount: 0,
      stock: 0,
      description: "",
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const getBook = async (id) => {
      await MyAxios.get(`/admin/book/${id}`, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }).then((response) => {
        if (response.data.err) {
          alert(response.data.err);
        } else {
          reset({ ...response.data.result[0] });
        }
      });
    };
    getBook(id);
  }, [id, reset]);

  const onSubmit = (data) => {
    const changeBookData = async (id, data) =>
      await MyAxios.put(`/admin/book/${id}`, data, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }).then((response) => {
        if (response.data.message) {
          alert(response.data.message);
        }
      });
    changeBookData(id, data);
  };

  return (
    <>
      <h3 className="text-3xl font-medium pt-12 pb-5">Thông tin sản phẩm</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder={"name"}
          {...register("name", { required: true })}
          className={`${INPUT_FIELD} mt-5 ${
            errors.name ? "border-red-300" : ""
          }`}
          readOnly={change}
        />
        <input
          type="text"
          placeholder={"image"}
          {...register("image", { required: true })}
          className={`${INPUT_FIELD} mt-5 ${
            errors.image ? "border-red-300" : ""
          }`}
          readOnly={change}
        />
        <input
          type="text"
          placeholder={"category"}
          {...register("categoryID", { required: true })}
          className={`${INPUT_FIELD} mt-5 ${
            errors.category ? "border-red-300" : ""
          }`}
          readOnly={change}
        />
        <input
          type="text"
          placeholder={"author"}
          {...register("author", { required: true })}
          className={`${INPUT_FIELD} mt-5 ${
            errors.author ? "border-red-300" : ""
          }`}
          readOnly={change}
        />
        <input
          type="text"
          placeholder={"translator"}
          {...register("translator")}
          className={`${INPUT_FIELD} mt-5 ${
            errors.translator ? "border-red-300" : ""
          }`}
          readOnly={change}
        />
        <input
          type="text"
          placeholder={"publisher"}
          {...register("publisher")}
          className={`${INPUT_FIELD} mt-5 ${
            errors.publisher ? "border-red-300" : ""
          }`}
          readOnly={change}
        />
        <input
          type="number"
          placeholder={"pages"}
          {...register("pages")}
          className={`${INPUT_FIELD} mt-5 ${
            errors.pages ? "border-red-300" : ""
          }`}
          readOnly={change}
        />
        <input
          type="text"
          placeholder={"size"}
          {...register("size")}
          className={`${INPUT_FIELD} mt-5 ${
            errors.size ? "border-red-300" : ""
          }`}
          readOnly={change}
        />
        <input
          type="number"
          placeholder={"price"}
          {...register("price", { required: true })}
          className={`${INPUT_FIELD} mt-5 ${
            errors.price ? "border-red-300" : ""
          }`}
          readOnly={change}
        />
        <input
          type="number"
          placeholder={"discount"}
          {...register("discount")}
          className={`${INPUT_FIELD} mt-5 ${
            errors.discount ? "border-red-300" : ""
          }`}
          readOnly={change}
        />
        <input
          type="number"
          placeholder={"stock"}
          {...register("stock")}
          className={`${INPUT_FIELD} mt-5 ${
            errors.stock ? "border-red-300" : ""
          }`}
          readOnly={change}
        />
        <textarea
          type="text"
          placeholder={"description"}
          {...register("description")}
          className={`${INPUT_FIELD} h-36 mt-5 py-4 ${
            errors.description ? "border-red-300" : ""
          }`}
          readOnly={change}
        />

        <button
          type="button"
          className={`${BUTTON_WHITE} ${change ? "mb-16" : ""}`}
          onClick={() => setChange(!change)}
        >
          <p>{change ? "Thay đổi" : "Khóa thay đổi"}</p>
        </button>

        <button
          type="submit"
          className={`${BUTTON_BLACK} mb-16 ${change ? "hidden" : "block"}`}
          disabled={change}
        >
          <p className="text-white">Lưu dữ liệu</p>
        </button>
      </form>
    </>
  );
}
