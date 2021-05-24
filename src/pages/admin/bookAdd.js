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
  categoryID: yup.number().integer().required(),
  size: yup.string().trim(),
  price: yup.number().integer().positive(),
  discount: yup.number().integer(),
  // stock: yup.number().integer(),
  description: yup.string().trim(),
});
export default function BookAdd() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
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
      } else
        reset({
          categoryID: "",
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
        });
    });
    return addBook;
  };

  return (
    <>
      <h3 className="text-3xl font-medium pt-12 pb-5">Thêm mới sản phẩm</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="pt-6">
          <p className="font-medium mb-2">Tên</p>
          <input
            type="text"
            {...register("name", { required: true })}
            className={`${INPUT_FIELD} ${errors.name ? "border-red-300" : ""}`}
          />
        </div>

        <div className="pt-6">
          <p className="font-medium mb-2">Ảnh</p>
          <input
            type="text"
            {...register("image", { required: true })}
            className={`${INPUT_FIELD} ${errors.image ? "border-red-300" : ""}`}
          />
        </div>

        <div className="pt-6">
          <p className="font-medium mb-2">Danh Mục</p>
          <select
            {...register("categoryID", { required: true })}
            className={`${INPUT_FIELD}`}
            defaultValue=""
          >
            <option value="" disabled hidden>
              {""}
            </option>

            {categoryData.map((items) => (
              <option key={items.categoryID} value={items.categoryID}>
                {items.name}
              </option>
            ))}
          </select>
        </div>

        <div className="pt-6">
          <p className="font-medium mb-2">Tác Giả</p>
          <input
            type="text"
            {...register("author", { required: true })}
            className={`${INPUT_FIELD} ${
              errors.author ? "border-red-300" : ""
            }`}
          />
        </div>

        <div className="pt-6">
          <p className="font-medium mb-2">Dịch Giả</p>
          <input
            type="text"
            {...register("translator", { required: true })}
            className={`${INPUT_FIELD} ${
              errors.translator ? "border-red-300" : ""
            }`}
          />
        </div>

        <div className="pt-6">
          <p className="font-medium mb-2">NXB</p>
          <input
            type="text"
            {...register("publisher", { required: true })}
            className={`${INPUT_FIELD} ${
              errors.publisher ? "border-red-300" : ""
            }`}
          />
        </div>

        <div className="pt-6">
          <p className="font-medium mb-2">Số Trang</p>
          <input
            type="number"
            {...register("pages", { required: true })}
            className={`${INPUT_FIELD} ${errors.pages ? "border-red-300" : ""}`}
          />
        </div>

        <div className="pt-6">
          <p className="font-medium mb-2">Kích Cỡ</p>
          <input
            type="text"
            {...register("size", { required: true })}
            className={`${INPUT_FIELD} ${errors.size ? "border-red-300" : ""}`}
          />
        </div>

        <div className="pt-6">
          <p className="font-medium mb-2">Giá</p>
          <input
            type="number"
            {...register("price", { required: true })}
            className={`${INPUT_FIELD} ${errors.price ? "border-red-300" : ""}`}
          />
        </div>

        <div className="pt-6">
          <p className="font-medium mb-2">Giảm Giá</p>
          <input
            type="number"
            {...register("discount", { required: true })}
            className={`${INPUT_FIELD} ${
              errors.discount ? "border-red-300" : ""
            }`}
          />
        </div>

        <div className="pt-6">
          <p className="font-medium mb-2">Miêu Tả</p>
          <textarea
            type="text"
            {...register("description")}
            className={`${INPUT_FIELD} h-36 py-4 ${
              errors.description ? "border-red-300" : ""
            }`}
          />
        </div>

        <button type="submit" className={`${BUTTON_BLACK} mt-5 mb-16`}>
          <p className="text-white">Lưu</p>
        </button>
      </form>
    </>
  );
}
