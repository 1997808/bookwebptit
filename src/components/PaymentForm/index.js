import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { mycss } from "../../util/css";
import { MyAxios } from "../../util/api";
import { Link } from "react-router-dom";
import { CartSum, vndFormatter } from "../../util/cartSum";
import { useSelector } from "react-redux";

const BookItem = ({ name, qty, price }) => {
  return (
    <div className="text-sm pt-5 flex justify-between">
      <p className="w-6/12 truncate-3-lines">{name}</p>
      <p className="w-2/12 text-center">x {qty}</p>
      <p className="w-4/12 text-right">{vndFormatter.format(price)}</p>
    </div>
  );
};

export default function PaymentForm({ data }) {
  const { register, handleSubmit, reset } = useForm();
  const { INPUT_FIELD } = mycss;
  let total = vndFormatter.format(CartSum(data));
  const isAuth = useSelector((state) => state.auth);

  const onSubmit = async (formData) => {
    const addBook = await MyAxios.post("/order", {
      accountID: isAuth.userID,
      formData,
      data,
    }).then((response) => {
      if (response.data.message) {
        alert(response.data.message);
      }
    });
    return addBook;
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
          const { name, phone, city, address } = response.data;
          reset({
            name: name,
            phone: phone,
            city: city,
            address: address,
          });
        }
      });
    if (isAuth.user) {
      getUserData(isAuth.userID);
    }
  }, [isAuth, reset]);

  return (
    <>
      <div className="col-span-1 xl:col-span-2">
        <div className="w-full bg-white">
          <div className="p-8 border-b border-solid border-gray-200">
            <p className="text-lg font-semibold">Địa chỉ giao hàng</p>
            <div className="pt-5">
              <p className="font-medium mb-2">Họ tên</p>
              <input
                type="text"
                placeholder={"name"}
                {...register("name", { required: true })}
                className={`${INPUT_FIELD}`}
              />
            </div>

            <div className="pt-5">
              <p className="font-medium mb-2">Điện thoại</p>
              <input
                type="number"
                placeholder={"phone"}
                {...register("phone", { required: true })}
                className={`${INPUT_FIELD}`}
              />
            </div>

            <div className="pt-5">
              <p className="font-medium mb-2">Thành phố</p>
              <input
                type="text"
                placeholder={"city"}
                {...register("city", { required: true })}
                className={`${INPUT_FIELD}`}
              />
            </div>

            <div className="pt-5">
              <p className="font-medium mb-2">Địa chỉ</p>
              <input
                type="text"
                placeholder={"address"}
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
                {...register("note")}
                className="w-full focus:outline-none border border-gray-200 p-4"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-1">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full bg-white">
            <div className="border border-solid p-8">
              <p className="font-medium">Sản phẩm</p>
              {data.map((items) => {
                return (
                  <BookItem
                    key={items.id}
                    name={items.name}
                    qty={items.qty}
                    price={items.price}
                  />
                );
              })}
            </div>
            <div className="border border-solid p-8">
              <p className="font-medium">Đơn hàng</p>
              <div className="text-sm pt-5 flex justify-between">
                <p>Tổng phụ</p>
                <p>{total}</p>
              </div>

              <div className="text-sm pt-5 flex justify-between">
                <p>Vận chuyển</p>
                <p>Miễn phí</p>
              </div>
            </div>

            <div
              className="border border-solid p-8 flex flex-col"
              {...register("shipping", { required: true })}
            >
              <p className="font-medium">Vận chuyển</p>
              <label className="text-sm pt-5 flex items-center">
                <input
                  type="radio"
                  name="shipping"
                  className="mr-4"
                  value="Giao hàng nhanh"
                />
                Giao hàng nhanh
              </label>
              <label className="text-sm pt-5 flex items-center">
                <input
                  type="radio"
                  name="shipping"
                  className="mr-4"
                  value="Giao hàng tiết kiệm"
                />
                Giao hàng tiết kiệm
              </label>
              <label className="text-sm pt-5 flex items-center">
                <input
                  type="radio"
                  name="shipping"
                  className="mr-4"
                  value="Viettel Post"
                />
                Viettel Post
              </label>
            </div>

            <div className="border border-solid p-8">
              <p className="font-medium">Mã giảm giá</p>
              <input
                type="text"
                {...register("saleCode")}
                className={`${INPUT_FIELD} mt-5`}
              />
              <p className="text-sm pt-5">Check mã</p>
            </div>
            <div className="border border-solid p-8">
              <p className="font-medium">Tổng cộng</p>
              <p className="text-lg pt-5">{total}</p>
            </div>

            <div
              className="border border-solid p-8 flex flex-col"
              {...register("paymentMethod", { required: true })}
            >
              <p className="font-medium">Hình thức thanh toán</p>
              <label className="text-sm pt-5 flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  className="mr-4"
                  value="Chuyển khoản ngân hàng"
                />
                Chuyển khoản ngân hàng
              </label>
              <label className="text-sm pt-5 flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  className="mr-4"
                  value="Thẻ ATM đăng kí internet banking"
                />
                Thẻ ATM đăng kí internet banking
              </label>
              <label className="text-sm pt-5 flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  className="mr-4"
                  value="Thanh toán bằng thẻ quốc tế"
                />
                Thanh toán bằng thẻ quốc tế
              </label>
              <label className="text-sm pt-5 flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  className="mr-4"
                  value="Thanh toán khi nhận hàng"
                />
                Thanh toán khi nhận hàng
              </label>
            </div>
          </div>

          {/* <Link to="/receipt"> */}
          <button
            type="submit"
            className="h-12 w-full flex justify-center items-center bg-black mt-6"
          >
            <p className="text-white">Đặt hàng</p>
          </button>
          {/* </Link> */}
        </form>
      </div>
    </>
  );
}
