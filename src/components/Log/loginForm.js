import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { mycss } from "../../util/css";
import { MyAxios } from "../../util/api";
import { adminAuth, userAuth, setUserID } from "../../actions";
import { useDispatch } from "react-redux";

export default function Login() {
  const { register, handleSubmit } = useForm();
  let history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const loginHandler = await MyAxios.post("/login", {
      username: data.username,
      password: data.password,
    }).then((response) => {
      if (response.data.message) {
        alert(response.data.message);
      } else {
        if (response.data.role === "user") {
          dispatch(setUserID(response.data.accountID));
          dispatch(userAuth());
          setTimeout(() => history.push("/"), 1000);
        } else if (response.data.role === "admin") {
          dispatch(adminAuth());
          setTimeout(() => history.push("/admin"), 1000);
        }
      }
    });

    return loginHandler;
  };
  const { INPUT_FIELD, BUTTON_BLACK, BUTTON_WHITE } = mycss;

  return (
    <div className="w-full bg-white">
      <form className="p-8" onSubmit={handleSubmit(onSubmit)}>
        <p className="text-2xl font-medium">Đăng nhập</p>
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

        <div className="pt-5 flex justify-between items-center w-full">
          <div className="flex items-center">
            <input type="checkbox" {...register("saveLogin")} />
            <p className="text-sm text-gray-500 pl-2">Ghi nhớ đăng nhập</p>
          </div>
          <p className="text-sm font-medium text-right">Quên mật khẩu?</p>
        </div>

        <button type="submit" className={BUTTON_BLACK}>
          <p className="text-white">Đăng nhập</p>
        </button>

        <Link to="/signup">
          <button type="button" className={BUTTON_WHITE}>
            <p>Đăng kí</p>
          </button>
        </Link>
      </form>
    </div>
  );
}
