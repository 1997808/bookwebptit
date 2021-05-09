import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { MyAxios } from "../util/api";
import { mycss } from "../util/css";
import { logout } from "../actions";
import { useDispatch } from "react-redux";

export default function UserData() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const { INPUT_FIELD, BUTTON_WHITE, BUTTON_BLACK } = mycss;
  const [change, setChange] = useState(true);
  let { userID } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserData = async (userID) =>
      await MyAxios.get(`/getuserdata/${userID}`, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }).then((response) => {
        console.log(response.data);
        if (response.data.message) {
          alert(response.data.message);
        }
      });
    getUserData(userID);
  }, [userID]);

  const logoutHandler = async () =>
    await MyAxios.get("/logout").then((response) => {
      if (response.data.message) {
        alert(response.data.message);
      } else {
        dispatch(logout());
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

              <button type="submit" className={BUTTON_BLACK} disabled={change}>
                <p className="text-white">Lưu</p>
              </button>

              <button
                type="button"
                className={`${BUTTON_WHITE} mb-16`}
                onClick={() => setChange(!change)}
              >
                <p>{change ? "Thay đổi" : "Khóa dữ liệu"}</p>
              </button>

              <button
                type="button"
                className={BUTTON_BLACK}
                onClick={() => logoutHandler()}
              >
                <p className="text-white">Đăng xuất</p>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
