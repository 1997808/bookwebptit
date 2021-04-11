import React from "react"
import {
  Link,
} from "react-router-dom";
import book from '../../images/bannerBook.png';

export default function Banner() {
  return (
    <div className="w-full bg-banner">
      <div className="container mx-auto w-full py-40 flex justify-between items-center">
        <div className="left-side">
          <p className="text-sm text-gray-400 pb-2">BIÊN TẬP VIÊN BẦU CHỌN</p>
          <p className="text-5xl pb-2">Sách nổi bật của</p>
          <p className="text-5xl font-bold pb-4">Năm 2020</p>
          <Link to="/categories">
            <div className="w-40 h-12 flex justify-center items-center bg-black">
              <p className="text-white">Xem thêm</p>
            </div>
          </Link>
        </div>
        <div className="right-side flex items-center">
          <div className="h-80 p-2 flex items-center">
            <img src={book} alt="logo" className="h-full" />
          </div>
        </div>
      </div>
    </div>
  )
}