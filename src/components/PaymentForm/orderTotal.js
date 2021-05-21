import React from "react";
// import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { mycss } from "../../util/css";

export default function OrderTotal() {
  const { register, getValues, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const { INPUT_FIELD } = mycss;

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full bg-white">
          <div className="border border-solid p-8">
            <p className="font-medium">Sản phẩm</p>
            <div className="text-sm pt-5 flex justify-between">
              <p className="w-6/12 truncate-3-lines">
                Thắc mắc nhỏ, ngỏ cùng em – Cảm xúc
              </p>
              <p className="w-2/12 text-center">x 1</p>
              <p className="w-4/12 text-right">185.500 VNĐ</p>
            </div>

            <div className="text-sm pt-5 flex justify-between">
              <p className="w-6/12 truncate-3-lines">
                Lối sống tối giản của người Nhật
              </p>
              <p className="w-2/12 text-center">x 1</p>
              <p className="w-4/12 text-right">56.000 VNĐ</p>
            </div>
          </div>
          <div className="border border-solid p-8">
            <p className="font-medium">Đơn hàng</p>
            <div className="text-sm pt-5 flex justify-between">
              <p>Tổng phụ</p>
              <p>185.500 VNĐ</p>
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
            <p
              className="text-sm pt-5"
              onClick={() => console.log(getValues("saleCode"))}
            >
              Check mã
            </p>
          </div>
          <div className="border border-solid p-8">
            <p className="font-medium">Tổng cộng</p>
            <p className="text-lg pt-5">185.500 VNĐ</p>
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

        <button
          type="submit"
          className="h-12 w-full flex justify-center items-center bg-black mt-6"
        >
          <p className="text-white">Đặt hàng</p>
        </button>
      </form>
    </React.Fragment>
  );
}
