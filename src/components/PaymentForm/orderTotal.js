import React from "react"
import {
  Link,
} from "react-router-dom";

{/* <Link to="/topics">Topics</Link> */ }

export default function OrderTotal() {
  return (
    <React.Fragment>
      <div className="w-full bg-white">
        <div className="border border-solid p-8">
          <p className="font-medium">Sản phẩm</p>
          <div className="text-sm pt-5 flex justify-between">
            <p className="w-6/12 truncate-3-lines">Thắc mắc nhỏ, ngỏ cùng em – Cảm xúc</p>
            <p className="w-2/12 text-center">x 1</p>
            <p className="w-4/12 text-right">185.500 VNĐ</p>
          </div>

          <div className="text-sm pt-5 flex justify-between">
            <p className="w-6/12 truncate-3-lines">Lối sống tối giản của người Nhật</p>
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
          <p className="text-lg pt-5">185.500 VNĐ</p>
        </div>

        <div className="border border-solid p-8">
          <p className="font-medium">Hình thức thanh toán</p>
          <p className="text-sm pt-5">Chuyển khoản ngân hàng</p>
          <p className="text-sm pt-5">Thẻ ATM đăng kí internet banking</p>
          <p className="text-sm pt-5">Thanh toán bằng thẻ quốc tế</p>
          <p className="text-sm pt-5">Thanh toán khi nhận hàng</p>
        </div>
      </div >

      <Link to="/receipt">
        <button type="submit" value="Submit" className="h-12 w-full flex justify-center items-center bg-black mt-6">
          <p className="text-white">Đặt hàng</p>
        </button>
      </Link>
    </React.Fragment>
  )
}