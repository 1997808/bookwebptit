import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { mycss } from "../../util/css";
import { CartSum, vndFormatter } from "../../util/cartSum";

export default function CartTotal({ data }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const { INPUT_FIELD } = mycss;

  let total = vndFormatter.format(CartSum(data));

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full bg-white">
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

          <div className="border border-solid p-8">
            <p className="font-medium">Mã giảm giá</p>
            <input
              type="text"
              {...register("saleCode", { required: true })}
              className={`${INPUT_FIELD} mt-5`}
            />
            <p className="text-sm pt-5">Check mã</p>
          </div>
          <div className="border border-solid p-8">
            <p className="font-medium">Tổng cộng</p>
            <p className="text-lg pt-5">{total}</p>
          </div>
        </div>

        <Link to="/payment">
          <button
            type="submit"
            className="h-12 w-full flex justify-center items-center bg-black mt-6 focus:outline-none"
          >
            <p className="text-white">Tiến hành thanh toán</p>
          </button>
        </Link>
      </form>
    </React.Fragment>
  );
}
