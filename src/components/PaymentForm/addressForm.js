import React from "react";
import { useForm } from "react-hook-form";
import { mycss } from "../../util/css";

export default function AddressForm() {
  const { register } = useForm();
  const { INPUT_FIELD } = mycss;
  let name, phone, city, address, note;

  return (
    <div className="w-full bg-white">
      <div className="p-8 border-b border-solid border-gray-200">
        <p className="text-lg font-semibold">Địa chỉ giao hàng</p>
        <div className="pt-5">
          <p className="font-medium mb-2">Họ tên</p>
          <input
            type="text"
            placeholder={"name"}
            defaultValue={name ? name : ""}
            {...register("name", { required: true })}
            className={`${INPUT_FIELD}`}
          />
        </div>

        <div className="pt-5">
          <p className="font-medium mb-2">Điện thoại</p>
          <input
            type="number"
            placeholder={"phone"}
            defaultValue={phone ? phone : ""}
            {...register("phone", { required: true })}
            className={`${INPUT_FIELD}`}
          />
        </div>

        <div className="pt-5">
          <p className="font-medium mb-2">Thành phố</p>
          <input
            type="text"
            placeholder={"city"}
            defaultValue={city ? city : ""}
            {...register("city", { required: true })}
            className={`${INPUT_FIELD}`}
          />
        </div>

        <div className="pt-5">
          <p className="font-medium mb-2">Địa chỉ</p>
          <input
            type="text"
            placeholder={"address"}
            defaultValue={address ? address : ""}
            {...register("address", { required: true })}
            className={`${INPUT_FIELD}`}
          />
        </div>

        <p className="text-lg font-semibold pt-10">Thông tin bổ sung</p>
        <div className="pt-5">
          <p className="font-medium mb-2">Ghi chú</p>
          <textarea
            type="text"
            rows={6}
            placeholder={"note"}
            defaultValue={note ? note : ""}
            {...register("note", { required: true })}
            className="w-full focus:outline-none border border-gray-200 p-4"
          />
        </div>
      </div>
    </div>
  );
}
