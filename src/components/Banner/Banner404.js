import React from "react"
import {
  Link,
} from "react-router-dom";

export default function Banner() {
  return (
    <div className="w-full bg-banner">
      <div className="container mx-auto w-full py-40 flex flex-col justify-between items-center">
        <p className="text-9xl font-bold pb-2">404</p>
        <p className="text-3xl pb-8">Không thể tìm thấy trang yêu cầu</p>
        <div className="w-40 h-12 flex justify-center items-center bg-black">
          <Link to="/"><p className="text-white">Trở về</p></Link>
        </div>
      </div>
    </div>
  )
}