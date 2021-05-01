import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { mycss } from "../../util/css";

export default function Signup() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data.password === data.passwordAgain) {
      console.log(data);
    } else alert("username or password error");
  };
  const { INPUT_FIELD, BUTTON_BLACK, BUTTON_WHITE } = mycss;

  return (
    <div className="w-full bg-white">
      <form className="p-8" onSubmit={handleSubmit(onSubmit)}>
        <p className="text-2xl font-medium">Đăng ký</p>
        <div className="pt-5">
          <p className="font-medium mb-2">Tên đăng nhập</p>
          <input
            type="text"
            {...register("username", { required: true })}
            className={INPUT_FIELD}
          />
        </div>

        <div className="pt-5">
          <p className="font-medium mb-2">Mật khẩu</p>
          <input
            type="password"
            {...register("password", { required: true })}
            className={INPUT_FIELD}
          />
        </div>

        <div className="pt-5">
          <p className="font-medium mb-2">Xác nhận mật khẩu</p>
          <input
            type="password"
            {...register("passwordAgain", { required: true })}
            className={INPUT_FIELD}
          />
        </div>

        <button type="submit" className={BUTTON_BLACK}>
          <p className="text-white">Đăng ký</p>
        </button>

        <Link to="/login">
          <button type="button" className={BUTTON_WHITE}>
            <p>Đăng nhập</p>
          </button>
        </Link>
      </form>
    </div>
  );
}
