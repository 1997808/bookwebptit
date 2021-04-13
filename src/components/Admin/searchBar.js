import React from "react";
import { useForm } from "react-hook-form";

export default function SearchBar() {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-6 gap-8 py-8">
      {/* register your input into the hook by invoking the "register" function */}
      <input className="col-span-3 w-full h-12 bg-gray-200 p-2 px-4 flex items-center focus:outline-none" placeholder="Nhập ID" {...register("example")} />
      <button className="col-span-1 w-40 h-12 flex justify-center items-center bg-black text-white" type="submit">Tìm kiếm</button>
    </form>
  );
}