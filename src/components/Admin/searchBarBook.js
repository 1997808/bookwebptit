import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function SearchBarBook({ onSubmit }) {
  const { register, handleSubmit } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-6 gap-8 py-8"
    >
      <input
        className="col-span-3 w-full h-12 bg-gray-200 p-2 px-4 flex items-center focus:outline-none"
        placeholder="Nhập ID"
        {...register("itemID")}
      />
      <button
        className="col-span-1 w-40 h-12 flex justify-center items-center bg-black text-white"
        type="submit"
      >
        Tìm kiếm
      </button>
      <div className="col-span-1"></div>
      <Link to="addbook">
        <div className="col-span-1 w-40 h-12 flex justify-center items-center bg-black text-white">
          Thêm mới
        </div>
      </Link>
    </form>
  );
}
