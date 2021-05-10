import React from "react";
import { useForm } from "react-hook-form";
import { mycss } from "../../util/css";

export default function CategoryAdd() {
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
      <h3 className="text-3xl font-medium pt-12 pb-5">Thêm danh mục</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder={"name"}
          {...register("name", { required: true })}
          className={`${INPUT_FIELD} mt-5`}
        />

        <button type="submit" className={`${BUTTON_BLACK} mt-5 mb-16`}>
          <p className="text-white">Lưu</p>
        </button>
      </form>
    </>
  );
}
