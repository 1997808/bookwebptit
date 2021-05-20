import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { MyAxios } from "../util/api";
import { mycss } from "../util/css";
import { logout, emptyCart } from "../actions";
import { useDispatch } from "react-redux";

export default function UserData() {
  const { INPUT_FIELD, BUTTON_WHITE, BUTTON_BLACK } = mycss;
  const [change, setChange] = useState(true);
  let { userID } = useParams();
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
      address: "",
    },
  });
  const onSubmit = (data) => {
    changeUserData(userID, data);
  };

  useEffect(() => {
    const getUserData = async (userID) =>
      await MyAxios.get(`/user/${userID}`, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }).then((response) => {
        if (response.data.message) {
          alert(response.data.message);
        } else {
          const { name, email, phone, city, address } = response.data;
          reset({
            name: name,
            email: email,
            phone: phone,
            city: city,
            address: address,
          });
        }
      });
    getUserData(userID);
  }, [userID, reset]);

  const changeUserData = async (userID, data) =>
    await MyAxios.put(`/user/${userID}`, data, {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    }).then((response) => {
      if (response.data.message) {
        alert(response.data.message);
      }
    });

  const logoutHandler = async () =>
    await MyAxios.get("/logout").then((response) => {
      if (response.data.message) {
        alert(response.data.message);
      } else {
        dispatch(logout());
        dispatch(emptyCart());
      }
    });

  return (
    <div className="container mx-auto flex justify-center items-center py-8">
      <div className="w-2/3 xl:w-1/2">
        <div className="col-span-1 xl:col-span-2">
          <div className="w-full bg-white">
            <form onSubmit={handleSubmit(onSubmit)} className="p-8">
              <p className="text-lg font-semibold">Thông tin người dùng</p>
              <div className="pt-5">
                <p className="font-medium mb-2">Họ tên</p>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  className={`${INPUT_FIELD}`}
                  readOnly={change}
                />
              </div>

              <div className="pt-5">
                <p className="font-medium mb-2">Email</p>
                <input
                  type="text"
                  {...register("email", { required: true })}
                  className={`${INPUT_FIELD}`}
                  readOnly={change}
                />
              </div>

              <div className="pt-5">
                <p className="font-medium mb-2">Điện thoại</p>
                <input
                  type="number"
                  {...register("phone", { required: true })}
                  className={`${INPUT_FIELD}`}
                  readOnly={change}
                />
              </div>

              <div className="pt-5">
                <p className="font-medium mb-2">Thành phố</p>
                <input
                  type="text"
                  {...register("city", { required: true })}
                  className={`${INPUT_FIELD}`}
                  readOnly={change}
                />
              </div>

              <div className="pt-5">
                <p className="font-medium mb-2">Địa chỉ</p>
                <input
                  type="text"
                  {...register("address", { required: true })}
                  className={`${INPUT_FIELD}`}
                  readOnly={change}
                />
              </div>

              <button
                type={change ? "submit" : "button"}
                className={`${BUTTON_WHITE} ${change ? "mb-16" : ""}`}
                onClick={() => setChange(!change)}
              >
                <p>{change ? "Thay đổi" : "Khóa thay đổi"}</p>
              </button>

              <button
                type="submit"
                className={`${BUTTON_BLACK} mb-16 ${
                  change ? "hidden" : "block"
                }`}
                disabled={change}
              >
                <p className="text-white">Lưu dữ liệu</p>
              </button>

              <button
                type="button"
                className={BUTTON_BLACK}
                onClick={() => logoutHandler()}
              >
                <Link
                  to={"/"}
                  className="w-full h-full flex items-center justify-center"
                >
                  <p className="text-white">Đăng xuất</p>
                </Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
