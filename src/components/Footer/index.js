import React from "react"
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import Logo from './logo.svg';

{/* <Link to="/topics">Topics</Link> */ }

export default function Footer() {
  return (
    <div className="container mx-auto w-full pt-20 pb-16">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-3">
          <img src={Logo} alt="logo" />
          <p className="text-sm pt-5">Chăm sóc khách hàng: 1900-6035</p>
          <p className="text-sm pt-5">Hỗ trợ khách hàng: hotro@bookworm.vn</p>
          <p className="text-sm pt-5">Báo lỗi bảo mật: security@bookworm.vn</p>
        </div>

        <div className="col-span-9 grid grid-cols-4 gap-4">
          <div className="col-span-1">
            <p className="text-lg font-medium pb-0.5">Về chúng tôi</p>
            <p className="text-sm pt-5">Giới thiệu</p>
            <p className="text-sm pt-5">Liên hệ</p>
            <p className="text-sm pt-5">Hợp tác</p>
            <p className="text-sm pt-5">Tuyển dụng</p>
          </div>

          <div className="col-span-1">
            <p className="text-lg font-medium pb-0.5">Hỗ trợ khách hàng</p>
            <p className="text-sm pt-5">Câu hỏi thường gặp</p>
            <p className="text-sm pt-5">Gửi yêu cầu hỗ trợ</p>
            <p className="text-sm pt-5">Hướng dẫn đặt hàng</p>
            <p className="text-sm pt-5">Phường thức vận chuyển</p>
            <p className="text-sm pt-5">Báo lỗi bảo mật</p>
          </div>

          <div className="col-span-1">
            <p className="text-lg font-medium pb-0.5">Chính sách</p>
            <p className="text-sm pt-5">Chính sách đổi trả</p>
            <p className="text-sm pt-5">Chính sách bảo mật</p>
            <p className="text-sm pt-5">Chính sách thanh toán</p>
          </div>

          <div className="col-span-1">
            <p className="text-lg font-medium pb-0.5">Danh mục</p>
            <p className="text-sm pt-5">Văn học</p>
            <p className="text-sm pt-5">Kỹ năng sống</p>
            <p className="text-sm pt-5">Giáo dục</p>
            <p className="text-sm pt-5">Tiểu thuyết</p>
            <p className="text-sm pt-5">Khác</p>
          </div>
        </div>
      </div>
    </div >
  )
}