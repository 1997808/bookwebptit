import React from "react"
import {
  Link,
} from "react-router-dom";

{/* <Link to="/topics">Topics</Link> */ }

export default function CartTotal() {
  return (
    <React.Fragment>
      <div className="w-full bg-white">
        <div className="border border-solid p-8">
          <p className="font-medium">Đơn hàng</p>
          <p className="text-sm pt-5">Tổng phụ</p>
          <p className="text-sm pt-5">Vận chuyển</p>
        </div>
        <div className="border border-solid p-8">
          <p className="font-medium">Vận chuyển</p>
          <p className="text-sm pt-5">Giao hàng nhanh</p>
          <p className="text-sm pt-5">Giao hàng tiết kiệm</p>
          <p className="text-sm pt-5">Viettel Post</p>
          <p className="text-sm pt-5">Chọn địa chỉ</p>
        </div>
        <div className="border border-solid p-8">
          <p className="font-medium">Mã giảm giá</p>
          <p className="text-sm pt-5">Input</p>
          <p className="text-sm pt-5">Check mã</p>
        </div>
        <div className="border border-solid p-8">
          <p className="font-medium">Tổng cộng</p>
          <p className="text-sm pt-5">185.500 VNĐ</p>
        </div>
      </div >

      <div className="h-12 w-full flex justify-center items-center bg-black mt-6">
        <p className="text-white">Tiến hành thanh toán</p>
      </div>
    </React.Fragment>
  )
}