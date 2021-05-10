import React from "react";
import { useForm } from "react-hook-form";
import { mycss } from "../../util/css";

export default function BookAdd() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  const { INPUT_FIELD, BUTTON_BLACK } = mycss;

  return (
    <>
      <h3 className="text-3xl font-medium pt-12 pb-5">Thêm mới sản phẩm</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder={"name"}
          {...register("name", { required: true })}
          className={`${INPUT_FIELD} mt-5`}
        />
        <input
          type="text"
          placeholder={"image"}
          {...register("image", { required: true })}
          className={`${INPUT_FIELD} mt-5`}
        />
        <input
          type="text"
          placeholder={"category"}
          {...register("category", { required: true })}
          className={`${INPUT_FIELD} mt-5`}
        />
        <input
          type="text"
          placeholder={"author"}
          {...register("author", { required: true })}
          className={`${INPUT_FIELD} mt-5`}
        />
        <input
          type="text"
          placeholder={"translator"}
          {...register("translator")}
          className={`${INPUT_FIELD} mt-5`}
        />
        <input
          type="text"
          placeholder={"publisher"}
          {...register("publisher")}
          className={`${INPUT_FIELD} mt-5`}
        />
        <input
          type="number"
          placeholder={"pages"}
          {...register("pages")}
          className={`${INPUT_FIELD} mt-5`}
        />
        <input
          type="text"
          placeholder={"size"}
          {...register("size")}
          className={`${INPUT_FIELD} mt-5`}
        />
        <input
          type="text"
          placeholder={"price"}
          {...register("price", { required: true })}
          className={`${INPUT_FIELD} mt-5`}
        />
        <input
          type="number"
          placeholder={"discount"}
          {...register("discount")}
          className={`${INPUT_FIELD} mt-5`}
        />
        <input
          type="number"
          placeholder={"stock"}
          {...register("stock", { required: true })}
          className={`${INPUT_FIELD} mt-5`}
        />
        <textarea
          type="text"
          placeholder={"description"}
          {...register("description")}
          className={`${INPUT_FIELD} h-36 mt-5 py-4`}
        />

        <button type="submit" className={`${BUTTON_BLACK} mt-5 mb-16`}>
          <p className="text-white">Lưu</p>
        </button>
      </form>
    </>
  );
}
