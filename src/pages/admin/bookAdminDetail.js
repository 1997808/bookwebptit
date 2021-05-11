import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { bookData } from "../../assets/book";
import { mycss } from "../../util/css";

export default function BookAdminDetail() {
  const [change, setChange] = useState(true);
  let { id } = useParams();
  const data = bookData.filter((items) => items.id === id)[0];
  const {
    image,
    name,
    author,
    translator,
    description,
    pages,
    publisher,
    size,
    category,
  } = data;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  const { INPUT_FIELD, BUTTON_BLACK, BUTTON_WHITE } = mycss;

  return (
    <>
      <h3 className="text-3xl font-medium pt-12 pb-5">Thông tin sản phẩm</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder={"name"}
          defaultValue={name}
          {...register("name", { required: true })}
          className={`${INPUT_FIELD} mt-5`}
          readOnly={change}
        />
        <input
          type="text"
          placeholder={"image"}
          defaultValue={image}
          {...register("image", { required: true })}
          className={`${INPUT_FIELD} mt-5`}
          readOnly={change}
        />
        <input
          type="text"
          placeholder={"category"}
          defaultValue={category}
          {...register("category", { required: true })}
          className={`${INPUT_FIELD} mt-5`}
          readOnly={change}
        />
        <input
          type="text"
          placeholder={"author"}
          defaultValue={author}
          {...register("author", { required: true })}
          className={`${INPUT_FIELD} mt-5`}
          readOnly={change}
        />
        <input
          type="text"
          placeholder={"translator"}
          defaultValue={translator}
          {...register("translator")}
          className={`${INPUT_FIELD} mt-5`}
          readOnly={change}
        />
        <input
          type="text"
          placeholder={"publisher"}
          defaultValue={publisher}
          {...register("publisher")}
          className={`${INPUT_FIELD} mt-5`}
          readOnly={change}
        />
        <input
          type="number"
          placeholder={"pages"}
          defaultValue={pages}
          {...register("pages")}
          className={`${INPUT_FIELD} mt-5`}
          readOnly={change}
        />
        <input
          type="text"
          placeholder={"size"}
          defaultValue={size}
          {...register("size")}
          className={`${INPUT_FIELD} mt-5`}
          readOnly={change}
        />
        <input
          type="number"
          placeholder={"price"}
          {...register("price", { required: true })}
          className={`${INPUT_FIELD} mt-5`}
          readOnly={change}
        />
        <input
          type="number"
          placeholder={"discount"}
          {...register("discount")}
          className={`${INPUT_FIELD} mt-5`}
          readOnly={change}
        />
        <input
          type="number"
          placeholder={"stock"}
          {...register("stock")}
          className={`${INPUT_FIELD} mt-5`}
          readOnly={change}
        />
        <textarea
          type="text"
          placeholder={"description"}
          defaultValue={description}
          {...register("description")}
          className={`${INPUT_FIELD} h-36 mt-5 py-4`}
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
