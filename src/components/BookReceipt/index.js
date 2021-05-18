import React from "react";
import { vndFormatter } from "../../util/cartSum";

export default function BookReceipt({ orderData }) {
  console.log(orderData);
  const { orderID, total, date } = orderData;
  const { formData, data } = orderData.orderData;
  const newTotal = vndFormatter.format(total);

  const BookItem = ({ name, qty, price, discount }) => {
    let bookPrice = 0;
    bookPrice = (price * qty * (100 - discount)) / 100;
    return (
      <div className="text-sm pt-5 flex justify-between">
        <p className="w-6/12 truncate-3-lines">{name}</p>
        <p className="w-2/12 text-center">x {qty}</p>
        <p className="w-4/12 text-right">{vndFormatter.format(bookPrice)}</p>
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className="w-full bg-white">
        <div className="border border-solid p-8">
          <p className="font-medium text-center">
            Đơn đặt hàng của bạn đã được nhận
          </p>
          <div className="grid grid-cols-4 gap-10 pt-5">
            <div className="text-sm col-span-1">
              <p>Mã đơn hàng</p>
              <p className="font-medium">{orderID}</p>
            </div>

            <div className="text-sm col-span-1">
              <p>Ngày đặt</p>
              <p className="font-medium">{date}</p>
            </div>

            <div className="text-sm col-span-1">
              <p>Tổng cộng</p>
              <p className="font-medium">{newTotal}</p>
            </div>

            <div className="text-sm col-span-1">
              <p>Hình thức thanh toán</p>
              <p className="font-medium truncate-1-lines">
                {formData.paymentMethod}
              </p>
            </div>
          </div>
        </div>

        <div className="border border-solid p-8">
          <p className="font-medium">Sản phẩm</p>
          {data.map((items) => {
            return (
              <BookItem
                key={items.id}
                name={items.name}
                qty={items.qty}
                price={items.price}
                discount={items.discount}
              />
            );
          })}
        </div>
        <div className="border border-solid p-8">
          <p className="font-medium">Đơn hàng</p>
          <div className="text-sm pt-5 flex justify-between">
            <p>Tổng phụ</p>
            <p>{newTotal}</p>
          </div>
          <div className="text-sm pt-5 flex justify-between">
            <p>Vận chuyển</p>
            <p>Miễn phí</p>
          </div>
          <div className="text-sm pt-5 flex justify-between">
            <p>Hình thức thanh toán</p>
            <p>{formData.paymentMethod}</p>
          </div>
        </div>
        <div className="border border-solid p-8">
          <div className="text-sm flex justify-between items-center">
            <p className="font-medium">Tổng cộng</p>
            <p className="text-lg">{newTotal}</p>
          </div>
        </div>
        <div className="border border-solid p-8 grid grid-cols-2 gap-20">
          <div className="col-span-1">
            <p className="font-medium">Địa chỉ giao hàng</p>
            <p className="text-sm pt-5">{formData.address}</p>
            <p className="text-sm pt-5">{formData.city}</p>
            <p className="text-sm pt-5">{formData.note}</p>
          </div>

          <div className="col-span-1">
            <p className="font-medium">Thông tin người nhận</p>
            <p className="text-sm pt-5">{formData.name}</p>
            <p className="text-sm pt-5">{formData.phone}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
