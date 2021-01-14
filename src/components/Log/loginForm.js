import React, { useState } from "react"
import {
  Link,
} from "react-router-dom";

export default function Login() {
  const [name, setName] = useState("")

  return (
    <div className="w-full bg-white">
      <form className="p-8" onSubmit={() => { }}>
        <p className="text-2xl font-medium">Đăng nhập</p>
        <div className="pt-5">
          <p className="font-medium mb-2">Tên đăng nhập hoặc email</p>
          <input type="text" value={name} onChange={event => setName(event.target.value)} className="h-12 w-full focus:outline-none border border-gray-200 px-4" />
        </div>

        <div className="pt-5">
          <p className="font-medium mb-2">Mật khẩu</p>
          <input type="text" value={name} onChange={event => setName(event.target.value)} className="h-12 w-full focus:outline-none border border-gray-200 px-4" />
        </div>

        <div className="pt-5 flex justify-between items-center w-full">
          <div className="flex items-center">
            <input type="checkbox" id="remember" name="remember" value="login" />
            <p className="text-sm text-gray-500 pl-2">Ghi nhớ đăng nhập</p>
          </div>
          <p className="font-medium text-right">Quên mật khẩu?</p>
        </div>

        <button type="submit" value="Submit" className="h-12 w-full flex justify-center items-center bg-black mt-6">
          <p className="text-white">Đăng nhập</p>
        </button>

        <Link to="/signup">
          <button type="button" className="h-12 w-full flex justify-center items-center border border-black mt-6">
            <p>Đăng kí</p>
          </button>
        </Link>
      </form>
    </div>
  )
}