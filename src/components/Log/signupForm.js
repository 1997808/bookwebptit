import React, { useState } from "react"
import {
  Link,
} from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("")

  return (
    <div className="w-full bg-white">
      <form className="p-8" onSubmit={() => { }}>
        <p className="text-2xl font-medium">Đăng ký</p>
        <div className="pt-5">
          <p className="font-medium mb-2">Tên đăng nhập hoặc email</p>
          <input type="text" value={name} onChange={event => setName(event.target.value)} className="h-12 w-full focus:outline-none border border-gray-200 px-4" />
        </div>

        <div className="pt-5">
          <p className="font-medium mb-2">Mật khẩu</p>
          <input type="text" value={name} onChange={event => setName(event.target.value)} className="h-12 w-full focus:outline-none border border-gray-200 px-4" />
        </div>

        <div className="pt-5">
          <p className="font-medium mb-2">Xác nhận mật khẩu</p>
          <input type="text" value={name} onChange={event => setName(event.target.value)} className="h-12 w-full focus:outline-none border border-gray-200 px-4" />
        </div>

        <button type="submit" value="Submit" className="h-12 w-full flex justify-center items-center bg-black mt-6">
          <p className="text-white">Đăng ký</p>
        </button>

        <button type="button" className="h-12 w-full flex justify-center items-center border border-black mt-6">
          <p>Đăng nhập</p>
        </button>
      </form>
    </div>
  )
}